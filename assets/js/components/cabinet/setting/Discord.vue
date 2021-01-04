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
        <div class="bottom-save" @click="updateDiscord" :class="{disable: load, update: !load && isUpdate}">
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
    import CabinetService from "../../../services/CabinetService";

    export default {
        name: "Discord",
        props: ['discord'],
        data() {
            return {
                discordVal: null,
                load: false,
                isUpdate: false,
            }
        },
        methods: {
            updateDiscord() {
                const form = new FormData();
                form.append('discord', this.discordVal);

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
            }
        },
        mounted() {
            this.discordVal = this.discord;
        }
    }
</script>

<style scoped>
    .discord-setting {
        height: 11vw;
    }

    .discord-setting-body {
        padding: 0 2vw;
    }
</style>