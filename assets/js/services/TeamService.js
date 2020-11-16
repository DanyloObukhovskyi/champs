class TeamService {

    lang = () => {
        return document.documentElement.lang
    }

    searchByName = async name => {
        const {data} = await axios.post(`/${this.lang()}/ajax/search/teams`, name)

        return data
    }
}

export default new TeamService();