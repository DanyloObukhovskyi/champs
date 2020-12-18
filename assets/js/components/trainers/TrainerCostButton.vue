<template>
    <div class="price-row" @click="toggleDescription" :class="{active: active}">
        <div class="background">
            <div>
                <div class="type">
                    {{label}}
                </div>
                <div class="price">
                    {{cost}} RUB
                </div>
            </div>
            <i class="fas fa-sort-down" v-if="!show"></i>
            <i class="fas fa-sort-up" v-else></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TrainerCostButton",
        props: ['type', 'cost', 'label', 'show', 'active'],
        methods: {
            toggleDescription() {
                this.$emit('toggleDescription', {
                    show: !this.show,
                    type: this.type
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .price-row {
        cursor: pointer;
        width: 30%;
        background: url(/images/marketplace/priceBackground.png);
        background-position: center;
        background-size: cover;
        height: 4.1vw;
        display: flex;
        transition: all .5s ease-in-out;

        &:hover {
            transition: all .5s ease-in-out;
            background: url(/images/marketplace/priceBackgroundHover.png);
            background-position: center;
            background-size: cover;
            color: white;

            .background {
                i {
                    color: white;
                    font-size: 1vw;
                    cursor: pointer;
                }
            }
        }

        .background {
            padding: 0 2vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-position: center;
            width: 100%;

            .type {
                font-size: 1vw;
                font-weight: 600;
            }

            .price {
                font-size: 1.2vw;
                color: #28a745;
                font-weight: 700;
            }

            i {
                color: #ff6d1d;
                font-size: 1vw;
                cursor: pointer;
            }
        }
    }

    .dark {
        .price-row {
            width: 30%;
            padding: .1vw .11vw;
            background: url(/images/marketplace/darkPriceBackground.png);
            background-position: center;
            background-size: cover;
            height: 4.1vw;

            &:hover {
                transition: all .5s ease-in-out;
                background: url(/images/marketplace/priceBackgroundHover.png);
                background-position: center;
                background-size: cover;
                color: white;
            }
        }
    }
</style>