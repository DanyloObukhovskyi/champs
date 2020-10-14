class MvpService {

    baseUrl = 'http://champs/ru/';

    url = path => {
        return `${this.baseUrl}${path}`;
    }

    createMvpTeam = async (capacity, name, tag) => {
        return await axios.post(this.url('user/mvp/create/team'), {
            capacity, name, tag
        })
    }

    getUserTeams = async () => {
        return await axios.post(this.url('user/mvp/get/teams'))
    }

    getTeamLink = (id) => {
        return this.url(`user/mvp/team/${id}`)
    }

    getMvpLink = () => {
        return this.url('user/mvp/')
    }

    getMvpTeam = async id => {
        return await axios.post(this.url(`get/user/mvp/team/${id}`))
    }

    deleteMvpTeam = async id => {
        return await axios.post(this.url(`delete/user/mvp/team/${id}`))
    }

    getTeamInviteToken = async id => {
        return await axios.post(this.url(`mvp/team/get/invite/${id}`))
    }

    reloadTeamInviteToken = async id => {
        return await axios.post(this.url(`mvp/team/reload/invite/${id}`))
    }

    getInviteToTeamLink = (id, token) => {
        return this.url(`mvp/invite/${id}/${token}`)
    }
}

export default MvpService;