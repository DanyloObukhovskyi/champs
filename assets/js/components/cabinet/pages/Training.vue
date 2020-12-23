<template>
    <div class="training-wrapper">
        <cabinet-bottom-banner/>
        <div class="loader-wrapper" v-if="load">
            <small-loader />
        </div>
        <div class="timetable-wrapper">
            <timetable
                    v-if="!load && Object.keys(futureLessons).length > 0"
                    :lessons="futureLessons">
                <template v-slot:title>
                    Расписание
                </template>
            </timetable>
        </div>
        <div class="timetable-wrapper">
            <timetable
                    v-if="!load && Object.keys(pastLessons).length > 0"
                    :lessons="pastLessons"
                    :is-past="true">
                <template v-slot:title>
                    Прошедшие тренировки
                </template>
            </timetable>
        </div>
    </div>
</template>

<script>
    import CabinetBottomBanner from "../CabinetBottomBanner";
    import CabinetService from "../../../services/CabinetService";
    import Timetable from "../training/Timetable";
    import SmallLoader from "../../helpers/SmallLoader";

    export default {
        name: "Training",
        components: {SmallLoader, Timetable, CabinetBottomBanner},
        data() {
            return {
                futureLessons: [],
                pastLessons: [],
                load: false,
            }
        },
        methods: {
            getLessons() {
                this.load = true;

                CabinetService.getLessons()
                    .then(({future, past}) => {
                        this.futureLessons = future;
                        this.pastLessons = past;

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
        padding-top: 1vw;
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
    }

    .dark {
        .loader-wrapper {
            background: rgb(37,40,42);
            background: -moz-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            background: -webkit-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            background: linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a",endColorstr="#3d4146",GradientType=1);
        }
    }
</style>