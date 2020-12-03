<template>
    <div class="trainer-page">
        <marketplace-trainer-banner :social="social"/>
        <div class="trainer">
            <trainer-full-row
                    v-if="trainer !== null && !load"
                    :games="games"
                    :description="description"
                    :trainer="trainer">
            </trainer-full-row>
        </div>
        <div class="d-flex justify-content-center" v-if="load">
            <loader/>
        </div>
    </div>
</template>

<script>
    import MarketplaceTrainerBanner from "../components/marketplace/MarketplaceTrainerBanner";
    import TrainerFullRow from "../components/trainers/TrainerFullRow";
    import MarketplaceService from "../services/MarketplaceService";
    import Loader from "../components/helpers/Loader";

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
        name: "MarketplaceTrainerPage",
        props: ['social', 'trainerId'],
        components: {
            Loader,
            TrainerFullRow,
            MarketplaceTrainerBanner
        },
        data() {
            return {
                games: games,
                description: {
                    individual: {},
                    group: {},
                    analytic: {}
                },
                trainer: null,
                load: false,
            }
        },
        methods: {
            getTrainingDescription() {
                MarketplaceService.getTrainingDescription()
                    .then(data => {
                        this.description = data;
                    })
            },
            getTrainer() {
                this.load = true;

                MarketplaceService.getTrainer(this.trainerId)
                    .then(trainer => {
                        this.trainer = trainer;
                        this.load = false;
                    })
            }
        },
        mounted() {
            this.getTrainer();
            this.getTrainingDescription();
        }
    }
</script>

<style scoped>

</style>