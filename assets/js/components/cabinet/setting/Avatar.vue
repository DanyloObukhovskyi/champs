<template>
    <div class="setting-container-body avatar-setting">
        <div class="title">
            Аватарка
        </div>
        <div class="avatar-wrapper">
            <div class="avatar">
                <div class="gradient">
                    <img :src="'/uploads/avatars/' + user.photo" v-if="previewImage === null">
                    <img :src="previewImage" v-else @error="previewImage = null">
                </div>
            </div>
            <form name="uploadAvatar" class="upload">
                <label for="avatar-upload-form">
                    Выбрать файл
                </label>
                <input type="file" name="avatar" id="avatar-upload-form" @change="setPreviewImage">
            </form>
        </div>
        <div class="bottom-save" @click="updateAvatar" :class="{disable: load, update: !load && isUpdate}">
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
    import {mapGetters} from "vuex";
    import CabinetService from "../../../services/CabinetService";
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
                const form = new FormData(document.forms.uploadAvatar);

                this.load = true;
                CabinetService.updateUser(form)
                    .then(user => {
                        this.$store.commit('setUser', user);

                        this.load = false;
                        this.isUpdate = true;
                    })
                    .catch(({response: { data }}) => {
                        this.load = false;

                        Swal.fire({
                            icon: 'error',
                            title: 'Упс...',
                            text: data.avatar,
                        })
                    })
            },
            setPreviewImage() {
                const input = document.querySelector('#avatar-upload-form');

                if (input.files && input.files[0]) {
                    this.previewImage = URL.createObjectURL(input.files[0]);
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
                padding: .1vw;
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

            label:hover{
                opacity: .5;
            }
        }
    }

    .dark {
        .upload {
            label {
                border: .1vw solid white;
            }
        }
    }

</style>