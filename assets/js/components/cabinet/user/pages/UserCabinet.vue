<template>
    <div class="cabinet-wrapper">
        <cabinet-first-banner v-if="banner !== null" :banner="banner"/>
        <cabinet-second-banner v-if="!loadUser"/>
        <cabinet-video-slider/>
        <cabinet-bottom-banner v-if="!loadUser"/>
    </div>
</template>

<script>
    import CabinetFirstBanner from "../components/cabinet/CabinetFirstBanner";
    import MarketplaceService from "../../../../services/MarketplaceService";
    import CabinetSecondBanner from "../components/cabinet/CabinetSecondBanner";
    import CabinetVideoSlider from "../components/cabinet/CabinetVideoSlider";
    import CabinetBottomBanner from "../../CabinetBottomBanner";
    import {mapGetters} from "vuex";

    export default {
        name: "UserCabinet",
        components: {
            CabinetBottomBanner,
            CabinetSecondBanner,
            CabinetFirstBanner,
            CabinetVideoSlider
        },
        data() {
            return {
                banner: null,
            }
        },
        computed: {
            ...mapGetters([
                'loadUser'
            ]),
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
    .cabinet-wrapper {
        width: 70vw;
    }
</style>