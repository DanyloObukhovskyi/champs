<template>
  <nav style="display: flex; background: black;
    position: relative;
    justify-content: center;
    align-items: center;
    z-index: 1025;
    width: 100%;
    height: 46%;">
      <div class="games" style="display: flex;
        flex-direction: row;  justify-content: space-between;
        align-items: center;">
        <div style="display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;"
             v-for="game in games"
             @click="setGame(game.code)">
          <a style="color: rgb(173, 175, 176); align-items: center; display: flex;
              justify-content: center;" :href="'/ru/' + game.code">
            <img :src="`/uploads/games/${game.sidebarIcon}`">
            {{ game.name }}
          </a>
        </div>
        <div style="display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center; width: 1% !important;">
            <img src="/uploads/games/e9bbebe96dceb23726523d.png">
        </div>
      </div>
  </nav>
</template>

<script>
import {mapGetters} from "vuex";
import Service from "../../services/Service";
const service = new Service();
export default {
  name: "SubNavbarMobile",
  data() {
    return {
      theme: null,
      games: '',
      allGames: ''
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ]),
    isPageStart() {
      return this.$parent.isPageStart;
    }
  },
  methods: {
    setGame(game) {
      this.$emit('setgame', game);
    },
    setTheme(themeName) {
      localStorage.setItem('theme', themeName);
      document.documentElement.className = themeName;
    },
    getGamesForNavBar() {
      service.getGamesForNavBar().then(response => {
        let gamesObj = {};
        for(const game in response.games) {
          if (game < 3) {
            gamesObj[game] = response.games[game];
          }
        }
        this.games = gamesObj;
        this.allGames = response["allGames"].slice(3);
        console.log(this.allGames);
      });

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
  },
  mounted() {
    this.setDefaultTheme()
    this.getGamesForNavBar();
  }
}
</script>

<style scoped>
.games {
  height: calc(100% - (100% - 20px));
  width: 92%;
  white-space: nowrap;
}
.games img {
  width: calc(100% - (100% - 17px));
  height: calc(100% - (100% - 20px));
  margin-right: 2%;
}

.games div {
  cursor: pointer;
  width: 24%
}

</style>