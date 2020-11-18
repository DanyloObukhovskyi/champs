<template>
    <div class="prize-distribution">
        <div class="prize-distribution-head">
            <lamp-header title="Призовые места"/>
        </div>
        <div class="prize-distribution-body">
            <div class="distribution">
                <div class="position">
                    №
                </div>
                <div class="place">
                    Место
                </div>
                <div class="prize">
                    Приз
                </div>
                <div class="team">
                    Команда
                </div>
            </div>
            <div class="distribution" v-for="(prize, index) in distributions">
                <div class="position">
                    {{index + 1}}
                </div>
                <div class="place">
                    {{prize.position}}
                </div>
                <div class="prize">
                    {{prize.prize}}
                </div>
                <div class="team">
                    <img :src="`/uploads/images/` + prize.team.logo"
                         v-if="prize.team"
                         @error="$event.target.src = '/images/noLogo.png'">
                    {{prize.team ? prize.team.name : ' - '}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import LampHeader from "../helpers/LampHeader";

    export default {
        name: "EventPrizeDistribution",
        props: [
            'prizeDistributions'
        ],
        components: {LampHeader},
        computed: {
            distributions() {
                const distributions = [];
                for (let position in this.prizeDistributions) {
                    distributions.push(this.prizeDistributions[position])
                }
                return distributions;
            }
        }
    }
</script>

<style scoped>
    .prize-distribution-body {
        margin-top: 1vw;
    }

    .prize-distribution-body .distribution {
        display: flex;
        background: rgb(251, 252, 252);
        background: -moz-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: -webkit-radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        background: radial-gradient(circle, rgba(251, 252, 252, 1) 17%, rgba(193, 198, 202, 1) 81%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfcfc", endColorstr="#c1c6ca", GradientType=1);
    }

    .dark .prize-distribution-body .distribution {
        background: rgb(37, 40, 42);
        background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        background: linear-gradient(90deg, rgba(37, 40, 42, 1) 15%, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 85%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#25282a", GradientType=1);
    }

    .prize-distribution-body .distribution div {
        color: #5d5d5d;
        width: 25%;
        padding: .5vw 1vw;
        display: flex;
        align-items: center;
        border: .1vw solid white;
        font-size: 1vw;
    }

    .prize-distribution-body .distribution:nth-child(1) div{
        color: black;
        font-weight: 600;
    }

    .dark .prize-distribution-body .distribution div {
        color: #5c6b79;
        width: 25%;
        padding: .5vw 1vw;
        display: flex;
        align-items: center;
        border: .1vw solid #35393e;
    }

    .dark .prize-distribution-body .distribution:nth-child(1) div{
        color: white;
    }

    .prize-distribution-body .team {
        display: flex;
        align-items: center;
    }

    .prize-distribution-body .team img {
        height: 1.5vw;
        margin-right: .5vw;
    }
</style>