<template>
    <div class="w-100">
        <match-players-statistics
                @selectMap="selectMap"
                @selectType="selectType"
                :map="map"
                :type="type"
                :team-a="teamA"
                :team-b="teamB">
        </match-players-statistics>
        <div class="w-100 matches">
            <team-composition
                :map="map"
                :type="type"
                :team-a="teamA"
                :team-b="teamB">
            </team-composition>
        </div>
    </div>
</template>

<script>
    import TeamComposition from "../players/TeamComposition";
    import MatchPlayersStatistics from "./MatchPlayersStatistics";

    export default {
        name: "MatchStatistics",
        props: [
            'teamA',
            'teamB'
        ],
        data(){
            return {
                map: 'Все карты',
                type: 'total'
            }
        },
        methods: {
            selectMap(map){
                this.map = map
            },
            selectType(type){
                this.type = type
            }
        },
        components: {
            MatchPlayersStatistics,
            TeamComposition
        }
    }
</script>

<style scoped>

</style>