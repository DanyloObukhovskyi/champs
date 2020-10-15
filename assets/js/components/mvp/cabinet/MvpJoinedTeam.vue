<template>
    <div class="grid">
        <a class="grid-row">
            <div class="data">
                <div class="title">
                    <span>
                        {{ team.name }}
                    </span>
                </div>
                <div class="bottom">
                    <div class="date">
                        <span>Название</span>
                    </div>
                </div>
            </div>
            <div class="data">
                <div class="title">
                    <span>
                        {{ team.tag }}
                    </span>
                </div>
                <div class="bottom">
                    <div class="date">
                        <span>Тег</span>
                    </div>
                </div>
            </div>
            <div class="data">
                <div class="title">
                    <span>
                        {{ team.members.length }}
                    </span>
                </div>
                <div class="bottom">
                    <div class="date">
                        <span>Учасников</span>
                    </div>
                </div>
            </div>
            <div class="data pt-2">
                <a :href="http.getTeamLink(team.id)" class="btn-orange text-light p-2 pointer">
                    Посмотреть
                </a>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "MvpJoinedTeam",
        props: ['team'],
        inject: [
            'http'
        ],

    }
</script>

<style scoped>

</style>