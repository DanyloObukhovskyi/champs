<template>
    <div class="banner-slider slider-body">
        <slick-carousel v-bind="settings" v-if="banners.length > 0">
            <div class="carousel-item d-flex" :class="{active: index === 0}" v-for="(banner, index) in banners">
                <div class="banner w-100">
                    <a target="_blank" :href="banner.url" class="">
                        <img :src="'/images/' + banner.img" class="w-100" style="height: 11vw;"/>
                    </a>
                </div>
                <div class="banner-small" v-if="banner.small">
                    <a target="_blank" :href="banner.small.url" class="">
                        <img :src="'/images/' + banner.small.img" class="w-100" style="height: 11vw;"/>
                    </a>
                </div>
            </div>
        </slick-carousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: "BannerSlider",
        data() {
            return {
                banners: [
                    {
                        url: '/',
                        img: 'banner.png',
                        small: {
                            url: '/',
                            img: 'smallBanner.png',
                        }
                    },
                    {
                        url: '/',
                        img: 'banner.png',
                    },
                    {
                        url: '/',
                        img: 'banner.png',
                        small: {
                            url: '/',
                            img: 'smallBanner.png',
                        }
                    },
                ],
                settings: {
                    dots: true,
                    edgeFriction: 0.35,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            }
        },
        components: {
            'slick-carousel': VueSlickCarousel,
        },
    }
</script>

<style scoped>
    .slider-body {
        margin-top: 2vw;
    }

    .banner-small {
        padding-left: 1vw;
    }

    .banner-small img {
        height: 11vw;
        width: 11vw;
    }

    .banner img, .banner-small img {
        height: 11vw;
    }
</style>

<style>
    .banner-slider.slider-body .slick-slider.slick-initialized .slick-arrow {
        position: absolute;
        top: 4vw;
    }
</style>