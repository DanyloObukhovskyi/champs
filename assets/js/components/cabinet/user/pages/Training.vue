<template>
    <div class="training-wrapper">
        <div class="banner-wrapper" v-if="user !== null && !user.isTrainer">
            <cabinet-bottom-banner/>
        </div>
        <div class="loader-wrapper" v-if="load">
            <small-loader/>
        </div>
        <div class="timetable-wrapper" v-if="!load && showFuture">
            <timetable
                    :lessons="lessons.future">
                <template v-slot:title>
                    Расписание
                </template>
            </timetable>
        </div>
        <div class="timetable-wrapper" v-if="!showFuture && !user.isTrainer">
            <div class="empty-lessons-wrapper">
                <div class="title">
                    Расписание
                </div>
                <div class="body">
                    <div>
                        К сожалению, на данный момент у вас нет тренировок в расписании.
                    </div>
                    <div>
                        Вам достаточно выбрать одного из тренеров в разделе <a
                            :href="marketplacePage"><span>Обучение.</span></a>
                    </div>
                    <div>
                        И он поможет вам стать <span>PRO</span> игроком.
                    </div>
                </div>
                <div class="title">
                </div>
            </div>
        </div>
        <div class="timetable-wrapper" v-if="!load && showPast">
            <timetable
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
import MarketplaceService from "../../../../services/MarketplaceService";

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
        marketplacePage() {
            return MarketplaceService.marketplacePage()
        },
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
@import '../../../../../css/animations.css';

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

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
}

.empty-lessons-wrapper {
  -webkit-animation: animation-translate-right 1500ms linear both;
  animation: animation-translate-right 1500ms linear both;
  background-color: #eff0f0;
  border-radius: .5vw;
  padding: 2vw 3vw;
  display: flex;
  justify-content: space-between;
  height: 18vw;
  margin-right: 2vw;

  .title {
    color: #9d9fa0;
    font-size: 1.5vw;
    font-weight: 600;
    width: 20%;
  }

  .body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    color: #9d9fa0;
    font-size: 1vw;

    span {
      color: #f76a1e;
      font-weight: 600;
      transition: color .2s ease;
    }

    a {
      span:hover {
        color: #ff8648;
      }
    }
  }
}

.dark {
  .empty-lessons-wrapper {
    -webkit-animation: animation-translate-right 1500ms linear both;
    animation: animation-translate-right 1500ms linear both;
    background: rgb(37, 40, 42);
    background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
    background: linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#3d4146", GradientType=1);
    border-radius: .5vw;
    padding: 2vw 3vw;
    display: flex;
    justify-content: space-between;
    height: 18vw;

    .title {
      color: white;
      font-size: 1.5vw;
      font-weight: 600;
      width: 20%;
    }

    .body {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 60%;
      color: #9d9fa0;
      font-size: 1vw;

      span {
        color: #f76a1e;
        font-weight: 600;
      }
    }
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