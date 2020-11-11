<template>
    <div class="comments-wrapper">
        <div class="comments" v-if="!load">
            <div class="comment" v-for="comment in sliceComments">
                <div class="user">
                    <div class="avatar">
                        <img :src="comment.user.photo">
                    </div>
                    <div class="name">
                        {{getUserName(comment.user)}}
                    </div>
                    <div class="date">
                        {{comment.createdAt}}
                    </div>
                </div>
                <div class="text">
                    {{comment.comment}}
                </div>
            </div>
            <div v-if="comments.length - commentsOffset > 0"
                 class="more-comments"
                 @click="commentsOffset = comments.length">
                {{moreCommentsTitle}}
            </div>
        </div>

    </div>
</template>

<script>
    import Loader from "../helpers/Loader";

    export default {
        name: "NewsCommentsList",
        props: ['newsId', 'comments'],
        components: {
            'loader': Loader
        },
        data() {
            return {
                load: false,
                commentsOffset: 2
            }
        },
        computed: {
            sliceComments() {
                const comments = [];

                if (this.comments.length >= 2){
                    for (let num = 0; num < this.commentsOffset; num++) {
                        comments.push(this.comments[num])
                    }
                    return comments;
                } else {
                    return this.comments;
                }
            },
            moreCommentsTitle() {
                let title;
                const offset = this.comments.length - this.commentsOffset;

                if (offset === 1) {
                    title = 'Еще 1 коментарий';
                } else if (offset > 1 && offset < 5) {
                    title = `Еще ${offset} коментария`;
                } else {
                    title = `Еще ${offset} коментариев`;
                }
                return title;
            }
        },
        methods: {
            getUserName(user) {
                if (user.name === null || user.surname === null) {
                    return user.nickname;
                } else {
                    return `${user.name} ${user.surname}`;
                }
            }
        }
    }
</script>

<style scoped>
    .comments-wrapper .comments {
        margin-top: 1vw;
    }

    .comments-wrapper .comments .comment {
        width: 100%;
        display: flex;
        padding: 1vw 0;
        flex-direction: column;
        padding: .8vw;
        background: #ffffff;
    }

    .comments-wrapper .comments .comment img {
        height: 3vw;
        border-radius: 50%;
        background-color: #AAA;
        flex-shrink: 0;
        overflow: hidden;
    }

    .comments-wrapper .comments .comment .user {
        display: flex;
        align-items: center;
    }

    .comments-wrapper .comments .comment .user .name {
        font-size: 1vw;
        color: #5c6b79;
        padding: 0 .6vw;
    }

    .comments-wrapper .comments .comment .user .date {
        font-size: 1vw;
        color: #919191;
    }

    .comments-wrapper .comments .comment .text {
        font-size: 1vw;
        margin-top: .5vw;
    }

    .comments-wrapper .comments .more-comments {
        display: flex;
        justify-content: center;
        font-size: 1vw;
        padding: .5vw;
        color: #ff772c;
        background: #fff;
        cursor: pointer;
    }

    .dark .comments-wrapper .comments .more-comments,
    .dark .comments-wrapper .comments .comment {
        background: #1e2123;
    }

    .dark .comments-wrapper .comments .comment .text {
        color: white;
    }
</style>