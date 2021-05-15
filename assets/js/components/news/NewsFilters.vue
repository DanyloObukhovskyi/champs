<template>
    <div class="news-filters">
        <div class="filters-header">
            <lamp-header title="Горячие новости"/>
        </div>
        <div class="filters-body">
            <div class="keyword d-flex">
                <div class="search-keyword">
                    <i class="fas fa-search"></i>
                </div>
                <div class="full-input">
                    <input @keyup.enter="addWord"
                           v-model="search"
                           type="text"
                           class="col search-input"
                           @click="showFilters = !showFilters"
                           placeholder="Введите ключевое слово">
                </div>
            </div>
            <calendar-filter
                    @setToDate="setToDate"
                    @setFromDate="setFromDate"
                    :date-from="dateFrom"
                    :date-to="dateTo">
            </calendar-filter>
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
import LampHeader from "../helpers/LampHeader";
import CalendarFilter from "../calendar/CalendarFilter";

export default {
    name: "NewsFilters",
    props: [
        'filters',
    ],
    components: {
        CalendarFilter,
        LampHeader,
        Calendar,
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
                formats: 'Форматы',
                tags: ''
            },
            formats: []
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
    },
}
</script>

<style scoped>
.news-filters .filters-body {
    margin-top: 1vw;
}

.news-filters .filters-body .keyword {
    height: 3vw;
}

.news-filters .filters-body .search-keyword,
.types .icon {
    width: 4vw;
    height: 3vw;
    background: rgb(255, 183, 73);
    background: linear-gradient(90deg, rgba(255, 183, 73, 1) 0%, rgba(254, 121, 36, 1) 100%);
    color: white;
    font-size: 1.2vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.news-filters .filters-body .types {
    margin-top: 1vw;
}

.news-filters .filters-body .types .icon {
    width: 3.35vw;
}

.news-filters .filters-body .full-input {
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 0.02vw solid #CFDCF3;
    background-color: white;
    flex-wrap: wrap;
    font-size: 1vw;
}

.news-filters .filters-body .full-input input {
    outline: unset;
    border: none;
}

.news-filters .filters-body .types i {
    margin-right: .5vw;
}

.news-filters .filters-body .types .icon img {
    width: 1.4vw;
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
    font-size: 1vw;
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
    font-size: 1vw;
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
</style>