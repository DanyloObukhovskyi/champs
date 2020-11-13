<template>
    <div class="player-week" :class="{active: isActive}">
        <div class="player-week-body" @click="choseActive">
            <div class="player-photo">
                <div class="player-photo-grid">
                    <img v-if="player !== null" class="hex-grid__image" :src="player.image" alt="">
                </div>
            </div>
        </div>
        <div class="player-week-footer">
            <div class="player-name">
                {{player !== null ? player.nickname : '???'}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Player",
        props: ['player', 'isActive'],
        methods: {
            choseActive() {
                this.$emit('choseActive', this.player)
            }
        }
    }
</script>

<style scoped>
    .player-week {
        cursor: pointer;
        width: 7vw;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-right: .1vw;
    }

    .player-week .player-week-body {
        background: url(/images/rating/playerWeekBackground.png) no-repeat center;
        height: 9.3vw;
        background-size: 100%;
        width: 7vw;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .player-week.active .player-week-body {
        background: url(/images/rating/playerBackgroundOrange.png) no-repeat center;
        background-size: contain;
    }

    .player-week.active .player-name {
        color: #f24f13;
    }

    .player-week .player-week-body .player-week-rating i {
        color: rgb(215, 185, 98);
    }

    .player-week .player-week-body .player-photo {
        width: 7vw;
        justify-content: center;
        background: url(/images/rating/player.png) no-repeat center;
        background-size: 100%;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }

    .player-week .player-week-body .player-photo img {
        height: 7vw;
        display: block;
        object-fit: cover;
    }

    .player-photo-grid {
        position: relative;
        height: 100%;
        clip-path: polygon(0% 0%, 100% 15%, 100% 83%, 50% 100%, 0% 83%, 0% 25%);
        display: flex;
        align-items: flex-end;
    }

    .player-week-footer .player-name {
        font-size: 1.2vw;
        text-align: center;
    }

    .dark .player-week-footer .player-name {
        color: white;
    }
</style>