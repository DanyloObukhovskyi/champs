<template>
    <div class="upcoming-matches">
        <div class="upcoming-matches-header">
            <lamp-header title="Предстоящие матчи" :link="getMatchesUrl" link-description="Все предстоящие матчи">
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
            <match-row :key="index" :match="match" v-for="(match, index) in currentPage.items"/>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";
    import MatchRow from "./MatchRow";
    import matchService from "../../services/MatchService";

    export default {
        name: "UpcomingMatches",
        components: {
            MatchRow,
            LampHeader
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
            },
            getMatchesUrl() {
                return '/ru/matches/';
            },
        },
        methods: {
            getUpcomingMatches() {
                matchService.getUpcomingMatches()
                    .then(data => {
                        for (let timestamp in data) {
                            this.matches.push(data[timestamp]);
                        }
                    })
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
</style>