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
            date: String
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
                this.$emit('date', `
                    ${day < 10 ? '0' + day : day}.
                    ${this.month < 10 ? '0' + (this.month + 1) : this.month + 1}.
                    ${this.year}`
                )
                this.day = day < 10 ? '0' + day : day;
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

</style>