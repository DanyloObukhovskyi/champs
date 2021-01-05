<template>
    <div class="video-slider cabinet-video-slider" v-if="videos.length > 0">
        <div class="slider-body">
            <slick-carousel v-bind="settings">
                <div class="carousel-item" :class="{active: index === 0}" v-for="(video, index) in videos">
                    <div class="preview" style="overflow: hidden; max-height: 15vw; position: relative;">
                        <iframe :src="'https://www.youtube.com/embed/' + video.videoId"
                                class="logo videoBox"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                        </iframe>
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

    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import CabinetService from "../../../services/CabinetService";

    export default {
        name: "CabinetVideoSlider",
        data() {
            return {
                videos: [],
                settings: {
                    centerMode: true,
                    centerPadding: "20px",
                    focusOnSelect: true,
                    infinite: true,
                    slidesToShow: 5,
                    speed: 500,
                    dots: false,
                },
            }
        },
        components: {
            'slick-carousel': VueSlickCarousel,
        },
        methods: {
            getVideoNews() {
                CabinetService.getVideos()
                    .then(videos => {
                        this.videos = videos;
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
    @import '../../../../css/animations.css';

    .cabinet-video-slider {
        -webkit-animation: animation-translate-right 1500ms linear both;
        animation: animation-translate-right 1500ms linear both;
    }

    .video-slider {
        margin-top: -1vw;
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
        width: 13vw;
    }

    .video-slider .slider-body .carousel-item .preview {
        overflow: hidden;
        max-height: 7.2vw;
        display: flex;
        align-items: center;
    }

    .video-slider .slider-body .carousel-item .preview a {
        display: flex;
        align-items: center;
    }

    .video-slider .slider-body .carousel-item .preview iframe {
        width: 13vw;
        height: 7.5vw;
    }

    .video-slider .slider-body .carousel-item .preview::after {
        content: "";
        width: 13vw;
        height: 0.15vw;
        position: absolute;
        left: 0;
        background: linear-gradient(270deg, #ff6d1d -25%, #ffc350 125%);
        bottom: 0;
    }

    .video-slider .slider-body .carousel-item div.title {
        width: 13vw;
        font-size: .7vw;
    }

    .dark .video-slider .slider-body .carousel-item div.title {
        color: white;
    }

    .video-slider .slider-body .carousel-item div.date {
        color: #898989;
        font-size: .5vw;
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
    .video-slider.cabinet-video-slider .slider-body .slick-list {
        padding: 0px 25px !important;
    }

    .video-slider.cabinet-video-slider .slick-prev::before {
        transition: all .2s ease;
        opacity: 1;
        font-family: FontAwesome;
        content: "\f053";
        color: white;
        clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 70%);
        width: 1vw;
        height: 2vw;
        font-size: .5vw;
        justify-content: center;
        display: flex;
        align-items: center;
        background: rgb(254, 121, 36);
        background: -moz-linear-gradient(90deg, rgba(254, 121, 36, 1) 0%, rgba(255, 179, 71, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(254, 121, 36, 1) 0%, rgba(255, 179, 71, 1) 100%);
        background: linear-gradient(90deg, rgba(254, 121, 36, 1) 0%, rgba(255, 179, 71, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fe7924", endColorstr="#ffb347", GradientType=1);
    }

    .video-slider.cabinet-video-slider .slick-prev:hover::before {
        transition: all .2s ease;
        opacity: 1;
        font-family: FontAwesome;
        content: "\f053";
        clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 70%);
        width: 1vw;
        height: 2vw;
        font-size: .5vw;
        justify-content: center;
        display: flex;
        align-items: center;
        color: #ff6d1d;
        background: white;
    }

    .video-slider.cabinet-video-slider .slick-next::before {
        transition: all .2s ease;
        opacity: 1;
        font-family: FontAwesome;
        content: "\f054";
        color: white;
        clip-path: polygon(0 0, 100% 30%, 100% 70%, 0% 100%);
        width: 1vw;
        height: 2vw;
        font-size: .5vw;
        justify-content: center;
        display: flex;
        align-items: center;
        background: rgb(255, 179, 71);
        background: -moz-linear-gradient(90deg, rgba(255, 179, 71, 1) 0%, rgba(254, 121, 36, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(255, 179, 71, 1) 0%, rgba(254, 121, 36, 1) 100%);
        background: linear-gradient(90deg, rgba(255, 179, 71, 1) 0%, rgba(254, 121, 36, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffb347", endColorstr="#fe7924", GradientType=1);
    }

    .video-slider.cabinet-video-slider .slick-next:hover:before {
        transition: all .2s ease;
        opacity: 1;
        font-family: FontAwesome;
        content: "\f054";
        color: #ff6d1d;
        clip-path: polygon(0 0, 100% 30%, 100% 70%, 0% 100%);
        width: 1vw;
        height: 2vw;
        font-size: .5vw;
        justify-content: center;
        display: flex;
        align-items: center;
        background: white;
    }

    .video-slider.cabinet-video-slider .slick-prev,
    .video-slider.cabinet-video-slider .slick-next {
        z-index: 1;
        top: 30%;
        right: 13vw;
    }

    .video-slider.cabinet-video-slider .slick-prev,
    .video-slider.cabinet-video-slider .slick-prev {
        z-index: 1;
        top: 30%;
        left: 14vw;
    }

    .video-slider.cabinet-video-slider .slick-next {
        margin-right: .8vw;
    }

    .video-slider.cabinet-video-slider .slick-dots li.slick-active button::before {
        content: url("/images/videoSliderActive.svg");
        top: .1vw;
    }

    .video-slider.cabinet-video-slider .slick-dots li button::before {
        color: #9a9c9f;
    }

    .video-slider.cabinet-video-slider .slider-body::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 13vw;
        height: 7.2vw;
        z-index: 1;
        background: linear-gradient(90deg, rgba(116, 118, 121, 0.9248074229691877) 43%, rgba(116, 118, 121, 0) 100%);
    }

    .video-slider.cabinet-video-slider .slider-body::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 13vw;
        height: 7.2vw;
        background: linear-gradient(90deg, rgba(116, 118, 121, 0) 0%, rgba(116, 118, 121, 0.9248074229691877) 58%);
    }

    .dark .video-slider.cabinet-video-slider .slider-body::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 13vw;
        height: 7.2vw;
        z-index: 1;
        background: linear-gradient(90deg, rgba(48, 52, 56, 1) 40%, rgba(48, 52, 56, 0.11528361344537819) 100%);
    }

    .dark .video-slider.cabinet-video-slider .slider-body::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 13vw;
        height: 7.2vw;
        background: linear-gradient(90deg, rgba(48, 52, 56, 0.11528361344537819) 0%, rgba(48, 52, 56, 1) 60%);
    }
</style>