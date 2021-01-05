import Vuex from 'vuex'

import HeaderModule from "./header/HeaderModule";

export default new Vuex.Store({
    modules: {
        header: HeaderModule,
    }
});