<template>
    <div class="container p-0 m-0">
        <div class="container window-height-80 p-0 m-0">
            <div class="row d-flex justify-content-center align-items-center w-100 h-100">
                <div class="d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-center mb-3">
                        <a class="btn-orange text-light p-3 pl-5 pr-5 font-size-23 pointer" @click="showLoginModal">Join the Game</a>
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
        <div class="row d-flex justify-content-center align-items-center w-100 h-100">
            <a class="btn-orange text-light p-2 pl-3 pr-3 pointer" @click="showLoginModal">Join the Game</a>
        </div>
        <login-modal
                ref="loginModal"
                :redirect="loginRedirect"
                :show="show"
                show-first="registration">
        </login-modal>
    </div>
</template>

<script>
    import LoginModal from "../../LoginModal";

    export default {
        name: "MvpMain",
        components: {
            'login-modal': LoginModal
        },
        props: [
            'loginRedirect',
            'isAuthorize'
        ],
        data(){
            return {
                show: false
            }
        },
        methods: {
            showLoginModal() {
                if (this.isAuthorize){
                    window.location = this.loginRedirect
                } else {
                    this.$refs.loginModal.show = true
                }
            }
        },
    }
</script>