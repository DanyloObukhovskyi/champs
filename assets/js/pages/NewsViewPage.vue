<template>
    <div class="news-view">
        <div class="col-9 pl-0">
            <div class="news" v-if="!load && news !== null">
                <div class="news-header">
                    <h2 class="title">
                        {{news.title}}
                    </h2>
                    <div class="news-logo">
                        <img class="w-100" :src="'/images/temp/news/' + news.logo" alt="" @error="tagsAbsolute = false">
                        <div class="tags" :class="{absolute: tagsAbsolute}">
                            <a :href="newsPageUrl(tag.title)" class="tag" v-for="tag in news.tags">
                                {{tag.title}}
                            </a>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="date">
                            {{news.date_ru}}
                        </div>
                        <div class="activity">
                            <i class="fas fa-eye"></i>
                            {{news.views}} {{news.views == 1 ? 'Просмотр': 'Просмотров'}}
                            <i class="fas fa-comment-dots"></i>
                            {{news.comments.length}} {{news.comments.length == 1 ? 'Коментарий': 'Коментариев'}}
                        </div>
                    </div>
                </div>
                <div class="news-body" v-html="news.text" @click="showImages">
                </div>
                <div class="tags">
                    <a :href="newsPageUrl(tag.title)" class="tag" v-for="tag in news.tags">
                        {{tag.title}}
                    </a>
                </div>
                <div class="share">
                    <div class="comments-count">
                        <i class="fas fa-comment-dots"></i>
                        {{news.comments.length}}
                    </div>
                    <share-buttons/>
                </div>
                <div class="comments">
                    <news-comments :news-id="newsId"/>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <loader v-if="load"/>
            </div>
        </div>
        <div class="col-3 pr-0">
            <news-filters :filters="filters" @reload="reload"/>
            <div class="d-flex justify-content-center">
                <loader v-if="hotNewsLoad"></loader>
            </div>
            <hot-news v-if="!hotNewsLoad" :news="hotNews"/>
        </div>
        <transition name="fade">
            <div class="wrapper news-wrap" v-if="zoom" @click="clearImg">
                <img :src="img" class="temp_clone" style="opacity: 0" alt="clone"/>
                <img :src="img" class="clone"
                     v-show="img !== null" :alt="img"/>
                <div class="title_wrap">Кликните на области чтобы закрыть изображение</div>
            </div>
        </transition>
    </div>
</template>

<script>
    import NewsFilters from "../components/news/NewsFilters";
    import HotNews from "../components/news/HotNews";
    import Loader from "../components/helpers/Loader";
    import ShareButtons from "../components/social/ShareButtons";
    import NewsComments from "../components/news/NewsComments";

    export default {
        name: "NewsViewPage",
        props: [
            'newsId'
        ],
        components: {
            'news-filters': NewsFilters,
            'hot-news': HotNews,
            'loader': Loader,
            'share-buttons': ShareButtons,
            'news-comments': NewsComments
        },
        data() {
            return {
                filters: {
                    dateFrom: null,
                    dateTo: null,
                    tags: [],
                    titles: [],
                    texts: [],
                },
                commentForm: null,
                img: null,
                zoom: false,
                tagsAbsolute: true,
                hotNewsLoad: false,
                load: false,
                hotNews: [],
                news: null
            }
        },
        watch: {
            "filters.tags": function () {
                this.reload()
            },
            "filters.titles": function () {
                this.reload()
            },
            "filters.texts": function () {
                this.reload()
            },
            "filters.dateFrom": function () {
                this.reload()
            },
            "filters.dateTo": function () {
                this.reload()
            },
        },
        methods: {
            reload() {
                this.getHotNews();
            },
            getHotNews() {
                this.hotNewsLoad = true;

                axios.post('/ru/hot/news/', this.filters)
                    .then(({data}) => {
                        this.hotNewsLoad = false;
                        this.hotNews = data;
                    })
            },
            getNews() {
                axios.post('/ru/ajax/news/single/' + this.newsId)
                    .then(({data}) => {
                        this.news = data;
                        this.load = false;
                    })
            },
            newsPageUrl(tag) {
                return `/ru/news?tag=${tag}`;
            },
            clearImg() {
                this.img = null;
                this.zoom = false;
            },
            showImages() {
                if (event.target.tagName === 'IMG') {
                    this.img = event.target.src;
                    this.zoom = true;
                }
            }
        },
        mounted() {
            this.getHotNews()
            this.getNews();
        }
    }
</script>

<style scoped>
    .news-view {
        display: flex;
        padding-top: 1vw;
        padding-bottom: 8vw;
    }

    .news-view .title{
        font-size: 2.3vw;
        color: black;
    }

    .dark .news-view .title{
        color: white;
    }

    .news-view .news .tags {
        padding-top: 1vw;
        padding-bottom: 1vw;
    }

    .news-view .news-header .date {
        color: #898989;
        font-size: 1vw;
        margin-bottom: 1vw;
        margin-top: 1vw;
    }

    .news-view .news-header .activity {
        font-size: 1vw;
        margin-bottom: 1vw;
        margin-top: 1vw;
    }

    .dark .news-view .news-header .activity, .dark .news-view .share .comments-count {
        color: white;
    }

    .news-view .news-header .activity i,
    .news-view .share .comments-count i {
        color: #8298ac;
    }

    .news-view .news-header .activity i:nth-child(2) {
        margin-left: 1vw;
    }

    .news-view .news .tags.absolute {
        padding: 1vw;
        position: absolute;
        top: 0;
    }

    .news-view .news .tags .tag {
        font-size: 1vw;
        text-transform: uppercase;
        padding: .1vw .6vw;
        color: white;
        background: #ff6d1d;
        border-radius: .2vw;
        border: none;
        margin-right: .5vw;
        cursor: pointer;
        outline: unset;
    }

    .news-view .news .tags .tag:hover {
        opacity: .7;
    }

    .news-view .news-body img {
        cursor: pointer;
    }

    .news-view .wrapper.news-wrap img.clone {
        position: absolute;
        transition: 0.5s;
        box-shadow: 0 0 0.5vw #111111;
    }

    .news-view .wrapper.news-wrap {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.9);
        z-index: 20;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .news-view .wrapper.news-wrap img.clone {
        position: absolute;
        transition: 0.5s;
        box-shadow: 0 0 0.5vw #111111;
    }

    .news-view .wrapper.news-wrap .title_wrap {
        width: 30vw;
        position: absolute;
        left: 50%;
        margin-left: -15vw;
        bottom: 3%;
        background-color: #35393E;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5vw 0;
        font-size: 0.9vw;
    }

    .news-view .share {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .news-view .share .comments-count {
        font-size: 1vw;
        margin-right: 2vw;
    }
    .news-view .news-body p{
        background-color: transparent !important;
    }
    .dark .news-view .news-body{
        color: white;
    }
</style>

<style>
    .row img {
        width: 100%;
    }
    p.article-render__block.article-render__block_unstyled {
        background-color: transparent !important;
    }
</style>