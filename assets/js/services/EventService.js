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

    getEventUrl = id =>  {
        return `/${this.lang()}/event/${id}`;
    }
}

export default new EventService();