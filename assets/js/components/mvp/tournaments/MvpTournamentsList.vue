<template>
    <div class="container">
        <div class="row">
            <div class="component upcoming_events" id="upcoming_events">
                <div class="header">
                    <div class="round">
                        <div><img src="/images/lamp.svg" alt="lamp" /></div>
                    </div>
                    <div class="title">
                        Турниры {{game}}
                    </div>
                </div>
                <div class="load w-100 h-100 d-flex justify-content-center align-items-center" v-if="load">
                    <load/>
                </div>
                <div class="grid" v-for="tournament in tournaments" v-if="!load">
                    <a :href="'/ru/mvp/tournament/' + tournament.id" class="grid-row">
                        <div class="logo">
                            <img :src="tournament.logo" />
                        </div>
                        <div class="data">
                            <div class="title">
                                <span>{{tournament.name}} #{{tournament.number}}</span>
                            </div>
                            <div class="bottom">
                                <div class="date">
                                    <span>Название</span>
                                </div>
                            </div>
                        </div>
                        <div class="data">
                            <div class="title">
                                <span>{{tournament.date}}</span>
                            </div>
                            <div class="bottom">
                                <div class="date">
                                    <span>Дата</span>
                                </div>
                            </div>
                        </div>
                        <div class="data">
                            <div class="title">
                                <span>{{tournament.mode}}</span>
                            </div>
                            <div class="bottom">
                                <div class="date">
                                    <span>Режим</span>
                                </div>
                            </div>
                        </div>
                        <div class="data">
                            <div class="title">
                                <i class="fas fa-lock-open" v-if="tournament.access"></i>
                                <i class="fas fa-lock" v-else></i>
                            </div>
                            <div class="bottom">
                                <div class="date">
                                    <span>Доступ</span>
                                </div>
                            </div>
                        </div>
                        <div class="data">
                            <div class="title">
                                <span>{{tournament.prize}}</span>
                            </div>
                            <div class="bottom">
                                <div class="date">
                                    <span>Приз</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Load from "../../Load";

    export default {
        name: "MvpTournamentsList",
        inject: [
            'http',
            'header'
        ],
        components: {
            'load': Load
        },
        data(){
            return {
                tournaments: [],
                games: {
                    'CS:GO': 'cs',
                    'DOTA': 'dota',
                    'Valorant': 'valorant'
                },
                load: false,
            }
        },
        watch: {
            game(){
                this.getTournamentsByGame();
            }
        },
        computed: {
            game(){
                return  this.header.game;
            }
        },
        methods: {
            getTournamentsByGame(){
                this.load = true;

                this.http.getTournamentsByGame(this.games[this.header.game])
                    .then(({data}) => {
                        this.tournaments = data;
                        this.load = false;
                    })
            }
        },
        created() {
            this.getTournamentsByGame();
        }
    }
</script>