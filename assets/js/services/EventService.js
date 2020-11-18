class EventService {

    lang = () => {
        return document.documentElement.lang
    }

    getEvents = async (type, page, filters) => {
        const {data} = await axios.post(`/${this.lang()}/ajax/events/${type}/${page}`, filters);

        return data
    }

    getMainEvents = async () => {
        const {data} = await axios.post(`/${this.lang()}/main/events`)

        return data
    }

    getEventUrl = id => {
        return `/${this.lang()}/event/${id}`;
    }

    eventsPage = () => {
        return `/${this.lang()}/events`;
    }

    getEvent = async id => {
        const {data} = await axios.post(`/${this.lang()}/ajax/event/${id}`)

        return data
    }
}

export default new EventService();