<template>
    <div class="likes">
        <div class="users">
            <img v-for="user in users" :src="imagesPath + user.photo" @error="$event.target.src = '/images/noLogo.png'">
        </div>
        <div class="likes-count-first">
            {{ likes }}
        </div>
        <div class="like" @click="setLike">
          <img v-if="!isLiked" src="/images/news/like.svg">
            <img v-else src="/images/news/likeActive.png">

            <svg class="active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18">
                <path d="M363.1,1561.75H360.62a0.614,0.614,0,0,0-.62.61v11.03a0.613,0.613,0,0,0,.62.61H363.1a0.614,0.614,0,0,0,.621-0.61v-11.03A0.615,0.615,0,0,0,363.1,1561.75Zm14.35,0c-0.1-.02-4.777,0-4.777,0l0.653-1.76c0.451-1.22.159-3.08-1.092-3.74a2.158,2.158,0,0,0-1.435-.2,1,1,0,0,0-.632.46,2.575,2.575,0,0,0-.2.87,3.724,3.724,0,0,1-1.052,1.99c-0.963.93-3.955,3.6-3.955,3.6v9.8H375.3A10.474,10.474,0,0,0,377.451,1561.75Z" transform="translate(-360 -1556)"/>
            </svg>
        </div>
        <div class="dislike" @click="setDislike">
            <img v-if="!isDisliked" src="/images/news/dislike.svg">
            <img v-else src="/images/news/dislikeActive.png">

            <svg class="active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18">
                <path d="M402.9,1568.25h2.482a0.614,0.614,0,0,0,.62-0.61v-11.03a0.613,0.613,0,0,0-.62-0.61H402.9a0.613,0.613,0,0,0-.62.61v11.03A0.614,0.614,0,0,0,402.9,1568.25Zm-14.349,0c0.1,0.02,4.777,0,4.777,0l-0.653,1.76c-0.451,1.22-.159,3.08,1.092,3.74a2.158,2.158,0,0,0,1.435.2,1,1,0,0,0,.632-0.46,2.575,2.575,0,0,0,.2-0.87,3.717,3.717,0,0,1,1.052-1.99c0.963-.93,3.954-3.6,3.954-3.6v-9.81H390.7A10.484,10.484,0,0,0,388.549,1568.25Z"
                      transform="translate(-387 -1556)"/>
            </svg>
        </div>
        <span class="likes-count-two">
            {{ likes }} нравится
        </span>
    </div>
</template>

<script>
export default {
    name: "LikesMobile",
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
    font-size: 4vw;
    display: flex;
    align-items: center;
}

.likes .like img,
.likes .dislike img {
    width: 5vw;
    margin-right: .3vw;
    cursor: pointer;
}

.likes .like .active,
.likes .dislike .active {
    display: none;
}

.likes .like .active path,
.likes .dislike .active path{
    fill: #FF6D1D;
    fill-rule: evenodd;
}

.widget .likes .like:hover img,
.widget .likes .dislike:hover img {
    /*margin: 0;*/
  margin-left: .3vw;
}

.share .likes .like:hover img,
.share .likes .dislike:hover img {
  /*margin: 0;*/
  margin-bottom: .3vw;
}

.likes .like:hover .active,
.likes .dislike:hover .active {
    cursor: pointer;
    /*margin-right: .3vw;*/
}

.likes .dislike img {
    width: 5vw;
    margin-right: 2.3vw;
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
    /*margin-right: 0;*/
    margin-bottom: .4vw;
    width: 2vw;
}

.widget .likes .like:hover .active,
.widget .likes .dislike:hover .active {
    width: 2vw;
    cursor: pointer;
    height: 2.1vw;
    margin-top: -2px;
}

.widget .likes .likes-count-first {
    display: block;
}

.widget .likes .likes-count-two {
    display: none;
}
</style>