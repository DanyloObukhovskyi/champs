<template>
    <div class="cabinet-wrapper">
        <div class="cabinet-container">
            <div class="left" v-if="!load">
                <small-timetable :lessons="lessons.future"/>
            </div>
            <div class="right" v-if="!load">
                <small-wallet :earned="earned"/>
            </div>
            <div class="load-wrapper" v-else>
                <small-loader/>
            </div>
        </div>
        <div class="cabinet-container">
            <calendar v-if="user !== null"/>
        </div>
    </div>
</template>

<script>
    import CabinetService from "../../../../services/CabinetService";
    import SmallTimetable from "../components/cabinet/SmallTimetable";
    import {mapGetters} from "vuex";
    import SmallLoader from "../../../helpers/SmallLoader";
    import SmallWallet from "../components/cabinet/SmallWallet";
    import Calendar from "../components/cabinet/Calendar";

    export default {
        name: "TrainerCabinet",
        components: {Calendar, SmallWallet, SmallLoader, SmallTimetable},
        data() {
            return {
                load: false
            }
        },
        computed: {
            ...mapGetters([
                    'user',
                    'cabinet/training/lessons'
                ]
            ),
            ...mapGetters('cabinet/trainerCabinet', [
                    'earned'
                ],
            ),
            lessons() {
                return this['cabinet/training/lessons'];
            }
        },
        methods: {
            getFirstLessonsAndEarned() {
                this.load = true;

                CabinetService
                    .getFirstLessonsAndEarned()
                    .then(data => {
                        this.$store.commit('cabinet/trainerCabinet/setLessons', data.lessons)
                        this.$store.commit('cabinet/trainerCabinet/setEarned', data.earned)

                        this.load = false;
                    })
            },
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
            this.getFirstLessonsAndEarned();
            this.getLessons();
        }
    }
</script>

<style scoped lang="scss">
  .cabinet-container {
	display: flex;
	padding: 0 2vw;
	width: 100%;
    margin-top: -.5vw;

	.left {
	  width: 65%;
	}

	.right {
	  width: 35%;
	}

	.load-wrapper {
	  width: 100%;
	  display: flex;
	  justify-content: center;
	  align-content: center;
	}

	&:last-child {
	  margin-bottom: 3vw;
	}
  }
</style>