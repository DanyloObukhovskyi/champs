<template>
    <div class="marketplace-sidebar">
        <div class="game"
             @click="setGame(item.code)"
             :class="{active: game === item.code}"
             v-if="item.isMarketplace"
             v-for="item in games">
            <img :src="'/uploads/games/' + item.logo">
            {{item.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "MarketplaceSidebar",
        props: [
            'game',
            'games'
        ],
        mounted() {
            document.title = 'Поднимем навык игры cs go - индивидуальные и групповые тренировки'
        },
        methods: {
            setGame(game) {
                this.$emit('setGame', game)
                document.title = 'Поднимем навык игры '+game+' - индивидуальные и групповые тренировки'
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../css/animations.css';

    .marketplace-sidebar {
        height: 100%;
        background-color: white;
        transition: background-color .5s ease-in-out;

        .game {
            cursor: pointer;
            padding: .5vw 1vw;
            border-bottom: .1vw solid #f8f8f8;
            border-top: .1vw solid #f8f8f8;
            font-weight: 700;
            transition: .5s ease-in-out;
            display: flex;
            align-items: center;
        }

        .game.active{
            color: white;
            background-color: #ff6d1d;
            border-bottom: .1vw solid #ff6d1d;
            border-top: .1vw solid #ff6d1d;
        }

        .game img {
            width: 3vw;
            margin-right: .8vw;
        }
    }

    .marketplace-sidebar:first-child {
        .game {
            border-top: none !important;
        }
    }

    .dark {
        .marketplace-sidebar{
            background-color: #1e2123;
            color: white;

            .game {
                border-bottom: .1vw solid #35393e;
                border-top: .1vw solid #35393e;
            }
        }
    }
</style>