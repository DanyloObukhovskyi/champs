<template>
    <div class="setting-container-body timezone-setting">
        <div class="title">
            Часовой пояс
        </div>
        <div class="timezone-setting-body">
            <div class="form-group timezone">
                <label>Укажите часовой пояс для тренировок</label>
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
        <div class="bottom-save" @click="updateDiscord" :class="{disable: load}">
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
    import CabinetService from "../../../../../services/CabinetService";
    import Swal from 'sweetalert2'
    import Multiselect from "vue-multiselect";
    import {mapGetters} from "vuex";

    export default {
        name: "Timezone",
        props: ['discord'],
        components: {
            Multiselect
        },
        data() {
            return {
                timezone: null,
                load: false,
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ]),
            ...mapGetters('cabinet/setting/', [
                'timezones'
            ])
        },
        methods: {
            updateDiscord() {
                if (!this.load) {
                    const form = new FormData();
                    form.append('timezone', this.timezone);

                    this.load = true;
                    CabinetService.updateUser(form)
                        .then(data => {
                            this.$store.commit('setUser', data)

                            Swal.fire({
                                icon: 'success',
                                title: 'Часовой пояс сохранен!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.load = false;
                        })
                        .catch(() => {
                            this.load = false;
                        })
                }
            }
        },
        mounted() {
            this.timezone = this.user.timezone;
        }
    }
</script>

<style scoped lang="scss">
  .timezone-setting {
	height: 13vw;
	padding-left: 2.5vw;
	padding-right: 1.5vw;
  }

  .timezone-setting-body {
	padding: 0;
	margin-top: 2vw;

	.form-group.timezone{
	  padding: 0;
	}
  }
</style>

<style lang="scss">
  .timezone-setting-body {
	.form-group{
      &.timezone{
		.multiselect__tags {
		  width: 13vw;
		}
      }
	}
  }
</style>