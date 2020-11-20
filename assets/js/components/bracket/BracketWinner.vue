<template>
    <div class="player-winner" :style="style">
        <div class="winner-label">
            Winner
        </div>
        <slot name="winner" :player="winner"/>
    </div>
</template>

<script>
    export default {
        name: "BracketWinner",
        props: ['winner'],
        data() {
            return {
                style: null
            }
        },
        mounted() {
            const grandFinal = document.querySelector('.vtb-item-parent .vtb-item-players');

            let marginTop = 0;
            if (grandFinal !== null) {
                marginTop = grandFinal.offsetTop + (grandFinal.offsetHeight / 4);
            }
            this.style = {'margin-top': `${marginTop}px`}
        }
    }
</script>

<style scoped>
    .player-winner {
        height: 33px;
        display: flex;
        width: 200px;
        margin-left: 45px;
        margin-right: 3vw;
    }

    .player-winner::after {
        content: "";
        position: absolute;
        background-color: #ff6d1d;
        left: -45px;
        height: 3px;
        width: 45px;
        top: 50%;
    }

    .winner-label {
        color: #849AAB;
        font-weight: 700;
        position: absolute;
        width: 200px;
        padding-top: 5px;
    }
</style>