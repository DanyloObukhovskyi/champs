<template>
    <div class="events-home">
        <div class="events-home-header">
            <lamp-header title="События" link="/ru/events" link-description="Все события"></lamp-header>
        </div>
        <div class="events-home-body row">
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

    export default {
        name: "EventsHome",
        components: {
            EventRow,
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
            }
        },
        mounted() {
            this.getMainEvents();
        }
    }
</script>