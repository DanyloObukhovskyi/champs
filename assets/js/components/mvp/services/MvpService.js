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
}

export default MvpService;