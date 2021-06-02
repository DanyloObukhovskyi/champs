export default {
    namespaced: true,
    state: () => {
        return {
            wallet: null,
            earned: {},
            balance: 0,
            available: 0,
            lessonPrices: [],
            isLessonCost: null,
            studentsHistory: [],
            transactionHistory: [],
        }
    },
    mutations: {
        getWalletData(state, data) {
            state.wallet = data.wallet;
            state.earned = data.earned;
            state.balance = data.balance;
            state.available = data.available;
            state.lessonPrices = data.lessonPrices;
            state.isLessonCost = data.isLessonCost;
            state.studentsHistory = data.studentsHistory;
            state.transactionHistory = data.transactionHistory;
        },
        setIsLessonCost(state, isLessonCost) {
            state.isLessonCost = isLessonCost;
        },
        setLessonPrices(state, lessonPrices) {
            state.lessonPrices = lessonPrices;
        }
    },
    actions: {
        getWalletData(context, data) {
            context.commit('getWalletData', data);
        },
        setIsLessonCost(context, isLessonCost) {
            context.commit('setIsLessonCost', isLessonCost);
        },
        setLessonPrices(context, lessonPrices) {
            context.commit('setLessonPrices', lessonPrices);
        }
    },
    getters: {
        balance(state) {
            return state.balance;
        },
        available(state) {
            return state.available;
        },
        transactionHistory(state) {
            return state.transactionHistory;
        },
        studentsHistory(state) {
            return state.studentsHistory;
        },
        lessonPrices(state) {
            return state.lessonPrices;
        },
        wallet(state) {
            return state.wallet;
        },
        earned(state) {
            return state.earned;
        },
        isLessonCost(state) {
            return state.isLessonCost;
        }
    }
}