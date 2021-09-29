<template>
    <a :href="getUrl(blogs)"
       class="article d-block animation-target"
       :style="{'background-image': `url(/uploads/blogs/${blogs.logo})`}"
       :class="className">

        <div class="article-wrapper">
            <div class="d-flex justify-content-between">
                <div class="tags">
                    <button @click="addTag(tag.title)" class="tag" v-for="tag in blogs.tags">
                        {{ tag.title }}
                    </button>
                </div>
<!--                <div class="bookmark" :class="{active: blogs.bookmark}" @click="addBookmark(blogs)">-->
<!--                    <i class="far fa-bookmark"></i>-->
<!--                </div>-->
                <div class="tags" v-if="!isPage">
                    <p class="tag">{{ blogs.status_name }}</p>
                </div>
            </div>
            <div class="news-data">
                <div class="title" v-html="getTitle(blogs.title)">
                </div>
                <div class="description" v-html="getDescription(blogs.text, i, y)">
                </div>
            </div>
        </div>

        <div class="author-data d-flex justify-content-between align-items-center">
            <div class="author d-flex justify-content-between align-items-center">
                <div class="avatar-wrapper">
                    <div class="avatar">
                        <div class="gradient">
                            <div class="image-wrapper" :style="imageWrapperImage">
                            </div>
                        </div>
                    </div>
                </div>
                <span class="date"> {{ blogs.username }} </span>
                <div class="date">
                    {{ blogs.date_ru }}
                </div>
            </div>
            <div class="activity">
                <i class="fas fa-eye"></i>
                {{ blogs.views }}
                <i class="fas fa-comment-dots"></i>
                {{ blogs.commentsCount }}
            </div>
        </div>
    </a>
</template>

<script>
import Swal from 'sweetalert2'

import NewsService from "../../services/NewsService";

export default {
    name: "BlogsRowMobile",
    props: {
        blogs: {
            default: {}
        },
        className: {

        },
        isPage: {
            default: true
        }
    },
    computed: {
        lang() {
            return NewsService.lang;
        },
        imageWrapperImage() {
            const background = '/uploads/avatars/' + this.blogs.user_logo;

            return {
                'background-image': `url('${background}'), url('/images/noLogoAvatar.png')`
            }
        }
    },
    methods: {
        getClass(index, index2) {
            let className = 'w-60';

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
        addBookmark(blogs) {
            event.preventDefault();

            NewsService.setBookmark(blogs.id, !blogs.bookmark)
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
        getSlug(blogs) {
            try{
                let type = this.getTitleUrl(blogs.type.title)
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                ;
                let game = this.getTitleUrl(blogs.game.name)
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                ;
                let title =  this.getTitleUrl(blogs.title)
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                ;
                let date = this.getTitleUrl(blogs.date_ru_with_year_for_url)
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                ;
                return type+'/'+game+'/'+title+'-'+date;
            } catch (e) {
                let title =  this.getTitleUrl(blogs.title)
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
        },
        getUrl(blog){
            let url  = '';

            if(this.isPage){
                url = `/${this.lang}/blog/${blog.id}/` + this.getSlug(blog);
            } else {
                if(blog.status === 1){
                    url = `/${this.lang}/blog/${blog.id}/` + this.getSlug(blog);
                } else  if(blog.status === 2 || blog.status === 5){
                    url = `/${this.lang}/editBlog/${blog.id}`;
                }
            }
            return url;
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
    height: 25vw;
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
    font-size: 3.2vw;
}

.article-wrapper {
    height: 50vw;
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 65%);
}

.article-wrapper .bookmark {
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
<style scoped lang="scss">
    #avatar-upload-form {
        display: none;
    }

    .avatar-wrapper {
        .avatar {
            display: flex;
            justify-content: center;
            margin-right: 5px;

            .gradient {
                width: 6vw;
                height: 6vw;
                border-radius: 50%;
                border-radius: 50%;
                background: #ff6f1f;
                background: -moz-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
                background: -webkit-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
                background: linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6f1f", endColorstr="#ffc24f", GradientType=1);

                .image-wrapper {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-image: url("/images/noLogo.png");
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
        }

        .upload {
            display: flex;
            justify-content: center;
            margin-top: 1.5vw;
            flex-direction: column;
            align-items: center;

            span {
                font-size: 1vw;
            }

            label {
                background: #ff6d1d;
                font-size: 1vw;
                height: 2.3vw;
                width: 9.5vw;
                color: white;
                display: flex;
                justify-content: center;
                border-radius: .3vw;
                align-items: center;
                cursor: pointer;
            }

            label:hover {
                background: #ff8f2b;
            }
        }
    }

    .dark {
        #avatar.setting-container-body.avatar-setting {
            background: #25282a;
            background: -moz-linear-gradient(90deg, #25282a 0%, #3d4146 100%);
            background: -webkit-linear-gradient(
                            90deg, #25282a 0%, #3d4146 100%);
            background: linear-gradient(
                            90deg, #25282a 0%, #3d4146 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#3d4146", GradientType=1);
        }

        .upload {
            label {
                border: .1vw solid white;
            }
        }
    }
    .status{
        font-size: 1vw;
        text-transform: uppercase;
        padding: .1vw .6vw;
        color: white;
        background: #ff6d1d;
        border-radius: .2vw;
        border: none;
        margin-right: .5vw;
        padding-top: 1vw;
        padding-bottom: 1vw;
    }
</style>