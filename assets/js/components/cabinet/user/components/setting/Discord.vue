<template>
    <div class="setting-container-body discord-setting">
        <div class="title">
            Discord для обучения
        </div>
        <div class="discord-setting-body d-flex">
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

    export default {
        name: "Discord",
        props: ['discord'],
        data() {
            return {
                discordVal: null,
                load: false,
            }
        },
        methods: {
            updateDiscord() {
                if (!this.load){
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
        },
        mounted() {
            this.discordVal = this.discord;
        }
    }
</script>

<style scoped>
    .discord-setting {
        height: 14vw;
    }

    .discord-setting-body {
        padding: 0 2vw;
        margin-top: 2vw;
    }
</style>