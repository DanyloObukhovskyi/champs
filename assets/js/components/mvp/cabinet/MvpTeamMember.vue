<template>
    <div class="grid">
        <a class="grid-row">
            <div class="logo">
                <img v-if="member.image !== null"/>
                <img v-else src="/images/noLogo.png"/>
            </div>
            <div class="data">
                <div class="title">
                    <span>
                        {{ member.nickname }}
                    </span>
                </div>
                <div class="bottom">
                    <div class="date">
                        <span>Ник</span>
                    </div>
                </div>
            </div>
            <div class="data">
                <div class="title">
                    <span v-if="isCaptain">
                        Капитан
                    </span>
                    <span v-else>
                        Игрок
                    </span>
                </div>
                <div class="bottom">
                    <div class="date">
                        <span>Роль</span>
                    </div>
                </div>
            </div>
            <div class="data">
                <div class="title">
                    <span>
                        <a :href="getSteamLink(member.steam)">
                            <img width="20px" src="/images/login_steam.svg">
                        </a>
                    </span>
                </div>
                <div class="bottom">
                    <div class="date">
                        <span>Стим</span>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "MvpTeamMember",
        props: [
            'member',
            'isCaptain'
        ],
        methods: {
            getSteamLink: (steamId) => {
                return `https://steamcommunity.com/profiles/${steamId}`
            }
        }
    }
</script>