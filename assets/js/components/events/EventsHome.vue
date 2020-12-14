<template>
    <div class="events-home">
        <div class="events-home-header">
            <lamp-header title="События" link="/ru/events" link-description="Все события"></lamp-header>
        </div>
        <div class="d-flex justify-content-center align-items-center p-5" v-if="load">
            <small-loader/>
        </div>
        <div class="events-home-body row" v-else>
            <div class="col-6 event-home-row" v-for="event in events">
                <event-row :event="event"/>
            </div>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";
    import eventService from "../../services/EventService";
    import EventRow from "./EventRow";
    import SmallLoader from "../helpers/SmallLoader";

    export default {
        name: "EventsHome",
        components: {
            EventRow,
            LampHeader,
            SmallLoader
        },
        data() {
            return {
                events: [],
                load: true
            }
        },
        methods: {
            getMainEvents() {
                eventService.getMainEvents()
                    .then(data => {
                        this.events = data;
                        this.load = false;
                    })
            }
        },
        mounted() {
            this.getMainEvents();
        }
    }
</script>

<style scoped>
    @import '../../../css/animations.css';

    .events-home-body {
        -webkit-animation: animation-translate-right 1500ms linear both;
        animation: animation-translate-right 1500ms linear both;
    }
</style>

<style>
    .events-home .events-home-body .event-home-row a:hover {
        width: 103%;
        height: 7.2vw;
        margin-left: -.2vw;
    }
</style>