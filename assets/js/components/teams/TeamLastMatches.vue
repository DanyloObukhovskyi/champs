<template>
    <div class="team-matches">
        <div class="team-matches-head">
            Последние матчи {{ team.title }}
        </div>
        <div class="team-matches-body d-flex">
            <div class="past-match w-100" v-for="match in team.pastMatches">
                <div class="opponent-logo">
                    <img :src="match.opponent.logo" alt="">
                </div>
                <div class="line" :class="checkIsTeamWin(match)">
                    <div class="dot">
                    </div>
                </div>
                <div class="opponent-title">
                    {{ match.opponent.name }}
                </div>
                <div class="score">
                    {{ scoreParse(match) }}
                </div>
                <div class="date">
                    {{ match.date }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeamLastMatches",
    props: [
        'team'
    ],
    methods: {
        checkIsTeamWin(match) {
            let [scoreTeam, scoreOpponent] = match.score.split('-');

            let className = 'win';
            if (Number(scoreTeam) < Number(scoreOpponent)) {
                className = 'lose';
            }
            return className;
        },
        scoreParse(match) {
            let [scoreTeam, scoreOpponent] = match.score.split('-');

            return `${scoreTeam} : ${scoreOpponent}`
        }
    }
}
</script>

<style scoped lang="scss">
.team-matches {
  width: 100%;
  margin: 1vw 0;
  padding: .2vw 0;

  .team-matches-head {
    display: flex;
    justify-content: center;
    font-size: 1vw;
    margin-bottom: .5vw;
  }

  .opponent-title {
    padding-top: .2vw;
    font-size: 1vw;
  }

  .score {
    font-size: 1.2vw;
    line-height: 1.2vw;
  }

  .opponent-logo,
  .opponent-title,
  .score {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .opponent-logo img {
    height: 2vw;
  }

  .date {
    color: #a2a2a2;
    display: flex;
    justify-content: center;
    font-size: .9vw;
    margin-top: .3vw;
    margin-bottom: .5vw;
  }
}

.line {
  background: gray;
  display: flex;
  height: .2vw;
  align-items: center;
  margin: .7vw .05vw 0;
  justify-content: center;

  .dot {
    background: gray;
    height: .9vw;
    width: .9vw;
    border-radius: 50%;
    border: .25vw solid #2d3135;
  }

  &.win {
    background: #33cc66;

    .dot {
      background: #33cc66;
    }

    .dot::before {
      content: "";
      position: absolute;
      height: .9vw;
      width: .9vw;
      top: -.25vw;
      left: -.25vw;
      border-radius: 50%;
      border: .1vw solid #33cc66;
    }
  }

  &.lose {
    background: #ff0000;


    .dot {
      background: #ff0000;
    }

    .dot::before {
      content: "";
      position: absolute;
      height: .9vw;
      width: .9vw;
      top: -.25vw;
      left: -.25vw;
      border-radius: 50%;
      border: .1vw solid #ff6b1c;
    }
  }
}

.dark {
  .line {
    background: gray;
    display: flex;
    height: .3vw;
    align-items: center;
    margin: 1vw .05vw 0;
    justify-content: center;

    .dot {
      background: gray;
      height: 1.2vw;
      width: 1.2vw;
      border-radius: 50%;
      border: .25vw solid #2d3135;
    }

    &.win {
      background: #33cc66;

      .dot {
        background: #33cc66;
      }

      .dot::before {
        content: "";
        position: absolute;
        height: 1.2vw;
        width: 1.2vw;
        top: -.25vw;
        left: -.25vw;
        border-radius: 50%;
        border: .1vw solid #f3faf5;
      }
    }

    &.lose {
      background: #ff0000;


      .dot {
        background: #ff0000;
      }

      .dot::before {
        content: "";
        position: absolute;
        height: 1.2vw;
        width: 1.2vw;
        top: -.25vw;
        left: -.25vw;
        border-radius: 50%;
        border: .1vw solid #2d3135;
      }
    }
  }
}
</style>