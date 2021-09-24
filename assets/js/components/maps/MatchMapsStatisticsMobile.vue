<template>
    <div class="map-statistics">
        <div class="map-statistics-header">
            <lamp-header-mobile title="Статистика карт"/>
        </div>
        <div class="map-statistics-body map-height">
            <div class="title-row">
                <div class="map-statistics-col">
                    Карты
                </div>
                <div class="map-statistics-col">
                    <img :src="teamA.logo" alt="">
                    {{teamA.title}}
                </div>
                <div class="map-statistics-col">
                    <img :src="teamB.logo" alt="">
                    {{teamB.title}}
                </div>
            </div>
            <div class="maps-row" v-for="map in maps" v-if="map.image !== null">
                <div class="map" :style="getMapBackground(map)">
                    {{map.name}}
                </div>
                <div class="teamA">
                    {{getTeamMapStatistics(map.id, teamA) ? getTeamMapStatistics(map.id, teamA).rating : null}}
                </div>
                <div class="teamB">
                    {{getTeamMapStatistics(map.id, teamB) ? getTeamMapStatistics(map.id, teamB).rating : null}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LampHeaderMobile from "../helpers/LampHeaderMobile";

    export default {
        name: "MatchMapsStatisticsMobile",
        props: [
            'maps',
            'teamA',
            'teamB'
        ],
        components: {
            LampHeaderMobile
        },
        methods: {
            getMapBackground(map) {
                return {
                    background: `url(/uploads/images/${map.image})`,
                    'background-size': 'cover'
                }
            },
            getTeamMapStatistics(mapId, team) {
                return team.mapStatistics.find(mapStatistic => {
                    return mapStatistic.map.id === mapId;
                })
            }
        }
    }
</script>

<style scoped>
    .map-statistics .map-statistics-body {
        margin-top: 1vw;
        padding: 1vw 1vw;
        background: rgb(251, 252, 252);
        background: -moz-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: -webkit-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfcfc", endColorstr="#c1c6ca", GradientType=1);
    }

    .dark .map-statistics .map-statistics-body {
        color: white;
        background: rgb(61,65,70);
        background: -moz-linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
        background: linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146",endColorstr="#25282a",GradientType=1);
    }

    .map-statistics-col {
        width: 100%;
        height: 10vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.3vw;
    }

    .map-statistics-col img {
        width: 7vw;

    }

    .maps-row, .title-row {
        display: flex;
        justify-content: space-between;
    }

    .maps-row div {
        width: 22%;
        height: 7vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5.3vw;
        margin: 1.05vw 20px;
    }

    .maps-row .map {
        background-size: cover;
        color: white;
    }

    .maps-row .teamA,
    .maps-row .teamB {
        background-color: white;
    }

    .dark .maps-row .teamA,
    .dark .maps-row .teamB {
        background: #26292c;
    }

    .map-height{
        height: 90%;
    }
</style>