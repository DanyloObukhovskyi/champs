import Service from "./Service";

class TeamService extends Service{

    searchByName = name => {
        return this.send('ajax/search/teams', name);
    }
}

export default new TeamService();