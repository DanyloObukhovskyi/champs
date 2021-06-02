export default {
    namespaced: true,
    state: () => {
        return {
            lessons: {
                future: {},
                past: {}
            }
        }
    },
    mutations: {
        setLessons(state, lessons) {
            state.lessons = lessons;
        },
        updateLesson(state, lesson) {
            for (let day in state.lessons.future) {
                state.lessons.future[day] = state.lessons.future[day].map(futureLesson => {
                    if (futureLesson.id === lesson.id) {
                        return lesson;
                    } else {
                        return futureLesson;
                    }
                })
            }
            for (let day in state.lessons.past) {
                state.lessons.past[day] = state.lessons.past[day].map(pastLesson => {
                    if (pastLesson.id === lesson.id) {
                        return lesson;
                    } else {
                        return pastLesson;
                    }
                })
            }
        }
    },
    getters: {
        lessons(state) {
            return state.lessons;
        }
    }
}