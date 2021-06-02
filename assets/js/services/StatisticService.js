import Service from "./Service";

class StatisticService extends Service {
    getPlayersRating = () => {
        return this.send('main/rating/players');
    }

    getTeamsRating = () => {
        return this.send('main/rating/teams');
    }
}

export default new StatisticService();