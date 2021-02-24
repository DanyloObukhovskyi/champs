<template>
    <nav class="header_nav fixed-top pl-8 pr-8 d-flex" :class="{'h-3': !isPageStart}" id="header">
        <div class="container nav align-items-stretch p-0">
            <a :href="`/${lang}/`" class="d-flex justify-content-center align-items-center logo-wrapper"
               :class="{'start p-3': isPageStart}">
                <img v-show="!isPageStart" src="/images/logo.svg" class="logo w-75"/>
                <img v-show="isPageStart" :class="{'mt-1': isPageStart}" src="/images/navbar/bigLogo.png" class="logo"/>
            </a>
            <div class="menu pl-0">
                <a :href="home" class="pointer" :class="{active : router == 'home'}">
                    Главная
                </a>
                <a :href="newsPage" class="pointer" :class="{active : router == 'novosti'}">
                    Новости
                </a>
                <a :href="matchesPage" class="pointer" :class="{active : router == 'matches'}">
                    Матчи
                </a>
                <a href="/ru/statistika" class="pointer" :class="{active : router == 'statistika'}">
                    Статистика
                </a>
                <a :href="marketplacePage" class="pointer" :class="{active : router == 'obucheniye'}">
                    <div>
                        <small>pro</small>
                        Обучение
                    </div>
                </a>
                <a :href="digestPage" :class="{active : router == 'daydzhest_turnirov'}">
                    Дайджест турниров
                </a>
                <a href="/ru/mvp" class="pointer" :class="{active : router == 'mvp'}">
                    MVP
                </a>
            </div>
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
                                <img :src="'/uploads/avatars/' + user.photo"
                                     @error="$event.target.src = '/images/noLogo.png'">
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
    import MarketplaceService from "../../services/MarketplaceService";
    import Service from "../../services/Service";

    export default {
        name: "NavBar",
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
            marketplacePage() {
                return MarketplaceService.marketplacePage()
            },
            home() {
                const service = new Service();

                return `/${service.lang}/`
            }
        }
    }
</script>

<style scoped>
    .header_nav {
        width: 100%;
        height: 3.8vw;
        background: rgb(51, 56, 61);
        background: -moz-radial-gradient(circle, rgba(51, 56, 61, 1) 16%, rgba(45, 49, 53, 1) 61%);
        background: -webkit-radial-gradient(circle, rgba(51, 56, 61, 1) 16%, rgba(45, 49, 53, 1) 61%);
        background: radial-gradient(circle, rgba(51, 56, 61, 1) 16%, rgba(45, 49, 53, 1) 61%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#33383d", endColorstr="#2d3135", GradientType=1);
        transition: all .3s ease-in-out;
    }

    .header_nav .nav {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        font-size: 0.7vw;
        font-weight: 500;
        letter-spacing: 0.05vw;
        z-index: 3;
    }

    .header_nav .nav .menu {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        padding: 0 2vw;
    }

    .logo-wrapper {
        width: 12vw;
        z-index: 6;
        transition: all .5s ease-in-out;
        background: rgb(51, 56, 61);
        background: -moz-radial-gradient(circle, rgba(51, 56, 61, 1) 16%, rgba(45, 49, 53, 1) 61%);
        background: -webkit-radial-gradient(circle, rgba(51, 56, 61, 1) 16%, rgba(45, 49, 53, 1) 61%);
        background: radial-gradient(circle, rgba(51, 56, 61, 1) 16%, rgba(45, 49, 53, 1) 61%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#33383d", endColorstr="#2d3135", GradientType=1);
    }

    .start {
        width: 7.5vw;
        height: 6.5vw;
    }

    .start img {
        width: 3.8vw;
    }

    .menu a:hover, .menu a.active {
        background: linear-gradient(180deg, rgba(53, 57, 62, 0.15) -25%, rgba(53, 57, 62, 0.0) 125%), rgba(255, 109, 29, 0.15);
    }

    .menu a:hover small {
        color: white;
    }

    .pointer {
        cursor: pointer;
    }

    .arrow-right {
        flex-shrink: 0;
        width: 1.7vw;
        height: 1.7vw;
        align-items: center;
        justify-content: center;
        display: flex;
        background-color: #ff6d1d;
        border-radius: 50%;
    }

    .arrow-right i {
        color: white;
    }

    .login-wrapper {
        height: 100%;
        width: 8vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all .5s ease-in-out;
        right: .5vw;
    }

    .login span {
        color: #ff6d1d;
    }

    .login small {
		color: #ff6d1d;
		font-size: .35vw;
		line-height: .2vw;
    }

    .login {
        left: 0;
        transition: all .5s ease-in-out;
        z-index: 11;
        background: rgb(45, 49, 53);
        background: linear-gradient(270deg, rgba(45, 49, 53, 0) 0%, rgba(64, 68, 74, 1) 79%);
    }

    .header_nav .nav .login-wrapper a {
        width: max-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    }

    .header_nav .nav .login-wrapper a.nickname {
        padding-right: 1vw;
    }

    .header_nav .nav .login-wrapper .avatar {
        display: flex;
        justify-content: center;
    }

    .header_nav .nav .login-wrapper .gradient {
        width: 2.5vw;
        height: 2.5vw;
        border-radius: 50%;
        padding: .1vw;
        background: #ff6f1f;
        background: -moz-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
        background: -webkit-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
        background: linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6f1f", endColorstr="#ffc24f", GradientType=1);
    }

    .header_nav .nav .login-wrapper .gradient img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .header_nav .nav .login-wrapper:hover {
        right: 1vw;
        transition: all .5s ease-in-out;
    }

    .pl-8 {
        padding-left: 8vw;
    }

    .pr-8 {
        padding-right: 8vw;
    }

    .h-3 {
        height: 2.8vw;
    }

    .menu a small {
        font-size: 6px;
        color: yellow;
        position: absolute;
        right: -.4vw;
        top: -.2vw;
    }

    .menu a {
        text-transform: none;
    }

    .header_nav .nav .login {
        right: 2vw;
        height: 2vw;
        display: flex;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
        min-width: 5vw;
        justify-content: center;
        padding-left: .5vw;
    }

    .header_nav .nav .menu a.active,
    .header_nav .nav .menu span.active {
        color: #ffffff;
        cursor: default;
    }

    .header_nav .nav .menu a.active:after,
    .header_nav .nav .menu span.active:after {
        content: "";
        width: 100%;
        height: 0.15vw;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(270deg, #ff6d1d -25%, #ffc350 125%);
    }

    .header_nav .nav .menu a,
    .header_nav .nav .menu span {
		font-size: 1vw;
		height: 100%;
		padding: 0 1vw;
		color: #ffffff;
		display: flex;
		font-weight: 100;
		align-items: center;
    }
</style>