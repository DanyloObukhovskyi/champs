import Service from "./Service";

class MarketplaceService extends Service{
    getTrainers = (game, offset, filters) => {
        return this.send(`ajax/trainers/${game}/${offset}`, filters)
    }

    getTrainingDescription = () => {
        return this.send(`ajax/settings/training/description`)
    }

    getTrainerUrl = id => {
        return `/${this.lang}/marketplace/trainer/${id}`;
    }

    marketplacePage = () => {
        return `/${this.lang}/marketplace`;
    }

    getTrainer = id => {
        return this.send(`ajax/marketplace/trainer/${id}`)
    }

    getTrainerScheduleDay = (trainerId, date) => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0){
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }
        return this.send(`calendar/trainer/date/day`, {
            trainerId,
            date,
            timezone
        })
    }

    setLessonPay = (lessons, type, trainerId) => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0){
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }
        return this.send(`lessons/create/`, {
            lessons,
            type,
            timezone,
            trainer_id: trainerId
        })
    }

    checkPermissionToReview = trainerId => {
        return this.send(`check/permission/to/review`, {trainerId})
    }

    sendReview = form => {
        return this.send(`lesson/review/`, form)
    }

    getTrainerReviews = trainerId => {
        return this.send(`trainer/reviews/${trainerId}`)
    }

    getGamesBanners = () => {
        return this.send(`games/banners`)
    }

    getTrainerBanner = () => {
        return this.send(`ajax/setting/trainer/banner`)
    }
}

export default new MarketplaceService();