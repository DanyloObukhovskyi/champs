<template>
    <div class="matches">
        <div class="d-flex align-items-end justify-content-between">
            <tense-select @selected="(select) => selectMatchesType = select"
                          :counts="counts"
                          :types="matchTypes"
                          :selected="selectMatchesType">
            </tense-select>
            <filters @setFilter="setFilter" v-bind="filters"/>
        </div>
        <div class="matches-body">
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
    </div>
</template>

<script>
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
        props: ['type'],
        data() {
            return {
                counts: {},
                selectMatchesType: 'live',
                matchTypes: {
                    past: 'Прошедшие',
                    live: 'Активные',
                    future: 'Будующие'
                },
                page: 1,
                load: false,
                perPage: 20,
                matches: [],
                filters: {
                    dateFrom: '21.02.2015',
                    dateTo: '21.02.2022',
                    teamA: null,
                    teamB: null
                },
                isLoadAll: false,
            }
        },
        watch: {
            selectMatchesType() {
                this.page = 1;
                this.matches = [];
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
                if (!this.load && !this.isLoadAll){
                    this.load = true;
                    matchService.getMatches(this.selectMatchesType, this.page, this.filters)
                        .then(data => {
                            this.counts = data.counts;

                            for (let key in data.matches){
                                const matches = data.matches[key];

                                const matchesDay = this.matches.find(
                                    match => match.date === matches.date
                                )
                                if (matchesDay !== undefined){
                                    this.matches = this.matches.map(match => {
                                        if (match.date === matches.date){
                                            for(let item of matches.items){
                                                match.items.push(item)
                                            }
                                        }
                                        return match;
                                    })
                                } else {
                                    this.matches.push(matches);
                                }
                            }
                            this.load = false;
                            this.page = this.page + 1;
                        })
                }
            },
            setPage(page) {
                this.page = page;
            },
            setFilter(data) {
                this.filters[data.filter] = data.value;
            },
            scrollEventTrigger() {
                const self = this;
                window.onscroll = () => {
                    const scrollable = $("body").height() - ($(window).innerHeight() + $(window).scrollTop());

                    if (scrollable <= 10) {
                        self.getMatches()
                    }
                }
            },
        },
        mounted() {
            this.getMatches();
            this.scrollEventTrigger();

            if (this.type && this.matchTypes[this.type]){
                this.selectMatchesType = this.type;
            }
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