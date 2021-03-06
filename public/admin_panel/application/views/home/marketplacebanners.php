<style>
    .slide-preview {
        width: 100%;
        display: flex;
        border-radius: 4px;
        border: solid 1px #dfe3e9;
        background-color: #edf1f9;
    }

    .slide-preview .text-preview {
        position: absolute;
        color: white;
        font-size: 1.5vw;
        font-weight: 600;
        margin-left: 2.5vw;
        width: 65%;
    }

    .slide-preview .preview {
        width: 100%;
    }

    w-100 {
        width: 100%;
    }

    tbody img {
        width: 50px;
    }

    .tox.tox-tinymce.tox-tinymce--toolbar-sticky-off {
        margin: 0;
    }
</style>
<main class="flex create-new-website-page">
    <?php
    $errors = validation_errors('<li>', '</li>');
    if (!empty($errors)) { ?>
        <div class="alert callout" role="alert">
            <h5>Errors</h5>
            <ul>
                <?php print $errors; ?>
            </ul>
        </div>
    <?php } ?>
    <aside>
        <?php $activePath = 'marketplace/banners' ?>
        <?php require_once APPPATH . 'views/sidebar.php' ?>
    </aside>

    <div class="main-content">
        <h1 class="main-title">Баннеры маркетплейсы</h1>

        <div class="relative">
            <div id="app">
                <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">
                                    {{edit !== null ? `Редактировать баннер №${edit.id}` : 'Добавить баннер' }}</h5>
                                <div class="alert alert-success" role="alert" v-if="message !== null">
                                    {{message}}
                                    <button type="button" class="close" @click="message = null">
                                        <span aria-hidden="true" style="font-size: 25px; color: black">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div class="modal-body">
                                <form name="saveBanner">
                                    <div class="col-item">
                                        <label class="label" for="">Изображение (1080 x 460)</label>
                                        <div v-if="imageSrc !== null">
                                            <img :src="imageSrc"
                                                 style="width: 50%; margin-bottom: 15px; margin-top: 15px;">
                                        </div>
                                        <div class="input mb-5" id="input">
                                            <input name="img" @change="addShowBannerUploadImage($event.target)"
                                                   type="file" class="fw-600 input2_txt">
                                        </div>
                                        <label class="label" for="">Игра</label>
                                        <div class="input mb-5" id="input">
                                            <select name="game" class="fw-600 input2_txt form-control">
                                                <?php foreach ($games as $game): ?>
                                                    <option value="<?php echo $game['id'] ?>">
                                                        <?php echo $game['name'] ?>
                                                    </option>
                                                <?php endforeach; ?>
                                            </select>
                                        </div>
                                        <label class="label" for="">Заголовок</label>
                                        <div class="input mb-5" id="input">
                                            <input name="title" type="text" :value="edit !== null ? edit.title: ''"
                                                   class="fw-600 input2_txt">
                                        </div>
                                        <label class="label" for="">Текст</label>
                                        <div class="" id="input">
                                            <textarea style="width: 100%" name="text" rows="10"
                                                      class="text-redactor"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="clearForm">
                                    Отмена
                                </button>
                                <button type="button" class="btn btn-primary" @click="save">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content">
                    <div role="tabpanel"
                         class="tab-pane show">
                        <table class="new-table">
                            <thead>
                            <tr>
                                <td>
                                    id
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Баннер
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Игра
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Заголовок
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Опции
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="banner in banners">
                                <td>
                                    {{banner.id}}
                                </td>
                                <td class="js-expand-table-item pointer">
                                    <img :src="imagesPath + banner.img">
                                </td>
                                <td class="js-expand-table-item pointer">
                                    {{banner.game.name}}
                                </td>
                                <td class="js-expand-table-item pointer">
                                    {{banner.title}}
                                </td>
                                <td class="t-a-r pr-15">
                                    <button class="pointer btn btn-dark-blue btn-small"
                                            data-toggle="modal"
                                            data-target="#addModal"
                                            @click="clearForm, setEditBanner(banner), imageSrc = `${imagesPath}${banner.img}`">
                                        Редактировать
                                    </button>
                                    <a :href="'<?php echo site_url('c-admin/marketplace/banners/delete/'); ?>' + banner.id"
                                       class="pointer txt-orange ml-15 fw-600" style="display: inline-block;">
                                        Удалить
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="flex">
                            <button
                                    data-toggle="modal"
                                    data-target="#addModal"
                                    @click="clearForm"
                                    class="btn btn-orange mt-15 mr-10 fw-400">
                                Добавить
                            </button>
                        </div>
                        <div class="pagination" v-if="pagesCount !== 0">
                            <div>
                                <div @click="prevPage" class="pagination__prev"></div>
                            </div>
                            <div v-for="item in pages">
                                <div class="pagination__item"
                                     @click="page = item"
                                     :class="{active: item === page}">
                                    {{item}}
                                </div>
                            </div>
                            <div>
                                <div @click="nextPage" class="pagination__next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js"></script>
<script src="https://cdn.tiny.cloud/1/qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc/tinymce/5/tinymce.min.js"></script>
<script src="sweetalert2.all.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.js"></script>
<script>
    const banners = new Vue({
        el: '#app',
        data() {
            return {
                page: 1,
                banners: [],
                edit: null,
                imageSrc: null,
                count: 0,
                limit: 0,
                imagesPath: '<?php echo $images_url; ?>',
                message: null
            }
        },
        watch: {
            page() {
                this.getBanners()
            }
        },
        computed: {
            pagesCount() {
                return Math.ceil(this.count / this.limit)
            },
            pages() {
                const pages = [];

                for (let i = 0; i <= this.pagesCount; i++) {
                    if (i !== 0) {
                        pages.push(i);
                    }
                }
                return pages;
            }
        },
        methods: {
            setEditBanner(banner) {
                this.edit = banner;
                tinymce.activeEditor.setContent(banner.text)
            },
            addShowBannerUploadImage(input) {
                if (input.files && input.files[0]) {
                    const url = URL.createObjectURL(input.files[0]);

                    if (input.files[0].type != "image/jpg"
                        && input.files[0].type != "image/jpeg"
                        && input.files[0].type != "image/svg+xml"
                        && input.files[0].type != "image/png") {

                        return;
                    }

                    let file, img;

                    if ((file = input.files[0])) {
                        img = new Image();
                        img.onload = function () {

                            if (this.width > 1080) {
                                input.value = '';
                                banners.imageSrc = null;

                                if (banners.edit !== null && banners.edit.img !== null) {
                                    banners.imageSrc = `${banners.imagesPath}${banners.edit.img}`;
                                }

                                return Swal.fire({
                                    icon: 'error',
                                    title: 'Упс...',
                                    text: 'Ширина изображения привышает 1080 пикселей!',
                                })
                            }

                            if (this.height > 460) {
                                input.value = '';
                                banners.imageSrc = null;

                                if (banners.edit !== null && banners.edit.img !== null) {
                                    banners.imageSrc = `${banners.imagesPath}${banners.edit.img}`;
                                }

                                return Swal.fire({
                                    icon: 'error',
                                    title: 'Упс...',
                                    text: 'Высота изображения привышает 460 пикселей!',
                                })
                            }
                            banners.imageSrc = url;
                        };
                        img.src = window.URL.createObjectURL(file);
                    }
                }
            },
            getBanners() {
                const form = new FormData();

                form.append('page', this.page);

                axios.post('<?php echo base_url('c-admin/ajax/marketplace/banners');?>', form)
                    .then(({data}) => {
                        this.banners = data.banners;
                        this.count = data.banners_count;
                        this.limit = data.limit;
                    })
            },
            clearForm() {
                document.forms.saveBanner.reset();
                this.imageSrc = null;
                tinymce.activeEditor.setContent('')
            },
            save() {
                const form = new FormData(document.forms.saveBanner);

                if (this.edit !== null) {
                    form.append('id', this.edit.id)
                }
                form.append('text', tinymce.activeEditor.getContent());

                axios.post('<?php echo base_url('c-admin/ajax/marketplace/banners/save');?>', form)
                    .then(() => {
                        this.getBanners()
                        document.forms.saveBanner.reset();

                        this.message = 'Баннер сохранено!';
                        this.imageSrc = null;
                        this.edit = null;
                    })
            },
            prevPage() {
                if (this.page > 1) {
                    this.page = this.page - 1;
                }
            },
            nextPage() {
                if (this.gamesCount > this.page) {
                    this.page = this.page + 1;
                }
            },
            initRedactor() {
                return tinymce.init({
                    selector: 'textarea.text-redactor',
                    plugins: 'save | code',
                    toolbar: 'save | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl | code',
                    toolbar_sticky: true,
                    autosave_ask_before_unload: false,
                    autosave_interval: '0.5s',
                    autosave_prefix: '{path}{query}-{id}-',
                    image_advtab: true,
                    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
                    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
                    height: 175,
                    image_caption: false,
                    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                    noneditable_noneditable_class: 'mceNonEditable',
                    toolbar_mode: 'sliding',
                    contextmenu: 'link image imagetools table',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                });
            }
        },
        mounted() {
            this.getBanners();
            this.initRedactor();
        }
    })
</script>