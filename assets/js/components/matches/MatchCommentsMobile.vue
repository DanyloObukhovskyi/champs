<template>
    <div id="comments">
        <div class="d-flex justify-content-between align-items-baseline" :style="user !== null ? 'margin-bottom: 6vw;' : ''">
            <div class="comments-count">
                Коментарии <span>{{commentsCount}}</span>
            </div>
            <div class="ordered" @click="sortComments">
                {{orderTypes[order].name}}
                <i class="fas fa-chevron-down" v-if="orderTypes[order].sort === 'asc'"></i>
                <i class="fas fa-chevron-up" v-else></i>
            </div>
        </div>
        <comments-form-mobile
                @send="sendComment"
                v-if="user !== null"
                :user="user">
        </comments-form-mobile>
        <div class="sing-in" v-else>
            <span @click="showLogin" class="login">Войдите</span>, чтобы комментировать матч
        </div>
        <div>
            <comments-list-mobile
                    ref="commentsList"
                    @setLike="setLike"
                    @sendAnswer="sendAnswer"
                    :user="user"
                    :comments="sortedComments">
            </comments-list-mobile>
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
    import MatchService from "../../services/MatchService";
    import NewsService from "../../services/NewsService";
    import CommentsFormMobile from "../comments/CommentsFormMobile";
    import CommentsListMobile from "../comments/CommentsListMobile";

    export default {
        name: "MatchCommentsMobile",
        props: ['matchId', 'comments', 'commentsCount'],
        components: {
            CommentsListMobile,
            CommentsFormMobile,
            CommentsForm,
            CommentsList,
            Loader,
        },
        data() {
            return {
                user: null,
                load: false,
                comments: [],
                order: 0,
                orderTypes: [
                    {
                        name: 'По популярности',
                        type: 'popular',
                        sort: 'asc'
                    },
                    {
                        name: 'По популярности',
                        type: 'popular',
                        sort: 'desc'
                    },
                    {
                        name: 'По дате',
                        type: 'date',
                        sort: 'asc'
                    },
                    {
                        name: 'По дате',
                        type: 'date',
                        sort: 'desc'
                    },
                ],
            }
        },
        computed: {
            sortedComments() {
                return this.sortedComments = this.comments.sort((current, next) => {
                    if (this.orderTypes[this.order].type === 'popular'){
                        if (this.orderTypes[this.order].sort === 'asc'){
                            return next.likesCount - current.likesCount
                        } else {
                            return current.likesCount - next.likesCount
                        }
                    } else {
                        if (this.orderTypes[this.order].sort === 'asc'){
                            return next.timestamp - current.timestamp
                        } else {
                            return current.timestamp - next.timestamp
                        }
                    }
                })
            }
        },
        methods: {
            sendComment(comment) {
                MatchService
                    .sendComment(this.matchId, comment)
                    .then(() => {
                        this.getComments();
                    })
            },
            showLogin() {
                this.$store.dispatch('showLogin')
            },
            getComments() {
                this.load = true;
                this.comments = [];

                MatchService
                    .getComments(this.matchId)
                    .then(data => {
                        this.load = false;
                        this.$emit('update', data)
                    })
            },
            sendAnswer({comment, answer}) {
                MatchService
                    .sendCommentAnswer(this.matchId, comment.id, answer)
                    .then(() => {
                        this.getComments();
                    })
            },
            setLike({comment, type}) {
                MatchService
                    .setCommentLike(comment.id, type)
                    .then(data => {
                        comment.likesCount = data.likesCount;
                        comment.userLike = data.userLike;
                    })
            },
            sortComments() {
                if (this.order === this.orderTypes.length - 1){
                    this.order = 0;
                } else {
                    this.order++;
                }
            }
        },
        mounted() {
            MatchService.getAuthUser()
                .then(user => {
                    this.user = user;
                })
        }
    }
</script>

<style scoped>
    #comments .sing-in {
        margin-top: 1vw;
        font-size: 3vw;
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
        font-size: 3.5vw;
        margin: 1vw 0;
    }

    #comments .comments-count span {
        color: #8298ac;
    }

    #comments .loader {
        display: flex;
        justify-content: center;
    }

    #comments .ordered{
        font-size: 3vw;
        cursor: pointer;
        color: #5c6b79;
    }

    #comments .ordered i {
        margin-left: .5vw;
        color: #717679;
    }
</style>