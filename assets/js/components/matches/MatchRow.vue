<template>
    <div class="match-row">
        <a :href="matchUrl" class="match-wrapper w-100 d-flex align-items-center">
            <div class="event d-flex align-items-center">
                <div class="event-logo">
                    <img :src="match.event.image">
                </div>
                <div class="event-name">
                    {{match.event.name}}
                </div>
            </div>
            <div class="teams d-flex align-items-center">
                <div class="teamA w-50 d-flex justify-content-end align-items-center">
                    <div class="team-name">
                        {{match.teamA.title}}
                    </div>
                    <img :src="match.teamA.logo">
                </div>
                <div class="score" v-if="showScore" :class="getScoreClass(match.teamA.score, match.teamB.score)">
                    {{match.teamA.score}}
                </div>
                <div class="vs">
                    <img src="/images/matches/vs.png">
                </div>
                <div class="score" v-if="showScore" :class="getScoreClass(match.teamB.score, match.teamA.score)">
                    {{match.teamB.score}}
                </div>
                <div class="teamB w-50 d-flex align-items-center">
                    <img :src="match.teamB.logo">
                    <div class="team-name">
                        {{match.teamB.title}}
                    </div>
                </div>
            </div>
            <div class="time d-flex justify-content-end" v-if="!match.isLive">
                <img src="/images/matches/time.svg">
                {{match.time}}
            </div>
            <div class="play" v-else>
                <div class="play-wrapper">
                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    import matchService from "../../services/MatchService";

    export default {
        name: "MatchRow",
        props: [
            'match',
            'showScore'
        ],
        computed: {
            matchUrl() {
                return matchService.getMatchUrl(this.match.match_id)
            }
        },
        methods: {
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
    }
</script>

<style scoped>
    .match-row {
        margin-bottom: .2vw;
        height: 6vw;
        background: url(/images/matches/matchBackground.png);
        background-repeat: round;
        background-size: 100%;
    }

    .dark .match-row {
        background: url(/images/matches/matchBackgroundBlack.png);
        background-repeat: round;
        background-size: 100%;
    }

    .match-wrapper {
        height: 6vw;
    }

    .event {
        padding-left: .5vw;
        width: 15vw;
    }

    .event-logo img {
        width: 1.5vw;
        margin-right: .5vw;
    }

    .event-name {
        font-size: .9vw;
        color: #5c6b79;
    }

    .teams {
        width: 32vw;
    }

    .teams .score {
        color: white;
        padding: 0 .5vw;
        font-style: italic;
        font-size: 2vw;
        font-weight: 600;
    }

    .teamA img {
        margin-left: 1vw;
    }

    .teamB img {
        margin-right: 1vw;
    }

    .teamA img, .teamB img {
        width: 2vw;
    }

    .team-name {
        color: aliceblue;
        font-size: 1.3vw;
    }

    .teamA .team-name {
        text-align: end;
    }

    .time {
        color: #5c6b79;
        width: 11vw;
        display: flex;
        justify-content: end;
        font-size: .8vw;
    }

    .play {
        width: 11vw;
        display: flex;
        justify-content: flex-end;
        font-size: .8vw;
    }

    .play .play-wrapper {
        background: rgb(255, 109, 29, 0.2);
        padding: .4vw .4vw .3vw .4vw;
        border-radius: 50%;
    }

    .play .play-wrapper i {
        font-size: 2vw;
        color: #ff6d1d;
    }

    .time img {
        margin-right: .5vw;
        width: .8vw;
    }

    .vs img {
        height: 4vw;
    }

    .teams .score.red {
        color: darkred;
    }

    .teams .score.green {
        color: darkgreen;
    }
</style>