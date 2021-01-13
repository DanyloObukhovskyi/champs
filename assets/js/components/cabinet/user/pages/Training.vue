<template>
    <div class="training-wrapper">
        <div class="banner-wrapper" v-if="user !== null && !user.isTrainer">
            <cabinet-bottom-banner/>
        </div>
        <div class="loader-wrapper" v-if="load">
            <small-loader/>
        </div>
        <div class="timetable-wrapper">
            <timetable
                    v-if="!load && showFuture"
                    :lessons="lessons.future">
                <template v-slot:title>
                    Расписание
                </template>
            </timetable>
        </div>
        <div class="timetable-wrapper">
            <timetable
                    v-if="!load && showPast"
                    :lessons="lessons.past"
                    :is-past="true">
                <template v-slot:title>
                    Прошедшие тренировки
                </template>
            </timetable>
        </div>
    </div>
</template>

<script>
    import CabinetBottomBanner from "../../CabinetBottomBanner";
    import CabinetService from "../../../../services/CabinetService";
    import Timetable from "../components/training/Timetable";
    import SmallLoader from "../../../helpers/SmallLoader";
    import {mapGetters} from "vuex";

    export default {
        name: "Training",
        components: {SmallLoader, Timetable, CabinetBottomBanner},
        data() {
            return {
                load: false
            }
        },
        computed: {
            ...mapGetters([
                'user',
                'cabinet/training/lessons'
            ]),
            lessons() {
                return this['cabinet/training/lessons'];
            },
            showFuture() {
                let res;
                if (this.lessons.hasOwnProperty('future') && this.lessons.future !== undefined && this.user !== null) {
                    res = Object.keys(this.lessons.future).length > 0;
                } else {
                    res = false;
                }
                return res;
            },
            showPast() {
                let res;
                if (this.lessons.hasOwnProperty('past') && this.lessons.past !== undefined && this.user !== null) {
                    res = Object.keys(this.lessons.past).length > 0;
                } else {
                    res = false;
                }
                return res;
            }
        },
        methods: {
            getLessons() {
                this.load = true;

                CabinetService.getLessons()
                    .then(({future, past}) => {
                        this.$store.commit('cabinet/training/setLessons', {future, past})

                        this.load = false;
                    })
            }
        },
        mounted() {
            this.getLessons();
        }
    }
</script>

<style scoped lang="scss">
  .training-wrapper {
	margin-top: -1vw;
  }

  .loader-wrapper {
	background-color: #eff0f0;
	margin: 1vw;
	border-radius: .5vw;
	padding: 2vw 3vw;
	display: flex;
	justify-content: center;
  }

  .timetable-wrapper {
	padding: 1vw;
	width: 70vw;

    &:last-child {
      padding-bottom: 0;
    }
  }

  .dark {
	.loader-wrapper {
	  background: rgb(37, 40, 42);
	  background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
	  background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
	  background: linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
	  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#3d4146", GradientType=1);
	}
  }
</style>