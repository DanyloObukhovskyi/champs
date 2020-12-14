<template>
    <div class="calendar">
        <div class="title">
            <div class="lft">
                <div class="month" @click="monthView = monthView ? false : true">
                    <span v-text="months[month]"></span><img src="/images/arrowCalBtn.svg"/>
                </div>
                <div class="months" v-if="monthView">
                    <div v-for="(m, i) in months" v-text="m" @click="month = i, monthView = false"></div>
                </div>
            </div>
            <div class="rgt">
                <div class="year">
                    <span @click="year = Number(year) - 1"><img src="/images/arrowCalLft.svg"/></span>
                    <label v-text="year"></label>
                    <span @click="year = Number(year) + 1"><img src="/images/arrowCalRgt.svg"/></span>
                </div>
            </div>
        </div>
        <div class="weeks">
            <div class="week" v-for="week in weeks" v-text="week"></div>
        </div>
        <div class="days">
            <div class="day" v-for="i in getWeekDay"></div>
            <div class="day sel" v-for="d in getDays" v-text="d" @click="setDay(d)"
                 :class="[day === d ? 'active' : '']"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Calendar",
        props: {
            date: String,
        },
        computed: {
            getDays() {
                const date = new Date(this.year, this.month, 32);
                return 32 - date.getDate();
            },
            getWeekDay() {
                const date = new Date(this.year, this.month, 1);
                let day = date.getDay() === 0 ? 0 : date.getDay() - 1;
                return day < 0 ? 0 : day;
            }
        },
        data: function () {
            return {
                month: 0,
                monthView: false,
                year: 2020,
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октрябрь', 'Ноябрь', 'Декабрь'],
                days: 0,
                day: 0,
                weeks: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            };
        },
        methods: {
            setDay(day) {
                const date = day < 10 ? '0' + day : day
                const month = this.month < 10 ? '0' + (this.month + 1) : this.month + 1;

                this.$emit('date', `${date}.${month}.${this.year}`);
                this.day = date;
            }
        },
        mounted() {
            const date = this.date.split('.');

            this.day = Math.abs(date[0]);
            this.month = Math.abs(date[1]) - 1;
            this.year = date[2];
        }
    }
</script>

<style scoped>
    .calendar{
        color: black;
        width: 15vw;
        position: absolute;
        top: 100%;
        right: -0.02vw;
        background-color: #FFFFFF;
        border: 0.02vw solid #FF6D1D;
        z-index: 10;
        padding: 1vw;
        border-radius: 0;
    }
    .calendar .title{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .calendar .title .lft,
    .calendar .title .rgt{
        width: 50%;
        position: relative;
    }
    .calendar .title .month{
        height: 1.4vw;
        font-size: 0.7vw;
        font-weight: 500;
        padding-left: 0.4vw;
        display: flex;
        align-items: center;
    }
    .calendar .title .month img{
        width: 0.5vw;
        margin-left: 0.5vw;
    }
    .calendar .title .months{
        width: 80%;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: #FFFFFF;
        box-shadow: 0 0 0.4vw #AAA;
        padding: 0.5vw;
        z-index: 10;
    }
    .calendar .title .months div{
        font-size: 0.7vw;
        margin-top: 0.3vw;
        cursor: pointer;
    }
    .calendar .title .months div:nth-child(1){
        margin-top: 0;
    }
    .calendar .title .year{
        height: 1.4vw;
        float: right;
        font-size: 0.7vw;
        padding-right: 0.6vw;
        display: flex;
        align-items: center;
    }
    .calendar .title .year span{
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        z-index: 10;
    }
    .calendar .title .year span:nth-child(1){
        margin-right: 0.5vw;
    }
    .calendar .title .year span:nth-child(3){
        margin-left: 0.5vw;
    }
    .calendar .title .year span img{
        width: 0.3vw;
    }
    .calendar .title .year label{
        height: 100%;
        display: flex;
        align-items: center;
        font-weight: 500;
        padding: 0 0.5vw;
    }
    .calendar .weeks{
        width: 100%;
        display: flex;
        flex-direction: row;
        padding-top: 1vw;
        padding-bottom: 0.3vw;
        color: #7D8186;
    }
    .calendar .weeks .week{
        flex-shrink: 0;
        width: 14.2%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7vw;
    }
    .calendar .days{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        color: #111111;
    }
    .calendar .days .day{
        flex-shrink: 0;
        width: 14.2%;
        padding: 0.3vw 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7vw;
    }
    .calendar .days .day.sel:hover,
    .calendar .days .day.sel.active{
        background-color: #FF6D1D;
        color: #FFFFFF;
        border-radius: 0.2vw;
        cursor: pointer;
    }
    @media screen and (max-width: 1000px) {
        .calendar{
            width: 40vw;
            padding: 2vw;
        }
        .calendar .title .month{
            height: 3vw;
            padding-left: 0.6vw;
        }
        .calendar .title .month span{
            font-size: 2vw;
        }
        .calendar .title .month img{
            width: 1.5vw;
            margin-left: 1vw;
        }
        .calendar .title .months{
            width: 100%;
            padding: 2vw;
        }
        .calendar .title .months div{
            font-size: 2vw;
            margin-top: 1vw;
        }
        .calendar .title .year{
            height: 3vw;
            font-size: 2vw;
            padding-right: 2vw;
        }
        .calendar .title .year span:nth-child(1){
            margin-right: 1vw;
        }
        .calendar .title .year span:nth-child(3){
            margin-left: 1vw;
        }
        .calendar .title .year span img{
            width: 1vw;
        }
        .calendar .title .year label{
            padding: 0 1vw;
        }
        .calendar .weeks{
            padding-top: 2vw;
            padding-bottom: 1vw;
        }
        .calendar .weeks .week{
            font-size: 2vw;
        }
        .calendar .days .day{
            padding: 1vw 0;
            font-size: 2vw;
        }
    }
    @media screen and (max-width: 600px) {
        .calendar{
            width: 57vw;
            padding: 4vw;
        }
        .calendar .title .month{
            height: 5vw;
            padding-left: 0.6vw;
        }
        .calendar .title .month span{
            font-size: 3.5vw;
        }
        .calendar .title .month img{
            width: 2vw;
            margin-left: 3vw;
        }
        .calendar .title .months{
            width: 100%;
            padding: 2vw;
        }
        .calendar .title .months div{
            font-size: 3.3vw;
            margin-top: 1vw;
        }
        .calendar .title .year{
            height: 5vw;
            font-size: 3.3vw;
            padding-right: 2vw;
        }
        .calendar .title .year span:nth-child(1){
            margin-right: 2vw;
        }
        .calendar .title .year span:nth-child(3){
            margin-left: 2vw;
        }
        .calendar .title .year span img{
            width: 1.5vw;
        }
        .calendar .title .year label{
            padding: 0 2vw;
        }
        .calendar .weeks{
            padding-top: 3vw;
            padding-bottom: 2vw;
        }
        .calendar .weeks .week{
            font-size: 3.3vw;
        }
        .calendar .days .day{
            padding: 1vw 0;
            font-size: 3.3vw;
        }
    }

</style>