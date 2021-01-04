<template>
    <div class="setting">
        <cabinet-first-banner :banner="banner" v-if="banner !== null"/>
        <div class="setting-body" v-if="user !== null">
            <div class="setting-wrapper" >
                <general-settings/>
                <avatar/>
            </div>
            <div class="setting-wrapper">
                <password/>
                <discord :discord="user.discord"/>
            </div>
        </div>
    </div>
</template>

<script>
    import CabinetFirstBanner from "../personalCabinet/CabinetFirstBanner";
    import MarketplaceService from "../../../services/MarketplaceService";
    import GeneralSettings from "../setting/GeneralSettings";
    import Avatar from "../setting/Avatar";
    import Password from "../setting/Password";
    import Discord from "../setting/Discord";
    import {mapGetters} from "vuex";

    export default {
        name: "Setting",
        components: {
            Discord,
            Password,
            Avatar,
            GeneralSettings,
            CabinetFirstBanner
        },
        computed: {
            ...mapGetters([
                'user',
                'loadUser'
            ]),
        },
        data() {
            return {
                banner: null,
            }
        },
        methods: {
            getFirstBanner() {
                MarketplaceService.getTrainerBanner()
                    .then(data => {
                        this.banner = data;
                    })
            },
        },
        mounted() {
            this.getFirstBanner();
        }
    }
</script>

<style scoped lang="scss">
    .setting-body {
        -webkit-animation: animation-translate-right 1500ms linear both;
        animation: animation-translate-right 1500ms linear both;
    }

    .setting-wrapper {
        margin: .3vw 0 1vw 1vw;
        display: flex;

        .setting-container-body:nth-child(1) {
            width: 70%;
        }

        .setting-container-body:nth-child(2) {
            width: 30%;
        }
    }

    .dark {
        .setting-wrapper {
            .setting-container-body:nth-child(1) {
                background: rgb(61, 65, 70);
                background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
                background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
                background: linear-gradient(90deg, rgba(61, 65, 70, 1) 0%, rgba(37, 40, 42, 1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);
            }

            .setting-container-body:nth-child(2) {
                background: rgb(37,40,42);
                background: -moz-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
                background: -webkit-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
                background: linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a",endColorstr="#3d4146",GradientType=1);
            }
        }
    }
</style>