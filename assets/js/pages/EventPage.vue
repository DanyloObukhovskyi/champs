<template>
    <div class="event">
        <div class="event-head" v-if="event !== null && !load">
            <div class="banner">
                <div class="component d-flex justify-content-center ">
                    <div class="d-flex grid justify-content-center p-3 w-100"
                         :style="headerBackGround">
                        <div>
                            <div class="d-flex justify-content-center">
                                <img class="event-logo" @error="$event.target.style.display = 'none'"
                                     :src="`/uploads/images/${event.logo}`">
                            </div>
                            <h2 class="d-block title">
                                {{event.name}}
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="event-date d-flex justify-content-center ">
                    <div class="d-flex grid justify-content-around row w-100">
                        <div>
                            <strong>
                                Дата
                            </strong>
                            <div class="text-center grey">
                                {{startedAt}} {{endedAt}}
                            </div>
                        </div>
                        <div>
                            <strong>
                                Приз
                            </strong>
                            <div class="text-center grey">
                                {{event.prize}}
                            </div>
                        </div>
                        <div>
                            <strong>
                                Команды
                            </strong>
                            <div class="text-center grey">
                                {{event.commandsCount}}
                            </div>
                        </div>
                        <div>
                            <strong>
                                Локация
                            </strong>
                            <div class="text-center d-flex align-items-center grey">
                                <img class="flag-icon"
                                     :src="`/uploads/images/${event.flag.name}`"
                                     @error="$event.target.style.display = 'none'">
                                {{event.location}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="event-body" v-if="event !== null && !load">
            <div class="d-flex">
                <div class="col-9 event-matches">
                    <event-matches :matches="matches" v-if="Object.keys(matches).length > 0"/>
                </div>
                <div class="col-3 p-0">
                    <news-home :isOnePerRow="true"/>
                </div>
            </div>
            <div class="event-prize-distribution">
                <event-prize-distribution
                        :prize-distributions="prizeDistribution"
                        v-if="Object.keys(prizeDistribution).length > 0">
                </event-prize-distribution>
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

    export default {
        name: "EventPage",
        components: {
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
                return `background-image: url('/uploads/images/${this.event.imageHeader}')`
            },
            startedAt() {
                const date = new Date(this.event.startedAt);

                return `${this.event.startedAtRu} ${date.getFullYear()}`;
            },
            endedAt() {
                const date = new Date(this.event.endedAt);

                let endedAt = null;
                if (this.event.endedAt) {
                    endedAt = `- ${this.event.endedAtRu} ${date.getFullYear()}`;
                }
                return endedAt;
            },
            groupPlaysTransform() {
                const groupPlays = [];
                for (let group in this.groupPlays) {

                    const groupPlay = {
                        name: group,
                        teams: this.groupPlays[group],
                    }
                    groupPlays.push(groupPlay)
                }
                return groupPlays;
            }
        },
        methods: {
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

    .event .event-head .banner .title {
        font-family: sans-serif;
        font-weight: 600;
        font-size: 3vw;
        color: white;
        -webkit-text-stroke-width: .1vw;
        -webkit-text-stroke-color: #000000;
    }

    .event .event-head .banner .event-logo {
        width: 10vw;
    }

    .dark .event .event-head .banner .title {
        color: gray;
        -webkit-text-stroke-color: #35393e;
    }

    .event .event-head .banner .event-date {
        font-size: 1vw;
        color: black;
        padding: 1vw 0;
        background: rgb(251, 252, 252);
        background: -moz-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: -webkit-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfcfc", endColorstr="#c1c6ca", GradientType=1);
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

    .event .event-matches {
        padding: 0 1vw 0 0;
    }

    .event .event-prize-distribution {
        margin-top: 1vw;
    }

    .event .teams-lineups {
        margin-top: 1vw;
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