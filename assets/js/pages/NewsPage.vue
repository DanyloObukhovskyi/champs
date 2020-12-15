<template>
    <div class="news d-flex">
        <div class="col-9 pl-0">
            <div class="tags">
                <button @click="addTag(tag)" class="tag" v-for="tag in popularTags">
                    {{tag}}
                </button>
            </div>
            <div class="news-row d-flex" v-for="(news, i) in newsSorted">
                <a :href="`/${lang}/news/${item.id}-${item.url}`"
                   class="article d-block animation-target"
                   :style="{'background-image': `url(/images/temp/news/${item.logo})`}"
                   :class="getClass(i, y)"
                   v-for="(item, y) in news">

                    <div class="article-wrapper">
                        <div class="d-flex justify-content-between">
                            <div class="tags">
                                <button @click="addTag(tag.title)" class="tag" v-for="tag in item.tags">
                                    {{tag.title}}
                                </button>
                            </div>
                            <div class="bookmark" @click="addBookmark(item)">
                                <i class="far fa-bookmark" v-if="!item.bookmark"></i>
                                <i class="fas fa-bookmark active" v-else></i>
                            </div>
                        </div>
                        <div class="news-data">
                            <div class="title" v-html="getTitle(item.title)">
                            </div>
                            <div class="description" v-html="getDescription(item.text, i, y)">
                            </div>
                        </div>
                    </div>

                    <div class="author-data d-flex justify-content-between align-items-center">
                        <div class="author d-flex justify-content-between align-items-center">
                            <!--                            <img class="logo" src="/images/noLogo.png" alt="">-->
                            <!--                            <div class="author-name">-->
                            <!--                                Владимир Щипицын-->
                            <!--                            </div>-->
                            <div class="date">
                                {{item.date_ru}}
                            </div>
                        </div>
                        <div class="activity">
                            <i class="fas fa-eye"></i>
                            {{item.views}}
                            <i class="fas fa-comment-dots"></i>
                            {{item.commentsCount}}
                        </div>
                    </div>
                </a>
            </div>
            <div class="d-flex justify-content-center">
                <loader v-show="load"></loader>
            </div>
        </div>
        <div id="filters" class="articles__content col-3 pr-0">
            <news-filters :filters="filters" @reload="reload"/>
            <hot-news :news="hotNews"></hot-news>
        </div>
    </div>
</template>

<script>
    import NewsFilters from "../components/news/NewsFilters";
    import Loader from "../components/helpers/Loader";
    import HotNews from "../components/news/HotNews";
    import newsService from "../services/NewsService";
    import Swal from 'sweetalert2'


    export default {
        name: "NewsPage",
        props: [
            'tag',
            'popularTags'
        ],
        components: {
            NewsFilters,
            Loader,
            HotNews,
        },
        data() {
            return {
                allTags: {},
                hotNews: [],
                gamesIcons: {
                    dota: 'dota.svg',
                    cs: 'cs.svg',
                    lol: 'lol.svg',
                    valorant: 'valorant.png'
                },
                news: [],
                load: false,
                isLoadAll: false,
                filters: {
                    search: null,
                    dateFrom: null,
                    dateTo: null,
                    tags: [],
                    titles: [],
                    texts: [],
                },
                pageEnd: false,
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
            "filters.search": function () {
                this.reload()
            },
        },
        computed: {
            newsSorted() {
                const news = [];
                for (let i = 0; i < Math.ceil(this.news.length / 2); i++) {
                    news[i] = this.news.slice((i * 2), (i * 2) + 2);
                }
                return news;
            },
            lang() {
                return newsService.lang;
            }
        },
        methods: {
            getGameImage(game) {
                if (this.gamesIcons.hasOwnProperty(game)) {
                    return this.gamesIcons[game];
                }
                return null;
            },
            pageUp() {
                let t;
                const top = Math.max(
                    document.body.scrollTop,
                    document.documentElement.scrollTop
                );
                if (top > 0) {
                    window.scrollBy(0, -100);
                    t = setTimeout(this.pageUp, 20);
                } else {
                    clearTimeout(t);
                }
            },
            getClass(index, index2) {
                let className = 'w-60';

                if (index % 2 === 0) {
                    if (index2 % 2 !== 0) {
                        className = 'w-40'
                    }
                }
                return className;
            },
            getTitle(title) {
                if (title.length > 70) {
                    return `${title.substr(0, 70)}...`
                } else {
                    return title;
                }
            },
            getDescription(description, i, y) {
                let count = 80;

                if ((i + 1) % 2 === 0){
                    count = 95;
                } else {
                    if (y === 0){
                        count = 125;
                    }
                }
                description = description
                    .replace(/<\/?[^>]+(>|$)/g, "")
                    .replace(/\s{2,}/g, ' ')
                    .replace(/&nbsp;/gi, ' ')
                    .trim();

                if (description.length > count) {
                    return `${description.substr(0, count)}...`
                } else {
                    return description;
                }
            },
            getNews() {
                if (!this.isLoadAll && !this.load) {
                    this.load = true;

                    newsService.getNews(this.news.length, this.filters)
                        .then(data => {
                            if (data.length < 10) {
                                this.isLoadAll = true;
                            }
                            for (let item of data) {
                                const news = this.news.find(news => Number(item.id) === Number(news.id))
                                if (!news) {
                                    this.news.push(item);
                                }
                            }
                            this.load = false;
                        })
                }
            },
            scrollEventTrigger() {
                const self = this;
                window.onscroll = () => {
                    const scrollable = $("body").height() - ($(window).innerHeight() + $(window).scrollTop());

                    if (scrollable <= 10) {
                        self.getNews()
                    }
                }
            },
            addTag(tag) {
                event.preventDefault()

                const findTags = this.filters.tags.find(t => t === tag)
                if (!findTags) {
                    this.filters.tags.push(tag);
                } else {
                    this.filters.tags = this.filters.tags.filter(t => t !== tag)
                }
            },
            getGameImage(game) {
                if (this.gamesIcons.hasOwnProperty(game)) {
                    return this.gamesIcons[game];
                }
                return null;
            },
            setFromDate(date) {
                this.dateToView = false;
                this.dateFromView = false;
                this.dateFrom = date;
            },
            setToDate(date) {
                this.dateFromView = false;
                this.dateToView = false;
                this.dateTo = date;
            },
            reload() {
                this.news = [];
                this.isLoadAll = false;

                this.pageUp();
                this.getNews();
            },
            getHotNews() {
                newsService.getHotNews()
                    .then(data => {
                        this.hotNews = data;
                    })
            },
            addBookmark(news) {
                event.preventDefault();

                newsService.setBookmark(news.id, !news.bookmark)
                    .then(() => {
                        news.bookmark = !news.bookmark;
                    }).catch(() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Упс...',
                            text: 'Что бы добавить в закладки, необходимо авторизироваться!',
                        })
                    })
            }
        },
        mounted() {
            window.history.pushState('page2', '', `/${this.lang}/news/`);

            if (this.tag !== null && this.tag !== '') {
                this.filters.tags.push(this.tag);
            }
            this.getHotNews();
            this.getNews();
            this.scrollEventTrigger();

            this.popularTags = JSON.parse(this.popularTags);
        }
    }
</script>

<style scoped>
    .news .tags {
        padding-top: 1vw;
        padding-bottom: 1vw;
    }

    .news .tags .tag {
        font-size: 1vw;
        text-transform: uppercase;
        padding: .1vw .6vw;
        color: white;
        background: #ff6d1d;
        border-radius: .2vw;
        border: none;
        margin-right: .5vw;
        cursor: pointer;
    }

    .news .tags .tag:hover {
        opacity: .7;
    }

    .news .news-row .article {
        background-position: center;
        height: 100%;
        background-size: 100%;
        background-position: top;
        transition: all .5s ease-in-out;
    }

    .news .news-row .article:hover {
        background-size: 130%;
        background-position: top;
        transition: all .5s ease-in-out;
    }

    .news .news-row .article .tags {
        margin-left: 1vw;
        margin-right: 1vw;
    }

    .news .news-row .article .tags .tag {
        font-size: .8vw;
    }

    .news .news-row .article-wrapper {
        height: 18vw;
        background: rgb(255, 255, 255);
        background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 65%);
    }

    .news .news-row .article-wrapper .bookmark {
        margin: 1vw;
        width: 1.5vw;
        height: 1.5vw;
        background-color: #fbf8f8;
        display: flex;
        justify-content: center;
        align-items: center;
        border: .15vw solid #ff6d1d;
        font-size: 1vw;
        color: black;
        cursor: pointer;
    }

    .news .news-row .article-wrapper .bookmark i.active{
        color: #ff6d1d;
    }

    .dark .news .news-row .article-wrapper {
        background: rgb(30, 33, 35);
        background: -moz-linear-gradient(0deg, rgba(30, 33, 35, 1) 0%, rgba(253, 187, 45, 0) 66%);
        background: -webkit-linear-gradient(0deg, rgba(30, 33, 35, 1) 0%, rgba(253, 187, 45, 0) 66%);
        background: linear-gradient(0deg, rgba(30, 33, 35, 1) 0%, rgba(253, 187, 45, 0) 66%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1e2123", endColorstr="#fdbb2d", GradientType=1);

    }

    .news .news-row .article-wrapper .news-data {
        margin-left: 1vw;
        margin-right: 1vw;
        position: absolute;
        bottom: 0;
    }

    .news .news-row .article-wrapper .news-data .title {
        font-size: 1.5vw;
        color: black;
    }

    .news .news-row .article-wrapper .news-data .description {
        font-size: 1vw;
        color: #46484a;
    }

    .dark .news .news-row .article-wrapper .news-data .title,
    .dark .news .news-row .article-wrapper .news-data .description,
    .dark .news .news-row .author-data .activity {
        color: white;
    }

    .w-60 {
        width: 60%;
    }

    .w-40 {
        width: 40%;
    }

    .news .news-row {
        margin-bottom: 1.2vw;
    }

    .news .news-row .article:nth-child(1n) {
        margin-right: .6vw;
    }

    .news .news-row .article:nth-child(2n) {
        margin-left: .6vw;
    }

    .news .news-row .article .author-data {
        background-color: #fff;
    }

    .dark .news .news-row .article .author-data {
        background-color: #1e2123;
    }

    .news .news-row .article .author-data .author .logo {
        width: 2vw;
        border-radius: 50%;
        border: .1vw solid #ff6d1d;
    }

    .news .news-row .article .author-data .author .author-name {
        margin-left: .5vw;
        color: #5c6b79;
    }

    .news .news-row .article .author-data .author .date {
        color: #898989;
        margin-left: .5vw;
    }

    .news .news-row .article .author-data {
        padding: 1vw;
        font-size: .8vw;
    }

    .news .news-row .article .activity {
        color: black;
    }

    .news .news-row .article .activity i {
        color: #8298ac;
        margin-left: .2vw;
    }
</style>