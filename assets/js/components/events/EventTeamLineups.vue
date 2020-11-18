<template>
    <div class="w-50">
        <div class="lineups-header">
            <lamp-header title="Составы команд">
                <div class="toggle">
                    <i class="fas"
                       :class="show ? 'fa-caret-up': 'fa-caret-down'"
                       @click="show = !show"></i>
                </div>
            </lamp-header>
        </div>
        <div class="lineups-body" v-if="show">
            <team-players v-for="(team, index) in teams" :key="index" :team="team"/>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";
    import TeamPlayers from "../teams/TeamPlayers";

    export default {
        name: "EventTeamLineups",
        components: {TeamPlayers, LampHeader},
        props: ['teams'],
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style scoped>
    .lineups-body{
        margin-top: 1vw;
    }

    .lineups-header .toggle {
        padding-right: 1vw;
    }

    .lineups-header .toggle i {
        color: white;
        cursor: pointer;
    }
</style>