import Service from "./Service";

class MarketplaceService extends Service{
    getTrainers = async (game, page, filters) => {
        const {data} = await axios.post(`/${this.lang}/ajax/trainers/${game}/${page}`, filters);

        return data;
    }

    getTrainingDescription = async () => {
        const {data} = await axios.post(`/${this.lang}/ajax/settings/training/description`);

        return data;
    }

    getTrainerUrl = id => {
        return `/${this.lang}/trainer/${id}`;
    }
}

export default new MarketplaceService();