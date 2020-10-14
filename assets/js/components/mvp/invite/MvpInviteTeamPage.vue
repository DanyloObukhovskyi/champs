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
        </div>
    </div>
</template>

<script>
    import MvpTeamMember from "../cabinet/MvpTeamMember";

    export default {
        name: "MvpInviteTeamPage",
        inject: [
            'http'
        ],
        props: [
            'teamId'
        ],
        components: {
            'mvp-team-member': MvpTeamMember
        },
        data(){
            return {
                team: {
                    name: null
                }
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
            }
        },
        mounted() {
            this.getTeam()
        }
    }
</script>