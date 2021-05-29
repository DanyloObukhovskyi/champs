<template>
    <div class="team-composition">
        <div class="team-composition-header">
            <lamp-header title="Состав команд"/>
        </div>
        <div class="team-composition-body">
            <div class="teamA">
                <div class="title">
                    <img :src="teamA.logo">
                    {{ teamA.title }}
                </div>
                <div class="players">
                    <player
                            :key="index"
                            :isActive="player === activePlayerTeamA"
                            :player="player"
                            @choseActive="(activePlayer) => activePlayerTeamA = activePlayer"
                            v-for="(player, index) in teamA.players">
                    </player>
                </div>
            </div>
            <div class="teamB">
                <div class="title">
                    <img :src="teamB.logo">
                    {{ teamB.title }}
                </div>
                <div class="players">
                    <player
                            :key="index"
                            :isActive="player === activePlayerTeamB"
                            :player="player"
                            @choseActive="(activePlayer) => activePlayerTeamB = activePlayer"
                            v-for="(player, index) in teamB.players">
                    </player>
                </div>
            </div>
        </div>
        <div class="compare">
            <player
                    :isActive="true"
                    :player="activePlayerTeamA">
            </player>
            <div class="characteristics">
                <div v-for="(statName, stat) in stats">
                    <span :class="{orange: playerTeamB !== null && playerTeamA[stat] > playerTeamB[stat]}">
                        {{ playerTeamA !== null ? playerTeamA[stat] : '???' }}
                    </span>
                    <span class="characteristic">
                        {{ statName }}
                    </span>
                    <span :class="{orange: playerTeamB !== null && playerTeamA[stat] < playerTeamB[stat]}">
                        {{ playerTeamB !== null ? playerTeamB[stat] : '???' }}
                    </span>
                </div>
            </div>
            <player
                    :isActive="true"
                    :player="activePlayerTeamB">
            </player>
        </div>
    </div>
</template>

<script>
import LampHeader from "../helpers/LampHeader";
import Player from "./Player";

export default {
    name: "TeamComposition",
    props: [
        'teamA',
        'teamB',
        'map',
        'type'
    ],
    data() {
        return {
            activePlayerTeamA: null,
            activePlayerTeamB: null,
            stats: {
                rating: 'Rating',
                kd: 'Kills pre round',
                kast: 'Kast',
                adr: 'Average damage'
            }
        }
    },
    components: {
        Player,
        LampHeader
    },
    computed: {
        playerTeamA() {
            return this.getActivePlayer(this.teamA, this.activePlayerTeamA);
        },
        playerTeamB() {
            return this.getActivePlayer(this.teamB, this.activePlayerTeamB);
        }
    },
    methods: {
        getActivePlayer(team, player) {
            let stat = null;

            if (player !== null) {
                stat = team.playerStatistics[this.map][this.type].find(stat => {
                    return stat.player_id === player.user_id
                });
            }
            return stat;
        }
    }
}
</script>

<style scoped>
.team-composition {
    margin-top: 3.5vw;
}

.team-composition-body {
    display: flex;
    margin: 1vw 0;
    justify-content: space-between;
}

.team-composition-body .title {
    font-size: 1vw;
}

.team-composition-body .title img {
    width: 2vw;
}

.team-composition-body .players {
    display: flex;
    align-items: end;
}

.team-composition-body .teamA {
    width: 50%;
    margin-right: .5vw;
    padding: 1vw 0 1vw 3.5vw;
    background: rgb(251, 252, 252);
    background: -moz-linear-gradient(90deg, rgba(251, 252, 252, 1) 0%, rgba(193, 198, 202, 1) 49%);
    background: -webkit-linear-gradient(90deg, rgba(251, 252, 252, 1) 0%, rgba(193, 198, 202, 1) 49%);
    background: linear-gradient(90deg, rgba(251, 252, 252, 1) 0%, rgba(193, 198, 202, 1) 49%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfcfc", endColorstr="#c1c6ca", GradientType=1);
}

.team-composition-body .teamB {
    width: 50%;
    margin-left: .5vw;
    padding: 1vw 0 1vw 3.5vw;
    background: rgb(193, 198, 202);
    background: -moz-linear-gradient(90deg, rgba(193, 198, 202, 1) 0%, rgba(251, 252, 252, 1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(193, 198, 202, 1) 0%, rgba(251, 252, 252, 1) 100%);
    background: linear-gradient(90deg, rgba(193, 198, 202, 1) 0%, rgba(251, 252, 252, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c1c6ca", endColorstr="#fbfcfc", GradientType=1);
}

.dark .team-composition-body .teamA {
    color: white;
    background: rgb(59, 63, 68);
    background: -moz-linear-gradient(90deg, rgba(59, 63, 68, 1) 0%, rgba(37, 40, 42, 1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(59, 63, 68, 1) 0%, rgba(37, 40, 42, 1) 100%);
    background: linear-gradient(90deg, rgba(59, 63, 68, 1) 0%, rgba(37, 40, 42, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3b3f44", endColorstr="#25282a", GradientType=1);
}

.dark .team-composition-body .teamB {
    color: white;
    background: rgb(37, 40, 42);
    background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(59, 63, 68, 1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(59, 63, 68, 1) 100%);
    background: linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(59, 63, 68, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#3b3f44", GradientType=1);
}

.team-composition .compare {
    padding: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.team-composition .compare .characteristics {
    padding-bottom: 2vw;
}

.dark .team-composition .compare .characteristics {
    color: white;
}

.team-composition .compare .characteristics span.characteristic {
    width: 10vw;
    display: flex;
    justify-content: center;
}

.team-composition .compare .characteristics span:not(characteristic) {
    display: flex;
    width: 4vw;
    justify-content: center;
}

.team-composition .compare .characteristics > div {
    display: flex;
    font-size: 1vw;
    padding: .2vw 0;
}

.team-composition .compare .characteristics span.orange {
    color: #f24f13;
}
</style>