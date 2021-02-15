<template>
    <div class="second-banner">
        <div class="left">
            <div class="title">
                <div>
                    <span>Выбери </span> своего Pro тренера
                </div>
                <div>
                    Начни <span>свой путь </span> к PRO сцене!
                </div>
            </div>
            <div class="go">
                <div class="go-wrapper">
                    <a href="/marketplace">
                        GO
                    </a>
                </div>
            </div>
            <div class="video-wrapper dota"
                 v-if="user !== null && user.game !== null && user.game.code === 'dota'">
                <div class="video">
                    <img src="/images/cabinet/videoDota.png">
                </div>
            </div>
            <div class="video-wrapper" v-else>
                <div class="video">
                    <img src="/images/cabinet/videoCs.png">
                    <div class="faceit">
                        <img src="/images/cabinet/faceit.png">
                    </div>
                </div>
                <div class="rating">
                    <img src="/images/cabinet/rating.png">
                </div>
            </div>
            <div class="background-solder">
                <img src="/images/cabinet/secondBannerDota.png"
                     v-if="user !== null && user.game !== null && user.game.code === 'dota'">
                <img src="/images/cabinet/secondBannerCs.png" v-else>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <div>
                    Надоело <span>фейлить?</span>
                </div>
                <div>
                    Закажи анализ реплея!
                </div>
            </div>
            <a :href="marketplacePage" class="video">
                <img src="/images/cabinet/analyticBannerDota.png"
                     v-if="user !== null && user.game !== null && user.game.code === 'dota'">
                <img src="/images/cabinet/analyticBannerCs.png" v-else>
                <img class="play" src="/images/cabinet/playIcon.png">
            </a>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import MarketplaceService from "../../../../../services/MarketplaceService";

export default {
    name: "CabinetSecondBanner",
    computed: {
        ...mapGetters([
            'user'
        ]),
        marketplacePage() {
            return MarketplaceService.marketplacePage();
        }
    },
}
</script>

<style scoped lang="scss">
@import '../../../../../../css/animations.css';

@-webkit-keyframes pulse {
  0% {
    font-size: 1.8vw;
    -webkit-box-shadow: 0 0 0 0 rgba(255, 102, 51, 0.1);
  }
  70% {
    font-size: 1.5vw;
    -webkit-box-shadow: 0 0 0 10px rgba(255, 102, 51, 0);
  }
  100% {
    font-size: 1.5vw;
    -webkit-box-shadow: 0 0 0 0 rgba(255, 102, 51, 0);
  }
}

@keyframes pulse {
  0% {
    font-size: 1.8vw;
    -moz-box-shadow: 0 0 0 0 rgba(255, 102, 51, 0.4);
    box-shadow: 0 0 0 0 rgba(255, 102, 51, 0.4);
  }
  70% {
    font-size: 1.5vw;
    -moz-box-shadow: 0 0 0 10px rgba(255, 102, 51, 0);
    box-shadow: 0 0 0 10px rgba(255, 102, 51, 0);
  }
  100% {
    font-size: 1.5vw;
    -moz-box-shadow: 0 0 0 0 rgba(255, 102, 51, 0);
    box-shadow: 0 0 0 0 rgba(255, 102, 51, 0);
  }
}

@-webkit-keyframes dark-pulse {
  0% {
    font-size: 1.8vw;
    -webkit-box-shadow: 0 0 0 0 rgba(255, 102, 51, 0.1);
  }
  70% {
    font-size: 1.5vw;
    -webkit-box-shadow: 0 0 0 10px rgba(255, 102, 51, 0);
  }
  100% {
    font-size: 1.5vw;
    -webkit-box-shadow: 0 0 0 0 rgba(255, 102, 51, 0);
  }
}

@keyframes dark-pulse {
  0% {
    font-size: 1.8vw;
    -moz-box-shadow: 0 0 0 0 rgba(109, 113, 115, .8);
    box-shadow: 0 0 0 0 rgba(109, 113, 115, .8);
  }
  70% {
    font-size: 1.5vw;
    -moz-box-shadow: 0 0 0 10px rgba(109, 113, 115, 0);
    box-shadow: 0 0 0 10px rgba(109, 113, 115, 0);
  }
  100% {
    font-size: 1.5vw;
    -moz-box-shadow: 0 0 0 0 rgba(109, 113, 115, 0);
    box-shadow: 0 0 0 0 rgba(109, 113, 115, 0);
  }
}


@keyframes analytic-pulse {
  0% {
    width: 3.2vw;
  }
  70% {
    width: 3vw;
  }
  100% {
    width: 3vw;
  }
}


.second-banner {
  margin-top: .5vw;
  display: flex;
  padding: 1vw;
  -webkit-animation: animation-translate-right 1500ms linear both;
  animation: animation-translate-right 1500ms linear both;

  .left {
    width: 67%;
    background-color: #eff0f0;
    margin-right: 1.5vw;
    border-radius: .5vw;
    padding: 1vw;
    height: 16vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      color: #000000;
      font-size: 1.4vw;
      font-weight: 500;
      line-height: 2vw;

      span {
        color: #ff6d1d;
      }
    }

    .go {
      position: absolute;
      top: 6vw;
      display: flex;
      justify-content: center;
      font-size: 1.8vw;
      font-weight: 500;
      background-color: rgba(255, 102, 51, .2);
      width: 4.3vw;
      height: 4.2vw;
      border-radius: 50%;
      left: 45%;
      animation: pulse 1s infinite;
        z-index: 5;

      .go-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(/images/cabinet/buttonBorder.png);
        background-size: 3vw;
        background-position: center;
        background-repeat: no-repeat;

        a {
          cursor: pointer;
          color: black;
          z-index: 5;
        }
      }
    }

    .video-wrapper {
      display: flex;
      justify-content: end;
      align-items: flex-end;
      z-index: 1;

      .video {
        img {
          width: 12vw;
        }

        .faceit {
          position: absolute;
          top: -1.1vw;
          right: -2vw;

          img {
            width: 3vw;
          }
        }
      }

      .rating {
        img {
          width: 3vw;
        }
      }

      &.dota {
        .video {
          img {
            width: 19vw;
            margin-bottom: -1vw;
          }
        }
      }
    }

    .background-solder {
      position: absolute;
      top: -2.5vw;
      right: -1.5vw;

      img {
        width: 43vw;
      }
    }
  }

  .right {
    width: 33%;
    background-color: #eff0f0;
    border-radius: .5vw;
    height: 16vw;
    padding: 1.5vw 1vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .title {
      color: #000000;
      font-size: 1.4vw;
      font-weight: 500;
      line-height: 1.7vw;

      span {
        color: #ff6d1d;
      }
    }

    .video {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        border-radius: .5vw .5vw 0 0;
        width: 15.5vw;
      }

      .play {
        width: 3vw;
        position: absolute;

        &:hover {
          animation: analytic-pulse 1s infinite;
        }
      }
    }
  }
}

.dark {
  .second-banner {
    .left {
      background: rgb(61, 65, 70);
      background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
      background: linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);

      .title {
        color: white;
      }

      .go {
        position: absolute;
        top: 6vw;
        display: flex;
        justify-content: center;
        font-size: 1.8vw;
        font-weight: 500;
        background-color: rgba(109, 113, 115, .8);
        width: 4.3vw;
        height: 4.2vw;
        border-radius: 50%;
        left: 45%;
        animation: dark-pulse 1s infinite;

        .go-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url(/images/cabinet/buttonBorder.png);
          background-size: 3vw;
          background-position: center;
          background-repeat: no-repeat;

          a {
            cursor: pointer;
            color: white;
            z-index: 1;
          }
        }
      }
    }

    .right {
      background: rgb(37, 40, 42);
      background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 69, 1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 69, 1) 100%);
      background: linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 69, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#3d4145", GradientType=1);

      .title {
        color: white;
      }
    }
  }
}
</style>