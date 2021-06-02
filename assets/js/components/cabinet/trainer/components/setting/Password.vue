<template>
    <div class="setting-container-body password-setting">
        <div class="trainer-title">
            Изменение пароля
        </div>
        <div class="password-body">
            <div class="form-group">
                <div class="input">
                    <input type="password" placeholder="Старый пароль" v-model="old">
                </div>
            </div>
            <div class="form-group">
                <div class="input">
                    <input type="password" placeholder="Новый пароль" v-model="password">
                </div>
            </div>
            <div class="form-group">
                <div class="input">
                    <input type="password" placeholder="Повторите новый пароль" v-model="passwordConfirm">
                </div>
            </div>
        </div>
        <div class="bottom-save" @click="updatePassword" :class="{disable: load, update: !load && isUpdate}">
            Сохранить изменения
            <i class="fas fa-check"></i>
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
    import Swal from 'sweetalert2'
    import CabinetService from "../../../../../services/CabinetService";
    import {mapGetters} from "vuex";

    export default {
        name: "Password",
        data() {
            return {
                old: null,
                password: null,
                passwordConfirm: null,
                load: false,
                isUpdate: false,
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        methods: {
            showSuccess() {
                Swal.fire({
                    icon: 'success',
                    title: 'Пароль сохранен!',
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
            updatePassword() {
                if (this.user.timezone === null || this.user.timezone === '') {
                    return this.showError('Для начала укажите таймзону!')
                }
                if (!this.load) {
                    if (this.password === null || this.password === '') {
                        return this.showError('Пароль не может быть пустым!')
                    }
                    if (this.password === this.passwordConfirm) {
                        const form = new FormData();

                        form.append('passwordOld', this.old);
                        form.append('password', this.password);

                        this.load = true;
                        CabinetService.updateUser(form)
                            .then(data => {
                                this.$store.commit('setUser', data)

                                this.showSuccess();
                                this.load = false;
                            })
                            .catch(({response}) => {
                                this.load = false;

                                this.showError(response.data.password)
                            })
                    } else {
                        this.showError('Пароли не совпадают!')
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
  .password-setting {
	padding-left: 2.5vw;
  }

  .password-body {
	margin-top: .5vw;
	padding-right: 2.5vw;

	.form-group {
	  padding: 0;
	}
  }
</style>