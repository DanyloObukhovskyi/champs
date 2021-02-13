<template>
    <div class="cabinet-wrapper">
        <cabinet-first-banner/>
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
import CabinetService from "../../../../services/CabinetService";

export default {
    name: "UserCabinet",
    components: {
        CabinetBottomBanner,
        CabinetSecondBanner,
        CabinetFirstBanner,
        CabinetVideoSlider
    },
    computed: {
        ...mapGetters([
            'loadUser'
        ])
    }
}
</script>

<style scoped lang="scss">
.cabinet-wrapper {
  width: 70vw;
  margin-bottom: -1vw;
}
</style>