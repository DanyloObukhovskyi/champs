import Service from "./Service";

class StatisticService extends Service {
    getPlayersRating = async () => {
        const {data} = await axios.post(`/${this.lang}/main/rating/players`)

        return data;
    }

    getTeamsRating = async () => {
        const {data} = await axios.post(`/${this.lang}/main/rating/teams`)

        return data;
    }
}

export default new StatisticService();