<template>
    <div class="ml-8 mr-8 p-0 articles__content" v-if="!isMobile">
        <div class="news-view" ref="news_page">
            <div class="d-flex" style="align-items: flex-start;">
                <div class="col-9 pl-0">
                    <div class="news news_info" v-if="!load && news !== null">
                        <div class="news-header">
                            <h2 class="title">
                                {{ news.title }}
                            </h2>
                            <div class="news-logo">
                                <img class="w-100" :src="'/images/temp/news/' + news.logo" alt="" @error="tagsAbsolute = false">
                                <div class="tags" :class="{absolute: tagsAbsolute}">
                                    <a :href="newsPageUrl(tag.title)" class="tag" v-for="tag in news.tags">
                                        {{ tag.title }}
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="date">
                                    {{ news.date_ru }}
                                </div>
                                <div class="activity">
                                    <i class="fas fa-eye"></i>
                                    {{ news.views }} {{ news.views == 1 ? 'Просмотр' : 'Просмотров' }}
                                    <i class="fas fa-comment-dots"></i>
                                    {{ news.commentsCount }} {{ news.commentsCount == 1 ? 'Коментарий' : 'Коментариев' }}
                                </div>
                            </div>
                        </div>
                        <div class="news-body" v-html="parseBackground(news.text)" @click="showImages">
                        </div>

                    </div>
                    <div class="d-flex justify-content-center">
                        <loader v-if="load"/>
                    </div>
                </div>
                <div class="news col-3 pr-0" :style="btnStyles">
<!--                    <news-filters :filters="filters" @reload="reload"/>-->
                    <hot-news :news="hotNews"/>
                </div>
            </div>
            <div class="d-flex">
                <div class="col-9 pl-0">
                    <div class="tags">
                        <a :href="newsPageUrl(tag.title)" class="tag" v-for="tag in news.tags">
                            {{ tag.title }}
                        </a>
                    </div>
                    <div class="share">
                        <likes :users="usersLikes"
                               :likes="likesCount"
                               :user-like="userLike"
                               @setLike="setLike">
                        </likes>
                        <div class="comments-count">
                            <i class="fas fa-comment-dots"></i>
                            {{ news.commentsCount }}
                        </div>
                        <share-buttons/>
                    </div>
                    <div class="comments" v-if="news !== null">
                        <news-comments
                                :comments-count="news.commentsCount"
                                :news-id="newsId"
                                :comments="comments"
                                @update="updateComments">
                        </news-comments>
                    </div>
                </div>
                <div class="col-3 pr-0"></div>
            </div>
            <transition name="fade">
                <div class="wrapper news-wrap" v-if="zoom" @click="clearImg">
                    <img :src="img" class="temp_clone" style="opacity: 0" alt="clone"/>
                    <img :src="img" class="clone"
                         v-show="img !== null" :alt="img"/>
                    <div class="title_wrap">Кликните на области чтобы закрыть изображение</div>
                </div>
            </transition>
            <news-widget
                    v-if="news !== null"
                    :comments-count="news.commentsCount"
                    :users="usersLikes"
                    :user-like="userLike"
                    :likes-count="likesCount"
                    @setLike="setLike">
            </news-widget>
        </div>
    </div>
    <div v-else>
        <div class="news-view-mobile" ref="news_page">
            <div class="d-block">
                <div class="col-12">
                    <div class="news news_info" v-if="!load && news !== null">
                        <div class="news-header">
                            <h2 class="title">
                                {{ news.title }}
                            </h2>
                            <div class="tags">
                                <a :href="newsPageUrl(tag.title)" class="tag" v-for="tag in news.tags">
                                    {{ tag.title }}
                                </a>
                            </div>
                            <div class="news-logo">
                                <img class="w-100" :src="'/images/temp/news/' + news.logo" alt="" @error="tagsAbsolute = false">
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="date">
                                    {{ news.date_ru }}
                                </div>
                                <div class="activity">
                                    <i class="fas fa-eye"></i>
                                    {{ news.views }} {{ news.views == 1 ? 'Просмотр' : 'Просмотров' }}
                                    <i class="fas fa-comment-dots"></i>
                                    {{ news.commentsCount }} {{ news.commentsCount == 1 ? 'Коментарий' : 'Коментариев' }}
                                </div>
                            </div>
                        </div>
                        <div class="news-body" v-html="parseBackground(news.text)" @click="showImages">
                        </div>

                    </div>
                    <div class="d-flex justify-content-center">
                        <loader v-if="load"/>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="col-12">
                    <div class="news-view-mobile">
                        <div class="news">
                            <div class="tags">
                                <a :href="newsPageUrl(tag.title)" class="tag" v-for="tag in news.tags">
                                    {{ tag.title }}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="share">
                        <likes-mobile :users="usersLikes"
                               :likes="likesCount"
                               :user-like="userLike"
                               @setLike="setLike">
                        </likes-mobile>
                    </div>
                    <share-buttons-mobile/>
                    <div class="comments" v-if="news !== null">
                        <news-comments-mobile
                                :comments-count="news.commentsCount"
                                :news-id="newsId"
                                :comments="comments"
                                @update="updateComments">
                        </news-comments-mobile>
                    </div>
                </div>
            </div>
            <div class="col-12 pl-2">
                <lamp-header-mobile title="Горячие новости"></lamp-header-mobile>
                <news-filters-mobile :filters="filters" @reload="reload"/>
            </div>
            <div class="news col-12" :style="btnStyles">
                <hot-news-mobile :news="hotNews"/>
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
    </div>
</template>

<script>
import NewsFilters from "../components/news/NewsFilters";
import HotNews from "../components/news/HotNews";
import Loader from "../components/helpers/Loader";
import ShareButtons from "../components/social/ShareButtons";
import ShareButtonsMobile from "../components/social/ShareButtonsMobile";
import NewsComments from "../components/news/NewsComments";
import NewsCommentsMobile from "../components/news/NewsCommentsMobile";
import NewsWidget from "../components/news/NewsWidget";
import NewsService from "../services/NewsService";
import Likes from "../components/likes/Likes";
import { Tweet, Moment, Timeline } from 'vue-tweet-embed';
import {mapGetters} from "vuex";
import LikesMobile from "../components/likes/LikesMobile";
import HotNewsMobile from "../components/news/HotNewsMobile";
import LampHeaderMobile from "../components/helpers/LampHeaderMobile";
import NewsFiltersMobile from "../components/news/NewsFiltersMobile";
export default {
    name: "NewsViewPage",
    props: [
        'newsId'
    ],
    components: {
        NewsFiltersMobile,
        ShareButtonsMobile,
        LikesMobile,
        Likes,
        NewsFilters,
        HotNews,
        Loader,
        ShareButtons,
        NewsComments,
        NewsWidget,
        Tweet,
        Moment,
        Timeline,
        NewsCommentsMobile,
        HotNewsMobile,
        LampHeaderMobile
    },
    data() {
        return {
            user: null,
            load: false,
            news: null,
            hotNewsLoad: false,
            isLoadAllHot: false,
            hotNews: [],
            filters: {
                dateFrom: null,
                dateTo: null,
                tags: [],
                titles: [],
                texts: [],
            },
            filters: {
                search: null,
                dateFrom: null,
                dateTo: null,
                formats: [],
                titles: [],
                texts: [],
                tags: []
            },
            img: null,
            zoom: false,
            tagsAbsolute: true,
            likes: [],
            likesCount: 0,
            userLike: null,
            comments: [],
            height: '100%',
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
    computed: {
        ...mapGetters([
            'isMobile'
        ]),
        usersLikes() {
            const users = [];

            for (let userLike of this.likes) {
                users.push(userLike.user)
            }
            return users;
        },
        btnStyles() {
            return {
                'max-height': `${this.height}`,
                'overflow-y': 'scroll'
            };
        }
    },
    methods: {
        parseBackground(text) {
            return text.replaceAll('background-color: #ffffff;', '').replaceAll('background-color:#ffffff;', '');
        },
        reload() {
            this.getHotNews();
        },
        getHotNews() {
            if (!this.isLoadAllHot && !this.hotNewsLoad) {
                this.hotNewsLoad = true;

                NewsService.getHotNews(this.hotNews.length, this.filters)
                    .then(data => {
                        const oldNewsLength = this.hotNews.length;

                        for (let item of data) {
                            const newsHot = this.hotNews.find(hotNews => Number(item.id) === Number(hotNews.id))
                            if (!newsHot) {
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
        scrollEventTrigger() {
            const self = this;
            window.onscroll = () => {
                this.changeMaxHeight();
                const scrollable = $('.page').height() - ($(window).innerHeight() + $(window).scrollTop());
                const scrollableDocument = $(document).height() - ($(window).innerHeight() + $(window).scrollTop());
                if (scrollableDocument <= 1869) {
                    self.getHotNews()
                }
            }
        },
        async getNews() {
            this.load = true;
            await NewsService.getSingleNews(this.newsId)
                .then(data => {
                    this.news = data.news;
                    this.likes = data.likes;
                    this.userLike = data.userLike;
                    this.likesCount = data.likesCount;
                    this.comments = data.comments

                    this.load = false;

                    this.$nextTick(() => {

                    })
                    this.addTwitter();
                })
        },
        newsPageUrl(tag) {
            return `/${NewsService.lang}/novosti?tag=${encodeURIComponent(tag)}`;
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
        },
        setLike(type) {
            if(this.user !== null){
                NewsService.setLike(this.newsId, type)
                    .then(({likesCount, userLike}) => {
                        this.likesCount = likesCount;
                        this.userLike = userLike;
                    })
            } else {
                this.showLogin();
            }
        },
        updateComments(data) {
            this.comments = data.comments;
            this.news.commentsCount = data.commentsCount;
        },
        showLogin() {
            this.$store.dispatch('showLogin')
        },
        getAuth(){
            NewsService.getAuthUser()
                .then(user => {
                    this.user = user;
                })
        },
        changeMaxHeight()
        {
            this.height = $('.news_info').height()+ 'px'
        },
        addTwitter(){
            let twitter = document.createElement('script');
            twitter.setAttribute('src',"https://platform.twitter.com/widgets.js");
            twitter.setAttribute('async',"");
            twitter.setAttribute('charset',"utf-8");
            document.head.appendChild(twitter);
        }
    },
    mounted() {
        this.getHotNews()
        this.getNews();
        this.getAuth();
        this.scrollEventTrigger();
    },
    created() {

    }
}
</script>
<style scoped>
.news-view {
    display: block;
    padding-top: 1vw;
    padding-bottom: 8vw;
}

.news-view .title {
    font-size: 2.3vw;
    color: black;
}

.dark .news-view .title {
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

.news-view .share .comments-count i:hover {
    color: #ff6d1d;
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
    margin-bottom: 5px;
}

.news-view .news .tags .tag:hover {
    opacity: .7;
}

.news-view .news-body img {
    cursor: pointer;
}

.news-view .news-body h2 {
    background-color: transparent !important;
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
    justify-content: space-between;
}

.news-view .share .comments-count {
    font-size: 1vw;
    margin-right: 2vw;
}

.news-view .news-body p {
    background-color: transparent !important;
}

.dark .news-view .news-body {
    color: white;
}

</style>

<style>
.news-body .row img {
    width: 100%;
}
blockquote{
    margin-block-start: 1em !important;
    margin-block-end: 1em !important;
    margin-inline-start: 40px !important;
    margin-inline-end: 40px !important;
    padding: 8px 0 8px 20px;
    border-left: 3px solid #000;
    font-size: 17px;
    font-style: italic;
}
p.article-render__block.article-render__block_unstyled {
    background-color: transparent !important;
}
/*::-webkit-scrollbar { !* chrome based *!*/
/*    width: 0px;  !* ширина scrollbar'a *!*/
/*    background: transparent;  !* опционально *!*/
/*}*/

/*html {*/
/*    -ms-overflow-style: none;  !* IE 10+ *!*/
/*    scrollbar-width: none; !* Firefox *!*/
/*}*/
</style>

<style scoped>
    .news-view-mobile {
        display: block;
        padding-top: 18vw;
        padding-bottom: 8vw;
    }

    .news-view-mobile .title {
        font-size: 5.3vw;
        color: black;
    }

    .dark .news-view-mobile .title {
        color: white;
    }

    .news-view-mobile .news .tags {
        padding-top: 1vw;
        padding-bottom: 1vw;
    }

    .news-view-mobile .news-header .date {
        color: #898989;
        font-size: 3vw;
        margin-bottom: 1vw;
        margin-top: 1vw;
    }

    .news-view-mobile .news-header .activity {
        font-size: 3vw;
        margin-bottom: 1vw;
        margin-top: 1vw;
    }

    .dark .news-view-mobile .news-header .activity, .dark .news-view-mobile .share .comments-count {
        color: white;
    }

    .news-view-mobile .news-header .activity i,
    .news-view-mobile .share .comments-count i {
        color: #8298ac;
    }

    .news-view-mobile .share .comments-count i:hover {
        color: #ff6d1d;
    }

    .news-view-mobile .news-header .activity i:nth-child(2) {
        margin-left: 1vw;
    }

    .news-view-mobile .news .tags.absolute {
        padding: 1vw;
        position: absolute;
        top: 0;
    }

    .news-view-mobile .news .tags .tag {
        font-size: 4vw;
        text-transform: uppercase;
        padding: .1vw .6vw;
        color: white;
        background: #ff6d1d;
        border-radius: .8vw;
        border: none;
        margin-right: 1.6vw;
        cursor: pointer;
        outline: unset;
        margin-bottom: 5px;
    }

    .news-view-mobile .news .tags .tag:hover {
        opacity: .7;
    }

    .news-view-mobile .news-body img {
        cursor: pointer;
    }

    .news-view-mobile .news-body h2 {
        background-color: transparent !important;
    }

    .news-view-mobile .wrapper.news-wrap img.clone {
        position: absolute;
        transition: 0.5s;
        box-shadow: 0 0 0.5vw #111111;
    }

    .news-view-mobile .wrapper.news-wrap {
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

    .news-view-mobile .wrapper.news-wrap img.clone {
        position: absolute;
        transition: 0.5s;
        box-shadow: 0 0 0.5vw #111111;
    }

    .news-view-mobile .wrapper.news-wrap .title_wrap {
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

    .news-view-mobile .share {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .news-view-mobile .share .comments-count {
        font-size: 1vw;
        margin-right: 2vw;
    }

    .news-view-mobile .news-body p {
        background-color: transparent !important;
    }

    .dark .news-view-mobile .news-body {
        color: white;
    }

</style>