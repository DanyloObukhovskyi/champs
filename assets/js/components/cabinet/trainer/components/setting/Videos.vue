<template>
    <div class="setting-container-body achievements">
        <div class="trainer-title">
            Видео и трансляции
        </div>
        <div class="achievements-body">
            <div class="achievements-wrapper">
                <template v-for="videoLink in videos">
                    <div class="form-group">
                        <div class="input">
                            <input type="text" placeholder="Ссылка в формате https://www.youtube.com/qwda2fg"
                                   v-model="videoLink.videoUrl">
                            <div class="buttons-group">
                                <button class="plus" @click="removeVideo(videoLink)">
                                    <img src="/images/minus.png">
                                </button>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <div class="form-group" v-if="videos.length < 6">
                <label>Видео о вас/методике/достижениях (Youtube)*</label>
                <div class="input">
                    <input type="text" placeholder="Ссылка в формате https://www.youtube.com/qwda2fg" v-model="video">
                    <div class="buttons-group">
                        <button class="plus" @click="addVideo">
                            <img src="/images/plus.png">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-save" @click="updateVideos" :class="{disable: load}">
            Сохранить изменения
            <i class="fas fa-check"></i>
            <svg v-if="load" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
                        stroke-dasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                      dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </div>
    </div>
</template>

<script>
    import CabinetService from "../../../../../services/CabinetService";
    import Swal from "sweetalert2";
    import {mapGetters} from "vuex";

    export default {
        name: "Videos",
        data() {
            return {
                load: false,
                videos: [],
                video: null,
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        methods: {
            showSuccess() {
                Swal.fire({
                    icon: 'success',
                    title: 'Достижения сохранены!',
                    showConfirmButton: false,
                    timer: 1500
                })
            },
            showError(message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Упс...',
                    text: message,
                    showConfirmButton: false,
                    timer: 1500
                })
            },
            updateVideos() {
                const form = new FormData();

                form.append(`trainer[videos]`, JSON.stringify(this.videos));

                this.load = true;
                CabinetService.updateUser(form)
                    .then(data => {
                        this.$store.commit('setUser', data)
                        this.load = false;

                        this.showSuccess()
                    })
                    .catch(() => {
                        this.load = false;
                    })
            },
            addVideo() {
                if (this.video === null || this.video === '') {
                    return this.showError('Заполните форму!')
                }
                this.videos.push({videoUrl: this.video})
                this.video = null;
            },
            removeVideo(videos) {
                this.videos = this.videos.filter(v => v !== videos)
            },
        },
        mounted() {
            this.videos = this.user.trainer.videos;
        }
    }
</script>

<style scoped lang="scss">
  .achievements {
	.achievements-body {
	  margin-top: .8vw;
	  margin-bottom: 3.2vw;

	  .form-group {
		padding: 0 3vw 0 3vw;;

		&.checkbox {
		  margin-top: -.5vw;
		  display: flex;
		  align-items: center;

		  .checkbox-label {
			font-size: .8vw;
			color: #adafb0;
			margin-left: .5vw;
		  }
		}

		.checkbox {
		  display: flex;
		  margin-left: .2vw;
		  cursor: pointer;

		  img {
			width: 1vw;
		  }
		}

		.input {
		  display: flex;
		  width: 55%;
		  align-items: center;
		  border-right: unset;

		  input {
			border: .1vw solid #ff6d1d;
			border-radius: .2vw 0 0 .2vw;

			&::placeholder {
			  padding: 0;
			}
		  }

		  .buttons-group {
			display: flex;
			height: 2.5vw;

			button {
			  border: unset;
			  outline: unset;
			  cursor: pointer;
			  height: 100%;
			  border: unset;
			  background-color: #ff6d1d;
			  border-radius: 0 .2vw .2vw 0;
			  color: white;
			  font-size: 1.6vw;
			  font-weight: 900;
			  display: flex;
			  padding: 0;
			  align-items: center;
			  justify-content: center;
			  width: 1.6vw;

			  &:hover {
				background-color: #ff8f2b;
			  }

			  img {
				width: .9vw;
			  }
			}
		  }
		}
	  }
	}
  }
</style>