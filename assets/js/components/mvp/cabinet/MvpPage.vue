<template>
    <div>
        <div class="header mt-3">
            <div class="lft">
                <a :class="{active: active === 'commands'}" @click=" active = 'commands'">КОМАНДЫ</a>
                <a :class="{active: active === 'tournaments'}" @click=" active = 'tournaments'">ТУРНИРЫ</a>
                <a :class="{active: active === 'matches'}" @click=" active = 'matches'">МАТЧИ</a>
            </div>
        </div>
       <MvpTeams :create-route="routeCreateTeam"></MvpTeams>
    </div>
</template>

<script>
    import MvpTeams from "./MvpTeams";

    export default {
        name: "MvpPage",
        props: [
            'routeCreateTeam',
        ],
        components: {
            MvpTeams
        },
        data(){
            return {
                active: 'commands',
            }
        },
        methods: {

        },
    }
</script>

<style scoped>

</style>