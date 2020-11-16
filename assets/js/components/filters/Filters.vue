<template>
    <div class="filters">
        <calendar-filter
                @setFromDate="(date) => setFilter('dateFrom', date)"
                @setToDate="(date) => setFilter('dateTo', date)"
                :date-from="dateFrom"
                :date-to="dateTo">
        </calendar-filter>
        <teams-filter team="teamA" @setTeam="(team) => setFilter('teamA', team)"/>
        <teams-filter team="teamB" @setTeam="(team) => setFilter('teamB', team)"/>
    </div>
</template>

<script>
    import CalendarFilter from "../calendar/CalendarFilter";
    import TeamsFilter from "../teams/TeamsFilter";

    export default {
        name: "Filters",
        components: {
            CalendarFilter,
            TeamsFilter
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
        margin-left: 1vw;
    }
</style>