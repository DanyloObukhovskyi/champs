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
        <?php $activePath = 'ranks' ?>
        <?php require_once APPPATH . 'views/sidebar.php' ?>
    </aside>

    <div class="main-content">
        <h1 class="main-title">Ранги</h1>

        <div class="relative">
            <div id="app">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation"
                        v-for="(name, game) in games"
                        :class="{active: currentTab === game}">
                        <a @click="currentTab = game, page = 1" role="tab" data-toggle="tab">
                            {{name}}
                        </a>
                    </li>
                </ul>
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
                                    Изображение
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Ранг
                                </td>
                                <td class="js-expand-table-item pointer">
                                    От
                                </td>
                                <td class="js-expand-table-item pointer">
                                    До
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Действия
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="rank in ranks">
                                <td>
                                    {{rank.id}}
                                </td>
                                <td class="js-expand-table-item pointer">
                                    <img :src="imagesPath + rank.icon">
                                </td>
                                <td class="js-expand-table-item pointer">
                                    {{rank.rang}}
                                </td>
                                <td class="js-expand-table-item pointer">
                                    <div class="col-item">
                                        {{rank.points_from}}
                                    </div>
                                </td>
                                <td class="js-expand-table-item pointer">
                                    <div class="col-item">
                                        {{rank.points_to}}
                                    </div>
                                </td>
                                <td class="js-expand-table-item pointer">
                                    <button class="btn btn-dark-blue btn-small" @click="showEdit(rank)">Редактировать
                                    </button>
                                    <div @click="deleteRank(rank.id)" class="pointer txt-orange ml-15 fw-600"
                                         style="display: inline-block;">
                                        Удалить
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="flex">
                            <button @click="show = true" class="btn btn-orange mt-15 mr-10 fw-400">Добавить ранг
                            </button>
                        </div>
                        <div class="pagination">
                            <div>
                                <div @click="prevPage" class="pagination__prev"></div>
                            </div>
                            <div v-for="item in pagesCount">
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
                <div class="modal" :class="show ? 'show': 'fade'" tabindex="-1" role="dialog" aria-labelledby="addRank"
                     aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style="background: #333f52;color: white;">
                                <button type="button" class="close" @click="close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h3 class="modal-title  text-center" id="exampleModalLabel">Ранг</h3>
                            </div>
                            <div class="modal-body">
                                <form id="rankForm">
                                    <label>Иконка</label>
                                    <div class="input">
                                        <input type="file" class="input2_txt" name="icon">
                                    </div>
                                    <label>Ранг</label>
                                    <div class="input">
                                        <input type="number" class="input2_txt" name="rank" :value="choseRank?.rang">
                                    </div>
                                    <label>От</label>
                                    <div class="input">
                                        <input type="number" class="input2_txt" name="from"
                                               :value="choseRank?.points_from">
                                    </div>
                                    <label>До</label>
                                    <div class="input">
                                        <input type="number" class="input2_txt" name="to" :value="choseRank?.points_to">
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button v-if="choseRank !== null" type="button" class="btn btn-orange mt-15 mr-10"
                                        @click="changeRank">
                                    Сохранить
                                </button>
                                <button v-else type="button" class="btn btn-orange mt-15 mr-10" @click="addRank">
                                    Добавить
                                </button>
                                <button type="button" class="btn btn-orange mt-15 mr-10" @click="close">Закрыть</button>
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
<script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script>
    const ranking = new Vue({
        el: '#app',
        data: {
            page: 1,
            currentTab: '<?php echo $games[array_key_first($games)]['id']; ?>',
            games: {
                <?php foreach ($games as $game): ?>
                '<?php echo $game['id'];?>': ' <?php echo $game['name'];?>',
                <?php endforeach; ?>
            },
            ranks: {},
            ranksCount: 0,
            limit: 0,
            imagesPath: '<?php echo $images_url; ?>',
            show: false,
            choseRank: null
        },
        watch: {
            currentTab() {
                this.getRanks()
            },
            page() {
                this.getRanks()
            }
        },
        computed: {
            pagesCount() {
                return Math.ceil(this.ranksCount / this.limit)
            }
        },
        methods: {
            changeRank() {
                const form = document.querySelector('#rankForm');
                const data = new FormData(form);

                if (form.from.value === '') {
                    return this.errorMessage('Поле "От" обязательно для заполнения!')
                }
                if (form.rank.value === '') {
                    return this.errorMessage('Поле "Ранг" обязательно для заполнения!')
                }
                if (form.icon.value === '') {
                    data.delete('icon');
                }
                data.append('game_id', this.currentTab);
                data.append('id', this.choseRank.id);

                axios.post('<?php echo base_url('c-admin/ajax/ranks/edit');?>', data)
                    .then(({data}) => {
                        this.getRanks();
                        this.close();
                    })
            },
            showEdit(rank) {
                this.close();

                this.choseRank = rank;
                this.show = true;
            },
            deleteRank(id) {
                const url = '<?php echo base_url('c-admin/ajax/ranks/delete/');?>' + id;

                c_delete(url, 'test', 'Post')
            },
            errorMessage(message) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Упс...',
                    text: message,
                })
            },
            addRank() {
                const form = document.querySelector('#rankForm');
                const data = new FormData(form);

                if (form.from.value === '') {
                    return this.errorMessage('Поле "От" обязательно для заполнения!')
                }
                if (form.rank.value === '') {
                    return this.errorMessage('Поле "Ранг" обязательно для заполнения!')
                }
                if (form.icon.value === '') {
                    return this.errorMessage('Иконка ранга обязательна для загрузки!')
                }
                data.append('game_id', this.currentTab)

                axios.post('<?php echo base_url('c-admin/ajax/ranks/add');?>', data)
                    .then(({data}) => {
                        this.getRanks();
                        this.close();
                    })
            },
            close() {
                const form = document.querySelector('#rankForm');
                form.reset();

                this.show = false;
                this.choseRank = null;
            },
            getRanks() {
                const form = new FormData();

                form.append('game', this.currentTab)
                form.append('page', this.page)

                axios.post('<?php echo base_url('c-admin/ajax/ranks');?>', form)
                    .then(({data}) => {
                        this.ranks = data.ranks;
                        this.ranksCount = data.ranks_count;
                        this.limit = data.limit;
                    })
            },
            prevPage() {
                if (this.page > 1) {
                    this.page = this.page - 1;
                }
            },
            nextPage() {
                if (this.ranksCount > this.page) {
                    this.page = this.page + 1;
                }
            }
        },
        mounted() {
            this.getRanks()
        }
    })
</script>