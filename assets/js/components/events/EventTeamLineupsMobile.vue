<template>
    <div class="w-100">
        <div class="lineups-header">
            <lamp-header-mobile title="Составы команд"></lamp-header-mobile>
        </div>
        <div class="lineups-body">
            <team-players-mobile v-for="(team, index) in teams" :key="index" :team="team" :show="show"/>
        </div>
        <div class="show">
            <button @click="show = !show">
                <i class="fas"
                   :class="show ? 'fa-caret-up': 'fa-caret-down'"></i>
               {{ show ? 'Свернуть' : 'Показать'}}
            </button>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";
    import TeamPlayers from "../teams/TeamPlayers";
    import LampHeaderMobile from "../helpers/LampHeaderMobile";
    import TeamPlayersMobile from "../teams/TeamPlayersMobile";

    export default {
        name: "EventTeamLineupsMobile",
        components: {TeamPlayersMobile, LampHeaderMobile, TeamPlayers, LampHeader},
        props: ['teams'],
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style scoped>
    .lineups-body {
        margin-top: 1vw;
        display: block;
        flex-wrap: wrap;
    }

    .show button,
    .hide button {
        display: flex;
        justify-content: center;
        margin-top: 1vw;
        background: white;
        width: 100%;
        border: unset;
        padding: .5vw;
        color: #ff6d1d;
        font-size: 3vw;
        align-items: center;
        transition: all .3s ease-in-out;
        cursor: pointer;
    }

    .show button:hover,
    .hide button:hover {
        opacity: .5;
    }

    .dark .show button,
    .dark .hide button {
        background: #1e2123;
    }

    .show button i,
    .hide button i {
        display: flex;
        align-items: center;
        margin-right: .5vw;
    }
</style>