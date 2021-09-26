<template>
    <div class="ml-8 mr-8 p-0" v-if="!isMobile">
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
                                label="nameRu"
                                track-by="id"
                                selectLabel="Выберете страну"
                                :options="countries">
                        </multiselect>
                    </div>
                    <div class="search-filter">
                        <multiselect
                                placeholder="Город"
                                v-model="filters.city"
                                label="nameRu"
                                track-by="id"
                                selectLabel="Выберете город"
                                :options="cities">
                        </multiselect>
                    </div>
                    <div class="search-filter prize">
                        <input type="text" placeholder="Призовые" v-model="filters.prize">
                    </div>
                    <div class="search-filter">
                        <multiselect
                                placeholder="Город"
                                v-model="filters.city"
                                label="nameRu"
                                track-by="id"
                                selectLabel="Выберете город"
                                :options="cities">
                        </multiselect>
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
                    <div class="games">
                        <button v-for="game in games"
                                @click="selectGame(game.code)"
                                :class="{active: filters.game === game.code}">
                            <img style="max-height: 32px;max-width: 50px" :src="`/uploads/games/${game.eventIcon}`">
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
            </div>
        </div>
    </div>
    <div class="ml-2 mr-2 p-0" v-else style="margin-top: 20%">
        <div class="events-digest-mobile">
            <div class="banners">
                <banner-slider/>
            </div>
            <div>
                <div class="lamp-header">
                    <lamp-header-mobile title="Дайджест турниров"/>
                </div>
                <div class="d-block align-items-end">
                    <div class="tournaments-types-mobile">
                        <div class="tournament-type check-tournament" :class="{active: filters.tournamentType === tournament.code}"
                             v-for="tournament in tournamentsTypes" @click="filters.tournamentType = tournament.code">
                            <div class="tournament-type-wrapper">
                                <div style="margin-left: 1vw;">
                                    <div class="title">
                                        Турниры
                                    </div>
                                    <div class="green">
                                        {{tournament.description}}
                                    </div>
                                </div>
                                <div class="type">
                                    {{tournament.type}}
                                </div>
                            </div>
                            <div class="select">
                                <img src="/images/events/check.png">
                            </div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="search-filter">
                            <input class="tournament-filter" type="text" placeholder="Название турнира" v-model="filters.name">
                        </div>
                        <div class="search-filter">
                            <multiselect
                                    placeholder="Страна"
                                    class="events-digest-mobile-filters"
                                    v-model="filters.country"
                                    label="nameRu"
                                    track-by="id"
                                    selectLabel="Выберете страну"
                                    :options="countries">
                            </multiselect>
                        </div>
                        <div class="search-filter">
                            <multiselect
                                    placeholder="Город"
                                    class="events-digest-mobile-filters"
                                    v-model="filters.city"
                                    label="nameRu"
                                    track-by="id"
                                    selectLabel="Выберете город"
                                    :options="cities">
                            </multiselect>
                        </div>
                        <div class="search-filter prize">
                            <input type="text" placeholder="Призовые" v-model="filters.prize">
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="search-filter">
                            <multiselect
                                    placeholder="Дисциплина"
                                    v-model="game"
                                    label="name"
                                    class="events-digest-mobile-discipline"
                                    track-by="id"
                                    selectLabel="Выберете дисциплину"
                                    :options="games">
                            </multiselect>
                        </div>
                        <div class="online">
                            <button :class="{active: filters.online}" @click="filters.online = true">
                                Online
                            </button>
                        </div>
                        <div class="online">
                            <button :class="{active: !filters.online}" @click="filters.online = false">
                                LAN
                            </button>
                        </div>
                    </div>
                    <calendar-filter-mobile
                            @setFromDate="(date) => setFilter('dateFrom', date)"
                            @setToDate="(date) => setFilter('dateTo', date)"
                            v-bind="filters">
                    </calendar-filter-mobile>
                </div>
                <div class="d-flex align-items-end filters-bottom">
                    <div class="tense-select">
                        <tense-select-mobile @selected="(select) => selectEventsType = select"
                                      :counts="counts"
                                      :types="eventsTypes"
                                      :selected="selectEventsType">
                        </tense-select-mobile>
                    </div>
                </div>
                <div class="events-body">
                    <div class="events-wrapper d-flex row">
                        <div class="col-12" v-for="event in events">
                            <event-digest-row-mobile :key="event.id" :event="event"/>
                        </div>
                    </div>
                </div>
                <div class="w-100 d-flex justify-content-center">
                    <loader v-if="load"/>
                </div>
            </div>
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
    import EventService from "../services/EventService";
    import Service from "../services/Service";
    import LampHeaderMobile from "../components/helpers/LampHeaderMobile";
    import {mapGetters} from "vuex";
    import EventDigestRowMobile from "../components/events/EventDigestRowMobile";
    import CalendarFilterMobile from "../components/calendar/CalendarFilterMobile";
    import TenseSelectMobile from "../components/helpers/TenseSelectMobile";

    // const GAMES = [
    //     'cs',
    //     'dota',
    //     'lol',
    //     'valorant',
    //     'fortnite',
    //     'warcraft',
    //     'pubg',
    //     'fifa',
    //     'overwatch',
    //     'apex'
    // ];

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
    const service = new Service();
    export default {
        name: "EventsDigestPage",
        components: {
            TenseSelectMobile,
            CalendarFilterMobile,
            EventDigestRowMobile,
            LampHeaderMobile,
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
                game: null,
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
                isLoadAll: false,
                countries: [],
                cities: [],
            }
        },
        watch: {
            game: function(){
                this.selectGame(this.game.code);
            },
            selectEventsType() {
                this.reloadEvents()
            },
            'filters.dateFrom': function () {
                this.reloadEvents();
            },
            'filters.dateTo': function () {
                this.reloadEvents();
            },
            'filters.teamA': function () {
                this.reloadEvents();
            },
            'filters.teamB': function () {
                this.reloadEvents();
            },
            'filters.name': function () {
                this.reloadEvents();
            },
            'filters.country': function () {
                this.reloadEvents();
                this.getCitiesForDigest();
            },
            'filters.city': function () {
                this.reloadEvents();
            },
            'filters.prize': function () {
                this.reloadEvents();
            },
            'filters.online': function () {
                this.reloadEvents();
            },
            'filters.game': function () {
                this.reloadEvents();
            },
            'filters.tournamentType': function () {
                this.reloadEvents()
            },
        },
        computed: {
            ...mapGetters([
                'isMobile'
            ]),
            pagesCount() {
                return Math.ceil(this.counts[this.selectEventsType] / this.perPage)
            },
            showPaginate() {
                return Number(this.counts[this.selectEventsType]) > Number(this.perPage);
            }
        },
        methods: {
            reloadEvents() {
                this.isLoadAll = false;
                this.events = [];
                this.page = 1;

                this.getEvents()
            },
            getEvents() {
                if (!this.load && !this.isLoadAll) {
                    this.load = true

                    eventService.getDigestEvents(this.selectEventsType, this.page, this.filters)
                        .then(data => {
                            this.counts = data.counts;

                            if (data.events.length === 0) {
                                this.isLoadAll = true;
                            }
                            for (let event of data.events) {
                                this.events.push(event)
                            }
                            if (data.limit !== null) {
                                this.perPage = data.limit
                            }
                            this.load = false
                            this.page = this.page + 1;
                        })
                }
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
                this.isLoadAll = false;
            },
            scrollEventTrigger() {
                const self = this;
                window.onscroll = () => {
                    const scrollable = $("body").height() - ($(window).innerHeight() + $(window).scrollTop());

                    if (scrollable <= 10) {
                        self.getEvents()
                    }
                }
            },
            async getGames(){
                const GAMES = await service.getGames().then(games => {
                    return games;
                });
                GAMES.map(game => {
                    if (this.eventsGames.indexOf(game.code) !== -1){
                        this.games.push(game);
                    }
                })
            },
            getCountries()
            {
                eventService.getCountries()
                    .then(data => {
                        this.countries = data.countries;
                    })
            },
            getCitiesForDigest()
            {
                let country = this.filters.country;
                if(country && country !== null){
                    eventService.getCitiesForDigest(country)
                        .then(data => {
                            this.cities = data.cities;
                        })
                } else {
                    this.cities = [];
                }
            }
        },
        mounted() {
            this.getEvents()
            this.scrollEventTrigger();

            this.getGames();
            this.getCountries();
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
    .multiselect__content-wrapper{
        width: auto;
    }
</style>

<style scoped>
    .events-digest-mobile .banners {
        margin-bottom: 1vw;
    }

    .dark .events-digest-mobile .title {
        color: white;
    }

    .events-digest-mobile .events-head .title h3 {
        text-align: center;
    }

    .events-digest-mobile {
        padding-bottom: 3vw;
    }

    .events-digest-mobile .lamp-header {
        margin-top: 4vw;
    }

    .events-digest-mobile .tournaments-types {
        display: flex;
        align-items: end;
    }

    .events-digest-mobile .tournaments-types .tournament-type {
        display: flex;
        margin-right: 1vw;
    }

    .events-digest-mobile .tense-select {
        width: 100%;
        margin-right: 1vw;
        margin-bottom: 1vw;
    }

    .events-digest-mobile .search-filter {
        margin-right: 1vw;
    }

    .events-digest-mobile .search-filter .tournament-filter{
        width: 30vw;
        height: 10vw;
        border-radius: 1vw;
        font-size: 3vw;
        margin-top: 1vw;
    }

    .events-digest-mobile .search-filter input,
    .events-digest-mobile .search-filter select {
        height: 10vw;
        outline: none;
        border: 0;
        border-radius: 1vw;
        font-size: 3vw;
        margin-top: 1vw;
    }

    .events-digest-mobile .search-filter select {
        padding-left: .5vw;
        padding-right: .5vw;
        cursor: pointer;
    }

    .events-digest-mobile .search-filter select {
        -webkit-appearance: none;
        appearance: none;
    }

    .events-digest-mobile .search-filter select::-ms-expand {
        display: none;
    }

    .events-digest-mobile .search-filter input::-webkit-input-placeholder {
        text-align: center;
    }

    .events-digest-mobile .search-filter input:-moz-placeholder {
        text-align: center;
    }

    .events-digest-mobile .search-filter input::-moz-placeholder {
        text-align: center;
    }

    .events-digest-mobile .search-filter input:-ms-input-placeholder {
        text-align: center;
    }

    .events-digest-mobile .search-filter.prize input {
        width: 18vw;
    }

    .events-digest-mobile .dates .date:nth-child(1) {
        margin-right: .8vw;
    }

    .events-digest-mobile .filters-bottom {
        margin-top: .5vw;
    }

    .events-digest-mobile .online {
        display: flex;
        margin-right: 1vw;
    }

    .events-digest-mobile .online button {
        outline: none;
        border: none;
        height: 12vw;
        font-size: 3.8vw;
        width: 15.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: 1vw;
        color: black;
        cursor: pointer;
        margin-right: .5vw;
        margin-top: 1vw;
        margin-bottom: 1vw;
    }

    .events-digest-mobile .online button.active {
        background: #ff6d1d;
        color: white;
    }

    .events-digest-mobile .filters-bottom .select {
        margin-right: 1vw;
    }

    .events-digest-mobile .games {
        display: flex;
    }

    .events-digest-mobile .games button {
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

    .events-digest-mobile .games button.active {
        background: #ff6d1d;
    }

    .events-digest-mobile .games button img {
        height: 100%;
    }

    .events-digest-mobile .tournaments-types-mobile {
        display: flex;
        align-items: end;
        width: 100%;
    }

    .events-digest-mobile .tournaments-types-mobile .tournament-type {
        display: flex;
        margin-right: 1vw;
        width: 50%;
    }

    .events-digest-mobile .tournaments-types-mobile .tournament-type .tournament-type-wrapper {
        background-image: url("/images/events/tournamentSelect.png");
        display: flex;
        align-items: center;
        width: 100%;
        height: 13vw;
        background-position: center;
        background-size: 150%;
        border-radius: 3.6vw 0 0 3.6vw;
    }

    .dark .events-digest-mobile .tournaments-types-mobile .tournament-type .tournament-type-wrapper {
        background-image: url("/images/events/tournamentSelectDark.png");
    }

    .events-digest-mobile .tournaments-types-mobile .tournament-type .tournament-type-wrapper .type {
        background-color: #fe7a25;
        color: white;
        border: 2vw;
        border-radius: .3vw;
        padding-left: .5vw;
        padding-right: .5vw;
        height: 6.2vw;
        font-size: 3.7vw;
        margin-left: 1vw;
        margin-right: 1.5vw;
        border-radius: 30%;
        position: absolute;
        right: 1%;
        top: 13%;
    }

    .events-digest-mobile .tournaments-types-mobile .tournament-type .tournament-type-wrapper .title {
        font-size: 4vw;
    }

    .events-digest-mobile .tournaments-types-mobile .tournament-type .tournament-type-wrapper .green {
        font-size: 3.5vw;
        color: green;
    }

    .events-digest-mobile .tournaments-types-mobile .tournament-type .select {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 .6vw .6vw 0;
        width: 10.5vw;
        background-color: #aeaeae;
        cursor: pointer;
    }

    .dark .events-digest-mobile .tournaments-types-mobile .tournament-type .select {
        background-color: #171a1b;
    }

    .events-digest-mobile .tournaments-types-mobile .tournament-type .select img {
        display: none;
        width: 4.5vw;
    }

    .events-digest-mobile .tournaments-types-mobile .tournament-type.active .select img {
        display: inline;
        width: 4.5vw;
    }

    .events-digest-mobile .tournaments-types-mobile .tournament-type.active .select {
        background: #fe7a25;
    }

    .events-digest-mobile-filters::v-deep .multiselect__tags {
        display: flex;
        align-items: center;
        height: 10vw;
        padding: 3.4vw;
        border: 1px solid #e8e8e8;
        background: #fff;
        font-size: 15px;
        width: 22vw;
        border-radius: 1vw;
        margin-top: 1vw;
    }

    .events-digest-mobile-filters::v-deep .multiselect {
        box-sizing: content-box;
        display: block;
        position: relative;
        width: fit-content;
        text-align: left;
        color: #35495e;
        margin-top: 1vw;
    }

    .events-digest-mobile-discipline::v-deep .multiselect__tags {
        display: flex;
        align-items: center;
        height: 12vw;
        padding: .4vw;
        border: 1px solid #e8e8e8;
        background: #fff;
        font-size: 14px;
        width: 61.5vw;
        border-radius: 1vw;
        margin-top: 1vw;
    }

    .events-digest-mobile-discipline::v-deep .multiselect__select {
        position: absolute;
        width: 40px;
        height: 97%;
        right: 1px;
        top: 1px;
        padding: 4px 8px;
        text-align: center;
        transition: transform .2s ease;
        z-index: 9;
        background: #ff6d1d;
        color: white !important;
        border-radius: 0vw 1vw 1vw 0vw;
    }

    .events-digest-mobile-discipline::v-deep .multiselect__select:before {
        position: relative;
        right: 0;
        top: 65%;
        color: white;
        margin-top: 4px;
        border-color: white transparent transparent;
        border-style: solid;
        border-width: 5px 5px 0;
        content: "";
    }

    .events-digest-mobile-discipline::v-deep .multiselect__content-wrapper {
        width: 100%;
    }
</style>