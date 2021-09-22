<template>
  <div class="meeting-matches">
    <div class="title">
      Личные встречи
    </div>
    <div class="match" v-for="match in matches">
      <div class="ball" :class="checkIsWin(match, teamA) ? 'win' : 'lose'">

      </div>
      <div class="date">
        {{parseDate(match.startedAt.timeStamp)}}
      </div>
      <div class="ball" :class="checkIsWin(match, teamB) ? 'win' : 'lose'">

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
  width: 96%
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
  justify-content: space-around;
  width: 100%;
  padding: 0 .6vw;
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

  &.win {
    background: #33cc66;
  }

  &.win::before {
    content: "";
    position: absolute;
    height: 6vw;
    width: 6vw;
    top: -.25vw;
    left: -.25vw;
    border-radius: 50%;
    border: .1vw solid #33cc66;
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
</style>