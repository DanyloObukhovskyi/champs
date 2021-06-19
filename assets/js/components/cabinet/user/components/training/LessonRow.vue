<template>
    <div class="lesson">
        <div class="lesson-body">
            <div class="time">
                {{ getLessonTime(lesson.dateFrom) }} - {{ getLessonTime(lesson.dateTo) }}
            </div>
            <div class="trainer" :class="{'justify-content-center': isTrainerCabinetSmall}" v-if="user !== null">
                <template v-if="!user.isTrainer">
                    <div class="avatar">
                        <div class="image-wrapper" :style="imageWrapperImage(lesson.trainer.photo)">
                        </div>
                    </div>
                    <div class="nickname">
                        {{ lesson.trainer.nickname }}
                    </div>
                </template>
                <template v-else>
                    <div class="avatar">
                        <div class="image-wrapper" :style="imageWrapperImage(lesson.student.photo)">
                        </div>
                    </div>
                    <div class="nickname">
                        {{ lesson.student.nickname }}
                    </div>
                </template>
                <div class="buttons" v-if="!isPast">
                    <cabinet-button
                            :text-first="user.isTrainer ? 'Чат с учеником':'Чат с тренером'"
                            @click="showDiscordModal"
                            v-if="!isTrainerCabinetSmall">
                        <template v-slot:img>
                            <img src="/images/cabinet/user.png">
                        </template>
                    </cabinet-button>
                    <cabinet-button text-first="Подробнее" @click="toggleMoreDetail">
                        <template v-slot:img>
                            <img src="/images/cabinet/inviteIcon.png">
                        </template>
                        <template v-slot:more-detail>
                            <img src="/images/events/check.png"
                                 v-if="user.isTrainer && (lesson.trainerNotice !== null && lesson.trainerNotice !== '') ">
                            <i class="fas fa-chevron-down" v-else></i>
                        </template>
                    </cabinet-button>
                    <cabinet-button text-first="Занятие окончено?"
                                    @click="()=>{setConfirmed(); toggleSendReview()}"
                                    v-if="!(user.isTrainer && isConfirmed) && !isTrainerCabinetSmall"
                                    :text-second="finishLessonLabel">
                        <template v-slot:img>
                            <img src="/images/cabinet/arrow.png">
                        </template>
                    </cabinet-button>
                </div>
                <div class="buttons" v-else>
                    <cabinet-button text-first="Подробнее" @click="toggleMoreDetail">
                        <template v-slot:img>
                            <img src="/images/cabinet/inviteIcon.png">
                        </template>
                        <template v-slot:more-detail>
                            <img src="/images/events/check.png" v-if="user.isTrainer && lesson.trainerNotice !== null">
                            <i class="fas fa-chevron-down" v-else></i>
                        </template>
                    </cabinet-button>
                    <cabinet-button
                            @click="()=>{ setConfirmed(), toggleSendReview()}"
                            text-first="Занятие окончено"
                            v-if="!(user.isTrainer && isConfirmed) && !isTrainerCabinetSmall && !(new Date(lesson.dateAfter7Days).getTime() < new Date().getTime())"
                            :text-second="finishLessonLabel">
                        <template v-slot:img>
                            <img src="/images/cabinet/arrow.png">
                        </template>
                    </cabinet-button>
                </div>
            </div>
        </div>
<!--        v-if="!lesson.reviewExist && (!isPast && isStudentConfirmed) || (isPast && !(new Date(lesson.dateAfter7Days) < new Date(lesson.today)) && isStudentConfirmed) && !user.isTrainer"-->
        <div class="lesson-bottom">
            <more-detail :lesson="lesson" :show="showMoreDetail" :is-absolute="isTrainerCabinetSmall"/>
            <send-review :lesson="lesson" :show="showSendReview" v-if="(!isPast && isStudentConfirmed)  && !user.isTrainer || (isPast && !(new Date(lesson.dateAfter7Days) < new Date(lesson.today)) && isStudentConfirmed) && !user.isTrainer"/>
        </div>
    </div>
</template>

<script>
    import MoreDetail from "./MoreDetail";
    import Swal from 'sweetalert2'
    import CabinetButton from "../../../Button";
    import {mapGetters} from "vuex";
    import CabinetService from "../../../../../services/CabinetService";
    import SendReview from "./SendReview";
    import TrainerSendReview from "../../../../trainers/TrainerSendReview";

    export default {
        name: "LessonRow",
        props: {
            lesson: {
                default: null,
            },
            isPast: {
                default: false,
            },
            isTrainerCabinetSmall: {
                default: false
            }
        },
        components: {
            TrainerSendReview,
            SendReview,
            MoreDetail,
            CabinetButton
        },
        data() {
            return {
                showMoreDetail: false,
                showReview: false,
                showSendReview: false
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ]),
            finishLessonLabel() {
                let label = 'Подтвердите';
                if (this.user.isTrainer) {
                    if (this.lesson.trainerStatus) {
                        label = 'Ждем подтверждения';
                    } else {
                        label = 'Подтвердите';
                    }
                } else {
                    if (this.lesson.studentStatus) {
                        label = 'Ждем подтверждения';
                    } else {
                        label = 'Подтвердите';
                    }
                }
                if (this.isConfirmed) {
                    label = 'Оставьте комментарий';
                }
                return label;
            },
            isConfirmed() {
                return this.lesson.trainerStatus && this.lesson.studentStatus;
            },
            isStudentConfirmed() {
                return this.lesson.studentStatus;
            }
        },
        methods: {
            getLessonTime(time) {
                const date = new Date(time.replaceAll('.', '-'));

                const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
                const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

                return `${hours}:${minutes}`;
            },
            setConfirmed() {
                console.log(this.user.isTrainer);
                if (!this.isConfirmed) {
                    CabinetService.setConfirmed(this.lesson.id)
                        .then(lesson => {
                            this.$store.commit('cabinet/training/updateLesson', lesson);
                        })
                } else {
                    this.showReview = !this.showReview;
                }
            },
            showDiscordModal() {
                Swal.fire({
                    title: this.user.isTrainer ? 'Теперь вы можете общаться с учеником!' : 'Теперь вы можете общаться с тренером!',
                    html: `
                            <div class="mt-5 d-flex justify-content-around">
                                <a href="https://discord.com/invite/rakSKuE" class="discord-button">Перейти в дискорд</a>
                                <div class="w-40">
                                    <label for="">Скачать дискорд</label>
                                    <div class="d-flex justify-content-around">
                                        <a href="https://discord.com/download" class="text-gray hover-orange" target="_blank">
                                            <i class="fas fa-desktop"></i>
                                        </a>
                                        <a href="https://itunes.apple.com/us/app/discord-chat-for-games/id985746746" class="text-gray hover-orange" target="_blank">
                                            <i class="fab fa-apple"></i>
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.discord" class="text-gray hover-orange" target="_blank">
                                            <i class="fab fa-android"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        `,
                    showCloseButton: true,
                    showCancelButton: false,
                    showConfirmButton: false
                })
            },
            toggleMoreDetail() {
                this.showMoreDetail = !this.showMoreDetail;

                const self = this;
                $('body').on('mousedown', function () {

                    if ($(event.target).parents(".more-detail-wrapper").length === 0
                        && $(event.target).parents(".cabinet-button").length === 0){

                        self.showMoreDetail = false;
                    }
                })
            },
            toggleSendReview()
            {
                this.showSendReview = !this.showSendReview;
            },
            imageWrapperImage(image) {
                return {
                    'background-image': `url('${'/uploads/avatars/' + image}')`
                }
            }
        }
    }
</script>

<style scoped lang="scss">
  .lesson {
	margin-left: 2.5vw;
	padding: .5vw 0;

	.lesson-body {
	  display: flex;
	  align-items: center;
	}

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
        display: flex;

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

	  .nickname {
		color: #9d9fa0;
		font-size: 1vw;
		width: 8vw;
	  }

	  .buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 70%;

		.button {
		  margin-right: 1vw;

          .more-detail {
            img {
			  width: 1vw;
            }
          }
		}
	  }
	}
  }
</style>

<style>
    .mt-5.d-flex.justify-content-around {
        margin-top: 2em !important;
        align-items: flex-end;
    }
	.discord-button {
        height: 2.7vw;
		border: unset;
		color: white;
		background: #ff6d1d;
		border-radius: .4vw;
		outline: unset;
		cursor: pointer;
		font-size: .8vw;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 1vw 0 01vw;
	}
</style>