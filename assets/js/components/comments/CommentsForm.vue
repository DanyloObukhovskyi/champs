<template>
    <div class="comments-form">
        <div class="image">
            <div class="user-photo">
                <img :src="'/images/temp/matches/' + user.photo" @error="$event.target.src = '/images/noLogo.png'">
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
</template>

<script>
    import {VEmojiPicker} from 'v-emoji-picker';
    import Swal from "sweetalert2";

    export default {
        name: "CommentsForm",
        props: [
            'user'
        ],
        data() {
            return {
                comment: '',
                showEmoji: false,
            }
        },
        components: {
            'emoji-picker': VEmojiPicker
        },
        methods: {
            selectEmoji(emoji) {
                this.comment += emoji.data;
            },
            sendComment() {
                if (this.comment === '') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Упс...',
                        text: 'Коментарий не может быть пустым!',
                    })
                } else {
                    this.$emit('send', this.comment);
                    this.comment = '';
                }
            },
            autosize() {
                event.target.style.cssText = 'height:auto; padding:0';
                event.target.style.cssText = 'height:' + event.target.scrollHeight + 'px';
            },
        }
    }
</script>

<style scoped>
    .comments-form {
        display: flex;
        align-items: center;
    }

    .comments-form .image .user-photo img {
        border-radius: 50%;
        height: 3vw;
        width: 3vw;
    }

    .comments-form .image .user-photo {
        background: #fc6c1d;
        width: 3.4vw;
        height: 3.4vw;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .comments-form .image {
        background-color: #2d3135;
        width: 4.8vw;
        height: 4.8vw;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .comments-form .input {
        width: 100%;
        margin-left: -1vw;
    }

    .comments-form .input .input-wrapper {
        padding: .5vw;
        display: flex;
        background: rgb(89, 92, 95);
        background: -moz-linear-gradient(90deg, rgba(89, 92, 95, 1) 31%, rgba(51, 55, 59, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(89, 92, 95, 1) 31%, rgba(51, 55, 59, 1) 100%);
        background: linear-gradient(90deg, rgba(89, 92, 95, 1) 31%, rgba(51, 55, 59, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#595c5f", endColorstr="#33373b", GradientType=1);
    }

    .dark .comments-form .input .input-wrapper {
        background: rgb(47, 50, 51);
        background: -moz-linear-gradient(90deg, rgba(47, 50, 51, 1) 0%, rgba(36, 39, 41, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(47, 50, 51, 1) 0%, rgba(36, 39, 41, 1) 100%);
        background: linear-gradient(90deg, rgba(47, 50, 51, 1) 0%, rgba(36, 39, 41, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2f3233", endColorstr="#242729", GradientType=1);
    }

    .comments-form .input .input-wrapper textarea {
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

    .dark .comments-form .input .input-wrapper textarea {
        background: #35393e;
        color: white;
    }

    .comments-form .input .input-wrapper .smile {
        margin-left: 1.5vw;
        margin-right: 1vw;
        width: 1.5vw;
        cursor: pointer;
    }

    .comments-form .input .input-wrapper .emoji-picker {
        position: absolute;
        top: 2vw;
        right: -8.5vw;
        z-index: 1;
    }

    .comments-form .send {
        display: flex;
        align-items: center;
        padding-left: .5vw;
        padding-right: .6vw;
    }

    .comments-form .send i {
        cursor: pointer;
        background: linear-gradient(90deg, rgba(255, 185, 74, 1) 31%, rgba(254, 121, 36, 1));
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        font-size: 1.5vw;
    }
</style>