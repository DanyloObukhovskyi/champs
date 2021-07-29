import Service from "./Service";

class BlogService extends Service {
    blogPage = () => {
        return `/${this.lang}/blogs`
    }

}

export default new BlogService();