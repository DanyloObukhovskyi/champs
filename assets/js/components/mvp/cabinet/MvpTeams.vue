<template>
    <div class="cont">
        <div class="container commands p-0 mt-3">
            <div class="w-75 d-flex">
                <mvp-team
                    title="Настроен играть серьезно?"
                    description="Создай свою команду для туриков 5v5 и врывайся в киберспорт"
                    type="5x5"
                    capacity="5"
                    @setCapacity="setCapacity"
                    :teams="teams"
                />
                <mvp-team
                    title="Напарники"
                    description="Нет постоянной команды? Позови друга и выносите соперников вместе"
                    type="2x2"
                    capacity="2"
                    @setCapacity="setCapacity"
                    :teams="teams"
                />
            </div>
            <div class="modal fade" id="makeComandModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content border-radius-0">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Создать команду</h5>
                            <a class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </a>
                        </div>
                        <div class="modal-body">
                            <div class="text">
                                <p>
                                    Придумай название (сможешь поменять потом)
                                </p>
                            </div>
                            <div class="form-group">
                                <label>Название команды</label>
                                <input v-model="command.name" type="text" class="form-control border-radius-0">
                                <small class="form-text text-muted" v-if="!messages.error.hasOwnProperty('name')">
                                    Можно латинские буквы и цифры
                                </small>
                                <small class="form-text text-danger" v-if="messages.error.hasOwnProperty('name')">
                                    {{ messages.error.name[0] }}
                                </small>
                            </div>
                            <div class="form-group">
                                <label>Тег команды</label>
                                <input v-model="command.tag" type="text" class="form-control border-radius-0 w-50">
                                <small class="form-text text-muted" v-if="!messages.error.hasOwnProperty('tag')">
                                    Максимум 6 символов
                                </small>
                                <small class="form-text text-danger" v-if="messages.error.hasOwnProperty('tag')">
                                    {{ messages.error.tag[0] }}
                                </small>
                            </div>
                            <div class="text">
                                <p class="text-success" v-if="messages.success !== null">
                                    {{ messages.success }}
                                </p>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <a @click="createTeam" class="btn-orange text-light p-2 text-center pointer w-100" >Создать команду</a>
                            <a data-dismiss="modal" aria-label="Close" class="btn-grey pointer text-center text-light border-radius-0 p-2 w-75">Отменить</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="123">
                <mvp-joined-teams/>
            </div>
        </div>
    </div>
</template>

<script>
    import MvpTeam from "./MvpTeam";
    import MvpJoinedTeams from "./MvpJoinedTeams";

    export default {
        name: "MvpTeams",
        components: {
            'mvp-team': MvpTeam,
            'mvp-joined-teams': MvpJoinedTeams
        },
        inject: ['http'],
        data(){
            return {
                teams: [],
                command: {
                    capacity: null,
                    name: null,
                    tag: null
                },
                messages: {
                    success: null,
                    error: {},
                }
            }
        },
        methods: {
            createTeam() {
                const {capacity, name, tag} = this.command;

                this.messages.success = null;
                this.messages.error = {};

                this.http.createMvpTeam(capacity, name, tag)
                    .then(({data}) => {
                        this.messages.success = data.message;
                        this.teams.push(data.team);
                    })
                    .catch(({response}) => {
                        this.messages.error = response.data;
                    })
            },
            getUserTeams() {
                this.http.getUserTeams()
                    .then(({data}) => {
                        this.teams = data;
                    })
            },
            setCapacity(capacity) {
                this.command.capacity = capacity;
            }
        },
        mounted() {
            this.getUserTeams()
        }
    }
</script>