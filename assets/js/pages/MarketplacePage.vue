<template>
    <div class="marketplace">
        <marketplace-header :game="game"/>
        <div class="marketplace-body">
            <div class="left">
                <marketplace-sidebar @setGame="setGame" :game="game" :games="games"/>
            </div>
            <div class="right">
                <marketplace-filters @setFilter="setFilter" v-bind="filters"/>
                <trainer-row
                        v-for="(trainer, index) in trainers"
                        :key="index"
                        :games="games"
                        :description="description"
                        :trainer="trainer">
                </trainer-row>
                <div class="d-flex justify-content-center w-100" v-if="load">
                    <loader/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    import MarketplaceHeader from "../components/marketplace/MarketplaceHeader";
    import MarketplaceSidebar from "../components/marketplace/MarketplaceSidebar";
    import MarketplaceFilters from "../components/marketplace/MarketplaceFilters";
    import MarketplaceService from "../services/MarketplaceService";
    import TrainerRow from "../components/trainers/TrainerRow";
    import Loader from "../components/helpers/Loader";

    export default {
        name: "MarketplacePage",
        components: {
            Loader,
            TrainerRow,
            MarketplaceFilters,
            MarketplaceSidebar,
            MarketplaceHeader
        },
        data(){
            return {
                filters: {
                    workout: 'all',
                    isExpensive: false,
                    search: null,
                },
                trainers: [],
                loadAllTrainers: false,
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
            'game': function() {
                this.trainers = [];
                this.loadAllTrainers = false;

                this.getTrainers();
            },
            'filters.workout': function() {
                this.trainers = [];
                this.loadAllTrainers = false;

                this.getTrainers();
            },
            'filters.isExpensive': function() {
                this.trainers = [];
                this.loadAllTrainers = false;

                this.getTrainers();
            },
            'filters.search': function() {
                this.trainers = [];
                this.loadAllTrainers = false;

                this.getTrainers();
            },
        },
        computed: {
            ...mapGetters([
                'game',
                'games'
            ]),
            pagesCount() {
                return Math.ceil(+this.count / +this.perPage)
            }
        },
        methods: {
            setGame(game) {
                this.$store.commit('setGame', game);
                this.page = 1;
            },
            setFilter({name, value}){
                this.filters[name] = value;
            },
            getTrainers() {
                if (!this.load && !this.loadAllTrainers){
                    this.load = true;

                    MarketplaceService.getTrainers(this.game, this.trainers.length,  this.filters)
                        .then(data => {
                            if (data.trainers.length === 0)
                            {
                                this.loadAllTrainers = true;
                            }
                            for (let trainer of data.trainers){
                                const searchTrainer = this.trainers.find(t => t.id === trainer.id)
                                if (!searchTrainer){
                                    this.trainers.push(trainer);
                                }
                            }
                            this.perPage = data.limit;
                            this.load = false;
                        })
                }
            },
            setPage(page) {
                this.page = page;
            },
            getTrainingDescription() {
                MarketplaceService.getTrainingDescription()
                    .then(data => {
                        this.description = data;
                    })
            },
            scrollEventTrigger() {
                const self = this;
                window.onscroll = () => {
                    const scrollable = $("body").height() - ($(window).innerHeight() + $(window).scrollTop());

                    if (scrollable <= 10) {
                        self.getTrainers()
                    }
                }
            },
        },
        mounted() {
            if (this.game !== null){
                this.getTrainers();
            }
            this.scrollEventTrigger();
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