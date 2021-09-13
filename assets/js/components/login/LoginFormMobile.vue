<template>
    <transition name="slide-fades">
        <div class="login_form">
            <div class="login_block">
                <div class="closed" @click="$emit('close')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z"
                              fill="#86888A"/>
                    </svg>
                </div>
                <div class="logotype">
                    <img src="/images/Champs_logotype.svg" class="logotype"/>
                </div>
                <div class="login_title">
                    Вход в личный кабинет
                </div>
                <div class="login_input">
                    <input type="text" @input="$emit('inputEmail', $event.target.value)" required/>
                    <span>Адрес электронной почты</span>
                </div>
                <div class="login_input">
                    <input type="password" @input="$emit('inputPassword', $event.target.value)" required/>
                    <span>Пароль</span>
                </div>
                <div class="send" @click="$emit('authLogin')">
                    Войти
                </div>
                <div class="error" v-if="errorMessage !== null">
                    {{ errorMessage }}
                </div>
                <div class="subtext">Или войдите с помощью</div>
                <div class="alternate">
                    <a href="https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;openid.mode=checkid_setup&amp;openid.return_to=https%3A%2F%2Fchamps.pro%2Fru%2Foauth%2Fsteam%3Fstate=steam&amp;openid.realm=https%3A%2F%2Fchamps.pro%2Fru%2Foauth%2Fsteam&amp;openid.ns.sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select">
                        <img src="/images/login_steam.svg">
                    </a>
                    <a href="/ru/auth/discord/">
                        <img src="/images/login_discord.svg">
                    </a>
                    <!--                    <a href="/ru/auth/facebook/">-->
                    <!--                        <img src="/images/facebook.png">-->
                    <!--                    </a>-->
                    <a href="/ru/auth/google/">
                        <img src="/images/google.png">
                    </a>
                    <a href="/ru/auth/twich/">
                        <img src="/images/twich.png">
                    </a>
                    <a href="/ru/auth/vk/">
                        <img src="/images/vk.svg">
                    </a>
                </div>
                <div class="links" @click="$emit('setStep', 'registration')">
                    <div>
                        <span>Регистрация</span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "LoginFormMobile",
        inject: [
            'config'
        ],
        props: [
            'error',
            'errorMessage'
        ],
        computed: {
            steamLoginLink() {
                return this.config.STEAM_LOGIN_LINK;
            }
        },
    }
</script>

<style scoped>
    .login_form {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 30;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .login_form .login_req {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .login_form .login_block {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 1.5vw 0;
        box-shadow: 0 0.3vw 0.4vw rgba(0, 0, 0, 0.25);
        z-index: 5;
    }

    .login_form .login_block .logotype {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .login_form .login_block .logotype img {
        width: 50%;
        height: 100%;
    }

    .login_form .login_block .login_title {
        width: 100%;
        text-align: center;
        padding: 1vw 0;
        color: #111111;
        font-size: 5.1vw;
        font-weight: 500;
    }

    .login_form .login_block .login_check {
        width: 70%;
        margin: 0.1vw auto;
        display: flex;
        align-items: flex-start;
        padding-top: 1vw;
    }

    .login_form .login_block .login_check span {
        padding-left: 0.7vw;
        padding-top: 0.3vw;
    }

    .login_form .login_block .login_check a {
        margin-left: 0vw;
        font-size: 3.8vw;
        color: black;
    }

    .login_form .login_block .login_check input[type="checkbox"] {
        position: relative;
        top: 0.5vw;
        width: 1vw;
        height: 1vw;
        -webkit-appearance: none;
        outline: none;
        transition: 0.5s;
    }

    .login_form .login_block .login_check input[type="checkbox"]:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #262626;
        box-sizing: border-box;
        transition: 0.5s;
    }

    .login_form .login_block .login_check input:checked[type="checkbox"]:before {
        border-left: none;
        border-top: none;
        width: 0.75vw;
        border-color: #0f0;
        transform: rotate(45deg) translate(5px, -5px);
    }

    .login_form .login_block .login_input {
        width: 70%;
        margin: 0 auto;
        margin-top: 6.1vw;
        height: 2%;
    }

    .login_form .login_block .login_input input {
        width: 100%;
        height: 8.2vw;
        border: 0;
        border-bottom: 0.04vw solid #bdbdbd;
        font-size: 3.8vw;
        outline: none;
        z-index: 2;
        background-color: transparent;
        transition: 0.3s;
        color: #000000;
        font-weight: 500;
    }

    .login_form .login_block .login_input span {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        font-size: 3.8vw;
        color: #828282;
        transition: 0.3s;
    }

    .login_form .login_block .login_input input:focus {
        border-bottom: 0.04vw solid #000000;
    }

    .login_form .login_block .login_input input:focus ~ span {
        bottom: 60%;
        font-size: 3.65vw;
    }

    .login_form .login_block .login_input input:valid ~ span {
        bottom: 60%;
        font-size: 3.65vw;
    }

    .login_form .login_block .send {
        width: 70%;
        margin: 0 auto;
        background-color: #ff6d1d;
        color: #fff;
        text-align: center;
        font-size: 4.8vw;
        color: #ffffff;
        font-weight: 500;
        padding: 0.5vw 0;
        margin-top: 7vw;
        cursor: pointer;
        transition: 0.3s;

    }

    .login_form .login_block .send:hover {
        opacity: 0.5;
    }

    .login_form .login_block .error {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        font-size: 3.8vw;
        padding: 1vw 0;
    }

    .login_form .login_block .subtext {
        width: 100%;
        text-align: center;
        font-size: 3.8vw;
        color: #000000;
        padding: 1vw 0;
    }

    .login_form .login_block .alternate {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login_form .login_block .alternate a {
        cursor: pointer;
    }

    .login_form .login_block .alternate img {
        height: 11.3vw;
        margin: 0 0.5vw;
        transition: 0.3s;
    }

    .login_form .login_block .alternate a:nth-child(2) img {
        height: 14vw;
    }

    .login_form .login_block .alternate a:hover img {
        opacity: 0.5;
    }

    .login_form .login_block .links {
        width: 100%;
        padding-top: 1vw;
    }

    .login_form .login_block .links div {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .login_form .login_block .links div:nth-child(2) {
        margin-top: 0.5vw;
    }

    .login_form .login_block .links span {
        color: #000000;
        font-size: 3.8vw;
        text-decoration: underline;
        cursor: pointer;
    }

    .login_form .login_block .links span:hover {
        text-decoration: none;
        font-size: 3.8vw;
    }

    .login_form .login_block .closed {
        position: absolute;
        right: 0vw;
        top: 30vw;
        cursor: pointer;
    }

    .login_form .login_block .closed svg {
        width: 20.7vw;
        height: 5.7vw;
    }

    .login_form .login_block .closed:hover {
        opacity: 0.5;
    }

    .login_form .login_req_block {
        width: 17vw;
        height: auto;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 1.5vw 0;
        box-shadow: 0 0.3vw 0.4vw rgba(0, 0, 0, 0.25);
        padding: 3vw 2vw;
    }

    .login_form .login_req_block .item {
        width: 100%;
        display: flex;
        margin-top: 1vw;
    }

    .login_form .login_req_block .item:nth-child(1) {
        margin-top: 0;
    }

    .login_form .login_req_block .item div:nth-child(1) {
        width: 0.3vw;
        height: 0.3vw;
        margin-right: 0.4vw;
        background-color: #ff6d1d;
        flex-shrink: 0;
        margin-top: 0.5vw;
    }

    .login_form .login_req_block .item div:nth-child(2) {
        width: 100%;
        font-size: 3.75vw;
        color: #111111;
    }
</style>