<template>
    <div>
        <div class="comment">
            <div class="user">
                <div class="avatar">
                    <img :src="'/images/temp/matches/' + comment.user.photo"
                         @error="$event.target.src = '/images/noLogo.png'">
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
            <div class="d-flex">
                <div v-if="hasChildren">
                    <button class="answer" @click="setActive(comment)">
                        {{active === comment ? 'Отмена' : 'Ответить'}}
                    </button>
                </div>
                <div>
                    <comment-likes
                        :disable="user === null || comment.user.id === user.id"
                        @setLike="setLike"
                        :user="user"
                        :likes="comment.likesCount"
                        :user-like="comment.userLike">
                    </comment-likes>
                </div>
            </div>
        </div>
        <template v-if="hasChildren">
            <comments-form
                @send="sendAnswer"
                v-if="user !== null && active === comment"
                :user="user">
            </comments-form>
            <div class="children" v-if="comment.children.length > 0">
                <img src="/images/news/commentAnswer.svg">
                <div class="comments">
                    <div class="comments-count">
                        {{childrenCount}}
                    </div>
                    <comment
                         :key="index"
                         :user="user"
                         :active="active"
                         :comment="child"
                         @setActive="setActive"
                         @setLike="sendChildLike"
                         @sendAnswer="sendChildAnswer"
                         v-for="(child, index) in comment.children">
                    </comment>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import CommentsForm from "./CommentsForm";
    import CommentLikes from "./CommentLikes";

    export default {
        name: "Comment",
        props: [
            'comment',
            'user',
            'active'
        ],
        components: {
            CommentLikes,
            CommentsForm
        },
        inject: [
            'active'
        ],
        computed: {
            hasChildren() {
                return this.comment.hasOwnProperty('children');
            },
            childrenCount() {
                let text;
                if (this.comment.children.length === 1){
                    text = '1 ответ';
                } else if (this.comment.children.length > 1 && this.comment.children.length <= 4){
                    text = `${this.comment.children.length} ответа`;
                } else {
                    text = `${this.comment.children.length} ответов`;
                }
                return text;
            }
        },
        methods: {
            getUserName(user) {
                if (user.name === null || user.surname === null) {
                    return user.nickname;
                } else {
                    return `${user.name} ${user.surname}`;
                }
            },
            setActive(comment) {
                if (this.user !== null){
                    if (this.active === comment) {
                        this.$emit('setActive', null);
                    } else {
                        this.$emit('setActive', comment);
                    }
                }
            },
            sendChildAnswer(data) {
                this.$emit('sendAnswer', data);
            },
            sendAnswer(answer) {
                this.$emit('sendAnswer', {
                    comment: this.comment,
                    answer: answer
                });
            },
            sendChildLike(data) {
                this.$emit('setLike', data);
            },
            setLike(type) {
                this.$emit('setLike', {
                    comment: this.comment,
                    type: type
                });
            }
        }
    }
</script>

<style scoped>
    .comment {
        width: 100%;
        display: flex;
        padding: 1vw 0;
        flex-direction: column;
        padding: .8vw;
    }

    .children {
        display: flex;
        padding-left: .8vw;
    }

    .children .comments {
        width: 100%;
    }

    .children > img {
        height: 100%;
        width: 1vw;
    }

    .children .comments .comments-count{
        font-size: 1vw;
        margin-left: .7vw;
        margin-top: -.2vw;
        color: #5c6b79;
    }

    .comment img {
        height: 3vw;
        border-radius: 50%;
        background-color: #AAA;
        flex-shrink: 0;
        overflow: hidden;
    }

    .comment .user {
        display: flex;
        align-items: center;
    }

    .comment .user .name {
        font-size: 1vw;
        color: #5c6b79;
        padding: 0 .6vw;
    }

    .comment .user .date {
        font-size: 1vw;
        color: #919191;
    }

    .comment .text {
        font-size: 1vw;
        margin-top: .5vw;
    }

    .dark .comment .text {
        color: white;
    }

    .comment button.answer {
        outline: unset;
        border: unset;
        background: transparent;
        padding: 0;
        cursor: pointer;
        color: #898989;
        font-size: 1vw;
        margin-right: 1vw;
    }
</style>