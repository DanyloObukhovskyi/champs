<template>
    <div class="banner-slider slider-body">
        <slick-carousel v-bind="settings" v-if="banners.length > 0">
            <div class="carousel-item d-flex" :class="{active: index === 0}" v-for="(banner, index) in banners">
                <div class="banner w-100">
                    <a target="_blank" :href="banner.url" class="">
                        <img :src="'/uploads/slides/' + banner.img" class="w-100" style="height: 11vw;"/>
                        <p class="banner-text">{{banner.text}}</p>
                    </a>
                </div>
                <!--                <div class="banner-small" v-if="banner.small">-->
                <!--                    <a target="_blank" :href="banner.small.url" class="">-->
                <!--                        <img :src="'/images/' + banner.small.img" class="w-100" style="height: 11vw;"/>-->
                <!--                    </a>-->
                <!--                </div>-->
            </div>
        </slick-carousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import SlideService from "../../services/SlideService";

    export default {
        name: "BannerSlider",
        data() {
            return {
                banners: [],
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
        methods: {
            getSlides() {
                SlideService.getGeneralSlides()
                    .then(banners => {
                        this.banners = banners
                    })
            }
        },
        mounted() {
            this.getSlides();
        }
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

    .banner-text {
        position: absolute;
        top: 0;
        left: 0;
        margin: 1vw 4.6vw;
        font-weight: bold;
        font-size: 2vw;
        color: white;
        width: 50vw;
    }
</style>

<style>
    .banner-slider.slider-body .slick-slider.slick-initialized .slick-arrow {
        position: absolute;
        top: 4vw;
    }
</style>