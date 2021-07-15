<template>
    <div class="setting-container-body discord-setting">
        <div class="trainer-title">
            Discord для обучения
        </div>
        <div class="discord-setting-body">
            <div class="form-group">
                <label>Вставьте ссылку на ваш Discord</label>
                <div class="input">
                    <input type="text" v-model="discordVal">
                </div>
            </div>
        </div>
        <div class="bottom-save" @click="updateDiscord" :class="{disable: load}">
            Сохранить изменения
            <svg v-if="load" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
                        stroke-dasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                      dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </div>
    </div>
</template>

<script>
    import CabinetService from "../../../../../services/CabinetService";
    import Swal from 'sweetalert2'
    import {mapGetters} from "vuex";

    export default {
        name: "Discord",
        data() {
            return {
                discordVal: null,
                load: false,
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        methods: {
            showError(message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Упс...',
                    text: message,
                    showConfirmButton: false,
                    timer: 1500
                })
            },
            updateDiscord() {
                if (this.user.timezone === null || this.user.timezone === '') {
                    return this.showError('Для начала укажите таймзону!')
                }
                if (!this.load) {
                    let isFull = true;
                    let type = [];
                    if(!this.discordVal){
                        isFull = false
                        type.push('дискорд');
                    }
                    let userType = '';
                    type.forEach((value, index) => {
                        if(index > 0){
                            userType = userType + ', ' + value;
                        } else {
                            userType = userType + ' ' + value;
                        }
                    })
                    if(!isFull) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Упс...',
                            text: 'Вы не заполнили поле ' + userType + ' в настройках аккаунта',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.load = false;
                    } else {
                        const form = new FormData();
                        form.append('discord', this.discordVal);

                        this.load = true;
                        CabinetService.updateUser(form)
                            .then(data => {
                                this.$store.commit('setUser', data)

                                Swal.fire({
                                    icon: 'success',
                                    title: 'Дискорд сохранен!',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                this.load = false;
                            })
                            .catch(() => {
                                this.load = false;
                            })
                    }
                }
            }
        },
        mounted() {
            this.discordVal = this.user.discord;
        }
    }
</script>

<style scoped lang="scss">
  .discord-setting {
    height: 14vw;
	padding-left: 2.5vw;
	padding-right: 1.5vw;
  }

  .discord-setting-body {
	padding: 0;
    margin-top: 2vw;

    .form-group {
      padding: 0;
    }
  }
</style>