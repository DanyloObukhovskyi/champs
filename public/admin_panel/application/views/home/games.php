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

    .event_icon {
        background-color: black;
        width: min-content;
        padding: 2px;
        border-radius: 6px;
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
        <?php $activePath = 'games' ?>
        <?php require_once APPPATH . 'views/sidebar.php' ?>
    </aside>

    <div class="main-content">
        <h1 class="main-title">Игры</h1>

        <div class="relative">
            <div id="app">
                <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">{{editGame !== null ? `Редактировать игру №${editGame.id}`: 'Добавить игру' }}</h5>
                                <div class="alert alert-success" role="alert" v-if="message !== null">
                                    {{message}}
                                    <button type="button" class="close" @click="message = null">
                                        <span aria-hidden="true" style="font-size: 25px; color: black">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div class="modal-body">
                                <form name="saveGame">
                                    <div class="col-item">
                                        <label class="label" for="">Лого(размеры:50x50)</label>
                                        <div class="input mb-5">
                                            <input name="logo" type="file" class="fw-600 input2_txt">
                                        </div>
                                        <label class="label" for="">Иконка в меню(размеры:50x50)</label>
                                        <div class="input mb-5">
                                            <input name="sidebar_icon" type="file" class="fw-600 input2_txt">
                                        </div>
                                        <label class="label" for="">Иконка в новости(размеры:50x50)</label>
                                        <div class="input mb-5">
                                            <input name="news_icon" type="file" class="fw-600 input2_txt">
                                        </div>
                                        <label class="label" for="">Иконка в турнирах(размеры:50x50)</label>
                                        <div class="input mb-5">
                                            <input name="event_icon" type="file" class="fw-600 input2_txt">
                                        </div>
                                        <label class="label" for="">Название</label>
                                        <div class="input mb-5" id="input">
                                            <input name="name" type="text" :value="editGame !== null ? editGame.name: ''" class="fw-600 input2_txt">
                                        </div>
                                        <label class="label" for="">Код</label>
                                        <div class="input mb-5" id="input">
                                            <input name="code" type="text" :value="editGame !== null ? editGame.code: ''" class="fw-600 input2_txt">
                                        </div>
                                        <label class="label" for="">Показывать игру на странице обучение?</label>
                                        <div class=" mb-5">
                                            <input name="is_marketplace" :checked="editGame !== null && editGame.is_marketplace === '1'" type="checkbox" class="form-check-input">
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
                                    Лого
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Иконка в меню
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Иконка в новостях
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Иконка в турнирах
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Название
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Код
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Опции
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="game in games">
                                <td>
                                    {{game.id}}
                                </td>
                                <td class="js-expand-table-item pointer">
                                    <img :src="imagesPath + game.logo">
                                </td>
                                <td class="js-expand-table-item pointer" >
                                    <img :src="imagesPath + game.sidebar_icon" v-if="game.sidebar_icon !== null">
                                </td>
                                <td class="js-expand-table-item pointer">
                                    <img :src="imagesPath + game.news_icon" v-if="game.news_icon !== null">
                                </td>
                                <td class="js-expand-table-item pointer">
                                    <div class="event_icon" v-if="game.event_icon !== null">
                                        <img :src="imagesPath + game.event_icon" >
                                    </div>
                                </td>
                                <td class="js-expand-table-item pointer">
                                    {{game.name}}
                                </td>
                                <td class="js-expand-table-item pointer">
                                    {{game.code}}
                                </td>
                                <td class="t-a-r pr-15">
                                    <button class="pointer btn btn-dark-blue btn-small"
                                            data-toggle="modal"
                                            data-target="#addModal"
                                            @click="clearForm, editGame = game, imageSrc = `${imagesPath}${game.logo}`">
                                        Редактировать
                                    </button>
                                    <a :href="'<?php echo site_url('c-admin/game/delete/'); ?>' + game.id"
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
                games: [],
                editGame: null,
                imageSrc: null,
                gamesCount: 0,
                limit: 0,
                imagesPath: '<?php echo $images_url; ?>',
                message: null
            }
        },
        watch: {
            page() {
                this.getGames()
            }
        },
        computed: {
            pagesCount() {
                return Math.ceil(this.gamesCount / this.limit)
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
            addShowGameUploadImage(input) {
                if (input.files && input.files[0]) {
                    const url = URL.createObjectURL(input.files[0]);

                    if (input.files[0].type != "image/jpg"
                        && input.files[0].type != "image/jpeg"
                        && input.files[0].type != "image/svg+xml"
                        && input.files[0].type != "image/png") {

                        return;
                    }
                    this.imageSrc = url
                }
            },
            getGames() {
                const form = new FormData();

                form.append('page', this.page)

                axios.post('<?php echo base_url('c-admin/ajax/games');?>', form)
                    .then(({data}) => {
                        this.games = data.games;
                        this.gamesCount = data.games_count;
                        this.limit = data.limit;
                    })
            },
            clearForm() {
                document.forms.saveGame.reset();
                this.imageSrc = null;
            },
            save() {
                const form = new FormData(document.forms.saveGame);

                if (this.editGame !== null){
                    form.append('id', this.editGame.id)
                }
                axios.post('<?php echo base_url('c-admin/ajax/games/save');?>', form)
                    .then(() => {
                        this.getGames()
                        document.forms.saveGame.reset();
                        this.message = 'Игру сохранено!';
                        this.imageSrc = null;
                        this.editGame = null;
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
            this.getGames();
        }
    })
</script>