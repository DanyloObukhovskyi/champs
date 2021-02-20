<template>
    <div class="trainer-page">
        <marketplace-trainer-banner
                v-if="banner !== null"
                :banner="banner">
        </marketplace-trainer-banner>
        <div class="trainer">
            <trainer-full-row
                    v-if="trainer !== null && !load"
                    @setTrainingType="(type) => trainingType = type"
                    :training-type="trainingType"
                    :games="games"
                    :description="description"
                    :trainer="trainer">
            </trainer-full-row>
            <div class="about" v-if="trainer !== null && !load">
                <div class="about-title">
                    О тренере
                </div>
                <div class="about-text">
                    {{trainer.trainer.method}}
                </div>
            </div>
            <trainer-timetable
                    v-if="trainer !== null && !load"
                    :training-type="trainingType"
                    :payment-type="paymentType"
                    :trainer="trainer">
            </trainer-timetable>
            <trainer-reviews v-if="trainer !== null && !load"
                             @update="updateReviews"
                             :trainer="trainer">
            </trainer-reviews>
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
    import TrainerTimetable from "../components/trainers/TrainerTimetable";
    import TrainerReviews from "../components/trainers/TrainerReviews";

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
        props: ['social', 'trainerId', 'trainingType', 'paymentType'],
        components: {
            TrainerReviews,
            TrainerTimetable,
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
                banner: null
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
            },
            updateReviews() {
                MarketplaceService.getTrainerReviews(this.trainerId)
                    .then(data => {
                        this.trainer.reviews = data.reviews;
                        this.trainer.reviewCount = data.reviewCount;
                        this.trainer.ratingTotal = data.ratingTotal;
                        this.trainer.rating = data.rating;
                    })
            },
            getBanner() {
                MarketplaceService.getTrainerBanner(this.trainerId)
                    .then(data => {
                        this.banner = data;
                    })
            },
        },
        mounted() {
            this.getBanner();
            this.getTrainer();
            this.getTrainingDescription();
        }
    }
</script>

<style scoped lang="scss">
    .trainer-page {
        margin-bottom: 5vw;

        .trainer {
            .about {
                padding: 1vw;
                margin-top: 1vw;
                background: rgb(255, 255, 255);
                background: -moz-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(239, 240, 241, 1) 100%);
                background: -webkit-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(239, 240, 241, 1) 100%);
                background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(239, 240, 241, 1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#eff0f1", GradientType=1);

                .about-title {
                    font-size: 1.2vw;
                    color: #ff6d1d;
                }

                .about-text {
                    font-size: 1vw;
                    color: black;
                }
            }
        }
    }

    .dark {
        .trainer-page {
            .trainer {
                .about {
                    background: rgb(61, 65, 70);
                    background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 25%, rgba(37, 40, 42, 1) 100%);
                    background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 25%, rgba(37, 40, 42, 1) 100%);
                    background: linear-gradient(90deg, rgba(61, 65, 70, 1) 25%, rgba(37, 40, 42, 1) 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);

                    .about-title {
                        color: #ff6d1d;
                    }

                    .about-text {
                        color: white;
                    }
                }
            }
        }
    }
</style>