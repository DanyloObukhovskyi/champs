<template>
    <div class="news-home">
        <div class="news-home-header">
            <lamp-header title="Новости" link="/ru/news" link-description="Все новости"></lamp-header>
        </div>
        <div class="news-home-body row">
            <div class="col-6 news-home-row" v-for="news in newsList">
                <div class="news-home-wrapper">
                    <div class="title">
                        {{news.title}}
                    </div>
                    <div class="news-footer d-flex">
                        <div class="type">
                            {{types[news.type] || 'текст'}}
                        </div>
                        <div class="activity">
                            <i class="fas fa-eye"></i>
                            0
                            <i class="fas fa-comment-dots"></i>
                            0
                        </div>
                        <div class="date">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";

    export default {
        name: "NewsHome",
        components: {
            'lamp-header': LampHeader
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
                ]
            }
        },
        methods: {
            getNews() {
                axios.post('/ru/main/news')
                    .then(({data}) => {
                        this.newsList = data;
                    })
            }
        },
        mounted() {
            this.getNews();
        }
    }
</script>

<style scoped>
    .news-home-body .news-home-row .news-home-wrapper {
        height: 3vw;
        margin-top: 1vw;
        padding: .3vw .8vw;
        height: 6vw;
        background: linear-gradient(270deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
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
        font-size: .8vw;
        font-weight: bold;
        padding: 0.2vw .5vw;
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
</style>