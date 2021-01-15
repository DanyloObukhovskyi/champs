<template>
    <div class="setting-container-body lesson-price">
        <div class="d-flex justify-content-center align-items-center" v-if="load">
            <small-loader/>
        </div>
        <template v-else>
            <div class="trainer-title">
                Стоимость урока
            </div>
            <div class="lesson-price-body">
                <div class="form-group" v-for="training in lessonPrices">
                    <div class="input">
                        <input type="number"
                               :placeholder="training.title"
                               v-model="training.cost"
                               title-max-width="300"
                               v-title="training.description">
                    </div>
                    <div class="form-group checkbox">
                        <div class="checkbox" @click="training.show = !training.show">
                            <img src="/images/check.png" v-if="training.show">
                            <img src="/images/checkEmpty.png" v-else>
                        </div>
                        <div class="checkbox-label">Отображать на странице тренера</div>
                    </div>
                </div>
            </div>
            <div class="trainer-title">
                Длительность урока
            </div>
            <div class="lesson-count"
                 title-max-width="300"
                 title-placement="bottom"
                 v-title="'Выберете продолжительность одного занятия с учеником. В зависимости от выбранного значения, в карточке тренера должно отмечаться, что стоимость тренировки указана за 1 час или 3 часа'">
                <div class="form-group checkbox">
                    <div class="checkbox" @click="setIsLessonCost(true)">
                        <img src="/images/check.png" v-if="isLessonCost">
                        <img src="/images/checkEmpty.png" v-else>
                    </div>
                    <div class="checkbox-label">1 час</div>
                </div>
                <div class="form-group checkbox">
                    <div class="checkbox" @click="setIsLessonCost(false)">
                        <img src="/images/check.png" v-if="!isLessonCost">
                        <img src="/images/checkEmpty.png" v-else>
                    </div>
                    <div class="checkbox-label">3 часа</div>
                </div>
            </div>
            <div class="bottom-save" @click="savePrice" :class="{disable: loadPrice}">
                Сохранить изменения
                <i class="fas fa-check"></i>
                <svg v-if="loadPrice" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
                            stroke-dasharray="164.93361431346415 56.97787143782138">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                          dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                    </circle>
                </svg>
            </div>
        </template>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import Swal from "sweetalert2";
    import WalletService from "../../../../../services/WalletService";
    import SmallLoader from "../../../../helpers/SmallLoader";

    export default {
        name: "LessonPrice",
        components: {SmallLoader},
        props: ['load'],
        data() {
            return {
                loadPrice: false
            }
        },
        computed: {
            ...mapGetters('cabinet/wallet', [
                'lessonPrices',
                'isLessonCost'
            ]),
        },
        methods: {
            setIsLessonCost(isLessonCost) {
                this.$store.commit('cabinet/wallet/setIsLessonCost', isLessonCost);
            },
            showSuccess() {
                Swal.fire({
                    icon: 'success',
                    title: 'Данные сохранены!',
                    showConfirmButton: false,
                    timer: 1500
                })
            },
            savePrice() {
                this.loadPrice = true;

                WalletService.saveTrainerPrice({
                    lessonPrices: this.lessonPrices,
                    isLessonCost: this.isLessonCost
                }).then((data) => {
                    this.$store.dispatch('cabinet/wallet/setIsLessonCost', data.isLessonCost);
                    this.$store.dispatch('cabinet/wallet/setLessonPrices', data.lessonPrices);

                    this.loadPrice = false;
                    this.showSuccess()
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  .lesson-price {
	height: 31vw;
  }

  .lesson-price-body {
	margin-top: 1.5vw;
	margin-right: 2vw;

	.form-group {

	  &.checkbox {
		display: flex;
		align-items: center;
		padding: 0;
		margin-top: .3vw;

		.checkbox {
		  display: flex;
		  margin-left: .2vw;
		  cursor: pointer;

		  img {
			width: 1vw;
		  }
		}

		.checkbox-label {
		  font-size: .8vw;
		  color: #adafb0;
		  margin-left: .5vw;
		}
	  }

	  .input {
		height: 3vw;

		input::placeholder {
		  font-size: .9vw;
		}
	  }
	}
  }

  .lesson-count {
	.form-group {
	  padding: 0 .5vw;

	  &.checkbox {
		display: flex;
		align-items: center;
		margin-top: .3vw;

		.checkbox {
		  display: flex;
		  margin-left: .2vw;
		  cursor: pointer;

		  img {
			width: 1.3vw;
		  }
		}

		.checkbox-label {
		  font-size: 1vw;
		  color: #adafb0;
		  margin-left: .5vw;
		}
	  }
	}
  }
</style>