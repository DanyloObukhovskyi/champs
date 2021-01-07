<template>
    <div class="lessons">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="lessons-wrapper">
            <div class="lessons-row" v-for="(dayLessons, day) in lessons">
                <div class="date-day">
                    {{ day }}
                </div>
                <lesson-row
                        v-for="lesson in dayLessons"
                        :key="lesson.id"
                        :lesson="lesson"
                        :is-past="isPast">
                </lesson-row>
            </div>
        </div>
    </div>
</template>

<script>
    import MoreDetail from "./MoreDetail";
    import LessonRow from "./LessonRow";

    export default {
        name: "Timetable",
        components: {
            LessonRow,
            MoreDetail,
        },
        props: {
            lessons: {
                default: {}
            },
            isPast: {
                default: false
            }
        },
        data() {
            return {
                activeLesson: null,
                showMoreDetailModal: false
            }
        },
    }
</script>

<style scoped lang="scss">
  @import '../../../../../../css/animations.css';

  .lessons {
	-webkit-animation: animation-translate-right 1500ms linear both;
	animation: animation-translate-right 1500ms linear both;
	background-color: #eff0f0;
	border-radius: .5vw;
	padding: 2vw 3vw;

	.title {
	  color: #9d9fa0;
	  font-size: 1.5vw;
	  font-weight: 600;
	}

	.lessons-row {
	  margin-left: 1vw;

	  .date-day {
		color: #ea6620;
		font-size: 1vw;
		font-weight: 500;
		padding: 1.5vw .5vw .5vw .5vw;
	  }
	}
  }

  .dark {
	.lessons {
	  background: rgb(37, 40, 42);
	  background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
	  background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
	  background: linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
	  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#3d4146", GradientType=1);

	  .title {
		color: white;
	  }
	}
  }
</style>