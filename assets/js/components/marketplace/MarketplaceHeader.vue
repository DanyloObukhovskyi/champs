<template>
    <div class="marketplace-header">
        <div class="slide-text" v-show="game === 'cs'">
            <div class="title">Перенимайте опыт игры в CS:GO
                <div>от профессионалов</div>
            </div>
            <div class="text">
                Если вы давно хотели освоить CS:GO на профессиональном уровне, то вы пришли по адресу. На бирже Champs
                свои услуги предлагают профессиональные игроки, которые готовы поделиться опытом и передать полезные
                знания. Будь то теоретическая подготовка или оттачивание механических навыков - здесь вы найдете все
                необходимое.
            </div>
        </div>
        <div class="slide-text" v-show="game === 'dota'" style="display: none">
            <div class="title">Прогрессируйте во всех аспектах Dota 2
                <div>каждый день!</div>
            </div>
            <div class="text">
                Давно хотели освоить мастерство тактических перемещений, тайминговых стаков и профессиональных
                ластхитов, но не знали кто может с этим помочь? Биржа Champs - это профессиональные наставники, которые
                готовы не только поделиться опытом и указать на ошибки, но и провести с вами ни одну игру.
            </div>
        </div>
        <div class="slide-text" v-show="game === 'lol'" style="display: none">
            <div class="title">Войдите в топы призывателей
                <div> своего региона!</div>
            </div>
            <div class="text">
                Ищете полезную информацию о возможностях ваших любимых героев, спавне и баффах Нашора и Герольда, но в
                интернете ее никак не найти? В таком случае вы пришли по адресу, ведь высокорейтинговые наставники биржи
                Champs на своем опыте прочувствовали все тонкости игры.
            </div>
        </div>
        <div class="slide-images">
            <div class="slide cs" v-show="game === 'cs'">
            </div>
            <div class="slide dota" v-show="game === 'dota'">
            </div>
            <div class="slide lol" v-show="game === 'lol'">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MarketplaceHeader",
        props: ['game'],
    }
</script>

<style scoped lang="scss">
    @import '../../../css/animations.css';

    .marketplace-header {
        display: flex;

        .slide-text {
            padding: 1vw 2vw;
            background-color: #ffffff;
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
                color: #1e2123;
                font-size: 1vw;
            }
        }

        .slide-images {
            .slide {
                width: 30vw;
                height: 13vw;
                background-position: center;
                background-size: 110%;
                -webkit-animation: animation-translate-right 1500ms linear both;
                animation: animation-translate-right 1500ms linear both;
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