<template>
    <div class="likes">
        <div class="like">
            <img v-if="!isLiked" src="/images/news/like.svg" @click="setLike">
            <img v-else src="/images/news/likeActive.png">
        </div>
        <div class="likes-count" :class="{'red': Number(likes) < 0, 'green': Number(likes) > 0}">
            {{likes}}
        </div>
        <div class="dislike">
            <img v-if="!isDisliked" src="/images/news/dislike.svg" @click="setDislike">
            <img v-else src="/images/news/dislikeActive.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentLikes",
        props: {
            likes: {
                default: 0
            },
            userLike: {
                default: null,
            },
            user: {
                default: null,
            }
        },
        computed: {
            isLiked() {
                let isLiked = false;
                if (this.userLike !== null) {
                    if (this.userLike.type === 'like') {
                        isLiked = true;
                    }
                }
                return isLiked;
            },
            isDisliked() {
                let isDisliked = false;
                if (this.userLike !== null) {
                    if (this.userLike.type === 'dislike') {
                        isDisliked = true;
                    }
                }
                return isDisliked;
            },
        },
        methods: {
            setLike() {
                if (!this.isLiked && this.user !== null) {
                    this.$emit('setLike', 'like')
                }
            },
            setDislike() {
                if (!this.isDisliked && this.user !== null) {
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
        width: 1vw;
        cursor: pointer;
    }

    .likes span {
        margin-right: .3vw;
    }

    .likes .users img {
        width: 2.2vw;
        border-radius: 50%;
        margin-left: -1vw;
    }

    .likes .users img:nth-child(1) {
        margin-left: 0;
    }

    .likes-count {
        margin: 0 .5vw;
        color: #9d9fa0;
    }

    .red {
        color: #fe5050;
    }

    .green {
        color: #45b35e;
    }
</style>