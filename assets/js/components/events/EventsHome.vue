<template>
    <div class="events-home">
        <div class="events-home-header">
            <lamp-header title="События" link="/ru/events" link-description="Все события"></lamp-header>
        </div>
        <div class="events-home-body row">
            <div class="col-6 event-home-row" v-for="event in events">
                <a :href="eventUrl(event.id)" class="event-home-wrapper d-block">
                    <div class="title">
                        {{event.name}}
                    </div>
                    <div class="event-footer align-items-end d-flex justify-content-between w-100">
                        <div class="logo">
                            <img :src="event.logoWithPath" alt="">
                        </div>
                        <div class="news-footer d-flex w-100">
                            <div class="activity">
                                <i class="fas fa-eye"></i>
                                {{event.views || 0}}
                            </div>
                            <div class="date w-100 d-flex justify-content-end">
                                {{event.startedAtRu}} - {{event.endedAtRu}}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";
    import eventService from "../../services/EventService";

    export default {
        name: "EventsHome",
        components: {
            'lamp-header': LampHeader
        },
        data() {
            return {
                events: [],
            }
        },
        methods: {
            getMainEvents() {
                eventService.getMainEvents()
                    .then(data => {
                        this.events = data;
                    })
            },
            eventUrl(id){
                return eventService.getEventUrl(id)
            }
        },
        mounted() {
            this.getMainEvents();
        }
    }
</script>

<style scoped>
    .events-home-body .event-home-row .event-home-wrapper {
        color: black;
        height: 3vw;
        margin-top: 1vw;
        padding: .3vw .8vw;
        height: 7vw;
        background: linear-gradient(270deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
    }

    .dark .events-home-body .event-home-row .event-home-wrapper {
        color: white;
        background: rgb(61, 65, 70);
        background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        background: linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);
    }

    .events-home-body .event-home-row .event-home-wrapper .logo img {
        width: 3vw;
    }

    .events-home-body .event-home-row .event-home-wrapper .event-footer {
        position: absolute;
        bottom: 0;
        margin-bottom: .7vw;
    }

    .events-home-body .event-home-row .event-home-wrapper .news-footer .activity {
        font-size: .9vw;
        display: flex;
        align-items: center;
    }

    .events-home-body .event-home-row .event-home-wrapper .news-footer .activity i {
        color: #8298ac;
        margin-left: .7vw;
        margin-right: .2vw;
    }

    .events-home-body .event-home-row .event-home-wrapper .news-footer .date {
        font-size: .9vw;
        text-transform: lowercase;
        display: flex;
        align-items: center;
        justify-content: end;
        width: 100%;
        margin-right: 1.4vw;
        color: #979797;
    }

    .events-home-body .event-home-row .event-home-wrapper .title {
        font-size: 1vw;
    }
</style>