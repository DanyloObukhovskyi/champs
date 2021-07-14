<template>
    <div class="news-home">
        <div class="news-home-header">
            <lamp-header title="Новости" link="/ru/novosti" link-description="Все новости"></lamp-header>
        </div>
        <div class="d-flex justify-content-center align-items-center p-5" v-if="load">
            <small-loader/>
        </div>
        <div class="news-home-body" v-else :class="{row: !isOnePerRow}">
            <div class="news-home-row" :class="{'col-6': !isOnePerRow}" v-for="news in newsList">
                <a :href="getNewsUrl(news)" class="news-home-wrapper d-block">
                    <div class="title">
                        {{news.title}}
                    </div>
                    <div class="news-footer d-flex w-100">
                        <div class="type">
                            {{types[news.type] || 'текст'}}
                        </div>
                        <div class="activity">
                            <i class="fas fa-eye"></i>
                            {{news.views}}
                            <i class="fas fa-comment-dots"></i>
                            {{news.commentsCount}}
                        </div>
                        <div class="date w-100 d-flex justify-content-end">
                            {{news.date_ru}}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";
    import SmallLoader from "../helpers/SmallLoader";

    export default {
        name: "NewsHome",
        components: {
            LampHeader,
            SmallLoader
        },
        props: {
            isOnePerRow: {
                default: false
            }
        },
        data() {
            return {
                newsList: [],
                types: [
                    'Трансфер',
                    'Матч',
                    'Видео',
                    'Интервью',
                    'Статья',
                    'Обновления',
                    'Текст'
                ],
                load: true,
            }
        },
        methods: {
            getNews() {
                axios.post('/ru/main/news')
                    .then(({data}) => {
                        this.newsList = data;
                        this.load = false
                    })
            },
            getNewsUrl(news) {
                return `/ru/novosti/${news.id}/` + this.getSlug(news)
            },
            getSlug(news) {
                try{
                    let type = this.getTitleUrl(news.type.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let game = this.getTitleUrl(news.game.name)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let title =  this.getTitleUrl(news.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let date = this.getTitleUrl(news.date_ru_with_year_for_url)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    return type+'/'+game+'/'+title+'-'+date;
                } catch (e) {
                    let title =  this.getTitleUrl(news.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    return title;
                }
            },
            getTitleUrl(title){
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
        },
        mounted() {
            this.getNews();
        }
    }
</script>

<style scoped>
    @import '../../../css/animations.css';

    .news-home-body {
        -webkit-animation: animation-translate-left 1500ms linear both;
        animation: animation-translate-left 1500ms linear both;
    }

    .news-home-body .news-home-row .news-home-wrapper {
        color: black;
        height: 3vw;
        margin-top: 1vw;
        padding: .3vw .8vw;
        height: 7vw;
        background: linear-gradient(270deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
    }

    .news-home-body .news-home-row a:hover{
		width: 103%;
		height: 7.2vw;
		margin-left: -.2vw;
		margin-bottom: -.2vw;
    }

    .dark .news-home-body .news-home-row .news-home-wrapper {
        color: white;
        background: rgb(61, 65, 70);
        moz-transition: all .1s ease-in-out;
        -o-transition: all .1s ease-in-out;
        -webkit-transition: all .1s ease-in-out;
        transition: all .1s ease-in-out;
        background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        background: linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);
    }

    .news-home-body .news-home-row .news-home-wrapper .news-footer {
        position: absolute;
        bottom: 0;
        margin-bottom: .5vw;
    }

    .news-home-body .news-home-row .news-home-wrapper .news-footer .type {
        color: white;
        background: #9d9fa0;
        text-transform: uppercase;
        font-size: .6vw;
        font-weight: bold;
        padding: 0.2vw .4vw;
    }

    .dark .news-home-body .news-home-row .news-home-wrapper .news-footer .type {
        color: #34383c;
    }

    .news-home-body .news-home-row .news-home-wrapper .news-footer .activity {
        font-size: .9vw;
        display: flex;
        align-items: center;
    }

    .news-home-body .news-home-row .news-home-wrapper .news-footer .activity i {
        color: #8298ac;
        margin-left: .7vw;
        margin-right: .2vw;
    }

    .news-home-body .news-home-row .news-home-wrapper .news-footer .date {
        font-size: .9vw;
        text-transform: lowercase;
        display: flex;
        align-items: center;
        justify-content: end;
        width: 100%;
        margin-right: 1.4vw;
        color: #979797;
    }

    .news-home-body .news-home-row .news-home-wrapper .title {
        font-size: 1vw;
    }
</style>