<template>
    <div class="prize-distribution">
        <div class="prize-distribution-head">
            <lamp-header-mobile title="Результаты"/>
        </div>
        <div class="prize-distribution-body">
            <div class="distribution" v-for="(prize, index) in distributions">
                <div class="number" :class="index <= 2 ? `number_${index + 1}`: 'number_default'"></div>
                <div class="d-flex justify-content-between w-100">
                    <div class="d-flex">
                        <div class="position">
                            <img class="cup" :src="getCupImage(index + 1)" alt="" v-if="index <= 2">
                            <span v-else class="d-flex align-items-center star">
                                <img class="star" src="/images/rating/star.svg">
                                <div>
                                     {{ getPosition(prize.position) }}
                                </div>
                            </span>
                        </div>
                        <div class="team" v-if="prize.team !== null">
                            <div class="flag-wrapper">
                                <img :src="`/uploads/images/` + prize.team.flag.name"
                                     v-if="prize.team"
                                     @error="$event.target.src = '/images/noLogo.png'">
                            </div>
                            {{ prize.team ? prize.team.name : ' - ' }}
                        </div>
                    </div>
                    <div class="prize">
                        {{ prize.prize }}
                    </div>
                </div>
                <img :class="getRatingClass(index + 1)" :src="getRatingImage(index + 1)">
            </div>
        </div>
    </div>
</template>

<script>

import LampHeader from "../helpers/LampHeader";
import LampHeaderMobile from "../helpers/LampHeaderMobile";

export default {
    name: "EventPrizeDistributionMobile",
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
    components: {LampHeaderMobile, LampHeader},
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
        getRatingClass(index){
            let class_name = 'rating_default';

            if (index <= 3) {
                class_name = `rating_${index}`;
            }
            return class_name;
        },
        getCupImage(index) {
            return `/images/rating/cup${index}.svg`;
        }
    }
}
</script>

<style scoped>
.prize-distribution {
    margin-top: 3vw;
}

.dark .prize-distribution {
    color: white;
}

.prize-distribution-body {
    margin-top: 1vw;
}

.prize-distribution-body .distribution {
    height: 15vw;
    margin-bottom: .5vw;
    font-size: 3vw;
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
    font-size: 3vw;
    width: 10vw;
}

.prize-distribution-body .distribution div.prize {
    justify-content: flex-end;
    padding-right: 1vw;
}

.prize-distribution-body .team {
    display: flex;
    align-items: center;
}

.prize-distribution-body .distribution .number {
    height: 100%;
    width: 2vw;
}

.prize-distribution-body .distribution img.rating:nth-child(3) {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

.prize-distribution-body .team .flag-wrapper {
    height: 1.5vw;
    margin: 0 1vw;
    width: 5.3vw;
}

.prize-distribution-body .team .flag-wrapper img {
    height: 3.5vw;
}

.prize-distribution-body .distribution .position img.cup {
    height: 7vw;
    margin: 0 1vw;
    margin-right: 1.8vw;
}

.prize-distribution-body .distribution .position .star {
    margin-right: .5vw;
}

.prize-distribution-body .distribution .position .star img {
    height: 1vw;
    margin: 0 .5vw 0 1vw;
}

.prize-distribution-body .distribution .number.number_1::before {
    content: "";
    color: white;
    display: flex;
    width: 1.7vw;
    height: 100%;
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #fdd051;
    position: absolute;
}

.prize-distribution-body .distribution .number.number_2::before {
    content: "";
    color: white;
    display: flex;
    width: 1.7vw;
    height: 100%;
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #b6b6b6;
    position: absolute;
}

.prize-distribution-body .distribution .number.number_3::before {
    content: "";
    color: white;
    display: flex;
    width: 1.7vw;
    height: 100%;
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #9d7a54;
    position: absolute;
}

.prize-distribution-body .distribution .number.number_default::before {
    content: "";
    color: white;
    display: flex;
    width: 1.7vw;
    height: 100%;
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #2d3135;
    position: absolute;
}

.prize-distribution-body .distribution .number.number_1::after {
    content: "";
    color: white;
    display: flex;
    width: 1.7vw;
    height: 100%;
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #fdd051;
    position: absolute;
}

.prize-distribution-body .distribution .number.number_2::after {
    content: "";
    color: white;
    display: flex;
    width: 1.7vw;
    height: 100%;
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #b6b6b6;
    position: absolute;
}

.prize-distribution-body .distribution .number.number_3::after {
    content: "";
    color: white;
    display: flex;
    width: 1.7vw;
    height: 100%;
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #9d7a54;
    position: absolute;
}
img.rating_1 {
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #fdd051;
    transform: rotate(180deg);
    width: 1.7vw;
    display: flex;
    height: 100%;
}
img.rating_2 {
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #b6b6b6;
    transform: rotate(180deg);
}
img.rating_3 {
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #9d7a54;
    transform: rotate(180deg);
    width: 1.7vw;
    display: flex;
    height: 100%;
}
img.rating_default {
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #2d3135;
    transform: rotate(180deg);
    width: 1.7vw;
    display: flex;
    height: 100%;
}
</style>