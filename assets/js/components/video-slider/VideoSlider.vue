<template>
    <div class="video-slider">
        <lamp-header title="Видео" link="/ru/news" link-description="Смотреть все"></lamp-header>
        <div class="slider-body">
            <slick-carousel v-bind="settings" v-if="videos.length > 0">
                <div class="carousel-item" :class="{active: index === 0}" v-for="(video, index) in videos">
                    <div href="" class="preview" style="overflow: hidden; max-height: 15vw; position: relative;">
                        <a target="_blank" :href="'https://www.youtube.com/watch?v=' + video.video_id">
                            <img :src="video.video_id ? getVideoLogo(video.video_id): 'images/temp/news/' + video.logo"
                                 class="logo videoBox"
                                 alt="Video"/>
                        </a>
                    </div>
                    <div class="title">
                        {{video.title}}
                    </div>
                    <div class="date d-flex align-items-center">
                        <a href="https://www.youtube.com/channel/UCgVGBU8rdEV97x8XVQY_aHA?"
                           class="d-flex align-items-center">
                            <img class="youtube" src="/images/news/youtube.svg" alt="">
                            Chanel Champs
                        </a>
                        {{video.date}}
                    </div>
                </div>
            </slick-carousel>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import LampHeader from "../helpers/LampHeader";
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: "VideoSlider",
        data() {
            return {
                videos: [],
                settings: {
                    centerMode: true,
                    centerPadding: "20px",
                    focusOnSelect: true,
                    infinite: true,
                    slidesToShow: 3,
                    speed: 500,
                    dots: true,
                },
            }
        },
        components: {
            'slick-carousel': VueSlickCarousel,
            'lamp-header': LampHeader
        },
        methods: {
            getVideoNews() {
                axios.post('/ru/main/video/news')
                    .then(({data}) => {
                        this.videos = data;
                    })
            },
            getVideoLogo(videoId) {
                return `//img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }
        },
        mounted() {
            this.getVideoNews();
        }
    }
</script>

<style scoped>

    .video-slider {
        margin-top: 2vw;
    }

    .video-slider .action {
        margin-right: 1vw;
        font-size: .8vw;
        color: #ff6d1d;
    }

    .video-slider .slider-body {
        margin-top: 1.5vw;
    }

    .video-slider .slider-body .slick-slide img:not(.youtube) {
        width: 25vw;
    }

    .video-slider .slider-body .carousel-item .preview {
        overflow: hidden;
        max-height: 14vw;
        position: relative;
    }

    .video-slider .slider-body .carousel-item .preview::after {
        content: "";
        width: 25vw;
        height: 0.15vw;
        position: absolute;
        left: 0;
        background: linear-gradient(270deg, #ff6d1d -25%, #ffc350 125%);
        bottom: 0;
    }

    .video-slider .slider-body .carousel-item .preview img {
        margin-top: -2.3vw;
    }

    .video-slider .slider-body .carousel-item div.title {
        width: 25vw;
    }

    .video-slider .slider-body .carousel-item div.date {
        color: #898989;
        font-size: .7vw;
    }

    .video-slider .slider-body .carousel-item div.date a {
        color: #5c6b79;
        margin-right: .2vw;
    }

    .video-slider .slider-body .carousel-item div.date a img {
        margin-right: .2vw;
    }

    .video-slider .slider-body .carousel-item div.date {
        color: #5c6b79;
    }
</style>

<style>
    .video-slider .slider-body .slick-list {
        padding: 0px !important;
    }

    .video-slider .slick-prev::before {
        content: url('/images/backOrange.svg');
    }

    .video-slider .slick-next::before {
        content: url('/images/nextOrange.svg');
    }

    .video-slider .slick-prev, .video-slider .slick-next {
        z-index: 1;
        top: 30%;
    }

    .video-slider .slick-next {
        margin-right: .8vw;
    }

    .video-slider .slick-dots li.slick-active button::before {
        content: url("/images/videoSliderActive.svg");
        top: .1vw;
    }
</style>