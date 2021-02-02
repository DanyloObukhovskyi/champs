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
        <?php $activePath = 'comments' ?>
        <?php require_once APPPATH . 'views/sidebar.php' ?>
    </aside>

    <div class="main-content">
        <h1 class="main-title">Комментарии</h1>
        <div class="relative">
            <div id="app">
                <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="editComment !== null">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">{{`Редактировать коментарий №${editComment.id}`}}</h5>
                            </div>
                            <div class="modal-body">
                                <form name="saveGame">
                                    <div class="col-item">
                                        <label class="label" for="">Комментарий</label>
                                        <div class="input mb-5">
                                            <input name="logo" type="text" class="fw-600 input2_txt" v-model="editComment.comment">
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="editComment = null">Отмена</button>
                                <button type="button" class="btn btn-primary" @click="saveComments">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane show">
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation"
                                @click="currentTab = key"
                                :class="{active: key === currentTab}"
                                v-for="(tab, key) in tabs">
                                <a href="#home" aria-controls="home" role="tab" data-toggle="tab">{{tab}}</a>
                            </li>
                        </ul>
                        <table class="new-table">
                            <thead>
                            <tr>
                                <td>
                                    id
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Пользователь
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Текст коментария
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Дата
                                </td>
                                <td class="js-expand-table-item pointer">

                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="comment in comments">
                                <td>
                                    {{comment.id}}
                                </td>
                                <td class="js-expand-table-item pointer">
                                    <a class="pointer"
                                       :href="'<?php print base_url("c-admin/user/edit/"); ?>' + comment.user_id + '<?php echo '/' . $auth_id?>'">
                                        {{comment.user_id}}
                                    </a>
                                </td>
                                <td class="js-expand-table-item pointer">
                                    {{comment.comment}}
                                </td>
                                <td class="js-expand-table-item pointer">
                                    {{comment.created_at}}
                                </td>
                                <td class="t-a-r pr-15">
                                    <button class="btn btn-dark-blue btn-small"
                                            data-toggle="modal"
                                            data-target="#addModal"
                                            @click="editComment = comment">
                                        Редактировать
                                    </button>
                                    <a :href="`<?php echo base_url('/c-admin/comments/delete/')?>${currentTab}/${comment.id}`" class="pointer txt-orange ml-15 fw-600" style="display: inline-block;">
                                        Удалить
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
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
    const tabs = JSON.parse('<?php echo json_encode($types)?>');

    const app = new Vue({
        el: '#app',
        data: {
            page: 1,
            comments: [],
            currentTab: '<?php echo array_keys($types)[0]?>',
            tabs,
            commentsCount: 0,
            limit: 10,
            editComment: null,
        },
        watch: {
            page() {
                this.getComments()
            },
            currentTab() {
                this.getComments()
            }
        },
        computed: {
            pagesCount() {
                return Math.ceil(this.commentsCount / this.limit)
            }
        },
        methods: {
            getComments() {
                const form = new FormData();

                form.append('page', this.page)
                form.append('type', this.currentTab)

                axios.post('<?php echo base_url('c-admin/ajax/comments');?>', form)
                    .then(({data}) => {
                        this.comments = data.comments;
                        this.commentsCount = data.comments_count;

                        this.limit = data.limit;
                    })
            },
            saveComments() {
                const form = new FormData();

                form.append('comments', JSON.stringify(this.comments));
                form.append('type', this.currentTab);

                axios.post('<?php echo base_url('c-admin/ajax/comments/save');?>', form)
                    .then(() => {
                        this.getComments()
                        Swal.fire({
                            icon: 'success',
                            title: 'Сохранено!',
                        })
                    })
            },
            prevPage() {
                if (this.page > 1) {
                    this.page = this.page - 1;
                }
            },
            nextPage() {
                if (this.commentsCount > this.page) {
                    this.page = this.page + 1;
                }
            },
            save() {

            }
        },
        mounted() {
            this.getComments();
        }
    })
</script>