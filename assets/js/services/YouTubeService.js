import Service from "./Service";

class YouTubeService extends Service{

    getVideos = offset => {
        return this.send(`ajax/youtube/videos/${offset}`)
    }

    getChannelId = () => {
        return this.send(`ajax/youtube/get/channel`)
    }
}

export default new YouTubeService();