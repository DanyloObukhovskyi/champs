<template>
    <div class="player-statistics">
        <div class="player-statistics-header">
            <lamp-header title="Статистика игроков"/>
        </div>
        <div class="player-statistics-body">
            <div class="statistics-head">
                <div class="grid-select">
                    <div class="lft statistics-map-selector">
                        <span
                                v-for="(el, mapName) in teamA.playerStatistics"
                                v-html="mapName"
                                @click="selectMap(mapName)"
                                :class="{active: mapName === map}">
                        </span>
                    </div>
                    <div class="rgt">
                        <span :class="{active: type === 'total'}"
                              @click="selectType('total')">Обе стороны</span>
                        <span :class="{active: type === 'terrorist'}"
                              @click="selectType('terrorist')">T</span>
                        <span :class="{active: type === 'counterTerrorist'}"
                              @click="selectType('counterTerrorist')">CT</span>
                    </div>
                </div>
            </div>
            <div class="statistics">
                <div class="grid-block">
                    <div class="grid-header">
                        <div class="r">
                            <img class="logo"
                                 :src="teamA.logo"
                                 @error="() => $event.target.src = '/images/noLogo.png'"/>
                            {{ teamA.title ? teamA.title: '???'}}
                        </div>
                        <div class="r" v-for="statName in stats">
                            {{statName}}
                        </div>
                    </div>
                    <div class="grid-row" v-for="player in getLeftTeamStatistic">
                        <div class="r">
                            <span>
                                {{player.player}}
                            </span>
                        </div>
                        <div class="r" v-for="(statName, stat) in stats">
                            {{player[stat]}}
                        </div>
                    </div>
                </div>
                <div class="grid-block">
                    <div class="grid-header">
                        <div class="r">
                            <img
                                    class="logo"
                                    :src="teamB.logo"
                                    @error="() => $event.target.src = '/images/noLogo.png'"/>
                            {{ teamB.title ? teamB.title: '???'}}
                        </div>
                        <div class="r" v-for="statName in stats">
                            {{statName}}
                        </div>
                    </div>
                    <div class="grid-row" v-for="player in getRightTeamStatistic">
                        <div class="r">
                            <span>
                                 {{player.player}}
                            </span>
                        </div>
                        <div class="r" v-for="(statName, stat) in stats">
                            {{player[stat]}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";

    export default {
        name: "MatchPlayersStatistics",
        props: [
            'teamA',
            'teamB',
            'map',
            'type'
        ],
        data() {
            return {
                stats: {
                    kd: 'K-D',
                    plusMinus: '+/-',
                    adr: 'ADR',
                    kast: 'KAST',
                    rating: 'Rating'
                }
            }
        },
        components: {
            LampHeader
        },
        computed: {
            getLeftTeamStatistic() {
                return this.teamA.playerStatistics[this.map][this.type];
            },
            getRightTeamStatistic() {
                return this.teamB.playerStatistics[this.map][this.type];
            },
        },
        methods: {
            selectMap(map) {
                this.$emit('selectMap', map)
            },
            selectType(type) {
                this.$emit('selectType', type)
            },
        }
    }
</script>

<style scoped>
    .player-statistics {
        margin-top: 4vw;
    }

    .player-statistics .player-statistics-body {
        margin-top: 1vw;
        padding: 1vw 1vw;
        background: rgb(251, 252, 252);
        background: -moz-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: -webkit-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfcfc", endColorstr="#c1c6ca", GradientType=1);
    }

    .dark .player-statistics .player-statistics-body {
        color: white;
        background: rgb(37, 40, 42);
        background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(59, 63, 68, 1) 50%, rgba(37, 40, 42, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(59, 63, 68, 1) 50%, rgba(37, 40, 42, 1) 100%);
        background: linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(59, 63, 68, 1) 50%, rgba(37, 40, 42, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#25282a", GradientType=1);
    }

    .grid-select {
        display: flex;
        justify-content: space-between;
        background: #1E2123;
        color: white;
        padding: .5vw 1.5vw;
        font-size: 1vw;
    }

    .statistics-map-selector span,
    .rgt span {
        margin: 0 .5vw;
        cursor: pointer;
    }

    .statistics-map-selector span.active,
    .rgt span.active {
        color: #FA6C1D;
    }

    .grid-header img.logo {
        width: 2vw;
        margin-right: .5vw;
    }

    .grid-header {
        display: flex;
        justify-content: space-between;
        height: 3.5vw;
    }

    .grid-block {
        width: 50%;
        padding: 1vw;
    }

    .statistics {
        display: flex;
        justify-content: space-between;
    }

    .r {
        font-size: 1vw;
    }

    .grid-header .r,
    .grid-row .r {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .grid-row {
        display: flex;
    }

    .grid-row .r {
        background: white;
        padding: .7vw 0;
        margin: .1vw .1vw;
    }

    .dark .grid-row .r {
        background: #26292c;
    }

    .grid-header .r:nth-child(1),
    .grid-row .r:nth-child(1) {
        width: 250%;
        justify-content: flex-start;
    }

    .grid-row .r:nth-child(1) span {
        margin-left: 1.5vw;
    }
</style>