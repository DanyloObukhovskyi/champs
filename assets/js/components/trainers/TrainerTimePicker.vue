<template>
    <div class="trainer-time-picker">
        <div class="time" v-for="time in times" :class="getClass(time)">
            <div class="title">
                <div>
                    с {{time.from}}:00
                </div>
                <div>
                    до {{time.to}}:00
                </div>
            </div>
            <div class="ball" :class="getClass(time)" @click="setTime(time)">
                <i class="fas fa-check" v-if="time.status === 2"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TrainerTimePicker",
        props: [
            'times'
        ],
        methods: {
            getClass(time) {
                let status = 'busy';

                if (time.status === 1) {
                    status = 'free';
                }
                if (time.status === 2) {
                    status = 'received';
                }
                return status
            },
            setTime(time) {
                this.$emit('setTime', time)
            }
        }
    }
</script>

<style scoped lang="scss">
    .trainer-time-picker {
        display: flex;
        flex-wrap: wrap;
        margin-top: 2.9vw;
        margin-left: -1.7vw;

        .time {
            width: 12.5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 1.5vw;


            .title {
                font-size: .7vw;

                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            .ball {
                width: 2.3vw;
                height: 2.3vw;
                margin-top: .5vw;
                border-radius: 50%;
            }

            &.busy {
                .title {
                    color: #b2b2b2;
                }

                .ball {
                    border: .25vw solid #808387;
                    background-color: #fa1b1b;
                }
            }

            &.free {
                .ball {
                    border: .25vw solid #2faa4b;
                    cursor: pointer;
                }
            }

            &.received {
                .title {
                    color: #ff6d1d;
                }

                .ball {
                    border: .25vw solid #ff6d1d;
                    color: #ff6d1d;
                    text-align: center;
                    padding-top: .2vw;
                    font-size: 1vw;
                    cursor: pointer;
                }
            }
        }
    }

    .dark {
        .trainer-time-picker {
            .time {
                .title {
                    font-size: .7vw;

                    div {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .ball {
                    width: 2.3vw;
                    height: 2.3vw;
                    margin-top: .5vw;
                    border-radius: 50%;
                }

                &.busy {
                    .title {
                        color: #424446;
                    }

                    .ball {
                        border: .25vw solid #424446;
                        background-color: #fa1b1b;
                    }
                }

                &.free {
                    .title {
                        color: #ffffff;
                    }
                }
            }
        }
    }
</style>