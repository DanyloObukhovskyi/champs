<template>
    <div class="team-matches">
        <div class="team-matches-head">
            Последние матчи {{team.title}}
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
                    {{match.opponent.name}}
                </div>
                <div class="score">
                    {{match.score}}
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
            }
        }
    }
</script>

<style scoped>
    .team-matches {
        width: 100%;
        margin: 1vw 0;
        padding: 1vw 0;
    }

    .team-matches .team-matches-head {
        display: flex;
        justify-content: center;
        font-size: 1.2vw;
        margin-bottom: .5vw;
    }

    .team-matches .opponent-title {
        padding: 1vw 0 .5vw;
        font-size: 1vw;
    }

    .team-matches .score {
        font-size: 1.5vw;
    }

    .team-matches .opponent-logo,
    .team-matches .opponent-title,
    .team-matches .score {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .team-matches .opponent-logo img {
        height: 4vw;
    }

    .line {
        background: gray;
        display: flex;
        height: .3vw;
        align-items: center;
        margin: 1vw .05vw 0;
        justify-content: center;
    }

    .line.win {
        background: green;
    }

    .line.lose {
        background: red;
    }

    .line .dot {
        background: gray;
        height: 1.3vw;
        width: 1.2vw;
        border-radius: 50%;
        border: .25vw solid black;
    }

    .line.win .dot {
        background: green;
    }

    .line.lose .dot {
        background: red;
    }
</style>