<template>
    <div class="players-rating">
        <div class="players-rating-header">
            <lamp-header title="Рейтинг команд" link="/ru/" link-description="Полный список"/>
        </div>
        <div class="players-rating-body">
            <div class="players-rating-row" v-for="(team, index) in teams">
                <div class="number d-flex align-items-center" :style="getNumberStyle(index + 1)">
                    {{index + 1}}
                </div>
                <div class="player w-100 d-flex">
                    <div class="team">
                        <img :src="team.image">
                        {{team.title}}
                    </div>
                    <div class="rating">
                        <i class="fas"
                           :class="getRatingColor(index + 1).icon"
                           :style="{color: getRatingColor(index + 1).color}">
                        </i>
                        {{team.rating}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";

    export default {
        name: "TeamsRating",
        components: {
            'lamp-header': LampHeader
        },
        data() {
            return {
                teams: [],
            }
        },
        methods: {
            getRatingTeams() {
                axios.post('/ru/main/rating/teams')
                    .then(({data}) => {
                        this.teams = data;
                    })
            },
            getNumberStyle(int) {
                if (int <= 3) {
                    return {
                        background: `url(/images/rating/rating${int}.svg) round 100%`
                    }
                } else {
                    return null;
                }
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
            this.getRatingTeams();
        }
    }
</script>

<style scoped>
    .dark .players-rating-header .lamp-header {
        background: rgb(65, 69, 74);
        background: linear-gradient(90deg, rgba(65, 69, 74, 0.5816527294511555) 18%, rgba(55, 59, 64, 0.5536415249693627) 57%);
    }

    .players-rating .players-rating-body {
        margin-top: .8vw;
    }

    .players-rating .players-rating-body .players-rating-row {
        margin-bottom: .3vw;
        height: 6vw;
        display: flex;
        justify-content: center;
        background: rgb(197, 200, 204);
        background: -moz-linear-gradient(90deg, rgba(197, 200, 204, 1) 0%, rgba(255, 255, 255, 1) 52%);
        background: -webkit-linear-gradient(90deg, rgba(197, 200, 204, 1) 0%, rgba(255, 255, 255, 1) 52%);
        background: linear-gradient(90deg, rgba(197, 200, 204, 1) 0%, rgba(255, 255, 255, 1) 52%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c5c8cc", endColorstr="#ffffff", GradientType=1);
    }

    .dark .players-rating .players-rating-body .players-rating-row {
        background: rgb(60, 64, 69);
        background: -moz-linear-gradient(90deg, rgba(60, 64, 69, 1) 0%, rgba(37, 40, 42, 1) 57%);
        background: -webkit-linear-gradient(90deg, rgba(60, 64, 69, 1) 0%, rgba(37, 40, 42, 1) 57%);
        background: linear-gradient(90deg, rgba(60, 64, 69, 1) 0%, rgba(37, 40, 42, 1) 57%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3c4045", endColorstr="#25282a", GradientType=1);
    }

    .players-rating .players-rating-body .players-rating-row .number {
        color: white;
        display: flex;
        background: url('/images/rating/ratingDefault.svg') round 100%;
        justify-content: center;
        width: 1.7vw;
    }

    .players-rating .players-rating-body .players-rating-row .photo img {
        width: 4vw;
    }

    .players-rating .players-rating-body .players-rating-row .data .nick-name img {
        width: 2vw;
    }

    .players-rating .players-rating-body .players-rating-row .team {
        display: flex;
        align-items: center;
        font-size: 1vw;
        color: #5c6b79;
        margin-left: 1vw;
    }

    .dark .players-rating .players-rating-body .players-rating-row .team {
        color: white;
    }

    .players-rating .players-rating-body .players-rating-row .team img {
        height: 2.5vw;
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