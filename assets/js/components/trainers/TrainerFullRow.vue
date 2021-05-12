<template>
    <div class="trainer-row">
        <div class="trainer">
            <div class="avatar">
                <div class="gradient d-block">
                    <img :src="'/uploads/avatars/' + trainer.photo"
                         @error="$event.target.src = '/images/noLogo.png'">
                </div>
            </div>
            <div class="data">
                <div class="trainer-data">
                    <div class="nickname">
                        {{ trainer.nickname }}
                    </div>
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
                    v-for="(cost, type) in trainer.trainer.costs"
                    @toggleDescription="toggleDescription"
                    :key="type"
                    :label="trainingTypes[cost.lessonType]"
                    :type="cost.lessonType"
                    :show="show"
                    :trainer="trainer"
                    :active="trainingType === cost.lessonType"
                    :cost="cost.price">
            </trainer-cost-button>
        </div>
        <div class="description" v-show="trainingType !== null && trainingType !== undefined">
            <div class="arrow" :style="descriptionArrowStyle">
            </div>
            <p class="title">
                {{ description[trainingType] ? description[trainingType].title : '' }}
            </p>
            <div class="text" v-html="description[trainingType] ? description[trainingType].text: ''">
            </div>
        </div>
        <div class="trainer-footer">
            <div class="rank">
                <label>Ранг</label>
                <div>
                    <img v-if="!rankIconError" :src="'/images/ranks/' + trainer.rankIcon" @error="rankIconError = true">
                    {{ trainer.rank }}
                </div>
                <template v-if="trainer.awards.length > 0">
                    <label>Награды</label>
                    <div v-for="award in trainer.awards">
                        <img :src="'/uploads/trainers_awards/' + award.icon">
                        {{ award.text }}
                    </div>
                </template>
            </div>
            <div class="achievements">
                <label v-if="trainer.achievements.length > 0">Достижения</label>
                <div class="d-flex flex-wrap">
                    <div class="achievement" v-for="achievement in trainer.achievements">
                        <div class="name">
                            {{ achievement.tournament }}
                        </div>
                        <div class="position">
                            {{ achievement.achievement }}
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
            'description',
            'trainingType'
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
                descriptionArrowStyle: {}
            }
        },
        watch: {
            type() {
                this.setDescriptionArrowStyle();
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
            setDescriptionArrowStyle() {
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
                            self.descriptionArrowStyle.left = '13vw';
                            break;
                        case 2 :
                            self.descriptionArrowStyle.left = '41.5vw';
                            break;
                        case 3 :
                            self.descriptionArrowStyle.left = '70vw';
                            break;
                    }
                }
            },
            toggleDescription({type}) {
                if (this.type === type) {
                    this.show = !this.show;
                } else {
                    this.type = type;
                }
                this.$emit('setTrainingType', type)
            }
        },
        mounted() {
            this.type = this.trainingType;

            this.setDescriptionArrowStyle()
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
		  padding: .1vw;
		  background: rgb(255, 111, 31);
		  background: -moz-linear-gradient(0deg, rgba(255, 111, 31, 1) 0%, rgba(255, 194, 79, 1) 88%);
		  background: -webkit-linear-gradient(0deg, rgba(255, 111, 31, 1) 0%, rgba(255, 194, 79, 1) 88%);
		  background: linear-gradient(0deg, rgba(255, 111, 31, 1) 0%, rgba(255, 194, 79, 1) 88%);
		  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6f1f", endColorstr="#ffc24f", GradientType=1);

		  img {
            width: auto;
            height: 13vw;
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

	  .price-row:nth-child(2),
	  .price-row:nth-child(3) {
		margin-left: 5%;
	  }

	  .price-row {
		&.active {
            background: linear-gradient(
                            104deg
                    , #ffc344 53%, #f77741 46%);
            clip-path: polygon(5.8% 0, 94.4% 0, 100% 30%, 100% 70%, 94.4% 100%, 5.8% 100%, 0 70%, 0 30%);
		  //background: url(/images/marketplace/priceBackgroundHover.png);
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
            background: linear-gradient(
                            104deg
                    , #ffc344 53%, #f77741 46%);
            clip-path: polygon(5.8% 0, 94.4% 0, 100% 30%, 100% 70%, 94.4% 100%, 5.8% 100%, 0 70%, 0 30%);
		  //background: url(/images/marketplace/priceBackgroundHover.png);
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

		transition: all .5s ease-in-out;

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

		  /*i {*/
		  /*    color: #ff6d1d;*/
		  /*    font-size: 1vw;*/
		  /*    cursor: pointer;*/
		  /*}*/
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

	  .price-list {
		.price-row {
		  background: url(/images/marketplace/darkPriceBackground.png);
		  background-position: center;
		  background-size: cover;

		  &.active {
			//background: url(/images/marketplace/priceBackgroundHover.png);
              background: linear-gradient(
                              104deg
                      , #ffc344 53%, #f77741 46%);
              clip-path: polygon(5.8% 0, 94.4% 0, 100% 30%, 100% 70%, 94.4% 100%, 5.8% 100%, 0 70%, 0 30%);
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

		  &:hover {
              background: linear-gradient(
                              104deg
                      , #ffc344 53%, #f77741 46%);
              clip-path: polygon(5.8% 0, 94.4% 0, 100% 30%, 100% 70%, 94.4% 100%, 5.8% 100%, 0 70%, 0 30%);
			transition: all .5s ease-in-out;
			//background: url(/images/marketplace/priceBackgroundHover.png);
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