<template>
    <transition name="slide-fades">
        <div class="login_form">
            <div class="login_block">
                <div class="logotype">
                    <img src="/images/Champs_logotype.svg" class="logotype"/>
                </div>
                <div class="login_title">
                    Подтверждение почты
                </div>
                <div class="login_input d-flex">
                    <input type="text" required v-model="confirmCode"/>
                    <span>Код подтверждения</span>
                    <button type="button"
                            class="question pt-2"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Не пришел код? Проверьте папку Спам или попытайтесь отправить еще раз.">
                        <i class="fas fa-question"></i>
                    </button>
                </div>
                <div class="send" @click="sendRegistrationConfirm">
                    Отправить
                </div>
                <div class="send resend"
                     v-if="successMessage == null"
                     @click="resendConfirmCode"
                     v-html="'Отправить код повторно ' + timerMessage"
                     :class="{disabled: timer > 0}">
                </div>
                <div class="error" v-if="errorMessage !== null">
                    {{ errorMessage }}
                </div>
                <div class="error text-success" v-if="successMessage !== null">
                    {{ successMessage }}
                </div>
                <div class="links d-flex">
                    <div class="mt-1" @click="goToRegistration">
                        <span>Back</span>
                    </div>
                    <div class="mt-1"  @click="showNickname">
                        <span :class="{disabled: !codeConfirmed}">Next</span>
                    </div>
                </div>
                <div class="closed">
                    <svg @click="close"
                         xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z" fill="#86888A"/>
                    </svg>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ConfirmCodeForm",
        inject: [
            'axios',
            'config'
        ],
        props: [
            'email',
        ],
        data(){
            return {
                codeConfirmed: false,
                confirmCode: null,
                errorMessage: null,
                successMessage: null,
                timer: 0,
            }
        },
        computed: {
            timerMessage() {
                let message = '';

                if (this.timer > 0){
                    message = `через <strong>${this.timer}</strong> сек`;
                }
                return message
            }
        },
        methods: {
            sendRegistrationConfirm(){
                this.errorMessage = null;
                this.successMessage = null;

                const formData = new FormData();

                formData.append('user[code]', this.confirmCode);
                formData.append('user[email]', this.email);

                this.axios.post('/ru/check/confirm/code', formData)
                    .then(({data}) => {
                        this.successMessage = data;
                        this.codeConfirmed = true;

                        this.$emit('registration')
                        this.$emit('setStep', 'nickname')
                    }).catch(({response}) => {
                    this.errorMessage = response.data;
                    this.codeConfirmed = false;
                })
            },
            showNickname(){
                if (this.codeConfirmed){
                    this.$emit('setStep', 'nickname')
                }
            },
            close(){
                this.$emit('close')
            },
            resendConfirmCode(){
                if (this.timer === 0){
                    this.confirmCode = null;
                    this.errorMessage = null;
                    this.successMessage = null;

                    this.timer = 30;
                    this.runTimer()

                    this.$emit('sendConfirmCode')
                }
            },
            runTimer(){
                const self = this;

                if (self.timer > 0){
                    setTimeout(() => {
                        self.timer -= 1;
                        self.runTimer()
                    }, 1000)
                }
            },
            goToRegistration(){
                this.$emit('setStep', 'registration');
                this.timer = 0;
                this.confirmCode = null;

                this.errorMessage = null;
                this.successMessage = null;
            }
        },
        mounted() {
            $('[data-toggle="tooltip"]').tooltip()
        }
    }
</script>

<style scoped>
    .question{
        opacity: .5;
        cursor: pointer;
        background: transparent;
        border: 0 solid;
        outline: none;
    }
    .question:hover{
        opacity: 1;
    }
    .login_form .login_block .resend{
        margin-top: 0.5vw;
        margin-top: 0.5vw;
        justify-content: center;
        align-items: center;
        padding: 0.5vw 0;
        color: #000000;
        border: 0.04vw solid #CFDCF3;
        background-color: #FFFFFF;
        font-size: 0.7vw;
        letter-spacing: 0.05vw;
        font-weight: 500;
        cursor: pointer;
        transition: 0.3s;
    }
    .login_form .login_block .resend.disabled{
        opacity: .5;
        cursor: not-allowed;
    }
</style>