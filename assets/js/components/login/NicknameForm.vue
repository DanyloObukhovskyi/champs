<template>
    <transition name="slide-fades">
        <div class="login_form">
            <div class="login_block">
                <div class="logotype">
                    <img src="/images/Champs_logotype.svg" class="logotype"/>
                </div>
                <div class="login_title">
                    Введите свой никнейм
                </div>
                <div class="login_input">
                    <input type="text" name="email" required v-model="nickname"/>
                    <span>Логин (Nickname)</span>
                </div>
                <div class="error" v-if="errorMessage !== null">
                    {{ errorMessage }}
                </div>
                <div class="send" @click="setNickname">
                    Завершить регестрацию
                </div>
                <div class="closed" @click="close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z"
                              fill="#86888A"/>
                    </svg>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "NicknameForm",
        inject: [
            'config'
        ],
        props: [
            'email',
        ],
        data(){
            return {
                nickname: null,
                errorMessage: null,
            }
        },
        methods: {
            setNickname(){
                const data = {
                    email: this.email,
                    nickname: this.nickname
                }
                axios.post('/ru/ajax/user/set/nickname', data)
                    .then(({data}) => {
                        this.$emit('setStep', 'congratulation')
                    }).catch(({response}) => {
                    this.errorMessage = response.data
                })
            },
            close(){
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>

</style>