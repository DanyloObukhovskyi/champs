<template>
    <div class="match-row">
        <a :href="matchUrl" class="match-wrapper w-100 d-flex align-items-center">
            <div class="d-block" style="width: 80%;">
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
                    <template v-if="!isPast && !match.isLive && match.type !== 'live'">
                        <div class="score" v-if="showScore && match.teamA !== null" :class="getScoreClass(match.teamA.score, match.teamB.score)">
                            {{match.teamA.score}}
                        </div>
                        <div class="score" v-else-if="showScore">
                            0
                        </div>
                        <div class="vs_future">
    <!--                        <img src="/images/matches/vs.png">-->
                        </div>
                        <div class="score" v-if="showScore && match.teamB !== null" :class="getScoreClass(match.teamB.score, match.teamA.score)">
                            {{match.teamB.score}}
                        </div>
                        <div class="score" v-else-if="showScore">
                            0
                        </div>
                    </template>
                    <template v-else>
                        <div class="scores">
                            <div class="score" v-if="showScore && match.teamA !== null" :class="getScoreClass(match.teamA.score, match.teamB.score)">
                                {{match.teamA.score}}
                            </div>
                            <div class="score" v-else-if="showScore">
                                0
                            </div>
                            <div class="vs">
                                :
                            </div>
                            <div class="score" v-if="showScore && match.teamB !== null" :class="getScoreClass(match.teamB.score, match.teamA.score)">
                                {{match.teamB.score}}
                            </div>
                            <div class="score" v-else-if="showScore">
                                0
                            </div>
                        </div>
                    </template>
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
                <div class="event-block">

                </div>
                <div class="event d-flex align-items-center">
                    <div class="event-logo">
                        <img :src="match.event.image">
                    </div>
                    <div class="event-name">
                        {{match.event.name}}
                    </div>
                </div>
            </div>
            <div class="time-block">
            </div>
            <div class="time d-block" v-if="!match.streamTime || match.streamTime && match.type !== 'live'">
                <div>
                    <img src="/images/matches/time.svg">
                </div>
                <div>
                    {{match.time}}
                </div>
            </div>
            <div class="play" v-else>
                <div class="play-wrapper">
                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                </div>
                Прямая трансляция
            </div>
        </a>
    </div>
</template>

<script>
    import matchService from "../../services/MatchService";

    export default {
        name: "MatchRowMobile",
        props: {
            match: {
                default: null
            },
            showScore: {
                default: false
            },
            isPast: {
                default: false
            }
        },
        computed: {
            matchUrl() {
                return matchService.getMatchUrl(this.match.match_id, this.getSlug(this.match))
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
            getSlug(match) {
                try{
                    let team1 = this.getTitleUrl(match.teamA.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let team2 = this.getTitleUrl(match.teamB.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let event =  this.getTitleUrl(match.event.name)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let game = this.getTitleUrl(match.event.game.name)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let start_date = this.getTitleUrl(match.startedAtRu)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    return team1+'_vs_'+team2+'_'+event+'_'+game+'_'+start_date;
                } catch (e) {
                    return match.slug;
                }
            },
            getTitleUrl(title) {
                return title.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
                    function (all, ch, space, words, i) {
                        if (space || words) {
                            return space ? '_' : '';
                        }
                        var code = ch.charCodeAt(0),
                            index = code == 1025 || code == 1105 ? 0 :
                                code > 1071 ? code - 1071 : code - 1039,
                            t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                                'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                                'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                                'shch', '', 'y', '', 'e', 'yu', 'ya'
                            ];
                        return t[index];
                    });
            }
        },
    }
</script>

<style scoped>
    .match-row {
        margin-bottom: 0.75em;
        height: 15vw;
        background: url(/images/matches/matchBackground.png);
        background-repeat: round;
        background-size: 100%;
        moz-transition: all .1s ease-in-out;
        -o-transition: all .1s ease-in-out;
        -webkit-transition: all .1s ease-in-out;
        transition: all .1s ease-in-out;
    }

    .match-row:hover{
        margin: 0 -.3vw;
        margin-bottom: 0.75em;
    }

    .dark .match-row {
        background: url(/images/matches/matchBackgroundBlack.png);
        background-repeat: round;
        background-size: 100%;
    }

    .match-wrapper {
        height: 15vw;
        background: #292c2e;
    }

    .event {
        padding-left: .5vw;
        width: 100%;
        justify-content: center;
    }

    .event-logo img {
      width: 3.5vw;
      margin-right: .5vw;
      top: 0.5vw;
    }

    .event-name {
      font-size: 3vw;
      color: #5c6b79;
      top: 1vw;
    }

    .teams {
        width: 100%;
        margin-top: 3vw;
        height: 5vw;
    }

    .teams .score {
        color: white;
        padding: 0 .5vw;
        font-style: italic;
        font-size: 2vw;
        font-weight: 600;
    }

    .scores {
        display: flex;
        margin-left: 4vw;
        margin-right: 4vw;
    }

    .scores .score {
		color: white;
		padding: 0 .5vw;
		font-size: 4vw;
		font-weight: 600;
		font-style: unset;
    }

	.scores .vs {
		color: white;
		padding: 0;
		font-size: 4vw;
		font-weight: 600;
		font-style: unset;
		margin-left: -.3vw;
		margin-right: -.3vw;
    }

    .teamA img {
        margin-left: 1vw;
    }

    .teamB img {
        margin-right: 1vw;
    }

    .teamA img, .teamB img {
        width: 5.96vw;
        max-height: 4vh;
    }

    .team-name {
        color: aliceblue;
        font-size: 3.3vw;
    }

    .teamA .team-name {
        text-align: end;
    }

    .time {
        color: #5c6b79;
        font-size: 2.8vw;
        display: flex;
        justify-content: center;
        left: 8%;
    }

    .play {
        width: 19%;
        display: flex;
        justify-content: center;
        margin-right: .5vw;
        font-size: 1.8vw;
        align-items: center;
        color: #ff6d1d;
        padding-left: 3.5vw;
    }

    .play .play-wrapper {
        background: rgb(255, 109, 29, 0.2);
        padding: .4vw .4vw .3vw .4vw;
        border-radius: 50%;
        margin-right: .5vw;
    }

    .play .play-wrapper i {
        font-size: 3vw;
        color: #ff6d1d;
    }

    .time img {
        margin-right: .5vw;
        width: 4.8vw;
        left: 8%;
    }

    .vs {

    }
    .vs_future {
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        height: 4.5vw;
        width: 4.5vw;
        background: linear-gradient(
                0deg
                , rgba(255,181,132,1) 9%, rgba(160,67,170,0) 90%);
    }
    .vs_future:before {
        content: 'VS';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-weight: 700;
        font-size: 1.5vw;
        mix-blend-mode: screen;
        color: white;
    }
    .teams .score.red {
        color: #be1517;
    }

    .teams .score.green {
        color: #33cc66;
    }
    .time-block{
        background: #36383b;
        background-size: 100%;
        position: absolute;
        display: block;
        width: 20%;
        height: 100%;
        right: 0;
        clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
    }

    .event-block{
        background: #2f3234;
        width: 101%;
        height: 30%;
        position: absolute;
        top: 70%;
        clip-path: polygon(0 0, 100% 0, 98% 100%, 0% 100%);
    }
</style>