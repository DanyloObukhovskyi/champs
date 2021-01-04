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
    import CabinetService from "../../../services/CabinetService";

    export default {
        name: "Password",
        data() {
            return {
                password: null,
                passwordConfirm: null,
                load: false,
                isUpdate: false,
            }
        },
        methods: {
            updatePassword() {
                if (this.password === null || this.password === '') {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Упс...',
                        text: 'Пароль не может быть пустым!',
                    })
                }
                if (this.password === this.passwordConfirm) {
                    const form = new FormData();
                    form.append('password', this.password);

                    this.load = true;
                    CabinetService.updateUser(form)
                        .then(data => {
                            this.$store.commit('setUser', data)

                            this.load = false;
                            this.isUpdate = true;
                        })
                        .catch(() => {
                            this.load = false;
                        })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Упс...',
                        text: 'Пароли не совпадают!',
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .password-setting {
        height: 11vw;
    }
</style>