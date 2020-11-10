<template>
    <div class="results-matches">
        <div class="results-matches-header">
            <lamp-header title="Результаты"/>
        </div>
        <div class="results-matches-body">
            <a :href="'/ru/matches/' + match.match_id" class="results-matches-row" v-for="match in matches">
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
                <a href="/ru/results">Больше результатов</a>
            </div>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";

    export default {
        name: "ResultsMatches",
        components: {
            'lamp-header': LampHeader
        },
        data() {
            return {
                matches: []
            }
        },
        methods: {
            getResultMatches() {
                axios.post('/ru/main/results')
                    .then(({data}) => {
                        this.matches = data;
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
    .results-matches .results-matches-body {
        padding-top: .8vw;
    }

    .results-matches .results-matches-body .results-matches-row {
        margin-bottom: .3vw;
        display: block;
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
        color: darkred;
    }

    .results-matches .results-matches-body .results-matches-row .teams .score.green {
        color: darkgreen;
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
    }
</style>