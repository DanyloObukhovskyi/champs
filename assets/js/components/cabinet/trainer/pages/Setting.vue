<template>
    <div class="setting">
        <div class="setting-body" v-if="user !== null">
            <div class="setting-wrapper">
                <general-settings/>
                <div class="avatar-discord-wrapper">
                    <avatar/>
                    <discord :discord="user.discord"/>
                </div>
            </div>
            <div class="setting-wrapper">
                <training-method/>
                <password/>
            </div>
            <div class="setting-wrapper">
                <achievements/>
                <timezone/>
            </div>
            <div class="setting-wrapper">
                <videos/>
            </div>
        </div>
    </div>
</template>

<script>
import GeneralSettings from "../../user/components/setting/GeneralSettings";
import Avatar from "../../user/components/setting/Avatar";
import {mapGetters} from "vuex";
import TrainingMethod from "../components/setting/TrainingMethod";
import Password from "../components/setting/Password";
import Achievements from "../components/setting/Achievements";
import Discord from "../components/setting/Discord";
import Videos from "../components/setting/Videos";
import Timezone from "../components/setting/Timezone";

export default {
    name: "Setting",
    components: {Timezone, Videos, Discord, Achievements, Password, TrainingMethod, Avatar, GeneralSettings},
    computed: {
        ...mapGetters([
            'user'
        ]),
    },
}
</script>

<style scoped lang="scss">
.setting {
  margin-bottom: -1vw;

  .setting-wrapper {
    .avatar-discord-wrapper {
      margin-right: 1vw;
      width: 30%;

      .setting-container-body {
        width: 100%;

        &.avatar-setting {
          height: 31vw;
          margin-bottom: 1vw;
        }
      }
    }
  }
}

.setting-body {
  -webkit-animation: animation-translate-right 1500ms linear both;
  animation: animation-translate-right 1500ms linear both;
}

.setting-wrapper {
  margin: 0 .3vw 1vw 1vw;
  display: flex;

  .setting-container-body:nth-child(1) {
    width: 65%;
  }

  .setting-container-body:nth-child(2) {
    width: 30%;
  }
}

.dark {
  .setting-wrapper {
    .setting-container-body:nth-child(1) {
      background: rgb(61, 65, 70);
      background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
      background: linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);
    }

    .setting-container-body:nth-child(2) {
      background: rgb(37, 40, 42);
      background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
      background: linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#3d4146", GradientType=1);
    }
  }
}
</style>