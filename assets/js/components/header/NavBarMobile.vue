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
        <a class="exit_button">&Chi;</a>
        <div class="pb-2">
          <a :href="home" class="pointer" :class="{active : router == 'home'}">
            Главная
          </a>
          <a :href="newsPage" class="pointer" :class="{active : router == 'novosti'}">
            Новости
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
          <a :href="blogPage"  class="pointer" :class="{active : router == 'blog'}">
            Блоги
          </a>
        </div>
        <div class="lower-dropdown pt-2">
          <a>
            <small>Часовой пояс</small>
          </a>
          <a>
            <small>Помощь игроку</small>
          </a>
        </div>
      </div>
<!--      <div class="menu pl-0">-->
<!--        <a :href="home" class="pointer" :class="{active : router == 'home'}">-->
<!--          Главная-->
<!--        </a>-->
<!--        <a :href="newsPage" class="pointer" :class="{active : router == 'novosti'}">-->
<!--          Новости-->
<!--        </a>-->
<!--        <a :href="blogPage"  class="pointer" :class="{active : router == 'blog'}">-->
<!--          Блоги-->
<!--        </a>-->
<!--        <a :href="matchesPage" class="pointer" :class="{active : router == 'matches'}">-->
<!--          Матчи-->
<!--        </a>-->
<!--        <a href="/ru/statistika" class="pointer" :class="{active : router === 'statistics'}">-->
<!--          Статистика-->
<!--        </a>-->
<!--        <a :href="marketplacePage" class="pointer" :class="{active : router === 'marketplace'}">-->
<!--          <div>-->
<!--            <small>pro</small>-->
<!--            Обучение-->
<!--          </div>-->
<!--        </a>-->
<!--        <a :href="digestPage" :class="{active : router === 'digest'}">-->
<!--          Дайджест турниров-->
<!--        </a>-->
<!--        &lt;!&ndash;                <a href="/ru/mvp" class="pointer" :class="{active : router == 'mvp'}">&ndash;&gt;-->
<!--        &lt;!&ndash;                    MVP&ndash;&gt;-->
<!--        &lt;!&ndash;                </a>&ndash;&gt;-->
<!--      </div>-->
      <!--            <social :social="social"></social>-->
      <div class="login-wrapper">
        <div class="login">
          <a :href="`/${lang}/${isTrainer ? 'trainer': 'user'}/cabinet`"
             v-if="isAuthorize"
             class="ln text-light nickname">
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
  },
  methods: {
    toggle_up: function () {
      document.getElementById("myDropdown").classList.toggle("show");
    },
    toggle_down: function (event) {
      if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.toggle_down)
  }
}
</script>

<style scoped>
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
  width: calc(100% - (100% - 78px));
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
  font-size: .35vw;
  line-height: .2vw;
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
  width: 20%;
  height: 4vw;
  max-height: 16px;
  font-size: 50%;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 115%;
  right: 33%;
  background-color: rgb(66, 61, 61);;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1029;
  width: 70%;
}
.dropdown-content a {
  color: white;
  padding: 4%;
  text-decoration: none;
  display: block;
}
.lower-dropdown {
  text-decoration: none;
  background: rgb(51, 56, 61);
  cursor: pointer;
}
.exit_button {
  text-align: right;
  position: absolute;
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
  width: calc(100% - (100% - 102px));
}
</style>