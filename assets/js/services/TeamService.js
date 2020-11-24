import Service from "./Service";

class TeamService extends Service{

    searchByName = async name => {
        const {data} = await axios.post(`/${this.lang()}/ajax/search/teams`, name)

        return data
    }
}

export default new TeamService();