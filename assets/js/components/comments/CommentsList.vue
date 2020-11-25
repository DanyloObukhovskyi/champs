<template>
    <div class="comments-wrapper">
        <div class="comments" v-if="!load">
            <comment
                :user="user"
                :key="index"
                :active="active"
                :comment="comment"
                @setLike="setLike"
                @setActive="setActive"
                @sendAnswer="sendAnswer"
                v-for="(comment, index) in sliceComments">
            </comment>
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
    import Comment from "./Comment";
    import CommentsForm from "./CommentsForm";

    export default {
        name: "CommentsList",
        props: [
            'newsId',
            'comments',
            'user'
        ],
        components: {
            CommentsForm,
            Loader,
            Comment
        },
        data() {
            return {
                load: false,
                commentsOffset: 2,
                active: null,
            }
        },
        computed: {
            sliceComments() {
                const comments = [];

                if (this.comments.length >= 2) {
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
            },
        },
        methods: {
            setActive(comment) {
                this.active = comment;
            },
            sendAnswer(data) {
                this.$emit('sendAnswer', data)
            },
            setLike(data) {
                this.$emit('setLike', data)
            }
        }
    }
</script>

<style scoped>
    .comments-wrapper {
        background: #ffffff;
    }

    .dark .comments-wrapper {
        background: #1e2123;
    }

    .comments-wrapper .comments {
        margin-top: 1vw;
    }

    .comments-wrapper .comments .more-comments {
        display: flex;
        justify-content: center;
        font-size: 1vw;
        padding: .5vw;
        color: #ff772c;
        background: #fff;
        cursor: pointer;
        margin-top: .5vw;
    }

    .dark .comments-wrapper .comments .more-comments {
        background: #1e2123;
    }
</style>