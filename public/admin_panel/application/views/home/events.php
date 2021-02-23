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
        <?php $activePath = 'events' ?>
        <?php require_once APPPATH . 'views/sidebar.php' ?>
    </aside>

    <div class="main-content">
        <h1 class="main-title">События</h1>
        <div class="relative">
            <div id="app">
                <div class="tab-content">
                    <div role="tabpanel"
                         class="tab-pane show">
                        <?php if ($this->session->flashdata('message')) {?>
                            <div class="alert alert-success" role="alert">
                                <?php echo $this->session->flashdata('message');?>
                            </div>
                        <?php }?>
                        <table class="new-table">
                            <thead>
                            <tr>
                                <td>
                                    id
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Название
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Дата начала
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Дата конца
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Приз
                                </td>
                                <td class="js-expand-table-item pointer">
                                    Локация
                                </td>
                                <td class="js-expand-table-item pointer">

                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="event in events">
                                <td>
                                    {{event.id}}
                                </td>
                                <td>
                                    {{event.name}}
                                </td>
                                <td>
                                    {{event.started_at}}
                                </td>
                                <td>
                                    {{event.ended_at}}
                                </td>
                                <td>
                                    {{event.prize}}
                                </td>
                                <td>
                                    {{event.location}}
                                </td>
                                <td class="d-flex" style="width: 25%;">
                                    <a :href="'<?php echo base_url('c-admin/events/edit/'); ?>' + event.id"
                                       class="btn btn-dark-blue btn-small">
                                        Редактировать
                                    </a>
                                    <a :href="'<?php echo base_url('c-admin/events/delete/'); ?>' + event.id"
                                            class="pointer txt-orange ml-15 fw-600">
                                        Удалить
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="flex">
                            <a href="<?php echo base_url('c-admin/events/create/'); ?>" class="btn btn-orange mt-15 mr-10 fw-400">Добавить событие</a>
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
            events: [],
            eventsCount: 0,
            limit: 10,
        },
        watch: {
            page() {
                this.getEvents()
            }
        },
        computed: {
            pagesCount() {
                return Math.ceil(this.eventsCount/this.limit)
            }
        },
        methods: {
            getEvents() {
                const form = new FormData();

                form.append('page', this.page)

                axios.post('<?php echo base_url('c-admin/ajax/events');?>', form)
                    .then(({data}) => {
                        this.events = data.events;
                        this.eventsCount = data.events_count;

                        this.limit = data.limit;
                    })
            },
            save() {
                const form = new FormData();
                form.append('events', JSON.stringify(this.events))

                axios.post('<?php echo base_url('c-admin/ajax/events/save');?>', form)
                    .then(() => {
                        this.getEvents()
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
                if (this.eventsCount > this.page){
                    this.page = this.page + 1;
                }
            }
        },
        mounted() {
            this.getEvents();
        }
    })
</script>