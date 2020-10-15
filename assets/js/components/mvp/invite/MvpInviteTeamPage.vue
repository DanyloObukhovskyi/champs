<template>
    <div class="events_view" id="teamMembers">
        <div class="container">
            <div class="row">
                <div class="component upcoming_events" id="upcoming_events">
                    <div class="header">
                        <div class="round">
                            <div><img src="/images/lamp.svg" alt="lamp" /></div>
                        </div>
                        <div class="title">
                            {{ team.name }}
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
            <div class="row mt-3" v-if="isAuthorize && isFreePlace">
                <div class="lft">
                    <a class="btn-orange text-light pointer" @click="joinTeam">
                        <i class="fas fa-plus"></i>&nbsp;&nbsp;Присоеденится
                    </a>
                </div>
            </div>
        </div>
        <login-modal :show="!isAuthorize"/>
    </div>
</template>

<script>
    import MvpTeamMember from "../cabinet/MvpTeamMember";
    import LoginModal from "../../LoginModal";
    import Swal from 'sweetalert2'

    export default {
        name: "MvpInviteTeamPage",
        inject: [
            'http',
            'config'
        ],
        props: [
            'teamId',
            'isAuthorize'
        ],
        components: {
            'mvp-team-member': MvpTeamMember,
            'login-modal': LoginModal
        },
        data(){
            return {
                team: {
                    name: null
                },
                authUser: null,
            }
        },
        computed: {
            isFreePlace(){
                if (this.team.hasOwnProperty('members')){
                    return this.team.members.length < this.team.capacity;
                }
                return false;
            }
        },
        methods: {
            getTeam(){
                this.http.getMvpTeam(this.teamId)
                    .then(({data}) => {
                        this.team = data
                    })
            },
            checkMemberIsCaptain(member){
                return member.id === this.team.creator.id
            },
            joinTeam(){
                this.http.getAuthUser()
                    .then(({data}) => {
                        this.authUser = data;

                        const needSteam = this.checkNeedSteamForJoin();

                        if (!needSteam){
                            this.http.joinMemberToTeam(this.teamId)
                                .then(() => {
                                    this.getTeam()
                                }).catch(({response}) => {
                                    this.errorPopup(response.data)
                                })
                        }
                    })
            },
            errorPopup(error){
                Swal.fire({
                    icon: 'error',
                    title: 'Упс...',
                    text: error,
                })
            },
            checkNeedSteamForJoin(){
                const html = `
                            Для того что бы учавствовать в турнире, необходимо привязать акаунт
                            <a href="${this.config.STEAM_LOGIN_LINK}">Steam</a>
                            <div class="pt-2">
                                <a href="${this.config.STEAM_LOGIN_LINK}">
                                    <img src="/images/login_steam.svg"/>
                                </a>
                            </div>`;

                if (this.authUser !== null ){
                    if (this.authUser.steam === null || this.authUser.steam === '' || this.authUser.steam === undefined){
                        Swal.fire({
                            icon: 'error',
                            title: 'Упс...',
                            html,
                            showConfirmButton: false,
                            showCloseButton: true
                        })
                    } else {
                        return false;
                    }
                }
                return true;
            }
        },
        mounted() {
            this.getTeam()
        }
    }
</script>