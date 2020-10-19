<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-mvp">
        <button :class="{collapsed: !show}" class="navbar-toggler border-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span @click="show = !show" class="navbar-toggler-icon"></span>
        </button>
        <div :class="{show}" class="navbar-collapse collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto d-flex w-100 justify-content-end">
                <li class="nav-item" v-if="!isAuthorize">
                    <a @click="showLoginForm" class="nav-link" href="#">
                        Зарегестрировать профиль
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Help
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Отправить письмо поддержке
                    </a>
                </li>
                <li class="nav-item" v-if="isAuthorize">
                    <a class="nav-link" :href="http.getProfileLink()">
                        My Gaming Profile
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "MvpPageHeader",
        inject: [
            'http'
        ],
        props: [
            'isAuthorize',
            'showLoginForm'
        ],
        data(){
            return {
                show: false
            }
        },
        methods: {
            showLoginForm(){
                header.view = 2;
            }
        }
    }
</script>

<style scoped>

</style>