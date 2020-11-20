<template>
    <div class="filters">
        <tense-select @selected="(select) => $emit('selected', select)"
                      :counts="counts"
                      :types="types"
                      :selected="selected">
        </tense-select>
        <teams-filter team="teamA" @setTeam="(team) => setFilter('teamA', team)" description="Команда 1 / Игрок 1"/>
        <teams-filter team="teamB" @setTeam="(team) => setFilter('teamB', team)" description="Команда 2 / Игрок 2"/>
        <calendar-filter
                @setFromDate="(date) => setFilter('dateFrom', date)"
                @setToDate="(date) => setFilter('dateTo', date)"
                :date-from="dateFrom"
                :date-to="dateTo">
        </calendar-filter>
    </div>
</template>

<script>
    import CalendarFilter from "../calendar/CalendarFilter";
    import TeamsFilter from "../teams/TeamsFilter";
    import TenseSelect from "../helpers/TenseSelect";

    export default {
        name: "Filters",
        components: {
            TenseSelect,
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
            counts: {
                default: null
            },
            types: {
                default: null
            },
            selected: {
                default: null
            }
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