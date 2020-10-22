<template>
    <div>
        <div class="header mt-3 d-block">
            <div class="lft">
                <a :href="http.getMvpLink()">Назад</a>
            </div>
            <div class="events_view" id="teamMembers">
                <div class="container">
                    <div class="row">
                        <div class="component upcoming_events" id="upcoming_events">
                            <div class="header">
                                <div class="round">
                                    <div><img src="/images/lamp.svg" alt="lamp" /></div>
                                </div>
                                <div class="title">
                                    Участники
                                </div>
                            </div>
                            <mvp-team-member
                                    v-if="team.hasOwnProperty('members')"
                                    v-for="(member, key) in team.members"
                                    :member="member"
                                    :key="key"
                                    :is-captain="checkMemberIsCaptain(member)">
                            </mvp-team-member>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="lft" v-if="isCreator">
                            <a @click="deleteTeam">
                                Удалить команду
                            </a>
                            <a class="btn-orange text-light pointer" @click="showAddModal">
                                <i class="fas fa-plus"></i>&nbsp;&nbsp;Добавить учасников
                            </a>
                        </div>
                        <div class="lft" v-else>
                            <a class="btn-orange text-light pointer" :href="http.userLeaveTeamLink(teamId)">
                                Покинуть команду
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2'
    import MvpTeamMember from "./MvpTeamMember";

    export default {
        name: "MvpTeamPage",
        inject: [
            'http'
        ],
        props: [
            'teamId'
        ],
        components: {
            'mvp-team-member': MvpTeamMember,
        },
        data(){
            return {
                team: {},
                inviteToken: null,
                user: null,
            }
        },
        computed: {
            isCreator(){
                return this.user !== null && this.user.id === this.team.creator.id;
            }
        },
        methods: {
            getTeam(){
                this.http.getMvpTeam(this.teamId)
                    .then(({data}) => {
                        this.team = data;
                    })
            },
            checkMemberIsCaptain(member){
                return member.id === this.team.creator.id
            },
            getSteamLink(steamId){
                return `https://steamcommunity.com/profiles/${steamId}`
            },
            showAddModal(){
                this.http.getTeamInviteToken(this.teamId)
                    .then(({data}) => {
                        this.showInviteModal(data)
                    })
            },
            showInviteModal(token){
                const inviteLink = this.http.getInviteToTeamLink(this.teamId, token)

                Swal.fire({
                    title: 'Добавить участников',
                    text: 'Отправь эту ссылку игрокам, которых хочешь пригласить в команду',
                    html: `<textarea class="swal2-textarea" placeholder="" style="display: flex;">${inviteLink}</textarea>`,
                    showCancelButton: true,
                    showConfirmButton: true,
                    confirmButtonText: 'Обновить',
                    cancelButtonText: 'Закрыть',
                    preConfirm: () => {
                        this.http.reloadTeamInviteToken(this.teamId)
                            .then(({data}) => {
                                this.showInviteModal(data)
                            })
                    }
                })
            },
            deleteTeam(){
                this.http.deleteMvpTeam(this.teamId)
                    .then(() => {
                        window.location = this.http.getMvpLink()
                    })
            },
            getUser(){
                this.http.getAuthUser()
                    .then(({data}) => {
                        this.user = data
                    })
            },
        },
        mounted() {
            this.getTeam();
            this.getUser();
        }
    }
</script>