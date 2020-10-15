<template>
    <div class="slides">
        <transition name="slide-fades">
            <div class="login_form" v-if="isShow" v-show="isShow">
                <div class="login_block">
                    <div class="logotype">
                        <img src="/images/Champs_logotype.svg" class="logotype"/>
                    </div>
                    <div class="login_title">
                        Вход в личный кабинет
                    </div>
                    <div class="login_input">
                        <input type="text" name="email" required v-model="email"/>
                        <span>Адрес электронной почты</span>
                    </div>
                    <div class="login_input">
                        <input type="password" required name="password" v-model="password"/>
                        <span>Пароль</span>
                    </div>
                    <input type="hidden" name="_csrf_token" :value="csrf_token"/>
                    <div class="send" @click="authLogin" :style="{opacity: block ? '0.5' : '1'}">
                        Войти
                    </div>
                    <div class="error" v-if="error">
                        Неправильный логин или пароль
                    </div>
                    <div class="subtext">Или войдите с помощью</div>
                    <div class="alternate">
                        <a :href="steamLoginLink"><img
                                src="/images/login_steam.svg"/></a>
                        <a><img src="/images/login_discord.svg" style="display: none;"/></a>
                        <a><img src="/images/login_epic.svg" style="display: none;"/></a>
                    </div>
                    <div class="links" @click="showRegistration = true">
                        <div><span>Регистрация</span></div>
                    </div>
                    <div class="closed" @click="show = false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z"
                                  fill="#86888A"/>
                        </svg>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="slide-fades">
            <div class="login_form" v-if="isShowRegistration" v-show="isShowRegistration">
                <div class="login_req">
                    <div class="login_block">
                        <div class="logotype">
                            <img src="/images/Champs_logotype.svg" class="logotype"/>
                        </div>
                        <div class="login_title">
                            Регистрация
                        </div>
                        <div class="login_input">
                            <input type="text" required value="" v-model="email"/>
                            <span>Адрес электронной почты</span>
                        </div>
                        <div class="login_input">
                            <input type="password" required value="" v-model="password"/>
                            <span>Пароль</span>
                        </div>
                        <div class="login_check">
                            <label><input type="checkbox" required v-model="check"/></label>
                            <span><a href="/terms-of-use" target="_blank">Ознакомлен с правилами использования сервиса «Champs»</a></span>
                        </div>
                        <div class="send" @click="authRegistration" :style="{opacity: block ? '0.5' : '1'}">
                            Зарегистрироваться
                        </div>
                        <div class="error" v-if="error">
                            Произошла ошибка
                        </div>
                        <div class="subtext">Или войдите с помощью</div>
                        <div class="alternate">
                            <a :href="steamLoginLink">
                                <img src="/images/login_steam.svg"/>
                            </a>
<!--                            <a><img src="/images/login_discord.svg"/></a>-->
<!--                            <a><img src="/images/login_epic.svg"/></a>-->
                        </div>
                        <div class="links">
<!--                            <div><span>Восстановление пароля</span></div>-->
                            <div><span @click="showRegistration = false">Вход в личный кабинет</span></div>
                        </div>
                        <div class="closed" @click="showRegistration = false">
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
<!--        <transition name="slide-fades">-->
<!--            <div class="login_form">-->
<!--                <div class="login_block">-->
<!--                    <div class="logotype">-->
<!--                        <img src="/images/Champs_logotype.svg" class="logotype"/>-->
<!--                    </div>-->
<!--                    <div class="login_title">-->
<!--                        Восстановление пароля-->
<!--                    </div>-->
<!--                    <div class="login_input">-->
<!--                        <input type="text" required value=""/>-->
<!--                        <span>Адрес электронной почты</span>-->
<!--                    </div>-->
<!--                    <div class="send">-->
<!--                        Отправить письмо на почту-->
<!--                    </div>-->
<!--                    <div class="links">-->
<!--                        <div><span>Авторизация</span></div>-->
<!--                        <div><span>Регистрация</span></div>-->
<!--                    </div>-->
<!--                    <div class="closed">-->
<!--                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">-->
<!--                            <path d="M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z"-->
<!--                                  fill="#86888A"/>-->
<!--                        </svg>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </transition>-->
    </div>
</template>

<script>
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

        },
        data(){
            return {
                load: true,
                email: null,
                password: null,
                block: false,
                check: false,
                showRegistration: false,
            }
        },
        computed: {
            isShow(){
                return !this.load && this.show && !this.showRegistration;
            },
            isShowRegistration(){
                return !this.load && this.show && this.showRegistration;
            },
            steamLoginLink(){
                return this.config.STEAM_LOGIN_LINK;
            }
        },
        methods: {
            authLogin(){
                let formData = new FormData();

                formData.append('email', this.email);
                formData.append('password', this.password);
                formData.append('_csrf_token', this.axios._csrf_token);

                if (!this.blockAuth) {
                    this.blockAuth = true;

                    this.axios.post('/ru/login', formData)
                        .then((res) => {
                            this.blockAuth = false;
                            if (res.data.error) {
                                this.error = true;
                            } else {
                                this.show = false;

                                if (this.redirect !== null){
                                    window.location.assign(this.redirect);
                                } else {
                                    window.location.reload();
                                }
                            }
                        })
                }
            },
            authRegistration() {
                let formData = new FormData();

                formData.append('user[email]', this.email);
                formData.append('user[password][first]', this.password);
                formData.append('user[password][second]', this.password);

                if (!this.block) {
                    this.block = true;
                    this.axios.post('/ru/registration', formData)
                        .then((res) => {
                            this.block = false;
                            if (res.data.error) {
                                this.error = true;
                            } else {
                                this.authLogin();
                            }
                        })
                        .catch(() => {
                            this.error = true;
                        })
                }
            },
        },
        mounted() {
            window.onload = () => {
                this.load = false;
            }
        }
    }
</script>

<style scoped>

</style>