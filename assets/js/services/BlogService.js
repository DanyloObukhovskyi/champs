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

    createBlog = updateData => {
        return this.send('ajax/create/blog', updateData)
    }

    updateBlog = (updateData, blogId) => {
        return this.send('ajax/edit/blog/' + blogId, updateData)
    }

    getSingleBlogs = id => {
        return this.send(`ajax/blogs/single/${id}`);
    }

    sendComment = (id, comment) => {
        return this.send(`blogs/add/comment`, { comment, id });
    }

    getComments = id => {
        return this.send(`blogs/${id}/comments`);
    }

    sendCommentAnswer = (id, commentId, comment) => {
        return this.send(`blogs/add/comment`, { id, commentId, comment });
    }

    setCommentLike = (commentId, type) => {
        return this.send(`like/blogs/comment/${commentId}`, { type });
    }

    getUserBlogs = () => {
        return this.send(`blogs/user`);
    }

    getCommentsByUser = () => {
        return this.send(`blogs/comments/user`);
    }

    getGamesBlog = (offset) => {
        return this.send('gamesBlog/' + offset)
    }
}

export default new BlogService();