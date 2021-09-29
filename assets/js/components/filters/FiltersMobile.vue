<template>
    <div class="filters">
      <div style="display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  width: 100%;
                  margin-bottom: 2%;">
        <teams-filter-mobile class="teams" team="teamA" @setTeam="(team) => setFilter('teamA', team)" description="Команда 1 / Игрок 1"/>
        <teams-filter-mobile class="teams"  team="teamB" @setTeam="(team) => setFilter('teamB', team)" description="Команда 2 / Игрок 2"/>
      </div>
        <calendar-filter-mobile style="width: 97%" class="calendarFilter"
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
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
      flex-direction: column;
    }
    .calendarFilter >>> .fas {
      font-size: 5vw;
    }
</style>

<style>
    .filters .dates .date div:nth-child(2){
        padding: 0 1.5vw;
    }
    .filters .dates .date .date-calendar{
        margin-right: 0;
    }
    .teams {
      width: 48%;
    }
</style>