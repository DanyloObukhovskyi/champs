<template>
    <div class="widget">
        <likes
            :likes="likesCount"
            :users="users"
            :user-like="userLike"
            @setLike="(like) => $emit('setLike', like)">
        </likes>
        <div class="share-buttons" :class="{'height-5': !fullHeight}">
            <share-buttons :show-share-icon="false"/>
        </div>
        <div class="dots" @click="fullHeight = true" v-if="!fullHeight">
            <img src="/images/news/dots.svg" alt="">
        </div>
        <div class="comments-count" @click="scrollToComments">
            <i class="fas fa-comment-dots"></i>
            {{commentsCount != null ? commentsCount: 0}}
        </div>
    </div>
</template>

<script>
    import ShareButtons from "../social/ShareButtons";
    import Likes from "../likes/Likes";

    export default {
        name: "NewsWidget",
        props: [
            'userLike',
            'users',
            'likesCount',
            'commentsCount',
        ],
        data() {
            return {
                fullHeight: false,
                imagesPath: '/images/temp/matches/'
            }
        },
        components: {
            Likes,
            'share-buttons': ShareButtons
        },
        methods: {
            scrollToComments() {
                document.getElementById('comments')
                    .scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'nearest'
                    })
            }
        }
    }
</script>

<style scoped>
    .widget {
        background: white;
        position: fixed;
        left: 0;
        bottom: 40%;
        padding: .5vw;
    }

    .dark .widget {
        background: #1e2123;
        color: white;
    }

    .widget i {
        color: #5c6b79;
    }

    .widget .share-buttons {
        overflow: hidden;
        height: 13vw;
        transition: all .3s ease-in-out;
    }

    .widget .share-buttons div {
        display: flex;
        flex-flow: column;
        overflow: hidden;
    }

    .widget .share-buttons.height-5 {
        transition: all 1s ease-in-out;
        height: 5vw;
    }

    .dots {
        display: flex;
        justify-content: center;
        padding: 1vw 0;
        cursor: pointer;
    }

    .comments-count {
        font-size: 1vw;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .comments-count i {
        margin-right: .5vw;
    }

    .users img {
        width: 2.2vw;
        border-radius: 50%;
        margin-left: -1vw;
    }

    .users img:nth-child(1) {
        margin-left: 0;
    }
</style>

<style>
    .share-buttons a {
        display: flex;
        justify-content: center;
    }
</style>