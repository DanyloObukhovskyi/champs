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
                <cabinet-header v-if="user !== null && !user.isTrainer"></cabinet-header>
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

    import UserCabinet from "../components/cabinet/user/pages/UserCabinet";
    import Training from "../components/cabinet/user/pages/Training";
    import News from "../components/cabinet/user/pages/News";
    import Video from "../components/cabinet/user/pages/Video";
    import UserSetting from "../components/cabinet/user/pages/Setting";
    import {mapActions, mapGetters} from "vuex";
    import InviteModal from "../components/cabinet/InviteModal";
    import TrainerCabinet from "../components/cabinet/trainer/pages/TrainerCabinet";
    import Calendar from "../components/cabinet/trainer/pages/Calendar";
    import TrainerSetting from "../components/cabinet/trainer/pages/Setting";
    import Wallet from "../components/cabinet/trainer/pages/Wallet";

    const routes = [
        {path: `/${CabinetService.lang}/user/cabinet/`, component: UserCabinet},
        {path: `/${CabinetService.lang}/user/cabinet/training`, component: Training},
        {path: `/${CabinetService.lang}/user/cabinet/news`, component: News},
        {path: `/${CabinetService.lang}/user/cabinet/videos`, component: Video},
        {path: `/${CabinetService.lang}/user/cabinet/settings`, component: UserSetting},

        {path: `/${CabinetService.lang}/trainer/cabinet/`, component: TrainerCabinet},
        {path: `/${CabinetService.lang}/trainer/cabinet/timetable`, component: Training},
        {path: `/${CabinetService.lang}/trainer/cabinet/calendar`, component: Calendar},
        {path: `/${CabinetService.lang}/trainer/cabinet/videos`, component: Video},
        {path: `/${CabinetService.lang}/trainer/cabinet/settings`, component: TrainerSetting},
        {path: `/${CabinetService.lang}/trainer/cabinet/wallet`, component: Wallet},
    ];

    export default {
        name: "CabinetPage",
        router: new VueRouter({
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
        methods: {
            ...mapActions('cabinet/setting',[
                'getRanks',
                'getTimezones'
            ])
        },
        mounted() {
            this.getRanks();
            this.getTimezones();
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
	overflow: hidden;
	min-height: 45vw;

	.left {
	  width: 14%;
	  margin-right: 3vw;
	}

	.right {
	  width: 85%;
	}
  }
</style>