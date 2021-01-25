<template>
    <div class="events">
        <div class="banners">
            <banner-slider/>
        </div>
        <div>
            <div class="d-flex align-items-end justify-content-between">
                <tense-select @selected="(select) => selectEventsType = select"
                              :counts="counts"
                              :types="eventsTypes"
                              :selected="selectEventsType">
                </tense-select>
                <filters @setFilter="setFilter" v-bind="filters"/>
            </div>
            <div class="events-body">
                <div class="events-wrapper d-flex row">
                    <div class="col-4" v-for="event in events">
                        <event-row :key="event.id" :event="event"/>
                    </div>
                </div>
            </div>
            <div class="w-100 d-flex justify-content-center">
                <loader v-if="load"/>
            </div>
            <paginate
                    v-if="showPaginate"
                    :page-count="pagesCount"
                    :click-handler="setPage"
                    prev-text="Prev"
                    next-text="Next"
                    container-class="pagination">
            </paginate>
        </div>
    </div>
</template>

<script>
    import eventService from "../services/EventService";
    import EventRow from "../components/events/EventRow";
    import Paginate from 'vuejs-paginate'
    import Filters from "../components/filters/Filters";
    import Loader from "../components/helpers/Loader";
    import TenseSelect from "../components/helpers/TenseSelect";

    export default {
        name: "EventsPage",
        components: {
            EventRow,
            Paginate,
            Filters,
            Loader,
            TenseSelect
        },
        data() {
            return {
                events: [],
                load: false,
                counts: {},
                selectEventsType: 'live',
                eventsTypes: {
                    past: 'Прошедшие',
                    live: 'Активные',
                    future: 'Будующие'
                },
                page: 1,
                perPage: 20,
                filters: {
                    dateFrom: '21.02.2015',
                    dateTo: '21.02.2022',
                    teamA: null,
                    teamB: null
                },
            }
        },
        watch: {
            selectEventsType() {
                this.getEvents()
            },
            page() {
                this.getEvents()
            },
            'filters.dateFrom': function () {
                this.getEvents();
            },
            'filters.dateTo': function () {
                this.getEvents();
            },
            'filters.teamA': function () {
                this.getEvents();
            },
            'filters.teamB': function () {
                this.getEvents();
            },
        },
        computed: {
            pagesCount() {
                return Math.ceil(this.counts[this.selectEventsType] / this.perPage)
            },
            showPaginate() {
                return Number(this.counts[this.selectEventsType]) > Number(this.perPage);
            }
        },
        methods: {
            getEvents() {
                this.load = true
                this.events = [];

                eventService.getEvents(this.selectEventsType, this.page, this.filters)
                    .then(data => {
                        this.events = data.events;
                        this.counts = data.counts;

                        if (data.limit !== null) {
                            this.perPage = data.limit
                        }
                        this.load = false
                    })
            },
            setPage(page) {
                this.page = page;
            },
            setFilter(data) {
                this.filters[data.filter] = data.value;
            },
        },
        mounted() {
            this.getEvents()
        }
    }
</script>

<style scoped>
    .events .banners {
        margin-bottom: 1vw;
    }

    .dark .events .title {
        color: white;
    }

    .events .events-head .title h3 {
        text-align: center;
    }

    .events {
        padding-bottom: 3vw;
    }
</style>