<template>
    <div class="video-slider video-slider-home">
        <lamp-header title="Видео" :link="'https://www.youtube.com/channel/' + channelId" link-description="Смотреть все"></lamp-header>
        <div class="slider-body">
            <slick-carousel v-bind="settings" v-if="videos.length > 0">
                <div class="carousel-item" :class="{active: index === 0}" v-for="(video, index) in videos">
                    <div class="preview" style="overflow: hidden; max-height: 15vw; position: relative;">
                        <LazyYoutubeVideo :src="'https://www.youtube.com/embed/' + video.videoId"
                                          preview-image-size="sddefault"
                        />
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
    import CabinetService from "../../services/CabinetService";
    import YouTubeService from "../../services/YouTubeService";
    import LazyYoutubeVideo from 'vue-lazy-youtube-video'

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
                channelId: null
            }
        },
        components: {
            'slick-carousel': VueSlickCarousel,
            'lamp-header': LampHeader,
            LazyYoutubeVideo,
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
            },
            getChannelId() {
                YouTubeService.getChannelId()
                    .then(channelId => {
                        this.channelId = channelId;
                    })
            }
        },
        mounted() {
            this.getVideoNews();
            this.getChannelId();
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

	.video-slider .slider-body .carousel-item .preview iframe {
		width: 25vw;
		height: 15vw;
    }

    .video-slider .slider-body .carousel-item .preview::after {
        content: "";
        width: 100%;
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
        font-size: 1vw;
    }

    .dark .video-slider .slider-body .carousel-item div.title {
        color: white;
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
    .video-slider.video-slider-home .slider-body .slick-list {
        padding: 0px !important;
    }

    .slick-prev::before {
        transition: all .2s ease;
        opacity: 1;
        font-family: FontAwesome;
        content: "\f053";
        color: white;
        clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 70%);
        width: 2vw;
        height: 4vw;
        font-size: 1vw;
        justify-content: center;
        display: flex;
        align-items: center;
        background: rgb(254, 121, 36);
        background: -moz-linear-gradient(90deg, rgba(254, 121, 36, 1) 0%, rgba(255, 179, 71, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(254, 121, 36, 1) 0%, rgba(255, 179, 71, 1) 100%);
        background: linear-gradient(90deg, rgba(254, 121, 36, 1) 0%, rgba(255, 179, 71, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fe7924", endColorstr="#ffb347", GradientType=1);
    }

    .slick-prev:hover::before {
        transition: all .2s ease;
        opacity: 1;
        font-family: FontAwesome;
        content: "\f053";
        clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 70%);
        width: 2vw;
        height: 4vw;
        font-size: 1vw;
        justify-content: center;
        display: flex;
        align-items: center;
        color: #ff6d1d;
        background: white;
    }

    .slick-next::before {
        transition: all .2s ease;
        opacity: 1;
        font-family: FontAwesome;
        content: "\f054";
        color: white;
        clip-path: polygon(0 0, 100% 30%, 100% 70%, 0% 100%);
        width: 2vw;
        height: 4vw;
        font-size: 1vw;
        justify-content: center;
        display: flex;
        align-items: center;
        background: rgb(255, 179, 71);
        background: -moz-linear-gradient(90deg, rgba(255, 179, 71, 1) 0%, rgba(254, 121, 36, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(255, 179, 71, 1) 0%, rgba(254, 121, 36, 1) 100%);
        background: linear-gradient(90deg, rgba(255, 179, 71, 1) 0%, rgba(254, 121, 36, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffb347", endColorstr="#fe7924", GradientType=1);
    }

    .slick-next:hover:before {
        transition: all .2s ease;
        opacity: 1;
        font-family: FontAwesome;
        content: "\f054";
        color: #ff6d1d;
        clip-path: polygon(0 0, 100% 30%, 100% 70%, 0% 100%);
        width: 2vw;
        height: 4vw;
        font-size: 1vw;
        justify-content: center;
        display: flex;
        align-items: center;
        background: white;
    }

    .slick-prev, .video-slider .slick-next {
        z-index: 1;
        top: 30%;
    }

    .slick-next {
        margin-right: .8vw;
    }

    .slick-dots li.slick-active button::before {
        content: url("/images/videoSliderActive.svg");
        top: .1vw;
    }

    .slick-dots li button::before {
        color: #9a9c9f;
    }

    .video-slider.video-slider-home .slick-slide[aria-hidden='true']:not(.slick-active) {
        -webkit-mask-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%);
        -webkit-mask-size: 100% 50%;
        -webkit-mask-position: left top, left bottom;
    }
    picture{
        width: auto;
        display: contents;
        height: 202px;
    }
</style>