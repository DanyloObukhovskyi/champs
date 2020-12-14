import Service from "./Service";

class SlideService extends Service{

    getGeneralSlides = async () => {
        const {data} = await axios.post(`/${this.lang}/get/slides`)

        return  data
    }

    getHomeSlides = async () => {
        const {data} = await axios.post(`/${this.lang}/get/home/slides`)

        return data;
    }
}

export default new SlideService();