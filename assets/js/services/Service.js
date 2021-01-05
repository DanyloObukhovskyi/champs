class Service {

    user = null;

    constructor() {
        this.lang = this.getLang();
        this.logoutUrl = `/${this.lang}/logout`;
    }

    send = async (url, params = {}) => {
        const {data} = await axios.post(`/${this.lang}/${url}`, params)

        return data;
    }

    getUserFull = () =>  {
        return this.send('auth/user/full')
    }

    getAuthUser = () =>  {
        return this.send('get/auth')
    }

    getLang = () => {
        let lang = 'ru';
        if (document.documentElement.lang !== null && document.documentElement.lang !== ''){
            lang = document.documentElement.lang
        }
        return lang;
    }

    getGames = () => {
        return this.send('games')
    }
}

export default Service;