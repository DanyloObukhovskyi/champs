import Service from "./Service";

class CabinetService extends Service{

    getUserFull = async () =>  {
        const {data} = await axios.post(`/${this.lang}/auth/user/full`)

        return data;
    }

    getLessons = async () => {
        let timezone = (new Date().getTimezoneOffset()) / 60;

        if (timezone < 0){
            timezone = Math.abs(timezone);
        } else {
            timezone = -timezone
        }
        const {data} = await axios.post(`/${this.lang}/cabinet/lessons`, {
            timezone
        })

        return data;
    }
}

export default new CabinetService();