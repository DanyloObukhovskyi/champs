<template>
    <div style="margin-top: 1vw;">
        <span class="share" v-if="showShareIcon">
            <i class="fas fa-share-alt"></i>
        </span>
        <a :href="'https://vk.com/share.php?url=' + url">
            <img class="vk" src="/images/news/vk.svg">
            <img class="vk hover" src="/images/news/vkHover.svg">
        </a>
        <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + url">
            <img class="fb" src="/images/news/fb.svg">
            <img class="fb hover" src="/images/news/fbHover.svg">
        </a>
        <a :href="'https://connect.ok.ru/offer?title=Champs.pro&url=' + url">
            <img class="ok" src="/images/news/ok.svg">
            <img class="ok hover" src="/images/news/okHover.svg">
        </a>
        <a :href="'http://twitter.com/share?text=Champs.pro&url' + url">
            <img class="tw" src="/images/news/tw.svg">
            <img class="tw hover" src="/images/news/twHover.svg">
        </a>
        <a :href="'https://xn--r1a.link/share/url?url=' + url">
            <img class="tg" src="/images/news/tg.svg">
            <img class="tg hover" src="/images/news/tgHover.svg">
        </a>
    </div>
</template>

<script>
export default {
    name: "ShareButtonsMobile",
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
    font-size: 3.8vw;
}

.share i:hover {
    color: #ff6d1d;
}

div a img {
    width: 10.2vw;
}

div a {
    margin: 1.15vw;
}

div a img.hover {
    display: none;
}

div a:hover img {
    display: none;
}

div a:hover img.hover {
    display: unset;
}

.dark img.vk {
    content: url("/images/news/vkDark.svg");
}

.dark img.vk.hover {
    content: url("/images/news/vkDarkHover.svg");
}

.dark img.fb {
    content: url("/images/news/fbDark.svg");
}

.dark img.fb.hover {
    content: url("/images/news/fbDarkHover.svg");
}

.dark img.ok {
    content: url("/images/news/okDark.svg");
}

.dark img.ok.hover {
    content: url("/images/news/okDarkHover.png");
}

.dark img.tw {
    content: url("/images/news/twDark.svg");
}

.dark img.tw.hover {
    content: url("/images/news/twDarkHover.svg");
}

.dark img.tg {
    content: url("/images/news/tgDark.svg");
}

.dark img.tg.hover {
    content: url("/images/news/tgDarkHover.svg");
}
</style>