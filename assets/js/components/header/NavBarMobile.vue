<template>
  <nav class="header_nav" id="header">
    <div class="container d-flex justify-content-between nav p-0">
      <div class="menuLabel">
        <a>
          <img @click="toggle_up" class="dropbtn" src="/images/navbar/NavMenu.svg">
        </a>
      </div>
      <div class="logo">
        <a :href="home" :class="{active : router == 'home'}">
          <img src="/images/logo.svg" />
        </a>
      </div>
      <div id="myDropdown" class="dropdown-content">
        <div class="pb-2">
          <div class="d-flex col-12">
            <div class="theme-toggle d-flex align-items-center" style="width: 85%; margin-left: 2%;">
              <i class="fas fa-sun sun"></i>
              <div class="toggler" :class="{active: theme === 'dark'}" @click="toggleTheme">
              </div>
              <i class="fas fa-moon moon"></i>
            </div>
            <a class="exit_button">&Chi;</a>
          </div>
          <a :href="home" class="pointer" :class="{active : router == 'home'}">
            Главная
          </a>
          <a :href="newsPage" class="pointer" :class="{active : router == 'novosti'}">
            Новости
          </a>
          <a :href="blogPage"  class="pointer" :class="{active : router == 'blog'}">
            Блоги
          </a>
          <a :href="matchesPage" class="pointer" :class="{active : router == 'matches'}">
            Матчи
          </a>
          <a :href="digestPage" :class="{active : router === 'digest'}">
            Турниры
          </a>
          <a href="/ru/statistika" class="pointer" :class="{active : router === 'statistics'}">
            Статистика
          </a>
          <a :href="marketplacePage" class="pointer" :class="{active : router === 'marketplace'}">
            Обучение
          </a>
        </div>
        <div class="lower-dropdown pt-2">
          <div class="timezone">
          <a class="timezone-content">
            <small style="color: #9d9fa0;">Часовой пояс</small> <small style="float: right; color: #8298ac;">{{ user !== null && user.gmt !== null ? user.gmt : 'GMT+3' }}</small>
          </a>
          </div>
          <div class="helping-player">
          <a style="display: flex;
             justify-content: center;">
            <div class="help d-flex" style="float: right">
            <a style="fill: rgba(0, 0, 0, 0);width: 10.6vw;" href="https://discord.gg/XsYHZXD9" target="_blank">
              <svg class="discord" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   aria-hidden="true"
                   focusable="false"
                   style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                   preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                <path style="fill: white;" d="M12.656 4.906L11.875 5s-3.504.383-6.063 2.438h-.03l-.032.03c-.574.528-.824 1.177-1.219 2.126a30.69 30.69 0 0 0-1.187 3.5C2.602 15.777 2 19.027 2 22v.25l.125.25c.926 1.625 2.57 2.66 4.094 3.375c1.523.715 2.84 1.094 3.75 1.125l.594.031l.312-.531l1.094-1.938c1.16.262 2.496.438 4.031.438c1.535 0 2.871-.176 4.031-.438l1.094 1.938l.313.531l.593-.031c.91-.031 2.227-.41 3.75-1.125c1.524-.715 3.168-1.75 4.094-3.375l.125-.25V22c0-2.973-.602-6.223-1.344-8.906a30.69 30.69 0 0 0-1.187-3.5c-.395-.95-.645-1.598-1.219-2.125l-.031-.032h-.032C23.63 5.383 20.125 5 20.125 5l-.781-.094l-.282.719s-.289.73-.468 1.563A20.095 20.095 0 0 0 16 7c-.535 0-1.46.035-2.594.188c-.18-.833-.469-1.563-.469-1.563zm-1.375 2.282c.043.14.086.261.125.375c-1.293.32-2.672.808-3.937 1.593l1.062 1.688C11.125 9.234 14.851 9 16 9c1.148 0 4.875.234 7.469 1.844l1.062-1.688c-1.265-.785-2.644-1.273-3.937-1.594c.039-.113.082-.234.125-.375c.933.188 2.715.618 4.187 1.782c-.008.004.375.582.719 1.406c.352.848.742 1.977 1.094 3.25c.676 2.441 1.207 5.414 1.25 8.031c-.63.961-1.797 1.828-3.032 2.407a9.744 9.744 0 0 1-2.437.78L22 24c.297-.11.59-.23.844-.344c1.539-.676 2.375-1.406 2.375-1.406l-1.313-1.5s-.562.516-1.875 1.094C20.72 22.422 18.715 23 16 23s-4.719-.578-6.031-1.156c-1.313-.578-1.875-1.094-1.875-1.094l-1.313 1.5s.836.73 2.375 1.406c.254.114.547.235.844.344l-.5.844a9.744 9.744 0 0 1-2.438-.782c-1.234-.578-2.402-1.445-3.03-2.406c.042-2.617.573-5.59 1.25-8.031a28.663 28.663 0 0 1 1.093-3.25c.344-.824.727-1.402.719-1.406c1.472-1.164 3.254-1.594 4.187-1.781zM12.5 14c-.773 0-1.457.441-1.875 1c-.418.559-.625 1.246-.625 2s.207 1.441.625 2c.418.559 1.102 1 1.875 1c.773 0 1.457-.441 1.875-1c.418-.559.625-1.246.625-2s-.207-1.441-.625-2c-.418-.559-1.102-1-1.875-1zm7 0c-.773 0-1.457.441-1.875 1c-.418.559-.625 1.246-.625 2s.207 1.441.625 2c.418.559 1.102 1 1.875 1c.773 0 1.457-.441 1.875-1c.418-.559.625-1.246.625-2s-.207-1.441-.625-2c-.418-.559-1.102-1-1.875-1zm-7 2c.055 0 .125.02.25.188c.125.167.25.46.25.812c0 .352-.125.645-.25.813c-.125.167-.195.187-.25.187c-.055 0-.125-.02-.25-.188A1.401 1.401 0 0 1 12 17c0-.352.125-.645.25-.813c.125-.167.195-.187.25-.187zm7 0c.055 0 .125.02.25.188c.125.167.25.46.25.812c0 .352-.125.645-.25.813c-.125.167-.195.187-.25.187c-.055 0-.125-.02-.25-.188A1.401 1.401 0 0 1 19 17c0-.352.125-.645.25-.813c.125-.167.195-.187.25-.187z"
                      fill="black"/>
                <rect x="0" y="0" width="32" height="32"/>
              </svg>
            </a>
            <a href="">
              <i class="far fa-question-circle zendesk" style="font-size: 5.2vw;"></i>
            </a>
            <a href="mailto:support@champs.pro" target="_blank">
              <i class="fas fa-envelope letter" style="font-size: 5.2vw;"></i>
            </a>
          </div>
          </a>
          </div>
        </div>
      </div>
      <div class="login-wrapper">
        <div class="login">
          <a @click="toggle_up_login_menu"
             v-if="isAuthorize"
             class="ln text-light nickname drop_btn_login_menu">
            {{user !== null ? user.nickname: 'КАБИНЕТ'}}
            <small v-if="user !== null && user.isTrainer">Тренер</small>
          </a>
          <span v-else
                @click="$emit('show')">
                          ВОЙТИ
                    </span>
        </div>
        <div class="arrow-right">
          <a :href="`/${lang}/${isTrainer ? 'trainer': 'user'}/cabinet`"
             v-if="isAuthorize"
             class="icon">
            <div class="avatar" v-if="user !== null">
              <div class="gradient">
                <div class="image-wrapper" :style="imageWrapperImage">
                </div>
              </div>
            </div>
            <i v-else class="fas fa-arrow-right"></i>
          </a>
          <i v-else class="fas fa-arrow-right" @click="$emit('show')"></i>
        </div>
      </div>
      <div v-if="isAuthorize" id="cabinetMenu" class="dropdown-content-login">
        <div  class="lower-dropdown-login pt-2">
          <div class="page" v-for="page in pages">
            <a :href="`/${lang}/${isTrainer ? 'trainer': 'user'}/cabinet` + '/'+ page.code">
              <img :src="'/images/cabinet/' + page.icon">
              <img :src="'/images/cabinet/' + page.iconActive" class="active">
              {{ page.name }}
            </a>
          </div>
          <div class="page">
            <a :href="logoutUrl">
              <img src="/images/cabinet/logout.png">
              <img src="/images/cabinet/logoutActive.png" class="active">
              Выйти
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';

import Social from "./Social";
import GameSelect from "./GameSelect";
import matchService from "../../services/MatchService";
import eventService from "../../services/EventService";
import newsService from "../../services/NewsService";
import blogService from "../../services/BlogService";
import MarketplaceService from "../../services/MarketplaceService";
import Service from "../../services/Service";
import CabinetService from "../../services/CabinetService";


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
    name: 'Блог',
    code: 'blog',
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
    name: 'Блог',
    code: 'blog',
    icon: 'tournamentsIcon.png',
    iconActive: 'tournamentsIconActive.png',
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
  name: "NavBarMobile",
  props: [
    'router',
    'isAuthorize',
    'isTrainer',
    'social',
  ],
  data() {
    return {
      userPages: USER_PAGES,
      trainingPages: TRAINING_PAGES,
      theme: null
    }
  },
  components: {
    Social,
    GameSelect,
  },
  computed: {
    ...mapGetters([
      'user',
    ]),
    lang() {
      let lang = 'ru';
      if (document.documentElement.lang !== null && document.documentElement.lang !== '') {
        lang = document.documentElement.lang
      }
      return lang;
    },
    pages() {
      if (this.user.isTrainer) {
        return this.trainingPages;
      } else {
        return this.userPages;
      }
    },
    isPageStart() {
      return this.$parent.isPageStart;
    },
    matchesPage() {
      return matchService.matchesPage()
    },
    eventsPage() {
      return eventService.eventsPage()
    },
    digestPage() {
      return eventService.digestPage()
    },
    newsPage() {
      return newsService.newsPage()
    },
    blogPage() {
      return blogService.blogPage();
    },
    marketplacePage() {
      return MarketplaceService.marketplacePage()
    },
    home() {
      const service = new Service();

      return `/${service.lang}/`
    },
    imageWrapperImage() {
      return {
        'background-image': `url('${'/uploads/avatars/' + this.user.photo}'), url('/images/noLogoAvatar.png')`
      }
    },
    logoutUrl() {
      return CabinetService.logoutUrl;
    },
  },
  methods: {
    toggle_up: function () {
      document.getElementById("myDropdown").classList.toggle("show");
    },
    toggle_up_login_menu: function () {
      document.getElementById("cabinetMenu").classList.toggle("show");
    },
    toggle_down: function (event) {
      if (!event.target.matches('.dropbtn') && !event.target.matches('.theme-toggle.d-flex.align-items-center') && !event.target.matches('.toggler') && !event.target.matches('i.fas.fa-sun.sun') && !event.target.matches('i.fas.fa-moon.moon')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    },
    toggle_down_login_menu: function (event) {
      if (!event.target.matches('.drop_btn_login_menu')) {

        var dropdowns = document.getElementsByClassName("dropdown-content-login");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    },
    toggleTheme() {
      if (this.theme === 'dark') {
        this.setTheme('light');
      } else {
        this.setTheme('dark');
      }
      this.theme = localStorage.getItem('theme');
    },
    setDefaultTheme() {
      if (localStorage.getItem('theme') === null) {
        this.setTheme('light');
      } else {
        this.setTheme(localStorage.getItem('theme'));
      }
      this.theme = localStorage.getItem('theme');
    },
    setTheme(themeName) {
      localStorage.setItem('theme', themeName);
      document.documentElement.className = themeName;
    }
  },
  mounted() {
    document.addEventListener('click', this.toggle_down)
    document.addEventListener('click', this.toggle_down_login_menu)
    this.setDefaultTheme()
  }
}
</script>

<style scoped lang="scss">
.header_nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgb(51, 56, 61);
  position: relative;
  height: 54%
}
.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 20px);
}
.login-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
  background: linear-gradient(270deg, rgba(45, 49, 53, 0) 0%, rgba(64, 68, 74, 1) 79%);
}
.login {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  padding-left: 5%;
}
.gradient {
  background: #ff6f1f;
  background: -moz-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
  background: -webkit-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
  background: linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6f1f", endColorstr="#ffc24f", GradientType=1);
}
.gradient img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.avatar {
  display: flex;
  justify-content: center;
}
.login small {
  color: #ff6d1d;
  font-size: 4.35vw;
  margin-left: 3vw;
}
.login span {
  color: #ff6d1d;
}
.arrow-right i {
  color: white;
}
.arrow-right {
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #ff6d1d;
  border-radius: 50%;
  width: 8vw;
  height: 8vw;
  font-size: 50%;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  right: 33%;
  background-color: #35393e;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1029;
  width: 70%;
}
.dropdown-content a {
  color: white;
  padding: 4%;
  text-decoration: none;
  display: flex;
}

.dropdown-content-login {
  display: none;
  position: absolute;
  top: 115%;
  left: 33%;
  background-color: rgb(66, 61, 61);;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1029;
  width: 70%;
}
.dropdown-content-login a {
  color: white;
  padding: 4%;
  text-decoration: none;
  display: block;
}

.lower-dropdown {
  text-decoration: none;
  cursor: pointer;
}

.lower-dropdown-login {
  text-decoration: none;
  background: #1a1d21;
  cursor: pointer;
}

.exit_button {
  text-align: right;
  position: inherit;
  right: 0;
}
.dropdown a:hover {background-color: #ddd;}

.show {
  display: block;
}

.menuLabel {
  width: calc(100% - (100% - 25px));
}
.logo {
  width: calc(100% - (100% - 21%));
}

.page {
  margin-bottom: .8vw;
  font-size: 4.8vw;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 0;

  a {
    color: #9d9fa0;
    width: 100%;
    padding: 2.2vw;
    border-radius: 0 .5vw .5vw 0;
    transition: all .2s ease-in-out;

    img {
      margin-left: 1.2vw;
      margin-right: 1vw;
      width: 5vw;

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

.dark .theme-toggle .toggler {
  border: 2px solid #2d3135;
}

.theme-toggle .toggler {
  padding: .7vw;
  height: 6.6vw;
  width: 13.5vw;
  border-radius: 99px;
  cursor: pointer;
  font-weight: 400;
  vertical-align: middle;
  border: 2px solid #e5e5e5;
  transition: background-color .4s ease, border-color .4s ease, padding-left .4s ease;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9InBvZGxvemhrYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiPgo8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzYzQxNDYiIHN0b3Atb3BhY2l0eT0iMSIgLz4KPHN0b3Agb2Zmc2V0PSIyNS40Mzk0NTMlIiBzdG9wLWNvbG9yPSIjM2EzZjQ0IiBzdG9wLW9wYWNpdHk9IjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzM1MzkzZSIgc3RvcC1vcGFjaXR5PSIwIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI3BvZGxvemhrYSkiIC8+PC9zdmc+), #202225;
  background: -moz-linear-gradient(0deg, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
  background: -o-linear-gradient(0deg, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
  background: -webkit-linear-gradient(0deg, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
  background: -webkit-gradient(linear, left top, right top, color-stop(0, #3c4146), color-stop(25.439453%, #3a3f44), to(rgba(53, 57, 62, 0.0))), #202225;
  background: -webkit-linear-gradient(left, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
  background: -moz-linear-gradient(left, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
  background: -o-linear-gradient(left, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
  background: linear-gradient(90deg, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
}

.theme-toggle .toggler::before {
  display: inline-block;
  width: 3.8vw;
  height: 3.8vw;
  background-color: white;
  content: "";
  text-align: center;
  vertical-align: top;
  line-height: 1.2vw;
  border-radius: 99px;
}

.theme-toggle .toggler.active {
  padding-left: 7.1vw !important;
}

.theme-toggle .toggler.active::before {
  background-color: #fff;
  content: "";
}

.sun {
  color: #ff6d1d;
  font-size: 3.8vw;
  margin-right: 1.3vw;
}

.moon {
  color: #8298ac;
  font-size: 3.8vw;
  margin-left: 1.3vw;
}
.timezone {
  background: #26292c;
  margin-bottom: 0.6%;
}
.helping-player {
  background: #26292c;
}
.timezone-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.help {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>