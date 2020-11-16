<template>
    <a :href="'/ru/event/' + event.id" class="event">
        <div class="title">
            {{event.name}}
        </div>
        <div class="data">
            <div class="logo">
                <img :src="event.logoWithPath" alt="">
            </div>
            <div class="d-flex">
                <div class="time">
                    {{event.startedAtRu}} {{ event.endedAtRu ? '- ' + event.endedAtRu : null}}
                </div>
                <div class="views">
                    <i class="fas fa-eye" aria-hidden="true"></i>{{event.views}}
                </div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        name: "EventRow",
        props: ['event'],
        methods: {}
    }
</script>

<style scoped>
    .event {
        color: black;
        font-size: 1vw;
        padding: 1vw;
        display: flex;
        margin-top: 1vw;
        flex-direction: column;
        background: rgb(251, 252, 252);
        background: -moz-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: -webkit-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfcfc", endColorstr="#c1c6ca", GradientType=1);
    }

    .dark .event {
        color: white;
        background: rgb(37, 40, 42);
        background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        background: linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#25282a", GradientType=1);
    }

    .event .title {
        margin-bottom: .2vw;
        font-size: 1.4vw;
    }

    .event .data {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .event .data .logo img {
        height: 3vw;
    }

    .event .data .time {
        margin-right: 1vw;
    }

    .event .data .views i {
        margin-right: .5vw;
        color: #8298ac;
    }
</style>