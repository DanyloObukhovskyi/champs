<template>
    <div class="lives">
        <div class="align-items-center d-flex justify-content-between header">
            <div class="wrapper d-flex align-items-center">
                <div class="ellipse-wrapper">
                    <div class="ellipse-border-two">
                        <div class="ellipse-border">
                            <div class="ellipse"></div>
                        </div>
                    </div>
                </div>
                <div class="title">
                    Live матчи
                </div>
            </div>
            <div class="date-wrapper d-flex align-items-center" v-if="currentPage && matches.length > 0">
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
        </div>
        <div class="match-body" v-if="matches.length > 0">
            <div class="match-row d-flex" v-for="(match, index) in currentPage.items">
                <div class="match-event col-4 d-flex justify-content-center align-items-center">
                    <div class="event-logo">
                        <img :src="match.event.image" alt="">
                    </div>
                    <div class="event-name">
                        {{match.event.name}}
                    </div>
                </div>
                <div class="teams col-5 d-flex justify-content-center align-items-center">
                    <div class="teamA w-50 d-flex justify-content-end align-items-center">
                        <div class="team-name">
                            {{match.teamA.title}}
                        </div>
                        <img :src="match.teamA.logo" alt="">
                    </div>
                    <div class="score">
                        <span>{{match.teamA.score}}</span>
                        :
                        <span>{{match.teamB.score}}</span>
                    </div>
                    <div class="teamB w-50 d-flex align-items-center">
                        <img :src="match.teamB.logo" alt="">
                        <div class="team-name">
                            {{match.teamB.title}}
                        </div>
                    </div>
                </div>
                <div class="watch col-3 d-flex justify-content-center align-items-center">
                    <a :href="getMatchUrl(match.match_id)">Смотреть <i class="fas fa-caret-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "LiveMatches",
        data() {
            return {
                matches: [],
                page: 0,
            }
        },
        computed: {
            currentPage() {
                return this.matches[this.page]
            }
        },
        methods: {
            getLiveMatches() {
                axios.post('/ru/main/matches')
                    .then(({data}) => {
                        for (let timestamp in data) {
                            this.matches.push(data[timestamp]);
                        }
                    })
            },
            getMatchUrl(id){
                return '/ru/matches/' + id;
            },
        },
        mounted() {
            this.getLiveMatches()
        }
    }
</script>

<style scoped>
    .lives .header {
        height: 3vw;
        background: -moz-linear-gradient(180deg, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
        background: -o-linear-gradient(180deg, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
        background: -webkit-linear-gradient(180deg, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
        background: -webkit-gradient(linear, right top, left top, color-stop(-25%, rgba(248, 248, 248, 0.0)), color-stop(125%, rgba(248, 248, 248, 0.25))), #2d3135;
        background: -webkit-linear-gradient(right, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
        background: -moz-linear-gradient(right, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
        background: -o-linear-gradient(right, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
        background: linear-gradient(270deg, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
    }
    .dark .lives .header{
        background: #1e2123;
    }
    .dark .lives .header .title{
        color: #fe5050;
    }

    .lives .header .title {
        float: left;
        margin: 1px 0 0;
        width: auto;
        color: #ffffff;
        font-size: 1.5vw;
        font-weight: 500;
    }

    .lives .header .ellipse-wrapper {
        margin-left: 1.5vw;
        margin-right: 1vw;
    }

    .lives .header .ellipse-wrapper .ellipse-border-two {
        display: flex;
        align-items: center;
        position: relative;
        width: 1.6vw;
        height: 1.6vw;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: rgba(254, 80, 80, 0.1);
    }

    .lives .header .ellipse-wrapper .ellipse-border {
        display: flex;
        align-items: center;
        margin: 0 auto;
        position: relative;
        width: 1vw;
        height: 1vw;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: rgba(254, 80, 80, 0.25);
    }

    .lives .header .ellipse-wrapper .ellipse {
        height: .4vw;
        margin: 0 auto;
        width: .4vw;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 100%;
        background: #fe5050;
    }

    .lives .header .date-wrapper {
        margin-right: 1vw;
    }
    .lives .header .date-wrapper img,
    .lives .header .date-wrapper .next,
    .lives .header .date-wrapper .back {
        width: 1vw;
        cursor: pointer;
    }

    .lives .header .date-wrapper .date {
        color: white;
        margin-left: .5vw;
        margin-right: .5vw;
    }

    .lives .match-body .match-row {
        height: 3.5vw;
        border-top: .2vw solid #dadbdc;
        transition: background-color .3s ease-in-out;
        position: relative;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9InBvZGxvemhrYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMDAlIiB5MT0iNTAlIiB4Mj0iMCUiIHkyPSI1MCUiPgo8c3RvcCBvZmZzZXQ9Ii0yNSUiIHN0b3AtY29sb3I9IiMzZDQxNDYiIHN0b3Atb3BhY2l0eT0iMCIgLz4KPHN0b3Agb2Zmc2V0PSIxMS44NDA4MiUiIHN0b3AtY29sb3I9IiMzZDQxNDYiIHN0b3Atb3BhY2l0eT0iMCIgLz4KPHN0b3Agb2Zmc2V0PSI5NS4wMDczMjQlIiBzdG9wLWNvbG9yPSIjM2Q0MTQ2IiBzdG9wLW9wYWNpdHk9IjAuMjUiIC8+CjxzdG9wIG9mZnNldD0iMTI1JSIgc3RvcC1jb2xvcj0iIzNkNDE0NiIgc3RvcC1vcGFjaXR5PSIwLjI1IiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI3BvZGxvemhrYSkiIC8+PC9zdmc+), #ffffff;
        background: -moz-linear-gradient(180deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
        background: -o-linear-gradient(180deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
        background: -webkit-linear-gradient(180deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
        background: -webkit-gradient(linear, right top, left top, color-stop(-25%, rgba(61, 65, 70, 0.0)), color-stop(11.84082%, rgba(61, 65, 70, 0.0)), color-stop(95.007324%, rgba(61, 65, 70, 0.25)), color-stop(125%, rgba(61, 65, 70, 0.25))), #ffffff;
        background: -webkit-linear-gradient(right, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
        background: -moz-linear-gradient(right, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
        background: -o-linear-gradient(right, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
        background: linear-gradient(270deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
    }
    .dark .lives .match-body .match-row{
        transition: background-color .3s ease-in-out;
        border-top: .2vw solid #1e2123;
        background: rgb(57,58,59);
        background: rgb(47,50,52);
        background: -moz-linear-gradient(90deg, rgba(47,50,52,1) 24%, rgba(36,39,41,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(47,50,52,1) 24%, rgba(36,39,41,1) 100%);
        background: linear-gradient(90deg, rgba(47,50,52,1) 24%, rgba(36,39,41,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2f3234",endColorstr="#242729",GradientType=1);
    }

    .lives .match-body .match-row .match-event {
        padding-left: 1vw;
        font-size: .8vw;
        color: #5c6b79;
    }
    .dark .lives .match-body .match-row .match-event {
        color: #95adc1;
    }

    .lives .match-body .match-row .match-event img,
    .lives .match-body .match-row .teams img {
        height: 1.3vw;
    }

    .lives .match-body .match-row .match-event img {
        margin-right: .3vw;
    }

    .lives .match-body .match-row .teams .score {
        width: 2.2vw;
        font-size: 1vw;
    }
    .dark .lives .match-body .match-row .teams .score {
       color: white;
    }

    .lives .match-body .match-row .teams .teamA {
        padding-right: .5vw;
    }

    .lives .match-body .match-row .teams .teamA .team-name{
        text-align: end;
        padding-right: .3vw;
        font-size: 1vw;
    }

    .lives .match-body .match-row .teams .teamB .team-name{
        padding-right: .3vw;
        font-size: 1vw;
    }
    .dark .lives .match-body .match-row .teams .team-name{
        color: white;
    }

    .lives .match-body .match-row .teams .teamB {
        padding-left: .6vw;
    }
    .lives .match-body .match-row .watch a{
        color: #ff6d1d;
        font-size: 1vw;
        height: 1.5vw;
    }
    .lives .match-body .match-row .watch a i{
        color: black;
        margin-left: .5vw;
    }
    .dark .lives .match-body .match-row .watch a i{
        color: white;
    }
</style>