<template>
    <div class="matches">
        <div class="col-9 p-0">
            <div class="matches-head">
                <div class="title">
                    <h3>
                        Матчи
                    </h3>
                </div>
                <div class="select-matches">
                    <button
                            :class="{active: selectMatchesType === index}"
                            @click="selectMatchesType = index"
                            v-for="(type, index) in matchTypes">
                        {{type}} ({{counts[index] ? counts[index]: 0}})
                    </button>
                </div>
            </div>
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
        <div class="col-3 p-0">
            <matches-filters @setFilter="setFilter" v-bind="filters"/>
        </div>
    </div>
</template>

<script>
    import '../../css/matches/matches-pagination.css'
    import Paginate from 'vuejs-paginate'
    import MatchRow from "../components/matches/MatchRow";
    import Loader from "../components/helpers/Loader";
    import MatchesFilters from "../components/matches/MatchesFilters";

    export default {
        name: "MatchesPage",
        components: {
            MatchesFilters,
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
            page(){
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
            pagesCount(){
                return Math.ceil(this.counts[this.selectMatchesType] / this.perPage)
            },
            showPaginate(){
                return Number(this.counts[this.selectMatchesType]) > Number(this.perPage);
            }
        },
        methods: {
            getMatches() {
                this.load = true;

                axios.post(`/ru/ajax/matches/${this.selectMatchesType}/${this.page}`, this.filters)
                    .then(({data}) => {
                        this.load = false;

                        this.matches = data.matches;
                        this.counts  = data.counts;

                        if (data.limit !== null){
                            this.perPage = data.limit
                        }
                    })
            },
            setPage(page){
                this.page = page;
            },
            setFilter(data){
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
        display: flex;
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

    .matches .select-matches {
        display: flex;
        justify-content: center;
    }

    .matches .select-matches button {
        outline: unset;
        color: black;
        border: .1vw solid #ff6d1d;
        font-size: 1vw;
        padding: 0 1.5vw;
        cursor: pointer;
        background: transparent;
    }

    .dark .matches .select-matches button {
        color: white;
    }

    .matches .select-matches button.active {
        background-color: #ff6d1d;
        color: white;
    }

    .matches .select-matches button:first-child {
        border-radius: .3vw 0 0 .3vw;
    }

    .matches .select-matches button:last-child {
        border-radius: 0 .3vw .3vw 0;
    }

    .matches .matches-body .date {
        font-size: 2vw;
    }

    .dark .matches .matches-body .date {
        color: white;
    }
</style>