import Service from "./Service";

class NewsService extends Service {

    newsPage = () => {
        return `/${this.lang()}/news`
    }

    getNews = async (length, filters = {}) => {
        const {data} = await axios.post(`/${this.lang()}/ajax/news/` + length, filters);

        return data;
    }

    getHotNews = async (filters = {}) => {
        const {data} = await axios.post(`/${this.lang()}/hot/news`, filters);

        return data;
    }

    getSingleNews = async id => {
        const {data} = await axios.post(`/${this.lang()}/ajax/news/single/` + id);

        return data;
    }
}

export default new NewsService();