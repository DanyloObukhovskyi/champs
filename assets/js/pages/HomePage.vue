<template>
    <div v-if="!isMobile">
        <div class="ml-8 mr-8 p-0">
            <div class="d-flex p-0 mt-4">
                <div class="col-12 pr-0">
                    <big-home-slider></big-home-slider>
                </div>
            </div>
        </div>
        <div class="video-slider-container">
            <div class="ml-8 mr-8 p-0">
                <video-slider></video-slider>
            </div>
        </div>
        <div class="video-slider-container">
            <div class="ml-8 mr-8 p-0">
                <top-news></top-news>
            </div>
        </div>
        <div class="news-wrapper">
            <div class="ml-8 mr-8 p-0 d-flex">
                <div class="left">
                    <template v-if="filters.tags.length > 0">
                        <div class="tags">
                            <div class="d-flex title">
                                ТЕГИ
                            </div>
                            <button
                                    @click="removeTag(tag)"
                                    class="tag"
                                    v-for="tag in filters.tags">
                                {{tag}}
                                <i class="fas fa-times ml-1"></i>
                            </button>
                        </div>
                    </template>
                    <lamp-header title="Горячие новости"/>
                    <div class="news" :style="btnStyles">
                        <hot-news :news="hotNews"/>
                    </div>
                </div>
                <div class="right">
                    <div class="tags">
                        <a class="tag" v-for="tag in popularTags" @click="addTag(tag)">
                            {{ tag }}
                        </a>
                    </div>
                    <div class="news-row d-flex" v-for="(news, i) in newsSorted">
                        <news-row
                                v-for="(item, y) in news"
                                :key="y"
                                :news="item"
                                @addTag="addTag"
                                :class-name="getClass(i, y)"
                                @setBookmark="() => item.bookmark = !item.bookmark">
                        </news-row>
                    </div>
                    <div class="d-flex justify-content-center">
                        <loader v-show="load"></loader>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="home-block" style="margin-top: 16%;">
            <div class="">
                <div class="slider-block">
                    <BigHomeSliderMobile></BigHomeSliderMobile>
                </div>
                <div class="video-slider-block">
                    <lamp-header-mobile title="Видео"></lamp-header-mobile>
                    <div class="video-slider-container p-0">
                        <video-slider-mobile></video-slider-mobile>
                    </div>
                </div>
                <div class="news-block">
                    <lamp-header-mobile title="Новости"></lamp-header-mobile>
                  <div class="tags">
                    <a class="mobile-tag" v-for="tag in popularTags" @click="addTag(tag)">
                      {{ tag }}
                    </a>
                  </div>
<!--                    <news-filters-mobile :filters="filters" @reload="reload" />-->
                    <div class="news-row d-flex" v-for="(news, i) in newsSortedMobile">
                        <news-row-mobile
                                v-for="(item, y) in news"
                                :key="y"
                                :news="item"
                                @addTag="addTag"
                                :class-name="getClassMobile(i, y)"
                                @setBookmark="() => item.bookmark = !item.bookmark">
                        </news-row-mobile>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BigHomeSlider from "../components/sliders/BigHomeSlider";
import VideoSlider from "../components/sliders/VideoSlider";
import TopNews from "../components/news/TopNews";
import HotNews from "../components/news/HotNews";
import Header from "../components/header/Header";
import LampHeader from "../components/helpers/LampHeader";
import LampHeaderMobile from "../components/helpers/LampHeaderMobile";
import NewsRow from "../components/news/NewsRow";
import NewsRowMobile from "../components/news/NewsRowMobile";
import Loader from "../components/helpers/Loader";
import NewsService from "../services/NewsService";
import NewsFiltersMobile from "../components/news/NewsFiltersMobile";
import BigHomeSliderMobile from "../components/sliders/BigHomeSliderMobile";
import VideoSliderMobile from "../components/sliders/VideoSliderMobile";
import {mapGetters} from "vuex";

export default {
    name: "HomePage",
    components: {
        NewsFiltersMobile,
        VideoSliderMobile,
        BigHomeSliderMobile,
        Loader,
        NewsRow,
        LampHeader,
        LampHeaderMobile,
        Header,
        HotNews,
        TopNews,
        BigHomeSlider,
        VideoSlider,
        NewsRowMobile
    },
    props: [
        'popularTags'
    ],
    data() {
        return {
            hotNews: [],
            hotNewsLoad: false,
            popularTags: [],
            news: [],
            isLoadAll: false,
            load: false,
            isLoadAllHot: false,
            filters: {
                search: null,
                dateFrom: null,
                dateTo: null,
                formats: [],
                titles: [],
                texts: [],
                tags: []
            },
            height: '100%'
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
        ...mapGetters([
            'isMobile'
        ]),
        newsSorted() {
            const news = [];
            for (let i = 0; i < Math.ceil(this.news.length / 2); i++) {
                news[i] = this.news.slice((i * 2), (i * 2) + 2);
            }
            return news;
        },
        newsSortedMobile() {
            const news = [];
            for (let i = 0; i < Math.ceil(this.news.length / 1); i++) {
                news[i] = this.news.slice((i * 1), (i * 1) + 1);
            }
            return news;
        },
        btnStyles() {
            return {
                'max-height': `${this.height}`,
                'overflow-y': 'scroll'
            };
        }
    },
    methods: {
        getHotNews() {
            if (!this.isLoadAllHot && !this.hotNewsLoad) {
                this.hotNewsLoad = true;

                NewsService.getHotNews(this.hotNews.length, this.filters)
                    .then(data => {
                        const oldNewsLength = this.hotNews.length;

                        for (let item of data) {
                            const news = this.hotNews.find(hotNews => Number(item.id) === Number(hotNews.id))
                            if (!news) {
                                this.hotNews.push(item);
                            }
                        }
                        this.hotNewsLoad = false;

                        if (oldNewsLength === this.hotNews.length) {
                            this.isLoadAllHot = true;
                        }
                    })
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
        getClassMobile(index, index2) {
            let className = 'w-100';

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

                NewsService.getMainNews(this.news.length, this.filters)
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
                const scrollable = $(document).height() - ($(window).innerHeight() + $(window).scrollTop());
                this.changeMaxHeight();
                if (scrollable <= 2400) {
                    self.getNews()
                    self.getHotNews()
                }
            }
        },
        removeTag(tag) {
            this.filters.tags = this.filters.tags.filter(t => t !== tag);
        },
        addTag(tag) {
            const findTags = this.filters.tags.find(t => t === tag)
            if (!findTags) {
                this.filters.tags.push(tag);
            } else {
                this.filters.tags = this.filters.tags.filter(t => t !== tag)
            }
        },
        reload() {
            this.news = [];
            this.isLoadAll = false;

            this.hotNews = [];
            this.isLoadAllHot = false;

            this.pageUp();
            this.getNews();
            this.getHotNews()
        },
        pageUp() {
            const newsWrapper = document.querySelector('.news-wrapper');

            newsWrapper.scrollTo({
                top: 100,
                behavior: 'smooth'
            });
        },
        changeMaxHeight()
        {
            this.height = $('.right').height()+ 'px'
        },
    },
    mounted() {
        this.getHotNews();
        this.getNews();
        this.scrollEventTrigger();

        this.popularTags = JSON.parse(this.popularTags);
    }
}
</script>

<style scoped>

.news-wrapper {
    /*background: url(/images/home/background2.png) no-repeat;*/
    background-position: bottom;
    background-size: 100%;
}

.dark .news-wrapper {
    /*background: url(/images/home/background2Black.png) no-repeat;*/
    background-position: bottom;
    background-size: 100%;
}

.news-wrapper .left {
    width: 25%;
    margin-top: 1vw;
    margin-right: 1vw;
}
.news::-webkit-scrollbar {
    width:0px;
}

.news-wrapper .left .hot-news {
    margin-top: 1vw;
}

.right {
    width: 75%;
    margin-top: 1vw;
    margin-right: -.6vw;
    height: max-content;
}

.news-wrapper .right .news-row {
    margin-bottom: 1vw;
}

.tags {
    padding: .5vw;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 5vw;
}

.news .news-small-wrapper {
    height: 28.2vw;
}

.news .news-small-wrapper .article .article-wrapper {
    height: 81%;
}

.tags .tag {
    font-size: 1vw;
    text-transform: uppercase;
    padding: .1vw .6vw;
    color: white;
    background: #ff6d1d;
    border-radius: .2vw;
    border: none;
    cursor: pointer;
    margin: .1vw;
}

.tags .tag:hover {
    opacity: .7;
}

.news .news-row .article .tags {
    margin-left: 1vw;
    margin-right: 1vw;
}

.news .news-row .article .tags .tag {
    font-size: .8vw;
}

.news .news-row .article .article-wrapper {
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

.news .news-row .article {
    margin: 0;
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

.slider-block{
    margin-top: 18%;
}
.home-block{
    width: 96%;
    margin-left: 2%;
}
.video-slider-block{
    margin-top: 10%;
}
.news-block{
    margin-top: 10%;
    margin-bottom: 3%;
}
.mobile-tag {
    font-size: 3.8vw;
    text-transform: uppercase;
    padding: .1vw 1.6vw;
    color: white !important;
    background: #ff6d1d;
    border-radius: .8vw;
    border: none;
    margin-bottom: 3vw;
    cursor: pointer;
    margin-top: 3vw;
    height: 7vw;
    margin-right: 3vw;
}
.news-row {
  margin-bottom: 2vw;
}
</style>
<style>
    .news::-webkit-scrollbar {
        width:0px;
    }
</style>