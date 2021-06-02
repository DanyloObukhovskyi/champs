<template>
    <div class="trainer-time-picker" :class="{disable: user === null}">
        <div class="no-auth-user-block" v-if="user === null">
            <span @click="$store.dispatch('showLogin')">Войдите</span>, чтобы оформить тренировку
        </div>
        <div class="time" v-for="time in times" :class="getClass(time)">
            <div class="title">
                <div>
                    с {{ time.from }}:00
                </div>
                <div>
                    до {{ time.to }}:00
                </div>
            </div>
            <div class="ball" :class="getClass(time)" @click="setTime(time)">
                <i class="fas fa-check" v-if="showCheck(time.status)"></i>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "TrainerTimePicker",
    props: {
        times: {
            default: []
        },
        isTrainerCabinet: {
            default: false
        }
    },
    computed: {
        ...mapGetters([
            'user'
        ])
    },
    methods: {
        showCheck(status) {
            if (this.isTrainerCabinet && status === 1) {
                return true;
            } else {
                return status === 2;
            }
        },
        getClass(time) {
            let status = 'busy';

            if (this.isTrainerCabinet) {
                if (time.status === 0) {
                    status = 'free';
                }
                if (time.status === 1) {
                    status = 'received';
                }
            } else {
                if (time.status === 1) {
                    status = 'free';
                }
                if (time.status === 2) {
                    status = 'received';
                }
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
.no-auth-user-block {
  position: absolute;
  width: 100%;
  height: 100%;
  top: -.5vw;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0e0e0e;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.13);

  span {
    cursor: pointer;
    color: #ff6d1d;
  }
}

.dark {
  .no-auth-user-block {
    color: white;
  }
}

.trainer-time-picker.disable .time{
  opacity: .5;
}

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
      margin-top: .5vw;
      border-radius: 50%;
      max-width: 2.3vw;
      max-height: 2.3vw;
      padding: 14%;
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
        font-size: 1vw;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        i {
          position: absolute;
        }
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