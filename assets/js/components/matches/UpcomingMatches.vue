<template>
    <div class="upcoming-matches">
        <div class="upcoming-matches-header">
            <lamp-header title="Предстоящие матчи" :link="matchesUrl" link-description="Все предстоящие матчи">
                <div class="controls" v-if="dateRu !== null">
                    <div class="back">
                        <img src="/images/back.svg" @click="prev">
                    </div>
                    <div class="date">
                        {{dateRu}}
                    </div>
                    <div class="next">
                        <img src="/images/next.svg" @click="next">
                    </div>
                    <div class="calendar" @click="showCalendar = !showCalendar">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <calendar :date="dateString" @date="setDate" v-if="showCalendar"/>
                </div>
            </lamp-header>
        </div>
        <div class="d-flex justify-content-center align-items-center p-5" v-if="load">
            <small-loader/>
        </div>
        <div class="upcoming-matches-body" v-else>
            <match-row :key="index" :match="match" v-for="(match, index) in matches"/>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";
    import MatchRow from "./MatchRow";
    import matchService from "../../services/MatchService";
    import SmallLoader from "../helpers/SmallLoader";
    import Calendar from "../calendar/Calendar";

    export default {
        name: "UpcomingMatches",
        components: {
            MatchRow,
            LampHeader,
            SmallLoader,
            Calendar
        },
        data() {
            return {
                matches: [],
                date: null,
                dateRu: null,
                load: false,
                showCalendar: false,
            }
        },
        computed: {
            matchesUrl() {
                return matchService.matchesPage('future');
            },
            dateString() {
                const year = this.date.getFullYear();
                const month = this.date.getMonth();
                const day = this.date.getDate();

                return `${day}.${month + 1}.${year}`;
            }
        },
        methods: {
            getUpcomingMatches() {
                this.load = true;

                const year = this.date.getFullYear();
                const month = this.date.getMonth();
                const day = this.date.getDate();

                const date =  `${day}.${month + 1}.${year}`;

                matchService.getUpcomingMatches(date)
                    .then(data => {
                        this.matches = data.matches;
                        this.dateRu = data.dateRu;

                        this.load = false;
                    })
            },
            prev() {
                this.date.setDate(this.date.getDate() - 1);
                this.getUpcomingMatches();
            },
            next() {
                this.date.setDate(this.date.getDate() + 1);
                this.getUpcomingMatches();
            },
            setDate(dateString) {
                const date = dateString.split('.');
                const current = new Date();

                this.date.setDate(+Math.abs(date[0]));
                this.date.setMonth(+Math.abs(date[1]) - 1);
                this.date.setFullYear(+date[2])

                if (current <= this.date){
                    this.getUpcomingMatches();
                }
            }
        },
        created() {
            this.date = new Date();
            this.getUpcomingMatches()
        }
    }
</script>

<style scoped>
    @import '../../../css/animations.css';

    .upcoming-matches-body {
        -webkit-animation: animation-translate-left 1500ms linear both;
        animation: animation-translate-left 1500ms linear both;
    }

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

    .controls .calendar {
        margin-left: 1vw;
        font-size: 1.3vw;
        color: #e6e6e7;
        cursor: pointer;
    }

    .dark .controls .calendar {
        color: #58646f;
    }

    .upcoming-matches-body {
        padding-top: .8vw;
    }
</style>