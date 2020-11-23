/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

import LiveMatches from "./components/matches/LiveMatches";
import VideoSlider from "./components/sliders/VideoSlider";
import BannerSlider from "./components/sliders/BannerSlider";
import NewsViewPage from "./pages/NewsViewPage";
import EventsHome from "./components/events/EventsHome";
import UpcomingMatches from "./components/matches/UpcomingMatches";
import ResultsMatches from "./components/matches/ResultsMatches";
import PlayersRating from "./components/ratings/PlayersRating";
import PlayerWeek from "./components/ratings/PlayerWeek";
import TeamsRating from "./components/ratings/TeamsRating";
import NewsHome from "./components/news/NewsHome";
import NewsPage from "./pages/NewsPage";
import MatchPage from "./pages/MatchPage";
import MatchesPage from "./pages/MatchesPage";
import EventsPage from "./pages/EventsPage";
import EventPage from "./pages/EventPage";
import EventsDigestPage from "./pages/EventsDigestPage";

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios._csrf_token = token.content;
} else {
    console.error('CSRF token not found');
}
window.header = require('./layouts/header');

Vue.component('live-matches', LiveMatches)
Vue.component('upcoming-matches-home', UpcomingMatches)
Vue.component('results-matches-home', ResultsMatches)
Vue.component('video-slider', VideoSlider)
Vue.component('banner-slider', BannerSlider)
Vue.component('news-home', NewsHome)
Vue.component('news-page', NewsPage)
Vue.component('news-view-page', NewsViewPage)
Vue.component('events-home', EventsHome)
Vue.component('players-rating', PlayersRating)
Vue.component('player-week', PlayerWeek)
Vue.component('teams-rating', TeamsRating)
Vue.component('match-page', MatchPage)
Vue.component('matches-page', MatchesPage)
Vue.component('events-page', EventsPage)
Vue.component('event-page', EventPage)
Vue.component('events-digest-page', EventsDigestPage)

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

new Vue({
    el: '#app',
    provide: {
        header,
    }
})