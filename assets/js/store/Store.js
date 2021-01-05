import Vuex from 'vuex'

import HeaderModule from "./header/HeaderModule";
import TrainingModule from "./Cabinet/TrainingModule";
import SettingModule from "./Cabinet/SettingModule";

export default new Vuex.Store({
    modules: {
        header: HeaderModule,
        cabinet: {
            namespaced: true,
            modules: {
                training: TrainingModule,
                setting: SettingModule,
            }
        }
    }
});