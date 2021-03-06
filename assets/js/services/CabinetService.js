import Service from "./Service";

class CabinetService extends Service {
    getLessons = () => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0) {
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }

        return this.send('cabinet/lessons', {
            timezone
        });
    }

    getTimezones = () => {
        return this.send('ajax/cabinet/get/timezones')
    }

    updateUser = updateData => {
        return this.send('ajax/cabinet/update/user', updateData)
    }

    getVideos = () => {
        return this.send('ajax/cabinet/get/videos')
    }

    sendTrainerNotice = (lessonId, trainerNotice) => {
        return this.send(`ajax/cabinet/set/trainer/notice/${lessonId}`, {
            notice: trainerNotice
        })
    }

    setConfirmed = lessonId => {
        return this.send(`ajax/cabinet/set/lesson/status/${lessonId}`)
    }

    sendReview = (trainerId, rate, comment, lessonId) => {
        const form = new FormData();

        form.append('trainer_id', trainerId);
        form.append('rate', rate);
        form.append('comment', comment);
        form.append('lessonId', lessonId);

        return this.send(`lesson/review`, form)
    }

    sendEditReview = (trainerId, rate, comment, lessonId) => {
        const form = new FormData();

        form.append('trainer_id', trainerId);
        form.append('rate', rate);
        form.append('comment', comment);
        form.append('lessonId', lessonId);

        return this.send(`lesson/editReview`, form)
    }

    getFirstLessonsAndEarned = () => {
        return this.send('cabinet/get/first-lessons/and/earned');
    }

    setTrainerDayTime = (date, time) => {
        return this.send('cabinet/calendar/set/trainer/date/day', {
            date,
            time
        })
    }

    getTrainerScheduleDay = date => {
        return this.send('cabinet/calendar/trainer/date/day', {date})
    }

    getTrainerWeek = date => {
        return this.send('cabinet/calendar/trainer/date/week', {date})
    }

    getVkInviteLink = () => {
        return this.send('cabinet/vk/invite/link')
    }

    getUserBanner = () => {
        return this.send(`ajax/setting/user/banner`)
    }

    sendToChannel = (lessonId) => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0) {
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }

        return this.send(`cabinet/lessons/getRoom/${lessonId}`, {
            timezone
        });
    }

    getTime = () => {
        return this.send('time', {});
    }
}

export default new CabinetService();