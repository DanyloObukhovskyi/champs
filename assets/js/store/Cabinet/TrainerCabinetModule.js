export default {
    namespaced: true,
    state: () => {
        return {
            lessons: {},
            earned: {}
        }
    },
    mutations: {
        setLessons(state, lessons) {
            state.lessons = lessons;
        },
        setEarned(state, earned) {
            state.earned = earned;
        },
    },
    getters: {
        lessons(state) {
            return state.lessons;
        },
        earned(state) {
            return state.earned;
        }
    }
}