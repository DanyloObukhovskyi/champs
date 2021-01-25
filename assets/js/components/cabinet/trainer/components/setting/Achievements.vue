<template>
    <div class="setting-container-body achievements">
        <div class="trainer-title">
            Достижения
        </div>
        <div class="achievements-body">
            <div class="achievements-wrapper">
                <template v-for="trainerAchievement in achievements">
                    <div class="form-group">
                        <div class="input">
                            <input type="text" placeholder="Событие" v-model="trainerAchievement.tournament">
                        </div>
                        <div class="input">
                            <input type="text"
                                   placeholder="Место\Достижение"
                                   v-model="trainerAchievement.achievement"
                                   title-max-width="500"
                                   v-title="'Введите числовой формат места или часть в которую вы пробились, если вы заняли место на турнире, то напишите ваше место в числовом формате и слово место.'">
                            <div class="buttons-group">
                                <button class="plus" @click="removeAchievement(trainerAchievement)">
                                    <img src="/images/minus.png">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group checkbox">
                        <div class="checkbox" @click="checkToggle(trainerAchievement)">
                            <img src="/images/check.png" v-if="trainerAchievement.show">
                            <img src="/images/checkEmpty.png" v-else>
                        </div>
                        <div class="checkbox-label">Отображение в карточке тренера</div>
                    </div>
                </template>
            </div>
            <div class="form-group" v-if="achievements.length < 6">
                <div class="input">
                    <input type="text" placeholder="Событие" v-model="tournament">
                </div>
                <div class="input">
                    <input type="text" placeholder="Место\Достижение" v-model="achievement">
                    <div class="buttons-group">
                        <button class="plus" @click="addAchievement">
                            <img src="/images/plus.png">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-save" @click="updateAchievements" :class="{disable: load}">
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
        name: "Achievements",
        data() {
            return {
                load: false,
                achievements: [],
                tournament: null,
                achievement: null,
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
            updateAchievements() {
                const form = new FormData();

                form.append(`trainer[achievements]`, JSON.stringify(this.achievements));

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
            addAchievement() {
                if (this.tournament === null || this.tournament === '') {
                    return this.showError('Заполните Событие!')
                }
                if (this.achievement === null || this.achievement === '') {
                    return this.showError('Заполните Место\\Достижение!')
                }
                this.achievements.push({
                    tournament: this.tournament,
                    achievement: this.achievement,
                    show: false
                })
                this.tournament = null;
                this.achievement = null;
            },
            removeAchievement(achievements) {
                this.achievements = this.achievements.filter(a => a !== achievements)
            },
            checkToggle(achievement) {
                const checkedAchievements = this.achievements.filter(a => a.show === true);

                if (!achievement.show && checkedAchievements.length >= 3) {
                    return this.showError('Можно выбрать не больше 3х!')
                }
                achievement.show = !achievement.show
            }
        },
        mounted() {
            this.achievements = this.user.trainer.achievements;
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
		display: flex;

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

		  input {
			border: .1vw solid #ff6d1d;
		  }

		  &:nth-child(1) {
			width: 55%;
			margin-right: 1.5vw;
		  }

		  &:nth-child(2) {
			width: 45%;
			border-right: unset;

			input {
			  border-radius: .2vw 0 0 .2vw;
			}
		  }

		  .buttons-group {
			display: flex;

			button {
			  border: unset;
			  outline: unset;
			  cursor: pointer;
			}

			.plus {
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
			}

			img {
			  width: .9vw;
			}
		  }
		}
	  }
	}
  }
</style>