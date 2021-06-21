<template>
    <div class="video-slider video-slider-home">
        <lamp-header title="Видео" :link="'https://www.youtube.com/channel/' + channelId" link-description="Смотреть все"></lamp-header>
        <div class="slider-body">
            <slick-carousel v-bind="settings" v-if="videos.length > 0">
                <div class="carousel-item" :class="{active: index === 0}" v-for="(video, index) in videos">
                    <div class="preview" style="overflow: hidden; max-height: 15vw; position: relative;">
                        <div class="youtube" :data-embed="video.videoId">
                            <div class="play-button"></div>
                        </div>
<!--                        <iframe :src="'https://www.youtube.com/embed/' + video.videoId"-->
<!--                                class="logo videoBox"-->
<!--                                frameborder="0"-->
<!--                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"-->
<!--                                allowfullscreen>-->
<!--                        </iframe>-->
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
            'lamp-header': LampHeader
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
            },
            getImages()
            {
                var youtube = document.querySelectorAll( ".youtube" );

                for (var i = 0; i < youtube.length; i++) {

                    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";

                    var image = new Image();
                    image.src = source;
                    image.addEventListener( "load", function() {
                        youtube[ i ].appendChild( image );
                    }( i ) );

                    youtube[i].addEventListener( "click", function() {

                        var iframe = document.createElement( "iframe" );

                        iframe.setAttribute( "frameborder", "0" );
                        iframe.setAttribute( "allowfullscreen", "" );
                        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

                        this.innerHTML = "";
                        this.appendChild( iframe );
                    } );
                };
            }
        },
        mounted() {
            this.getVideoNews();
            this.getChannelId();
            this.getImages();
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

    .youtube {
        background-color: #000;
        margin-bottom: 30px;
        position: relative;
        padding-top: 56.25%;
        overflow: hidden;
        cursor: pointer;
    }
    .youtube img {
        width: 100%;
        top: -16.82%;
        left: 0;
        opacity: 0.7;
    }
    .youtube .play-button {
        width: 90px;
        height: 60px;
        background-color: #333;
        box-shadow: 0 0 30px rgba( 0,0,0,0.6 );
        z-index: 1;
        opacity: 0.8;
        border-radius: 6px;
    }
    .youtube .play-button:before {
        content: "";
        border-style: solid;
        border-width: 15px 0 15px 26.0px;
        border-color: transparent transparent transparent #fff;
    }
    .youtube img,
    .youtube .play-button {
        cursor: pointer;
    }
    .youtube img,
    .youtube iframe,
    .youtube .play-button,
    .youtube .play-button:before {
        position: absolute;
    }
    .youtube .play-button,
    .youtube .play-button:before {
        top: 50%;
        left: 50%;
        transform: translate3d( -50%, -50%, 0 );
    }
    .youtube iframe {
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
</style>