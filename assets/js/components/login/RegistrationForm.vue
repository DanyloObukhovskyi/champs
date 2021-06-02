<template>
    <transition name="slide-fades">
        <div class="login_form">
            <div class="login_req">
                <div class="login_block">
                    <div class="logotype">
                        <img src="/images/Champs_logotype.svg" class="logotype"/>
                    </div>
                    <div class="login_title">
                        Регистрация
                    </div>
                    <div class="login_input">
                        <input
                                type="text"
                                :value="email"
                                @input="$emit('inputEmail', $event.target.value)"/>
                        <span>Адрес электронной почты</span>
                    </div>
                    <div class="login_input">
                        <input
                                type="password"
                                :value="password"
                                @input="$emit('inputPassword', $event.target.value)"/>
                        <span>Пароль</span>
                    </div>
                    <div class="login_check">
                        <label>
                            <input
                                    type="checkbox"
                                    :checked="check"
                                    @change="$emit('input', $event.target.value)"/>
                        </label>
                        <span>
                            <a href="/ru/terms-of-use" target="_blank">Ознакомлен с правилами использования сервиса «Champs»</a>
                        </span>
                    </div>
                    <div class="send" @click="checkIsEmailValid" :style="{opacity: $parent.check ? '1': '.5'}">
                        Зарегистрироваться
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
<!--                        <a href="/ru/auth/facebook/">-->
<!--                            <img src="/images/facebook.png">-->
<!--                        </a>-->
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
                    <div class="links">
                        <div>
                            <span @click="$emit('setStep', 'login')">Вход в личный кабинет</span>
                        </div>
                    </div>
                    <div class="closed" @click="close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z"
                                  fill="#86888A"/>
                        </svg>
                    </div>
                </div>
                <div class="login_req_block">
                    <div class="item">
                        <div></div>
                        <div>Тренеруйтесь вместе с лучшими игроками в ваших любимых играх</div>
                    </div>
                    <div class="item">
                        <div></div>
                        <div>Последние новости и события</div>
                    </div>
                    <div class="item">
                        <div></div>
                        <div>Великолепное сообщество</div>
                    </div>
                    <div class="item">
                        <div></div>
                        <div>Трансляции и результаты матчей</div>
                    </div>
                    <div class="item">
                        <div></div>
                        <div>Аналитика от профессионалов</div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        inject: [
            'config'
        ],
        name: "RegistrationForm",
        props: [
            'password',
            'email',
            'check'
        ],
        data() {
            return {
                errorMessage: null
            }
        },
        computed: {
            steamLoginLink() {
                return this.config.STEAM_LOGIN_LINK;
            },
            emailForm() {
                const formData = new FormData();
                formData.append('email', this.email);

                return formData;
            }
        },
        methods: {
            generateConfirmCode() {
                if (this.check) {
                    this.$emit('sendConfirmCode')
                    this.$emit('setStep', 'confirmCode')
                }
            },
            checkIsEmailValid() {
                axios.post('/ru/check/email', this.emailForm)
                    .then(({data}) => {
                        this.generateConfirmCode();
                    }).catch(({response}) => {
                    this.errorMessage = response.data;
                })
            },
            close() {
                this.$emit('close')
            }
        },
    }
</script>