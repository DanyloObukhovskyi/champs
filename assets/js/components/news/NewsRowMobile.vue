<template>
    <a :href="`/${lang}/novosti/${news.id}/` + getSlug(news)"
       class="article d-block animation-target"
       :style="{'background-image': `url(/images/temp/news/${news.logo})`}"
       :class="className">

        <div class="article-wrapper">
            <div class="d-flex justify-content-between">
                <div class="tags">
                    <button @click="addTag(tag.title)" class="tag" v-for="tag in news.tags">
                        {{ tag.title }}
                    </button>
                </div>
                <div class="bookmark" :class="{active: news.bookmark}" @click="addBookmark(news)">
                    <i class="far fa-bookmark"></i>
                </div>
            </div>
            <div class="news-data">
                <div class="title" v-html="getTitle(news.title)">
                </div>
                <div class="description" v-html="getDescription(news.text, i, y)">
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
                    {{ news.date_ru }}
                </div>
            </div>
            <div class="activity">
                <i class="fas fa-eye"></i>
                {{ news.views }}
                <i class="fas fa-comment-dots"></i>
                {{ news.commentsCount }}
            </div>
        </div>
    </a>
</template>

<script>
import Swal from 'sweetalert2'

import NewsService from "../../services/NewsService";

export default {
    name: "NewsRowMobile",
    props: ['news', 'className'],
    computed: {
        lang() {
            return NewsService.lang;
        }
    },
    methods: {
        getClass(index, index2) {
            let className = 'w-100';

            if (index % 2 === 0) {
                if (index2 % 2 !== 0) {
                    className = 'w-40'
                }
            }
            return className;
        },
        addTag(tag) {
            event.preventDefault()

            this.$emit('addTag', tag)
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

            if ((i + 1) % 2 === 0) {
                count = 95;
            } else {
                if (y === 0) {
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
        addBookmark(news) {
            event.preventDefault();

            NewsService.setBookmark(news.id, !news.bookmark)
                .then(() => {
                    this.$emit('setBookmark')
                }).catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Упс...',
                    text: 'Что бы добавить в закладки, необходимо авторизироваться!',
                })
            })
        },
        getSlug(news) {
            try{
                let type = this.getTitleUrl(news.type.title)
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                ;
                let game = this.getTitleUrl(news.game.name)
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                ;
                let title =  this.getTitleUrl(news.title)
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                ;
                let date = this.getTitleUrl(news.date_ru_with_year_for_url)
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                ;
                return type+'/'+game+'/'+title+'-'+date;
            } catch (e) {
                let title =  this.getTitleUrl(news.title)
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                ;
                return title;
            }
        },
        getTitleUrl(title) {
            return title.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
                function (all, ch, space, words, i) {
                    if (space || words) {
                        return space ? '_' : '';
                    }
                    var code = ch.charCodeAt(0),
                        index = code == 1025 || code == 1105 ? 0 :
                            code > 1071 ? code - 1071 : code - 1039,
                        t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                            'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                            'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                            'shch', '', 'y', '', 'e', 'yu', 'ya'
                        ];
                    return t[index];
                });
        }
    }
}
</script>

<style scoped>
@import '../../../css/animations.css';

.tags {
    padding-top: 1vw;
    padding-bottom: 1vw;
}

.tags .tag {
    font-size: 3.8vw;
    text-transform: uppercase;
    padding: .6vw 2vw;
    color: white;
    background: #ff6d1d;
    border-radius: .8vw;
    border: none;
    margin-right: 3vw;
    cursor: pointer;
    margin-bottom: 3vw;
}

.tags .tag:hover {
    opacity: .7;
}

.article {
    -webkit-animation: animation-translate-bottom 1500ms linear both;
    animation: animation-translate-bottom 1500ms linear both;
    background-position: center;
    height: 100%;
    background-size: 100%;
    background-position: top;
    transition: all .5s ease-in-out;
}

.article.h-25vw .article-wrapper {
    height: 50vw;
}

.article:hover {
    background-size: 130%;
    background-position: top;
    transition: all .5s ease-in-out;
}

.article .tags {
    margin-left: 1vw;
    margin-right: 1vw;
}

.article .tags .tag {
    font-size: 3.8vw;
}

.article-wrapper {
    height: 50vw;
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 65%);
}

.article-wrapper .bookmark {
    margin: 1vw;
    height: 6.5vw;
    background-color: #fbf8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    border: .15vw solid #ff6d1d;
    font-size: 4vw;
    color: black;
    cursor: pointer;
    padding-left: 1vw;
    padding-right: 1vw;
}

.article-wrapper .bookmark.active {
    background-color: #ff6d1d;
}

.article-wrapper .bookmark.active i {
    color: #fbf8f8;
}

.dark .article-wrapper {
    background: rgb(30, 33, 35);
    background: -moz-linear-gradient(0deg, rgba(30, 33, 35, 1) 0%, rgba(253, 187, 45, 0) 66%);
    background: -webkit-linear-gradient(0deg, rgba(30, 33, 35, 1) 0%, rgba(253, 187, 45, 0) 66%);
    background: linear-gradient(0deg, rgba(30, 33, 35, 1) 0%, rgba(253, 187, 45, 0) 66%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1e2123", endColorstr="#fdbb2d", GradientType=1);
}

.article-wrapper .news-data {
    margin-left: 1vw;
    margin-right: 1vw;
    position: absolute;
    bottom: 0;
}

.article-wrapper .news-data .title {
    font-size: 4.5vw;
    font-weight: 800;
    color: black;
}

.article-wrapper .news-data .description {
    font-size: 3vw;
    color: #46484a;
}

.dark .article-wrapper .news-data .title,
.dark .article-wrapper .news-data .description,
.dark .author-data .activity {
    color: white;
}

.article:nth-child(1n) {
    margin-right: .6vw;
}

.article:nth-child(2n) {
    margin-left: .6vw;
}

.article .author-data {
    background-color: #fff;
}

.dark .article .author-data {
    background-color: #1e2123;
}

.author-data .author .logo {
    width: 2vw;
    border-radius: 50%;
    border: .1vw solid #ff6d1d;
}

.author-data .author .author-name {
    margin-left: .5vw;
    color: #5c6b79;
}

.author-data .author .date {
    color: #898989;
    margin-left: .5vw;
}

.article .author-data {
    padding: 1vw;
    font-size: 2.8vw;
}

.article .activity {
    color: black;
}

.article .activity i {
    color: #8298ac;
    margin-left: .2vw;
}
</style>