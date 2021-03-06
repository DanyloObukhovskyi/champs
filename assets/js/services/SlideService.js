import Service from "./Service";

class SlideService extends Service{

    getGeneralSlides = () => {
        return this.send('get/slides');
    }

    getHomeSlides = () => {
        return this.send('get/home/slides');
    }

    getCsHomeSlides = () => {
        return this.send('get/home/slides/cs');
    }
}

export default new SlideService();