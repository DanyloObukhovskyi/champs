<template>
    <div class="rank">
        <label>Ранг</label>
        <div>
            <img v-if="!error" :src="'/images/marketplace/' + getIcon" @error="error = true">
            {{rank}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "TrainerRank",
        props: [
            'game',
            'rank'
        ],
        computed: {
            getIcon() {
                let icon = null;

                if (!isNaN(Number(this.rank)) && this.ranking.hasOwnProperty(this.game)) {
                    const ranking = this.ranking[this.game];

                    for (let rank in ranking) {

                        if (ranking[rank].hasOwnProperty('to')) {
                            if (ranking[rank].from <= Number(this.rank) && ranking[rank].to >= Number(this.rank)) {
                                icon = `${this.game}Rank${rank}.png`;
                            }
                        } else {
                            if (ranking[rank].from <= Number(this.rank)) {
                                icon = `${this.game}Rank${rank}.png`;
                            }
                        }
                    }
                }
                return icon;
            }
        },
        data() {
            return {
                error: false,
                ranking: {
                    cs: {},
                    dota: {},
                    lol: {}
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .rank {
        width: 25%;

        label {
            font-size: 1vw;
            color: #858585;
        }

        div {
            img {
                width: 2vw;
                margin-right: .5vw;
            }
        }
    }
</style>