<template>
    <div id="avatar" class="setting-container-body avatar-setting">
        <div class="trainer-title" v-if="user.isTrainer">
            Фото
        </div>
        <div class="title" v-else>
            Аватарка
        </div>
        <div class="avatar-wrapper">
            <div class="avatar">
                <div class="gradient">
                    <img :src="'/uploads/avatars/' + user.photo" v-if="previewImage === null"
                         @error="$event.target.src = '/images/noLogo.png'">
                    <img :src="previewImage" v-else @error="previewImage = null">
                </div>
            </div>
            <form name="uploadAvatar" class="upload">
                <span>Размеры:1250x1250</span>
                <label for="avatar-upload-form">
                    Выбрать файл
                </label>
                <input type="file" name="avatar" id="avatar-upload-form" @change="setPreviewImage">
            </form>
        </div>
        <div class="bottom-save" @click="updateAvatar" :class="{disable: load}">
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
import Swal from 'sweetalert2'

export default {
    name: "Avatar",
    data() {
        return {
            load: false,
            isUpdate: false,
            previewImage: null,
        }
    },
    computed: {
        ...mapGetters([
            'user',
        ]),
    },
    methods: {
        updateAvatar() {
            if (!this.load) {
                const form = new FormData(document.forms.uploadAvatar);

                this.load = true;
                CabinetService.updateUser(form)
                    .then(user => {
                        this.$store.commit('setUser', user);

                        Swal.fire({
                            icon: 'success',
                            title: 'Аватар сохранен!',
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
                            text: data.avatar,
                        })
                    })
            }
        },
        setPreviewImage() {
            const input = document.querySelector('#avatar-upload-form');

            const self = this;

            if (input.files && input.files[0]) {
                this.previewImage = URL.createObjectURL(input.files[0]);

                const img = new Image();
                img.onload = function () {

                    if (this.width > 1250 || this.height > 1250) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Упс...',
                            text: 'Разрешения изображения привышает 1250x1250!',
                        })

                        self.previewImage = null;
                        input.value = '';
                    }
                };
                img.src = URL.createObjectURL(input.files[0]);
            }
        },
    }
}
</script>

<style scoped lang="scss">
#avatar-upload-form {
  display: none;
}

.avatar-wrapper {
  .avatar {
    display: flex;
    justify-content: center;
    margin-top: 3vw;

    .gradient {
      width: 9vw;
      height: 9vw;
      border-radius: 50%;
      padding: .25vw;
      background: #ff6f1f;
      background: -moz-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
      background: -webkit-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
      background: linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6f1f", endColorstr="#ffc24f", GradientType=1);

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  .upload {
    display: flex;
    justify-content: center;
    margin-top: 1.5vw;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 1vw;
    }

    label {
      background: #ff6d1d;
      font-size: 1vw;
      height: 2.3vw;
      width: 9.5vw;
      color: white;
      display: flex;
      justify-content: center;
      border-radius: .3vw;
      align-items: center;
      cursor: pointer;
    }

    label:hover {
      background: #ff8f2b;
    }
  }
}

.dark {
  #avatar.setting-container-body.avatar-setting {
    background: #25282a;
    background: -moz-linear-gradient(90deg, #25282a 0%, #3d4146 100%);
    background: -webkit-linear-gradient(
                    90deg, #25282a 0%, #3d4146 100%);
    background: linear-gradient(
                    90deg, #25282a 0%, #3d4146 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#3d4146", GradientType=1);
  }

  .upload {
    label {
      border: .1vw solid white;
    }
  }
}
</style>