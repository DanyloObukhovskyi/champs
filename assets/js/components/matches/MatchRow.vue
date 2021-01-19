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
                <div class="teamA w-50 d-flex justify-content-end align-items-center" v-if="match.teamA">
                    <div class="team-name">
                        {{match.teamA.title}}
                    </div>
                    <img :src="match.teamA.logo">
                </div>
                <div class="teamA w-50 d-flex justify-content-end align-items-center" v-else>
                    <div class="team-name">
                        ???
                    </div>
                    <img src="/images/noLogo.png">
                </div>
                <div class="score" v-if="showScore && match.teamA !== null" :class="getScoreClass(match.teamA.score, match.teamB.score)">
                    {{match.teamA.score}}
                </div>
                <div class="score" v-else-if="showScore">
                    0
                </div>
                <div class="vs">
                    <img src="/images/matches/vs.png">
                </div>
                <div class="score" v-if="showScore && match.teamB !== null" :class="getScoreClass(match.teamB.score, match.teamA.score)">
                    {{match.teamB.score}}
                </div>
                <div class="score" v-else-if="showScore">
                    0
                </div>
                <div class="teamB w-50 d-flex align-items-center" v-if="match.teamB">
                    <img :src="match.teamB.logo">
                    <div class="team-name">
                        {{match.teamB.title}}
                    </div>
                </div>
                <div class="teamB w-50 d-flex align-items-center" v-else>
                    <img src="/images/noLogo.png">
                    <div class="team-name">
                        ???
                    </div>
                </div>
            </div>
            <div class="time d-flex" v-if="!match.isLive">
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
        moz-transition: all .1s ease-in-out;
        -o-transition: all .1s ease-in-out;
        -webkit-transition: all .1s ease-in-out;
        transition: all .1s ease-in-out;
    }

    .match-row:hover{
        height: 6.2vw;
        margin-left: -.3vw;
        margin-right: -.3vw;
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
        width: 19%;
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
        width: 61%;
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
        font-size: .8vw;
        width: 19%;
        display: flex;
        justify-content: center;
    }

    .play {
        width: 24%;
        display: flex;
        justify-content: center;
        padding-left: 10%;
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
        color: #be1517;
    }

    .teams .score.green {
        color: #33cc66;
    }
</style>