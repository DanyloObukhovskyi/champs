<template>
    <div class="events_view">
        <div class="container">
            <div class="row">
                <div class="component upcoming_events">
                    <mvp-joined-team :team="team" :key="key" v-for="(team, key) in teams"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MvpJoinedTeam from "./MvpJoinedTeam";

    export default {
        name: "MvpJoinedTeams",
        inject: [
            'http'
        ],
        components: {
            'mvp-joined-team': MvpJoinedTeam
        },
        data(){
            return {
                teams: []
            }
        },
        methods: {
            getJoinedTeams(){
                this.http.getUserJoinedTeams()
                    .then(({data}) => {
                        this.teams = data
                    })
            }
        },
        mounted() {
            this.getJoinedTeams()
        }
    }
</script>

<style scoped>

</style>