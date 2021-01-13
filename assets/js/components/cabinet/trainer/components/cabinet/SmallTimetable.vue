<template>
    <div class="timetable">
        <div class="title">
            Расписание
        </div>
        <div class="timetable-wrapper">
            <div class="timetable-body">
                <div class="lessons-row" v-for="(dayLessons, day) in lessons">
                    <div class="date-day">
                        {{ day }}
                    </div>
                    <lesson-row
                            v-for="lesson in dayLessons"
                            :key="lesson.id"
                            :lesson="lesson"
                            :is-trainer-cabinet-small="true"
                            :is-past="false">
                    </lesson-row>
                </div>
            </div>
            <div class="show-more">
                <router-link :to="timetablePage">
                    <div class="text">
                        Смотреть все
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import LessonRow from "../../../user/components/training/LessonRow";
    import CabinetService from "../../../../../services/CabinetService";

    export default {
        name: "SmallTimetable",
        components: {
            LessonRow
        },
        props: ['lessons'],
        computed: {
            timetablePage() {
                return `/${CabinetService.lang}/trainer/cabinet/timetable`;
            }
        }
    }
</script>

<style scoped lang="scss">
  .timetable {
	-webkit-animation: animation-translate-right 1500ms linear both;
	animation: animation-translate-right 1500ms linear both;
	z-index: 1;

	.title {
	  font-size: 1.3vw;
	  color: #9d9fa0;
	  font-weight: 500;
	}

	.timetable-wrapper {
	  margin-top: 1vw;
	  margin-right: 2vw;
	}

	.timetable-body {
	  background-color: #eff0f0;
	  border-radius: .5vw;
	  padding: 1vw 1vw;
	  min-height: 17.3vw;

	  .lessons-row {
		.date-day {
		  color: #ea6620;
		  font-size: 1vw;
		  font-weight: 500;
		  padding: .5vw;
		}
	  }
	}

	.show-more {
	  animation: animation-translate-right 1500ms linear both;
	  position: absolute;
	  top: 0;
	  right: 0;
	  width: 3vw;
	  height: 100%;
	  background-color: #e16423;
	  border-radius: 0 .5vw .5vw 0;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  transition: background-color .5s ease-in-out;
	  cursor: pointer;

	  .text {
		transform: rotate(-180deg);
		writing-mode: vertical-rl;
		font-size: 1.2vw;
		color: white;
		padding-left: .3vw;
	  }

	  &:hover {
		background-color: #ff7525;
	  }
	}
  }

  .dark {
    .timetable {
	  .timetable-body {
		background: rgb(61,65,70);
		background: -moz-linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
		background: -webkit-linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
		background: linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146",endColorstr="#25282a",GradientType=1);
	  }
    }
  }
</style>