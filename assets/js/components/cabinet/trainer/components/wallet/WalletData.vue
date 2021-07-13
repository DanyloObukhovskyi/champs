<template>
    <div class="setting-container-body wallet-data">
        <div class="d-flex justify-content-center align-items-center" v-if="load">
            <small-loader/>
        </div>
        <template v-else>
            <div class="trainer-title">
                Данные по кошельку
            </div>
            <div class="wallet-data-body">
                <div class="wallet-data-wrapper">
                    <div class="wallet-data-row">
                        <div class="title">
                            Баланс:
                        </div>
                        <div class="cost-wrapper">
                            <span v-title="'Сумма, которая заработана, но находится в холде на 7 рабочих дней'">
                                {{ decoratePrice(balance) }} p
                            </span>
                        </div>
                    </div>
                    <div class="wallet-data-row">
                        <div class="title">
                            Доступно к выводу:
                        </div>
                        <div class="cost-wrapper">
                            <span v-title="'Сумма, которую можно вывести'">
                                 {{ decoratePrice(available) }} p
                            </span>
                            <button class="purse-btn" @click="checkout" v-if="available > 0 && showButton">
                                Вывести
                            </button>
                            <button class="purse-btn disable" v-else>
                                Вывести
                            </button>
                        </div>
                    </div>
                </div>
                <div class="wallet-data-wrapper">
                    <div class="wallet-data-row" v-for="(earn, title) in earned">
                        <div class="title">
                            {{ title }}:
                        </div>
                        <div class="cost-wrapper">
                            {{ decoratePrice(earn) }} p
                        </div>
                    </div>
                </div>
            </div>
            <div class="trainer-title">
                История вывода средств
            </div>
            <div class="history">
                <div class="history-row" v-for="history in slicedHistory">
                    {{ decorateDate(history.date) }} <span>{{ history.amount }} &#8381;</span>
                </div>
                <div class="show-more" @click="showAllHistory = !showAllHistory" v-if="transactionHistory.length > 3">
                    {{ showAllHistory ? 'Скрыть' : 'Показать все' }}
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import SmallLoader from "../../../../helpers/SmallLoader";
    import WalletService from "../../../../../services/WalletService";
    import Swal from "sweetalert2";

    export default {
        name: "WalletData",
        components: {SmallLoader},
        data() {
            return {
                showAllHistory: false,
                showButton: true
            }
        },
        computed: {
            ...mapGetters('cabinet/wallet', [
                'balance',
                'available',
                'earned',
                'transactionHistory'
            ]),
            slicedHistory() {
                if (!this.showAllHistory && this.transactionHistory.length > 3) {
                    return this.transactionHistory.slice(0, 3);
                } else {
                    return this.transactionHistory;
                }
            }
        },
        methods: {
            showSuccess() {
                Swal.fire({
                    icon: 'success',
                    title: 'Заявка отправленна!',
                    showConfirmButton: false,
                    timer: 1500
                })
            },
            decoratePrice(price) {
                const cost = price.toLocaleString(
                    'ru-RU',
                    {
                        style: 'currency',
                        currency: 'RUB',
                    }
                );
                return cost.substring(0, cost.length - 5);
            },
            decorateDate(date) {
                const dateTime = new Date(date);

                const day = dateTime.getDate() > 9 ? dateTime.getDate() : `0${dateTime.getDate()}`;
                const month = dateTime.getMonth() + 1 > 9 ? dateTime.getMonth() + 1: `0${dateTime.getMonth() + 1}`;

                return `${day}.${month}.${dateTime.getFullYear()} ${dateTime.getHours()}:${dateTime.getMinutes()}`;
            },
            checkout() {
                this.showButton = false;
                if(this.available < 1000){
                    Swal.fire({
                        icon: 'error',
                        title: 'Вы указали не верную сумму, минимальная сумма к выводу 1000р',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.showButton = true;
                } else {
                    WalletService.checkout()
                        .then(data => {
                            this.$store.dispatch('cabinet/wallet/getWalletData', data);
                            this.showSuccess();
                            this.showButton = true;
                        })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
  .wallet-data-body {
	display: flex;
	margin-left: 3vw;
	margin-top: 1vw;
	justify-content: space-between;
	margin-right: 1vw;

	.wallet-data-wrapper {
	  height: 12vw;
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
	  margin-bottom: 1vw;

	  .wallet-data-row {
		.title {
		  font-size: 1.3vw;

		  &:first-letter {
			text-transform: uppercase;
		  }
		}

		.cost-wrapper {
		  color: #e16423;
		  font-size: 1.7vw;
		  font-weight: 600;
		  margin-top: .7vw;

		  .purse-btn {
			font-size: 1vw;
			color: white;
			background: #ff6d1d;
			outline: none;
			cursor: pointer;
			border: unset;
			border-radius: .3vw;
			margin-left: 1.5vw;
			padding-bottom: .1vw;

			&:hover {
			  background: #ff7525;
			}

            &.disable {
              background: #6b6b6b;
              cursor: not-allowed;
            }
		  }
		}
	  }
	}
  }

  .history {
	margin-left: 3vw;
	margin-top: .5vw;
	color: #9d9fa0;

	.history-row {
	  font-size: 1vw;
	  margin-top: 1vw;

	  span {
		margin-left: 3vw;
	  }
	}

	.show-more {
	  font-size: 1vw;
	  margin-top: 1vw;
	  color: #9d9fa0;
	  cursor: pointer;
	  transition: all .5s ease;
	  width: 10vw;

	  &:hover {
		color: white;
	  }
	}
  }
</style>