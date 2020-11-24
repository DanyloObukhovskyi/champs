<template>
    <div>
        <span class="share" v-if="showShareIcon">
            <i class="fas fa-share-alt"></i>
        </span>
        <a :href="'https://vk.com/share.php?url=' + url">
            <img class="vk" src="/images/news/vk.svg" alt="">
        </a>
        <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + url">
            <img class="fb" src="/images/news/fb.svg" alt="">
        </a>
        <a :href="'https://connect.ok.ru/offer?title=Champs.pro&url=' + url">
            <img class="ok" src="/images/news/ok.svg" alt="">
        </a>
        <a :href="'http://twitter.com/share?text=Champs.pro&url' + url">
            <img class="tw" src="/images/news/tw.svg" alt="">
        </a>
        <a :href="'https://xn--r1a.link/share/url?url=' + url">
            <img class="tg" src="/images/news/tg.svg" alt="">
        </a>
    </div>
</template>

<script>
    export default {
        name: "ShareButtons",
        props: {
            showShareIcon: {
                default: true
            }
        },
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

    .dark img.vk {
        content: url("/images/news/vkDark.svg");
    }

    .dark img.fb {
        content: url("/images/news/fbDark.svg");
    }

    .dark img.ok {
        content: url("/images/news/okDark.svg");
    }

    .dark img.tw {
        content: url("/images/news/twDark.svg");
    }

    .dark img.tg {
        content: url("/images/news/tgDark.svg");
    }
</style>