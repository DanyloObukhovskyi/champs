<template>
    <div class="cabinet-sidebar" v-if="user !== null">
        <div class="page" v-for="page in pages">
            <router-link
                    :to="getPageLink(page.code)">
                <img :src="'/images/cabinet/' + page.icon">
                {{ page.name }}
            </router-link>
        </div>
        <div class="page">
            <a :href="logoutUrl">
                <img src="/images/cabinet/logout.png">
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
            icon: 'cabinetIcon.png'
        },
        {
            name: 'Обучение',
            code: 'training',
            icon: 'trainingIcon.png'
        },
        {
            name: 'Турниры Champs',
            code: 'tournaments',
            icon: 'tournamentsIcon.png'
        },
        {
            name: 'Новости',
            code: 'news',
            icon: 'newsIcon.png'
        },
        {
            name: 'Видео',
            code: 'videos',
            icon: 'videosIcon.png'
        },
        {
            name: 'Настройки',
            code: 'settings',
            icon: 'settingsIcon.png'
        }
    ];

    const TRAINING_PAGES = [
        {
            name: 'Личный кабинет',
            code: '',
            icon: 'cabinetIcon.png'
        },
        {
            name: 'Расписание',
            code: 'timetable',
            icon: 'timetable.png'
        },
        {
            name: 'Календарь',
            code: 'calendar',
            icon: 'calendar.png'
        },
        {
            name: 'Кошелек',
            code: 'wallet',
            icon: 'wallet.png'
        },
        {
            name: 'Настройки',
            code: 'settings',
            icon: 'settingsIcon.png'
        }
    ];

    export default {
        name: "CabinetSidebar",
        data() {
            return {
                userPages: USER_PAGES,
                trainingPages: TRAINING_PAGES
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
            }
        }
    }
</script>

<style scoped lang="scss">
  @import '../../../css/animations.css';

  #layout .cabinet-sidebar {
	margin-top: 1vw;
	height: 100%;
	background-color: #eff0f0;
	transition: background-color .5s ease-in-out;
	padding-top: 1vw;
	padding-bottom: 1vw;
	-webkit-animation: animation-translate-left 1500ms linear both;
	animation: animation-translate-left 1500ms linear both;
	min-height: 5vw;

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
		}

		&.router-link-exact-active {
		  background-color: #ff6d1d;
		  color: white;
		}

		&:hover {
		  background-color: #ff6d1d;
		  color: white;
		}
	  }
	}
  }

  .dark #layout {
	.cabinet-sidebar {
	  background-color: #1e2123;
	  color: white;
	}
  }
</style>