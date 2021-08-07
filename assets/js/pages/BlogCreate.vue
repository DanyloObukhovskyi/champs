import Swal from "sweetalert2";
<template>
    <div class="blog-create" ref="blog-create">
        <div class="container" style="align-items: center;">
            <div class="col-12">
                <div class="d-flex justify-content-between">
                        <div class="filters-middle">
                                <a href="createBlogAndReward" style="color: black" class="d-flex align-items-center">
                                        <img class="filters-icons" src="/images/icons/blog2.svg" alt="">
                                    <span class="blog-button">Создай блог и заработай!</span>
                                </a>
                        </div>
                        <div class="filters-middle">
                                <a href="howCreateBlog" style="color: black" class="d-flex align-items-center">
                                        <img class="filters-icons" src="/images/icons/vrsti.svg" alt="">
                                    <span class="blog-button">Как вести успешный блог?</span>
                                </a>
                        </div>
                </div>
                <div class="text-center" style="margin-top: 10px">
                    <h5 style="color: #adafb0;">Новая публикация</h5>
                </div>
                <div class="setting" style="margin-top: 10px;">
                    <div class="setting-container-body" style="background-color: transparent;padding:0;padding-bottom: 2.7vw;">
                        <div class="setting-col-12">
                            <div class="form-group">
                                <label>Заголовок вашей публикации</label>
                                <div class="input">
                                    <input v-model="title" type="text" class="col-12">
                                </div>
                            </div>
                        </div>
                        <div class="setting-col-12">
                            <div class="form-group">
                                <label>Выберете игру к которой относится ваша публикация</label>
                                <div class="games d-flex">
                                    <div class="cs d-flex align-items-center" v-for="game in games"
                                         v-if="game.active"
                                         @click="setGame(game.code)">
                                        <a :style="game.code == selected ? 'color:rgb(173, 175, 176);' : '' ">
                                            <img :src="`/uploads/games/${game.sidebarIcon}`">
                                            {{ game.name }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="setting-col-12">
                            <div class="form-group">
                                <label style="margin-bottom: 0;">Загрузите изображения для вашей публикации</label>
                                <form name="uploadImage" class="upload" style="margin-bottom: 0;">
                                    <label for="image-upload-form" style="color:white">
                                        {{selectedFileName}}
                                    </label>
                                    <input type="file" name="image" id="image-upload-form" @change="setPreviewImage">
                                </form>
                                <label style="font-size: 0.7vw;margin-top: 0;margin-left: 1vw;">Размер не более 3 МБ</label>
                            </div>
                        </div>
                        <div class="setting-col-12" >
                            <div class="form-group">
                                <label>Текст вашей публикации</label>
                                    <editor
                                            v-model="text"
                                            api-key="vh6riwhud16qd55ticd0ycx8lg3v3uqaavhdlvjlroakepce"
                                            :init="{
                                                 height: 500,
                                                 menubar: false,
                                                 plugins: [
                                                   'advlist autolink lists link image charmap print preview anchor',
                                                   'searchreplace visualblocks code fullscreen',
                                                   'insertdatetime media table paste code help wordcount'
                                                 ],
                                                 toolbar:
                                                   'undo redo | formatselect | bold italic backcolor | \
                                                   alignleft aligncenter alignright alignjustify | \
                                                   bullist numlist outdent indent | removeformat | help'
                                               }"
                                    />
<!--                                    <textarea id="blogTextArea" class="col-12"/>-->
                            </div>
                        </div>
                        <div class="setting-col-12">
                            <div class="form-group">
                                <label>Теги к вашей публикации (для того что бы добавить Тег, наберите его в строке и нажмите Enter )</label>
                                <div class="input" style="background-color: transparent">
                                    <vue-tags-input
                                            v-model="tag"
                                            :tags="tags"
                                            :is-draggable="true"
                                            placeholder="Добавить тег"
                                            @tags-changed="(newTags) => {
                                                tags = newTags
                                                tag = '#'
                                            }"
                                            @tag-order-changed="newTags => tags = newTags"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <button class="save-button col-3" @click="saveToEdit">Сохранить в черновик</button>
                    <button class="save-button col-3" @click="sendToAdmin">Отправить на модерацию</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import '../../css/setting.css';
    import {mapGetters} from "vuex";
    import Button from "../components/cabinet/Button";
    import Editor from '@tinymce/tinymce-vue';
    import VueTagsInput from '@voerro/vue-tagsinput';
    import Swal from 'sweetalert2';
    import CabinetService from "../services/CabinetService";
    import BlogService from "../services/BlogService";

    export default {
        name: "BlogCreate",
        components: {
            Button,
            Editor,
            VueTagsInput,
            Swal
        },
        data() {
            return {
                selectedCodeGame: null,
                tag: '#',
                tags: [],
                selectedFileName: 'Выбрать файл',
                selectedFile: null,
                title: null,
                selectedGame: null,
                text: ''
            }
        },
        computed: {
            ...mapGetters([
                'games',
                'game',
                'user',
                'showLogin'
            ]),
            selected(){
                return this.selectedCodeGame
            }
        },
        methods:{
            setGame(code){
                this.selectedCodeGame = code;
                this.selected = code;
            },
            setPreviewImage() {
                const input = document.querySelector('#image-upload-form');

                const self = this;

                if (input.files && input.files[0]) {
                    const img = new Image();
                    img.onload = function () {
                        let size = input.files[0].size / 1024 / 1024;
                        if (size > 3) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Упс...',
                                text: 'Размер изображения превышает 3 мб',
                            })

                            self.previewImage = null;
                            input.value = '';
                        }
                    };
                    img.src = URL.createObjectURL(input.files[0]);
                    let name = input.files[0].name;
                    this.selectedFileName = name;
                }
            },
            clearDialog(){
                this.selectedCodeGame = null,
                this.tags = [],
                this.selectedFileName = 'Выбрать файл',
                this.selectedFile = null,
                this.title = null,
                this.selectedGame = null,
                this.text = ''
            },
            saveToEdit()
            {
                let title = this.title;
                let game = this.selectedCodeGame;
                const input = document.querySelector('#image-upload-form');
                let image = new FormData(document.forms.uploadImage);
                let text = this.text;

                this.load = true;

                let isFull = true;
                let type = [];
                if(!title){
                    isFull = false
                    type.push('заголовок');
                }
                if(!game){
                    isFull = false
                    type.push('игру');
                }
                if(!input.files[0]){
                    isFull = false
                    type.push('изображение');
                }
                if(!text){
                    isFull = false
                    type.push('текст');
                }
                if(!this.tags){
                    isFull = false
                    type.push('теги');
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
                        text: 'Вы не заполнили поле ' + userType + ' при создании блога',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.load = false;
                } else {
                    const form = new FormData();
                    form.append('title', title);
                    form.append('game', game);
                    form.append('image', input.files[0]);
                    form.append('text', text);
                    form.append('status', 2);
                    let tags = [];
                    this.tags.forEach((item, key) => {
                        tags[key] = item.text;
                    });
                    form.append('tags', tags);

                    BlogService.createBlog(form)
                        .then(blog => {

                            Swal.fire({
                                icon: 'success',
                                title: 'Блог сохранен!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.load = false;

                            this.clearDialog();
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
            sendToAdmin()
            {
                let title = this.title;
                let game = this.selectedCodeGame;
                const input = document.querySelector('#image-upload-form');
                let image = new FormData(document.forms.uploadImage);
                let text = this.text;
                let tags = this.tags;

                this.load = true;

                let isFull = true;
                let type = [];
                if(!title){
                    isFull = false
                    type.push('заголовок');
                }
                if(!game){
                    isFull = false
                    type.push('игру');
                }
                if(!input.files[0]){
                    isFull = false
                    type.push('изображение');
                }
                if(!text){
                    isFull = false
                    type.push('текст');
                }
                if(!tags){
                    isFull = false
                    type.push('теги');
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
                        text: 'Вы не заполнили поле ' + userType + ' при создании блога',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.load = false;
                } else {
                    const form = new FormData();
                    form.append('title', title);
                    form.append('game', game);
                    form.append('image', input.files[0]);
                    form.append('text', text);
                    form.append('status', 4);
                    let tags = [];
                    this.tags.forEach((item, key) => {
                        tags[key] = item.text;
                    });
                    form.append('tags', tags);

                    BlogService.createBlog(form)
                        .then(blog => {

                            Swal.fire({
                                icon: 'success',
                                title: 'Блог сохранен!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.load = false;
                            this.clearDialog();
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
            }
        }
    }
</script>
<style scoped lang="scss">
    @import '../../css/animations.css';

    .filters-icons{
        width: 30px;
        margin-right: 10px;
    }
    .filters-middle
    {
        margin-top: 10px;
        margin-bottom: 10px;
    }

.form-group {
    margin-bottom: 1.8vw;

    input::placeholder {
        font-size: .8vw;
        display: flex;
    }

    .show-date {
        position: absolute;
        right: 0;
        background: #ff6d1d;
        height: 100%;
        width: 1vw;
        border-radius: 0 .2vw .2vw 0;
        cursor: pointer;

    i {
        font-size: .8vw;
        position: absolute;
        height: 2.5vw;
        top: -.2vw;
        right: .25vw;
        color: white;
        border: unset;
        display: flex;
        align-items: center;
        margin: 0;
    }
    }
    }

    .form-group.timezone {
        width: 11vw;
    }
    .games {
        font-size: .9vw;
        color: #ff6d1d;
    }

    .games a {
        color: #ff6d1d;
    }

    .games img {
        width: 1vw;
        margin-right: .3vw;
    }

    .games div {
        cursor: pointer;
        margin-right: 1.4vw;
    }

    #image-upload-form {
        display: none;
    }
    .upload {
        display: flex;
        justify-content: center;
        flex-direction: column;

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
    textarea {
        outline: unset;
        font-size: 0.8vw;
        width: 100%;
        min-height: 20vw;
        border: 0.1vw solid #ffbb96;
        border-radius: 0.2vw;
        resize: none;
        background: white;
        color: black;
    }
    .blog-create{
        margin-bottom: 3vw;
    }
    .save-button{
        color: white;
        height: 2.3vw;
        background: #ff6d1d;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        left: 0;
        bottom: 0;
        border-radius: .3vw;
        cursor: pointer;
        font-size: 1vw;
        border: none;
    }
    .save-button:hover{
        background: #ff8f2b;
    }
    .vue-tags-input {
        max-width: 100% !important;
        width: 100%;
    }
    .blog-button:hover{
        background-color: #ff6d1d;
        color: white;
    }
</style>