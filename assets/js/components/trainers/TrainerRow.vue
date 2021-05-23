<template>
    <div class="trainer-row">
        <div class="trainer">
            <div class="avatar">
                <a :href="trainerUrl" class="gradient d-block">
                    <div class="image-wrapper" :style="imageWrapperImage">
                    </div>
                </a>
            </div>
            <div class="data">
                <div class="trainer-data">
                    <a :href="trainerUrl" class="nickname">
                        {{ trainer.nickname }}
                    </a>
                    <div class="game-wrapper">
                        <div class="game">
                            <img :src="'/uploads/games/' + trainer.game.logo">
                            <div class="title">
                                <p>
                                    Тренер
                                </p>
                                <p>
                                    {{ trainer.game.title }}
                                </p>
                            </div>
                        </div>
                        <div class="rating">
                            <img src="/images/marketplace/rating.svg">
                            <div class="title">
                                <p>
                                    {{ trainer.reviewCount }} Отзывов
                                </p>
                                <p>
                                    Рейтинг {{ trainer.ratingTotal }} из 10
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="recommended">
                    <div class="award" v-for="award in trainer.awards">
                        <img :src="'/uploads/trainers_awards/' + award.icon">
                        <div>
                            {{ award.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="price-list">
            <trainer-cost-button
                    v-for="(cost, trainingType) in trainer.trainer.costs"
                    @toggleDescription="toggleDescription"
                    :key="trainingType"
                    :trainer="trainer"
                    :label="trainingTypes[cost.lessonType]"
                    :type="cost.lessonType"
                    :show="type === cost.lessonType"
                    :active="type === cost.lessonType"
                    :cost="cost.price">
            </trainer-cost-button>
        </div>
        <div class="description" v-if="show && type !== null" @click="show = false">
            <div class="arrow" :style="descriptionArrowStyle">
            </div>
            <p class="title">
                {{ description[type].title }}
            </p>
            <div class="text" v-html="description[type].text">
            </div>
            <a :href="trainerUrl + `?type=${type}`" class="confirm">Принять</a>
        </div>
        <div class="trainer-footer">
            <div class="rank">
                <label>Ранг</label>
                <div class="d-flex align-items-center">
                    <img v-if="!rankIconError" :src="'/images/ranks/' + trainer.rankIcon" @error="rankIconError = true">
                    <div>
                        {{ getRank(trainer) }}
                        <div class="global-elite" v-if="trainer.trainer.globalElite">
                            THE GLOBAL ELITE
                        </div>
                    </div>
                </div>
            </div>
            <div class="achievements">
                <label v-if="trainer.achievements.length > 0">Достижения</label>
                <div class="achievement" v-for="achievement in trainer.achievements.slice(0, 3)">
                    <div class="name">
                        {{ achievement.tournament }}
                    </div>
                    <div class="position">
                        {{ achievement.achievement }}
                    </div>
                </div>
            </div>
            <div class="trainer-video">
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
import RankingService from "../../services/RankingService";

export default {
    name: "TrainerRow",
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
                individual: 'Идивидуальная тренировка',
                group: 'Групповая тренировка',
                analytic: 'Анализ видео',
            },
            descriptionArrowStyle: {},
            ranksForSearch: []
        }
    },
    watch: {
        type() {
            const self = this;

            const buttonsLength = self.trainer.trainer.costs.length;
            let buttonNum = null;

            for (let i = 0; i < buttonsLength; i++) {
                if (self.trainer.trainer.costs[i].lessonType === self.type) {
                    buttonNum = i + 1;
                }
            }
            if (buttonNum !== null) {
                switch (buttonNum) {
                    case 1 :
                        self.descriptionArrowStyle.left = '10vw';
                        break;
                    case 2 :
                        self.descriptionArrowStyle.left = '33.5vw';
                        break;
                    case 3 :
                        self.descriptionArrowStyle.left = '57vw';
                        break;
                }
            }
        }
    },
    computed: {
        game() {
            return this.games.find(el => {
                return el.code === this.trainer.game.name
            })
        },
        trainerUrl() {
            return MarketplaceService.getTrainerUrl(this.trainer.id, this.trainer.gameCode ,this.trainer.slug)
        },
        imageWrapperImage() {
            let image = '/images/noLogoAvatar.png';
            if(this.trainer.photo){
                image = '/uploads/avatars/' + this.trainer.photo;
            }
            return {
                'background-image': `url('${image}'), url('/images/noLogoAvatar.png')`
            }
        }
    },
    methods: {
        toggleDescription({type, show}) {
            if (this.show && this.type === type) {
                this.show = false;
                this.type = null;
            } else {

                this.show = show;
                this.type = type;

                const self = this;

                $('body').one('mousedown', function () {
                    if ($(event.target).prop("tagName") !== 'A') {
                        self.show = false;
                        self.type = null;
                    }
                })
            }
        },
        getRank(trainer){
            if(!trainer.game.showRank){
                return trainer.rank;
            } else {
                const ranks = this.ranksForSearch[trainer.game.code];
                if (ranks) {
                    const userRank = ranks.find(e => {
                        if (Number(e.pointsFrom) <= Number(trainer.rank)) {
                            if (e.pointsTo === null || Number(e.pointsTo) >= Number(trainer.rank)) {
                                return e;
                            }
                        }
                    })
                    if (userRank !== undefined && userRank !== null) {
                        return userRank.rank;
                    } else {
                        return trainer.rank;
                    }
                }
                return trainer.rank;
            }
        },
        async getRanks(){
            RankingService.getAllRanks().then(
                data => {
                    this.ranksForSearch = data
                });
        }
    },
    created() {
        this.getRanks();
    }
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
        width: 6vw;
        height: 6vw;
        border-radius: 50%;
        padding: .2vw;
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

    .data {
      margin-left: 1vw;
      display: flex;
      justify-content: space-between;
      width: 100%;

      .trainer-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .nickname {
          font-weight: 600;
          line-height: 2vw;
          font-size: 2vw;
          transition: color .5s ease-in-out;
          color: #0a0a0a;

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
      .award {
        display: flex;
        align-items: center;

        img {
          height: 2vw;
          margin-right: .5vw;
        }

        div {
          width: 6vw;
          font-size: 1vw;
          line-height: 1.2vw;
        }
      }
    }
  }

  .price-list {
    display: flex;
    margin-top: 1.5vw;
    margin-bottom: 0.5vw;
    .price-row:nth-child(2),
    .price-row:nth-child(3) {
      margin-left: 5%;
    }
  }

  .trainer-footer {
    display: flex;
    margin-top: 1vw;

    .achievements {
      width: 25%;

      .achievement {
        font-size: 1vw;

        .position {
          color: #ff6d1d;
        }
      }
    }

    .trainer-video {
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

      .global-elite {
        font-weight: 600;
        font-size: .8vw;
        color: #ff6d1d;
        line-height: .9vw;
      }
    }
  }

  .description {
    z-index: 1;
      position: initial;
    width: 100%;
    margin-left: -1vw;
    top: 13.5vw;
    background-color: #eff0f0;
    padding: 1vw;
    -webkit-animation: jelly 1000ms linear both;
    animation: jelly 1000ms linear both;

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

    a.confirm {
      display: flex;
      justify-content: center;
      margin-top: 1vw;
      outline: unset;
      color: white;
      border: unset;
      font-size: 1vw;
      padding: .4vw 0 .5vw 0;
      cursor: pointer;
      width: 100%;
      background-color: #ff6d1d;
    }

    .arrow {
      position: absolute;
      top: -.5vw;
      width: 1.5vw;
      height: .5vw;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      background-color: #ff6d1d;
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

    .description {
      background-color: #1e2123;
    }
  }
}
</style>

<style lang="scss">
.trainer-row {
  .description {
    p {
      margin: 0;
    }

    ul > li {
      list-style: none;
    }

    p:not(.MsoNormal) > span:first-child {
      //color: rgba(0, 0, 0, 0);
    }

    p:not([class]) > span:first-child {
      color: black;
    }

    p:not(.MsoNormal) > span:first-child > span > span {
      color: black;
    }
  }
}

.dark {
  .trainer-row {
    .description {
      p {
        margin: 0;
      }

      ul > li {
        list-style: none;
      }

      p:not(.MsoNormal) > span:first-child {
        //color: rgba(0, 0, 0, 0);
      }

      p:not([class]) > span:first-child {
        color: white;
      }

      p > span:first-child > span > span {
        color: white;
      }
    }
  }
}
</style>