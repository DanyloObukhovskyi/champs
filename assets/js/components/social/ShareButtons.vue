<template>
    <div>
        <span class="share">
            <i class="fas fa-share-alt"></i>
        </span>
        <a :href="'https://vk.com/share.php?url=' + url">
            <img src="/images/news/vk.svg" alt="">
        </a>
        <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + url">
            <img src="/images/news/fb.svg" alt="">
        </a>
        <a :href="'https://connect.ok.ru/offer?title=Champs.pro&url=' + url">
            <img src="/images/news/ok.svg" alt="">
        </a>
        <a :href="'http://twitter.com/share?text=Champs.pro&url' + url">
            <img src="/images/news/tw.svg" alt="">
        </a>
        <a :href="'https://xn--r1a.link/share/url?url=' + url">
            <img src="/images/news/tg.svg" alt="">
        </a>
    </div>
</template>

<script>
    export default {
        name: "ShareButtons",
        computed: {
            url() {
                return location.href
            }
        },
        methods: {
            share() {

            }
        }
    }
</script>

<style scoped>
    .share {
        color: #8298ac;
        font-size: .8vw;
    }

    div a img {
        width: 2.2vw;
    }

    div a {
        margin: .15vw;
    }
</style>