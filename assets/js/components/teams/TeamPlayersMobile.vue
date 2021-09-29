<template>
    <div class="team-players col-12">
        <div class="team">
            <div class="logo" @click="show = !show">
                <img :src="team.logo" @error="$event.target.src = '/images/noLogo.png'">
                {{team.name}}
            </div>
        </div>
        <div class="players" v-show="show">
            <div class="player" v-for="player in team.players">
                <img :src="'/uploads/images/' + player.photo" @error="$event.target.src = '/images/noLogo.png'">
                {{player.nick}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamPlayersMobile",
        props: ['team', 'show'],
        data() {
            return {
                //show: false
            }
        }
    }
</script>

<style scoped>
    @import "../../../css/animations.css";

    .team {
        cursor: pointer;
        font-size: 5vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5vw 1vw;
        background: linear-gradient(270deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
    }

    .dark .team {
        color: white;
        background: rgb(61, 65, 70);
        moz-transition: all 1s ease-in-out;
        -o-transition: all 1s ease-in-out;
        -webkit-transition: all 1s ease-in-out;
        transition: all .4s ease-in-out;
        background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        background: linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 43%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);
    }

    .team .logo {
        align-items: center;
        display: flex;
    }

    .team .logo img,
    .players img {
        height: 10vw;
        margin-right: 5.5vw;
    }

    .team .toggle i {
        cursor: pointer;
    }

    .players .player {
        font-size: 4vw;
        background: white;
        padding: .2vw 1vw;
    }

    .dark .players .player {
        color: white;
        background: rgb(66, 70, 74);
        background: -moz-linear-gradient(90deg, rgba(66, 70, 74, 1) 15%, rgba(55, 59, 64, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(66, 70, 74, 1) 15%, rgba(55, 59, 64, 1) 100%);
        background: linear-gradient(90deg, rgba(66, 70, 74, 1) 15%, rgba(55, 59, 64, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#42464a", endColorstr="#373b40", GradientType=1);
    }

    .team-players {
        margin-bottom: 1vw;
    }
</style>