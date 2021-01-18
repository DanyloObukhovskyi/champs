<template>
    <a :href="eventUrl(event.id)" class="event d-block">
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
</template>

<script>
    import eventService from "../../services/EventService";

    export default {
        name: "EventRow",
        props: ['event'],
        methods: {
            eventUrl(id) {
                return eventService.getEventUrl(id)
            }
        }
    }
</script>

<style scoped>
    .event {
        color: black;
        margin-top: 1vw;
        padding: .3vw .8vw;
        height: 7vw;
        moz-transition: all .1s ease-in-out;
        -o-transition: all .1s ease-in-out;
        -webkit-transition: all .1s ease-in-out;
        transition: all .1s ease-in-out;
        background: linear-gradient(270deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
    }

    .event:hover {
		width: 103%;
		height: 7.2vw;
		margin-left: -.2vw;
		margin-bottom: -.2vw;
    }

    .dark .event {
        color: white;
        background: rgb(61, 65, 70);
        background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        background: linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);
    }

    .event .logo img {
        width: 3vw;
    }

    .event .event-footer {
        position: absolute;
        bottom: 0;
        margin-bottom: .7vw;
    }

    .event .news-footer .activity {
        font-size: .9vw;
        display: flex;
        align-items: center;
    }

    .event .news-footer .activity i {
        color: #8298ac;
        margin-left: .7vw;
        margin-right: .2vw;
    }

    .event .news-footer .date {
        font-size: .9vw;
        text-transform: lowercase;
        display: flex;
        align-items: center;
        justify-content: end;
        width: 100%;
        margin-right: 1.4vw;
        color: #979797;
    }

    .event .title {
        font-size: 1vw;
    }
</style>