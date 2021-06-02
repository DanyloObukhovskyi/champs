<template>
    <div class="setting-container-body method-wrapper">
        <div class="trainer-title">
            Данные для карточки тренера
        </div>
        <div class="method-body d-flex">
            <div class="form-group">
                <div class="input">
                    <textarea v-model="method"
                              placeholder="Методика обучения (подробная информация про услуги)*"></textarea>
                </div>
            </div>
        </div>
        <div class="bottom-save" :class="{disable: load}" @click="save">
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
import {mapGetters} from "vuex";
import CabinetService from "../../../../../services/CabinetService";
import Swal from "sweetalert2";

export default {
    name: "TrainingMethod",
    data() {
        return {
            load: false,
            method: '',
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
        save() {
            if (this.user.timezone === null || this.user.timezone === '') {
                return this.showError('Для начала укажите таймзону!')
            }
            if (!this.load) {
                this.load = true;
                const form = new FormData();

                form.append('trainer[method]', this.method);

                CabinetService.updateUser(form)
                    .then(data => {
                        this.$store.commit('setUser', data)

                        Swal.fire({
                            icon: 'success',
                            title: 'Изменения были сохранены!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.load = false;
                    })
                    .catch(({response: {data}}) => {
                        this.load = false;

                        Swal.fire({
                            icon: 'error',
                            title: 'Упс...',
                            text: data.email,
                        })
                    })
            }
        }
    },
    mounted() {
        this.method = this.user.trainer.method
    }
}
</script>

<style scoped lang="scss">
.method-wrapper {
  .method-body {
    .form-group {
      padding: 0 3vw;

      .input {
        margin-top: .8vw;
        margin-bottom: 1.5vw;
        border-radius: .5vw;
        padding: 0 .5vw;
        height: auto;

        textarea {
          min-height: 9vw;
          font-size: 1vw;
          background-color: transparent;
          color: black;
        }
      }
    }
  }
}
</style>