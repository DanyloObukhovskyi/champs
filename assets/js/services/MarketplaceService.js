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

    getTrainerScheduleDay = async (trainerId, date) => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0){
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }

        const {data} = await axios.post(`/${this.lang}/calendar/trainer/date/day`, {
            trainerId,
            date,
            timezone
        })
        return data;
    }

    setLessonPay = async (lessons, trainerId) => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0){
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }
        const {data} = await axios.post(`/${this.lang}/lessons/create/`, {
            lessons,
            timezone,
            trainer_id: trainerId
        });
        return data;
    }
}

export default new MarketplaceService();