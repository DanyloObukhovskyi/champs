<template>
    <div class="news-filters">
        <div class="filters-middle" v-if="!view || blog && blog.status !== 5">
            <a @click="checkAuth" href="#"  class="d-flex align-items-center filters-buttons">
                <img class="filters-icons filters-icons1" alt="">
                <span class="blog-button">Написать пост</span>
            </a>
        </div>
        <div class="filters-middle" v-else>
            <a @click="checkAuth" href="#" class="d-flex align-items-center filters-buttons">
                <img class="filters-icons filters-icons1" alt="">
                <span class="blog-button">Вернуться к редактированию</span>
            </a>
        </div>
        <div class="filters-middle">
            <a href="createBlogAndReward" class="d-flex align-items-center filters-buttons">
                <img class="filters-icons filters-icons2" alt=""></img>
                <span class="blog-button">Создай блог и заработай!</span>
            </a>
        </div>
        <div class="filters-middle">
            <a href="howCreateBlog"  class="d-flex align-items-center filters-buttons">
                <img class="filters-icons filters-icons3" alt=""></img>
                <span class="blog-button">Как вести успешный блог?</span>
            </a>
        </div>
        <div class="filters-body">
            <div class="keyword d-flex" v-if="filterType !== 'formats'">
                <div class="search-keyword">
                    <img style="width: 7.5vw;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABmUlEQVRIie2WTUpCURTHz9V0kg0VgmgB2qgNZIMaOVDRtiBK9LELaQ01qgXUKoqwQRZYVI4iamyDCurXwHPxEvX0vidO8sDl8njn//+ddz8OT2QaEwozLAFIikhRx7KILOirRxG5EJETETk2xnyMrSqgDDwwPO6B0jiAMWDPMb4EtoAsMKsjB2wDbSevCcSigC30DagFmWmRdc0FaIaFlh3oiocu78CLvtCks6e1EEU3VHsHJHyEG86eeu8VEAeu1KMSlPvT3J7MfWPMly/YGPMpIgf6OPpyA7dabdYX6njk1OPGR9RTUSoCeE49ekF54e/c3zG0G/4GftJ5MQLYap99wC2d1yKA13U+G1nhXKd2hOt0rR5VH2FSGz5APQR4U7VdYMZXXHJaZt5Dtwq8q7bgW7Q1aTrwBhAPyI3rl1roC5AOC445cLQN7mhzSOlYAnadPbVQm58JBdcCivQb/rDoAgUgzaBXR4YngApwBHTod7dXLegQqLoHCciMDR6i2DSDP5MOMP9v4O6yn08M7MBbwOlEwdOw8Q2L5IpTUK5vWgAAAABJRU5ErkJggg=="/>
                </div>
                <div class="full-input" >
                    <input @keyup.enter="addWord"
                           v-model="search"
                           type="text"
                           style="background: white;color:black"
                           class="col search-input"
                           @click="showFilters = !showFilters"
                           placeholder="Введите ключевое слово">
                </div>
            </div>
            <div class="keyword d-flex" v-else>
                <div class="search-keyword">
                    <i class="fas fa-search"></i>
                </div>
                <div style="width: 100%">
                    <multiselect
                            placeholder="Выберете формат"
                            v-model="search"
                            label="title"
                            track-by="id"
                            class="news-filters_multiselect"
                            selectLabel="Выберете формат"
                            style="width: 100%"
                            @select="addWordFormat"
                            :options="formats">
                    </multiselect>
                </div>
            </div>
            <calendar-filter-mobile
                    @setToDate="setToDate"
                    @setFromDate="setFromDate"
                    :date-from="dateFrom"
                    :date-to="dateTo"
                    class="date_new_style"
            >
            </calendar-filter-mobile>
            <div class="types d-flex">
                <div class="icon pointer" @dblclick="show = false, filterType = null" @click="show = !show">
                    <img src="/images/news/filter.svg" alt="">
                </div>
                <div class="full-input col d-flex align-items-center justify-content-between">
                    <div class="filters_text">
                        {{ filterType !== null ? types[filterType] : 'Фильтры' }}
                    </div>
                    <i class="fas fa-chevron-down pointer" @click="show = !show" style="color: #212529;"></i>
                </div>
                <div class="filters-dropdown-menu w-100 p-0" v-show="show">
                    <button class="dropdown-item"
                            :class="{active: filterType === type}"
                            @click="filterType = type, show = false"
                            v-for="(label, type) in types" v-if="type !== 'tags'">
                        {{ label }}
                    </button>
                </div>
            </div>
            <div class="tags" v-for="(label, type) in types" v-if="filters[type].length > 0">
                <div class="d-flex title">
                    {{ label.toUpperCase() }}
                </div>
                <button
                        @click="removeWord(word, type)"
                        class="tag"
                        v-for="word in filters[type]">
                    {{ word }}
                    <i class="fas fa-times ml-1"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Calendar from "../calendar/Calendar";
import CalendarFilterMobile from "../calendar/CalendarFilterMobile";
import LampHeader from "../helpers/LampHeader";
import CalendarFilter from "../calendar/CalendarFilter";
import Multiselect from 'vue-multiselect';
import NewsService from "../../services/NewsService";
import MatchService from "../../services/MatchService";
import Button from "../cabinet/Button";
import BlogService from "../../services/BlogService";

export default {
    name: "BlogsFiltersMobile",
    props: {
        filters: {
            default: {

            }
        },
        view: {
            default: false
        },
        blog: {
            default: {}
        }
    },
    components: {
        Button,
        CalendarFilter,
        LampHeader,
        Calendar,
        Multiselect,
        CalendarFilterMobile
    },
    data() {
        return {
            show: false,
            search: null,
            showFilters: false,
            filterType: null,
            types: {
                titles: 'Названия',
                texts: 'Текст',
                tags: ''
            },
            formats: [],
            user: []
        }
    },
    computed: {
        dateFrom() {
            if (this.filters.dateFrom) {
                return this.filters.dateFrom
            }
            const date = new Date();

            const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

            return `${day}.${month}.${date.getFullYear() - 1}`;
        },
        dateTo() {
            if (this.filters.dateTo) {
                return this.filters.dateTo
            }
            const date = new Date();

            const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

            return `${day}.${month}.${date.getFullYear()}`;
        },
    },
    watch: {
        search() {
            if (this.filterType === null) {
                this.filters['search'] = this.search;
            }
        }
    },
    methods: {
        addWordFormat(selectedOption, id){
            if (selectedOption.title !== null && selectedOption.title !== '') {
                this.filters[this.filterType].push(selectedOption.title);
            }
        },
        addWord() {
            if (this.search !== null && this.search !== '') {
                const findWord = this.filters[this.filterType].find(w => w === this.search)

                if (!findWord) {
                    this.filters[this.filterType].push(this.search);
                }
                this.search = null;
            }
        },
        removeWord(word, filterType) {
            this.filters[filterType] = this.filters[filterType].filter(t => t !== word)
        },
        setFromDate(date) {
            this.dateFromView = false;
            this.filters.dateFrom = date;
        },
        setToDate(date) {
            this.dateToView = false;
            this.filters.dateTo = date;
        },
        getFormats(){
            NewsService.getFormats()
                .then(data => {
                    this.formats = data.formats;
                })
        },
        checkAuth()
        {
            if(this.user !== null){
                if(this.blog.status === 5){
                    window.location = '/ru/editBlog/'+ this.blog.id;
                } else {
                    window.location = '/ru/createBlog';
                }
            } else {
                this.showLogin();
            }
        },
        showLogin() {
            this.$store.dispatch('showLogin')
        },
        getAuth(){
            BlogService.getAuthUser()
                .then(user => {
                    this.user = user;
                })
        }
    },
    mounted() {
        this.getFormats();
        this.getAuth();
    }
}
</script>

<style scoped>
    .news-filters .filters-body {
        margin-top: 2vw;
    }

    .news-filters .filters-body .keyword {
        height: 13vw;
      margin-bottom: 4%;
    }

    .news-filters .filters-body .search-keyword,
    .types .icon {
        width: 16vw;
        height: 13vw;
        background: rgb(255, 183, 73);
        background: linear-gradient(90deg, rgba(255, 183, 73, 1) 0%, rgba(254, 121, 36, 1) 100%);
        color: white;
        font-size: 5.2vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .news-filters .filters-body .types {
      margin-bottom: 3%;
    }

    .news-filters .filters-body .types .icon {
        width: 13.35vw;
    }

    .news-filters .filters-body .full-input {
        width: 100%;
        display: flex;
        flex-direction: row;
        border: 0.02vw solid #CFDCF3;
        background-color: white;
        flex-wrap: wrap;
        font-size: 5vw;
    }

    .news-filters .filters-body .full-input input {
        outline: unset;
        border: none;
    }

    .news-filters .filters-body .types i {
        margin-right: .5vw;
    }

    .news-filters .filters-body .types .icon img {
        width: 5.4vw;
    }

    .news-filters .filters-body .pointer {
        cursor: pointer;
    }

    .news-filters .filters-body .filters-dropdown-menu {
        position: absolute;
        left: 0;
        z-index: 1000;
        float: left;
        min-width: 10rem;
        padding: .5rem 0;
        margin: .125rem 0 0;
        font-size: 1rem;
        color: #212529;
        text-align: left;
        list-style: none;
        top: 100%;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, .15);
    }

    .news-filters .filters-body .filters-dropdown-menu .dropdown-item {
        font-size: 5vw;
        padding: .4vw;
        outline: unset;
    }

    .news-filters .filters-body .filters-dropdown-menu .dropdown-item.active {
        background-color: #fe8028;
    }

    .news-filters .filters-body .filters-dropdown-menu .dropdown-item:active {
        background-color: #fe8028;
    }

    .news-filters .filters-body .tags {
        padding-top: 1vw;
        padding-bottom: 1vw;
    }

    .dark .news-filters .filters-body .tags {
        color: white;
    }

    .news-filters .filters-body .tags .tag {
        font-size: 4vw;
        text-transform: uppercase;
        padding: .1vw .6vw;
        color: white;
        border-radius: .2vw;
        border: none;
        margin-right: .5vw;
        cursor: pointer;
        background-color: #fe8028;
    }

    .news-filters .filters-body .tags .tag:hover {
        opacity: .7;
    }
    .filters_text{
        color: #212529;
    }
    .news-filters_multiselect::v-deep .multiselect {
        width: 100% !important;
        /*background: rgb(59, 59, 59) !important;*/
        /*color: #adadad !important;*/
    }
    .news-filters_multiselect::v-deep .multiselect__tags{
        width: 100% !important;
        border:1px solid rgba(0, 0, 0, .15) !important;
        /*background: rgb(59, 59, 59) !important;*/
        /*color: #adadad !important;*/
    }
    /*.news-filters_multiselect::v-deep .multiselect__content-wrapper{*/
    /*    background: rgb(59, 59, 59) !important;*/
    /*    color: #adadad !important;*/
    /*}*/
    /*.news-filters_multiselect::v-deep .multiselect__input, .multiselect__single{*/
    /*    background: rgb(59, 59, 59) !important;*/
    /*    color: #adadad !important;*/
    /*}*/
    /*.news-filters_multiselect::v-deep .focus-visible{*/
    /*    color: #adadad !important;*/
    /*}*/
    .news-filters_multiselect::v-deep .multiselect__content-wrapper{
        width: 100% !important;
    }
    /*.news-filters_multiselect::v-deep .multiselect__single{*/
    /*    background: rgb(59, 59, 59) !important;*/
    /*    color: #adadad !important;*/
    /*}*/
    .dates .date .date-calendar {
        width: 14.35vw;
        align-items: center;
        display: flex;
        margin-right: .3vw;
        cursor: pointer;
    }
    .dates .date .date-calendar {
        width: 4vw;
        height: 12vw;
        background: rgb(255, 183, 73);
        background: linear-gradient(
                90deg
                , rgba(255, 183, 73, 1) 0%, rgba(254, 121, 36, 1) 100%);
        color: white;
        font-size: 7.2vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
.filters-icons{
    position: absolute;
}
.filters-middle
{
  margin-bottom: 6vw;
  padding-left: 2vw;
  padding-right: 2vw;
}
.blog-button{
    margin-left: 10.5vw;
    padding-left: 0.3vw;
    padding-right: 0.3vw;
}
.filters-middle:hover .blog-button{
    background-color: #ff6d1d;
    color: white;
    border-radius: 5px;
}
.filters-buttons{
    color: black;
}
.dark .filters-buttons{
    color: white;
}
.filters-icons1{
    content: url('/images/icons/blog.svg');
    background-repeat: no-repeat;
    width: 8vw;
}
.dark .filters-icons1{
    content: url('/images/icons/blogWhite.svg');
    background-repeat: no-repeat;
}
.filters-icons2{
    content: url('/images/icons/blog2.svg');
    background-repeat: no-repeat;
    width: 6.5vw;
    margin-left: 0.25vw;
}
.dark .filters-icons2{
    content: url('/images/icons/blog2White.svg');
    background-repeat: no-repeat;
}
.filters-icons3{
    content: url('/images/icons/vrsti.svg');
    background-repeat: no-repeat;
    width: 6.5vw;
    margin-left: 0.25vw;
}
.dark .filters-icons3{
    content: url('/images/icons/vrstiWhite.svg');
    background-repeat: no-repeat;
}
.filters-middle:hover .filters-icons1{
    content: url('/images/icons/blogHover.svg');
    background-repeat: no-repeat;
}
.filters-middle:hover .filters-icons2{
    content: url('/images/icons/blog2Hover.svg');
    background-repeat: no-repeat;
}
.filters-middle:hover .filters-icons3{
    content: url('/images/icons/vrstiHover.svg');
    background-repeat: no-repeat;
}
</style>
<style>

</style>