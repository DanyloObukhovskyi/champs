<template>
    <div class="events-digest">
        <div class="banners">
            <banner-slider/>
        </div>
        <div>
            <div class="lamp-header">
                <lamp-header title="Дайджест турниров"/>
            </div>
            <div class="d-flex align-items-end">
                <div class="tournaments-types">
                    <div class="tournament-type check-tournament" :class="{active: filters.tournamentType === tournament.code}"
                         v-for="tournament in tournamentsTypes" @click="filters.tournamentType = tournament.code">
                        <div class="tournament-type-wrapper">
                            <div class="type">
                                {{tournament.type}}
                            </div>
                            <div>
                                <div class="title">
                                    Турниры
                                </div>
                                <div class="green">
                                    {{tournament.description}}
                                </div>
                            </div>
                        </div>
                        <div class="select">
                            <img src="/images/events/check.png">
                        </div>
                    </div>
                </div>
                <div class="online">
                    <button :class="{active: filters.online}" @click="filters.online = true">
                        Online
                    </button>
                </div>
                <div class="search-filter">
                    <input class="tournament-filter" type="text" placeholder="Турнир" v-model="filters.name">
                </div>
                <div class="search-filter">
                    <multiselect
                            placeholder="Страна"
                            v-model="filters.country"
                            :options="countries">
                    </multiselect>
                </div>
                <div class="search-filter">
                    <multiselect
                            placeholder="Город"
                            v-model="filters.city"
                            :options="cities">
                    </multiselect>
                </div>
                <div class="search-filter prize">
                    <input type="text" placeholder="Призовые" v-model="filters.prize">
                </div>
                <calendar-filter
                        @setFromDate="(date) => setFilter('dateFrom', date)"
                        @setToDate="(date) => setFilter('dateTo', date)"
                        v-bind="filters">
                </calendar-filter>
            </div>
            <div class="d-flex align-items-end filters-bottom">
                <div class="tense-select">
                    <tense-select @selected="(select) => selectEventsType = select"
                                  :counts="counts"
                                  :types="eventsTypes"
                                  :selected="selectEventsType">
                    </tense-select>
                </div>
                <div class="online">
                    <button :class="{active: !filters.online}" @click="filters.online = false">
                        LAN
                    </button>
                </div>
                <div class="games">
                    <button v-for="game in games"
                            @click="selectGame(game)"
                            :class="{active: filters.game === game}">
                        <img :src="`/images/events/${game}.png`">
                    </button>
                </div>
            </div>
            <div class="events-body">
                <div class="events-wrapper d-flex row">
                    <div class="col-4" v-for="event in events">
                        <event-digest-row :key="event.id" :event="event"/>
                    </div>
                </div>
            </div>
            <div class="w-100 d-flex justify-content-center">
                <loader v-if="load"/>
            </div>
            <paginate
                    v-if="showPaginate"
                    :page-count="pagesCount"
                    :click-handler="setPage"
                    prev-text="Prev"
                    next-text="Next"
                    container-class="pagination">
            </paginate>
        </div>
    </div>
</template>

<script>
    import eventService from "../services/EventService";
    import EventRow from "../components/events/EventRow";
    import Paginate from 'vuejs-paginate'
    import Filters from "../components/filters/Filters";
    import Loader from "../components/helpers/Loader";
    import LampHeader from "../components/helpers/LampHeader";
    import CalendarFilter from "../components/calendar/CalendarFilter";
    import TenseSelect from "../components/helpers/TenseSelect";
    import Multiselect from 'vue-multiselect'
    import EventDigestRow from "../components/events/EventDigestRow";

    const GAMES = [
        'cs',
        'dota',
        'lol',
        'valorant',
        'fortnite',
        'warcraft',
        'pubg',
        'fifa',
        'overwatch',
        'apex'
    ];

    const EVENT_TYPES = {
        past: 'Прошедшие',
        live: 'Активные',
        future: 'Будующие'
    };

    const TOURNAMENTS_TYPES = [
        {
            type: 'pro',
            code: 'pro',
            description: 'Для профессионалов'
        },
        {
            type: 'все',
            code: 'all',
            description: 'Для любителей'
        }
    ];

    export default {
        name: "EventsDigestPage",
        components: {
            EventDigestRow,
            TenseSelect,
            LampHeader,
            EventRow,
            Paginate,
            Filters,
            Loader,
            CalendarFilter,
            Multiselect
        },
        props: ['eventsGames'],
        data() {
            return {
                events: [],
                load: false,
                counts: {},
                selectEventsType: 'live',
                eventsTypes: EVENT_TYPES,
                tournamentsTypes: TOURNAMENTS_TYPES,
                games: [],
                page: 1,
                perPage: 20,
                filters: {
                    dateFrom: '21.02.2015',
                    dateTo: '21.02.2022',
                    teamA: null,
                    teamB: null,
                    name: null,
                    country: null,
                    city: null,
                    prize: null,
                    online: false,
                    game: null,
                    tournamentType: null,
                },
                countries: [],
                cities: [],
            }
        },
        watch: {
            selectEventsType() {
                this.getEvents()
            },
            page() {
                this.getEvents()
            },
            'filters.dateFrom': function () {
                this.getEvents();
            },
            'filters.dateTo': function () {
                this.getEvents();
            },
            'filters.teamA': function () {
                this.getEvents();
            },
            'filters.teamB': function () {
                this.getEvents();
            },
            'filters.name': function () {
                this.getEvents();
            },
            'filters.country': function () {
                this.getEvents();
            },
            'filters.city': function () {
                this.getEvents();
            },
            'filters.prize': function () {
                this.getEvents();
            },
            'filters.online': function () {
                this.getEvents();
            },
            'filters.game': function () {
                this.getEvents();
            },
            'filters.tournamentType': function () {
                this.getEvents()
            },
        },
        computed: {
            pagesCount() {
                return Math.ceil(this.counts[this.selectEventsType] / this.perPage)
            },
            showPaginate() {
                return Number(this.counts[this.selectEventsType]) > Number(this.perPage);
            }
        },
        methods: {
            getEvents() {
                this.load = true
                this.events = [];

                eventService.getDigestEvents(this.selectEventsType, this.page, this.filters)
                    .then(data => {
                        this.events = data.events;
                        this.counts = data.counts;

                        if (data.limit !== null) {
                            this.perPage = data.limit
                        }
                        this.load = false
                    })
            },
            selectGame(game) {
                if (this.filters.game === game){
                    this.filters.game = null;
                } else {
                    this.filters.game = game
                }
            },
            setPage(page) {
                this.page = page;
            },
            setFilter(filter, value) {
                this.filters[filter] = value;
            },
        },
        mounted() {
            this.getEvents()

            GAMES.map(game => {
                if (this.eventsGames.indexOf(game) !== -1){
                    this.games.push(game);
                }
            })
        }
    }
</script>

<style scoped>
	@import '../../css/pagination.css';

    .events-digest .banners {
        margin-bottom: 1vw;
    }

    .dark .events-digest .title {
        color: white;
    }

    .events-digest .events-head .title h3 {
        text-align: center;
    }

    .events-digest {
        padding-bottom: 3vw;
    }

    .events-digest .lamp-header {
        margin-top: 4vw;
    }

    .events-digest .tournaments-types {
        display: flex;
        align-items: end;
    }

    .events-digest .tournaments-types .tournament-type {
        display: flex;
        margin-right: 1vw;
    }

    .events-digest .tense-select {
        width: 32vw;
        margin-right: 1vw;
    }

    .events-digest .tournaments-types .tournament-type .tournament-type-wrapper {
        background-image: url("/images/events/tournamentSelect.png");
        display: flex;
        align-items: center;
        width: 13vw;
        height: 3vw;
        background-position: center;
        background-size: 110%;
        border-radius: .6vw 0 0 .6vw;
    }

    .dark .events-digest .tournaments-types .tournament-type .tournament-type-wrapper {
        background-image: url("/images/events/tournamentSelectDark.png");
    }

    .events-digest .tournaments-types .tournament-type .tournament-type-wrapper .type {
        background-color: #fe7a25;
        color: white;
        border: 2vw;
        border-radius: .3vw;
        padding-left: .5vw;
        padding-right: .5vw;
        height: 1.2vw;
        font-size: .7vw;
        margin-left: 1vw;
        margin-right: 1.5vw;
    }

    .events-digest .tournaments-types .tournament-type .tournament-type-wrapper .title {
        font-size: 1vw;
    }

    .events-digest .tournaments-types .tournament-type .tournament-type-wrapper .green {
        font-size: 1vw;
        font-size: .7vw;
        color: green;
    }

    .events-digest .tournaments-types .tournament-type .select {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 .6vw .6vw 0;
        width: 2.5vw;
        background-color: #aeaeae;
        cursor: pointer;
    }

    .dark .events-digest .tournaments-types .tournament-type .select {
        background-color: #171a1b;
    }

    .events-digest .tournaments-types .tournament-type .select img {
        display: none;
        width: 1.5vw;
    }

    .events-digest .tournaments-types .tournament-type.active .select img {
        display: inline;
        width: 1.5vw;
    }

    .events-digest .tournaments-types .tournament-type.active .select {
        background: #fe7a25;
    }

    .events-digest .search-filter {
        margin-right: 1vw;
    }

    .events-digest .search-filter .tournament-filter{
        width: 7vw;
    }

    .events-digest .search-filter input,
    .events-digest .search-filter select {
        height: 3vw;
        outline: none;
        border: 0;
        border-radius: 0.5vw;
        font-size: 1vw;
    }

    .events-digest .search-filter select {
        padding-left: .5vw;
        padding-right: .5vw;
        cursor: pointer;
    }

    .events-digest .search-filter select {
        -webkit-appearance: none;
        appearance: none;
    }

    .events-digest .search-filter select::-ms-expand {
        display: none;
    }

    .events-digest .search-filter input::-webkit-input-placeholder {
        text-align: center;
    }

    .events-digest .search-filter input:-moz-placeholder {
        text-align: center;
    }

    .events-digest .search-filter input::-moz-placeholder {
        text-align: center;
    }

    .events-digest .search-filter input:-ms-input-placeholder {
        text-align: center;
    }

    .events-digest .search-filter.prize input {
        width: 7vw;
    }

    .events-digest .dates .date:nth-child(1) {
        margin-right: .8vw;
    }

    .events-digest .filters-bottom {
        margin-top: .5vw;
    }

    .events-digest .online {
        display: flex;
        margin-right: 1vw;
    }

    .events-digest .online button {
        outline: none;
        border: none;
        height: 3vw;
        font-size: .8vw;
        width: 3.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: .5vw;
        color: black;
        cursor: pointer;
        margin-right: .5vw;
    }

    .events-digest .online button.active {
        background: #ff6d1d;
        color: white;
    }

    .events-digest .filters-bottom .select {
        margin-right: 1vw;
    }

    .events-digest .games {
        display: flex;
    }

    .events-digest .games button {
        outline: none;
        border: none;
        height: 3vw;
        font-size: .8vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #242424;
        border-radius: .5vw;
        cursor: pointer;
        margin-right: .5vw;
        width: 4vw;
        padding: .4vw;
    }

    .events-digest .games button.active {
        background: #ff6d1d;
    }

    .events-digest .games button img {
        height: 100%;
    }
</style>

<style>
    .events-digest .multiselect__tags {
        display: flex;
        height: 3vw;
        padding: .4vw;
        background: #fff;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 1vw;
        border: 0;
        border-radius: 0.5vw;
    }

    .events-digest .multiselect__tags .multiselect__placeholder {
        margin-bottom: 0;
        padding-top: 0;
        margin-left: .5vw;
        margin-right: .5vw;
    }

    .events-digest .dates .date:nth-child(1) {
        margin-right: .5vw;
    }

    .check-tournament:hover{
        cursor: pointer;
    }
</style>