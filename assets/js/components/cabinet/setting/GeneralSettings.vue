<template>
    <div class="setting-container-body general-settings">
        <div class="title">
            Общие настройки
        </div>
        <div class="general-settings-body d-flex">
            <div class="setting-col-1">
                <div class="form-group">
                    <label>Имя</label>
                    <div class="input">
                        <input type="text" v-model="name">
                    </div>
                </div>
                <div class="form-group">
                    <label>Никнейм</label>
                    <div class="input">
                        <input type="text" v-model="nickname">
                    </div>
                </div>
                <div class="form-group">
                    <label>Ваша основная игра</label>
                    <multiselect
                            v-model="game"
                            :options="$store.state.header.games"
                            :multiple="false"
                            :searchable="false"
                            label="name"
                            track-by="name"
                            placeholder="">
                    </multiselect>
                </div>
                <div class="form-group">
                    <button class="button-save" :class="{disable: load}" @click="save">
                        Сохранить изменения
                        <svg v-if="load" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
                                    stroke-dasharray="164.93361431346415 56.97787143782138">
                                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                                  dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                            </circle>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="setting-col-2">
                <div class="form-group">
                    <label>Фамилия</label>
                    <div class="input">
                        <input type="text" v-model="family">
                    </div>
                </div>
                <div class="form-group">
                    <label>Емейл</label>
                    <div class="input">
                        <input type="email" v-model="email">
                    </div>
                </div>
                <div class="ranks">
                    <div class="form-group">
                        <label>MMR/ELO</label>
                        <div class="input">
                            <input type="number" v-model="rank">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Звание</label>
                        <div class="input">
                            <input type="text" disabled v-model="rankString">
                        </div>
                    </div>
                    <div class="form-group rank-icon" v-if="rankIcon !== null">
                        <label>Ранг</label>
                        <div class="input">
                            <img :src="'/images/ranks/' + rankIcon">
                        </div>
                    </div>
                </div>
                <div class="form-group timezone">
                    <label>Часовой пояс</label>
                    <multiselect
                            v-model="timezone"
                            :options="timezones"
                            :multiple="false"
                            group-values="zones"
                            group-label="gmt"
                            placeholder=""
                            :group-select="false">
                        <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                    </multiselect>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import {mapGetters} from 'vuex';
    import Swal from 'sweetalert2'

    import CabinetService from "../../../services/CabinetService";

    export default {
        name: "GeneralSettings",
        components: {
            Multiselect
        },
        data() {
            return {
                timezones: [],
                timezone: null,
                game: null,
                name: null,
                nickname: null,
                family: null,
                email: null,
                rank: null,
                load: false,
            }
        },
        computed: {
            ...mapGetters([
                'user',
            ]),
            ...mapGetters('cabinet/setting', [
                'ranks',
            ]),
            userRank() {
                if (this.game !== null) {
                    const ranks = this.ranks[this.game.code];

                    if (ranks) {
                        const userRank = ranks.find(e => {
                            if (Number(e.pointsFrom) <= Number(this.rank)){
                                if (e.pointsTo === null || Number(e.pointsTo) >= Number(this.rank)){
                                    return e;
                                }
                            }
                        })
                        if (userRank !== undefined && userRank !== null){
                            return userRank;
                        }
                    }
                }
                return null;
            },
            rankString() {
                if (this.userRank !== null){
                    return this.userRank.rank;
                }
                return null;
            },
            rankIcon() {
                if (this.userRank !== null){
                    return this.userRank.icon;
                }
                return null;
            }
        },
        watch: {
            'user.game': function () {
                this.game = this.user.game;
            }
        },
        methods: {
            getTimezones() {
                CabinetService.getTimezones()
                    .then(timezones => {
                        this.timezones = timezones;
                    })
            },
            setUser() {
                this.timezone = this.user.timezone;
                this.game = this.user.game;

                this.name = this.user.name;
                this.nickname = this.user.nickname;

                this.family = this.user.family;
                this.email = this.user.email;

                this.rank = this.user.rank;
                this.rankString = this.user.rankString;
            },
            save() {
                if (!this.load) {
                    this.load = true;
                    const form = new FormData();

                    form.append('name', this.name);
                    form.append('nickname', this.nickname);
                    form.append('family', this.family);
                    form.append('email', this.email);
                    form.append('rank', this.rank);
                    form.append('rankString', this.rankString);
                    form.append('game', this.game ? this.game.code : null);
                    form.append('timezone', this.timezone);

                    CabinetService.updateUser(form)
                        .then(data => {
                            this.$store.commit('setUser', data)

                            Swal.fire({
                                icon: 'success',
                                title: 'Изменения были сохранены!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.load = false;
                        })
                        .catch(({response: {data}}) => {
                            this.load = false;

                            Swal.fire({
                                icon: 'error',
                                title: 'Упс...',
                                text: data.email,
                            })
                        })
                }
            }
        },
        mounted() {
            this.getTimezones();
            this.setUser();
        }
    }
</script>

<style scoped lang="scss">

    @keyframes update {
        from {
            background-color: #00d400;
        }
        to {
            background-color: #ff6d1d;
        }
    }

    .general-settings-body {
        margin-top: 1.5vw;
        margin-left: .1vw;
        margin-right: .1vw;
    }

    .ranks {
        display: flex;

        .form-group:nth-child(1) {
            width: 60%;
        }

        .rank-icon {
            width: auto;
            margin-right: -.5vw;

            .input {
                background: transparent;
                display: flex;
                justify-content: center;

                img {
                    height: 2.3vw;
                }
            }
        }
    }

    .form-group.timezone {
        width: 11vw;
    }
</style>