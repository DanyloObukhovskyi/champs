import Service from "./Service";

class EventService extends Service{

    getEvents = async (type, page, filters) => {
        const {data} = await axios.post(`/${this.lang}/ajax/events/${type}/${page}`, filters);

        return data
    }

    getMainEvents = async () => {
        const {data} = await axios.post(`/${this.lang}/main/events`)

        return data
    }

    getEventUrl = id => {
        return `/${this.lang}/event/${id}`;
    }

    eventsPage = () => {
        return `/${this.lang}/events`;
    }

    digestPage = () => {
        return `/${this.lang}/digest`;
    }

    getEvent = async id => {
        const {data} = await axios.post(`/${this.lang}/ajax/event/${id}`)

        return data
    }

    getDigestEvents = async (type, page, filters) => {
        const {data} = await axios.post(`/${this.lang}/ajax/digest/events/${type}/${page}`, filters);

        return data
    }
}

export default new EventService();