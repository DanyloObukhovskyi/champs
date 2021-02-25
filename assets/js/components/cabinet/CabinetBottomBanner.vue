<template>
    <div class="banners" v-if="user !== null">
        <div class="left">
            <a href="">
                <img class="background" src="/images/cabinet/tournamentBannerBackground.png">
                <img class="background" src="/images/cabinet/tournamentBanner.png">
            </a>
        </div>
        <div class="right">
            <div class="title">
                <div class="first">
                    Выполняй <span>квесты!</span>
                </div>
                <div class="second">
                    Смотри <span>видео!</span>
                </div>
            </div>
            <div class="bottom">
                <div class="image">
                    <img src="/images/cabinet/questBannerDota.png"
                         v-if="user.game !== null && user.game.code === 'dota'">
                    <img src="/images/cabinet/questBannerCs.png"
                         v-else>
                </div>
                <div class="sub-title">
                    <div class="first">
                        Получай больше
                    </div>
                    <div class="second">
                        бонусов!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "CabinetBottomBanner",
    computed: {
        ...mapGetters([
            'user'
        ]),
    }
}
</script>

<style scoped lang="scss">
@import '../../../css/animations.css';

.banners {
  display: flex;
  -webkit-animation: animation-translate-right 1500ms linear both;
  animation: animation-translate-right 1500ms linear both;

  .left {
    width: 55%;
    margin: 1vw;
    height: 15vw;

    a {
      display: block;
    }

    img {
      width: 100%;
      height: 15vw;
    }

    img:nth-child(2) {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .right {
    width: 45%;
    margin: 1vw;
    background-color: #eff0f0;
    height: 15vw;
    padding: 1vw;
    border-radius: .5vw;
    overflow: hidden;
    margin-right: 3vw;
    .title {
      width: 58%;
      font-size: 1.4vw;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      span {
        color: #ff6d1d;
      }
    }

    .bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;


      img {
        width: 12vw;
      }

      .sub-title {
        align-items: flex-end;
        margin-top: 2vw;
        margin-left: 2vw;

        .first {
          font-size: 1.5vw;
          font-weight: 600;
        }

        .second {
          font-size: 3vw;
          line-height: 2vw;
          margin-left: -.2vw;
          color: #ff6d1d;
          font-weight: 600;
        }
      }
    }
  }
}

.dark {
  .banners {
    .right {
      background: rgb(37, 40, 42);
      background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(60, 64, 69, 1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(60, 64, 69, 1) 100%);
      background: linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(60, 64, 69, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#3c4045", GradientType=1);
      color: white;
    }
  }
}
</style>