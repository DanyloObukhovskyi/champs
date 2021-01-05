import RankingService from "../../services/RankingService";

export default {
    namespaced: true,
    state: () => {
        return {
            ranks: {}
        }
    },
    mutations: {
        getRanks(state) {
            RankingService.getAllRanks()
                .then(ranks => {
                    state.ranks = ranks;
                })
        }
    },
    actions: {
        getRanks(context) {
            context.commit('getRanks')
        }
    },
    getters: {
        ranks(state) {
            return state.ranks;
        }
    }
}