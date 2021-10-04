
<template>
    <div class="ml-8 mr-8 p-0" v-if="!isMobile">
        <div class="blog-create" ref="blog-create">
            <div class="container" style="align-items: center;">
                <div class="col-12">
                    <div class="setting" style="margin-top: 10px;">
                        <div class="setting-container-body" style="background-color: transparent;padding:0;padding-bottom: 2.7vw;">
                            <div class="col-12">
                                <div class="d-flex justify-content-between">
                                        <div class="filters-middle">
                                                <a href="createBlogAndReward" class="d-flex align-items-center filters-button">
                                                    <img class="filters-icons filters-icons2" alt="">
                                                    <span class="blog-button">Создай блог и заработай!</span>
                                                </a>
                                        </div>
                                        <div class="filters-middle">
                                                <a href="howCreateBlog" class="d-flex align-items-center filters-button">
                                                    <img class="filters-icons filters-icons3" alt="">
                                                    <span class="blog-button">Как вести успешный блог?</span>
                                                </a>
                                        </div>
                                </div>
                            </div>
                            <div class="text-center" style="margin-top: 10px">
                                <h5 style="color: #adafb0;">Новая публикация</h5>
                            </div>
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
                                             @click="setGame(game.code)">
                                            <a class="d-flex" :style="game.code == selected ? 'color: #ff6d1d;border: 3px solid;padding: 7px;' : 'color:rgb(173, 175, 176);border: 3px transparent;padding: 10px;' ">
                                                <img :src="`/uploads/games/${game.sidebarIcon}`">
                                                {{ game.name }}
                                            </a>
                                        </div>
                                        <div class="cs d-flex align-items-center">
                                            <button class="tag" @click="getNextGames()" v-if="games.length <  allGames">
                                                ...
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="setting-col-12">
                                <div class="form-group">
                                    <label style="margin-bottom: 0;">Загрузите изображения для вашей публикации</label>
                                    <form name="uploadImage" class="upload" style="margin-bottom: 0;" :class="selectedFileName !== 'Выбрать файл' ? 'col-3' : ''">
                                        <label for="image-upload-form" :style="selectedFileName !== 'Выбрать файл' ? 'justify-content: center;overflow: hidden;width:100%' : ''"  style="color:white">
                                            {{selectedFileName}}
                                        </label>
                                        <input type="file" name="image" id="image-upload-form" @change="setPreviewImage">
                                    </form>
                                    <label style="font-size: 0.7vw;top: -0.4vw;margin-left: 1vw;">Размер не более 3 МБ</label>
                                </div>
                            </div>
                            <div class="setting-col-12" >
                                <div class="form-group">
                                    <label>Текст вашей публикации</label>
                                        <input id="my-file" type="file" name="my-file" style="display: none;" onchange="" />
                                        <editor
                                                v-model="text"
                                                api-key="vh6riwhud16qd55ticd0ycx8lg3v3uqaavhdlvjlroakepce"
                                                :init="{
                                                     height: 500,
                                                     menubar: false,
                                                     plugins: [
                                                        'code | lists advlist | autolink ',
                                                        'advlist autolink lists link image charmap print preview anchor',
                                                        'searchreplace visualblocks advcode fullscreen',
                                                        'insertdatetime media table powerpaste hr code',
                                                        'advlist autolink lists link image charmap print preview anchor',
                                                        'searchreplace visualblocks code fullscreen',
                                                        'insertdatetime media table paste code help wordcount'
                                                     ],
                                                     toolbar: 'code | undo redo | bold italic underline strikethrough | blockquote |fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl | lists advlist | autolink',
                                                     a11y_advanced_options: true,
                                                     image_title: true,
                                                     /* enable automatic uploads of images represented by blob or data URIs*/
                                                     automatic_uploads: true,
                                                    file_picker_types: 'image',
                                                    file_picker_callback: function (callback, value, meta) {
                                                         filePicker(callback, value, meta);
                                                    },
                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
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
                            <div class="d-flex justify-content-between col-12">
                                <button class="save-button col-3" @click="saveToEdit">Сохранить в черновик</button>
                                <button class="save-button col-3" @click="sendToAdmin">Отправить на модерацию</button>
                                <button class="save-button col-3" @click="preview" style="margin-right: 0vw;">Предпросмотр</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="    margin-top: 15%;
    background: #1d2225;" v-else>
        <div class="blog-create" ref="blog-create">
            <div class="container" style="align-items: center;">
                <div class="col-12">
                    <div class="setting">
                        <div class="setting-container-body" style="background-color: transparent;padding:0;padding-bottom: 2.7vw;">
                            <div class="col-12">
                                <div class="d-block justify-content-between">
                                    <div class="filters-middle-mobile">
                                        <a href="createBlogAndReward" class="d-flex align-items-center filters-button">
                                            <img class="filters-icons filters-icons2" alt="">
                                            <span class="blog-button">Создай блог и заработай!</span>
                                        </a>
                                    </div>
                                    <div class="filters-middle-mobile">
                                        <a href="howCreateBlog" class="d-flex align-items-center filters-button">
                                            <img class="filters-icons filters-icons3" alt="">
                                            <span class="blog-button">Как вести успешный блог?</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="post-body">
                                <div class="text-center" style="margin-top: 10px">
                                    <h5 style="color: #adafb0;">Новая публикация</h5>
                                </div>
                                <div class="setting-col-12">
                                    <div class="form-group">
                                        <label style="color: white">Заголовок вашей публикации</label>
                                        <div class="input">
                                            <input v-model="title" type="text" class="col-12">
                                        </div>
                                    </div>
                                </div>
                                <div class="setting-col-12">
                                    <div class="form-group">
                                        <label style="color: white">Выберете игру к которой относится ваша публикация</label>
                                            <div class="search-filter">
                                                <multiselect
                                                        placeholder="Дисциплина"
                                                        v-model="game"
                                                        label="name"
                                                        class="events-digest-mobile-discipline"
                                                        track-by="id"
                                                        selectLabel="Выберете игру"
                                                        :options="games">
                                                </multiselect>
                                            </div>
                                    </div>
                                </div>
                                <div class="setting-col-12">
                                    <div class="form-group">
                                        <label style="margin-bottom: 0;color: white">Загрузите изображения для вашей публикации</label>
                                        <form name="uploadImage" class="upload" style="margin-bottom: 0;position: relative;transform: translate(50%, 0px);width: 50%;" :class="selectedFileName !== 'Выбрать файл' ? 'col-3' : ''">
                                            <label for="image-upload-form" :style="selectedFileName !== 'Выбрать файл' ? 'justify-content: center;overflow: hidden;width:100%' : ''"  style="color:white;height: 10vw;width: 46%;border: 0.5vw solid white;border-radius: 1vw;width: 40vw;">
                                                {{selectedFileName}}
                                            </label>
                                            <input type="file" name="image" id="image-upload-form" @change="setPreviewImage">
                                        </form>
                                        <label class="text-center" style="font-size: 2.7vw;top: 1.6vw;transform: translate(96%,0);position: relative;">Размер не более 3 МБ</label>
                                    </div>
                                </div>
                                <div class="setting-col-12" >
                                    <div class="form-group">
                                        <label style="color: white">Текст вашей публикации</label>
                                        <input id="my-file" type="file" name="my-file" style="display: none;" onchange="" />
                                        <editor
                                                v-model="text"
                                                api-key="vh6riwhud16qd55ticd0ycx8lg3v3uqaavhdlvjlroakepce"
                                                :init="{
                                                         height: 500,
                                                         menubar: false,
                                                         plugins: [
                                                            'code | lists advlist | autolink ',
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks advcode fullscreen',
                                                            'insertdatetime media table powerpaste hr code',
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount'
                                                         ],
                                                         toolbar: 'code | undo redo | bold italic underline strikethrough | blockquote |fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl | lists advlist | autolink',
                                                         a11y_advanced_options: true,
                                                         image_title: true,
                                                         /* enable automatic uploads of images represented by blob or data URIs*/
                                                         automatic_uploads: true,
                                                        file_picker_types: 'image',
                                                        file_picker_callback: function (callback, value, meta) {
                                                             filePicker(callback, value, meta);
                                                        },
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                                       }"
                                        />
                                        <!--                                    <textarea id="blogTextArea" class="col-12"/>-->
                                    </div>
                                </div>
                                <div class="setting-col-12" style="margin-top: 3vw;">
                                    <div class="form-group">
                                        <label><span style="color: white">Теги к вашей публикации</span> <br>(для того что бы добавить Тег, наберите его в строке и нажмите Enter )</label>
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
                                <div class="d-block justify-content-between col-12">
                                    <button class="save-button-mobile col-10" style="transform: translate(10%, 0);" @click="saveToEdit">Сохранить в черновик</button>
                                    <button class="save-button-mobile col-12" @click="sendToAdmin">Отправить на модерацию</button>
                                    <button class="save-button-mobile col-12" @click="preview" style="margin-right: 0vw;">Предпросмотр</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
    import VueTagsInput from '@johmun/vue-tags-input';
    import Swal from 'sweetalert2';
    import CabinetService from "../services/CabinetService";
    import BlogService from "../services/BlogService";
    import Multiselect from 'vue-multiselect'

    export default {
        name: "BlogCreate",
        components: {
            Button,
            Editor,
            VueTagsInput,
            Swal,
            Multiselect
        },
        props:[
            'games',
            'allGames'
        ],
        data() {
            return {
                selectedCodeGame: null,
                tag: '#',
                tags: [],
                selectedFileName: 'Выбрать файл',
                selectedFile: null,
                title: null,
                selectedGame: null,
                text: '',
                game: null
            }
        },
        computed: {
            ...mapGetters([
                'game',
                'user',
                'showLogin',
                'isMobile'
            ]),
            selected(){
                return this.selectedCodeGame
            },
        },
        watch:{
            game: function(){
                this.setGame(this.game.code);
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

                    Swal.fire({
                        title: 'Загрузка',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        showCloseButton: false,
                        showCancelButton: false,
                        showConfirmButton: false,
                        onOpen: () => {
                            Swal.showLoading();
                            BlogService.createBlog(form)
                                .then(data => {

                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Ваша публикация сохранена!',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    Swal.hideLoading();
                                    Swal.close()
                                    window.location = '/ru/editBlog/'+ data.blog.id;
                                })
                                .catch(({response: {data}}) => {
                                    this.load = false;

                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Упс...',
                                        text: data.avatar,
                                    })
                                    Swal.hideLoading();
                                    Swal.close()
                                })
                        }
                    });
                }
            },
            filePicker(callback, value, meta){
                if (meta.filetype == 'image') {
                    var input = document.getElementById('my-file');
                    input.click();
                    input.onchange = function () {
                        var file = input.files[0];
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            callback(e.target.result, {
                                alt: file.name
                            });
                        };
                        reader.readAsDataURL(file);
                    };
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

                    Swal.fire({
                        title: 'Загрузка',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        showCloseButton: false,
                        showCancelButton: false,
                        showConfirmButton: false,
                        onOpen: () => {
                            Swal.showLoading();
                            BlogService.createBlog(form)
                                .then(blog => {

                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Публикация отправлена на проверку!',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    Swal.hideLoading();
                                    Swal.close()

                                    window.location = '/ru/user/cabinet/blog?tab=blogs';
                                })
                                .catch(({response: {data}}) => {
                                    this.load = false;

                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Упс...',
                                        text: data.avatar,
                                    })
                                    Swal.hideLoading();
                                    Swal.close()
                                })
                        }
                    });
                }
            },
            preview()
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
                    form.append('status', 5);
                    let tags = [];
                    this.tags.forEach((item, key) => {
                        tags[key] = item.text;
                    });
                    form.append('tags', tags);

                    Swal.fire({
                        title: 'Загрузка',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        showCloseButton: false,
                        showCancelButton: false,
                        showConfirmButton: false,
                        onOpen: () => {
                            Swal.showLoading();
                            BlogService.createBlog(form)
                                .then(data => {

                                    Swal.hideLoading();
                                    Swal.close()

                                    window.location = '/ru/blog/'+ data.blog.id + '/'+this.getSlug(data.blog);
                                })
                                .catch(({response: {data}}) => {
                                    this.load = false;

                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Упс...',
                                        text: data.avatar,
                                    })
                                    Swal.hideLoading();
                                    Swal.close()
                                })
                        }
                    });
                }
            },
            getSlug(blogs) {
                try{
                    let type = this.getTitleUrl(blogs.type.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let game = this.getTitleUrl(blogs.game.name)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let title =  this.getTitleUrl(blogs.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let date = this.getTitleUrl(blogs.date_ru_with_year_for_url)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    return type+'/'+game+'/'+title+'-'+date;
                } catch (e) {
                    let title =  this.getTitleUrl(blogs.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    return title;
                }
            },
            getTitleUrl(title) {
                return title.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
                    function (all, ch, space, words, i) {
                        if (space || words) {
                            return space ? '_' : '';
                        }
                        var code = ch.charCodeAt(0),
                            index = code == 1025 || code == 1105 ? 0 :
                                code > 1071 ? code - 1071 : code - 1039,
                            t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                                'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                                'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                                'shch', '', 'y', '', 'e', 'yu', 'ya'
                            ];
                        return t[index];
                    });
            },
            getNextGames()
            {
                BlogService.getGamesBlog(this.games.length)
                    .then(data => {
                        for (let item of data) {
                            this.games.push(item);
                        }
                        this.$forceUpdate();
                    });
            }
        },
        mounted() {
            this.games = JSON.parse(this.games);
        }
    }
</script>
<style scoped lang="scss">
    @import '../../css/animations.css';

    .filters-icons{
        margin-right: 10px;
        width: 30px;
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
        flex-wrap: wrap;
    }

    .games a {
        color: #ff6d1d;
    }

    .games img {
        width: 1vw;
        margin-right: .3vw;
        height: 100%;
    }

    .games div {
        cursor: pointer;
        margin-right: 1vw;
        margin-bottom: 1vw;
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
        margin-right: 5vw;
    }
    .save-button:hover{
        background: #ff8f2b;
    }
    .vue-tags-input {
        max-width: 100% !important;
        width: 100%;
    }
    .filters-middle:hover .blog-button{
        background-color: #ff6d1d;
        color: white;
        border-radius: 5px;
    }
    .filters-middle{
        padding-left: 5px;
        padding-right: 5px;
    }
    .filters-icons2{
        content: url('/images/icons/blog2.svg');
        background-repeat: no-repeat;
    }
    .dark .filters-icons2{
        content: url('/images/icons/blog2White.svg');
        background-repeat: no-repeat;
    }
    .filters-icons3{
        content: url('/images/icons/vrsti.svg');
        background-repeat: no-repeat;
    }
    .dark .filters-icons3{
        content: url('/images/icons/vrstiWhite.svg');
        background-repeat: no-repeat;
    }
    .filters-button{
        color: black;
    }
    .dark .filters-button{
        color: white;
    }
    .filters-middle:hover .filters-icons2{
        content: url('/images/icons/blog2Hover.svg');
        background-repeat: no-repeat;
    }
    .filters-middle:hover .filters-icons3{
        content: url('/images/icons/vrstiHover.svg');
        background-repeat: no-repeat;
    }
    span.blog-button {
        padding-left: 0.3vw;
        padding-right: 0.3vw;
    }
    .tag{
        color: rgb(173, 175, 176);
        background: none;
        border: none;
        cursor: pointer;
    }
</style>

<style scoped lang="scss">
    .filters-icons{
        margin-right: 10px;
        width: 30px;
    }
    .filters-middle-mobile
    {
        background: #1e2123;
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
        flex-wrap: wrap;
    }

    .games a {
        color: #ff6d1d;
    }

    .games img {
        width: 1vw;
        margin-right: .3vw;
        height: 100%;
    }

    .games div {
        cursor: pointer;
        margin-right: 1vw;
        margin-bottom: 1vw;
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
    .save-button-mobile{
        color: white;
        height: 8.3vw;
        background: #ff6d1d;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        left: 0;
        bottom: 0;
        border-radius: 1vw;
        cursor: pointer;
        font-size: 4vw;
        border: none;
        margin-right: 5vw;
        margin-bottom: 2vw;
    }
    .save-button-mobile:hover{
        background: #ff8f2b;
    }
    .vue-tags-input {
        max-width: 100% !important;
        width: 100%;
    }
    .filters-middle-mobile:hover .blog-button{
        background-color: #ff6d1d;
        color: white;
        border-radius: 5px;
        margin-bottom: 1vw;
    }
    .filters-middle-mobile{
        margin-bottom: 1vw;
    }
    .filters-icons2{
        content: url('/images/icons/blog2.svg');
        background-repeat: no-repeat;
    }
    .dark .filters-icons2{
        content: url('/images/icons/blog2White.svg');
        background-repeat: no-repeat;
    }
    .filters-icons3{
        content: url('/images/icons/vrsti.svg');
        background-repeat: no-repeat;
    }
    .dark .filters-icons3{
        content: url('/images/icons/vrstiWhite.svg');
        background-repeat: no-repeat;
    }
    .filters-button{
        color: black;
    }
    .dark .filters-button{
        color: white;
        background: #1e2123;
        padding: 3vw;
    }
    .filters-middle-mobile:hover .filters-icons2{
        content: url('/images/icons/blog2Hover.svg');
        background-repeat: no-repeat;
    }
    .filters-middle-mobile:hover .filters-icons3{
        content: url('/images/icons/vrstiHover.svg');
        background-repeat: no-repeat;
    }
    span.blog-button {
        padding-left: 0.3vw;
        padding-right: 0.3vw;
    }
    .tag{
        color: rgb(173, 175, 176);
        background: none;
        border: none;
        cursor: pointer;
    }
    .post-body{
        background: #393f44;
        padding-top: 1vw;
        padding-left: 3vw;
        padding-right: 4vw;
        border-radius: 2vw;
    }
    .setting::v-deep .setting-container-body .form-group label{
        font-size: 3.8vw;
        color: #adafb0;
        margin-bottom: .5vw;
        overflow: hidden;
    }
    .setting::v-deep .setting-container-body .form-group .select, .setting .setting-container-body .form-group .input{
        background-color: white;
        border-radius: 2vw;
        height: 12vw;
        display: flex;
    }
    .setting::v-deep .setting-container-body .form-group .input input, .setting .setting-container-body .form-group .select select {
        width: 100%;
        height: 100%;
        border: .5vw solid #ffbb96;
        border-radius: 2vw;
        background-color: transparent;
        color: black;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        outline: unset;
        padding-left: .3vw;
        font-size: 5vw;
    }

    .events-digest-mobile-filters::v-deep .multiselect__tags {
        display: flex;
        align-items: center;
        height: 10vw;
        padding: 3.4vw;
        border: 1px solid #e8e8e8;
        background: #fff;
        font-size: 15px;
        width: 22vw;
        border-radius: 1vw;
        margin-top: 1vw;
    }

    .events-digest-mobile-filters::v-deep .multiselect {
        box-sizing: content-box;
        display: block;
        position: relative;
        width: fit-content;
        text-align: left;
        color: #35495e;
        margin-top: 1vw;
    }

    .events-digest-mobile-discipline::v-deep .multiselect__tags {
        display: flex !important;
        align-items: center !important;
        height: 12vw !important;
        padding: .4vw !important;
        border: 1px solid #e8e8e8;
        background: #fff !important;
        font-size: 14px !important;
        width: 100% !important;
        border-radius: 1vw !important;
        margin-top: 1vw !important;
    }

    .events-digest-mobile-discipline::v-deep .multiselect__select {
        position: absolute !important;
        width: 40px !important;
        height: 97% !important;
        right: 1px !important;
        top: 1px !important;
        padding: 4px 8px !important;
        text-align: center !important;
        transition: transform .2s ease !important;
        z-index: 9 !important;
        background: #ff6d1d !important;
        color: white !important;
        border-radius: 0vw 1vw 1vw 0vw !important;
    }

    .events-digest-mobile-discipline::v-deep .multiselect__select:before {
        position: relative !important;
        right: 0 !important;
        top: 65% !important;
        color: white !important;
        margin-top: 4px !important;
        border-color: white transparent transparent !important;
        border-style: solid !important;
        border-width: 5px 5px 0 !important;
        content: "" !important;
        font-size: 4.8vw !important;
        display: inline !important;
    }

    .events-digest-mobile-discipline::v-deep .multiselect__content-wrapper {
        width: 100% !important;
    }
    .setting::v-deep .setting-container-body .multiselect .multiselect__tags .multiselect__placeholder {
        font-size: 5vw;
    }
    .multiselect.events-digest-mobile-discipline::v-deep {
        width: 100%;
    }
    .multiselect.events-digest-mobile-discipline::v-deep .setting::v-deep .setting-container-body .multiselect .multiselect__tags {
        height: 2.5vw;
        border: .1vw solid #ffbb96;
        border-radius: .2vw;
        padding-right: 1.5vw;
        min-width: 12.6vw;
        width: 100% !important;
    }
</style>