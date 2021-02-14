import Service from "./Service";

class MatchService extends Service{

    matchesPage = (type = null) => {
        let url = `/${this.lang}/matches`;
        if (type !== null) {
            url += `?type=${type}`;
        }
        return url;
    }

    getMatch = id => {
        return this.send(`get/match/${id}`);
    }

    getMatches = (type, page, filters) => {
        return this.send(`ajax/matches/${type}/${page}`, filters);
    }

    getHomeLives = () => {
        return this.send(`main/live/matches`);
    }

    getMainResults = () => {
        return this.send(`main/results`);
    }

    getUpcomingMatches = (date) => {
        return this.send(`main/matches`, {date});
    }

    getMatchUrl = (id, slug) => {
        return `/${this.lang}/matches/${id}/${slug}`;
    }

    sendComment = (id, comment) => {
        return this.send(`match/add/comment`, { comment, id });
    }

    sendCommentAnswer = (id, commentId, comment) => {
        return this.send(`match/add/comment`, { id, commentId, comment });
    }

    getComments = id => {
        return this.send(`match/${id}/comments`);
    }

    setCommentLike = (commentId, type) => {
        return this.send(`like/match/comment/${commentId}`, { type });
    }
}

export default new MatchService();