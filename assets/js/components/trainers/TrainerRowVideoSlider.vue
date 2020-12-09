<template>
    <div class="trainer-videos-slider">
        <slick-carousel v-bind="settings" v-if="videos.length > 0">
            <div class="carousel-item" :class="{active: index === 0}" v-for="(video, index) in videos">
                <div class="preview">
                    <iframe :src="'https://www.youtube.com/embed/' + video" frameborder="0">
                    </iframe>
                </div>
            </div>
        </slick-carousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

    export default {
        name: "TrainerRowVideoSlider",
        props: {
            videos: {
                default: []
            }
        },
        components: {
            'slick-carousel': VueSlickCarousel,
        },
        data() {
            return {
                settings: {
                    centerMode: true,
                    centerPadding: "20px",
                    focusOnSelect: true,
                    infinite: false,
                    slidesToShow: 1,
                    speed: 500,
                    dots: false,
                },
            }
        },
    }
</script>

<style scoped lang="scss">
    .trainer-videos-slider {
        .carousel-item {
            .preview {
                width: 20vw;
                height: 12vw;

                iframe {
                    width: 20vw;
                    height: 12vw;
                }
            }
        }
    }
</style>

<style lang="scss">
    .trainer-videos-slider {
        .slick-list {
            padding: 0px !important;
        }

        .slick-arrow.slick-disabled {
            display: none !important;
        }

        .slick-prev {
            &::before {
                content: '';
                background: url('/images/backOrange.svg');
                background-repeat: no-repeat;
                background-size: cover;
                width: 1.5vw;
                display: block;
                height: 3.5vw;
                right: -75%;
                position: absolute;
            }

            .video-slider {
                .slick-next {
                    z-index: 1;
                    top: 30%;
                }
            }
        }

        .slick-next {
            margin-right: .8vw;

            &::before {
                content: '';
                background: url("/images/nextOrange.svg");
                background-repeat: no-repeat;
                background-size: cover;
                width: 1.5vw;
                display: block;
                height: 3.5vw;
            }
        }

        .slick-slide {
            transition: all .2s ease-in-out;

            &.slick-active.slick-center.slick-current {
                transition: all .2s ease-in-out;
                width: 22vw !important;
            }
        }

        .slick-prev,
        .slick-next {
            z-index: 1;
            top: 35%;
        }
    }
</style>