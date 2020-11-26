<template>
    <div class="likes">
        <div class="users">
            <img v-for="user in users" :src="imagesPath + user.photo" @error="$event.target.src = '/images/noLogo.png'">
        </div>
        <div class="likes-count-first">
            {{likes}}
        </div>
        <div class="like">
            <img v-if="!isLiked" src="/images/news/like.svg" @click="setLike">
            <img v-else src="/images/news/likeActive.png">
        </div>
        <div class="dislike">
            <img v-if="!isDisliked" src="/images/news/dislike.svg" @click="setDislike">
            <img v-else src="/images/news/dislikeActive.png">
        </div>
        <span class="likes-count-two">
            {{likes}} нравится
        </span>
    </div>
</template>

<script>
    export default {
        name: "Likes",
        props: {
            likes: {
                default: 0
            },
            userLike: {
                default: null,
            },
            users: {
                default: [],
            },
        },
        data() {
            return {
                imagesPath: '/images/temp/matches/'
            }
        },
        computed: {
            isLiked() {
                let isLiked = false;

                if (this.userLike !== null) {
                    isLiked = this.userLike.type === 'like';
                }
                return isLiked;
            },
            isDisliked() {
                let isDisliked = false;

                if (this.userLike !== null) {
                    isDisliked = this.userLike.type === 'dislike';
                }
                return isDisliked;
            }
        },
        methods: {
            setLike() {
                if (!this.isLiked) {
                    this.isDisliked = false;
                    this.isLiked = true;

                    this.$emit('setLike', 'like')
                }
            },
            setDislike() {
                if (!this.isDisliked) {
                    this.isDisliked = true;
                    this.isLiked = false;

                    this.$emit('setLike', 'dislike')
                }
            }
        }
    }
</script>

<style scoped>
    .dark .likes {
        color: white;
    }

    .likes {
        width: 70%;
        font-size: 1vw;
        display: flex;
        align-items: center;
    }

    .likes .like img,
    .likes .dislike img {
        width: 1.2vw;
        margin-right: .3vw;
        cursor: pointer;
    }

    .likes span {
        margin-right: .3vw;
    }

    .likes .users {
        margin-right: .8vw;
    }

    .likes .users img {
        width: 2.2vw;
        border-radius: 50%;
        margin-left: -1vw;
    }

    .likes .users img:nth-child(1) {
        margin-left: 0;
    }

    .likes .likes-count-first {
        display: none;
    }

    .widget .likes,
    .dark .widget .likes {
        display: block;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        margin: 0;
        font-size: 1vw;
        color: #8298ac;
    }

    .widget .likes .users {
        margin-right: 0;
        display: flex;
    }

    .widget .likes .like img,
    .widget .likes .dislike img {
        margin-right: 0;
        margin-bottom: .4vw;
        width: 2vw;
    }

    .widget .likes .likes-count-first {
        display: block;
    }

    .widget .likes .likes-count-two {
        display: none;
    }
</style>