<template>
    <transition>
        <div class="more-detail" v-if="show">
            <div class="more-detail-wrapper" :class="{absolute: isAbsolute}">
                <div class="more-detail-content">
                    <div class="more-detail-body">
                        <div class="more-detail-head">
                            <div class="title-wrapper">
                                <div class="title">
                                    Подробные данные по завершенной тренировке.
                                </div>
                                <div class="sub-title">
                                    {{ date }} ноября 2020 с {{ timeFrom }} до {{ timeTo }} - {{ lesson.typeRu }}
                                </div>
                            </div>
                        </div>
                        <div class="trainer" v-if="!user.isTrainer">
                            <div class="avatar">
                                <a :href="trainerUrl" class="gradient d-block">
                                    <div class="image-wrapper" :style="imageWrapperImage(lesson.trainer.photo)">
                                    </div>
                                </a>
                            </div>
                            <div class="trainer-data">
                                <a :href="trainerUrl" class="nickname">
                                    {{ lesson.trainer.nickname }}
                                </a>
                                <div class="game-wrapper">
                                    <div class="game">
                                        <img :src="'/uploads/games/' + lesson.trainer.game.logo">
                                        <div class="title">
                                            <p>
                                                Тренер
                                            </p>
                                            <p>
                                                {{ lesson.trainer.game.name }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="rating">
                                        <img src="/images/marketplace/rating.svg">
                                        <div class="title">
                                            <p>
                                                {{ lesson.trainer.reviewCount }} Отзывов
                                            </p>
                                            <p>
                                                Рейтинг {{ lesson.trainer.ratingTotal }} из 10
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rank">
                                <label>Ранг</label>
                                <div class="d-flex align-items-center">
                                    <img v-if="!rankIconError" :src="'/images/ranks/' + lesson.trainer.rankIcon"
                                         @error="rankIconError = true">
                                    <div class="rank-wrapper">
                                        <div class="rank-raw">
                                            {{ lesson.trainer.rank }}
                                        </div>
                                        <div class="global-elite" v-if="lesson.trainer.trainer.globalElite">
                                            THE GLOBAL ELITE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="student" v-else>
                            <div class="avatar">
                                <div class="gradient d-block">
                                    <div class="image-wrapper" :style="imageWrapperImage(lesson.student.photo)">
                                    </div>
                                </div>
                            </div>
                            <div class="trainer-data">
                                <div class="nickname">
                                    {{ lesson.student.nickname }}
                                </div>
                            </div>
                        </div>
                        <div class="more-detail-bottom">
                            <div class="price" v-if="user.isTrainer">
                                <div class="hour-price">
                                    Стоимость для клиента: <span>{{ lesson.studentPrice }} RUB</span>
                                </div>
                                <div class="lesson-price">
                                    Зачислено на счет: <span>{{ lesson.cost }} RUB</span>
                                </div>
                            </div>
                            <div class="price" v-else>
                                <div class="hour-price">
                                    Стоимость часа: <span>{{ hourPrice }} RUB</span>
                                </div>
                                <div class="lesson-price">
                                    Сумма: <span>{{ lesson.costWithPercentage }} RUB</span>
                                </div>
                            </div>
                            <div class="trainings-count" v-if="!user.isTrainer">
                                Тренировок с данным тренером: <span>{{ lesson.trainingTogetherCount }}</span>
                            </div>
                            <div class="trainings-count" v-else>
                                Тренировок с данным юзером: <span>{{ lesson.trainingTogetherCount }}</span>
                            </div>
                            <div class="note" v-if="!user.isTrainer">
                                Заметки тренера по данной тренировке:
                                <div class="text">
                                    {{ lesson.trainerNotice }}
                                </div>
                            </div>
                            <div class="note" v-else>
                                <label>
                                    Оставить заметку по данной тренировке:
                                </label>
                                <div class="text-field">
                                    <textarea v-model="lesson.trainerNotice"></textarea>
                                </div>
                                <button class="send-btn" :class="{disable: load, update: !load && isUpdate}"
                                        @click="sendTrainerNotice">
                                    Отправить
                                    <i class="fas fa-check"></i>
                                    <svg v-if="load" xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink"
                                         viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                        <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
                                                stroke-dasharray="164.93361431346415 56.97787143782138">
                                            <animateTransform attributeName="transform" type="rotate"
                                                              repeatCount="indefinite"
                                                              dur="1s" values="0 50 50;360 50 50"
                                                              keyTimes="0;1"></animateTransform>
                                        </circle>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import MarketplaceService from "../../../../../services/MarketplaceService";
import {mapGetters} from "vuex";
import CabinetService from "../../../../../services/CabinetService";

export default {
    name: "MoreDetail",
    props: ['lesson', 'show', 'isAbsolute'],
    data() {
        return {
            rankIconError: false,
            load: false,
            isUpdate: false,
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
            return trainerCost ? trainerCost.price : 0;
        }
    },
    methods: {
        sendTrainerNotice() {
            this.load = true;
            CabinetService
                .sendTrainerNotice(this.lesson.id, this.lesson.trainerNotice)
                .then(lesson => {
                    this.$store.commit('cabinet/training/updateLesson', lesson)

                    this.load = false;
                    this.isUpdate = true;
                })
        },
        imageWrapperImage(image) {
            return {
                'background-image': `url('${'/uploads/avatars/' + image}')`
            }
        },
    }
}
</script>

<style scoped lang="scss">
@import "../../../../../../css/animations.css";

@keyframes update {
  1% {
    background-color: #39a900;
  }
  10% {
    background-color: #39a900;
  }
  20% {
    background-color: #39a900;
  }
  30% {
    background-color: #39a900;
  }
  40% {
    background-color: #39a900;
  }
  80% {
    background-color: #39a900;
  }
  90% {
    background-color: #ff6d1d;
  }
  100% {
    background-color: #ff6d1d;
  }
}

@keyframes update-text {
  1% {
    display: inline;
    color: white;
  }
  10% {
    color: white;
  }
  20% {
    color: white;
  }
  30% {
    color: white;
  }
  40% {
    color: white;
  }
  80% {
    color: white;
  }
  90% {
    color: transparent;
  }
  99% {
    color: transparent;
  }
  100% {
    display: none;
  }
}

.more-detail {
  transition: all .5s ease-in-out;

  .more-detail-wrapper {
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    margin: 0;
    -webkit-animation: jelly 1000ms linear both;
    animation: jelly 1000ms linear both;

    &.absolute {
      position: absolute;
    }

    .more-detail-content {
      background-color: #fbfbfb;
      border-radius: unset;
      border: unset;
      width: 35vw;

      .more-detail-body {
        width: 35vw;
        padding: 1.5vw 4.5vw 3.5vw 4.5vw;

        .more-detail-head {
          display: flex;
          justify-content: space-between;

          .title {
            font-size: 1.096vw;
            font-weight: 600;
            color: black;
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
              background: white;
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

        .more-detail-bottom {
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

            .text {
              color: black;
            }

            textarea {
              margin-top: 1vw;
              outline: unset;
              font-size: 0.8vw;
              width: 100%;
              min-height: 5vw;
              border: 0.1vw solid rgb(255, 187, 150);
              border-radius: 0.2vw;
              resize: none;
              background: white;
              color: black;
            }

            .send-btn {
              height: 2.3vw;
              border: unset;
              color: white;
              background-color: #ff6d1d;
              width: 100%;
              border-radius: .2vw;
              outline: unset;
              cursor: pointer;
              font-size: .8vw;
              display: flex;
              align-items: center;
              justify-content: center;

              &:hover {
                opacity: .5;
              }

              i {
                margin-left: .5vw;
                position: absolute;
                right: 1vw;
                color: transparent;
              }

              svg {
                margin-left: .5vw;
                position: absolute;
                right: 1vw;
                width: 1vw;
                height: 1vw;
                background: none;
                display: block;
                shape-rendering: auto;
              }

              &.disable {
                opacity: .5;
                cursor: progress;
              }

              &.update {
                animation: update 3.5s;

                i {
                  animation: update-text 3.5s;
                }
              }
            }
          }
        }
      }
    }
  }

  .trainer,
  .student {
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

        .image-wrapper {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-image: url("/images/noLogo.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

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

      img {
        height: 1vw;
      }

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
        margin-left: .2vw;
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

  .student {
    .nickname {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}


.dark {
  .more-detail {
    .more-detail-wrapper {
      .more-detail-content {
        color: white;
        background: rgb(55, 58, 63);
        background: rgb(65, 69, 75);
        background: -moz-linear-gradient(90deg, rgba(65, 69, 75, 1) 0%, rgba(23, 26, 29, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(65, 69, 75, 1) 0%, rgba(23, 26, 29, 1) 100%);
        background: linear-gradient(90deg, rgba(65, 69, 75, 1) 0%, rgba(23, 26, 29, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#41454b", endColorstr="#171a1d", GradientType=1);

        .more-detail-body {
          .student {
            .nickname {
              color: white;
            }
          }

          .more-detail-head {
            .title {
              color: white;
            }
          }

          .more-detail-bottom {
            .note {
              .text {
                color: white;
              }
            }
          }
        }
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