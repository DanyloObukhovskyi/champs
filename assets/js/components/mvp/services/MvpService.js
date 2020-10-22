import config from "../../../config";

class MvpService {

    baseUrl = `https://${window.location.hostname}/`;

    constructor(axios) {
        this.axios = axios
    }

    url = path => {
        return `${this.baseUrl}ru/${path}`;
    }

    createMvpTeam = async (capacity, name, tag) => {
        return await this.axios.post(this.url('user/mvp/create/team'), {
            capacity, name, tag
        })
    }

    getUserTeams = async () => {
        return await this.axios.post(this.url('user/mvp/get/teams'))
    }

    getTeamLink = (id) => {
        return this.url(`user/mvp/team/${id}`)
    }

    getMvpLink = () => {
        return this.url('user/mvp/')
    }

    getMvpTeam = async id => {
        return await this.axios.post(this.url(`get/user/mvp/team/${id}`))
    }

    deleteMvpTeam = async id => {
        return await this.axios.post(this.url(`delete/user/mvp/team/${id}`))
    }

    getTeamInviteToken = async id => {
        return await this.axios.post(this.url(`mvp/team/get/invite/${id}`))
    }

    reloadTeamInviteToken = async id => {
        return await this.axios.post(this.url(`mvp/team/reload/invite/${id}`))
    }

    getInviteToTeamLink = (id, token) => {
        return this.url(`mvp/invite/${id}/${token}`)
    }

    getAuthUser = async () => {
        return await this.axios.post(this.url('get/auth'))
    }

    joinMemberToTeam = async id => {
        return await this.axios.post(this.url(`mvp/join/to/team/${id}`))
    }

    getUserJoinedTeams = async () => {
        return await this.axios.post(this.url(`user/mvp/get/joined/teams/`))
    }

    userLeaveTeamLink = id => {
        return this.url(`user/mvp/leave/team/${id}`)
    }

    getTournamentsByGame = async game => {
        return await this.axios.post(this.url(`mvp/ajax/tournaments/${game}`))
    }

    getProfileLink = () => {
        return this.url(`user/settings`)
    }
}

export default MvpService;