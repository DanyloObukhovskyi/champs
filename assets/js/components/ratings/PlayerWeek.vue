<template>
    <div class="player-week" v-if="player !== null">
        <div class="player-week-header">
            Игрок недели
        </div>
        <div class="player-week-body">
            <div class="player-week-rating">
                <i class="fas fa-trophy"></i>
                {{player.rating}}
            </div>
            <div class="player-photo">
                <div class="player-photo-grid">
                    <img class="hex-grid__image" :src="'/uploads/images/' + player.image" alt="">
                </div>
            </div>
        </div>
        <div class="player-week-footer">
            <div class="player-nick-name">
                <img :src="player.flag" class="flag">
                {{player.nickname}}
            </div>
            <div class="player-name">
                {{player.fullname}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PlayerWeek",
        data() {
            return {
                player: null
            }
        },
        methods: {
            getPlayerWeek() {
                axios.post('/ru/week/player')
                    .then(({data}) => {
                        this.player = data;
                    })
            }
        },
        mounted() {
            this.getPlayerWeek()
        }
    }
</script>

<style scoped>
    .player-week {
        display: flex;
        flex-wrap: wrap;
        margin-top: 7vw;
        flex-direction: column;
        align-items: center;
    }

    .player-week .player-week-header {
        text-align: center;
        font-size: 1.4vw;
        color: #1e2123;
        margin-bottom: .3vw;
    }

    .dark .player-week .player-week-header {
        color: white;
    }

    .player-week .player-week-body {
        height: 16vw;
        background: url(/images/rating/playerWeekBackground.png) no-repeat center;
        background-size: contain;
        width: 14vw;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .player-week .player-week-body .player-week-rating {
        text-align: center;
        color: white;
        padding-top: 1vw;
        font-size: 1vw;
    }

    .player-week .player-week-body .player-week-rating i {
        color: rgb(215, 185, 98);
    }

    .player-week .player-week-body .player-photo {
        width: 12vw;
        display: flex;
        justify-content: center;
    }

    .player-week .player-week-body .player-photo img {
        height: 13vw;
        display: block;
        width: 100%;
        object-fit: cover;
    }

    .player-photo {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }

    .player-photo-grid {
        osition: relative;
        height: 100%;
        clip-path: polygon(50% 0%, 100% 25%, 100% 80%, 50% 100%, 0% 80%, 0% 25%);
        display: flex;
        align-items: end;
    }

    .player-week-footer .player-nick-name {
        font-size: 1vw;
        color: #5c6b79;
        text-align: center;
    }

    .player-week-footer .player-nick-name img.flag {
        width: 1.5vw;

    }

    .player-week-footer .player-name {
        font-size: 1.2vw;
        text-align: center;
    }

    .dark .player-week-footer .player-name {
        color: white;
    }
</style>