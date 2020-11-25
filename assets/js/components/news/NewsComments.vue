<template>
    <div id="comments">
        <div class="comments-count">
            Коментарии <span>{{commentsCount}}</span>
        </div>
        <comments-form
                @send="sendComment"
                v-if="user !== null"
                :user="user">
        </comments-form>
        <div class="sing-in" v-else>
            <span @click="showLogin" class="login">Войдите</span>, чтобы комментировать статью
        </div>
        <div>
            <comments-list
                    ref="commentsList"
                    @setLike="setLike"
                    @sendAnswer="sendAnswer"
                    :user="user"
                    :news-id="newsId"
                    :comments="comments">
            </comments-list>
            <div class="loader">
                <loader v-if="load"></loader>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from "../helpers/Loader";
    import CommentsForm from "../comments/CommentsForm";
    import CommentsList from "../comments/CommentsList";
    import NewsService from "../../services/NewsService";

    export default {
        name: "NewsComments",
        props: ['newsId', 'comments', 'commentsCount'],
        inject: [
            'header'
        ],
        components: {
            CommentsForm,
            CommentsList,
            Loader,
        },
        data() {
            return {
                user: null,
                load: false,
                comments: []
            }
        },
        methods: {
            sendComment(comment) {
                NewsService
                    .sendComment(this.newsId, comment)
                    .then(() => {
                        this.getComments();
                    })
            },
            showLogin() {
                this.header.show = true;
            },
            getComments() {
                this.load = true;
                this.comments = [];

                NewsService
                    .getComments(this.newsId)
                    .then(data => {
                        this.load = false;
                        this.$emit('update', data)
                    })
            },
            sendAnswer({comment, answer}) {
                NewsService
                    .sendCommentAnswer(this.newsId, comment.id, answer)
                    .then(() => {
                        this.getComments();
                    })
            },
            setLike({comment, type}) {
                NewsService
                    .setCommentLike(comment.id, type)
                    .then(data => {
                        comment.likesCount = data.likesCount;
                        comment.userLike = data.userLike;
                    })
            }
        },
        mounted() {
            this.user = NewsService.user
        }
    }
</script>

<style scoped>
    #comments .sing-in {
        margin-top: 1vw;
        font-size: 1vw;
        display: flex;
        justify-content: flex-end;
    }

    #comments .sing-in .login {
        color: #ff6d1d;
        cursor: pointer;
    }

    .dark #comments .sing-in,
    .dark #comments .comments-count {
        color: white;
    }

    #comments .comments-count {
        font-size: 1.5vw;
        margin: 1vw 0;
    }

    #comments .comments-count span {
        color: #8298ac;
    }

    #comments .loader {
        display: flex;
        justify-content: center;
    }
</style>