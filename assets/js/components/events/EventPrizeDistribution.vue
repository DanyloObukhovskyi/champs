<template>
    <div class="prize-distribution">
        <div class="prize-distribution-head">
            <lamp-header title="Результаты"/>
        </div>
        <div class="prize-distribution-body">
            <div class="distribution" v-for="(prize, index) in distributions">
                <img class="rating" :src="getRatingImage(index + 1)">
                <div class="d-flex justify-content-between w-100">
                    <div class="d-flex">
                        <div class="position">
                            <img class="cup" :src="getCupImage(index + 1)" alt="" v-if="index <= 2">
                            <span v-else class="d-flex align-items-center star">
                                <img class="star" src="/images/rating/star.svg">
                                {{getPosition(prize.position)}}
                            </span>
                        </div>
                        <div class="team" v-if="prize.team !== null">
                            <img :src="`/uploads/images/` + prize.team.logo"
                                 v-if="prize.team"
                                 @error="$event.target.src = '/images/noLogo.png'">
                            {{prize.team ? prize.team.name : ' - '}}
                        </div>
                    </div>
                    <div class="prize">
                        {{prize.prize}}
                    </div>
                </div>
                <img class="rating" :src="getRatingImage(index + 1)">
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
        data() {
            return {
                replaceValues: [
                    'st',

                ]
            }
        },
        components: {LampHeader},
        computed: {
            distributions() {
                const distributions = [];
                for (let position in this.prizeDistributions) {
                    distributions.push(this.prizeDistributions[position])
                }
                return distributions;
            }
        },
        methods: {
            getPosition(position) {
                position = position.replace('st', '')
                position = position.replace('nd', '')
                position = position.replace('rd', '')
                position = position.replace('th', '')

                return position;
            },
            getRatingImage(index) {
                let image = '/images/rating/ratingDefault.svg';

                if (index <= 3) {
                    image = `/images/rating/rating${index}.svg`;
                }
                return image;
            },
            getCupImage(index){
                return `/images/rating/cup${index}.svg`;
            }
        }
    }
</script>

<style scoped>
    .prize-distribution{
        margin-top: 3vw;
    }

    .dark .prize-distribution{
       color: white;
    }
    .prize-distribution-body {
        margin-top: 1vw;
    }

    .prize-distribution-body .distribution {
        height: 6vw;
        margin-bottom: .5vw;
        font-size: 1vw;
        display: flex;
        background: rgb(251, 252, 252);
        background: rgb(251, 252, 252);
        background: -moz-linear-gradient(90deg, rgba(251, 252, 252, 1) 0%, rgba(193, 198, 202, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(251, 252, 252, 1) 0%, rgba(193, 198, 202, 1) 100%);
        background: linear-gradient(90deg, rgba(251, 252, 252, 1) 0%, rgba(193, 198, 202, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfcfc", endColorstr="#c1c6ca", GradientType=1);
    }

    .dark .prize-distribution-body .distribution {
        background: rgb(37, 40, 42);
        background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
        background: linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#25282a", GradientType=1);
    }

    .prize-distribution-body .distribution div {
        display: flex;
        align-items: center;
        font-size: 1vw;
        width: 25%;
    }

    .prize-distribution-body .distribution div.prize {
        justify-content: flex-end;
        padding-right: 1vw;
    }

    .prize-distribution-body .team {
        display: flex;
        align-items: center;
    }

    .prize-distribution-body .distribution img.rating {
        height: 100%;
    }

    .prize-distribution-body .distribution img.rating:nth-child(3) {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }

    .prize-distribution-body .team img {
        height: 2.5vw;
        margin: 0 1vw;
    }

    .prize-distribution-body .distribution .position img.cup{
        height: 3vw;
        margin: 0 1vw;
    }

    .prize-distribution-body .distribution .position .star{
        margin-right: .5vw;
    }

    .prize-distribution-body .distribution .position .star img{
        height: 1vw;
        margin: 0 .5vw 0 1vw;
    }
</style>