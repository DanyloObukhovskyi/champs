<template>
    <div class="cabinet">
        <div class="cabinet-head">
            <div class="left">
                <user-card :user="user" v-if="user !== null"/>
                <div class="d-flex justify-content-center mt-3 mb-3" v-else>
                    <small-loader/>
                </div>
                <cabinet-sidebar
                        :current-page="current">
                </cabinet-sidebar>
            </div>
            <div class="right">
                <cabinet-header></cabinet-header>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import VueRouter from 'vue-router'

    import CabinetSidebar from "../components/cabinet/CabinetSidebar";
    import UserCard from "../components/cabinet/UserCard";
    import CabinetService from "../services/CabinetService";
    import SmallLoader from "../components/helpers/SmallLoader";
    import CabinetHeader from "../components/cabinet/CabinetHeader";
    import Cabinet from "../components/cabinet/pages/Cabinet";
    import Training from "../components/cabinet/pages/Training";

    const routes = [
        { path: `/${CabinetService.lang}/user/cabinet/`, component: Cabinet },
        { path: `/${CabinetService.lang}/user/cabinet/training`, component: Training },
    ];

    export default {
        name: "CabinetPage",
        router:  new VueRouter({
            routes,
            mode: 'history'
        }),
        components: {
            CabinetHeader,
            SmallLoader,
            UserCard,
            CabinetSidebar,
        },
        props: ['isTrainer'],
        data() {
            return {
                current: '',
                load: false,
                user: null,
            }
        },
        methods: {
            getUser() {
                this.load = true;

                CabinetService.getUserFull()
                    .then(user => {
                        this.user = user;
                        this.load = false;
                    })
            }
        },
        mounted() {
            this.getUser();
        }
    }
</script>

<style scoped lang="scss">
    .cabinet {
        margin-top: .5vw;
        margin-bottom: 3vw;
    }

    .cabinet-head {
        display: flex;

        .left {
            width: 14%;
            margin-right: 2vw;
        }

        .right {
            width: 85%;
        }
    }
</style>