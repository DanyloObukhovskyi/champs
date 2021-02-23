<template>
    <div class="card-user">
        <div class="user">
            <div class="avatar">
                <div class="gradient">
                    <img :src="'/uploads/avatars/' + user.photo" alt="avatar"
                         @error="$event.target.src = '/images/noLogo.png'">
                </div>
                <div class="lvl" v-if="userRank == null">
                    <span>
                        0
                    </span>
                    <img src="/images/cabinet/csLvl.png" alt="lvl">
                </div>
                <div class="lvl" v-else>
                    <img :src="'/images/ranks/' + userRank.icon" alt="lvl"
                         :class="{dota: user.game !== null && user.game.code === 'dota'}">
                </div>
            </div>
            <div class="nickname">
                {{ user.nickname }}
            </div>
            <div class="trainer" v-if="user.isTrainer">
                Тренер
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "UserCard",
    computed: {
        ...mapGetters([
            'user'
        ]),
        ...mapGetters('cabinet/setting', [
            'ranks',
            'timezones'
        ]),
        userRank() {
            if (this.user.game !== null) {
                const ranks = this.ranks[this.user.game.code];

                if (ranks) {
                    const userRank = ranks.find(e => {
                        if (Number(e.pointsFrom) <= Number(this.user.rank)) {
                            if (e.pointsTo === null || Number(e.pointsTo) >= Number(this.user.rank)) {
                                return e;
                            }
                        }
                    })
                    if (userRank !== undefined && userRank !== null) {
                        return userRank;
                    }
                }
                return null;
            } else {
                return null;
            }
        },
    }
}
</script>

<style scoped lang="scss">
@import '../../../css/animations.css';

.trainer {
  font-size: .9vw;
  color: #ff6d1d;
  font-weight: 600;
}

.card-user {
  -webkit-animation: animation-translate-left 1500ms linear both;
  animation: animation-translate-left 1500ms linear both;
  margin-bottom: 1.8vw;
}

.user {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5vw;
  padding-bottom: 1.5vw;
  flex-direction: column;
  border: .1vw solid #f9efea;

  .avatar {
    .gradient {
      width: 5vw;
      height: 5vw;
      border-radius: 50%;
      padding: .1vw;
      background: #ff6f1f;
      background: -moz-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
      background: -webkit-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
      background: linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6f1f", endColorstr="#ffc24f", GradientType=1);

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .lvl {
      display: flex;
      justify-content: center;
      margin-top: -1.1vw;

      span {
        position: absolute;
        z-index: 1;
        color: white;
        font-size: .8vw;
        top: .4vw;
      }

      img {
        width: 2vw;
        height: 2vw;

        &.dota {
          width: 3vw;
          height: 3vw;
          margin-bottom: -0.7vw;
        }
      }
    }
  }

  .nickname {
    font-size: 1.2vw;
    font-weight: 600;
  }
}

.dark {
  .user {
    color: white;
    background-color: #2a2e31;
    border: unset;
  }
}
</style>