<template>
    <div class="lamp-header">
        <div class="align-items-center d-flex justify-content-center lamp">
            <div class="align-items-center d-flex justify-content-center round">
                <div class="align-items-center d-flex justify-content-center">
                    <img src="/images/lamp.svg">
                </div>
            </div>
        </div>
        <div class="align-items-center d-flex justify-content-between wrapper">
            <div class="title">
                {{title}}
            </div>
            <slot></slot>
            <a :href="link" class="description" v-if="link">
                {{linkDescription}}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LampHeader",
        props: {
            title: {
                type: String,
                default: '',
            },
            link: {
                type: String,
                default: null,
            },
            linkDescription: {
                type: String,
                default: '',
            }
        }
    }
</script>

<style scoped>
    .lamp-header{
        border-radius: 2vw 0 0 2vw;
        height: 2.8vw;
        background: rgb(66,70,74);
        background: -moz-linear-gradient(90deg, rgba(66,70,74,1) 15%, rgba(55,59,64,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(66,70,74,1) 15%, rgba(55,59,64,1) 100%);
        background: linear-gradient(90deg, rgba(66,70,74,1) 15%, rgba(55,59,64,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#42464a",endColorstr="#373b40",GradientType=1);
    }
    .lamp-header .lamp{
        width: 4.2vw;
        top: -0.29vw;
        left: -1vw;
    }
    .lamp-header .lamp .round{
        width: 3.2vw;
        height: 3.2vw;
        background: #2d3135;
        border-radius: 50%;
    }
    .lamp-header .lamp .round div {
        width: 2.3vw;
        padding: 0;
        height: 2.3vw;
        border-radius: 50%;
        position: relative;
        background: #383c3f;
    }
    .lamp-header .lamp .round div img{
        height: 1.6vw;
        width: 1.6vw;
    }
    .lamp-header .wrapper{
        top: -3vw;
        margin-left: 3vw;
    }
    .lamp-header .wrapper .title{
        color: white;
        font-family: 'Exo 2';
        font-size: 1.4vw;
    }
    .lamp-header .description{
        margin-right: 1vw;
        font-size: .8vw;
        color: #ff6d1d;
        transition: all .1s ease;
    }

    .lamp-header .description:hover{
        color: #fff;
    }
</style>