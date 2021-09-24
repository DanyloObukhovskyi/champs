<template>
    <div class="map-pool">
        <div class="map-pool-header">
            <lamp-header-mobile title="Карты"/>
        </div>
        <div class="map-pool-body map-height">
            <div v-for="(pick, index) in pickAndBans" class="pick-row">
                {{index + 1}}. {{pick.team.name}}
                <strong :class="types[pick.operation].class">
                    {{types[pick.operation].title}}
                </strong>
                {{pick.map}}
            </div>
        </div>
    </div>
</template>

<script>
    import LampHeaderMobile from "../helpers/LampHeaderMobile";

    export default {
        name: "MatchMapsPickAndBanMobile",
        props: [
            'match',
            'pickAndBans'
        ],
        components: {
            LampHeaderMobile
        },
        data() {
            return {
                types: {
                    1: {
                        title: 'забанила',
                        class: 'text-danger'
                    },
                    2: {
                        title: 'пикнула',
                        class: 'text-success'
                    },
                    3: {
                        title: 'оставшаяся карта',
                        class: ''
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .map-pool .map-pool-body {
        margin-top: 1vw;
        padding: 1vw 0;
        background: rgb(251, 252, 252);
        background: -moz-linear-gradient(90deg, rgba(193, 198, 202, 1) 0%, rgba(251, 252, 252, 1) 49%);
        background: -webkit-linear-gradient(90deg, rgba(193, 198, 202, 1) 0%, rgba(251, 252, 252, 1) 49%);
        background: linear-gradient(90deg, rgba(193, 198, 202, 1) 0%, rgba(251, 252, 252, 1) 49%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfcfc", endColorstr="#c1c6ca", GradientType=1);
    }

    .dark .map-pool .map-pool-body {
        color: white;
        background: rgb(61, 65, 70);
        background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
        background: linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);
    }

    .map-pool .map-pool-body .pick-row {
        padding: .9vw;
        font-size: 6.3vw;
    }
    .map-height{
        height: 90%;
    }
</style>