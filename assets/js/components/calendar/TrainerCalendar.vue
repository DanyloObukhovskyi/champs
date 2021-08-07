<template>
    <div class="trainer-calendar">
        <div class="title">
            <div class="prev" @click="prevMonth">
                <i class="fas fa-chevron-left"></i>
            </div>
            <div class="date">
                <div class="month">
                    {{ months[month] }}
                </div>
                <div class="year">
                    {{ year }}
                </div>
            </div>
            <div class="next" @click="nextMonth">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
        <div class="weeks">
            <div class="week" v-for="week in weeks" v-text="week"></div>
        </div>
        <div class="days">
            <div class="day disable" v-for="d in prevMonthDays">
                <span>
                    {{ d }}
                </span>
            </div>
            <div class="day sel"
                 v-for="d in monthDays"
                 @click="setDay(d)"
                 :class="[+day === +d ? 'active' : '', availableDates.hasOwnProperty(`${d}`) && availableDates[`${d}`] ? 'green': '']">
                <span>
                    {{ d }}
                </span>
            </div>
            <div class="day disable" v-for="key in nextMonthDays">
                <span>
                    {{ key }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import CabinetService from "../../services/CabinetService";
import {mapActions, mapGetters} from "vuex";

const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октрябрь',
    'Ноябрь',
    'Декабрь'
];

const MONTHS_PARSE = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октрября',
    'ноября',
    'декабря'
];

const WEEK_DAYS = [
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс'
];

export default {
    name: "TrainerCalendar",
    props: {
        date: String,
        availableDates: {
            default: {}
        },
        user: {
            default: {}
        },
        trainer: {
            default: {}
        },
    },
    data: function () {
        return {
            month: 0,
            monthView: false,
            year: 2021,
            days: 0,
            day: 0,
            months: MONTHS,
            weeks: WEEK_DAYS,
            timestamp: null
        };
    },
    watch: {},
    computed: {
        ...mapGetters([
            'user',
            'loadUser'
        ]),
        monthDays() {
            const date = new Date(this.year, this.month);

            let month = 0;
            if(date.getMonth() == 8){
                month = 31 - date.getDate();
            } else if(date.getMonth() == 10){
                month = 31 - date.getDate();
            } else {
                month = 32 - date.getDate();
            }

            return month;
        },
        prevMonthDays() {
            const date = new Date(this.year, this.month, 1);

            let day = date.getDay() === 0 ? 0 : date.getDay() - 1;

            let prevMonthDaysCount = 0;
            if(date.getMonth() == 7){
                prevMonthDaysCount = 6;
            } else {
                prevMonthDaysCount = day < 0 ? 0 : day;
            }

            const prevMonth = new Date(this.year, this.month, 0);

            let prevDay = prevMonth.getDate();

            const prevDays = [];
            for (let i = 0; i < prevMonthDaysCount; i++) {
                prevDays.push(prevDay)
                prevDay--;
            }

            return prevDays.reverse();
        },
        nextMonthDays() {
            const date = new Date(this.year, this.month, 1);

            let day = 0;
            if(date.getMonth() == 7){
                day = 42 - this.monthDays - this.prevMonthDays.length
            } else {
                day = 35 - this.monthDays - this.prevMonthDays.length
            }

            if(day < 0){
                day = 0;
            }
            return day;
        },
        dateRu() {
            return `${this.day} ${MONTHS_PARSE[this.month]} ${this.year}`;
        }
    },
    methods: {
        setDay(day) {
            const date = day < 10 ? '0' + day : day;
            const month = this.month < 10 ? '0' + (this.month + 1) : this.month + 1;

            this.$emit('date', `${date}.${month}.${this.year}`);

            this.day = day < 10 ? '0' + day : day;
        },
        prevMonth() {
            if (this.month === 0) {
                this.month = 11;
                this.year--;
            } else {
                this.month--;
            }
            this.setDay(1)
        },
        nextMonth() {
            if (this.month === 11) {
                this.month = 0;
                this.year++;
            } else {
                this.month++;
            }
            this.setDay(1)
        },
        getTime() {
            CabinetService.getTime()
                .then(time => {
                    this.timestamp = time;
                    const date = this.date.split('.');

                    let estTime = new Date(this.timestamp);
                    let currentDateTimeCentralTimeZone = estTime;


                    if(!this.user){
                        if(!this.trainer){
                            let timezone = this.user.timeZone.split(' ');
                            currentDateTimeCentralTimeZone = new Date(estTime.toLocaleString('en-US', { timeZone: timezone[0] }));
                        } else {
                            currentDateTimeCentralTimeZone = new Date(estTime.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));
                        }
                    } else {
                        let timezone = this.user.timezone.split(' ');
                        currentDateTimeCentralTimeZone = new Date(estTime.toLocaleString('en-US', { timeZone: timezone[0] }));
                    }

                    this.day = Math.abs(currentDateTimeCentralTimeZone.getDate());
                    this.month = Math.abs(date[1]) - 1;
                    this.year = date[2];
                });
        }
    },
    created() {
        this.getTime();
    }
}
</script>

<style scoped lang="scss">
.trainer-calendar {
  margin-top: 1vw;
  border-radius: 0;

  .title {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .prev {
      cursor: pointer;
      height: 2.5vw;
      width: 1.5vw;
      clip-path: polygon(0 25%, 100% 0, 100% 100%, 0 75%);
      background-color: #aeaeae;
      margin-right: .1vw;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        color: white;
        font-size: .8vw;
      }

      &:hover {
        opacity: .5;
      }
    }

    .next {
      cursor: pointer;
      clip-path: polygon(0 0, 100% 25%, 100% 75%, 0% 100%);
      height: 2.5vw;
      width: 1.5vw;
      background-color: #aeaeae;
      margin-left: .1vw;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        color: white;
        font-size: .8vw;
      }

      &:hover {
        opacity: .5;
      }
    }

    .date {
      display: flex;
      justify-content: center;
      width: 100%;
      font-size: .9vw;

      .month {
        margin-right: .5vw;
      }
    }
  }

  .weeks {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 1vw;
    padding-bottom: 0.3vw;

    .week {
      flex-shrink: 0;
      width: 14.2%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9vw;
      color: #5c6b79;
    }
  }

  .days {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .day {
      flex-shrink: 0;
      width: 14.2%;
      padding: .1vw;

      &.green {
        span {
          min-height: 2.5vw;
          max-height: 3.5vw;
          color: white;
          background-color: #6cff1d;
          align-items: center;
          justify-content: center;
          font-size: 0.7vw;
          display: flex;
          padding: 34% 0;

          &:hover {
            background-color: #6cff1d;
            color: #FFFFFF;
            cursor: pointer;
          }
        }
      }

      span {
        min-height: 2.5vw;
        max-height: 3.5vw;
        color: white;
        background-color: #aeaeae;
        align-items: center;
        justify-content: center;
        font-size: 0.7vw;
        display: flex;
        padding: 34% 0;

        &:hover {
          background-color: #FF6D1D;
          color: #FFFFFF;
          cursor: pointer;
        }
      }

      &.active {
        span {
          background-color: #FF6D1D;
          color: #FFFFFF;
        }
      }

      &.disable {
        span {
          color: #6b6d6f;

          &:hover {
            color: #c9c9c9;
            background-color: #aeaeae;
          }
        }
      }
    }
  }
}

.dark {
  .trainer-calendar {
    .title {
      .prev {
        background-color: #2d3135;

        &:hover {
          opacity: .5;
        }
      }

      .next {
        background-color: #2d3135;

        &:hover {
          opacity: .5;
        }
      }

      .date {
        .month,
        .year {
          color: white;
        }
      }
    }

    .days {
      .day {
        &.green {
          span {
            min-height: 2.5vw;
            max-height: 3.5vw;
            color: white;
            background-color: #6cff1d;
            align-items: center;
            justify-content: center;
            font-size: 0.7vw;
            display: flex;
            padding: 34% 0;

            &:hover {
              background-color: #6cff1d;
              color: #FFFFFF;
              cursor: pointer;
            }
          }
        }

        span {
          color: white;
          background-color: #2d3135;

          &:hover {
            background-color: #FF6D1D;
            color: #FFFFFF;
            cursor: pointer;
          }
        }

        &.active {
          span {
            background-color: #FF6D1D;
            color: #FFFFFF;
          }
        }

        &.disable {
          span {
            color: #67696b;

            &:hover {
              color: #67696b;
              background-color: #2d3135;
            }
          }
        }
      }
    }
  }
}
</style>