<template>
  <div>
    <div class="match-view ml-8 mr-8 p-0" v-if="!isMobile">
        <div class="match-header" v-if="!load && match !== null">
            <img class="image-header white" :src="imageHeader.white">
            <img class="image-header dark" :src="imageHeader.dark">
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
                    <span class="d-flex justify-content-center" v-if="!match.isLive && isFuture">
<!--                         <img class="vs" src="/images/matches/matchVs.png">-->
                        <div class="vs">

                        </div>
                    </span>
                    <span class="d-flex justify-content-center" v-else>
                        <span :class="getScoreClass(match.teamA.score, match.teamB.score)">
                            {{match.teamA.score}}
                        </span>
                        <span>&nbsp;:&nbsp;</span>
                        <span :class="getScoreClass(match.teamB.score, match.teamA.score)">
                            {{match.teamB.score}}
                        </span>
                    </span>
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
            <div class="d-flex justify-content-center" v-if="!match.isLive">
                <div class="match-status">
                    <div class="status" :class="isFuture ? 'future' : 'ended'">
                        {{ isFuture ? 'Матч скоро начнется' : 'Матч завершился'}}
                    </div>
                    <div class="date">
                        <i class="far fa-clock" aria-hidden="true"></i>
                        {{match.startedAt.date}} в {{match.startedAt.time}}
                    </div>
                </div>
            </div>
        </div>
        <stream-viewer
                v-if="!load && match !== null && showStreams"
                @hide="() => showStreams = false"
                :streams="match.streams">
        </stream-viewer>
        <div class="d-flex justify-content-center">
            <loader v-if="load"/>
        </div>
        <div class="last-matches" v-if="!load && match !== null">
            <teams-last-matches
                    :team-a="match.teamA"
                    :team-b="match.teamB"
                    :meeting-matches="match.meetingMatches">
            </teams-last-matches>
        </div>
        <div class="matches d-flex" v-if="!load && match !== null">
                <match-maps-pick-and-ban
                        class="col-4 pl-0"
                        v-if="match.pickAndBans.length > 0"
                        :pick-and-bans="match.pickAndBans"/>
                <match-maps-statistics
                        class="col-8 pr-0"
                        :team-a="match.teamA"
                        :team-b="match.teamB"
                        :maps="maps">
                </match-maps-statistics>
        </div>
        <match-statistics
                v-if="showStatistic"
                :team-a="match.teamA"
                :team-b="match.teamB">
        </match-statistics>
        <div class="comments">
            <match-comments
                    v-if="match !== null"
                    :comments-count="match.commentsCount"
                    :match-id="matchId"
                    :comments="comments"
                    @update="updateComments">
            </match-comments>
        </div>
    </div>
    <div class="mr-2 ml-2" v-else>
    <div class="match-view-mobile">
      <div class="match-header" v-if="!load && match !== null">
        <img class="image-header white" :src="imageHeader.white">
        <img class="image-header dark" :src="imageHeader.dark">
        <div class="teams">
          <div class="teamA">
            <div class="team-title" style="font-size: 100%">
              {{match.teamA.title}}
            </div>
            <div class="team-logo">
              <img class="w-100" :src="match.teamA.logo" alt="">
            </div>
          </div>
          <div class="score" style="font-size: 100%">
                    <span class="d-flex justify-content-center" v-if="!match.isLive && isFuture">
<!--                         <img class="vs" src="/images/matches/matchVs.png">-->
                        <div class="vs">

                        </div>
                    </span>
            <span class="d-flex justify-content-center" v-else>
                        <span :class="getScoreClass(match.teamA.score, match.teamB.score)">
                            {{match.teamA.score}}
                        </span>
                        <span>&nbsp;:&nbsp;</span>
                        <span :class="getScoreClass(match.teamB.score, match.teamA.score)">
                            {{match.teamB.score}}
                        </span>
                    </span>
          </div>
          <div class="teamB">
            <div class="team-logo">
              <img class="w-100" :src="match.teamB.logo" alt="">
            </div>
            <div class="team-title" style="font-size: 100%">
              {{match.teamB.title}}
            </div>
          </div>
        </div>
        <div class="watch-stream-mobile" v-if="match.isLive">
          <div class="play">
            <div class="caret" @click="showStreams = !showStreams">
              <i class="fas fa-caret-right"></i>
            </div>
          </div>
          <div>
            Прямая трансляция
          </div>
        </div>
        <div class="d-flex justify-content-center" v-if="!match.isLive">
          <div class="match-status">
            <div class="status" :class="isFuture ? 'future' : 'ended'" style="font-size: 75%">
              {{ isFuture ? 'Матч скоро начнется' : 'Матч завершился'}}
            </div>
            <div class="date">
              <i class="far fa-clock" aria-hidden="true"></i>
              {{match.startedAt.date}} в {{match.startedAt.time}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <stream-viewer
        v-if="!load && match !== null && showStreams"
        @hide="() => showStreams = false"
        :streams="match.streams">
    </stream-viewer>
    <div class="d-flex justify-content-center">
      <loader v-if="load"/>
    </div>
    <div class="last-matches" v-if="!load && match !== null">
      <teams-last-matches
          :team-a="match.teamA"
          :team-b="match.teamB"
          :meeting-matches="match.meetingMatches">
      </teams-last-matches>
    </div>
    <div class="matches d-block" v-if="!load && match !== null">
      <match-maps-pick-and-ban-mobile
          class="col-12 pl-0"
          v-if="match.pickAndBans.length > 0"
          :pick-and-bans="match.pickAndBans"/>
      <match-maps-statistics-mobile
          class="col-12 pr-0"
          :team-a="match.teamA"
          :team-b="match.teamB"
          :maps="maps">
      </match-maps-statistics-mobile>
    </div>
    <match-statistics-mobile
        v-if="showStatistic"
        :team-a="match.teamA"
        :team-b="match.teamB">
    </match-statistics-mobile>
    <div class="comments">
      <match-comments-mobile
          v-if="match !== null"
          :comments-count="match.commentsCount"
          :match-id="matchId"
          :comments="comments"
          @update="updateComments">
      </match-comments-mobile>
    </div>
    </div>
  </div>
</template>

<script>
    import Loader from "../components/helpers/Loader";
    import TeamsLastMatches from "../components/teams/TeamsLastMatches";
    import MatchMapsPickAndBan from "../components/maps/MatchMapsPickAndBan";
    import MatchMapsStatistics from "../components/maps/MatchMapsStatistics";
    import MatchStatistics from "../components/matches/MatchStatistics";
    import matchService from "../services/MatchService";
    import StreamViewer from "../components/streams/StreamViewer";
    import MatchComments from "../components/matches/MatchComments";
    import {mapGetters} from "vuex";
    import MatchMapsPickAndBanMobile from "../components/maps/MatchMapsPickAndBanMobile";
    import MatchMapsStatisticsMobile from "../components/maps/MatchMapsStatisticsMobile";
    import MatchStatisticsMobile from "../components/matches/MatchStatisticsMobile";
    import MatchCommentsMobile from "../components/matches/MatchCommentsMobile";

    export default {
        name: "MatchPage",
        props: [
            'matchId'
        ],
        components: {
            MatchCommentsMobile,
            MatchStatisticsMobile,
            MatchMapsStatisticsMobile,
            MatchMapsPickAndBanMobile,
            MatchComments,
            StreamViewer,
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
                showStreams: false,
                comments: [],
                commentsCount: 0
            }
        },
        computed: {
          ...mapGetters([
            'isMobile'
          ]),
            showStatistic() {
                return !this.load
                    && this.match !== null
                    && this.match.teamA.playerStatistics !== null
                    && this.match.teamB.playerStatistics !== null;
            },
            imageHeader() {
                let imageWhite = '/images/matches/matchHeader.png';
                let imageDark = '/images/matches/matchHeaderDark.png';

                if (this.match.isLive) {
                    imageWhite = '/images/matches/matchLiveHeader.png';
                    imageDark = '/images/matches/matchLiveHeaderDark.png';
                }
                return {
                    white: imageWhite,
                    dark: imageDark,
                }
            },
            isFuture() {
                return this.match.startedAt.timeStamp > (new Date().getTime() / 1000);
            }
        },
        methods: {
            getMatch() {
                this.load = true;

                matchService.getMatch(this.matchId)
                    .then(data => {
                        this.match = data.match;
                        this.comments = data.comments
                        this.maps = data.maps;

                        this.load = false;
                    })
            },
            updateComments(data) {
                this.comments = data.comments;
                this.match.commentsCount = data.commentsCount;
            },
            getScoreClass(scoreA, scoreB) {
                let className = '';
                if (Number(scoreA) > Number(scoreB)){
                    className = 'win';
                }
                if (Number(scoreA) < Number(scoreB)){
                    className = 'lose';
                }
                return className;
            }
        },
        mounted() {
            this.getMatch();
        }
    }
</script>

<style scoped>
    .match-header {
        margin-top: .5vw;
        padding-bottom: 4vw;
        background: rgb(251, 252, 252);
        background: -moz-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: -webkit-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfcfc", endColorstr="#c1c6ca", GradientType=1);
    }

    .match-header .image-header {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }

    .match-header .image-header.dark {
        display: none;
    }

    .dark .match-header .image-header.white {
        display: none;
    }

    .dark .match-header .image-header.dark {
        display: block;
    }

    .dark .match-header {
        color: white;
        background: rgb(37, 40, 42);
        background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        background: linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#25282a", GradientType=1);
    }

    .match-header .teams .teamA,
    .match-header .teams .teamB {
        width: 35vw;
    }

    .match-header .teams {
        padding-top: 3vw;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 25%;
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

    .dark .match-header .team-logo {
        background-color: #222527;
    }

    .match-header .score,
    .match-header .team-title {
        font-size: 1.8vw;
        padding: 1vw;
    }

    .watch-stream-mobile {
        margin-top: .5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #FF6D1D;
        font-size: 4vw;
    }

    .watch-stream-mobile .caret {
        background: #FF6D1D;
        width: 7vw;
        height: 7vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding-left: .25vw;
        padding-top: .05vw;
    }

    .watch-stream-mobile .caret i {
        color: white;
        font-size: 5vw;
        cursor: pointer;
    }

    .watch-stream-mobile .play {
        border-radius: 50%;
        background: rgba(255, 109, 29, .2);
        padding: .5vw;
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

    .last-matches, .matches {
        margin-top: 2.5vw;
    }

    .score {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .score .date {
        font-size: .9vw;
    }

    .match-status {
        clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
        padding: .5vw 2.5vw;
        background-color: #eff0f0;
        margin-top: 1vw;
    }

    .dark .match-status {
        background-color: #222527;
    }

    .match-status .status.future {
        font-size: 2vw;
        color: #28a745;
    }

    .match-status .status.ended {
        font-size: 2vw;
        color: #a2a4a5;
    }

    .match-status .date {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #5c6b79;
    }

    .match-status .date i {
        margin-right: .3vw;
        color: #b2b4b5;
    }

    .vs {
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        height: 5.5vw;
        width: 7.5vw;
        background: linear-gradient(
                0deg
                , rgba(255,181,132,1) 9%, rgba(160,67,170,0) 90%);
    }

    .vs:before {
        content: 'VS';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-weight: 700;
        font-size: 3vw;
        mix-blend-mode: screen;
    }

    .comments{
        margin-bottom: 3vw;
    }

    .win {
        color: #33cc66;
    }

    .lose {
        color: #be1517;
    }
    .match-view-mobile {
      margin-top: 20%;
    }
</style>