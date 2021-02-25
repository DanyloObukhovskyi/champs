<template>
    <div class="banner-slider slider-body" v-if="!load">
        <slick-carousel v-bind="settings" v-if="banners.length > 0">
            <div class="carousel-item d-flex" :class="{active: index === 0}" v-for="(banner, index) in banners">
                <div class="banner w-100">
                    <a target="_blank" :href="banner.url" class="">
                        <img :src="'/uploads/slides/' + banner.img" class="w-100" style="height: 11vw;"/>
                        <p class="banner-text">{{banner.text}}</p>
                    </a>
                </div>
            </div>
        </slick-carousel>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import SlideService from "../../services/SlideService";

export default {
    name: "BigHomeSlider",
    data() {
        return {
            settings: {
                dots: true,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnDotsHover: true,
                pauseOnFocus: true,
                pauseOnHover: true
            },
            load: true,
            banners: [],
        }
    },
    components: {
        'slick-carousel': VueSlickCarousel,
    },
    methods: {
        getSlides() {
            SlideService.getHomeSlides()
                .then(banners => {
                    this.banners = banners;
                    this.load = false
                })
        }
    },
    mounted() {
        this.getSlides();
    }
}
</script>

<style scoped lang="scss">
@import '../../../css/animations.css';

.banner-slider {
  margin-left: -0.6vw;
  -webkit-animation: animation-translate-right 1500ms linear both;
  animation-delay: 1.5s;
  animation: animation-translate-right 1500ms linear both;
  margin-bottom: 1vw;

  .carousel-item {
    .banner {
      a {
        img {
          height: 20vw;
        }
      }
    }
  }
}
</style>