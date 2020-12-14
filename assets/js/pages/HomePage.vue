<template>
    <div>
        <div class="ml-8 mr-8 p-0">
            <div class="d-flex p-0 mt-4">
                <div class="col-6 pl-0">
                    <live-matches></live-matches>
                </div>
                <div class="col-6 pr-0">
                    <home-slider></home-slider>
                </div>
            </div>
        </div>
        <div class="video-slider-container">
            <div class="ml-8 mr-8 p-0">
                <video-slider></video-slider>
            </div>
        </div>
        <div class="ml-8 mr-8 p-0">
            <div class="d-flex p-0 mt-5">
                <div class="col-6 pl-0">
                    <news-home></news-home>
                </div>
                <div class="col-6 pr-0">
                    <events-home></events-home>
                </div>
            </div>
            <div class="d-flex p-0 mt-5">
                <div class="col-9 pl-0 mr-1">
                    <upcoming-matches></upcoming-matches>
                </div>
                <div class="col-3 pl-0 ml-1">
                    <results-matches></results-matches>
                </div>
            </div>
        </div>
        <div class="home-end">
            <div class="ml-8 mr-8">
                <banner-slider></banner-slider>
                <div class="d-flex mt-5 rating-block">
                    <div class="col-5 pl-0">
                        <players-rating></players-rating>
                    </div>
                    <div class="col-2 pl-0 d-flex justify-content-center">
                        <player-week></player-week>
                    </div>
                    <div class="col-5 pl-0">
                        <teams-rating></teams-rating>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LiveMatches from "../components/matches/LiveMatches";
    import HomeSlider from "../components/sliders/HomeSlider";
    import VideoSlider from "../components/sliders/VideoSlider";
    import NewsHome from "../components/news/NewsHome";
    import EventsHome from "../components/events/EventsHome";
    import UpcomingMatches from "../components/matches/UpcomingMatches";
    import ResultsMatches from "../components/matches/ResultsMatches";
    import BannerSlider from "../components/sliders/BannerSlider";
    import PlayersRating from "../components/ratings/PlayersRating";
    import PlayerWeek from "../components/ratings/PlayerWeek";
    import TeamsRating from "../components/ratings/TeamsRating";

    export default {
        name: "HomePage",
        components: {
            LiveMatches,
            HomeSlider,
            VideoSlider,
            NewsHome,
            EventsHome,
            UpcomingMatches,
            ResultsMatches,
            BannerSlider,
            PlayersRating,
            PlayerWeek,
            TeamsRating
        }
    }
</script>

<style scoped>
    .rating-block {
        padding-bottom: 8vw;
    }
</style>