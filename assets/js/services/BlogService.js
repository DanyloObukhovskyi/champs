import Service from "./Service";

class BlogService extends Service {
    blogPage = () => {
        return `/${this.lang}/blogs`
    }

    getBlogs = (length, filters = {}) => {
        return this.send(`ajax/blogs/${length}`, filters);
    }

    setLike = async (id, type) => {
        return this.send(`like/blogs/${id}`,  { type });
    }

    getComments = id => {
        return this.send(`blogs/${id}/comments`);
    }

    setBookmark = (blogId, isBookmark) => {
        return this.send(`set/bookmark/`, {
            blogId,
            isBookmark
        });
    }

    getPopularNextTags = (from = 0) => {
        return this.send('blogs/tags/' + from);
    }

    getHotBlogs = (ofset = 0, filters = {}) => {
        return this.send(`hot/blogs/`+ ofset, filters);
    }
}

export default new BlogService();