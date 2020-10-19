<template>
    <div class="slides">
        <login
                v-show="checkStep('login')"
                @setStep="setStep"
                @authLogin="authLogin"
                @close="close"
                @inputEmail="(value) => {email = value}"
                @inputPassword="(value) => {password = value}"
                :error="error"
                :email="email"
                :check="password">
        </login>
        <registration
                v-show="checkStep('registration')"
                @setStep="setStep"
                @close="close"
                @inputEmail="(value) => {email = value}"
                @inputPassword="(value) => {password = value}"
                :email="email"
                :check="check"
                v-model="check">
        </registration>
        <confirm-code
                v-show="checkStep('confirmCode')"
                @setStep="setStep"
                @close="close"
                @registration="registration"
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
</template>

<script>
    import NicknameForm from "./login/NicknameForm";
    import ConfirmCodeForm from "./login/ConfirmCodeForm";
    import RegistrationForm from "./login/RegistrationForm";
    import LoginForm from "./login/LoginForm";
    import CongratulationsForm from "./login/CongratulationsForm";

    export default {
        name: "LoginModal",
        inject: [
            'axios',
            'config'
        ],
        props: {
            show: Boolean,
            redirect: {
                default: null
            },
            showFirst: {
                default: 'login'
            }
        },
        data(){
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
            'congratulation': CongratulationsForm
        },
        watch: {
            show(){
                this.step = this.showFirst;
            },
            step(newStep){
                if (newStep === 'finish'){
                    this.authLogin();
                }
            }
        },
        methods: {
            setStep(step) {
                this.step = step;
            },
            authLogin(){
                console.log('123')
                let formData = new FormData();

                formData.append('email', this.email);
                formData.append('password', this.password);
                formData.append('_csrf_token', this.axios._csrf_token);

                this.axios.post('/ru/login', formData)
                    .then((res) => {
                        if (res.data.error) {
                            this.error = true;
                        } else {
                            if (this.redirect !== null){
                                window.location.assign(this.redirect);
                            } else {
                                window.location.reload();
                            }
                        }
                    })
            },
            registration(){
                const formData = new FormData();

                formData.append('user[email]', this.email);
                formData.append('user[password][first]', this.password);
                formData.append('user[password][second]', this.password);
                formData.append('_csrf_token', this.axios._csrf_token);

                this.axios.post('/ru/registration', formData)
                    .then((res) => {
                        if (res.data.error) {
                            this.error = true;
                        }
                    })
                    .catch(() => {
                        this.error = true;
                    })
            },
            close(){
                this.show = false;
            },
            checkStep(step){
                return this.show && this.step === step;
            }
        }
    }
</script>