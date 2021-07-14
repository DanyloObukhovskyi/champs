import Service from "./Service";

class EventService extends Service{

    getEvents = (type, page, filters) => {
        return this.send(`ajax/events/${type}/${page}`, filters)
    }

    getMainEvents = () => {
        return this.send(`main/events`)
    }

    getEventUrl = (id) => {
        return `/${this.lang}/turnir/${id}`;
    }

    eventsPage = () => {
        return `/${this.lang}/events`;
    }

    digestPage = () => {
        return `/${this.lang}/daydzhest_turnirov/`;
    }

    getEvent = id => {
        return this.send(`ajax/turnir/${id}`)
    }

    getDigestEvents = (type, page, filters) => {
        return this.send(`ajax/digest/events/${type}/${page}`, filters)
    }

    getCountries = () => {
        return this.send(`ajax/digest/countries`)
    }

    getCitiesForDigest = (country) => {
        return this.send(`ajax/digest/cities`, country)
    }
}

export default new EventService();