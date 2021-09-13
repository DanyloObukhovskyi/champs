import Service from "../../services/Service";

const service = new Service();

export default {
    state: () => {
        return {
            user: null,
            loadUser: false,
            game: null,
            games: [],
            showLogin: false
        }
    },
    mutations: {
        setGames(state, games) {
            state.games = games;
        },
        setGame(state, game) {
            state.game = game;
        },
        setShowLogin(state, show) {
            state.showLogin = show;
        },
        setUser(state, user) {
            state.user = user;
            state.loadUser = false;
        },
        setLoadUser(state, load) {
            state.loadUser = load;
        }
    },
    getters: {
        game(state) {
            return state.game;
        },
        games(state) {
            return state.games;
        },
        user(state) {
            return state.user;
        },
        showLogin(state) {
            return state.showLogin;
        },
        loadUser(state) {
            return state.loadUser;
        },
        isMobile(state){
            return screen.width <= 600;
        }
    },
    actions: {
        showLogin(context) {
            context.commit('setShowLogin', true);
        },
        closeLogin(context) {
            context.commit('setShowLogin', false);
        },
        getAuthUser(context) {
            service.getUserFull()
                .then(user => {
                    context.commit('setUser', user)
                })
        }
    }
}