<template>
  <div>
    <div class="last-matches" v-if="!isMobile">
        <div class="last-matches-header">
            <lamp-header-mobile title="Последние матчи и личные встречи"/>
        </div>
        <div class="last-matches-body">
            <team-last-matches :team="teamA"/>
            <match-personal-meeting
                    :matches="meetingMatches"
                    :team-a="teamA"
                    :team-b="teamB">
            </match-personal-meeting>
            <team-last-matches :team="teamB"/>
        </div>
    </div>
    <div v-else>
      <div class="last-matches-header">
        <lamp-header-mobile title="Последние матчи и личные встречи"/>
      </div>
      <div class="last-matches-body">
        <MatchPersonalMeetingMobile
            :matches="meetingMatches"
            :team-a="teamA"
            :team-b="teamB">
        </MatchPersonalMeetingMobile>
      </div>
    </div>
  </div>
</template>

<script>
    import LampHeader from "../helpers/LampHeader";
    import TeamLastMatches from "./TeamLastMatches";
    import MatchPersonalMeeting from "../matches/MatchPersonalMeeting";
    import {mapGetters} from "vuex";
    import LampHeaderMobile from "../helpers/LampHeaderMobile";
    import MatchPersonalMeetingMobile from "../matches/MatchPersonalMeetingMobile";

    export default {
        name: "TeamsLastMatches",
        props: [
            'teamA',
            'teamB',
            'meetingMatches'
        ],
        components: {
          MatchPersonalMeetingMobile,
          LampHeaderMobile,
            MatchPersonalMeeting,
            TeamLastMatches,
            LampHeader
        },
      computed: {
        ...mapGetters([
          'isMobile'
        ]),
      }
    }
</script>

<style scoped>
    .last-matches-body {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .last-matches-header {
        margin-top: 3.5vw;
    }

    .last-matches-body .team-matches:nth-child(1) {
        margin-right: .5vw;
        background: rgb(251, 252, 252);
        background: -moz-linear-gradient(90deg, rgba(251, 252, 252, 1) 0%, rgba(193, 198, 202, 1) 49%);
        background: -webkit-linear-gradient(90deg, rgba(251, 252, 252, 1) 0%, rgba(193, 198, 202, 1) 49%);
        background: linear-gradient(90deg, rgba(251, 252, 252, 1) 0%, rgba(193, 198, 202, 1) 49%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fbfcfc", endColorstr="#c1c6ca", GradientType=1);
    }

    .dark .last-matches-body .team-matches:nth-child(1){
        color: white;
        background: rgb(61,65,70);
        background: -moz-linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
        background: linear-gradient(90deg, rgba(61,65,70,1) 0%, rgba(37,40,42,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146",endColorstr="#25282a",GradientType=1);
    }

    .last-matches-body .team-matches:nth-child(3) {
        margin-left: .5vw;
        background: rgb(193, 198, 202);
        background: -moz-linear-gradient(90deg, rgba(193, 198, 202, 1) 0%, rgba(251, 252, 252, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(193, 198, 202, 1) 0%, rgba(251, 252, 252, 1) 100%);
        background: linear-gradient(90deg, rgba(193, 198, 202, 1) 0%, rgba(251, 252, 252, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c1c6ca", endColorstr="#fbfcfc", GradientType=1);
    }

    .dark .last-matches-body .team-matches:nth-child(3){
        color: white;
        background: rgb(37,40,42);
        background: -moz-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
        background: linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a",endColorstr="#3d4146",GradientType=1);
    }
</style>