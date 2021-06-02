<template>
    <div class="setting-container-body password-setting">
        <div class="title">
            Изменение пароля
        </div>
        <div class="general-settings-body d-flex">
            <div class="setting-col-1">
                <div class="form-group">
                    <label>Изменить пароль</label>
                    <div class="input">
                        <input type="password" v-model="password">
                    </div>
                </div>
            </div>
            <div class="setting-col-2">
                <div class="form-group">
                    <label>Введите пароль повторно</label>
                    <div class="input">
                        <input type="password" v-model="passwordConfirm">
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-save" @click="updatePassword" :class="{disable: load}">
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

export default {
    name: "Password",
    data() {
        return {
            password: null,
            passwordConfirm: null,
            load: false,
        }
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
            if (!this.load) {
                if (this.password === null || this.password === '') {
                    return this.showError('Пароль не может быть пустым!')
                }
                if (this.password === this.passwordConfirm) {
                    const form = new FormData();
                    form.append('password', this.password);

                    this.load = true;
                    CabinetService.updateUser(form)
                        .then(data => {
                            this.$store.commit('setUser', data)
                            this.load = false;

                            this.showSuccess();
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
  height: 13vw;

  .general-settings-body {
    margin-top: 2.1vw;
  }
}
</style>