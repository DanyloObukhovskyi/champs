import Service from "./Service";

class CabinetService extends Service {
    getLessons = async () => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0){
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }
        const {data} = await axios.post(`/${this.lang}/cabinet/lessons`, {
            timezone
        })
        return data;
    }

    getTimezones = async () => {
        const {data} = await axios.post(`/${this.lang}/ajax/cabinet/get/timezones`)

        return data;
    }

    updateUser = async updateData => {
        const {data} = await axios.post(`/${this.lang}/ajax/cabinet/update/user`, updateData)

        return data;
    }

    getVideos = async () => {
        const {data} = await axios.post(`/${this.lang}/ajax/cabinet/get/videos`)

        return data;
    }

    sendTrainerNotice = async (lessonId, trainerNotice) => {
        const {data} = await axios.post(`/${this.lang}/ajax/cabinet/set/trainer/notice/${lessonId}`, {
            notice: trainerNotice
        })
        return data;
    }

    setConfirmed = async lessonId => {
        const {data} = await axios.post(`/${this.lang}/ajax/cabinet/set/lesson/status/${lessonId}`)

        return data;
    }

    sendReview = async (trainerId, rate, comment) => {
        const form = new FormData();

        form.append('trainer_id', trainerId);
        form.append('rate', rate);
        form.append('comment', comment);

        const {data} = await axios.post(`/${this.lang}/lesson/review/`, form)

        return data;
    }
}

export default new CabinetService();