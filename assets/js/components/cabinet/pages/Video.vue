<template>
    <div class="cabinet-video">
        <cabinet-bottom-banner/>
        <div class="video-wrapper">
            <div class="title">
                Видео
            </div>
            <div class="videos">
                <video-row v-for="(video, index) in videos"
                           :key="index"
                           :video="video">
                </video-row>
            </div>
            <div class="d-flex align-items-center justify-content-center" v-if="load">
                <small-loader/>
            </div>
        </div>
    </div>
</template>

<script>
    import CabinetBottomBanner from "../CabinetBottomBanner";
    import YouTubeService from "../../../services/YouTubeService";
    import VideoRow from "../videos/VideoRow";
    import SmallLoader from "../../helpers/SmallLoader";

    export default {
        name: "Video",
        components: {SmallLoader, VideoRow, CabinetBottomBanner},
        data() {
            return {
                videos: [],
                isLoadAll: false,
                load: false,
            }
        },
        methods: {
            getVideos() {
                if (!this.isLoadAll && !this.load) {
                    this.load = true;

                    YouTubeService
                        .getVideos(this.videos.length)
                        .then(videos => {
                            if (videos.length < 9) {
                                this.isLoadAll = true;
                            }
                            for (let item of videos) {
                                const video = this.videos.find(v => v.videoId === item.videoId);
                                if (!video){
                                    this.videos.push(item);
                                }
                            }
                            this.load = false;
                        })
                }
            },
            scrollEventTrigger() {
                const self = this;
                window.onscroll = () => {
                    const scrollable = $("body").height() - ($(window).innerHeight() + $(window).scrollTop());

                    if (scrollable <= 5) {
                        self.getVideos()
                    }
                }
            },
        },
        mounted() {
            this.scrollEventTrigger();
            this.getVideos();
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../../css/animations.css';

    .video-wrapper {
        -webkit-animation: animation-translate-right 1500ms linear both;
        animation: animation-translate-right 1500ms linear both;
        background-color: #eff0f0;
        border-radius: .5vw;
        padding: 2vw;
        margin: 1vw;

        .title {
            font-size: 1.5vw;
            line-height: 1.3vw;
            font-weight: 500;
            color: #9d9fa0;
        }

        .videos {
            display: flex;
            flex-wrap: wrap;
            margin-top: 1vw;
        }
    }

    .dark {
        .video-wrapper {
            background: rgb(37,40,42);
            background: -moz-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            background: -webkit-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            background: linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a",endColorstr="#3d4146",GradientType=1);

            .title {
                color: #fff;
            }
        }
    }
</style>