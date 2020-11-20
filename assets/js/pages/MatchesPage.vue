<template>
    <div class="matches">
        <filters @setFilter="setFilter"
                 v-bind="filters"
                 :selected="selectMatchesType"
                 :types="matchTypes"
                 :counts="counts"
                 @selected="(selected) => selectMatchesType = selected">
        </filters>
        <div class="matches-body" v-if="!load">
            <div v-for="day in matches">
                <div class="date">
                    {{day.date}}
                </div>
                <match-row
                        :key="index"
                        :show-score="match.isLive || selectMatchesType === 'past'"
                        :match="match"
                        v-for="(match, index) in day.items">
                </match-row>
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
                container-class="matches-pagination">
        </paginate>
    </div>
</template>

<script>
    import '../../css/matches/matches-pagination.css'
    import Paginate from 'vuejs-paginate'
    import MatchRow from "../components/matches/MatchRow";
    import Loader from "../components/helpers/Loader";
    import TenseSelect from "../components/helpers/TenseSelect";
    import matchService from "../services/MatchService";
    import Filters from "../components/filters/Filters";

    export default {
        name: "MatchesPage",
        components: {
            TenseSelect,
            Filters,
            Loader,
            MatchRow,
            Paginate,
        },
        data() {
            return {
                counts: {},
                selectMatchesType: 'live',
                matchTypes: {
                    past: 'Прошедшие',
                    live: 'Активные',
                    future: 'Будующие'
                },
                load: false,
                page: 1,
                perPage: 20,
                matches: [],
                filters: {
                    dateFrom: '21.02.2015',
                    dateTo: '21.02.2022',
                    teamA: null,
                    teamB: null
                }
            }
        },
        watch: {
            selectMatchesType() {
                this.page = 1;
                this.getMatches();
            },
            page() {
                this.getMatches();
            },
            'filters.dateFrom': function () {
                this.getMatches();
            },
            'filters.dateTo': function () {
                this.getMatches();
            },
            'filters.teamA': function () {
                this.getMatches();
            },
            'filters.teamB': function () {
                this.getMatches();
            },
        },
        computed: {
            pagesCount() {
                return Math.ceil(this.counts[this.selectMatchesType] / this.perPage)
            },
            showPaginate() {
                return Number(this.counts[this.selectMatchesType]) > Number(this.perPage);
            }
        },
        methods: {
            getMatches() {
                this.load = true;

                matchService.getMatches(this.selectMatchesType, this.page, this.filters)
                    .then(data => {
                        this.matches = data.matches;
                        this.counts = data.counts;

                        if (data.limit !== null) {
                            this.perPage = data.limit
                        }
                        this.load = false;
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
            this.getMatches();
        }
    }
</script>

<style scoped>
    .matches {
        margin-bottom: 4vw;
    }

    .matches .title h3 {
        font-size: 2vw;
        text-align: center;
        color: black;
    }

    .dark .matches .title h3 {
        color: white;
    }

    .matches .matches-body .date {
        font-size: 2vw;
    }

    .dark .matches .matches-body .date {
        color: white;
    }
</style>