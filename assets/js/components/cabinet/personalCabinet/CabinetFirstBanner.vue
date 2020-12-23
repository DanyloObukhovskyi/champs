<template>
    <div class="cabinet-first-banner">
        <div class="left">
            <div id="banner-description">
                <div class="title">
                    {{banner.title.value}}
                </div>
                <div class="text" v-html="banner.text.value">
                </div>
            </div>
            <div class="cabinet-first-banner-social">
                <a :href="banner.links.vk ? banner.links.vk.value : null">
                    <div class="icon">
                        <img src="/images/marketplace/vk.svg">
                    </div>
                    <div class="social-title">
                        CHAMPS_PRO
                    </div>
                </a>
                <a :href="banner.links.youtube ? banner.links.youtube.value : null">
                    <div class="icon">
                        <img src="/images/marketplace/youtube.svg">
                    </div>
                    <div class="social-title">
                        CHAMPSPRO
                    </div>
                </a>
                <a :href="banner.links.telegram ? banner.links.telegram.value : null">
                    <div class="icon">
                        <img src="/images/marketplace/telegram.svg">
                    </div>
                    <div class="social-title">
                        CHAMPS_PRO
                    </div>
                </a>
                <a :href="banner.links.twitch ? banner.links.twitch.value : null">
                    <div class="icon">
                        <img src="/images/marketplace/twitch.svg">
                    </div>
                    <div class="social-title">
                        CHAMPSPRO
                    </div>
                </a>
            </div>
        </div>
        <div class="right">
            <img class="w-100" :src="`/uploads/banners/${this.banner.image.value}`" alt="banner">
        </div>
    </div>
</template>

<script>
    export default {
        name: "CabinetFirstBanner",
        props: ['banner'],
    }
</script>

<style scoped lang="scss">
    @import '../../../../css/animations.css';

    .cabinet-first-banner {
        display: flex;
        -webkit-animation: animation-translate-right 1500ms linear both;
        animation: animation-translate-right 1500ms linear both;

        .left {
            padding: 1vw;
            display: flex;
            width: 54%;
            flex-direction: column;
            justify-content: center;
            margin: 1vw 0 1vw 1vw;

            .title {
                color: #ff6d1d;
                font-size: 1.2vw;
                font-weight: 500;
                line-height: normal;
                margin-bottom: 1vw;
            }

            .text {
                width: 80%;
                color: #1e2123;
                font-size: .8vw;
            }

            .cabinet-first-banner-social {
                margin-top: .2vw;
                display: flex;
                justify-content: space-between;

                a {
                    display: flex;
                    align-items: center;
                    background-color: #aeaeae;
                    color: white;

                    .icon {
                        display: flex;
                        justify-content: center;
                        background-color: #ffffff;
                        width: 2.5vw;
                        padding: .7vw 0 .7vw 0;
                        clip-path: polygon(0 0, 100% 0, 77% 100%, 0% 100%);
                        margin-left: -.1vw;

                        img {
                            height: .7vw;
                            margin-right: .5vw;
                        }
                    }

                    .social-title {
                        font-size: .7vw;
                        margin-right: 1vw;
                    }

                    &:hover {
                        opacity: .6;
                    }
                }
            }
        }

        .right {
            width: 46%;
            padding: 1vw;
            padding-left: 0;

            img {
                border: 1px solid black;
                border-radius: .5vw;
            }
        }
    }

    .dark {
        .cabinet-first-banner {
            .left {
                background-color: #1e2123;
                border-radius: .5vw 0 0 .5vw;

                .text {
                    color: white;
                }

                .cabinet-first-banner-social {
                    a {
                        background-color: #2d3135;
                        color: white;

                        .icon {
                            background-color: #222527;
                        }

                        &:hover {
                            opacity: .6;
                        }
                    }
                }
            }

            .right {
                img {
                    border: 1px solid black;
                    border-radius: 0 .5vw .5vw 0;
                }
            }
        }
    }
</style>
<style>
    .cabinet-first-banner .text span {
        background-color: transparent !important;
        font-size: .8vw !important;
    }

    .dark .cabinet-first-banner .text span {
        color: white !important;
    }
</style>