<template>
    <div class="trainer-banner">
        <div class="left">
            <div>
                <div class="title">
                    Апни свой скилл бесплатно!
                </div>
                <div class="text">
                    Не хочешь платить сразу? Вступай в наши соцсети и не пропусти
                    еженедельный розыгрыш тренировок совершенно бесплатно!
                </div>
            </div>
            <div class="trainer-social">
                <a :href="social.vk.link">
                    <div class="icon">
                        <img src="/images/marketplace/vk.svg">
                    </div>
                    <div class="social-title">
                        CHAMPS_PRO
                    </div>
                </a>
                <a :href="social.youtube.link">
                    <div class="icon">
                        <img src="/images/marketplace/youtube.svg">
                    </div>
                    <div class="social-title">
                        CHAMPSPRO
                    </div>
                </a>
                <a :href="social.telegram.link">
                    <div class="icon">
                        <img src="/images/marketplace/telegram.svg">
                    </div>
                    <div class="social-title">
                        CHAMPS_PRO
                    </div>
                </a>
                <a :href="social.twitch.link">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "MarketplaceTrainerBanner",
        props: ['social'],
        mounted() {
            console.log(this.social)
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../css/animations.css';

    .trainer-banner {
        display: flex;

        .left {
            padding: 1vw 2vw;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            -webkit-animation: animation-translate-left 1500ms linear both;
            animation: animation-translate-left 1500ms linear both;

            .title {
                color: #ff6d1d;
                font-size: 1.8vw;
                font-weight: 500;
                line-height: normal;
                margin-bottom: 1vw;
            }

            .text {
                width: 70%;
                color: #1e2123;
                font-size: 1vw;
            }

            .trainer-social {
                display: flex;
                justify-content: space-between;

                a {
                    display: flex;
                    align-items: center;
                    background-color: #e4e4e4;
                    color: black;

                    .icon {
                        display: flex;
                        justify-content: center;
                        background-color: #222527;
                        width: 3.5vw;
                        padding: .8vw 0 .8vw 0;
                        clip-path: polygon(0 0, 100% 0, 77% 100%, 0% 100%);

                        img {
                            height: 1vw;
                            margin-right: .5vw;
                        }
                    }

                    .social-title {
                        font-size: 1vw;
                        margin-right: 1vw;
                    }

                    &:hover{
                      opacity: .6;
                    }
                }
            }
        }

        .right {
            width: 40vw;
            height: 13vw;
            background-image: url("/images/marketplace/trainerBanner.png");
            background-position: center;
            background-size: 110%;
            -webkit-animation: animation-translate-right 1500ms linear both;
            animation: animation-translate-right 1500ms linear both;

        }
    }

    .dark {
        .trainer-banner {
            .left {
                background-color: #1e2123;
                -webkit-animation: animation-translate-left 1500ms linear both;
                animation: animation-translate-left 1500ms linear both;

                .text {
                    color: #fff;
                }
            }
        }
    }
</style>