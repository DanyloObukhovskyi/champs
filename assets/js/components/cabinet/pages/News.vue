<template>
    <div class="cabinet-news">
        <cabinet-bottom-banner/>
        <div class="news-wrapper">
            <div class="title">
                Новости в закладках
            </div>
            <div class="d-flex justify-content-center" v-if="load">
                <small-loader/>
            </div>
            <div class="news-body" v-else v-for="(news, i) in newsSorted">
                <news-row
                        v-for="(item, y) in news"
                        :key="y"
                        :news="item"
                        @addTag="addTag"
                        :class-name="getClass(i, y)"
                        @setBookmark="() => deleteNewsBookmark(item.id)">
                </news-row>
            </div>
        </div>
    </div>
</template>

<script>
    import CabinetBottomBanner from "../CabinetBottomBanner";
    import NewsService from "../../../services/NewsService";
    import NewsRow from "../../news/NewsRow";
    import SmallLoader from "../../helpers/SmallLoader";

    export default {
        name: "News",
        components: {SmallLoader, NewsRow, CabinetBottomBanner},
        data() {
            return {
                news: [],
                load: false
            }
        },
        computed: {
            newsSorted() {
                const news = [];
                for (let i = 0; i < Math.ceil(this.news.length / 3); i++) {
                    news[i] = this.news.slice((i * 3), (i * 3) + 3);
                }
                return news;
            },
        },
        methods: {
            getBookmarkNews() {
                this.load = true;

                NewsService.getUserBookmarkNews()
                    .then(news => {
                        this.news = news;

                        this.load = false;
                    })
            },
            getClass(index, index2) {
                let className = 'w-30';

                index = index + 1;

                if (index % 2 === 0) {
                    if (index2 === 2) {
                        className = 'w-40'
                    }
                } else {
                    if (index2 === 0) {
                        className = 'w-40'
                    }
                }
                return className;
            },
            deleteNewsBookmark(newsId) {
                this.news = this.news.filter(news => news.id !== newsId);
            },
            addTag(tag) {
                window.location = NewsService.newsPage() + `?tag=${tag}`;
            }
        },
        mounted() {
            this.getBookmarkNews();
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../../css/animations.css';

    .news-wrapper {
        -webkit-animation: animation-translate-right 1500ms linear both;
        animation: animation-translate-right 1500ms linear both;
        background-color: #eff0f0;
        border-radius: .5vw;
        padding: 2vw;
        margin: 1vw;

        .title {
            font-size: 1.5vw;
            line-height: 1.3vw;
            font-weight: 500;
            color: #9d9fa0;
        }

        .news-body {
            display: flex;
            flex-wrap: wrap;
            margin-top: 1.2vw;

            .article:nth-child(3){
                margin-right: 0;
                margin-left: .6vw;
            }
        }

    }
    .w-30 {
        width: 30%;
    }

    .w-40 {
        width: 36%;
    }

    .dark {
        .news-wrapper {
            background: rgb(37,40,42);
            background: -moz-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            background: -webkit-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            background: linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a",endColorstr="#3d4146",GradientType=1);

            .title {
                color: #fff;
            }
        }
    }
</style>