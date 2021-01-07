<template>
    <div class="timetable-picker">
        <div class="title">
            Календарь
        </div>
        <div class="timetable-wrapper">
            <div class="timetable-body">
                <div class="title">
                    Для того чтобы открыть слоты на тренировку
                </div>
                <div class="container-wrapper">
                    <div class="left-box">
                        <div class="trainer-calendar">
                            <div class="trainer-calendar-title">
                                Выберете дату
                            </div>
                            <trainer-calendar ref="calendar" v-if="date !== null" :date="date" @date="setDate"/>
                        </div>
                    </div>
                    <div class="right-box">
                        <div class="trainer-timetable">
                            <div class="trainer-timetable-title">
                                Выберете время
                            </div>
                            <div class="time-status-description">
                                <span class="free"></span> свободно
                                <span class="busy"></span> занято
                            </div>
                            <trainer-time-picker
                                    v-if="!load"
                                    :times="times"
                                    :is-trainer-cabinet="true"
                                    @setTime="setTime">
                            </trainer-time-picker>
                            <div class="loader" v-else>
                                <small-loader/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="full-version">
                <router-link :to="calendarPage">
                    <div class="text">
                        Перейти в полную версию календаря
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import SmallLoader from "../../../../helpers/SmallLoader";
    import TrainerTimePicker from "../../../../trainers/TrainerTimePicker";
    import TrainerCalendar from "../../../../calendar/TrainerCalendar";
    import MarketplaceService from "../../../../../services/MarketplaceService";
    import {mapGetters} from "vuex";
    import CabinetService from "../../../../../services/CabinetService";

    export default {
        name: "Calendar",
        data() {
            return {
                date: null,
                load: false,
                times: [],
            }
        },
        components: {
            SmallLoader,
            TrainerTimePicker,
            TrainerCalendar
        },
        computed: {
            ...mapGetters([
                'user'
            ]),
            calendarPage() {
                return `/${CabinetService.lang}/trainer/cabinet/calendar`;
            }
        },
        watch: {
            date() {
                this.getTimes()
            }
        },
        methods: {
            setTime(time) {
                CabinetService.setTrainerDayTime(this.date, time)
                    .then((times) => {
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
                    })
            },
            setDate(date) {
                this.date = date;
            },
            getTimes() {
                this.load = true;

                CabinetService.getTrainerScheduleDay(this.date)
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
                    })
            }
        },
        mounted() {
            window.qwerty = this
            const date = new Date();

            const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            let month = date.getMonth() + 1;
            month = month < 10 ? `0${month}` : month;

            this.date = `${day}.${month}.${date.getFullYear()}`;

            this.getTimes()
        }
    }
</script>

<style scoped lang="scss">
  .timetable-picker {
	width: 100%;
	margin-top: 2vw;
	//-webkit-animation: animation-translate-right 1500ms linear both;
	//animation: animation-translate-right 1500ms linear both;

	.title {
	  font-size: 1.3vw;
	  color: #9d9fa0;
	  font-weight: 500;
	}

	.timetable-wrapper {
	  margin-top: 1vw;
	  border-radius: .5vw;

	  .full-version {
		a {
		  display: block;

		  .text {
			animation: animation-translate-right 1500ms linear both;
			position: absolute;
			width: 100%;
			background-color: #e16423;
			border-radius: 0 0 .5vw .5vw;
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: .5vw;
			font-size: 1.2vw;
			font-weight: 500;
			transition: background-color .5s ease-in-out;

			&:hover {
			  background-color: #ff7525;
			}
		  }
		}
	  }
	}

	.timetable-body {
	  //-webkit-animation: animation-translate-right 1500ms linear both;
	  //animation: animation-translate-right 1500ms linear both;
	  padding: 1vw 1.5vw;

	  .lessons-row {

		.date-day {
		  color: #ea6620;
		  font-size: 1vw;
		  font-weight: 500;
		  padding: .5vw;
		}
	  }
	}
  }

  .timetable-body {
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
		margin-top: .5vw;
		width: 35%;

		.trainer-calendar {
		  .trainer-calendar-title {
			color: #ff6d1d;
			font-size: 1vw;
			font-weight: 600;
		  }
		}
	  }

	  .right-box {
		margin-top: .5vw;
		width: 60%;

		.trainer-timetable {
		  .trainer-timetable-title {
			color: #ff6d1d;
			font-size: 1vw;
			font-weight: 600;
			margin-left: -.7vw;
		  }

		  .time-status-description {
			font-size: .9vw;
			display: flex;
			align-items: center;
			margin-top: 1.5vw;
			margin-left: -.7vw;

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
  }

  .dark {
	.timetable-picker {
	  .timetable-body {
		background: rgb(61,65,70);
		background: -moz-linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
		background: -webkit-linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
		background: linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146",endColorstr="#25282a",GradientType=1);

        .container-wrapper {
          .trainer-timetable {
            .time-status-description {
              color: #76797a;
            }
          }
        }
	  }
	}
  }
</style>