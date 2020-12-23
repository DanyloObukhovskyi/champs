<template>
    <div class="lessons">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="lessons-wrapper">
            <div class="lessons-row" v-for="(dayLessons, day) in lessons">
                <div class="date-day">
                    {{day}}
                </div>
                <div class="lesson" v-for="lesson in dayLessons">
                    <div class="time">
                        {{getLessonTime(lesson.dateFrom)}} - {{getLessonTime(lesson.dateTo)}}
                    </div>
                    <div class="trainer">
                        <div class="avatar">
                            <img :src="'/images/temp/matches/' + lesson.trainer.photo">
                        </div>
                        <div class="nickname">
                            {{lesson.trainer.nickname}}
                        </div>
                        <div class="buttons" v-if="!isPast">
                            <cabinet-button text-first="Чат с тренером">
                                <template v-slot:img>
                                    <img src="/images/cabinet/user.png">
                                </template>
                            </cabinet-button>
                            <cabinet-button text-first="Подробнее">
                                <template v-slot:img>
                                    <img src="/images/cabinet/inviteIcon.png">
                                </template>
                            </cabinet-button>
                            <cabinet-button text-first="Занятие окончено?" text-second="Пожтвердите">
                                <template v-slot:img>
                                    <img src="/images/cabinet/arrow.png">
                                </template>
                            </cabinet-button>
                        </div>
                        <div class="buttons" v-else>
                            <cabinet-button text-first="Подробнее">
                                <template v-slot:img>
                                    <img src="/images/cabinet/inviteIcon.png">
                                </template>
                            </cabinet-button>
                            <cabinet-button
                                    text-first="Занятие окончено"
                                    :text-second="lesson.studentStatus ? 'Оставте отзыв': 'Ждем подтверждения'">
                                <template v-slot:img>
                                    <img src="/images/cabinet/arrow.png">
                                </template>
                            </cabinet-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "../Button";
    export default {
        name: "Timetable",
        components: {
            'cabinet-button': Button
        },
        props: {
            lessons: {
                default: {}
            },
            isPast: {
                default: false
            }
        },
        methods: {
            getLessonTime(time) {
                const date = new Date(time);

                const hours = date.getHours() < 10 ? `0${date.getHours()}`: date.getHours();
                const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes();

                return `${hours}:${minutes}`;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../../css/animations.css';

    .lessons {
        -webkit-animation: animation-translate-right 1500ms linear both;
        animation: animation-translate-right 1500ms linear both;
        background-color: #eff0f0;
        border-radius: .5vw;
        padding: 2vw 3vw;

        .title {
            color: #9d9fa0;
            font-size: 1.5vw;
            font-weight: 600;
        }

        .lessons-row {
            margin-left: 1vw;

            .date-day {
                color: #ea6620;
                font-size: 1vw;
                font-weight: 500;
                padding: 1.5vw .5vw .5vw .5vw;
            }

            .lesson {
                display: flex;
                align-items: center;
                margin-left: 2.5vw;
                padding: 1vw 0;

                .time {
                    color: #a2a4a5;
                    font-size: .8vw;
                    width: 9vw;
                }

                .trainer {
                    display: flex;
                    align-items: center;
                    width: 100%;

                    .avatar {
                        width: 2.5vw;
                        height: 2.5vw;
                        border-radius: 50%;
                        padding: .1vw;
                        margin-right: 1vw;
                        background: #ff6f1f;
                        background: -moz-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
                        background: -webkit-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
                        background: linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
                        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6f1f", endColorstr="#ffc24f", GradientType=1);

                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                        }
                    }

                    .nickname {
                        color: #9d9fa0;
                        font-size: 1vw;
                        width: 8vw;
                    }

                    .buttons {
                        display: flex;
                        align-items: center;
                        width: 80%;

                        .button {
                            margin-right: 1vw;
                        }
                    }
                }
            }
        }
    }

    .dark {
        .lessons {
            background: rgb(37,40,42);
            background: -moz-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            background: -webkit-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            background: linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a",endColorstr="#3d4146",GradientType=1);

            .title {
                color: white;
            }
        }
    }
</style>