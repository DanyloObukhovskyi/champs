<template>
    <div class="calendar-wrapper">
        <div class="title">
            Календарь
        </div>
        <div class="body">
            <div class="timetables lessons" style="opacity: 1;">
                <div class="controll mt-3">
                    <div class="dates">
                        <div class="arrow" @click="setDate(-7)">
                            <i class="fas fa-caret-left"></i>
                        </div>
                        <div class="dt" v-if="week.length > 0">
                            <span>
                                {{ weekStart }}
                            </span>
                            -
                            <span>
                                {{ weekEnd }}
                            </span>
                        </div>
                        <div class="arrow" @click="setDate(7)">
                            <i class="fas fa-caret-right"></i>
                        </div>
                        <div class="loader" v-if="load">
                            <svg class="loader" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                 style="margin: auto; background: none; display: block; shape-rendering: auto;"
                                 width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#ff6d1d" stroke="none">
                                    <animateTransform attributeName="transform" type="rotate" dur="1s"
                                                      repeatCount="indefinite" keyTimes="0;1"
                                                      values="0 50 51;360 50 51"/>
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div id="calendar" class="cont" v-if="week.length > 0">
                    <div class="time_mobile">
                        <div class="text" v-for="i in 23">
                            <span>
                                {{ i > 9 ? i : `0${i}` }}:00
                            </span>
                            <span>0{{ i }}:00</span>
                        </div>
                    </div>
                    <div class="calendarblock">
                        <div class="days">
                            <div class="null"></div>
                            <div class="day" v-for="(day, index) in days">
                                <div class="title">{{ day }}</div>
                                <div class="date">
                                    {{ parseDate(week[index].date).day }}.
                                    {{ parseDate(week[index].date).month }}.
                                </div>
                            </div>
                        </div>
                        <div class="times">
                            <div class="time" v-for="time in times">
                                <div class="text">
                                    <span>
                                        {{ time > 9 ? time : `0${time}` }}:00
                                    </span>
                                </div>
                                <div class="rows" style="user-select: none;">
                                    <div v-for="day in week" class="rows-row">
                                        <div class="open" v-if="getTime(day, time) === 0"
                                             @click="setTime(day.date, time)">
                                            Открыть
                                        </div>
                                        <div class="openclose" v-if="getTime(day, time) === 1"
                                             @click="setTime(day.date, time)">
                                            Запись открыта
                                        </div>
                                        <div class="close" v-if="getTime(day, time) === 10">
                                            Запись занята
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CabinetService from "../../../../services/CabinetService";

    const DAYS = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
    ];

    const MONTHS = [
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

    export default {
        name: "Calendar",
        data() {
            return {
                days: DAYS,
                week: [],
                load: false,
                date: null,
            }
        },
        watch: {
            date() {
                this.getTrainerWeek();
            }
        },
        computed: {
            times() {
                const times = [];
                for (let i = 0; i < 24; i++) {
                    times.push(i);
                }
                return times;
            },
            weekStart() {
                const day = this.parseDate(this.week[0].date);
                const month = MONTHS[day.date.getMonth()];

                return `${day.day} ${month}`;
            },
            weekEnd() {
                const day = this.parseDate(this.week[6].date);
                const month = MONTHS[day.date.getMonth()];

                return `${day.day} ${month}`;
            }
        },
        methods: {
            getTrainerWeek() {
                this.load = true;

                const date = `${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}`;

                CabinetService
                    .getTrainerWeek(date)
                    .then(week => {
                        this.week = week;
                        this.load = false;
                    })
            },
            getTime(day, time) {
                return day[`time${time > 9 ? time : `0${time}`}_${time + 1 > 9 ? time + 1 : `0${time + 1}`}`];
            },
            parseDate(dateString) {
                const date = new Date(dateString);

                return {
                    day: date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`,
                    month: date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
                    date
                }
            },
            setDate(num) {
                const timestamp = this.date.setDate(this.date.getDate() + num);

                this.date = new Date(timestamp)
            },
            setTime(date, time) {

                CabinetService.setTrainerDayTime(date, {from: time})
                    .then((times) => {
                        this.week = this.week.map(day => {
                            if (day.date === times.date) {
                                return times;
                            } else {
                                return day;
                            }
                        })
                    })
            }
        },
        mounted() {
            this.date = new Date();

            this.getTrainerWeek();
        }
    }
</script>

<style scoped lang="scss">
  .calendar-wrapper {
	background-color: #eff0f0;
	border-radius: .5vw;
	padding: 1vw 1vw;
	height: 100%;

	.title {
	  font-size: 1.1vw;
	  font-weight: 600;
	}
  }

  .dark {
	.calendar-wrapper {
	  background: rgb(61, 65, 70);
	  background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
	  background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
	  background: linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
	  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);

	  .title {
		color: white;
	  }
	}
  }
</style>

<style scoped>
	.lessons {
		width: 100%;
	}

	.lessons .header .rgt .price span {
		padding: 0 1vw;
	}

	.lessons .header .rgt .button span {
		margin-left: 0.5vw;
	}

	.lessons .dates .loader {
		position: absolute;
		right: 0;
		top: 0;
	}

	.lessons .dates .loader svg {
		width: 2.5vw;
		height: 2.5vw;
	}

	@media screen and (max-width: 1000px) {
		.lessons {
			padding: 2vw 0;
		}

		.lessons .header .rgt .price span {
			padding: 0 2vw;
		}

		.lessons .header .rgt .button span {
			margin-left: 0.5vw;
		}
	}

	@media screen and (max-width: 600px) {
		.lessons {
			padding: 4vw 0;
		}

		.lessons .header .rgt .price span {
			padding: 0 4vw;
		}

		.lessons .header .rgt .button span {
			margin-left: 0.5vw;
		}
	}

	.lessons .controll .dates {
		padding-top: 1vw;
		width: 100%;
		font-size: 0.9vw;
		font-weight: 500;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.dark .lessons .controll .dates {
		color: white;
	}

	.lessons .controll .dates span:nth-child(1) {
		padding-right: 0.5vw;
	}

	.lessons .controll .dates span:nth-child(2) {
		padding-left: 0.5vw;
	}

	.lessons .controll .dates .arrow {
		width: 1.3vw;
		height: 1.3vw;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.3s;
		cursor: pointer;
	}

	.lessons .controll .dates .arrow:hover {
		background-color: #CFDCF3;
	}

	.lessons .cont {
		width: 100%;
	}

	.lessons .calendarblock {
		width: 100%;
		background: #f8f8f8;
		margin-top: 1vw;
		display: flex;
		flex-direction: column;
	}

	.dark .lessons .calendarblock {
		background: #35393e;
	}

	.lessons .calendarblock .days {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-shrink: 0;
	}

	.lessons .calendarblock .days .null {
		width: 8vw;
		flex-shrink: 0;
	}

	.lessons .calendarblock .days .day {
		width: 14.28%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1vw 0;
	}

	.lessons .calendarblock .days .day .title {
		width: 100%;
		display: flex;
		justify-content: center;
		font-size: 0.7vw;
		text-transform: uppercase;
		letter-spacing: 0.05vw;
	}

	.lessons .calendarblock .days .day .date {
		width: 100%;
		display: flex;
		justify-content: center;
		font-size: 0.7vw;
		color: #888;
		padding-top: 0.3vw;
	}

	.lessons .calendarblock .days .day.today .title {
		color: #FF6D1D;
		font-weight: 500;
	}

	.lessons .calendarblock .days .day.today .date {
		color: #000000;
		font-weight: 500;
	}

	.lessons .calendarblock .days .day:after {
		content: '';
		width: 0.08vw;
		height: 0.5vw;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: #CFDCF3;
	}

	.dark .lessons .calendarblock .days .day:after {
		content: '';
		width: 0.08vw;
		height: 0.5vw;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: #989898;
	}

	.lessons .calendarblock .times {
		width: 100%;
	}

	.lessons .calendarblock .times .time {
		width: 100%;
		height: 4vw;
		display: flex;
		flex-direction: row;
	}

	.lessons .calendarblock .times .time .text {
		width: 8vw;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-shrink: 0;
	}


	.lessons .calendarblock .times .time .text:after {
		content: '';
		width: 1vw;
		height: 0.04vw;
		position: absolute;
		top: 0;
		right: 0;
		background-color: #CFDCF3;
	}

	.dark .lessons .calendarblock .times .time .text:after {
		content: '';
		width: 1vw;
		height: 0.04vw;
		position: absolute;
		top: 0;
		right: 0;
		background-color: #989898;
	}

	.lessons .calendarblock .times .time .text span {
		position: relative;
		font-size: 0.7vw;
		text-align: center;
		display: flex;
		align-items: center;
	}

	.dark .lessons .calendarblock .times .time .text span {
		color: white;
	}

	.lessons .calendarblock .times .time .rows {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}

	.lessons .calendarblock .times .time .rows .rows-row {
		width: 14.28%;
		height: 100%;
		padding: 0.2vw;
	}

	.lessons .calendarblock .times .time .rows .rows-row div {
		transition: background-color .5s ease;
	}

	.lessons .calendarblock .times .time .rows .rows-row:after {
		content: '';
		width: 0.08vw;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: #CFDCF3;
	}

	.dark .lessons .calendarblock .times .time .rows .rows-row:after {
		content: '';
		width: 0.08vw;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: #989898;
	}

	.lessons .calendarblock .times .time .rows:after {
		content: '';
		width: 100%;
		height: 0.04vw;
		position: absolute;
		top: 0;
		right: 0;
		background-color: #CFDCF3;
	}

	.dark .lessons .calendarblock .times .time .rows:after {
		content: '';
		width: 100%;
		height: 0.04vw;
		position: absolute;
		top: 0;
		right: 0;
		background-color: #989898;
	}

	.lessons .calendarblock .times .time .rows .rows-row .open {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 109, 29, 0.1);
		color: #000000;
		font-size: 0.75vw;
		cursor: pointer;
	}

	.dark .lessons .calendarblock .times .time .rows .rows-row .open {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #232629;
		color: #a2a2a2;
		font-size: 0.75vw;
		cursor: pointer;
	}

	.lessons .calendarblock .times .time .rows .rows-row .openclose {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #CFDCF3;
		color: #6D85AF;
		font-size: 0.75vw;
		cursor: pointer;
	}

	.dark .lessons .calendarblock .times .time .rows .rows-row .openclose {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #aeaeae;
		color: white;
		font-size: 0.75vw;
		cursor: pointer;
	}


	.lessons .calendarblock .times .time .rows .rows-row .close {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FF6D1D;
		color: #FFFFFF;
		cursor: pointer;
		font-weight: 500;
		font-size: 0.75vw;
		opacity: .75;
	}

	.lessons .time_mobile {
		display: none;
	}

	@media screen and (max-width: 1000px) {
		.lessons .controll .dates {
			font-size: 2vw;
		}

		.lessons .controll .dates .arrow {
			margin-left: 3vw;
		}

		.lessons .cont {
			width: calc(100% - 20vw);
			left: 20vw;
			margin-top: 4vw;
		}

		.lessons .calendarblock {
			overflow-x: auto;
		}

		.lessons .calendarblock .days {
			width: auto;
			min-width: 100%;
		}

		.lessons .calendarblock .days .null {
			display: none;
		}

		.lessons .calendarblock .days .day {
			width: 50%;
			flex-shrink: 0;
			padding: 2vw 0;
		}

		.lessons .calendarblock .days .day .title {
			font-size: 2vw;
		}

		.lessons .calendarblock .days .day .date {
			font-size: 2vw;
			padding-top: 2vw;
		}

		.lessons .time_mobile {
			width: 20vw;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: absolute;
			left: -20vw;
			top: 0;
			background-color: #FFFFFF;
			z-index: 10;
			padding-top: 9vw;
			border: 0.04vw solid #CFDCF3;
			border-right: 0.4vw solid #CFDCF3;
			border-right: 0;
		}

		.lessons .time_mobile .text {
			width: 100%;
			height: 15vw;
			display: flex;
			justify-content: center;
		}

		.lessons .time_mobile span {
			font-size: 2vw;
		}

		.lessons .calendarblock .times .time .text:after {
			content: '';
			width: 1vw;
			height: 2vw;
			position: absolute;
			top: 0;
			right: 0;
			background-color: #CFDCF3;
		}

		.lessons .calendarblock .times .time {
			width: auto;
			min-width: 100%;
			flex-shrink: 0;
			height: 15vw;
		}

		.lessons .calendarblock .times .time .text {
			display: none;
		}

		.lessons .calendarblock .times {
			width: auto;
			min-width: 100%;
			flex-shrink: 0;
		}

		.lessons .calendarblock .times .time .rows {
			width: auto;
			min-width: 100%;
		}

		.lessons .calendarblock .times .time .rows .rows-row {
			flex-shrink: 0;
			padding: 1vw;
		}

		.lessons .calendarblock .times .time .rows:after {
			height: 0.2vw;
		}

		.lessons .calendarblock .times .time .rows .rows-row:after {
			width: 0.2vw;
		}

		.lessons .calendarblock .times .time .rows .rows-row .open {
			font-size: 2vw;
		}

		.lessons .calendarblock .times .time .rows .rows-row:nth-child(1):after {
			display: none;
		}

		.lessons .calendarblock .days .day:after {
			display: none;
		}

		.lessons .calendarblock .times .time .rows .rows-row .user img {
			width: 5vw;
			height: 5vw;
			margin-right: 3vw;
		}

		.lessons .calendarblock .times .time .rows .rows-row .openclose {
			font-size: 2vw;
		}
	}

	@media screen and (max-width: 600px) {
		.lessons .calendarblock .days .day {
			width: 100%;
		}

		.lessons .calendarblock {
			margin-top: 4vw;
		}

		.lessons .controll .dates {
			padding-top: 4vw;
			font-size: 4vw;
		}

		.lessons .controll .dates .dt {
			width: 100%;
			display: flex;
		}

		.lessons .controll .dates .dt span:nth-child(1) {
			padding-right: 1vw;
		}

		.lessons .controll .dates .dt span:nth-child(2) {
			padding-left: 1vw;
		}

		.lessons .controll .dates .arrow {
			flex-shrink: 0;
			width: 8vw;
			height: 8vw;
			margin-left: 4vw;
		}

		.lessons .time_mobile {
			padding-top: 10vw;
		}

		.lessons .calendarblock .days .day .title {
			font-size: 3vw;
		}

		.lessons .calendarblock .days .day .date {
			font-size: 3vw;
		}

		.lessons .time_mobile span {
			font-size: 3vw;
		}

		.lessons .calendarblock .times .time .rows .rows-row .openclose {
			font-size: 3.5vw;
		}

		.lessons .calendarblock .times .time .rows .rows-row .open {
			font-size: 3.5vw;
		}

		.lessons .calendarblock .times .time .rows .rows-row .user img {
			width: 6vw;
			height: 6vw;
			margin-right: 4vw;
		}

		.lessons .calendarblock .times .time {
			height: 18vw;
		}

		.lessons .time_mobile .text {
			height: 18vw;
		}
	}
</style>