import Vuex from 'vuex'

import HeaderModule from "./header/HeaderModule";
import TrainingModule from "./Cabinet/TrainingModule";
import SettingModule from "./Cabinet/SettingModule";
import TrainerCabinetModule from "./Cabinet/TrainerCabinetModule";
import WalletModule from "./Cabinet/WalletModule";

export default new Vuex.Store({
    modules: {
        header: HeaderModule,
        cabinet: {
            namespaced: true,
            modules: {
                training: TrainingModule,
                setting: SettingModule,
                trainerCabinet: TrainerCabinetModule,
                wallet: WalletModule
            }
        }
    }
});