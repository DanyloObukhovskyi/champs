<template>
    <div class="timetable">
        <div class="trainer-nickname">
            Запись на тренировку к <span>{{ trainer.nickname }}</span>
        </div>
        <div class="trainer-timezone" v-if="!user">
            <img src="/images/matches/time.svg">
            <div class="trainer-gmt">
                часовой пояс тренера
                <span>
                    {{ trainer.timeZone }}
                </span>
            </div>
        </div>
        <div class="trainer-timezone" v-else>
            <img src="/images/matches/time.svg">
            <div class="trainer-gmt">
                ваш часовой пояс
                <span>
                    {{ user.timezone }}
                </span>
            </div>
        </div>
        <div class="container-wrapper">
            <div class="left-box">
                <div class="trainer-calendar">
                    <div class="trainer-calendar-title">
                        Выберите дату
                    </div>
                    <trainer-calendar
                            ref="calendar"
                            v-if="date !== null"
                            :date="date"
                            :available-dates="availableDates"
                            :user="user"
                            :trainer="trainer"
                            @date="setDate"/>
                </div>
            </div>
            <div class="right-box">
                <div class="trainer-timetable">
                    <div class="trainer-timetable-title">
                        Выберите время
                    </div>
                    <div class="time-status-description">
                        <span class="free"></span> свободно
                        <span class="busy"></span> занято
                    </div>
                    <trainer-time-picker
                            v-if="!load"
                            :times="times"
                            @setTime="setTime">
                    </trainer-time-picker>
                    <div class="loader" v-else>
                        <small-loader/>
                    </div>
                </div>
            </div>
        </div>
        <div class="payment-button">
            <div class="result-time" v-show="resultTime !== null">
                {{ resultTime }}
            </div>
            <button class="payment-btn"
                    @click="showPaymentModal"
                    v-if="times.filter(t => t.status === 2).length > 0 && user !== null">
                Записаться
            </button>
            <button class="payment-btn disable" v-else>
                Записаться
            </button>
        </div>
        <trainer-confirm-payment
                :trainer="trainer"
                :lessons="times"
                :date="date"
                :selected-time="resultTime"
                :payment-type="paymentType"
                :selected-length="times.filter(t => t.status === 2).length"
                :training-type="trainingType">
        </trainer-confirm-payment>
    </div>
</template>

<script>
    import TrainerCalendar from "../calendar/TrainerCalendar";
    import TrainerTimePicker from "./TrainerTimePicker";
    import MarketplaceService from "../../services/MarketplaceService";
    import SmallLoader from "../helpers/SmallLoader";
    import TrainerConfirmPayment from "./TrainerConfirmPayment";
    import {mapGetters} from "vuex";
    import Swal from "sweetalert2";

    export default {
        name: "TrainerTimetable",
        components: {
            TrainerConfirmPayment,
            SmallLoader,
            TrainerCalendar,
            TrainerTimePicker
        },
        props: [
            'trainer',
            'selectedType',
            'trainingType',
            'paymentType'
        ],
        data() {
            return {
                alert: alert,
                date: null,
                load: false,
                times: [],
                availableDates: {}
            }
        },
        watch: {
            date() {
                this.getTimes()
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ]),
            resultTime() {
                let str = null;
                let selectedTimes = this.selectedTime

                const times = [];
                let int = 0;

                while (selectedTimes.length > 0) {
                    let consecutiveTime = [];

                    let prev = {};

                    for (let i = 0; i < selectedTimes.length; i++) {
                        if (i === 0) {
                            consecutiveTime.push(selectedTimes[i]);
                            int = i;
                            prev = selectedTimes[i];
                        } else {
                            if (selectedTimes[i].from === prev.to) {
                                consecutiveTime.push(selectedTimes[i]);
                                int = i;
                                prev = selectedTimes[i];
                            }
                        }
                    }
                    times.push(consecutiveTime)
                    selectedTimes.splice(0, int + 1)
                }
                if (times.length !== 0) {
                    str = this.$refs.calendar.dateRu;

                    for (let i = 0; i < times.length; i++) {
                        if (i > 0) {
                            str += ','
                        }
                        str += ` c ${times[i][0].from}:00 до ${times[i][times[i].length - 1].to}:00`;
                    }
                }
                return str;
            },
            selectedTime() {
              return this.times.filter(t => t.status === 2 || t.status === 3);
            }
        },
        methods: {
            showPaymentModal() {
                let isFull = true;
                let type = [];
                if(!this.user.name){
                    isFull = false
                    type.push('имя');
                }
                if(!this.user.family){
                    isFull = false
                    type.push('фамилию');
                }
                if(!this.user.nickname){
                    isFull = false
                    type.push('никнейм');
                }
                if(!this.user.gender){
                    isFull = false
                    type.push('пол');
                }
                if(!this.user.email){
                    isFull = false
                    type.push('эмейл');
                }
                if(!this.user.country){
                    isFull = false
                    type.push('страна');
                }
                if(!this.user.bdate){
                    isFull = false
                    type.push('день рождение');
                }
                let userType = '';
                type.forEach((value, index) => {
                    if(index > 0){
                        userType = userType + ', ' + value;
                    } else {
                        userType = userType + ' ' + value;
                    }
                })
                if(!isFull){
                    Swal.fire({
                        icon: 'error',
                        title: 'Упс...',
                        text: 'Вы не заполнили поле '  + userType + ' в настройках аккаунта',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    if (this.trainingType === undefined || this.trainingType === null) {
                        this.showError('Выберете тип тренировки!')
                    } else {
                        $('#confirmPaymentModal').modal()
                    }
                }
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
            setDate(date) {
                this.date = date;
            },
            getAvailableDates() {
                this.loadAvailableDates = true;
                MarketplaceService
                    .getTrainerAvailableTrainingDatesForMonth(this.trainer.id, this.date)
                    .then(dates => {
                        this.availableDates = dates;
                    })
            },
            getTimes() {
                this.load = true;

                MarketplaceService
                    .getTrainerScheduleDay(this.trainer.id, this.date)
                    .then(times => {
                        const timesParse = [];

                        delete times.date;
                        for (let key in times) {
                            const time = key.replace('time', '').split('_');

                            timesParse.push({
                                from: time[0],
                                to: time[1],
                                status: times[key]
                            })
                        }
                        this.times = timesParse;
                        this.load = false;

                        this.getAvailableDates();
                    })
            },
            setTime(time) {
                this.times = this.times.map((timeItem, index, elements) => {
                    if (timeItem.from === time.from && timeItem.to === time.to) {
                      // console.log(this.times);
                      let hoursLessonTrainer = this.trainer.trainer.isLessonCost ? 1 : 3;
                      // console.log(hoursLessonTrainer);

                      if (hoursLessonTrainer == 3) {
                        var next1 = elements[index + 1];
                        var next2 = elements[index + 2];
                        if ((timeItem.status === 1) && (next1.status === 1) && (next2.status === 1)) {
                          timeItem.status = 2;
                          next1.status = 3;
                          next2.status = 3;
                        } else if ((timeItem.status === 2) && (next1.status === 3) && (next2.status === 3)) {
                          timeItem.status = 1;
                          next1.status = 1;
                          next2.status = 1;
                        } else if (timeItem.status === 3) {

                        } else {
                          Swal.fire({
                            icon: 'error',
                            title: 'Упс...',
                            text: 'Невозможно выбрать 3 часа подряд!',
                            showConfirmButton: false,
                            timer: 2000
                          })
                        }
                      } else {
                        if (timeItem.status === 1) {
                          timeItem.status = 2;
                        } else if (timeItem.status === 2) {
                          timeItem.status = 1;
                        }
                      }
                    }
                    return timeItem;
                })
            }
        },
        mounted() {
            const date = new Date();

            const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            let month = date.getMonth() + 1;
            month = month < 10 ? `0${month}` : month;

            this.date = `${day}.${month}.${date.getFullYear()}`;

            this.getTimes()
            this.getAvailableDates();

            window.testtest = this;
        }
    }
</script>

<style scoped lang="scss">
  .timetable {
	padding: 1vw;
	margin-top: 1vw;
	background: #eff0f0;

	.trainer-nickname {
	  color: #ff6d1d;
	  font-size: 1.2vw;
	  font-weight: 600;

	  span {
		color: black;
	  }
	}

	.trainer-timezone {
	  display: flex;
	  font-size: .9vw;
	  align-items: center;

	  img {
		margin-right: .3vw;
		width: .8vw;
	  }

	  .trainer-gmt {
		color: #7c7c7c;

		span {
		  color: #5c6b79;
		}
	  }
	}

	.container-wrapper {
	  display: flex;
	  justify-content: space-between;

	  .left-box {
		margin-top: 2vw;
		width: 30%;
          margin-bottom: 1.5vw;
          
		.trainer-calendar {
		  .trainer-calendar-title {
			color: #ff6d1d;
			font-size: 1vw;
			font-weight: 600;
		  }
		}
	  }

	  .right-box {
		margin-top: 2vw;
		width: 60%;

		.trainer-timetable {
		  .trainer-timetable-title {
			color: #ff6d1d;
			font-size: 1vw;
			font-weight: 600;
		  }

		  .time-status-description {
			font-size: .9vw;
			display: flex;
			align-items: center;
			margin-top: 1.5vw;

			.free {
			  margin-right: .2vw;
			  width: .7vw;
			  border: .2vw solid #28a745;
			  height: .7vw;
			  display: inline-block;
			  border-radius: 50%;
			}

			.busy {
			  margin-left: 1vw;
			  margin-right: .2vw;
			  width: .7vw;
			  border: .2vw solid #808387;
			  background-color: #fa1b1b;
			  height: .7vw;
			  display: inline-block;
			  border-radius: 50%;
			}
		  }

		  .loader {
			height: 21vw;
			display: flex;
			justify-content: center;
			align-items: center;
		  }
		}
	  }
	}

	.payment-button {
	  display: flex;

	  .result-time {
		background-color: #ffffff;
		padding: 1vw;
		font-size: 1vw;
		margin-right: 1vw;
	  }

	  .payment-btn {
		color: white;
		border: unset;
		outline: unset;
		background: #ff6d1d;
		padding: 1vw 3vw;
		cursor: pointer;

		&.disable {
		  opacity: .5;
		}

		&:hover {
		  opacity: .5;
		}
	  }
	}
  }

  .dark {
	.timetable {
	  background: #1e2123;

	  .trainer-nickname {
		color: #ff6d1d;

		span {
		  color: white;
		}
	  }

	  .container-wrapper {
		.right-box {
		  .trainer-timetable {
			.time-status-description {
			  color: #9d9fa0;
			}
		  }
		}
	  }

	  .payment-button {
		display: flex;

		.result-time {
		  background-color: #171a1b;
		  color: white;
		}
	  }
	}
  }
</style>