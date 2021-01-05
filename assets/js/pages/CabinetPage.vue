<template>
    <div class="cabinet">
        <div class="cabinet-body">
            <div class="left">
                <user-card v-if="!loadUser && user !== null"/>
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
       <invite-modal/>
    </div>
</template>

<script>
    import '../../css/setting.css';

    import VueRouter from 'vue-router'

    import CabinetSidebar from "../components/cabinet/CabinetSidebar";
    import UserCard from "../components/cabinet/UserCard";
    import CabinetService from "../services/CabinetService";
    import SmallLoader from "../components/helpers/SmallLoader";
    import CabinetHeader from "../components/cabinet/CabinetHeader";

    import Cabinet from "../components/cabinet/pages/Cabinet";
    import Training from "../components/cabinet/pages/Training";
    import News from "../components/cabinet/pages/News";
    import Video from "../components/cabinet/pages/Video";
    import Setting from "../components/cabinet/pages/Setting";
    import {mapGetters} from "vuex";
    import InviteModal from "../components/cabinet/InviteModal";

    const routes = [
        { path: `/${CabinetService.lang}/user/cabinet/`, component: Cabinet },
        { path: `/${CabinetService.lang}/user/cabinet/training`, component: Training },
        { path: `/${CabinetService.lang}/user/cabinet/news`, component: News },
        { path: `/${CabinetService.lang}/user/cabinet/videos`, component: Video },
        { path: `/${CabinetService.lang}/user/cabinet/settings`, component: Setting },
    ];

    export default {
        name: "CabinetPage",
        router:  new VueRouter({
            routes,
            mode: 'history'
        }),
        components: {
            InviteModal,
            CabinetHeader,
            SmallLoader,
            UserCard,
            CabinetSidebar,
        },
        props: ['isTrainer'],
        data() {
            return {
                current: '',
            }
        },
        computed: {
            ...mapGetters([
                'user',
                'loadUser'
            ]),
        },
        mounted() {
            this.$store.dispatch('cabinet/setting/getRanks')
        }
    }
</script>

<style scoped lang="scss">
    .cabinet {
        margin-top: .5vw;
        margin-bottom: 3vw;
    }

    .cabinet-body {
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