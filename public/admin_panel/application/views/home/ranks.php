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
                                    от
                                </td>
                                <td class="js-expand-table-item pointer">
                                    до
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
                                    {{rank.rank}}
                                </td>
                                <td class="js-expand-table-item pointer">
                                    <div class="col-item">
                                        <div class="input">
                                            <input type="number" class="input2_txt" v-model="rank.points_from">
                                        </div>
                                    </div>
                                </td>
                                <td class="js-expand-table-item pointer">
                                    <div class="col-item">
                                        <div class="input">
                                            <input type="number" class="input2_txt" v-model="rank.points_to">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="flex" @click="save">
                            <button class="btn btn-orange mt-15 mr-10 fw-400">Сохранить изменения</button>
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
            </div>
        </div>
    </div>
</main>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js"></script>
<script>
    const ranking = new Vue({
        el: '#app',
        data: {
            page: 1,
            currentTab: '<?php echo array_key_first($games); ?>',
            games: {
                <?php foreach ($games as $game => $name): ?>
                    '<?php echo $game?>': ' <?php echo $name;?>',
                <?php endforeach; ?>
            },
            ranks: {},
            ranksCount: 0,
            limit: 0,
            imagesPath: '<?php echo $images_url; ?>'
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
                return Math.ceil(this.ranksCount/this.limit)
            }
        },
        methods: {
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
            save() {
                const form = new FormData();

                form.append('ranks', JSON.stringify(this.ranks))
                axios.post('<?php echo base_url('c-admin/ajax/ranks/save');?>', form)
                    .then(() => {
                        this.getRanks()
                        Swal.fire({
                            icon: 'success',
                            title: 'Сохранено!',
                        })
                    })
            },
            prevPage() {
                if (this.page > 1){
                    this.page = this.page - 1;
                }
            },
            nextPage() {
                if (this.ranksCount > this.page){
                    this.page = this.page + 1;
                }
            }
        },
        mounted() {
            this.getRanks()
        }
    })
</script>