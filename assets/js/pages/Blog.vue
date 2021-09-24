<template>
    <div class="ml-8 mr-8 p-0" v-if="!isMobile">
        <div class="news d-flex">
            <div class="col-9 pl-0 news-page-row">
                <div class="tags">
                    <button @click="addTag(tag)" class="tag" v-for="tag in popularTags">
                        {{ tag }}
                    </button>
                    <button class="tag" @click="getNextTags()" v-if="popularTags.length < tagsCount">
                        ...
                    </button>
                </div>
                <div class="news-row d-flex" v-for="(blogs, i) in blogsSorted">
                    <blogs-row
                            v-for="(item, y) in blogs"
                            :key="y"
                            :blogs="item"
                            :class-name="getClass(i, y)"
                            @addTag="addTag"
                            @setBookmark="() => item.bookmark = !item.bookmark">
                    </blogs-row>
                </div>
                <div class="d-flex justify-content-center">
                    <loader v-show="load"></loader>
                </div>
            </div>
            <div class="articles__content col-3 pr-0">
                <blogs-filters :view="false" :filters="filters" @reload="reload"/>
                <hot-blogs id="filters" :blogs="hotBlogs" :style="btnStyles"></hot-blogs>
            </div>
        </div>
    </div>
    <div class="news-mobile-block" style="margin-top: 20%;" v-else>
        <div class="">
            <div class="news-block">
                <lamp-header-mobile title="Блоги"></lamp-header-mobile>
                <blogs-filters-mobile :filters="filters" @reload="reload" />
              <div class="mobile-tags">
                <button @click="addTag(tag)" class="mobile-tag" v-for="tag in popularTags">
                  {{ tag }}
                </button>
                <button class="mobile-tag" @click="getNextTags()" v-if="popularTags.length < tagsCount">
                  ...
                </button>
              </div>
                <div class="news-row d-flex" v-for="(blogs, i) in blogsSortedMobile">
                    <blogs-row-mobile
                            v-for="(item, y) in blogs"
                            :key="y"
                            :blogs="item"
                            :class-name="getClassMobile(i, y)"
                            @addTag="addTag"
                            @setBookmark="() => item.bookmark = !item.bookmark">
                    </blogs-row-mobile>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BlogsFilters from "../components/blogs/BlogsFilters";
    import Loader from "../components/helpers/Loader";
    import HotBlogs from "../components/blogs/HotBlogs";
    import BlogsRow from "../components/blogs/BlogsRow";
    import BlogsRowMobile from "../components/blogs/BlogsRowMobile";
    import LampHeaderMobile from "../components/helpers/LampHeaderMobile";
    import BlogsFiltersMobile from "../components/blogs/BlogsFiltersMobile";
    import blogService from "../services/BlogService";
    import {mapGetters} from "vuex";

    export default {
        name: "Blog",
        props: [
            'tag',
            'popularTags'
        ],
        components: {
            BlogsRow,
            BlogsFilters,
            Loader,
            HotBlogs,
            blogService,
            BlogsRowMobile,
            LampHeaderMobile,
            BlogsFiltersMobile
        },
        data() {
            return {
                allTags: {},
                hotBlogs: [],
                gamesIcons: {
                    dota: 'dota.svg',
                    cs: 'cs.svg',
                    lol: 'lol.svg',
                    valorant: 'valorant.png'
                },
                blogs: [],
                load: false,
                isLoadAll: false,
                isLoadAllHot: false,
                loadHot: false,
                filters: {
                    search: null,
                    dateFrom: null,
                    dateTo: null,
                    formats: [],
                    titles: [],
                    texts: [],
                    tags: []
                },
                pageEnd: false,
                height: '100%',
                tagsCount: 20
            }
        },
        watch: {
            "filters.tags": function () {
                this.reload()
            },
            "filters.formats": function () {
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
            blogsSorted() {
                const blogs = [];
                for (let i = 0; i < Math.ceil(this.blogs.length / 2); i++) {
                    blogs[i] = this.blogs.slice((i * 2), (i * 2) + 2);
                }
                return blogs;
            },
            blogsSortedMobile() {
                const blogs = [];
                for (let i = 0; i < Math.ceil(this.blogs.length / 1); i++) {
                    blogs[i] = this.blogs.slice((i * 1), (i * 1) + 1);
                }
                return blogs;
            },
            lang() {
                return BlogService.lang;
            },
            btnStyles() {
                return {
                    'max-height': `${this.height}`,
                    'overflow-y': 'scroll'
                };
            },
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
            getClassMobile(index, index2) {
                let className = 'w-100';

                if (index % 2 === 0) {
                    if (index2 % 2 !== 0) {
                        className = 'w-40'
                    }
                }
                return className;
            },
            getBlogs() {
                if (!this.isLoadAll && !this.load) {
                    this.load = true;

                    blogService.getBlogs(this.blogs.length, this.filters)
                        .then(data => {
                            const oldBlogsLength = this.blogs.length;

                            for (let item of data) {
                                const blogs = this.blogs.find(blogs => Number(item.id) === Number(blogs.id))
                                if (!blogs) {
                                    this.blogs.push(item);
                                }
                            }
                            this.load = false;

                            if (oldBlogsLength === this.blogs.length) {
                                this.isLoadAll = true;
                            }
                        })
                }
            },
            scrollEventTrigger() {
                const self = this;
                window.onscroll = () => {
                    const scrollable = $("body").height() - ($(window).innerHeight() + $(window).scrollTop());
                    this.changeMaxHeight();

                    if (scrollable <= 10) {
                        self.getBlogs()
                        self.getHotBlogs()
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
                this.blogs = [];
                this.isLoadAll = false;
                this.isLoadAllHot = false;

                this.hotBlogs = [];
                this.pageUp();
                this.getBlogs();
                this.getHotBlogs();
            },
            getHotBlogs() {
                if (!this.isLoadAllHot && !this.loadHot) {
                    this.loadHot = true;
                    blogService.getHotBlogs(this.hotBlogs.length)
                        .then(data => {
                            const oldBlogsLength = this.hotBlogs.length;

                            for (let item of data) {
                                const blogs = this.hotBlogs.find(hotBlogs => Number(item.id) === Number(hotBlogs.id))
                                if (!blogs) {
                                    this.hotBlogs.push(item);
                                }
                            }
                            this.loadHot = false;

                            if (oldBlogsLength === this.hotBlogs.length) {
                                this.isLoadAllHot = true;
                            }
                        })
                }
            },
            changeMaxHeight()
            {
                this.height = $('.news-page-row').height()+ 'px'
            },
            getNextTags()
            {
                let count  = this.popularTags.length;
                blogService.getPopularNextTags(count)
                    .then(dataResponse => {
                        let data = dataResponse.data;
                        this.tagsCount = dataResponse.count;
                        for (let item of data) {
                            this.popularTags.push(item);
                        }

                    })
            },
        },
        mounted() {
            //window.history.pushState('page2', '', `/${this.lang}/news/`);

            if (this.tag !== null && this.tag !== '' && this.tag !== undefined) {
                this.filters.tags.push(this.tag);
            }
            this.getHotBlogs();
            this.getBlogs();
            this.scrollEventTrigger();

            this.popularTags = JSON.parse(this.popularTags);
        }
    }
</script>

<style scoped>
.news-block .mobile-tags {
  padding: .5vw;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 5vw;
}
.news-block .mobile-tags .mobile-tag {
  font-size: 3.8vw;
  text-transform: uppercase;
  padding: .1vw .6vw;
  color: white !important;
  background: #ff6d1d;
  border-radius: .8vw;
  border: none;
  margin-right: 2vw;
  cursor: pointer;
  margin-top: 1vw;
}
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
        margin-bottom: 5px;
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

    .news-page-row {
        height: max-content;
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
    div#filters::-webkit-scrollbar {
        width:0px;
    }
    .news-mobile-block{
        width: 96%;
        margin-left: 2%;
    }
    .news-block{
        margin-top: 10%;
        margin-bottom: 3%;
    }
</style>
<style>
    div#filters::-webkit-scrollbar {
        width:0px;
    }
</style>