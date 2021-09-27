<template>
  <div class="meeting-matches">
    <div class="title">
      Личные встречи
    </div>
    <div class="match" v-for="match in matches">
      <div class="team-result" style="justify-content: end;">
        <a class="team-title">{{match.teamA.title}}</a>
        <div class="personal-meeting-teamA">
          <a v-if="checkIsWin(match, teamA)">
            <img src="/images/teamWin.png">
          </a>
          <a v-else>
            <img src="/images/teamLose.png">
          </a>
        </div>
      </div>
      <div class="date">
        {{parseDate(match.startedAt.timeStamp)}}
      </div>
      <div class="team-result">
        <div class="personal-meeting-teamB">
          <a v-if="checkIsWin(match, teamB)">
            <img src="/images/teamWin.png">
          </a>
          <a v-else>
            <img src="/images/teamLose.png">
          </a>
        </div>
        <a class="team-title">{{match.teamB.title}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchPersonalMeetingMobile",
  props: ['matches', 'teamA', 'teamB'],
  methods: {
    parseDate(timestamp) {
      const date = new Date(timestamp * 1000);

      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
      const year = date.getFullYear();

      return `${day}.${month}.${year}`;
    },
    checkIsWin(match, team) {
      let opponent, current;

      if (match.teamA.title === team.title) {
        current = 'teamA';
        opponent = 'teamB';
      } else {
        current = 'teamB';
        opponent = 'teamA';
      }

      return Number(match[current].score) >= Number(match[opponent].score)
    }
  }
}
</script>

<style scoped lang="scss">
.meeting-matches{
  background-color: #1e2123;
  margin: 1vw 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title{
  width: 100%;
  text-align: center;
  font-size: 100%;
  color: white;
  margin-bottom: .3vw;
  margin-top: .3vw;
}

.match {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: .3vw;
  align-items: center;

  .date {
    font-size: 85%;
    color: #7b7d7f;
  }
}

.ball {
  background: gray;
  height: 6vw;
  width: 6vw;
  border-radius: 50%;
  border: .25vw solid #2d3135;
  margin-bottom: 2vw;
  
  &.win {
    background: #33cc66;
  }

  &.win::before {
    content: "";
    position: absolute;
    height: 6vw;
    width: 6vw;
    top: -0.25vw;
    left: -0.30vw;
    border-radius: 50%;
    border: .1vw solid whitesmoke;
  }

  &.lose {
    background: #ff0000;
  }

  &.lose::before {
    content: "";
    position: absolute;
    height: 6vw;
    width: 6vw;
    top: -.25vw;
    left: -.25vw;
    border-radius: 50%;
    border: .1vw solid #2d3135;
  }
}
.match .team-title {
  color: white;
  font-size: 90%;
}
.team-result {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25%;
}
.personal-meeting-teamA {
  margin-left: 5%;
}
.personal-meeting-teamB {
  margin-right: 5%;
}
</style>