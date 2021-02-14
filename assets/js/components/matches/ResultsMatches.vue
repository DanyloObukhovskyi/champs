<template>
    <div class="results-matches">
        <div class="results-matches-header">
            <lamp-header title="Результаты"/>
        </div>
        <div class="d-flex justify-content-center align-items-center p-5" v-if="load">
            <small-loader/>
        </div>
        <div class="results-matches-body" v-else>
            <a :href="'/ru/matches/' + match.match_id + '/' + match.slug" class="results-matches-row" v-for="match in matches">
                <div class="event">
                    <div>
                        <img :src="match.event.image">
                    </div>
                    {{match.event.name}}
                </div>
                <div class="teams">
                    <div class="teamA">
                        <div class="team-name">
                            <div class="flag">
                                <img :src="match.teamA.flag">
                            </div>
                            {{match.teamA.title}}
                        </div>
                        <div class="score" :class="getScoreClass(match.teamA.score, match.teamB.score)">
                            {{match.teamA.score}}
                        </div>
                    </div>
                    <div class="teamB">
                        <div class="team-name">
                            <div class="flag">
                                <img :src="match.teamB.flag">
                            </div>
                            {{match.teamB.title}}
                        </div>
                        <div class="score" :class="getScoreClass(match.teamB.score, match.teamA.score)">
                            {{match.teamB.score}}
                        </div>
                    </div>
                </div>
            </a>
            <div class="more">
                <a :href="matchesPage">Больше результатов</a>
            </div>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";
    import matchService from "../../services/MatchService";
    import SmallLoader from "../helpers/SmallLoader";

    export default {
        name: "ResultsMatches",
        components: {
            LampHeader,
            SmallLoader
        },
        data() {
            return {
                matches: [],
                load: true,
            }
        },
        computed: {
            matchesPage() {
                return matchService.matchesPage('past')
            }
        },
        methods: {
            getResultMatches() {
                matchService.getMainResults()
                    .then((data) => {
                        this.matches = data;
                        this.load = false;
                    })
            },
            getScoreClass(scoreA, scoreB) {
                let className;
                if (scoreA > scoreB) {
                    className = 'green';
                } else if (scoreA < scoreB) {
                    className = 'red';
                }
                return className;
            },
        },
        mounted() {
            this.getResultMatches();
        }
    }
</script>

<style scoped>
    @import '../../../css/animations.css';

    .results-matches .results-matches-body {
        padding-top: .8vw;
        -webkit-animation: animation-translate-right 1500ms linear both;
        animation: animation-translate-right 1500ms linear both;
    }

    .results-matches .results-matches-body .results-matches-row {
        margin-bottom: .3vw;
        display: block;
        moz-transition: all .1s ease-in-out;
        -o-transition: all .1s ease-in-out;
        -webkit-transition: all .1s ease-in-out;
        transition: all .1s ease-in-out;
    }

    .results-matches .results-matches-body .results-matches-row:hover {
        margin-right: -.2vw;
        margin-left: -.2vw;
    }

    .results-matches .results-matches-body .results-matches-row .event {
        display: flex;
        align-items: center;
        font-size: .8vw;
        background: #1e2123;
        color: #94acc0;
        padding-left: .7vw;
        padding-top: .2vw;
        padding-bottom: .3vw;
    }

    .results-matches .results-matches-body .results-matches-row .event img {
        width: 1.3vw;
        margin-right: .3vw;

    }

    .results-matches .results-matches-body .results-matches-row .teams {
        background: linear-gradient(270deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
        padding: .3vw 1vw .6vw;
    }

    .dark .results-matches .results-matches-body .results-matches-row .teams {
        background: rgb(61, 65, 70);
        background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 59%);
        background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 59%);
        background: linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 59%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);
    }

    .results-matches .results-matches-body .results-matches-row .teams .flag img {
        height: 1.4vw;
    }

    .results-matches .results-matches-body .results-matches-row .teams .flag {
        margin-right: .3vw;
    }

    .results-matches .results-matches-body .results-matches-row .teams .team-name {
        font-size: 1vw;
        display: flex;
        color: black;
    }

    .dark .results-matches .results-matches-body .results-matches-row .teams .team-name {
        color: white;
    }

    .results-matches .results-matches-body .results-matches-row .teams .teamA {
        margin-bottom: .3vw;
    }

    .results-matches .results-matches-body .results-matches-row .teams .teamA, .teams .teamB {
        display: flex;
        justify-content: space-between;
    }

    .results-matches .results-matches-body .results-matches-row .teams .score.red {
        color: #be1517;
    }

    .results-matches .results-matches-body .results-matches-row .teams .score.green {
        color: #33cc66;
    }

    .results-matches .results-matches-body .more {
        background: #1e2123;
        display: flex;
        justify-content: center;
        padding-top: .3vw;
        padding-bottom: .4vw;

    }

    .results-matches .results-matches-body .more a {
        color: #ff6d1d;
        moz-transition: all .1s ease-in-out;
        -o-transition: all .1s ease-in-out;
        -webkit-transition: all .1s ease-in-out;
        transition: all .1s ease-in-out;
    }

    .results-matches .results-matches-body .more a:hover {
        color: white;
    }
</style>