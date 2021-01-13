<template>
    <div class="wallet">
        <div class="title">
            Заработано
        </div>
        <div class="wallet-wrapper">
            <div class="wallet-body">
                <div class="month-earned" v-for="(earn, title) in earned">
                    <div class="earn-title">
                        {{title}}:
                    </div>
                    <div class="earned">
                        {{decoratePrice(earn)}} p
                    </div>
                </div>
            </div>
            <div class="show-more">
                <router-link :to="walletPage">
                    <div class="text">
                        Смотреть все
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import CabinetService from "../../../../../services/CabinetService";

    export default {
        name: "SmallWallet",
        props: ['earned'],
        computed: {
            walletPage() {
                return `/${CabinetService.lang}/trainer/cabinet/wallet`;
            }
        },
        methods: {
            decoratePrice(price) {
                const cost = price.toLocaleString(
                    'ru-RU',
                    {
                        style: 'currency',
                        currency: 'RUB' ,
                        maximumSignificantDigits: 2
                    }
                );
                return cost.substring(0, cost.length-1);
            }
        }
    }
</script>

<style scoped lang="scss">
  .wallet {
	-webkit-animation: animation-translate-right 1500ms linear both;
	animation: animation-translate-right 1500ms linear both;

	.title {
	  font-size: 1.3vw;
	  color: #9d9fa0;
	  font-weight: 500;
	}

	.wallet-body {
	  margin-top: 1vw;
	  background-color: #eff0f0;
	  border-radius: .5vw;
	  padding: 1vw 1vw;

      .month-earned {
		padding: 1vw;
		margin-bottom: .7vw;

        .earn-title {
		  font-size: 1.2vw;
		  color: #9d9fa0;
		  font-weight: 500;
        }

        .earned {
		  color: #e16423;
		  font-size: 1.7vw;
		  font-weight: 600;
		  margin-top: .7vw;
        }
      }
	}

	.show-more {
	  animation: animation-translate-right 1500ms linear both;
	  position: absolute;
	  top: 0;
	  right: 0;
	  width: 3vw;
	  height: 100%;
	  background-color: #e16423;
	  border-radius: 0 .5vw .5vw 0;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  transition: background-color .5s ease-in-out;
	  cursor: pointer;

	  .text {
		transform: rotate(-180deg);
		writing-mode: vertical-rl;
		font-size: 1.2vw;
		color: white;
		padding-left: .3vw;
	  }

	  &:hover {
		background-color: #ff7525;
	  }
	}
  }

  .dark {
    .wallet {
      .wallet-body {
		background: rgb(37,40,42);
		background: -moz-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
		background: -webkit-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
		background: linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a",endColorstr="#3d4146",GradientType=1);
      }
    }
  }
</style>