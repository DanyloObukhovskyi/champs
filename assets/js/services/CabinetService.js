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

    sendReview = (trainerId, rate, comment) => {
        const form = new FormData();

        form.append('trainer_id', trainerId);
        form.append('rate', rate);
        form.append('comment', comment);

        return this.send(`lesson/review/`, form)
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
}

export default new CabinetService();