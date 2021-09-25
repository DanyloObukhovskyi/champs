<template>
    <div class="trainer-videos-slider">
        <slick-carousel v-bind="settings" v-if="videos.length > 0">
            <div class="carousel-item" :class="{active: index === 0}" v-for="(video, index) in videos">
                <div class="preview">
                    <LazyYoutubeVideo :src="'https://www.youtube.com/embed/' + video.videoId"
                                      preview-image-size="sddefault"/>
                </div>
            </div>
        </slick-carousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import YouTubeService from "../../services/YouTubeService";
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
import LampHeaderMobile from "../helpers/LampHeaderMobile";


export default {
    name: "TrainerRowVideoSliderMobile",
    props: {
        videos: {
            default: []
        }
    },
    components: {
        'slick-carousel': VueSlickCarousel,
        LazyYoutubeVideo,
        LampHeaderMobile,
    },
    data() {
        return {
            settings: {
                centerMode: false,
                centerPadding: "20px",
                focusOnSelect: true,
                infinite: false,
                slidesToShow: 1,
                speed: 500,
                dots: true,
                arrows: false
            },
        }
    },
}
</script>

<style scoped lang="scss">
.trainer-videos-slider {
  .carousel-item {
    .preview {
        overflow: hidden;
        max-height: 100%;
        position: relative;
        max-width: 100%;

      iframe {
          width: 25vw;
          height: 15vw;
      }
    }
  }
}
</style>

<style scoped lang="scss">
.trainer-videos-slider {
  .slick-list {
    padding: 0px !important;
  }

  .slick-arrow.slick-disabled {
    display: none !important;
  }

  .slick-prev::v-deep {
    &::before {
        width: 6.5vw;
        height: 11.5vw;
        top: 12vw;
        right: -7.6vw;
        position: absolute;
        transition: all .2s ease;
        opacity: 1;
        font-family: FontAwesome;
        content: "\f053";
        color: white;
        clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 70%);
        font-size: 4vw;
        justify-content: center;
        display: flex;
        align-items: center;
        background: #fe7924;
        background: -moz-linear-gradient(90deg, #fe7924 0%, #ffb347 100%);
        background: -webkit-linear-gradient(
                        90deg
                , #fe7924 0%, #ffb347 100%);
        background: linear-gradient(
                        90deg
                , #fe7924 0%, #ffb347 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fe7924", endColorstr="#ffb347", GradientType=1);
    }

    &:hover::before {
      transition: all .2s ease;
      opacity: 1;
      font-family: FontAwesome;
      content: "\f053";
      clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 70%);
      width: 1.5vw;
      height: 3.5vw;
      font-size: 1vw;
      right: -75%;
      justify-content: center;
      display: flex;
      align-items: center;
      color: #ff6d1d;
      background: white;

    }

    .video-slider {
      .slick-next {
        z-index: 1;
        top: 30%;
      }
    }
  }

  .slick-next::v-deep {
    margin-right: .8vw;

    &::before {
        width: 6.5vw;
        height: 11.5vw;
        top: 11vw;
        left: -7vw;
        position: absolute;
        transition: all .2s ease;
        opacity: 1;
        font-family: FontAwesome;
        content: "\f054";
        color: white;
        clip-path: polygon(0 0, 100% 30%, 100% 70%, 0% 100%);
        font-size: 4vw;
        justify-content: center;
        display: flex;
        align-items: center;
        background: #ffb347;
        background: -moz-linear-gradient(90deg, #ffb347 0%, #fe7924 100%);
        background: -webkit-linear-gradient(
                        90deg
                , #ffb347 0%, #fe7924 100%);
        background: linear-gradient(
                        90deg
                , #ffb347 0%, #fe7924 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffb347", endColorstr="#fe7924", GradientType=1);
    }

    &:hover::before {
      transition: all .2s ease;
      opacity: 1;
      font-family: FontAwesome;
      content: "\f054";
      color: #ff6d1d;
      clip-path: polygon(0 0, 100% 30%, 100% 70%, 0% 100%);
      width: 1.5vw;
      height: 3.5vw;
      font-size: 1vw;
      justify-content: center;
      display: flex;
      align-items: center;
      background: white;
    }
  }

  .slick-slide {
    transition: all .2s ease-in-out;

    &.slick-active.slick-center.slick-current {
      transition: all .2s ease-in-out;
      width: 22vw !important;
    }
  }

  .slick-prev {
    z-index: 1;
    top: 4vw;
  }

  .slick-next {
    z-index: 1;
    top: 4.5vw;
  }
}
</style>