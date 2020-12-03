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
        return `/${this.lang}/marketplace/trainer/${id}`;
    }

    marketplacePage = () => {
        return `/${this.lang}/marketplace`;
    }

    getTrainer = async id => {
        const {data} = await axios.post(`/${this.lang}/ajax/marketplace/trainer/${id}`);

        return data;
    }
}

export default new MarketplaceService();