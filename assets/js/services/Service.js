class Service {

    user = null;

    constructor() {
        this.lang = this.getLang();
        this.logoutUrl = `/${this.lang}/logout`;
    }

    getUserFull = async () =>  {
        const {data} = await axios.post(`/${this.lang}/auth/user/full`)

        return data;
    }

    getAuthUser = async () =>  {
        const {data} = await axios.post(`/${this.lang}/get/auth`)

        return data;
    }

    getLang = () => {
        let lang = 'ru';
        if (document.documentElement.lang !== null && document.documentElement.lang !== ''){
            lang = document.documentElement.lang
        }
        return lang;
    }

    getGames = async () => {
        const {data} = await axios.post(`/${this.lang}/games`)

        return data;
    }
}

export default Service;