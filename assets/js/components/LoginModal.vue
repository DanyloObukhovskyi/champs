<template>
    <div class="slides" v-if="!isMobile">
        <login
                v-show="checkStep('login')"
                @setStep="setStep"
                @authLogin="authLogin"
                @close="close"
                @inputEmail="(value) => {email = value;}"
                @inputPassword="(value) => {password = value;}"
                :error="error"
                :error-message="errorMessage"
                :email="email"
                :password="password">
            <slot></slot>
        </login>
        <registration
                v-show="checkStep('registration')"
                @setStep="setStep"
                @close="close"
                @inputEmail="(value) => {email = value}"
                @inputPassword="(value) => {password = value}"
                @input="(value) => {check = value}"
                @sendConfirmCode="sendConfirmCode"
                :email="email"
                :password="password"
                :check="check">
            <slot></slot>
        </registration>
        <confirm-code
                v-show="checkStep('confirmCode')"
                @setStep="setStep"
                @close="close"
                @registration="registration"
                @sendConfirmCode="sendConfirmCode"
                :codeConfirmed="codeConfirmed"
                :email="email">
        </confirm-code>
        <nick-name
                v-show="checkStep('nickname')"
                @setStep="setStep"
                @close="close"
                :email="email">
        </nick-name>
        <congratulation
                v-show="checkStep('congratulation')"
                @setStep="setStep"
                @close="close">
        </congratulation>
    </div>
    <div class="slides" v-else>
        <login-form-mobile
                v-show="checkStep('login')"
                ref="login-mobile"
                @setStep="setStep"
                @authLogin="authLogin"
                @close="close"
                @inputEmail="(value) => {email = value;}"
                @inputPassword="(value) => {password = value;}"
                :error="error"
                :error-message="errorMessage"
                :email="email"
                :password="password">
            <slot></slot>
        </login-form-mobile>
        <registration-form-mobile
                v-show="checkStep('registration')"
                @setStep="setStep"
                @close="close"
                @inputEmail="(value) => {email = value}"
                @inputPassword="(value) => {password = value}"
                @input="(value) => {check = value}"
                @sendConfirmCode="sendConfirmCode"
                :email="email"
                :password="password"
                :check="check">
            <slot></slot>
        </registration-form-mobile>
        <confirm-code-mobile
                v-show="checkStep('confirmCode')"
                @setStep="setStep"
                @close="close"
                @registration="registration"
                @sendConfirmCode="sendConfirmCode"
                :codeConfirmed="codeConfirmed"
                :email="email">
        </confirm-code-mobile>
        <nick-name-mobile
                v-show="checkStep('nickname')"
                @setStep="setStep"
                @close="close"
                :email="email">
        </nick-name-mobile>
        <congratulation-mobile
                v-show="checkStep('congratulation')"
                @setStep="setStep"
                @close="close">
        </congratulation-mobile>
    </div>
</template>

<script>
import NicknameForm from "./login/NicknameForm";
import ConfirmCodeForm from "./login/ConfirmCodeForm";
import RegistrationForm from "./login/RegistrationForm";
import CongratulationsForm from "./login/CongratulationsForm";
import LoginForm from "./login/LoginForm";
import ConfirmCodeFormMobile from "./login/ConfirmCodeFormMobile";
import RegistrationFormMobile from "./login/RegistrationFormMobile";
import LoginFormMobile from "./login/LoginFormMobile";
import CongratulationsFormMobile from "./login/CongratulationsFormMobile";
import NicknameFormMobile from "./login/NicknameFormMobile";
import Service from "../services/Service";
import {mapGetters} from "vuex";

const service = new Service();

export default {
    name: "LoginModal",
    inject: [
        'config'
    ],
    props: {
        show: Boolean,
        showFirst: {
            default: 'login'
        },
        token: {
            default: null
        },
        isMobile: {
            default: false
        }
    },
    data() {
        return {
            error: false,
            step: 'registration',
            email: null,
            password: null,
            check: false,
            confirmCode: null,
            codeConfirmed: false,
            errorMessage: null,
            successMessage: null,
        }
    },
    components: {
        'nick-name': NicknameForm,
        'confirm-code': ConfirmCodeForm,
        'registration': RegistrationForm,
        'login': LoginForm,
        'congratulation': CongratulationsForm,
        'login-form-mobile': LoginFormMobile,
        'registration-form-mobile': RegistrationFormMobile,
        'confirm-code-mobile': ConfirmCodeFormMobile,
        'congratulation-mobile': CongratulationsFormMobile,
        'nick-name-mobile': NicknameFormMobile
    },
    watch: {
        show() {
            this.step = this.showFirst;
        },
        step(newStep) {
            if (newStep === 'finish') {
                this.authLogin();
            }
        }
    },
    methods: {
        setStep(step) {
            this.step = step;
        },
        authLogin() {
            let formData = new FormData();

            formData.append('email', this.email);
            formData.append('password', this.password);
            formData.append('_csrf_token', axios._csrf_token);
            formData.append('ajax', 1);

            axios.post('/ru/login', formData)
                .then((res) => {
                    window.location = window.location.href.split("?")[0];
                })
                .catch(({response}) => {
                    this.error = true;

                    this.errorMessage = response.data;
                })
        },
        registration() {
            const formData = new FormData();

            formData.append('user[email]', this.email);
            formData.append('user[password][first]', this.password);
            formData.append('user[password][second]', this.password);

            if (this.token !== null) {
                formData.append('inviteToken', this.token);
            }
            axios.post('/ru/registration', formData)
                .then((res) => {
                    if (res.data.error) {
                        this.error = true;
                    }
                })
                .catch(() => {
                    this.error = true;
                })
        },
        close() {
            this.$store.dispatch('closeLogin');
        },
        checkStep(step) {
            return this.show && this.step === step;
        },
        sendConfirmCode() {
            const formData = new FormData();
            formData.append('email', this.email);

            axios.post('/ru/generate/confirm/code', formData)
        }
    },
    mounted() {

    }
}
</script>