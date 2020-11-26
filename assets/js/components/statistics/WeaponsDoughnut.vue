<template>
    <div class="component doughnut">
        <div class="doughnut-header">
            <lamp-header title="Топ оружия"/>
        </div>
        <div>
            <div id="doughnut_main">
                <figure class="highcharts-figure">
                    <div id="container"></div>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
    import Highcharts from 'highcharts';
    import Exporting from 'highcharts/modules/exporting';
    import LampHeader from "../helpers/LampHeader";

    Exporting(Highcharts);

    export default {
        name: "WeaponsDoughnut",
        components: {LampHeader},
        data() {
            return {
                weapons: []
            }
        },
        methods: {
            getWeapons() {
                axios.post('/ru/statistics/weapons')
                    .then(({data}) => {
                        this.weapons = data;

                        this.initDoughnut()
                    })
            },
            initDoughnut() {
                Highcharts.chart('container', {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    accessibility: {
                        point: {
                            valueSuffix: '%'
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>'
                            }
                        }
                    },
                    series: [{
                        name: 'Оружие',
                        colorByPoint: true,
                        data: this.weapons
                    }]
                });
            }
        },
        mounted() {
            this.getWeapons();
        }
    }
</script>

<style scoped>
    .doughnut-header{
        margin-bottom: 1vw;
    }

    .component .content {
        width: 100%;
        border: 0.04vw solid #CFDCF3;
        background: #FFFFFF;
    }
</style>

<style>
    .dark .highcharts-figure .highcharts-background{
        fill: #3c4045;
    }

    .dark .highcharts-button-box{
        fill: #25282a;
    }
</style>