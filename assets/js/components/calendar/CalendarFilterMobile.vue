<template>
    <div class="dates d-flex justify-content-between">
        <div class="date d-flex">
            <div class="date-calendar" @click="dateFromView = !dateFromView, dateToView = false">
                <i class="fas fa-calendar-alt"></i>
            </div>
            <div @click="dateFromView = !dateFromView, dateToView = false">
                От {{dateFrom}}
            </div>
            <calendar @date="setFromDate" v-show="dateFromView" :date="dateFrom"/>
        </div>
        <div class="date d-flex">
            <div class="date-calendar" @click="dateToView = !dateToView, dateFromView = false">
                <i class="fas fa-calendar-alt"></i>
            </div>
            <div @click="dateToView = !dateToView, dateFromView = false">
                До {{dateTo}}
            </div>
            <calendar @date="setToDate" v-show="dateToView" :date="dateTo"/>
        </div>
    </div>
</template>

<script>
    import Calendar from "./Calendar";

    export default {
        name: "CalendarFilterMobile",
        props: [
            'dateFrom',
            'dateTo'
        ],
        data() {
            return {
                dateToView: false,
                dateFromView: false,
            }
        },
        components: {
            Calendar
        },
        methods: {
            setFromDate(date) {
                this.dateFromView = false;
                this.$emit('setFromDate', date);
            },
            setToDate(date) {
                this.dateToView = false;
                this.$emit('setToDate', date);
            }
        }

    }
</script>

<style scoped>
    .dates .date .date-calendar {
        width: 4vw;
        height: 12vw;
        background: rgb(255, 183, 73);
        background: linear-gradient(
                90deg
                , rgba(255, 183, 73, 1) 0%, rgba(254, 121, 36, 1) 100%);
        color: white;
        font-size: 5.2vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dates, .types {
      margin-bottom: 4%;
    }

    .date {
        font-size: 4vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dark .dates .date {
        color: white;
    }

    .dates .date .date-calendar {
        width: 12vw;
        align-items: center;
        display: flex;
        margin-right: 2.3vw;
        cursor: pointer;
    }

    .calendar {
        width: 51vw;
        right: -3.02vw;
    }
</style>