<template>
    <div class="cabinet-header">
        <div class="coins">
            <div class="xp">
                <div class="cube">
                    0
                </div>
                200xp
            </div>
            <div class="coin silver">
                <img src="/images/cabinet/coinSilver.png" alt="silver">
                {{ user.balance.hasOwnProperty('silverCoin') ? user.balance.silverCoin : 0 }}
            </div>
            <div class="coin gold">
                <img src="/images/cabinet/coinGold.png" alt="gold">
                {{ user.balance.hasOwnProperty('goldCoin') ? user.balance.goldCoin : 0 }}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "CabinetHeader",
        computed: {
            ...mapGetters([
                'user'
            ])
        }
    }
</script>

<style scoped lang="scss">
  @import '../../../css/animations.css';

  .cabinet-header {
	background-color: #eff0f0;
	-webkit-animation: animation-translate-right 1500ms linear both;
	animation: animation-translate-right 1500ms linear both;
  }

  .coins {
	display: flex;
	align-items: center;
	height: 2.3vw;
	font-style: oblique;
	color: #9d9fa0;

	.xp {
	  display: flex;
	  align-items: center;
	  font-size: .9vw;
	  margin-left: 2vw;

	  .cube {
		clip-path: polygon(13% 0, 100% 0%, 85% 100%, 0% 100%);
		background-color: #ff6d1d;
		display: flex;
		width: 2.5vw;
		height: 1.5vw;
		align-items: center;
		justify-content: center;
		font-size: 1vw;
		color: #fff;
		font-weight: 600;
		padding-right: .2vw;
	  }
	}

	.coin {
	  display: flex;
	  align-items: center;
	  margin-left: 2vw;


	  img {
		margin-right: .3vw;
		width: 1.4vw;
	  }

	  &.gold {
		margin-left: 1.5vw;
	  }
	}
  }

  .dark {
	.cabinet-header {
	  background-color: #1e2123;
	}
  }
</style>