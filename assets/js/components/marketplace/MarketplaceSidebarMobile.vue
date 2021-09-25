<template>
    <div class="marketplace-sidebar">
        <div class="game"
             @click="setGame(item.code)"
             :class="{active: game === item.code}"
             v-if="item.isMarketplace"
             v-for="item in games">
            <img :src="'/uploads/games/' + item.logo">
        </div>
        <div v-if="game === 'Counter-Strike: Global Offensive'" v-html="csScript" />
        <div v-if="game === 'Dota 2'" v-html="dotaScript" />
        <div v-if="game === 'Valorant'" v-html="valorantScript" />
    </div>
</template>

<script>
    export default {
        name: "MarketplaceSidebarMobile",
        props: [
            'game',
            'games'
        ],
        watch:{
            game: function (val) {
                if(val === 'Counter-Strike: Global Offensive'){
                    this.csGame()
                } else if(val === 'Dota 2'){
                    this.dotaGame()
                } else if(val === 'Valorant'){
                    this.valorantGame()
                }
            }
        },
        mounted() {
            document.title = 'Поднимем навык игры cs go - индивидуальные и групповые тренировки'
        },
        methods: {
            setGame(game) {
                this.$emit('setGame', game)
                document.title = 'Поднимем навык игры '+game+' - индивидуальные и групповые тренировки'
            },
            csGame(){
                let tag = document.createElement("script");
                tag.setAttribute("src", 'https://champs.pro/uploads/cs.js');
                document.head.appendChild(tag);
            },
            dotaGame(){
                let tag = document.createElement("script");
                tag.setAttribute("src", 'https://champs.pro/uploads/dota.js');
                document.head.appendChild(tag);
            },
            valorantGame(){
                let tag = document.createElement("script");
                tag.setAttribute("src", 'https://champs.pro/uploads/valorant.js');
                document.head.appendChild(tag);
            }
        },
        created() {

            this.csScript = '<noscript><img src="https://vk.com/rtrg?p=VK-RTRG-991376-3qok7" style="position:fixed; left:-999px;" alt=""/></noscript>';
            this.dotaScript = '<noscript><img src="https://vk.com/rtrg?p=VK-RTRG-986027-9vxub" style="position:fixed; left:-999px;" alt=""/></noscript>';
            this.valorantScript = '<noscript><img src="https://vk.com/rtrg?p=VK-RTRG-986028-8RL3d" style="position:fixed; left:-999px;" alt=""/></noscript>';
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../css/animations.css';

    .marketplace-sidebar {
        height: 100%;
        background-color: white;
        transition: background-color .5s ease-in-out;
        display: flex;

        .game {
            cursor: pointer;
            padding: 1.5vw 2vw;
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
            border-bottom: 1.1vw solid #ff6d1d;
            border-top: 1.1vw solid #ff6d1d;
        }

        .game img {
            width: 10vw;
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