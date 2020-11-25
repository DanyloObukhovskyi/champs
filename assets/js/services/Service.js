class Service {

    constructor() {
        this.lang = this.getLang();
        this.getAuthUser();
    }

    getAuthUser = () =>  {
        axios.post(`/${this.lang}/get/auth`)
            .then(({data}) => {
                this.user = data;
            })
    }

    getLang = () => {
        let lang = 'ru';
        if (document.documentElement.lang !== null && document.documentElement.lang !== ''){
            lang = document.documentElement.lang
        }
        return lang;
    }
}

export default Service;