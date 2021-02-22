import Service from "./Service";

class EventService extends Service{

    getEvents = (type, page, filters) => {
        return this.send(`ajax/events/${type}/${page}`, filters)
    }

    getMainEvents = () => {
        return this.send(`main/events`)
    }

    getEventUrl = (id, slug) => {
        return `/${this.lang}/event/${id}/${slug}`;
    }

    eventsPage = () => {
        return `/${this.lang}/events`;
    }

    digestPage = () => {
        return `/${this.lang}/daydzhest_turnirov/`;
    }

    getEvent = id => {
        return this.send(`ajax/event/${id}`)
    }

    getDigestEvents = (type, page, filters) => {
        return this.send(`ajax/digest/events/${type}/${page}`, filters)
    }
}

export default new EventService();