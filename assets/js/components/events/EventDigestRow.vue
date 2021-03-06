<template>
    <a :href="eventUrl(event) +'/'+ getSlug(event)" class="event d-flex justify-content-between">
        <div class="title">
            {{event.name}}
        </div>
        <div class="digest">
            <div class="type">
                {{event.type}}
            </div>
            <div class="d-flex justify-content-end">
                <div class="game">
                    <img :src="`/uploads/games/${event.game.eventIcon}`" v-if="event.game ? event.game.eventIcon !== null : false">
                    <img :src="`/images/events/${event.game.code}.png`" v-else>
                </div>
            </div>
        </div>
        <div class="event-middle align-items-end d-flex justify-content-between w-100">
            <div class="news-footer d-flex w-100">
                <div class="year w-100 d-flex justify-content-end">
                    {{event.year}}
                </div>
            </div>
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
        name: "EventDigestRow",
        props: ['event', 'className'],
        methods: {
            eventUrl(event) {
                return eventService.getEventUrl(event.id)
            },
            getSlug(event) {
                try{
                    let name = this.getTitleUrl(event.name)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let location =  this.getTitleUrl(event.location)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let game = this.getTitleUrl(event.game.name)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let start_date = this.getTitleUrl(event.startedAtRu)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let end_date = this.getTitleUrl(event.endedAtRu)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    return name+'_'+location+'_'+game+'_'+start_date+'-'+end_date;
                } catch (e) {
                    return event.slug;
                }
            },
            getTitleUrl(title) {
                return title.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
                    function (all, ch, space, words, i) {
                        if (space || words) {
                            return space ? '_' : '';
                        }
                        var code = ch.charCodeAt(0),
                            index = code == 1025 || code == 1105 ? 0 :
                                code > 1071 ? code - 1071 : code - 1039,
                            t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                                'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                                'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                                'shch', '', 'y', '', 'e', 'yu', 'ya'
                            ];
                        return t[index];
                    });
            }
        }
    }
</script>

<style scoped>
    .event {
        color: black;
        margin-top: 1vw;
        padding: .3vw .8vw;
        height: 8vw;
        moz-transition: all .1s ease-in-out;
        -o-transition: all .1s ease-in-out;
        -webkit-transition: all .1s ease-in-out;
        transition: all .1s ease-in-out;
        background: linear-gradient(270deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
    }

    .event:hover {
        margin-left: -.2vw;
        margin-right: -.2vw;
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
    .event-middle {
        position: absolute;
        bottom: 0;
        margin-bottom: 1.7vw;
    }

    .event .news-footer .year {
        font-size: .9vw;
        text-transform: lowercase;
        display: flex;
        align-items: center;
        justify-content: end;
        width: 100%;
        margin-right: 1.4vw;
        color: #979797;
        margin-right: 18%;
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

    .event .digest {
        width: 4vw;
        margin-right: -.8vw;
        margin-top: -.3vw;
    }

    .event .digest .type {
        display: flex;
        justify-content: center;
        color: white;
        background-color: #ff6d1d;
        border-radius: 0 0 0 .4vw;
        font-size: 1vw;
        text-transform: uppercase;
        font-weight: bold;
    }

    .event .digest .game {
        height: 2vw;
        font-size: .8vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #242424;
        border-radius: .3vw;
        cursor: pointer;
        width: 3vw;
        padding: .2vw;
        margin-top: .2vw;
    }

    .event .digest .game img {
        height: 2vw;
    }
</style>