<template>
    <div class="cabinet-wrapper">
        <cabinet-first-banner
                v-if="banner !== null"
                :banner="banner">
        </cabinet-first-banner>
        <cabinet-second-banner/>
        <cabinet-video-slider/>
        <cabinet-bottom-banner/>
    </div>
</template>

<script>
    import CabinetFirstBanner from "../personalCabinet/CabinetFirstBanner";
    import MarketplaceService from "../../../services/MarketplaceService";
    import CabinetSecondBanner from "../personalCabinet/CabinetSecondBanner";
    import CabinetVideoSlider from "../personalCabinet/CabinetVideoSlider";
    import CabinetBottomBanner from "../CabinetBottomBanner";

    export default {
        name: "Cabinet",
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