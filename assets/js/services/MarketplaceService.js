import Service from "./Service";

class MarketplaceService extends Service{
    getTrainers = async (game, offset, filters) => {
        const {data} = await axios.post(`/${this.lang}/ajax/trainers/${game}/${offset}`, filters);

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

    setLessonPay = async (lessons, type, trainerId) => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0){
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }
        const {data} = await axios.post(`/${this.lang}/lessons/create/`, {
            lessons,
            type,
            timezone,
            trainer_id: trainerId
        });
        return data;
    }

    checkPermissionToReview = async trainerId => {
        const {data} = await axios.post(`/${this.lang}/check/permission/to/review`, {trainerId});

        return data;
    }

    sendReview = async form => {
        const {data} = await  axios.post(`/${this.lang}/lesson/review/`, form)

        return data;
    }

    getTrainerReviews = async trainerId => {
        const {data} = await  axios.post(`/${this.lang}/trainer/reviews/${trainerId}`)

        return data;
    }

    getGamesBanners = async () => {
        const {data} = await  axios.post(`/${this.lang}/games/banners`)

        return data;
    }

    getTrainerBanner = async () => {
        const {data} = await  axios.post(`/${this.lang}/ajax/setting/trainer/banner`)

        return data;
    }
}

export default new MarketplaceService();