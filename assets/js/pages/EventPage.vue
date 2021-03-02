<template>
    <div class="event">
        <div class="event-head" v-if="event !== null && !load">
            <div class="banner">
                <div class="component d-flex justify-content-center ">
                    <div class="d-flex grid justify-content-center w-100 image-header"
                         :style="headerBackGround">
                        <div>
                            <h2 class="d-block title" :style="titleBackGround">
                                {{event.name}}
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="event-date d-flex justify-content-center ">
                    <div class="d-flex grid justify-content-around row w-100">
                        <div class="d-flex align-items-center">
                            <img src="/images/events/time.svg">
                            <div>
                                <strong class="grey">
                                    Дата
                                </strong>
                                <div class="text-center">
                                    {{startedAt}} {{endedAt}}
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <img src="/images/events/prize.svg">
                            <div>
                                <strong class="grey">
                                    Приз
                                </strong>
                                <div class="text-center">
                                    {{event.prize}}
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <img src="/images/events/teams.svg">
                            <div>
                                <strong  class="grey">
                                    Команды
                                </strong>
                                <div class="text-center">
                                    {{event.commandsCount}}
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <img src="/images/events/location.svg">
                            <div>
                                <strong class="grey">
                                    Локация
                                </strong>
                                <div class="text-center d-flex align-items-center">
                                    {{event.location}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="event-body" v-if="event !== null && !load">
            <div class="tournament-brackets">
                <event-tournaments-table :brackets="brackets"/>
            </div>
            <event-matches :matches="matches" v-if="Object.keys(matches).length > 0"/>
            <event-prize-distribution
                    :is-live="isLive"
                    :prize-distributions="prizeDistribution"
                    v-if="Object.keys(prizeDistribution).length > 0">
            </event-prize-distribution>
            <div class="event-news">
                <game-news game="cs"/>
            </div>
            <div class="d-flex teams-lineups">
                <event-team-lineups :teams="teamsLineups"/>
            </div>
        </div>
        <div class="d-flex justify-content-center" v-if="load">
            <loader/>
        </div>
    </div>
</template>

<script>
    import eventService from "../services/EventService";
    import Loader from "../components/helpers/Loader";
    import EventPrizeDistribution from "../components/events/EventPrizeDistribution";
    import EventMatches from "../components/events/EventMatches";
    import EventTeamLineups from "../components/events/EventTeamLineups";
    import EventTournamentsTable from "../components/events/EventTournamentsTable";
    import GameNews from "../components/news/GameNews";

    export default {
        name: "EventPage",
        components: {
            GameNews,
            EventTournamentsTable,
            EventTeamLineups,
            EventMatches,
            EventPrizeDistribution,
            Loader
        },
        props: [
            'id'
        ],
        data() {
            return {
                event: null,
                brackets: {},
                groupPlays: null,
                mapsPool: [],
                prizeDistribution: {},
                relatedEvents: [],
                teamsLineups: [],
                matches: [],
                load: false
            }
        },
        computed: {
            headerBackGround() {
                return {
                    'background-position': 'center',
                    'background-size': 'cover',
                    'background-image': `url('/uploads/images/${this.event.imageHeader}')`
                }
            },
            titleBackGround() {
                return `background-image: url('/uploads/images/${this.event.logo}')`
            },
            startedAt() {
                const {day, month, year} = this.getDate(this.event.startedAt);

                return `${day}.${month}.${year}`;
            },
            endedAt() {
                const {day, month, year} = this.getDate(this.event.endedAt);

                let endedAt = null;
                if (this.event.endedAt) {
                    endedAt = `- ${day}.${month}.${year}`;
                }
                return endedAt;
            },
            isLive() {
                let result = false;
                if (this.event.endedAt !== null) {
                    result = new Date(this.event.endedAt) > new Date();
                } else {
                    result = new Date(this.event.startedAt) > new Date();
                }
            }
        },
        methods: {
            getDate(date) {
                const dateFull = new Date(date);

                const day = Number(dateFull.getDate()) < 10 ? `0${dateFull.getDate()}` : dateFull.getDate();
                const month = Number(dateFull.getMonth() + 1) < 10 ? `0${dateFull.getMonth() + 1}` : dateFull.getMonth() + 1;

                return {
                    day,
                    month,
                    year: dateFull.getFullYear()
                }
            },
            getEvent() {
                this.load = true

                eventService.getEvent(this.id)
                    .then(data => {
                        this.event = data.event
                        this.brackets = data.brackets

                        this.groupPlays = data.groupPlays
                        this.matches = data.matches

                        this.mapsPool = data.mapsPool
                        this.prizeDistribution = data.prizeDistribution

                        this.relatedEvents = data.relatedEvents
                        this.teamsLineups = data.teamsLineups

                        this.load = false
                    })
            }
        },
        mounted() {
            this.getEvent()
        }

    }
</script>

<style scoped>
    .event {
        padding-bottom: 3vw;
    }

    .event .event-head .banner .component .grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-size: 100%;
    }

    .event .event-head .banner .image-header {
        background: white;
    }

    .dark .event .event-head .banner .image-header {
        background: #1E2123;
    }

    .event .event-head .banner .title {
        padding: 3.5vw 0;
        font-family: sans-serif;
        font-weight: 600;
        font-size: 3vw;
        color: white;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        -webkit-text-stroke-width: .1vw;
        -webkit-text-stroke-color: #000000;
    }

    .event .event-head .banner .event-date {
        font-size: 1vw;
        color: black;
        padding: 1vw 0;
        background-color: white;
    }

    .event .event-head .banner .event-date img {
        height: 2vw;
        width: 2vw;
        margin-right: .5vw;
    }

    .dark .event .event-head .banner .event-date {
        color: white;
        padding: 1vw 0;
        background: rgb(37, 40, 42);
        background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        background: linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#25282a", GradientType=1);
    }

    .event .event-head .banner .flag-icon {
        border: .1vw solid rgb(0, 0, 0);
        width: 1.5vw;
        margin-right: .2vw;
    }

    .grey {
        color: #5c6b79;
    }

    .event .event-body {
        padding: 1vw 0;
    }

    .event .event-body .groups-plays {
        display: flex;
        flex-wrap: wrap;
    }

    .event .teams-attending .margin:nth-child(1) {
        margin-right: .5vw;
    }

    .event .teams-attending .margin:nth-child(2) {
        margin-left: .5vw;
    }

    .event .event-news,
    .event .teams-lineups{
        margin-top: 3vw;
    }
</style>

<style>
    .event .event-body .groups-plays .group-play:nth-child(even) .group-play-head,
    .event .event-body .groups-plays .group-play:nth-child(even) .group-play-body {
        margin-left: .5vw;
    }

    .event .event-body .groups-plays .group-play:nth-child(odd) .group-play-head,
    .event .event-body .groups-plays .group-play:nth-child(odd) .group-play-body {
        margin-right: .5vw;
    }
</style>