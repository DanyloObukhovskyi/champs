<template>
    <div class="players-rating" :class="className">
        <div class="players-rating-header">
            <lamp-header title="Рейтинг игроков" link="/ru/statistics" link-description="Полный список"/>
        </div>
        <div class="d-flex justify-content-center align-items-center p-5" v-if="load">
            <small-loader/>
        </div>
        <div class="players-rating-body" v-else>
            <div class="players-rating-row" v-for="(player, index) in players">
                <div class="number d-flex align-items-center"
                     :class="index <= 2 ? `number_${index + 1}`: 'number_default'">
                    <span>
                         {{ index + 1 }}
                    </span>
                </div>
                <div class="player w-100 d-flex">
                    <div class="photo d-flex align-items-center">
                        <div class="player-photo">
                            <img :class="{'photo': player.image !== null}"
                                 :src="player.image !== null ? '/uploads/images/' + player.image: '/images/noLogo.png'"
                                 @error="player.image = null">
                        </div>
                    </div>
                    <div class="data">
                        <div>
                            <div class="nick-name">
                                <img :src="player.flag">
                                {{ player.nickname }}
                            </div>
                            <div class="name">
                                {{ player.fullname }}
                            </div>
                        </div>
                    </div>
                    <div class="team">
                        <img :src="player.team.image">
                        {{ player.team.title }}
                    </div>
                    <div class="rating">
                        <i class="fas"
                           :class="getRatingColor(index + 1).icon"
                           :style="{color: getRatingColor(index + 1).color}">
                        </i>
                        {{ player.rating }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LampHeader from "../helpers/LampHeader";
import StatisticService from "../../services/StatisticService";
import SmallLoader from "../helpers/SmallLoader";

export default {
    name: "PlayersRating",
    components: {
        LampHeader,
        SmallLoader
    },
    data() {
        return {
            players: [],
            load: true
        }
    },
    props: ['className'],
    methods: {
        getRatingPlayers() {
            StatisticService.getPlayersRating()
                .then(players => {
                    this.players = players;
                    this.load = false;
                })
        },
        getRatingColor(int) {
            const style = {
                color: '#b7b9bb',
                icon: 'fa-star'
            };
            if (int === 1) {
                style.color = '#d7b962';
                style.icon = 'fa-trophy';

            } else if (int === 2) {
                style.color = '#aaabac';
                style.icon = 'fa-trophy';

            } else if (int === 3) {
                style.color = '#98836b';
                style.icon = 'fa-trophy';

            }
            return style;
        }
    },
    mounted() {
        this.getRatingPlayers();
    }
}
</script>

<style scoped>
@import '../../../css/animations.css';

.dark .players-rating-header .lamp-header {
    background: rgb(65, 69, 74);
    background: linear-gradient(90deg, rgba(65, 69, 74, 0.5816527294511555) 18%, rgba(55, 59, 64, 0.5536415249693627) 57%);
}

.players-rating {
    padding-right: .2vw;
}

.players-rating .players-rating-body {
    margin-top: .8vw;
    -webkit-animation: animation-translate-left 1500ms linear both;
    animation: animation-translate-left 1500ms linear both;
}

.players-rating .players-rating-body .players-rating-row {
    margin-bottom: .3vw;
    height: 6vw;
    display: flex;
    justify-content: center;
    background: rgb(197, 200, 204);
    moz-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    -webkit-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out;
    background: -moz-linear-gradient(90deg, rgba(197, 200, 204, 1) 0%, rgba(255, 255, 255, 1) 52%);
    background: -webkit-linear-gradient(90deg, rgba(197, 200, 204, 1) 0%, rgba(255, 255, 255, 1) 52%);
    background: linear-gradient(90deg, rgba(197, 200, 204, 1) 0%, rgba(255, 255, 255, 1) 52%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c5c8cc", endColorstr="#ffffff", GradientType=1);
}

.players-rating .players-rating-body .players-rating-row:hover {
    margin-right: -.2vw;
    margin-left: -.2vw;
}

.dark .players-rating .players-rating-body .players-rating-row {
    background: rgb(60, 64, 69);
    background: -moz-linear-gradient(90deg, rgba(60, 64, 69, 1) 0%, rgba(37, 40, 42, 1) 57%);
    background: -webkit-linear-gradient(90deg, rgba(60, 64, 69, 1) 0%, rgba(37, 40, 42, 1) 57%);
    background: linear-gradient(90deg, rgba(60, 64, 69, 1) 0%, rgba(37, 40, 42, 1) 57%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3c4045", endColorstr="#25282a", GradientType=1);
}

.players-rating .players-rating-body .players-rating-row .number {
    display: flex;
    width: 1.7vw;
}

.players-rating .players-rating-body .players-rating-row .number span {
    font-size: 1vw;
    color: white;
    z-index: 1;
    display: flex;
    width: 1.7vw;
    justify-content: center;
    align-items: center;
}

.players-rating .players-rating-body .players-rating-row .number.number_1::before {
    content: "";
    color: white;
    display: flex;
    width: 1.7vw;
    height: 100%;
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #fdd051;
    position: absolute;
}

.players-rating .players-rating-body .players-rating-row .number.number_2::before {
    content: "";
    color: white;
    display: flex;
    width: 1.7vw;
    height: 100%;
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #b6b6b6;
    position: absolute;
}

.players-rating .players-rating-body .players-rating-row .number.number_3::before {
    content: "";
    color: white;
    display: flex;
    width: 1.7vw;
    height: 100%;
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #9d7a54;
    position: absolute;
}

.players-rating .players-rating-body .players-rating-row .number.number_default::before {
    content: "";
    color: white;
    display: flex;
    width: 1.7vw;
    height: 100%;
    clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
    background-color: #2d3135;
    position: absolute;
}

.players-rating .players-rating-body .players-rating-row .photo .player-photo {
    width: 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.players-rating .players-rating-body .players-rating-row .photo .player-photo img.photo {
    width: 4vw;
}

.players-rating .players-rating-body .players-rating-row .data {
    width: 13vw;
    display: flex;
    align-items: center;
}

.players-rating .players-rating-body .players-rating-row .data .nick-name {
    color: #5c6b79;
    font-size: 1vw;
}

.players-rating .players-rating-body .players-rating-row .data .nick-name img {
    width: 2vw;
}

.players-rating .players-rating-body .players-rating-row .data .name {
    font-size: 1.2vw;
    color: black;
}

.dark .players-rating .players-rating-body .players-rating-row .data .name {
    color: white;
}

.players-rating .players-rating-body .players-rating-row .team {
    display: flex;
    align-items: center;
    font-size: 1vw;
    color: #5c6b79;
}

.players-rating .players-rating-body .players-rating-row .team img {
    height: 1.5vw;
    margin-right: .3vw;
}

.players-rating .players-rating-body .players-rating-row .rating {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 1vw;
    font-size: 1vw;
}

.dark .players-rating .players-rating-body .players-rating-row .rating {
    color: white;
}

.players-rating .players-rating-body .players-rating-row .rating i {
    margin-right: .5vw;
}
</style>