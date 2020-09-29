<template>
    <div class="cont">
        <div class="container commands p-0 mt-3">
            <div class=" w-75 d-flex">
                <div class="card w-50 mr-2 border-radius-0">
                    <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between">
                            Настроен играть серьезно?
                            <span class="badge badge-warning border-radius-0">5x5</span>
                        </h5>
                        <p class="card-text">Создай свою команду для туриков 5v5 и врывайся в киберспорт</p>
                        <a class="btn-orange text-light p-2 pointer"
                           data-toggle="modal"
                           @click="command.capacity = 5"
                           data-target="#makeComandModal">
                            Создать команду 5х5
                        </a>
                    </div>
                </div>
                <div class="card w-50 border-radius-0">
                    <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between">
                            Напарники
                            <span class="badge badge-warning border-radius-0">2x2</span>
                        </h5>
                        <p class="card-text">Нет постоянной команды? Позови друга и выносите соперников вместе</p>
                        <a class="btn-orange text-light p-2 pointer"
                           data-toggle="modal"
                           @click="command.capacity = 2"
                           data-target="#makeComandModal">
                            Создать команду 2х2
                        </a>
                    </div>
                </div>
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
                                <small class="form-text text-muted">Можно латинские буквы и цифры</small>
                            </div>
                            <div class="form-group">
                                <label>Тег команды</label>
                                <input v-model="command.tag" type="text" class="form-control border-radius-0 w-50">
                                <small class="form-text text-muted">Максимум 6 символов</small>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <a @click="createTeam" class="btn-orange text-light p-2 text-center pointer w-100" >Создать команду</a>
                            <a data-dismiss="modal" aria-label="Close" class="btn-grey pointer text-center text-light border-radius-0 p-2 w-75">Отменить</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MvpTeams",
        props: [
          'createRoute'
        ],
        data(){
            return {
                command: {
                    capacity: null,
                    name: null,
                    tag: null
                }
            }
        },
        methods: {
            createTeam(){
                axios.post(this.createRoute, this.command)
            }
        }
    }
</script>

<style scoped>

</style>