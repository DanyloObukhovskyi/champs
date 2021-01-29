<template>
    <div class="setting-container-body general-settings">
        <div class="trainer-title" v-if="user.isTrainer">
            Общие настройки
        </div>
        <div class="title" v-else>
            Общие настройки
        </div>
        <div class="general-settings-body d-flex">
            <div class="setting-col-1">
                <div class="form-group">
                    <label>Имя</label>
                    <div class="input">
                        <input type="text" v-model="user.name">
                    </div>
                </div>
                <div class="form-group">
                    <label>Никнейм</label>
                    <div class="input">
                        <input type="text" v-model="user.nickname">
                    </div>
                </div>
                <div class="form-group">
                    <label>Пол</label>
                    <multiselect
                            v-model="user.gender"
                            :options="genders"
                            :multiple="false"
                            :searchable="false"
                            label="name"
                            track-by="name"
                            placeholder="Выберете из списка">
                    </multiselect>
                </div>
                <div class="form-group">
                    <label>Страна</label>
                    <multiselect
                            v-model="user.country"
                            :options="countries"
                            :multiple="false"
                            :searchable="false"
                            label="nameRu"
                            track-by="nameRu"
                            placeholder="Выберете из списка">
                    </multiselect>
                </div>
                <div class="form-group">
                    <label>Ваша основная игра</label>
                    <multiselect
                            v-model="user.game"
                            :options="$store.state.header.games"
                            :multiple="false"
                            :searchable="false"
                            label="name"
                            track-by="name"
                            placeholder="">
                    </multiselect>
                </div>
                <div class="form-group">
                    <label>Ваша дополнительная игра</label>
                    <multiselect
                            v-model="user.additionallyGame"
                            :options="$store.state.header.games"
                            :multiple="false"
                            :searchable="false"
                            label="name"
                            track-by="name"
                            placeholder="">
                    </multiselect>
                </div>
            </div>
            <div class="setting-col-2">
                <div class="form-group">
                    <label>Фамилия</label>
                    <div class="input">
                        <input type="text" v-model="user.family">
                    </div>
                </div>
                <div class="form-group">
                    <label>Емейл</label>
                    <div class="input">
                        <input type="email" v-model="user.email">
                    </div>
                </div>
                <div class="form-group">
                    <label>Дата рождения</label>
                    <div class="input">
                        <input type="text" placeholder="Может мы тебя поздравим и подарим плюшку!" v-model="user.bdate" disabled>
                        <div class="show-date"
                             @click="showCalendar = !showCalendar">
                            <i class="fas fa-sort-down"></i>
                        </div>
                        <calendar v-if="showCalendar" :date="user.bdate" @date="(date) => user.bdate = date"/>
                    </div>
                </div>
                <div class="form-group city-form">
                    <label>Город</label>
                    <multiselect
                            v-model="user.city"
                            :options="cities"
                            :multiple="false"
                            label="nameRu"
                            track-by="nameRu"
                            :searchable="true"
                            :loading="loadCities"
                            @search-change="getCities"
                            placeholder="Выберете из списка">
                    </multiselect>
                </div>
                <div class="ranks">
                    <div class="form-group">
                        <label>MMR/ELO</label>
                        <div class="input">
                            <input type="number" v-model="user.rank">
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
                <div class="ranks">
                    <div class="form-group">
                        <label>MMR/ELO</label>
                        <div class="input">
                            <input type="number" v-model="user.additionallyRank">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Звание</label>
                        <div class="input">
                            <input type="text" disabled v-model="additionallyRankString">
                        </div>
                    </div>
                    <div class="form-group rank-icon" v-if="additionallyRankIcon !== null">
                        <label>Ранг</label>
                        <div class="input">
                            <img :src="'/images/ranks/' + additionallyRankIcon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-save" :class="{disable: load}" @click="save">
            Сохранить изменения
            <svg v-if="load" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
                        stroke-dasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                      dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import {mapGetters} from 'vuex';
import Swal from 'sweetalert2'

import CabinetService from "../../../../../services/CabinetService";
import Calendar from "../../../../calendar/Calendar";
import CountryService from "../../../../../services/CountryService";


const GENDERS = [
    {
        type: 'male',
        name: 'Мужчина'
    },
    {
        type: 'female',
        name: 'Женщина'
    }
]

export default {
    name: "GeneralSettings",
    components: {
        Calendar,
        Multiselect
    },
    data() {
        return {
            load: false,
            genders: GENDERS,
            showCalendar: false,
            countries: [],
            cities: [],
            loadCities: false,
            userGender: null,
        }
    },
    computed: {
        ...mapGetters([
            'user',
        ]),
        ...mapGetters('cabinet/setting', [
            'ranks',
            'timezones'
        ]),
        userRank() {
            if (this.user.game !== null) {
                const ranks = this.ranks[this.user.game.code];

                if (ranks) {
                    const userRank = ranks.find(e => {
                        if (Number(e.pointsFrom) <= Number(this.user.rank)) {
                            if (e.pointsTo === null || Number(e.pointsTo) >= Number(this.user.rank)) {
                                return e;
                            }
                        }
                    })
                    if (userRank !== undefined && userRank !== null) {
                        return userRank;
                    }
                }
                return null;
            } else {
                return null;
            }
        },
        additionallyUserRank() {
            if (this.user.additionallyGame !== null) {
                const ranks = this.ranks[this.user.additionallyGame.code];

                if (ranks) {
                    const userRank = ranks.find(e => {
                        if (Number(e.pointsFrom) <= Number(this.user.additionallyRank)) {
                            if (e.pointsTo === null || Number(e.pointsTo) >= Number(this.user.additionallyRank)) {
                                return e;
                            }
                        }
                    })
                    if (userRank !== undefined && userRank !== null) {
                        return userRank;
                    }
                }
                return null;
            } else {
                return null;
            }
        },
        rankString() {
            if (this.userRank !== null) {
                return this.userRank.rank;
            }
            return null;
        },
        additionallyRankString() {
            if (this.additionallyUserRank !== null) {
                return this.additionallyUserRank.rank;
            }
            return null;
        },
        rankIcon() {
            if (this.userRank !== null) {
                return this.userRank.icon;
            }
            return null;
        },
        additionallyRankIcon() {
            if (this.additionallyUserRank !== null) {
                return this.additionallyUserRank.icon;
            }
            return null;
        }
    },
    methods: {
        showError(message) {
            Swal.fire({
                icon: 'error',
                title: 'Упс...',
                text: message,
                showConfirmButton: false,
                timer: 1500
            })
        },
        save() {
            if (this.user.isTrainer) {
                if (this.user.timezone === null || this.user.timezone === '') {
                    return this.showError('Для начала укажите таймзону!')
                }
            }
            if (!this.load) {
                this.load = true;
                const form = new FormData();

                for (let key in this.user) {
                    form.append(key, this.user[key]);
                }
                form.append('name', this.user.name);
                form.append('nickname', this.user.nickname);
                form.append('family', this.user.family);
                form.append('email', this.user.email);
                form.append('rank', this.user.rank);
                form.append('game', this.user.game !== null ? this.user.game.code : null);
                form.append('timezone', this.user.timezone);
                form.append('gender', this.user.gender ? this.user.gender.type: null);
                form.append('bdate', this.user.bdate !== null ? this.user.bdate : '');
                form.append('countryId', this.user.country ? this.user.country.id : null);
                form.append('cityId', this.user.city ? this.user.city.id : null);
                form.append('additionallyGame', this.user.additionallyGame !== null ? this.user.additionallyGame.code : null);
                form.append('additionallyRank', this.user.additionallyRank);

                CabinetService.updateUser(form)
                    .then(data => {
                        this.$store.commit('setUser', data)

                        this.setGender();

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
        },
        getCountries() {
            CountryService
                .getCountries()
                .then(countries => {
                    this.countries = countries
                })
        },
        getCities(query) {
            if (query.length > 2 && this.user.country) {
                this.loadCities = true;

                CountryService
                    .getCities(this.user.country.id, query)
                    .then(cities => {
                        this.loadCities = false;
                        this.cities = cities
                    })
            }
        },
        setGender() {
            if (this.user.gender !== null) {
                const gender = this.genders.find(e => e.type === this.user.gender);

                this.user.gender = gender ? gender : null;
            }
        }
    },
    mounted() {
        this.getCountries();
        this.setGender();
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
  margin: 1.5vw .1vw 4vw .1vw;
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

.form-group {
  margin-bottom: 1.8vw;

  input::placeholder {
    font-size: .8vw;
    display: flex;
  }

  .show-date {
    position: absolute;
    right: 0;
    background: #ff6d1d;
    height: 100%;
    width: 1vw;
    border-radius: 0 .2vw .2vw 0;
    cursor: pointer;

    i {
      font-size: .8vw;
      position: absolute;
      height: 2.5vw;
      top: -.2vw;
      right: .25vw;
      color: white;
      border: unset;
      display: flex;
      align-items: center;
      margin: 0;
    }
  }
}

.form-group.timezone {
  width: 11vw;
}
</style>

<style lang="scss">
.form-group {
  &.city-form {
    .multiselect {
      width: 100%;

      .multiselect__tags {
        width: 100%;
      }
    }
  }
}
</style>