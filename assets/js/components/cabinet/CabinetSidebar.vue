<template>
    <div class="cabinet-sidebar" v-if="user !== null" :class="{'fixed': isFixed}" :style="{top: `${marginTop}px`}">
        <div class="page" v-for="page in pages">
            <router-link
                    @click.native="pageUp"
                    :to="getPageLink(page.code)">
                <img :src="'/images/cabinet/' + page.icon">
                <img :src="'/images/cabinet/' + page.iconActive" class="active">
                {{ page.name }}
            </router-link>
        </div>
        <div class="page">
            <a :href="logoutUrl">
                <img src="/images/cabinet/logout.png">
                <img src="/images/cabinet/logoutActive.png" class="active">
                Выйти
            </a>
        </div>
    </div>
</template>

<script>
import CabinetService from "../../services/CabinetService";
import {mapGetters} from "vuex";

const USER_PAGES = [
    {
        name: 'Личный кабинет',
        code: '',
        icon: 'cabinetIcon.png',
        iconActive: 'cabinetIconActive.png',
    },
    {
        name: 'Обучение',
        code: 'training',
        icon: 'trainingIcon.png',
        iconActive: 'trainingIconActive.png',
    },
    {
        name: 'Турниры Champs',
        code: 'tournaments',
        icon: 'tournamentsIcon.png',
        iconActive: 'tournamentsIconActive.png',
    },
    {
        name: 'Новости',
        code: 'news',
        icon: 'newsIcon.png',
        iconActive: 'newsIconActive.png',
    },
    {
        name: 'Видео',
        code: 'videos',
        icon: 'videosIcon.png',
        iconActive: 'videosIconActive.png',
    },
    {
        name: 'Настройки',
        code: 'settings',
        icon: 'settingsIcon.png',
        iconActive: 'settingsIconActive.png',
    }
];

const TRAINING_PAGES = [
    {
        name: 'Личный кабинет',
        code: '',
        icon: 'cabinetIcon.png',
        iconActive: 'cabinetIconActive.png',
    },
    {
        name: 'Расписание',
        code: 'timetable',
        icon: 'timetable.png',
        iconActive: 'trainingIconActive.png',
    },
    {
        name: 'Календарь',
        code: 'calendar',
        icon: 'calendar.png',
        iconActive: 'calendarIconActive.png',
    },
    {
        name: 'Кошелек',
        code: 'wallet',
        icon: 'wallet.png',
        iconActive: 'walletIconActive.png',
    },
    {
        name: 'Настройки',
        code: 'settings',
        icon: 'settingsIcon.png',
        iconActive: 'settingsIconActive.png',
    }
];

export default {
    name: "CabinetSidebar",
    data() {
        return {
            userPages: USER_PAGES,
            trainingPages: TRAINING_PAGES,
            isFixed: false,
            marginTop: 0
        }
    },
    computed: {
        logoutUrl() {
            return CabinetService.logoutUrl;
        },
        pages() {
            if (this.user.isTrainer) {
                return this.trainingPages;
            } else {
                return this.userPages;
            }
        },
        ...mapGetters([
            'user'
        ])
    },
    methods: {
        getPageLink(code) {
            let type = 'user';
            if (this.user.isTrainer) {
                type = 'trainer';
            }
            return `/${CabinetService.lang}/${type}/cabinet/${code}`;
        },
        pageUp() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../../css/animations.css';

#layout .cabinet-sidebar {
  min-height: 15.7vw;
  border-radius: .3vw;
  width: 11.5vw;
  margin-top: 1vw;
  height: 100%;
  padding-top: 1vw;
  padding-bottom: 1vw;
  -webkit-animation: animation-translate-left 1500ms linear both;
  animation: animation-translate-left 1500ms linear both;
  background-color: #eff0f0;

  &.fixed {
    position: fixed;
  }

  .page {
    margin-bottom: .8vw;
    font-size: .8vw;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-top: 0;

    a {
      color: #9d9fa0;
      width: 100%;
      padding: .2vw;
      border-radius: 0 .5vw .5vw 0;
      transition: all .2s ease-in-out;

      img {
        margin-left: 1.2vw;
        margin-right: 1vw;
        width: 1vw;

        &.active {
          display: none;
        }
      }

      &.router-link-exact-active {
        background-color: #ff6d1d;
        color: white;

        img {
          display: none;

          &.active {
            display: unset;
          }
        }
      }

      &:hover {
        background-color: #ff6d1d;
        color: white;

        img {
          display: none;

          &.active {
            display: unset;
          }
        }
      }
    }
  }
}

.dark #layout {
  .cabinet-sidebar {
    min-height: 15.7vw;
    background-color: #1e2123;
    color: white;
  }
}
</style>