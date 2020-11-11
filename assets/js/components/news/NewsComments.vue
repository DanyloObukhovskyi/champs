<template>
    <div class="comments">
        <div class="comments-count">
            Коментарии <span>{{comments.length}}</span>
        </div>
        <div class="comments-form" v-if="user !== null">
            <div class="image">
                <div class="user-photo">
                    <img :src="'/images/uploads/' + user.photo" @error="$event.target.src = '/images/noLogo.png'">
                </div>
            </div>
            <div class="input">
                <div class="input-wrapper">
                    <textarea @keydown="autosize" v-model="comment" placeholder="Новый комментарий"></textarea>
                    <img class="smile" @click="showEmoji = !showEmoji" src="/images/news/smile.svg">
                    <div class="send">
                        <i @click="sendComment" class="fas fa-paper-plane"></i>
                    </div>
                    <div class="emoji-picker" v-if="showEmoji">
                        <emoji-picker @select="selectEmoji"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="sing-in" v-else>
            <span @click="showLogin" class="login">Войдите</span>, чтобы комментировать статью
        </div>
        <comments-list ref="commentsList" :news-id="newsId" :comments="comments"/>
        <div class="loader">
            <loader v-if="load"></loader>
        </div>
    </div>
</template>

<script>
    import {VEmojiPicker} from 'v-emoji-picker';
    import NewsCommentsList from "./NewsCommentsList";
    import Swal from 'sweetalert2'
    import Loader from "../helpers/Loader";

    export default {
        name: "NewsComments",
        props: ['newsId', 'comments'],
        inject: [
            'header'
        ],
        components: {
            'emoji-picker': VEmojiPicker,
            'comments-list': NewsCommentsList,
            'loader': Loader
        },
        data() {
            return {
                showEmoji: false,
                user: null,
                load: false,
                comments: [],
                comment: '',
                comments: []
            }
        },
        methods: {
            getAuthUser() {
                axios.post('/ru/get/auth')
                    .then(({data}) => {
                        this.user = data;
                    })
            },
            sendComment() {
                if (this.comment === '') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Упс...',
                        text: 'Коментарий не может быть пустым!',
                    })
                } else {
                    const data = {
                        comment: this.comment,
                        id: this.newsId
                    }
                    this.comment = '';

                    axios.post('/ru/news/add/comment', data)
                        .then(() => {
                            this.getComments();
                        })
                }
            },
            autosize() {
                event.target.style.cssText = 'height:auto; padding:0';
                event.target.style.cssText = 'height:' + event.target.scrollHeight + 'px';
            },
            selectEmoji(emoji) {
                this.comment += emoji.data
            },
            showLogin() {
                this.header.show = true;
            },
            getComments() {
                this.load = true;
                this.comments = [];
                axios.post(`/ru/news/${this.newsId}/comments`)
                    .then(({data}) => {
                        this.load = false;
                        this.$emit('update', data)
                    })
            },
        },
        mounted() {
            this.getAuthUser()
        }
    }
</script>

<style scoped>
    .comments .comments-form {
        display: flex;
        align-items: center;
    }

    .comments .comments-form .image .user-photo img {
        border-radius: 50%;
        height: 3vw;
        width: 3vw;
    }

    .comments .comments-form .image .user-photo {
        background: #fc6c1d;
        width: 3.4vw;
        height: 3.4vw;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .comments .comments-form .image {
        background-color: #2d3135;
        width: 4.8vw;
        height: 4.8vw;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .comments .comments-form .input {
        width: 100%;
        margin-left: -1vw;
    }

    .comments .comments-form .input .input-wrapper {
        padding: .5vw;
        display: flex;
        background: rgb(89, 92, 95);
        background: -moz-linear-gradient(90deg, rgba(89, 92, 95, 1) 31%, rgba(51, 55, 59, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(89, 92, 95, 1) 31%, rgba(51, 55, 59, 1) 100%);
        background: linear-gradient(90deg, rgba(89, 92, 95, 1) 31%, rgba(51, 55, 59, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#595c5f", endColorstr="#33373b", GradientType=1);
    }

    .dark .comments .comments-form .input .input-wrapper {
        background: rgb(47, 50, 51);
        background: -moz-linear-gradient(90deg, rgba(47, 50, 51, 1) 0%, rgba(36, 39, 41, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(47, 50, 51, 1) 0%, rgba(36, 39, 41, 1) 100%);
        background: linear-gradient(90deg, rgba(47, 50, 51, 1) 0%, rgba(36, 39, 41, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2f3233", endColorstr="#242729", GradientType=1);
    }

    .comments .comments-form .input .input-wrapper textarea {
        outline: unset;
        border: unset;
        font-size: 1vw;
        padding-left: .6vw;
        width: 100%;
        height: 3vw;
        outline: unset;
        display: flex;
        align-items: center;
        padding-top: .6vw;
        background: rgb(241, 241, 241);
        background: -moz-linear-gradient(90deg, rgba(241, 241, 241, 1) 31%, rgba(255, 255, 255, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(241, 241, 241, 1) 31%, rgba(255, 255, 255, 1) 100%);
        background: linear-gradient(90deg, rgba(241, 241, 241, 1) 31%, rgba(255, 255, 255, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1f1f1", endColorstr="#ffffff", GradientType=1);
    }

    .dark .comments .comments-form .input .input-wrapper textarea {
        background: #35393e;
        color: white;
    }

    .comments .comments-form .input .input-wrapper .smile {
        margin-left: 1.5vw;
        margin-right: 1vw;
        width: 1.5vw;
        cursor: pointer;
    }

    .comments .comments-form .input .input-wrapper .emoji-picker {
        position: absolute;
        top: 2vw;
        right: -8.5vw;
        z-index: 1;
    }

    .comments .comments-form .send {
        display: flex;
        align-items: center;
        padding-left: .5vw;
        padding-right: .6vw;
    }

    .comments .comments-form .send i {
        cursor: pointer;
        background: linear-gradient(90deg, rgba(255, 185, 74, 1) 31%, rgba(254, 121, 36, 1));
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        font-size: 1.5vw;
    }

    .comments .sing-in {
        margin-top: 1vw;
        font-size: 1vw;
        display: flex;
        justify-content: flex-end;
    }

    .comments .sing-in .login {
        color: #ff6d1d;
        cursor: pointer;
    }

    .dark .comments .sing-in,
    .dark .comments .comments-count {
        color: white;
    }

    .comments .comments-count {
        font-size: 1.5vw;
    }

    .comments .comments-count span {
        color: #8298ac;
    }

    .comments .loader {
        display: flex;
        justify-content: center;
    }
</style>