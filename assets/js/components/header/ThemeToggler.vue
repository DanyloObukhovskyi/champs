<template>
    <div class="d-flex align-items-center">
        <i class="fas text-light pointer" :class="theme === 'light' ? 'fa-moon': 'fa-sun'" @click="toggleTheme"></i>
    </div>
</template>

<script>
    export default {
        name: "ThemeToggler",
        data(){
            return {
                theme: null,
            }
        },
        methods: {

        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>