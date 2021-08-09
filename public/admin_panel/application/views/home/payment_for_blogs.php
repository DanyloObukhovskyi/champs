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
        <?php $activePath = 'blogs/transactions' ?>
        <?php require_once APPPATH . 'views/sidebar.php' ?>
    </aside>

    <div class="main-content">
        <h1 class="main-title">Выплаты Блогерам</h1>
        <div class="relative">
            <div id="app">
                <div class="tab-content">
                    <div role="tabpanel"
                         class="tab-pane show">
                        <table class="new-table">
                            <thead>
                            <tr>
                                <td>
                                    Идентификатор
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Дата
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Время
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Ник
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Фио
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Сумма
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Статус
                                </td>
                                <td class="js-expand-table-item pointer">

                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="transaction in transactions">
                                <td>
                                    {{transaction.id}}
                                </td>
                                <td>
                                    {{transaction.date}}
                                </td>
                                <td>
                                    {{transaction.time}}
                                </td>
                                <td>
                                    {{transaction.nickname}}
                                </td>
                                <td>
                                    {{transaction.user.name}}  {{transaction.user.family}}
                                </td>
                                <td>
                                    {{transaction.amount}}
                                </td>
                                <td>
                                    {{statuses[transaction.status]}}
                                </td>
                                <td class="d-flex" style="width: 25%;">
                                    <button v-if="transaction.status !== 'success' &&  transaction.status !== 'cancel'" class="btn btn-success btn-small"
                                            @click="transaction.status = 'success'">
                                        Подтвердить
                                    </button>
                                    <button v-if="transaction.status !== 'success' &&  transaction.status !== 'cancel'" class="btn btn-danger btn-small"
                                            @click="transaction.status = 'cancel'">
                                        Отменить
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="flex" @click="save">
                            <button class="btn btn-orange mt-15 mr-10 fw-400">Сохранить изменения</button>
                        </div>
                        <div class="pagination" v-if="pagesCount > 1">
                            <div v-if="page > 1">
                                <div @click="prevPage" class="pagination__prev"></div>
                            </div>
                            <div v-for="item in pagesCount">
                                <div class="pagination__item"
                                     @click="page = item"
                                     :class="{active: item === page}">
                                    {{item}}
                                </div>
                            </div>
                            <div v-if="pagesCount > page">
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
    const app = new Vue({
        el: '#app',
        data: {
            page: 1,
            transactions: [],
            transactionsCount: 0,
            limit: 10,
            statuses: {}
        },
        watch: {
            page() {
                this.getTransactions()
            }
        },
        computed: {
            pagesCount() {
                return Math.ceil(this.transactionsCount/this.limit)
            }
        },
        methods: {
            getTransactions() {
                const form = new FormData();

                form.append('page', this.page)

                axios.post('<?php echo base_url('c-admin/ajax/blogs/transactions');?>', form)
                    .then(({data}) => {
                        this.transactions = data.transactions;
                        this.transactionsCount = data.transactions_count;
                        this.statuses = data.statuses;

                        this.limit = data.limit;
                    })
            },
            save() {
                const form = new FormData();
                form.append('transactions', JSON.stringify(this.transactions))

                axios.post('<?php echo base_url('c-admin/ajax/blogs/transactions/save');?>', form)
                    .then(() => {
                        this.getTransactions()
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
                if (this.transactionsCount > this.page){
                    this.page = this.page + 1;
                }
            }
        },
        mounted() {
            this.getTransactions();
        }
    })
</script>