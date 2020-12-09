<template>
    <div class="trainer-row">
        <div class="trainer">
            <div class="avatar">
                <div class="gradient d-block">
                    <img :src="'/images/temp/matches/' + trainer.photo"
                         @error="$event.target.src = '/images/noLogo.png'">
                </div>
            </div>
            <div class="data">
                <div class="trainer-data">
                    <div class="nickname">
                        {{trainer.nickname}}
                    </div>
                    <div class="game-wrapper">
                        <div class="game">
                            <img :src="'/images/marketplace/' + game.icon">
                            <div class="title">
                                <p>
                                    Тренер
                                </p>
                                <p>
                                    {{trainer.game.title}}
                                </p>
                            </div>
                        </div>
                        <div class="rating">
                            <img src="/images/marketplace/rating.svg">
                            <div class="title">
                                <p>
                                    {{trainer.reviewCount}} Отзывов
                                </p>
                                <p>
                                    Рейтинг {{trainer.ratingTotal}} из 10
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="recommended">
                    <img src="/images/marketplace/recommended.png">
                    <div>
                        <p>Champs</p>
                        <p>рекомендует</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="price-list">
            <div class="price-row" v-for="(item, type) in trainingTypes" @click="toggleDescription({type, show: !show})">
                <div class="background">
                    <div>
                        <div class="type">
                            {{item.title}}
                        </div>
                        <div class="price">
                            {{trainer.trainer.cost}} RUB
                        </div>
                    </div>
                    <i class="fas fa-sort-down" v-if="!show"></i>
                    <i class="fas fa-sort-up" v-else></i>
                </div>
            </div>
        </div>
        <div class="description" v-show="show && type !== null">
            <p class="title">
                {{description[type] ? description[type].title: ''}}
            </p>
            <p class="text">
                {{description[type] ? description[type].text: ''}}
            </p>
        </div>
        <div class="trainer-footer">
            <div class="rank">
                <label>Ранг</label>
                <div>
                    <img v-if="!rankIconError" :src="'/images/marketplace/' + trainer.rankIcon" @error="rankIconError = true">
                    {{trainer.rank}}
                </div>
                <template v-if="trainer.awards.length > 0">
                    <label>Награды</label>
                    <div v-for="award in trainer.awards">
                        <img :src="'/uploads/trainers_awards/' + award.icon">
                        {{award.text}}
                    </div>
                </template>
            </div>
            <div class="achievements">
                <label v-if="trainer.achievements.length > 0">Достижения</label>
                <div class="d-flex flex-wrap">
                    <div class="achievement" v-for="achievement in trainer.achievements">
                        <div class="name">
                            {{achievement.tournament}}
                        </div>
                        <div class="position">
                            {{achievement.achievement}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-slider">
                <trainer-row-video-slider :videos="trainer.videos"/>
            </div>
        </div>
    </div>
</template>

<script>
    import TrainerRowVideoSlider from "./TrainerRowVideoSlider";
    import TrainerCostButton from "./TrainerCostButton";
    import TrainerRank from "./TrainerRank";
    import MarketplaceService from "../../services/MarketplaceService";

    export default {
        name: "TrainerFullRow",
        components: {TrainerRank, TrainerCostButton, TrainerRowVideoSlider},
        inject: [
            'header'
        ],
        props: [
            'trainer',
            'games',
            'description'
        ],
        data() {
            return {
                show: false,
                type: null,
                rankIconError: false,
                trainingTypes: {
                    individual: {
                        title: 'Идивидуальная',
                    },
                    // group: {
                    //     title: 'Груповая тренировка',
                    // },
                    // analytic: {
                    //     title: 'Анализ видео',
                    // }
                }
            }
        },
        computed: {
            game() {
                return this.games.find(el => {
                    return el.name === this.trainer.game.name
                })
            },
            trainerUrl() {
                return MarketplaceService.getTrainerUrl(this.trainer.id)
            }
        },
        methods: {
            toggleDescription({type, show}) {
                this.show = show;
                this.type = type;
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../../../css/animations.css";

    .trainer-row {
        background: rgb(255, 255, 255);
        background: -moz-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(239, 240, 241, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(239, 240, 241, 1) 100%);
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(239, 240, 241, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#eff0f1", GradientType=1);
        padding: 1vw;
        margin-top: .7vw;

        .trainer {
            display: flex;

            .avatar {
                .gradient {
                    padding: .1vw;
                    background: rgb(255, 111, 31);
                    background: -moz-linear-gradient(0deg, rgba(255, 111, 31, 1) 0%, rgba(255, 194, 79, 1) 88%);
                    background: -webkit-linear-gradient(0deg, rgba(255, 111, 31, 1) 0%, rgba(255, 194, 79, 1) 88%);
                    background: linear-gradient(0deg, rgba(255, 111, 31, 1) 0%, rgba(255, 194, 79, 1) 88%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6f1f", endColorstr="#ffc24f", GradientType=1);

                    img {
                        height: 100%;
                        width: 9vw;
                    }
                }
            }

            .data {
                margin-left: 1vw;
                display: flex;
                justify-content: space-between;
                width: 100%;
                align-items: center;

                .trainer-data {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .nickname {
                        font-weight: 600;
                        line-height: 3vw;
                        font-size: 2vw;
                        transition: color .5s ease-in-out;
                        color: #0a0a0a;
                        margin-bottom: 1vw;

                        &:hover {
                            color: #ff6d1d;
                        }
                    }

                    .game-wrapper {
                        display: flex;

                        .game {
                            display: flex;
                            align-items: center;
                            margin-right: 2.5vw;

                            img {
                                height: 2.5vw;
                                margin-right: .5vw;
                            }

                            .title {
                                height: 2.5vw;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;

                                p {
                                    line-height: 1vw;
                                    margin-bottom: 0;
                                    font-size: 1vw;
                                    font-weight: 600;

                                    &:first-child {
                                        color: #8d8d8d;
                                        font-weight: 400;
                                    }
                                }
                            }
                        }

                        .rating {
                            display: flex;
                            align-items: center;
                            margin-right: 2.5vw;

                            img {
                                height: 1.5vw;
                                margin-right: .5vw;
                            }

                            .title {
                                height: 2.5vw;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;

                                p {
                                    line-height: 1vw;
                                    margin-bottom: 0;
                                    font-size: 1vw;
                                    font-weight: 600;

                                    &:first-child {
                                        color: #8d8d8d;
                                        font-weight: 400;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .recommended {
                display: flex;

                img {
                    height: 2vw;
                    margin-right: .5vw;
                }

                p {
                    margin: 0;
                    font-size: .7vw;
                }
            }
        }

        .price-list {
            display: flex;
            justify-content: space-between;
            margin-top: 1.5vw;

            .price-row {
                cursor: pointer;
                width: 30%;
                background: url(/images/marketplace/priceBackground.png);
                background-position: center;
                background-size: cover;
                height: 5.1vw;
                display: flex;
                transition: all .5s ease-in-out;

                &:hover {
                    transition: all .5s ease-in-out;
                    background: url(/images/marketplace/priceBackgroundHover.png);
                    background-position: center;
                    background-size: cover;
                    color: white;

                    .background {
                        i {
                            color: white;
                            font-size: 1vw;
                            cursor: pointer;
                        }
                    }
                }

                .background {
                    padding: 0 2vw;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-position: center;
                    width: 100%;

                    .type {
                        font-size: 1vw;
                        font-weight: 600;
                    }

                    .price {
                        font-size: 1.2vw;
                        color: #28a745;
                        font-weight: 700;
                    }

                    i {
                        color: #ff6d1d;
                        font-size: 1vw;
                        cursor: pointer;
                    }
                }
            }
        }

        .trainer-footer {
            display: flex;
            margin-top: 1vw;

            .achievements {
                width: 50%;

                .achievement {
                    font-size: 1vw;
                    width: 50%;

                    .position {
                        color: #ff6d1d;
                    }
                }
            }

            .video-slider {
                width: 50%;
            }

            div {
                label {
                    font-size: 1vw;
                    color: #858585;
                }
            }

            .rank {
                width: 25%;

                label {
                    font-size: 1vw;
                    color: #858585;
                }

                div {
                    img {
                        width: 2vw;
                        margin-right: .5vw;
                    }
                }
            }
        }

        .description {
            z-index: 1;
            width: 102.5%;
            background-color: #eff0f0;
            padding: 1vw;
            -webkit-animation: height-bounce 1000ms linear both;
            animation: height-bounce 1000ms linear both;
            margin-left: -1vw;
            margin-top: 1vw;
            margin-bottom: 1vw;

            &::before{
                content: "";
                border: solid transparent;
                position: absolute;
                bottom: 100%;
                left: 20%;
                border-bottom-color: #eee;
                border-width: 9 ;
                margin-left: -9px;
            }

            .title {
                color: #ff6d1d;
                font-size: 1.5vw;
                font-weight: 500;
            }

            .text {
                font-size: 1vw;
                margin-bottom: 0;
            }

            .subtitle {
                line-height: 3vw;
                font-size: 1.1vw;
                font-weight: 500;
                color: #9cb6cb;
            }

            ul {
                margin-left: -1vw;
                margin-bottom: 0;
            }
        }
    }

    .dark {
        .trainer-row {
            color: white;
            background: rgb(61, 65, 70);
            background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 25%, rgba(37, 40, 42, 1) 100%);
            background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 25%, rgba(37, 40, 42, 1) 100%);
            background: linear-gradient(90deg, rgba(61, 65, 70, 1) 25%, rgba(37, 40, 42, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);

            .trainer {
                .data {
                    .trainer-data {
                        .nickname {
                            font-weight: 600;
                            line-height: 2vw;
                            font-size: 2vw;
                            transition: color .5s ease-in-out;
                            color: white;

                            &:hover {
                                color: #ff6d1d;
                            }
                        }
                    }
                }
            }

            .price-list {
                .price-row {
                    background: url(/images/marketplace/darkPriceBackground.png);
                    background-position: center;
                    background-size: cover;

                    &:hover {
                        transition: all .5s ease-in-out;
                        background: url(/images/marketplace/priceBackgroundHover.png);
                        background-position: center;
                        background-size: cover;
                        color: white;
                    }
                }
            }

            .description {
                background-color: #1e2123;
            }
        }
    }
</style>