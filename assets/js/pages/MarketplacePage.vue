<template>
    <div class="marketplace">
        <marketplace-header :game="header.game"/>
        <div class="marketplace-body">
            <div class="left">
                <marketplace-sidebar @setGame="setGame" :game="header.game" :games="games"/>
            </div>
            <div class="right">
                <marketplace-filters @setFilter="setFilter" v-bind="filters"/>
                <div class="d-flex justify-content-center w-100" v-if="load">
                    <loader/>
                </div>
                <trainer-row
                        v-else
                        v-for="(trainer, index) in trainers"
                        :key="index"
                        :games="games"
                        :description="description"
                        :trainer="trainer">
                </trainer-row>
                <paginate
                        v-if="count > trainers.length"
                        :page-count="pagesCount"
                        :click-handler="setPage"
                        prev-text="Prev"
                        next-text="Next"
                        container-class="pagination">
                </paginate>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../css/pagination.css'
    import MarketplaceHeader from "../components/marketplace/MarketplaceHeader";
    import MarketplaceSidebar from "../components/marketplace/MarketplaceSidebar";
    import MarketplaceFilters from "../components/marketplace/MarketplaceFilters";
    import MarketplaceService from "../services/MarketplaceService";
    import TrainerRow from "../components/trainers/TrainerRow";
    import Loader from "../components/helpers/Loader";
    import Paginate from 'vuejs-paginate'

    const games = [
        {
            name: 'cs',
            title: 'CS:GO',
            icon: 'cs.png'
        },
        {
            name: 'dota',
            title: 'DOTA 2',
            icon: 'dota.png'
        },
        {
            name: 'lol',
            title: 'LOL',
            icon: 'lol.jpg'
        },
    ];

    export default {
        name: "MarketplacePage",
        components: {
            Loader,
            TrainerRow,
            MarketplaceFilters,
            MarketplaceSidebar,
            MarketplaceHeader,
            Paginate
        },
        inject: [
            'header'
        ],
        data(){
            return {
                filters: {
                    workout: 'all',
                    isExpensive: false,
                    search: null,
                },
                games: games,
                trainers: [],
                count: 0,
                page: 1,
                perPage: 5,
                load: false,
                description: {
                    individual: {},
                    group: {},
                    analytic: {}
                },
            }
        },
        watch: {
            page() {
                this.getTrainers();
            },
            'header.game': function() {
                this.getTrainers();
            },
            'filters.workout': function() {
                this.getTrainers();
            },
            'filters.isExpensive': function() {
                this.getTrainers();
            },
            'filters.search': function() {
                this.getTrainers();
            },
        },
        computed: {
            pagesCount() {
                return Math.ceil(+this.count / +this.perPage)
            }
        },
        methods: {
            setGame(game) {
                this.header.setGame(game)
                this.page = 1;
            },
            setFilter({name, value}){
                this.filters[name] = value;
            },
            getTrainers() {
                this.load = true;

                MarketplaceService.getTrainers(this.header.game, this.page,  this.filters)
                    .then(data => {
                        this.trainers = data.trainers;
                        this.count = data.count;
                        this.perPage = data.limit;

                        this.load = false;
                    })
            },
            setPage(page) {
                this.page = page;
            },
            getTrainingDescription() {
                MarketplaceService.getTrainingDescription()
                    .then(data => {
                        this.description = data;
                    })
            }
        },
        mounted() {
            this.getTrainers();
            this.getTrainingDescription();
        }
    }
</script>

<style scoped lang="scss">
    @import '../../css/animations.css';

    .marketplace {
        margin-bottom: 2vw;

        .marketplace-body {
            margin-top: 1vw;
            display: flex;

            .left{
                width: 18%;
                -webkit-animation: animation-translate-left 1.5s linear both;
                animation: animation-translate-left 1.5s linear both;
                animation-delay: .5s;
            }

            .right {
                margin-left: 1vw;
                width: 82%;
                -webkit-animation: animation-translate-right 1.5s linear both;
                animation: animation-translate-right 1.5s linear both;
                animation-delay: .5s;
            }
        }
    }
</style>