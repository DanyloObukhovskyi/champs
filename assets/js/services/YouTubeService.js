import Service from "./Service";

class YouTubeService extends Service{

    getVideos = async offset => {
        return this.send(`ajax/youtube/videos/${offset}`)
    }
}

export default new YouTubeService();