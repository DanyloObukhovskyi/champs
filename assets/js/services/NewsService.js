import Service from "./Service";

class NewsService extends Service {

    newsPage = () => {
        return `/${this.lang}/news`
    }

    getNews = (length, filters = {}) => {
        return this.send(`ajax/news/${length}`, filters);
    }

    getHotNews = (filters = {}) => {
        return this.send(`hot/news`, filters);
    }

    getSingleNews = id => {
        return this.send(`ajax/news/single/${id}`);
    }

    setLike = async (id, type) => {
        return this.send(`like/news/${id}`,  { type });
    }

    sendComment = (id, comment) => {
        return this.send(`news/add/comment`, { comment, id });
    }

    sendCommentAnswer = (id, commentId, comment) => {
        return this.send(`news/add/comment`, { id, commentId, comment });
    }

    getComments = id => {
        return this.send(`news/${id}/comments`);
    }

    setCommentLike = (commentId, type) => {
        return this.send(`like/news/comment/${commentId}`, { type });
    }

    setBookmark = (newsId, isBookmark) => {
        return this.send(`set/bookmark/`, {
            newsId,
            isBookmark
        });
    }

    getUserBookmarkNews = () => {
        return this.send(`news/user/bookmark`);
    }

    getTopNews = () => {
        return this.send(`top/news/five`);
    }
}

export default new NewsService();