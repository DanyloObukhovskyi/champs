<template>
    <div class="upcoming-matches">
        <div class="upcoming-matches-header">
            <lamp-header-mobile title="Расписание матчей">
                <div class="controls" v-if="currentPage !== undefined">
                    <div class="back">
                        <img src="/images/back.svg" @click="page--" v-if="page !== 0">
                    </div>
                    <div class="date">
                        {{currentPage.date}}
                    </div>
                    <div class="next">
                        <img src="/images/next.svg" @click="page++" v-if="page < eventMatches.length - 1">
                    </div>
                </div>
            </lamp-header-mobile>
        </div>
        <div class="upcoming-matches-body" v-if="currentPage !== undefined">
            <match-row-mobile :key="index" :match="match" v-for="(match, index) in currentPage.items"/>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";
    import MatchRow from "../matches/MatchRow";
    import LampHeaderMobile from "../helpers/LampHeaderMobile";
    import MatchRowMobile from "../matches/MatchRowMobile";

    export default {
        name: "EventMatchesMobile",
        props: [
            'matches'
        ],
        components: {
            MatchRowMobile,
            LampHeaderMobile,
            MatchRow,
            LampHeader
        },
        data() {
            return {
                page: 0,
            }
        },
        computed: {
            currentPage() {
                return this.eventMatches[this.page];
            },
            eventMatches() {
                const eventMatches = [];

                for (let timestamp in this.matches) {
                    eventMatches.push(this.matches[timestamp]);
                }
                return eventMatches.reverse();
            }
        }
    }
</script>

<style scoped>
    .upcoming-matches {
        margin-top: 3vw;
    }

    .controls {
        margin-right: 10vw;
        display: flex;
        align-items: center;
        margin-left: 2vw;
    }

    .controls img,
    .controls .next,
    .controls .back {
        width: 2vw;
        cursor: pointer;
    }

    .controls .date {
        color: white;
        font-size: 3vw;
        margin-left: .5vw;
        margin-right: .5vw;
    }

    .upcoming-matches-body {
        padding-top: .8vw;
    }
</style>