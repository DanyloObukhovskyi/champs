<template>
    <div class="upcoming-matches">
        <div class="upcoming-matches-header">
            <lamp-header title="Предстоящие матчи" link="/ru/news" link-description="Все предстоящие матчи">
                <div class="controls" v-if="currentPage !== undefined">
                    <div class="back">
                        <img src="/images/back.svg" @click="page--" v-if="page !== 0">
                    </div>
                    <div class="date">
                        {{currentPage.date}}
                    </div>
                    <div class="next">
                        <img src="/images/next.svg" @click="page++" v-if="page < matches.length - 1">
                    </div>
                </div>
            </lamp-header>
        </div>
        <div class="upcoming-matches-body" v-if="currentPage !== undefined">
            <div class="upcoming-match-row" v-for="match in currentPage.items">
                <a :href="'/ru/matches/' + match.match_id" class="upcoming-match-wrapper w-100 d-flex align-items-center">
                    <div class="event d-flex align-items-center">
                        <div class="event-logo">
                            <img :src="match.event.image" alt="">
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
                            <img :src="match.teamA.logo" alt="">
                        </div>
                        <div class="vs">
                            <img src="/images/matches/vs.png" alt="">
                        </div>
                        <div class="teamB w-50 d-flex align-items-center">
                            <img :src="match.teamB.logo" alt="">
                            <div class="team-name">
                                {{match.teamB.title}}
                            </div>
                        </div>
                    </div>
                    <div class="time d-flex justify-content-end">
                        <img src="/images/matches/time.svg" alt="">
                        {{match.time}}
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";

    export default {
        name: "UpcomingMatches",
        components: {
            'lamp-header': LampHeader
        },
        data() {
            return {
                matches: [],
                page: 0,
            }
        },
        computed: {
            currentPage() {
                return this.matches[this.page];
            }
        },
        methods: {
            getUpcomingMatches() {
                axios.post('/ru/main/matches')
                    .then(({data}) => {
                        for (let timestamp in data) {
                            this.matches.push(data[timestamp]);
                        }
                    })
            },
            getMatchUrl(id) {
                return '/ru/matches/' + id;
            },
        },
        mounted() {
            this.getUpcomingMatches()
        }
    }
</script>

<style scoped>
    .controls {
        margin-right: 20vw;
        display: flex;
        align-items: center;
    }

    .controls img,
    .controls .next,
    .controls .back {
        width: 1vw;
        cursor: pointer;
    }

    .controls .date {
        color: white;
        font-size: 1.1vw;
        margin-left: .5vw;
        margin-right: .5vw;
    }

    .upcoming-matches-body {
        padding-top: .8vw;
    }

    .upcoming-match-row {
        margin-bottom: .2vw;
        height: 6vw;
        background: url(/images/matches/matchBackground.png);
        background-repeat: round;
        background-size: 100%;
    }

    .dark .upcoming-match-row{
        background: url(/images/matches/matchBackgroundBlack.png);
        background-repeat: round;
        background-size: 100%;
    }

    .upcoming-match-wrapper {
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

    .time {
        color: #5c6b79;
        width: 11vw;
        display: flex;
        justify-content: end;
        font-size: .8vw;
    }

    .time img {
        margin-right: .5vw;
        width: .8vw;
    }

    .vs img {
        height: 4vw;
    }
</style>