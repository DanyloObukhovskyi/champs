<template>
    <div class="trainer-reviews">
        <div class="trainer-reviews-container">
            <div class="right">
                <div class="title">
                    Рейтинг тренера
                </div>
                <div class="rating-total">
                    {{ trainer.ratingTotal }} из 10
                </div>
                <div class="review-count">
                    {{ trainer.reviewCount }} отзывов
                </div>
                <div class="reviews-stat">
                    <div class="line" v-for="i in 10">
                        <template v-for="k in 10">
                            <img src="/images/StarOrange.svg" v-if="k <= i" alt="star"/>
                            <img src="/images/StarGray.svg" v-else alt="star"/>
                        </template>
                        <span>
                            {{ trainer.rating[i] }}
                        </span>
                    </div>
                </div>
                <button class="add-review"
                        data-toggle="modal"
                        data-target="#trainerSendReviewModal"
                        v-if="hasPermissionToReview">
                    Оставить отзыв
                </button>
            </div>
            <div class="left">
                <div class="reviews-count">
                    Отзывы <span>{{ trainer.reviewCount }}</span>
                </div>
                <div class="empty-reviews-block" v-if="sliceReviews.length === 0">
                    <div class="text-wrapper">
                        <div>
                            На данный момент у тренера нет отзывов, ты можешь стать первым!
                        </div>
                        <div>
                            Закажи тренировку у тренера, оставь свой отзыв и получи награду.
                        </div>
                    </div>
                </div>
                <div class="reviews-list" v-else>
                    <div class="review" v-for="review in sliceReviews">
                        <div class="review-header">
                            <div class="avatar-wrapper">
                                <div class="avatar">
                                    <div class="image-wrapper" :style="imageWrapperImage(review.photo)">
                                    </div>
                                </div>
                            </div>
                            <div class="user-data">
                                <div class="name">
                                    <div class="fio">
                                        {{ review.nickname }}
                                    </div>
                                    <div class="date">
                                        {{ review.dateRu }} мск
                                    </div>
                                </div>
                                <div class="rating">
                                    <template v-for="i in 10">
                                        <img src="/images/StarOrange.svg" v-if="i <= review.rate" alt="star"/>
                                        <img src="/images/StarGray.svg" v-else alt="star"/>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="comment">
                            {{ review.comment }}
                        </div>
                    </div>
                    <div v-if="trainer.reviews.length - reviewsOffset > 0"
                         class="more-reviews"
                         @click="reviewsOffset = trainer.reviews.length">
                        <span>
                            {{ moreReviewsTitle }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <trainer-send-review @send="sendReview" v-if="hasPermissionToReview"/>
    </div>
</template>

<script>
    import TrainerSendReview from "./TrainerSendReview";
    import MarketplaceService from "../../services/MarketplaceService";

    export default {
        name: "TrainerReviewsMobile",
        components: {
            TrainerSendReview
        },
        props: [
            'trainer',
        ],
        data() {
            return {
                reviewsOffset: 2,
                hasPermissionToReview: false
            }
        },
        computed: {
            sliceReviews() {
                const comments = [];

                if (this.trainer.reviews.length >= 2) {
                    for (let num = 0; num < this.reviewsOffset; num++) {
                        comments.push(this.trainer.reviews[num])
                    }
                    return comments;
                } else {
                    return this.trainer.reviews;
                }
            },
            moreReviewsTitle() {
                let title;
                const offset = this.trainer.reviews.length - this.reviewsOffset;

                if (offset === 1) {
                    title = 'Еще 1 отзыв';
                } else if (offset > 1 && offset < 5) {
                    title = `Еще ${offset} отзыва`;
                } else {
                    title = `Еще ${offset} отзывов`;
                }
                return title;
            },
        },
        methods: {
            sendReview({rating, review}) {
                const form = new FormData();

                form.append('trainer_id', this.trainer.id);
                form.append('rate', rating);
                form.append('comment', review);

                MarketplaceService.sendReview(form)
                    .then(() => {
                        this.updateReviews();
                    })
            },
            updateReviews() {
                this.$emit('update')
            },
            checkPermissionToReview() {
                MarketplaceService.checkPermissionToReview(this.trainer.id)
                    .then(res => {
                        this.hasPermissionToReview = res
                    })
            },
            imageWrapperImage(photo) {
                const image = new Image();
                image.src = '/uploads/avatars/' + photo;

                let path = "/images/noLogo.png";
                if (image.width !== 0) {
                    path = '/uploads/avatars/' + photo;
                }
                return {
                    'background-image': `url('${path}')`
                }
            }
        },
        mounted() {
            this.checkPermissionToReview();
        }
    }
</script>

<style scoped lang="scss">
  .trainer-reviews {
	.reviews-count {
        font-size: 3.3vw;
        font-weight: 600;
        background-color: #ffffff;

	  span {
		color: #5c6b79;
	  }
	}

	.trainer-reviews-container {
	  display: block;

	  .left {
		width: 100%;



		.empty-reviews-block {
		  height: 100%;
		  background-color: #ffffff;
		  font-size: 3vw;
		  justify-content: center;
		  display: flex;
		  align-items: center;
            min-height: 25vw;
		}

		.reviews-list {
		  background-color: #ffffff;
		  min-height: 25vw;


		  .review {
			padding: 1vw;

			.review-header {
			  display: flex;
			  align-items: center;

			  .avatar-wrapper {
				.avatar {
                    height: 10vw;
                    width: 10vw;
                    border-radius: 50%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;

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
					width: 110%;
				  }
				}
			  }

			  .user-data {
				margin-left: .5vw;

				.name {
				  display: flex;

				  .fio {
					font-size: 5vw;
					color: #5c6b79;
				  }

				  .date {
                      margin-left: 3vw;
                      font-size: 3vw;
                      color: #898989;
                      margin-top: 2vw;
				  }
				}

				.rating {
				  display: flex;
				  position: absolute;
				  margin-top: .3vw;

				  img {
					width: 3vw;
				  }
				}
			  }
			}

			.comment {
			  margin-top: 1vw;
			}
		  }

		  .more-reviews {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1vw;
            color: #ff6d1d;
            font-size: 4vw;
            cursor: pointer;
            position: initial;
            bottom: 0;
            width: 100%;

			&:hover .span {
			  opacity: .5;
			}

			&::before {
			  content: '';
			  position: fixed;
			  width: 100%;
			  height: 4vw;
			  top: -4vw;
			  background: -moz-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.6110819327731092) 100%);
			  background: -webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.6110819327731092) 100%);
			  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.6110819327731092) 100%);
			  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#ffffff", GradientType=1);
			}
		  }
		}
	  }

	  .right {
		width: 100%;
		height: 100%;
		background-color: #ffffff;
		margin-left: 1vw;

		.reviews-stat {
		  display: flex;
		  margin-left: 2.1vw;
		  flex-direction: column-reverse;
            width: 50%;
            left: 20%;

		  .line {
			display: flex;
			align-items: center;
			padding: .2vw 0;

			img {
			  width: 9vw;
			}

			span {
			  margin-left: 2vw;
			  font-size: 5vw;
			  line-height: 1vw;
			}
		  }
		}

		.title {
            text-align: center;
            font-size: 3.5vw;
            font-weight: 500;
            margin-top: 1.5vw;
		}

		.rating-total {
            font-size: 5vw;
            text-align: center;
            font-weight: 700;
            line-height: 2.7vw;
		}

		.review-count {
            font-size: 3vw;
            color: #898989;
            text-align: center;
            margin-top: .7vw;
		}

		.add-review {
		  width: 100%;
		  border: unset;
		  background-color: transparent;
		  color: #ff6d1d;
		  outline: unset;
		  cursor: pointer;
		  padding: 1vw;
		}
	  }
	}
  }

  .dark {
	.trainer-reviews {
	  .reviews-count {
		color: white;
	  }

	  .trainer-reviews-container {
		.left {

		  .empty-reviews-block {
			height: 25vw;
			background-color: #1e2123;
			font-size: 1.1vw;
			justify-content: center;
			display: flex;
			align-items: center;
			color: white;
		  }

		  .reviews-list {
			background-color: #1e2123;

			.review {
			  .comment {
				margin-top: 1vw;
				color: white;
			  }
			}
		  }

		  .more-reviews {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1vw;
			color: #ff6d1d;
			font-size: 1vw;
			cursor: pointer;

			&:hover .span {
			  opacity: .5;
			}

			&::before {
			  content: '';
			  position: absolute;
			  width: 100%;
			  height: 4vw;
			  top: -4vw;
			  background: -moz-linear-gradient(0deg, rgba(30, 33, 35, 1) 0%, rgba(30, 33, 35, 0.13769257703081228) 100%);
			  background: -webkit-linear-gradient(0deg, rgba(30, 33, 35, 1) 0%, rgba(30, 33, 35, 0.13769257703081228) 100%);
			  background: linear-gradient(0deg, rgba(30, 33, 35, 1) 0%, rgba(30, 33, 35, 0.13769257703081228) 100%);
			  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1e2123", endColorstr="#1e2123", GradientType=1);
			}
		  }
		}

		.right {
		  background-color: #1e2123;
		  color: white;
		  margin-left: 1vw;
		}
	  }
	}
  }
</style>