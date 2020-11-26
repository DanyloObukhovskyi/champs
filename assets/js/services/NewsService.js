import Service from "./Service";

class NewsService extends Service {

    newsPage = () => {
        return `/${this.lang}/news`
    }

    getNews = async (length, filters = {}) => {
        const {data} = await axios.post(`/${this.lang}/ajax/news/` + length, filters);

        return data;
    }

    getHotNews = async (filters = {}) => {
        const {data} = await axios.post(`/${this.lang}/hot/news`, filters);

        return data;
    }

    getSingleNews = async id => {
        const {data} = await axios.post(`/${this.lang}/ajax/news/single/` + id);

        return data;
    }

    setLike = async (id, type) => {
        const {data} = await axios.post(`/${this.lang}/like/news/` + id, {
            type
        });
        return data;
    }

    sendComment = async (id, comment) => {
        const {data} = await axios.post(`/${this.lang}/news/add/comment`, { comment, id })

        return data;
    }

    sendCommentAnswer = async (id, commentId, comment) => {
        const {data} = await axios.post(`/${this.lang}/news/add/comment`, { id, commentId, comment })

        return data;
    }

    getComments = async id => {
        const {data} = await axios.post(`/${this.lang}/news/${id}/comments`)

        return data;
    }

    setCommentLike = async (commentId, type) => {
        const {data} = await axios.post(`/${this.lang}/like/news/comment/` + commentId, {
            type
        });
        return data;
    }
}

export default new NewsService();