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

    .w-100 {
        width: 100%;
    }

    tbody img {
        width: 50px;
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
        <?php $activePath = 'referral' ?>
        <?php require_once APPPATH . 'views/sidebar.php' ?>
    </aside>

    <div class="main-content">
        <h1 class="main-title">Реферрал</h1>

        <div class="relative">
            <div id="app">
                <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">{{edit !== null ? `Редактировать баннер №${edit.id}`: 'Добавить баннер' }}</h5>
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
                                        <label class="label" for="">Игра</label>
                                        <div class="input mb-5" id="input">
                                            <select name="game" class="fw-600 input2_txt form-control">
                                                <?php foreach ($games as $game):?>
                                                    <option value="<?php echo $game['id']?>">
                                                        <?php echo $game['name']?>
                                                    </option>
                                                <?php endforeach;?>
                                            </select>
                                        </div>
                                        <label class="label" for="">Заголовок</label>
                                        <div class="input mb-5" id="input">
                                            <input name="title" type="text" :value="edit !== null ? edit.title: ''" class="fw-600 input2_txt">
                                        </div>
                                        <label class="label" for="">Код</label>
                                        <div class="input mb-5" id="input">
                                            <input name="type" type="text" :value="edit !== null ? edit.type: ''" class="fw-600 input2_txt">
                                        </div>
                                        <label class="label" for="">Ссылка</label>
                                        <div class="input mb-5" id="input">
                                            <input name="link" type="text" :value="edit !== null ? edit.link: ''" class="fw-600 input2_txt">
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="clearForm">Отмена</button>
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
                                    Игра
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Заголовок
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Ссылка
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Опции
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in links">
                                <td>
                                    {{item.id}}
                                </td>
                                <td>
                                    {{item.game.name}}
                                </td>
                                <td class="js-expand-table-item pointer">
                                    {{item.title}}
                                </td>
                                <td class="js-expand-table-item pointer">
                                    {{item.link}}
                                </td>
                                <td class="t-a-r pr-15">
                                    <button class="pointer btn btn-dark-blue btn-small"
                                            data-toggle="modal"
                                            data-target="#addModal"
                                            @click="clearForm, edit = item">
                                        Редактировать
                                    </button>
                                    <a :href="'<?php echo site_url('c-admin/links/delete/'); ?>' + item.id"
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
<script>
    const games = new Vue({
        el: '#app',
        data() {
            return {
                page: 1,
                links: [],
                edit: null,
                count: 0,
                limit: 0,
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

                for (let i = 0; i <= this.pagesCount; i++){
                    if (i !== 0){
                        pages.push(i);
                    }
                }
                return pages;
            }
        },
        methods: {
            getBanners() {
                const form = new FormData();

                form.append('page', this.page)

                axios.post('<?php echo base_url('c-admin/ajax/referral');?>', form)
                    .then(({data}) => {
                        this.links = data.links;
                        this.count = data.links_count;
                        this.limit = data.limit;
                    })
            },
            clearForm() {
                document.forms.saveBanner.reset();
                this.imageSrc = null;
            },
            save() {
                const form = new FormData(document.forms.saveBanner);

                if (this.edit !== null){
                    form.append('id', this.edit.id)
                }
                axios.post('<?php echo base_url('c-admin/ajax/referral/save');?>', form)
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
            }
        },
        mounted() {
            this.getBanners();
        }
    })
</script>