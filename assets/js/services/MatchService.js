import Service from "./Service";

class MatchService extends Service{

    matchesPage = (type = null) => {
        let url = `/${this.lang}/matches`;
        if (type !== null) {
            url += `?type=${type}`;
        }
        return url;
    }

    getMatch = async id => {
        const {data} = await axios.post(`/${this.lang}/get/match/${id}`)

        return data
    }

    getMatches = async (type, page, filters) => {
        const {data} = await axios.post(`/${this.lang}/ajax/matches/${type}/${page}`, filters);

        return data
    }

    getHomeLives = async () => {
        const {data} = await axios.post(`/${this.lang}/main/live/matches`)

        return data
    }

    getMainResults = async () => {
        const {data} = await axios.post(`/${this.lang}/main/results`)

        return data
    }

    getUpcomingMatches = async (date) => {
        const {data} = await axios.post(`/${this.lang}/main/matches`,{date})

        return data
    }

    getMatchUrl = id => {
        return `/${this.lang}/matches/${id}`;
    }

    sendComment = async (id, comment) => {
        const {data} = await axios.post(`/${this.lang}/match/add/comment`, { comment, id })

        return data;
    }

    sendCommentAnswer = async (id, commentId, comment) => {
        const {data} = await axios.post(`/${this.lang}/match/add/comment`, { id, commentId, comment })

        return data;
    }

    getComments = async id => {
        const {data} = await axios.post(`/${this.lang}/match/${id}/comments`)

        return data;
    }

    setCommentLike = async (commentId, type) => {
        const {data} = await axios.post(`/${this.lang}/like/match/comment/` + commentId, {
            type
        });
        return data;
    }
}

export default new MatchService();