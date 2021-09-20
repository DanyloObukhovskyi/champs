<template>
    <div class="filters">
        <teams-filter-mobile team="teamA" @setTeam="(team) => setFilter('teamA', team)" description="Команда 1 / Игрок 1"/>
        <teams-filter-mobile  team="teamB" @setTeam="(team) => setFilter('teamB', team)" description="Команда 2 / Игрок 2"/>
        <calendar-filter-mobile
                @setFromDate="(date) => setFilter('dateFrom', date)"
                @setToDate="(date) => setFilter('dateTo', date)"
                :date-from="dateFrom"
                :date-to="dateTo">
        </calendar-filter-mobile>
    </div>
</template>

<script>
    import CalendarFilterMobile from "../calendar/CalendarFilterMobile";
    import TeamsFilterMobile from "../teams/TeamsFilterMobile";

    export default {
        name: "FiltersMobile",
        components: {
            CalendarFilterMobile,
            TeamsFilterMobile
        },
        props: {
            dateFrom: {
                default: '21.02.2015'
            },
            dateTo: {
                default: '21.02.2022'
            },
            teamA: {
                default: null
            },
            teamB: {
                default: null
            },
        },
        methods: {
            setFilter(filter, value){
                this.$emit('setFilter', {filter, value})
            },
        }
    }
</script>

<style scoped>
    .filters{
        display: block;
        width: 100%;
        align-items: end;
        justify-content: space-between;
    }
</style>

<style>
    .filters .dates .date div:nth-child(2){
        padding: 0 1.5vw;
    }
    .filters .dates .date .date-calendar{
        margin-right: 0;
    }
</style>