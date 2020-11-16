class MatchService {

    lang = () => {
        return document.documentElement.lang
    }

    matchesPage = () => {
        return `/${this.lang()}/matches`;
    }

    getMatch = async id => {
        const {data} = await axios.post(`/${this.lang()}/get/match/${id}`)

        return data
    }

    getMatches = async (type, page, filters) => {
        const {data} = await axios.post(`/${this.lang()}/ajax/matches/${type}/${page}`, filters);

        return data
    }

    getHomeLives = async () => {
        const {data} = await axios.post(`/${this.lang()}/main/live/matches`)

        return data
    }

    getMainResults = async () => {
        const {data} = await axios.post(`/${this.lang()}/main/results`)

        return data
    }

    getUpcomingMatches = async () => {
        const {data} = await axios.post(`/${this.lang()}/main/matches`)

        return data
    }

    getMatchUrl = id => {
        return `/${this.lang()}/matches/${id}`;
    }


}

export default new MatchService();