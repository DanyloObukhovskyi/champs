<template>
    <div class="news">
        <div class="news-row d-flex" v-for="(news, i) in newsSorted">
            <template v-for="(item, y) in news">
                <template v-if="Array.isArray(item)">
                    <div class="news-small-wrapper w-40">
                        <news-row-small
                                v-for="(n, i) in item"
                                :key="i"
                                :news="n"
                                class="height9vw"
                                @setBookmark="() => n.bookmark = !n.bookmark">
                        </news-row-small>
                    </div>
                </template>
                <news-row
                        v-else
                        :news="item"
                        :class="getClass(i, y)"
                        @setBookmark="() => item.bookmark = !item.bookmark">
                </news-row>
            </template>
        </div>
    </div>
</template>

<script>
import NewsService from "../../services/NewsService";
import NewsRow from "./NewsRow";
import NewsRowSmall from "./NewsRowSmall";

export default {
    name: "TopNews",
    components: {
        NewsRowSmall,
        NewsRow
    },
    data() {
        return {
            news: [],
            load: false
        }
    },
    computed: {
        newsSorted() {
            const news = [];

            for (let i = 0; i < this.news.length; i++) {
                if (i === 0 || i === 3) {
                    news.push([this.news[i]])
                }
                if (i === 1 || i === 2) {
                    if (!news[0][1]) {
                        news[0][1] = [];
                    }
                    news[0][1].push(this.news[i])
                }
                if (i === 4) {
                    news[1].push(this.news[i])
                }
            }
            return news;
        },
    },
    methods: {
        getNews() {
            this.load = true;

            NewsService.getTopNews()
                .then(news => {
                    this.news = news;
                    this.load = false;
                })
        },
        getClass(index, index2) {
            let className = 'w-60';
            if (index === 0) {
                if (index2 < 0) {
                    className = 'w-40'
                }
            } else {
                if (index2 === 0) {
                    className = 'w-40'
                }
            }
            if (index === 0) {
                className += ' h-25vw';
            }
            return className;
        },
    },
    mounted() {
        this.getNews();
    }
}
</script>

<style scoped>
.news .tags {
    padding-top: 1vw;
    padding-bottom: 1vw;
}

.news .news-small-wrapper {
    height: 28.2vw;
}

.news .news-small-wrapper .article .article-wrapper {
    height: 81%;
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
</style>