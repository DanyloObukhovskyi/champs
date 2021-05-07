<template>
    <div class="news d-flex">
        <div class="col-9 pl-0">
            <div class="tags">
                <button @click="addTag(tag)" class="tag" v-for="tag in popularTags">
                    {{ tag }}
                </button>
            </div>
            <div class="news-row d-flex" v-for="(news, i) in newsSorted">
                <news-row
                        v-for="(item, y) in news"
                        :key="y"
                        :news="item"
                        :class-name="getClass(i, y)"
                        @addTag="addTag"
                        @setBookmark="() => item.bookmark = !item.bookmark">
                </news-row>
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
import NewsRow from "../components/news/NewsRow";


export default {
    name: "NewsPage",
    props: [
        'tag',
        'popularTags'
    ],
    components: {
        NewsRow,
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
            isLoadAllHot: false,
            loadHot: false,
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
        getNews() {
            if (!this.isLoadAll && !this.load) {
                this.load = true;

                newsService.getNews(this.news.length, this.filters)
                    .then(data => {
                        const oldNewsLength = this.news.length;

                        for (let item of data) {
                            const news = this.news.find(news => Number(item.id) === Number(news.id))
                            if (!news) {
                                this.news.push(item);
                            }
                        }
                        this.load = false;

                        if (oldNewsLength === this.news.length) {
                            this.isLoadAll = true;
                        }
                    })
            }
        },
        scrollEventTrigger() {
            const self = this;
            window.onscroll = () => {
                const scrollable = $("body").height() - ($(window).innerHeight() + $(window).scrollTop());
                if (scrollable <= 10) {
                    self.getNews()
                    self.getHotNews()
                }
            }
        },
        addTag(tag) {
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
            this.isLoadAllHot = false;

            this.hotNews = [];
            this.pageUp();
            this.getNews();
            this.getHotNews();
        },
        getHotNews() {
            if (!this.isLoadAllHot && !this.loadHot) {
                this.loadHot = true;
                newsService.getHotNews(this.hotNews.length)
                    .then(data => {
                        const oldNewsLength = this.hotNews.length;

                        for (let item of data) {
                            const news = this.hotNews.find(hotNews => Number(item.id) === Number(hotNews.id))
                            if (!news) {
                                this.hotNews.push(item);
                            }
                        }
                        this.loadHot = false;

                        if (oldNewsLength === this.hotNews.length) {
                            this.isLoadAllHot = true;
                        }
                    })
            }
        }
    },
    mounted() {
        //window.history.pushState('page2', '', `/${this.lang}/news/`);

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
.news {
    margin-bottom: 3vw;
}

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

.news .news-row .article-wrapper .bookmark.active {
    background-color: #ff6d1d;
}

.news .news-row .article-wrapper .bookmark.active i {
    color: #fbf8f8;
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