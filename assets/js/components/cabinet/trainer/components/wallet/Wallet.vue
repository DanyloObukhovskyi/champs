<template>
    <div class="setting-container-body wallet">
        <div class="d-flex justify-content-center align-items-center" v-if="load">
            <small-loader/>
        </div>
        <template v-else>
            <div class="trainer-title" v-tooltip.top-center="'msg'">
                Кошелек для вывода
            </div>
            <div class="wallet-setting-body">
                <div class="image-wrapper">
                    <img src="/images/cabinet/payPal.png">
                </div>
                <div class="form-group">
                    <div class="input">
                        <input type="text" v-model="paypal" @paste="forbidPaste" placeholder="Введите адрес кошелька">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input">
                        <input type="text" v-model="paypalConfirm" @paste="forbidPaste" placeholder="Повторите адрес кошелька">
                    </div>
                </div>
            </div>
            <div class="bottom-save" @click="updateWallet" :class="{disable: loadWallet}">
                Сохранить изменения
                <i class="fas fa-check"></i>
                <svg v-if="loadWallet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
                            stroke-dasharray="164.93361431346415 56.97787143782138">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                          dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                    </circle>
                </svg>
            </div>
        </template>
    </div>
</template>

<script>
    import SmallLoader from "../../../../helpers/SmallLoader";
    import {mapGetters} from "vuex";
    import WalletService from "../../../../../services/WalletService";
    import Swal from "sweetalert2";

    export default {
        name: "Wallet",
        components: {SmallLoader},
        props: ['load'],
        data() {
            return {
                loadWallet: false,
                paypalConfirm: null,
                paypal: null
            }
        },
        computed: {
            ...mapGetters('cabinet/wallet', [
                'wallet'
            ])
        },
        methods: {
            showSuccess() {
                Swal.fire({
                    icon: 'success',
                    title: 'PayPal сохранен!',
                    showConfirmButton: false,
                    timer: 1500
                })
            },
            showError(message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Упс...',
                    text: message,
                    showConfirmButton: false,
                    timer: 1500
                })
            },
            updateWallet() {
                if (this.paypal !== this.paypalConfirm) {
                    return this.showError('Кошельки не совпадпют!')
                }
                this.loadWallet = true;

                WalletService.updatePayPal(this.paypal)
                    .then((data) => {
                        this.showSuccess();
                        this.loadWallet = false;
                    })
                    .catch(({response}) => {
                        this.loadWallet = false;
                        this.showError(response.data)
                    })
            },
            forbidPaste() {
                event.preventDefault();
            }
        },
        mounted() {
            this.paypal = this.wallet;
        }
    }
</script>

<style scoped lang="scss">
  .wallet {
	height: 17.5vw;
  }

  .image-wrapper {
	padding: 1vw;
	display: flex;
	justify-content: center;

	img {
	  height: 3vw;
	}
  }

  .wallet-setting-body {
	margin-right: 2vw;
  }
</style>