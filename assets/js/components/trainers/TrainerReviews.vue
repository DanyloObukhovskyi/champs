<template>
    <div class="trainer-reviews">
        <div class="reviews-count">
            Отзывы <span>{{trainer.reviewCount}}</span>
        </div>
        <div class="trainer-reviews-container">
            <div class="left">
                <div class="reviews-list">
                    <div class="review" v-for="review in sliceReviews">
                        <div class="review-header">
                            <div class="avatar-wrapper">
                                <div class="avatar">
                                    <img :src="'/images/temp/' + review.photo"
                                         @error="$event.target.src = '/images/noLogo.png'">
                                </div>
                            </div>
                            <div class="user-data">
                                <div class="name">
                                    <div class="fio">
                                        {{review.name}} {{review.family}}
                                    </div>
                                    <div class="date">
                                        {{review.dateRu}} мск
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
                            {{review.comment}}
                        </div>
                    </div>
                    <div v-if="trainer.reviews.length - reviewsOffset > 0"
                         class="more-reviews"
                         @click="reviewsOffset = trainer.reviews.length">
                        {{moreReviewsTitle}}
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="title">
                    Рейтинг тренера
                </div>
                <div class="rating-total">
                    {{trainer.ratingTotal}} из 10
                </div>
                <div class="review-count">
                    {{trainer.reviewCount}} отзывов
                </div>
                <div class="reviews-stat">
                    <div class="line" v-for="i in 10">
                        <template v-for="k in 10">
                            <img src="/images/StarOrange.svg" v-if="k <= i" alt="star"/>
                            <img src="/images/StarGray.svg" v-else alt="star"/>
                        </template>
                        <span>
                            {{trainer.rating[i]}}
                        </span>
                    </div>
                </div>
                <button class="add-review" data-toggle="modal" data-target="#trainerSendReviewModal">
                    Оставить отзыв
                </button>
            </div>
        </div>
        <!--<trainer-send-review/>-->
    </div>
</template>

<script>
    import TrainerSendReview from "./TrainerSendReview";

    export default {
        name: "TrainerReviews",
        components: {
            TrainerSendReview
        },
        props: [
            'trainer',
        ],
        data() {
            return {
                reviewsOffset: 2
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
            }
        }
    }
</script>

<style scoped lang="scss">
    .trainer-reviews {
        .reviews-count {
            margin-top: 1vw;
            margin-bottom: .5vw;
            font-size: 1.3vw;
            font-weight: 600;

            span {
                color: #5c6b79;
            }
        }

        .trainer-reviews-container {
            display: flex;

            .left {
                width: 73%;

                .reviews-list {
                    background-color: #ffffff;

                    .review {
                        padding: 1vw;

                        .review-header {
                            display: flex;
                            align-items: flex-end;

                            .avatar-wrapper {
                                .avatar {
                                    width: 3.5vw;
                                    height: 3.5vw;
                                    border-radius: 50%;
                                    overflow: hidden;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

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
                                        font-size: 1vw;
                                        color: #5c6b79;
                                    }

                                    .date {
                                        margin-left: .5vw;
                                        font-size: 1vw;
                                        color: #898989;
                                    }
                                }

                                .rating {
                                    display: flex;
                                    margin-top: .2vw;

                                    img {
                                        width: 1vw;
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
                        font-size: 1vw;
                        cursor: pointer;

                        &:hover {
                            opacity: .5;
                        }
                    }
                }
            }

            .right {
                width: 27%;
                background-color: #ffffff;
                margin-left: 1vw;

                .reviews-stat {
                    display: flex;
                    margin-left: 3.1vw;
                    flex-direction: column-reverse;

                    .line {
                        display: flex;
                        align-items: center;
                        padding: .2vw 0;

                        img {
                            width: 1vw;
                            margin-left: .15vw;
                            margin-right: .15vw;
                        }

                        span {
                            margin-left: 2vw;
                            font-size: 1vw;
                            line-height: 1vw;
                        }
                    }
                }

                .title {
                    text-align: center;
                    font-size: 1.5vw;
                    font-weight: 500;
                    margin-top: 1.5vw;
                }

                .rating-total {
                    font-size: 1.7vw;
                    text-align: center;
                    font-weight: 700;
                    line-height: 1.7vw;
                }

                .review-count {
                    font-size: 1vw;
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
                    .reviews-list {
                        background-color: #1e2123;

                        .review {
                            .comment {
                                margin-top: 1vw;
                                color: white;
                            }
                        }
                    }
                }

                .right {
                    width: 27%;
                    background-color: #1e2123;
                    color: white;
                    margin-left: 1vw;
                }
            }
        }
    }
</style>