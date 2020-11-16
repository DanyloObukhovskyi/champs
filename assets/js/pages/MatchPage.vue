<template>
    <div class="match-view">
        <div class="match-header" v-if="!load && match !== null">
            <div class="teams">
                <div class="teamA">
                    <div class="team-title">
                        {{match.teamA.title}}
                    </div>
                    <div class="team-logo">
                        <img class="w-100" :src="match.teamA.logo" alt="">
                    </div>
                </div>
                <div class="score">
                    <span class="d-flex justify-content-center">
                         {{match.teamA.score}} : {{match.teamB.score}}
                    </span>
                    <div class="time d-flex justify-content-center">
                        <strong>
                            {{match.startedAt.time}}
                        </strong>
                    </div>
                    <div class="date">
                        {{match.startedAt.date}}
                    </div>
                </div>
                <div class="teamB">
                    <div class="team-logo">
                        <img class="w-100" :src="match.teamB.logo" alt="">
                    </div>
                    <div class="team-title">
                        {{match.teamB.title}}
                    </div>
                </div>
            </div>
            <div class="match-status">
                {{matchStatus}}
            </div>
            <div class="watch-stream" v-if="match.isLive">
                <div class="play">
                    <div class="caret" @click="showStreams = !showStreams">
                        <i class="fas fa-caret-right"></i>
                    </div>
                </div>
                <div>
                    Прямая трансляция
                </div>
            </div>
        </div>
        <div class="streams-viewer" v-if="!load && match !== null && showStreams">
            <div class="select-lang">
                <button
                        v-for="stream in match.streams"
                        @click="selectedStream = stream"
                        :class="{active: selectedStream === stream}"
                        class="stream-lang-btn">
                    {{stream.lang}}
                </button>
            </div>
            <div class="stream-block" v-if="selectedStream">
                <iframe :src="selectedStream.url" frameborder="0">
                </iframe>
            </div>
            <div class="close" @click="showStreams = false">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <loader v-if="load"/>
        </div>
        <div class="last-matches" v-if="!load && match !== null">
            <teams-last-matches :team-a="match.teamA" :team-b="match.teamB"/>
        </div>
        <div class="matches d-flex" v-if="!load && match !== null">
            <div class="col-4 pl-0" v-if="match.pickAndBans.length > 0">
                <match-maps-pick-and-ban :pick-and-bans="match.pickAndBans"/>
            </div>
            <div class="col-8 pr-0">
                <match-maps-statistics
                    :team-a="match.teamA"
                    :team-b="match.teamB"
                    :maps="maps">
                </match-maps-statistics>
            </div>
        </div>
        <match-statistics
            v-if="showStatistic"
            :team-a="match.teamA"
            :team-b="match.teamB">
        </match-statistics>
    </div>
</template>

<script>
    import Loader from "../components/helpers/Loader";
    import TeamsLastMatches from "../components/teams/TeamsLastMatches";
    import MatchMapsPickAndBan from "../components/maps/MatchMapsPickAndBan";
    import MatchMapsStatistics from "../components/maps/MatchMapsStatistics";
    import MatchStatistics from "../components/matches/MatchStatistics";

    export default {
        name: "MatchPage",
        props: [
            'matchId'
        ],
        components: {
            MatchStatistics,
            MatchMapsStatistics,
            MatchMapsPickAndBan,
            TeamsLastMatches,
            Loader
        },
        data() {
            return {
                match: null,
                maps: [],
                load: false,
                selectedStream: null,
                showStreams: false
            }
        },
        computed: {
            showStatistic(){
                return !this.load
                    && this.match !== null
                    && this.match.teamA.playerStatistics !== null
                    && this.match.teamB.playerStatistics !== null;
            },
            matchStatus(){
                let status = 'Матч завершен';
                if (this.match.isLive){
                    status = 'Матч идет'
                } else if(this.match.startedAt.timeStamp > (new Date().getTime() / 1000)){
                    status = 'Матч скоро начнется'
                }
                return status;
            }
        },
        methods: {
            getMatch() {
                this.load = true;
                axios.post('/ru/get/match/' + this.matchId)
                    .then(({data}) => {
                        this.match = data.match;
                        this.maps = data.maps;

                        this.load = false;
                    })
            },
        },
        mounted() {
            this.getMatch();
        }
    }
</script>

<style scoped>
    .match-header {
        margin-top: .5vw;
        padding-top: 3vw;
        padding-bottom: 5vw;
        background: rgb(251, 252, 252);
        background: -moz-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: -webkit-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfcfc", endColorstr="#c1c6ca", GradientType=1);
    }

    .dark .match-header{
        color: white;
        background: rgb(37,40,42);
        background: -moz-linear-gradient(90deg, rgba(37,40,42,1) 15%, rgba(61,65,70,1) 50%, rgba(37,40,42,1) 85%);
        background: -webkit-linear-gradient(90deg, rgba(37,40,42,1) 15%, rgba(61,65,70,1) 50%, rgba(37,40,42,1) 85%);
        background: linear-gradient(90deg, rgba(37,40,42,1) 15%, rgba(61,65,70,1) 50%, rgba(37,40,42,1) 85%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a",endColorstr="#25282a",GradientType=1);
    }

    .match-header .teams .teamA,
    .match-header .teams .teamB {
        width: 35vw;
    }

    .match-header .teams {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .match-header .teamA {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .match-header .teamB {
        display: flex;
        align-items: center;
    }

    .match-header .team-logo {
        background-color: #EFF0F0;
        width: 8vw;
        height: 8vw;
        padding: .5vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dark .match-header .team-logo{
        background-color: #35393e;
    }

    .match-header .score,
    .match-header .team-title {
        font-size: 1.8vw;
        padding: 1vw;
    }

    .watch-stream {
        margin-top: .5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #FF6D1D;
        font-size: 1vw;
    }

    .watch-stream .caret {
        background: #FF6D1D;
        width: 3vw;
        height: 3vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding-left: .25vw;
        padding-top: .05vw;
    }

    .watch-stream .caret i {
        color: white;
        font-size: 2vw;
        cursor: pointer;
    }

    .watch-stream .play {
        border-radius: 50%;
        background: rgba(255, 109, 29, .2);
        padding: .5vw;
    }

    .streams-viewer {
        background-color: white;
        margin-top: .5vw;
        padding:  0 10vw 2vw 10vw;
    }

    .dark .streams-viewer{
        background-color: #3b3f44;
    }

    .streams-viewer .select-lang {
        display: flex;
    }

    .streams-viewer .select-lang .stream-lang-btn {
        width: 100%;
        outline: none;
        border: unset;
        cursor: pointer;
        background: #EFF0F0;
        padding: .3vw 1.5vw;
        font-size: 1vw;
        margin: .1vw;
        border-bottom: .2vw solid #EFF0F0;
    }

    .dark .streams-viewer .select-lang .stream-lang-btn {
        color: white;
        background: #26292c;
        border-bottom: .2vw solid #26292c;
    }

    .streams-viewer .select-lang .stream-lang-btn.active {
        border-bottom: .2vw solid #FF6D1D;
    }

    .stream-block {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
    }

    .stream-block iframe {
        position: relative;
        width: 100%;
        height: 0;
        margin-right: .12vw;
        margin-left: .1vw;
        padding-bottom: 56.25%;
    }

    .streams-viewer .close {
        right: 0;
        position: absolute;
        top: 0;
        background: #EFF0F0;
        padding: .2vw .5vw;
        font-size: 1.5vw;
        margin: .1vw;
    }

    .dark .streams-viewer .close {
        color: white;
        background: #26292c;
    }

    .last-matches, .matches {
        margin-top: 1vw;
    }

    .score{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .score .date{
        font-size: .9vw;
    }

    .match-status{
        text-align: center;
        font-size: 1.5vw;
    }
</style>