<template>
    <div class="marketplace-header">
        <div class="slide-text" v-show="game === banner.game.code" v-for="banner in banners">
            <div class="slide-text-block">
                <div class="title">
                    {{getTitle(banner).strFirst}}
                    <div> {{getTitle(banner).strSecond}}</div>
                </div>
                <div class="text" v-html="banner.text">
                </div>
            </div>
        </div>
        <div class="slide-images">
            <div class="slide" v-show="game === banner.game.code" v-for="banner in banners">
                <img :src="'/uploads/marketplace/' + banner.img" alt="">
            </div>
        </div>
    </div>
</template>

<script>


    import MarketplaceService from "../../services/MarketplaceService";

    export default {
        name: "MarketplaceHeader",
        props: ['game'],
        data() {
            return {
                banners: []
            }
        },
        methods: {
            getBanners() {
                MarketplaceService.getGamesBanners()
                    .then(banners => {
                        this.banners = banners;
                    })
            },
            getTitle(banner) {

                let strFirst = '';
                let strSecond = '';

                const bannerSplit = banner.title.split(' ');

                if (bannerSplit.length > 6) {
                    const first = bannerSplit.splice(0, bannerSplit.length - 2);

                    for (let word of first){
                        strFirst += `${word} `;
                    }

                    for (let word of bannerSplit){
                        strSecond += `${word} `;
                    }
                } else {
                    strFirst = banner.title;
                }

                return {strFirst, strSecond}
            }
        },
        mounted() {
            this.getBanners();
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../css/animations.css';

    .marketplace-header {
        display: flex;
        height:auto;
        
        .slide-text {
            padding: 0vw 2vw;
            height:auto;
            background-color: #ffffff;
            -webkit-animation: animation-translate-left 1500ms linear both;
            animation: animation-translate-left 1500ms linear both;

            .slide-text-block{
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: inline-block;
            }

            .title {
                color: #ff6d1d;
                font-size: 1.8vw;
                font-weight: 500;
                margin-bottom: 1vw;
                margin-top: 0px
            }

            .text {
                color: #1e2123;
                font-size: 1vw;
            }
        }

        .slide-images {
            .slide {
                height: 100%;
                width: 31vw;
                -webkit-animation: animation-translate-right 1500ms linear both;
                animation: animation-translate-right 1500ms linear both;
                display: flex;
                justify-content: center;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .slide.cs {
                background-image: url("/images/temp/marketplace/header.svg");
            }

            .slide.dota {
                background-image: url("/images/temp/marketplace/header2.svg");
            }

            .slide.lol {
                background-image: url("/images/temp/marketplace/header3.png");
            }
        }
    }

    .dark {
        .marketplace-header {
            .slide-text {
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