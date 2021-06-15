<template>
    <div class="review-wrapper" v-if="show">
        <div class="review" v-if="!lesson.reviewExist">
            <div class="review-title" v-if="!lesson.reviewExist">
                Оставте отзыв
            </div>
            <div class="review-body">
                <div class="stars">
                    <template v-for="i in [10,9,8,7,6,5,4,3,2,1]">
                        <label :class="{selected: lesson.review.rate >= i}" @click="lesson.review.rate = i"></label>
                    </template>
                </div>
                <div class="textarea">
                    <textarea v-model="lesson.review.text"></textarea>
                </div>
            </div>
            <div class="review-bottom">
                <button type="button" class="send-btn" :class="{disable: load, update: !load && isUpdate}"
                        @click="sendReview">
                    Отправить <i class="fas fa-check"></i>
                    <svg v-if="load" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
                                stroke-dasharray="164.93361431346415 56.97787143782138">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                              dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </circle>
                    </svg>
                </button>
            </div>
        </div>
        <div class="review" v-else>
            <div class="review-title" v-if="!isUpdate">
                Ваш отзыв
            </div>
            <div class="review-title" v-else>
                Редактировать отзыв
            </div>
            <div class="review-body">
                <div class="stars">
                    <template v-for="i in [10,9,8,7,6,5,4,3,2,1]" >
                        <label v-if="!isUpdate" :class="{selected: lesson.review.rate >= i}"></label>
                        <label v-else :class="{selected: lesson.review.rate >= i}" @click="lesson.review.rate = i"></label>
                    </template>
                </div>
                <div class="textarea">
                    <textarea v-if="!isUpdate" disabled v-model="lesson.review.text"></textarea>
                    <textarea v-else v-model="lesson.review.text"></textarea>
                </div>
            </div>
            <div class="review-bottom" v-if="((new Date(lesson.review.date).getTime() + (20 * 60 * 1000)) >= new Date().getTime())">
                <button v-if="!isUpdate" type="button" class="send-btn" :class="{disable: load, update: !load && isUpdate}"
                        @click="editReview">
                    Редактировать <i class="fas fa-check"></i>
                    <svg v-if="load" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
                                stroke-dasharray="164.93361431346415 56.97787143782138">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                              dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </circle>
                    </svg>
                </button>
                <button v-else type="button" class="send-btn" :class="{disable: load, update: !load && isUpdate}"
                        @click="sendReview">
                    Отправить <i class="fas fa-check"></i>
                    <svg v-if="load" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
                                stroke-dasharray="164.93361431346415 56.97787143782138">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                              dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </circle>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import CabinetService from "../../../../../services/CabinetService";

    export default {
        name: "SendReview",
        props: ['lesson', 'show'],
        data() {
            return {
                rate: 1,
                load: false,
                isUpdate: false,
            }
        },
        computed: {
            review() {
                return this.lesson.review.text
            }
        },
        methods: {
            sendReview() {
                this.load = true;
                if(this.isUpdate === true){
                    CabinetService
                        .sendEditReview(this.lesson.trainer.id, this.lesson.review.rate, this.lesson.review.text, this.lesson.id)
                        .then(res => {
                            //this.rate = 1;
                            this.lesson.reviewExist = true;
                            this.load = false;
                            this.isUpdate = false;
                        })
                } else {
                    CabinetService
                        .sendReview(this.lesson.trainer.id, this.lesson.review.rate, this.lesson.review.text, this.lesson.id)
                        .then(res => {
                            //this.rate = 1;
                            this.lesson.reviewExist = true;
                            this.load = false;
                            this.isUpdate = false;
                        })
                }
            },
            editReview()
            {
                this.isUpdate = true
            }
        }
    }
</script>

<style scoped lang="scss">
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

    .review-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        .review {
            width: 35vw;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            padding: 1vw 4.5vw 0 4.5vw;

            .review-title {
                font-size: 1.5vw;
                color: #9d9fa0;
            }

            .review-body {

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
                    margin-top: 1vw;
                    outline: unset;
                    font-size: 0.8vw;
                    width: 100%;
                    min-height: 5vw;
                    border: 0.1vw solid #ffbb96;
                    border-radius: 0.2vw;
                    resize: none;
                }
            }

            .review-bottom {
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

                    &.disable {
                        opacity: .5;
                    }

                    &.update {
                        animation: update 3.5s;

                        i {
                            animation: update-text 3.5s;
                        }
                    }

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
                }
            }
        }
    }
</style>