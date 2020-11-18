<template>
    <nav class="header_nav fixed-top pl-8 pr-8 d-flex" :class="{'h-3': !isPageStart}" id="header">
        <div class="container nav align-items-stretch p-0">
            <a href="/" class="d-flex justify-content-center align-items-center logo-wrapper"
               :class="{'start p-3': isPageStart}">
                <img v-show="!isPageStart" src="/images/logo.svg" class="logo w-75"/>
                <img v-show="isPageStart" :class="{'mt-1': isPageStart}" src="/images/navbar/bigLogo.png" class="logo"/>
            </a>
            <div class="menu-btn-cont">
                <img src="/images/menu.png" class="menu-btn"/>
            </div>
            <div class="menu pl-0">
                <a href="/ru/" class="pointer" :class="{active : '/ru/' == currentPath}">
                    Главная
                </a>
                <a href="/ru/news" class="pointer" :class="{active : '/ru/news' == currentPath}">
                    Новости
                </a>
                <a :href="matchesPage" class="pointer" :class="{active : matchesPage == currentPath}">
                    Матчи
                </a>
                <a :href="eventsPage" class="pointer" :class="{active : eventsPage == currentPath}">
                    События
                </a>
                <a href="/ru/statistics" class="pointer" :class="{active : '/ru/statistics' == currentPath}">
                    Статистика
                </a>
                <a href="/ru/marketplace" class="pointer" :class="{active : '/ru/marketplace' == currentPath}">
                    Обучение
                    <small>pro</small>
                </a>
            </div>
            <social></social>
            <div class="login">
                <a :href="`/ru/${isTrainer ? 'trainer': 'user'}/timelist`"
                   v-if="isAuthorize"
                   class="ln text-light">
                    кабинет
                </a>
                <span v-else
                      @click="$emit('show')">
                Войти
            </span>
                <div class="arrow-right">
                    <a :href="`/ru/${isTrainer ? 'trainer': 'user'}/timelist`"
                       v-if="isAuthorize"
                       class="icon">
                        <i class="fas fa-arrow-right"></i>
                    </a>
                    <i v-else class="fas fa-arrow-right" @click="$emit('show')"></i>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import Social from "./Social";
    import GameSelect from "./GameSelect";
    import matchService from "../../services/MatchService";
    import eventService from "../../services/EventService";

    export default {
        name: "NavBar",
        props: [
            'router',
            'isAuthorize',
            'isTrainer',
        ],
        data() {
            return {
                theme: null,
            }
        },
        components: {
            'social': Social,
            'game-select': GameSelect,
        },
        computed: {
            currentPath() {
                return document.location.pathname;
            },
            isPageStart(){
                return this.$parent.isPageStart;
            },
            matchesPage() {
                return matchService.matchesPage()
            },
            eventsPage() {
                return eventService.eventsPage()
            }
        },
    }
</script>

<style scoped>
    .header_nav {
        width: 100%;
        height: 3.8vw;
        background: rgb(51,56,61);
        background: -moz-radial-gradient(circle, rgba(51,56,61,1) 16%, rgba(45,49,53,1) 61%);
        background: -webkit-radial-gradient(circle, rgba(51,56,61,1) 16%, rgba(45,49,53,1) 61%);
        background: radial-gradient(circle, rgba(51,56,61,1) 16%, rgba(45,49,53,1) 61%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#33383d",endColorstr="#2d3135",GradientType=1);
        transition: all .3s ease-in-out;
    }
    .logo-wrapper {
        width: 12vw;
        z-index: 6;
        transition: all .5s ease-in-out;
        background: rgb(51,56,61);
        background: -moz-radial-gradient(circle, rgba(51,56,61,1) 16%, rgba(45,49,53,1) 61%);
        background: -webkit-radial-gradient(circle, rgba(51,56,61,1) 16%, rgba(45,49,53,1) 61%);
        background: radial-gradient(circle, rgba(51,56,61,1) 16%, rgba(45,49,53,1) 61%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#33383d",endColorstr="#2d3135",GradientType=1);
    }
    .start {
        width: 9vw;
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
    .login span {
        color: #ff6d1d;
    }
    .login {
        left: 0;
        transition: all .5s ease-in-out;
        z-index: 11;
    }
    .login:hover {
        left: -5px;
        transition: all .5s;
        background: rgb(45,49,53);
        background: linear-gradient(270deg, rgba(45,49,53,0) 0%, rgba(64,68,74,1) 79%);
    }
    .pl-8 {
        padding-left: 8vw;
    }
    .pr-8 {
        padding-right: 8vw;
    }
    .h-3{
        height: 2.8vw;
    }
    .menu a small{
        font-size: 6px;
        color: yellow;
        position: absolute;
        right: 0;
        top: 14px;
    }
    .menu a {
        text-transform: none;
    }
    .header_nav .nav .login {
        right: 2vw;
        top: 18%;
        flex-shrink: 0;
        height: 64%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        transition: 0.9s;
        cursor: pointer;
    }
    .header_nav .nav .login:hover {
        right: 2.5vw;
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
        font-size: .8vw;
        display: block;
        height: 100%;
        padding: 0 1vw;
        color: #ffffff;
        display: flex;
        align-items: center;
    }
</style>