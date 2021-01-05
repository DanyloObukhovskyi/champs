import Service from "./Service";

class RankingService extends Service{

    getAllRanks = () => {
        return this.send('ajax/ranks/all')
    }
}

export default new RankingService();