<template>
    <div class="modal fade" id="showMoreDetailModal" tabindex="-1" role="dialog" aria-labelledby="showMoreDetailModal"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-head">
                        <div class="title-wrapper">
                            <div class="title">
                                Подробные данные по завершенной тренировке.
                            </div>
                            <div class="sub-title">
                                {{date}} ноября 2020 с {{timeFrom}} до {{timeTo}} - {{lesson.typeRu}}
                            </div>
                        </div>
                    </div>
                    <div class="trainer">
                        <div class="avatar">
                            <a :href="trainerUrl" class="gradient d-block">
                                <img :src="'/images/temp/matches/' + lesson.trainer.photo"
                                     @error="$event.target.src = '/images/noLogo.png'">
                            </a>
                        </div>
                        <div class="trainer-data">
                            <a :href="trainerUrl" class="nickname">
                                {{lesson.trainer.nickname}}
                            </a>
                            <div class="game-wrapper">
                                <div class="game">
                                    <img :src="'/uploads/games/' + lesson.trainer.game.logo">
                                    <div class="title">
                                        <p>
                                            Тренер
                                        </p>
                                        <p>
                                            {{lesson.trainer.game.name}}
                                        </p>
                                    </div>
                                </div>
                                <div class="rating">
                                    <img src="/images/marketplace/rating.svg">
                                    <div class="title">
                                        <p>
                                            {{lesson.trainer.reviewCount}} Отзывов
                                        </p>
                                        <p>
                                            Рейтинг {{lesson.trainer.ratingTotal}} из 10
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rank">
                            <label>Ранг</label>
                            <div class="d-flex align-items-center">
                                <img v-if="!rankIconError" :src="'/images/marketplace/' + lesson.trainer.rankIcon"
                                     @error="rankIconError = true">
                                <div class="rank-wrapper">
                                    <div class="rank-raw">
                                        {{lesson.trainer.rank}}
                                    </div>
                                    <div class="global-elite" v-if="lesson.trainer.trainer.globalElite">
                                        THE GLOBAL ELITE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-bottom">
                        <div class="price" v-if="user.isTrainer">
                            <div class="hour-price" >
                                Стоимость для клиента: <span>{{hourPrice}} RUB</span>
                            </div>
                            <div class="lesson-price">
                                Зачислено на счет: <span>{{lesson.cost}} RUB</span>
                            </div>
                        </div>
                        <div class="price" v-else>
                            <div class="hour-price">
                                Стоимость часа: <span>{{hourPrice}} RUB</span>
                            </div>
                            <div class="lesson-price">
                                Стоимость занятия: <span>{{lesson.cost}} RUB</span>
                            </div>
                        </div>
                        <div class="trainings-count">
                            Тренировок с данным тренером: <span>{{lesson.trainingTogetherCount}}</span>
                        </div>
                        <div class="note" v-if="!user.isTrainer">
                            Заметки тренера по данной тренировке:
                            <div>
                                {{lesson.trainerNotice}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MarketplaceService from "../../../../../services/MarketplaceService";
    import {mapGetters} from "vuex";

    export default {
        name: "MoreDetailModal",
        props: ['lesson'],
        data() {
            return {
                rankIconError: false
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ]),
            date() {
                const date = new Date(this.lesson.dateFrom);

                return date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
            },
            timeFrom() {
                const date = new Date(this.lesson.dateFrom);

                const hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;

                return `${hours}:00`
            },
            timeTo() {
                const date = new Date(this.lesson.dateTo);

                const hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;

                return `${hours}:00`
            },
            trainerUrl() {
                return MarketplaceService.getTrainerUrl(this.lesson.trainer.id)
            },
            hourPrice() {
                const trainerCost = this.lesson.trainer.trainer.costs.find(
                    cost => cost.lessonType === this.lesson.type
                );
                return trainerCost.price;
            }
        }
    }
</script>

<style scoped lang="scss">
    .modal {
        .modal-dialog {
            .modal-content {
                background-color: #eff0f0;
                border-radius: unset;
                border: unset;
                width: 35vw;

                .modal-body {
                    width: 35vw;
                    padding: 1.5vw  4.5vw 3.5vw 4.5vw;

                    .modal-head {
                        display: flex;
                        justify-content: space-between;

                        .title {
                            font-size: 1.096vw;
                            font-weight: 600;
                        }

                        .sub-title {
                            font-size: .88vw;
                            font-weight: 300;
                            color: #9d9fa0;
                        }
                    }

                    .description {
                        p {
                            margin: 0;
                            color: #9d9fa0;
                            font-size: .85vw;
                        }
                    }

                    .invite-link {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;

                        .input-wrapper {
                            display: flex;
                            margin-bottom: .5vw;

                            input {
                                width: 8.5vw;
                                height: 1.8vw;
                                border: .1vw solid #ffbb96;
                                border-radius: .2vw;
                                -moz-appearance: none;
                                -webkit-appearance: none;
                                appearance: none;
                                outline: unset;
                                padding-left: .3vw;
                            }
                        }

                        .vk-wrapper {
                            transition: width .5s ease-in-out;
                            height: 4.1vw;

                            img {
                                width: 4vw;
                                margin-right: 2.4vw;

                                &:hover {
                                    width: 4.2vw;
                                    margin-right: 2.3vw;
                                    margin-bottom: -.1vw;
                                }
                            }
                        }

                        .btn-copy {
                            margin-left: .2vw;
                            height: 1.8vw;
                            border: unset;
                            color: white;
                            background: #ff6d1d;
                            width: 8vw;
                            border-radius: .4vw;
                            outline: unset;
                            cursor: pointer;
                            font-size: .7vw;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }

                    .description-bottom {
                        font-size: .6vw;
                        color: #9d9fa0;
                        margin-bottom: .5vw;
                        margin-top: .35vw;
                    }

                    .modal-bottom {
                        .price {
                            display: flex;
                            justify-content: space-between;
                            margin-top: 1.2vw;

                            div {
                                font-size: .7vw;

                                span {
                                    color: rgb(255, 111, 31);
                                }
                            }
                        }

                        .trainings-count {
                            font-size: .7vw;
                            color: #9d9fa0;
                            line-height: 1.5vw;

                            span {
                                color: rgb(255, 111, 31);
                            }
                        }

                        .note {
                            font-size: .7vw;
                            color: #9d9fa0;
                        }
                    }
                }
            }
        }

        .trainer {
            display: flex;
            margin-top: 2vw;

            .avatar {
                .gradient {
                    width: 3.2vw;
                    height: 3.2vw;
                    border-radius: 50%;
                    padding: .1vw;
                    background: rgb(255, 111, 31);
                    background: -moz-linear-gradient(0deg, rgba(255, 111, 31, 1) 0%, rgba(255, 194, 79, 1) 88%);
                    background: -webkit-linear-gradient(0deg, rgba(255, 111, 31, 1) 0%, rgba(255, 194, 79, 1) 88%);
                    background: linear-gradient(0deg, rgba(255, 111, 31, 1) 0%, rgba(255, 194, 79, 1) 88%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6f1f", endColorstr="#ffc24f", GradientType=1);

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
            }

            .trainer-data {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-left: .2vw;

                .nickname {
                    font-weight: 600;
                    line-height: 1vw;
                    font-size: 1vw;
                    transition: color .5s ease-in-out;
                    color: #0a0a0a;

                    &:hover {
                        color: #ff6d1d;
                    }
                }

                .game-wrapper {
                    display: flex;
                    eight: 1.7vw;

                    .game {
                        display: flex;
                        align-items: center;
                        margin-right: .5vw;

                        img {
                            height: 1.5vw;
                            margin-right: .2vw;
                            margin-left: .1vw;
                        }

                        .title {
                            height: 1.5vw;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            p {
                                line-height: .7vw;
                                margin-bottom: 0;
                                font-size: .7vw;
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
                        margin-left: 1.6vw;

                        img {
                            height: 1vw;
                            margin-right: .1vw;
                        }

                        .title {
                            height: 1.5vw;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            p {
                                line-height: .7vw;
                                margin-bottom: 0;
                                font-size: .7vw;
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

            .rank {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 1.8vw;

                label {
                    margin-left: .35vw;
                    height: 1vw;
                    display: flex;
                    align-items: flex-end;
                    font-size: .6vw;
                    color: #a2a4a5;
                }

                .rank-wrapper {
                    height: 1.7vw;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .rank-raw {
                    font-size: .7vw;
                    line-height: .7vw;
                    font-weight: 600;
                }

                .global-elite {
                    font-size: .7vw;
                    line-height: .7vw;
                    font-weight: 600;
                    color: #ff6d1d;
                }
            }
        }
    }


    .dark {
        .modal {
            .modal-dialog {
                .modal-content {
                    color: white;
                    background: rgb(55, 58, 63);
                    background: rgb(65, 69, 75);
                    background: -moz-linear-gradient(90deg, rgba(65, 69, 75, 1) 0%, rgba(23, 26, 29, 1) 100%);
                    background: -webkit-linear-gradient(90deg, rgba(65, 69, 75, 1) 0%, rgba(23, 26, 29, 1) 100%);
                    background: linear-gradient(90deg, rgba(65, 69, 75, 1) 0%, rgba(23, 26, 29, 1) 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#41454b", endColorstr="#171a1d", GradientType=1);
                }

                .trainer {
                    .trainer-data {
                        .nickname {
                            color: white;

                            &:hover {
                                color: #ff6d1d;
                            }
                        }
                    }
                }
            }
        }
    }
</style>