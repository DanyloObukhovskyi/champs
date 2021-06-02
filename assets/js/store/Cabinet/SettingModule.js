import RankingService from "../../services/RankingService";
import CabinetService from "../../services/CabinetService";

export default {
    namespaced: true,
    state: () => {
        return {
            ranks: {},
            timezones: []
        }
    },
    mutations: {
        getRanks(state) {
            RankingService.getAllRanks()
                .then(ranks => {
                    state.ranks = ranks;
                })
        },
        getTimezones(state) {
            CabinetService.getTimezones()
                .then(timezones => {
                    state.timezones = timezones;
                })
        }
    },
    actions: {
        getRanks(context) {
            context.commit('getRanks')
        },
        getTimezones(context) {
            context.commit('getTimezones')
        }
    },
    getters: {
        ranks(state) {
            return state.ranks;
        },
        timezones(state) {
            return state.timezones;
        }
    }
}