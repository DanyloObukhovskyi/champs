<template>
    <div class="modal fade"
         id="trainerSendReviewModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog"
             role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Оставить отзыв</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="title">Оцените работу тренера</div>
                    <div class="stars">
                        <template v-for="i in [10,9,8,7,6,5,4,3,2,1]">
                            <label :class="{selected: stars >= i}" @click="setStars(i)"></label>
                        </template>
                    </div>
                    <div class="title">Отзыв</div>
                    <div class="textarea">
                        <textarea v-model="review"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button"
                            class="btn-close"
                            data-dismiss="modal">
                            Закрыть
                    </button>
                    <button type="button"
                            class="btn-send"
                            data-dismiss="modal"
                            @click="sendReview">
                            Отправить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TrainerSendReview",
        data() {
            return {
                review: null,
                stars: 1,
            }
        },
        methods: {
            setStars(stars) {
                this.stars = stars;
            },
            sendReview() {
                this.$emit('send', {
                    rating: this.stars,
                    review: this.review
                })
                this.stars = 1;
                this.review = null;
            }
        }
    }
</script>

<style scoped lang="scss">
    .modal {
        .modal-dialog {
            .modal-content {
                border-radius: unset;
                background-color: #eff0f0;

                .modal-header {
                    border: unset;

                    .close {
                        outline: unset;
                    }
                }

                .modal-body {
                    .title {
                        font-size: 1vw;
                        font-weight: 500;
                    }

                    .stars {
                        unicode-bidi: bidi-override;
                        direction: rtl;

                        label {
                            position: relative;
                            color: #C8C8C8;
                        }

                        label:before {
                            content: "★";
                            display: inline-block;
                            font-size: 1.5em;
                            color: #ccc;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            user-select: none;
                        }

                        label.selected:before {
                            color: #FF6D1D;
                        }

                        label:hover ~ label:before {
                            color: #ff8300;
                        }

                        label:hover:before {
                            color: #FF6D1D;;
                        }

                        input {
                            display: none;
                        }
                    }

                    textarea {
                        margin-top: .5vw;
                        border: unset;
                        width: 100%;
                        min-height: 10vw;
                        outline: unset;
                        resize: none;
                        font-size: 1vw;
                    }
                }

                .modal-footer {
                    border: unset;

                    .btn-close {
                        width: 50%;
                        padding: .5vw;
                        border: unset;
                        outline: unset;
                        font-size: 1vw;
                        cursor: pointer;
                        background-color: white;

                        &:hover {
                            opacity: .5;
                        }
                    }

                    .btn-send {
                        width: 50%;
                        padding: .5vw;
                        border: unset;
                        outline: unset;
                        font-size: 1vw;
                        cursor: pointer;
                        color: white;
                        background-color: #ff6d1d;

                        &:hover {
                            opacity: .5;
                        }
                    }
                }
            }
        }
    }

    .dark {
        .modal {
            .modal-dialog {
                .modal-content {
                    color: white;
                    border-radius: unset;
                    background: rgb(55,58,63);
                    background: rgb(65,69,75);
                    background: -moz-linear-gradient(90deg, rgba(65,69,75,1) 0%, rgba(23,26,29,1) 100%);
                    background: -webkit-linear-gradient(90deg, rgba(65,69,75,1) 0%, rgba(23,26,29,1) 100%);
                    background: linear-gradient(90deg, rgba(65,69,75,1) 0%, rgba(23,26,29,1) 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#41454b",endColorstr="#171a1d",GradientType=1);


                    .modal-header {
                        border: unset;
                        color: white;

                        .close {
                            outline: unset;
                            color: white;
                        }
                    }

                    .modal-body {
                        .title {
                            font-size: 1vw;
                            font-weight: 500;
                        }

                        .stars {
                            unicode-bidi: bidi-override;
                            direction: rtl;

                            label {
                                position: relative;
                                color: #2d3135;
                            }

                            label:before {
                                content: "★";
                                display: inline-block;
                                font-size: 1.5em;
                                color: #919395;
                                -webkit-user-select: none;
                                -moz-user-select: none;
                                user-select: none;
                            }

                            input:checked ~ label:before {
                                color: #FF6D1D;
                            }

                            input:checked ~ {
                                color: #FF6D1D;
                            }

                            label:hover ~ label:before {
                                color: #ff8300;
                            }

                            label:hover:before {
                                color: #FF6D1D;;
                            }

                            input {
                                display: none;
                            }
                        }

                        textarea {
                            background-color: rgba(174, 177, 180, .2);
                            color: white;
                            margin-top: .5vw;
                            border: unset;
                            width: 100%;
                            min-height: 10vw;
                            outline: unset;
                            resize: none;
                            font-size: 1vw;
                        }
                    }

                    .modal-footer {
                        border: unset;

                        .btn-close {
                            width: 50%;
                            padding: .5vw;
                            border: unset;
                            outline: unset;
                            font-size: 1vw;
                            cursor: pointer;
                            color: white;
                            background-color: #2d3135;

                            &:hover {
                                opacity: .5;
                            }
                        }

                        .btn-send {
                            width: 50%;
                            padding: .5vw;
                            border: unset;
                            outline: unset;
                            font-size: 1vw;
                            cursor: pointer;
                            color: white;
                            background-color: #ff6d1d;

                            &:hover {
                                opacity: .5;
                            }
                        }
                    }
                }
            }
        }
    }
</style>