class Service {

    lang = () => {
        let lang = 'ru';
        if (document.documentElement.lang !== null && document.documentElement.lang !== ''){
            lang = document.documentElement.lang
        }
        return lang;
    }
}

export default Service;