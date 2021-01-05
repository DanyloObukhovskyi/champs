<template>
    <div class="games">
        <div class="select-block mt-2" :class="[show ? 'shadow' : '']">
            <div class="select" @click="show = !show">
                <img :src="`/images/${icon}`" class="logo"/>
                <div class="text" v-text="game"></div>
                <img src="/images/arrowBtn.svg" class="arrow"/>
            </div>
            <div v-for="gameItem in games" class="select mt-2"
                 @click="setGame(gameItem.name, gameItem.logo)"
                 v-if="gameItem.name !== game && show"
                 :title="gameItem.title">
                    <img :src="`/images/${gameItem.logo}`" class="logo"/>
                    <div class="text">{{gameItem.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GameSelect",
        props: [
            'game',
            'icon'
        ],
        data(){
            return {
                show: false,
                games: [
                    {
                        name: 'dota',
                        title: 'DOTA',
                        logo: 'dota.png'
                    },
                    {
                        name: 'cs',
                        title: 'CS:GO',
                        logo: 'cs.png'
                    },
                    {
                        name: 'lol',
                        title: 'LOL',
                        logo: 'lol.jpg'
                    }
                ]
            }
        },
        methods: {
            setGame(game, icon){
                this.show = false
                this.$emit('setGame', {game, icon})
            }
        }
    }
</script>

<style scoped>

</style>