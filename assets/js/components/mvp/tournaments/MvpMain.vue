<template>
    <div class="container p-0 m-0">
        <div class="container window-height-80 p-0 m-0">
            <div class="row d-flex justify-content-center align-items-center w-100 h-100">
                <div class="d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-center mb-3">
                        <a class="btn-orange text-light p-3 pl-5 pr-5 font-size-23 pointer" @click="showLoginModal">Join
                            the Game</a>
                    </div>
                    <div class="w-100 d-flex justify-content-center">
                        <strong class="text-light font-size-23">What we offer</strong>
                    </div>
                    <div class="w-100 d-flex justify-content-center">
                        <p class="text-light w-50 font-size-18">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ad consequuntur culpa cupiditate deleniti dicta dignissimos,
                            distinctio dolor dolores hic ipsa itaque laudantium molestias,
                            mollitia nostrum, perferendis provident quos sapiente vero!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center w-100 h-100" style="margin-bottom: 3vw;">
            <a class="btn-orange text-light p-2 pl-3 pr-3 pointer" @click="showLoginModal">Join the Game</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MvpMain",
        props: [
            'loginRedirect',
            'isAuthorize'
        ],
        data() {
            return {
                show: false
            }
        },
        methods: {
            showLoginModal() {
                if (this.isAuthorize) {
                    window.location = this.loginRedirect
                } else {
                    this.$store.dispatch('showLogin');
                }
            }
        },
    }
</script>

<style>
    html, body, .background-mvp {
        height: 100%;
        width: 100%;
    }

    .background-mvp-wrapper {
        height: 100vh;
        opacity: .5;
        background-color: #0a0a0a;
        width: 100%;
        position: absolute;
        top: 0px;
    }

    .background-mvp {
        background-image: url(http://champs.loc/mvp-assets/background.gif);
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
        background-size: cover;
        position: absolute;
        top: 0px;
    }

    .window-height-80 {
        height: 80vh;
    }

    .font-size-23 {
        font-size: 23px;
    }

    .font-size-18 {
        font-size: 18px;
    }

    .border-none {
        border-color: transparent !important;
    }

    .btn-orange {
        padding: 0.35vw 1vw;
        background-color: #FF6D1D !important;
        color: #FFFFFF;
    }
</style>