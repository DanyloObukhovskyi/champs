import Vuex from 'vuex'

import HeaderModule from "./header/HeaderModule";
import TrainingModule from "./Cabinet/TrainingModule";

export default new Vuex.Store({
    modules: {
        header: HeaderModule,
        cabinet: {
            namespaced: true,
            modules: {
                training: TrainingModule
            }
        }
    }
});