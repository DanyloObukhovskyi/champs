<template>
    <div class="setting">
        <div class="setting-body" v-if="user !== null">
            <div class="setting-wrapper">
                <wallet-data :load="load"/>
                <lesson-price :load="load"/>
            </div>
            <div class="setting-wrapper">
                <students-history :load="load"/>
                <wallet-container :load="load"/>
            </div>
        </div>
    </div>
</template>

<script>
    import WalletData from "../components/wallet/WalletData";
    import LessonPrice from "../components/wallet/LessonPrice";
    import {mapGetters} from "vuex";
    import WalletService from "../../../../services/WalletService";
    import StudentsHistory from "../components/wallet/StudentsHistory";
    import WalletContainer from "../components/wallet/Wallet";

    export default {
        name: "Wallet",
        components: {
            StudentsHistory,
            WalletData,
            LessonPrice,
            WalletContainer
        },
        data() {
            return {
                load: false
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        mounted() {
            this.load = true;
            WalletService.getTrainerWalletData()
                .then(data => {
                    this.$store.dispatch('cabinet/wallet/getWalletData', data);
                    this.load = false;
                })
        }
    }
</script>

<style scoped lang="scss">
  .setting-body {
	-webkit-animation: animation-translate-right 1500ms linear both;
	animation: animation-translate-right 1500ms linear both;
    margin-bottom: -1vw;
  }

  .setting-wrapper {
	margin: 0 .3vw 1vw 1vw;
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
		background: rgb(37, 40, 42);
		background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
		background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
		background: linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#3d4146", GradientType=1);
	  }
	}
  }
</style>