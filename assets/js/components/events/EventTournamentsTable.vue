<template>
    <div class="tournament-table">
        <div class="tournament-table-head-lamp">
            <lamp-header title="Турниная сетка"/>
        </div>
        <div class="tournament-table-head">
            Груповой этап <span>Плей-офф</span>
        </div>
        <div class="tournament-table-body">
            <bracket :flat-tree="brackets">
                <template slot="tournament-name" slot-scope="{bracketNode}">
                    <div class="tournament-name" :class="`${bracketNode.type}`" v-if="bracketNode.showBracketName">
                        {{bracketNode.bracketName}}
                    </div>
                </template>
                <template slot="player-extension-top" slot-scope="{match}">
                    <span class="match-date" v-if="match !== null">
                        {{match.startAtRu}} в {{match.time}}
                    </span>
                </template>
                <template slot="player" slot-scope="{player}">
                    <a :href="getMatchUrl(player.match)" class="team">
                        <div class="team-info">
                            <div class="flag-icon">
                                <img :src="getPlayerFlag(player)" @error="$event.target.src = '/images/noLogo2.svg'">
                            </div>
                            <div class="team-name">
                                {{player.team !== null ? player.team.name : 'TBO'}}
                            </div>
                        </div>
                        <div class="score">
                            {{player.score}}
                        </div>
                    </a>
                </template>
                <template slot="winner" slot-scope="{player}">
                    <div class="team">
                        <div class="team-info">
                            <div class="cup">
                                <i class="fas fa-trophy" aria-hidden="true"></i>
                            </div>
                            <div class="team-name">
                                {{player.team !== null ? player.team.name : 'TBO'}}
                            </div>
                        </div>
                    </div>
                </template>
            </bracket>
        </div>
    </div>
</template>

<script>
    import Bracket from "../bracket/Bracket";
    import matchService from "../../services/MatchService";
    import LampHeader from "../helpers/LampHeader";

    export default {
        components: {
            LampHeader,
            Bracket
        },
        props: [
            'brackets'
        ],
        methods: {
            getPlayerFlag(player) {
                let flag = '/images/noLogo2.svg'
                if (player.team !== null && player.team.flag !== null) {
                    flag = `/uploads/images/${player.team.flag.name}`;
                }
                return flag;
            },
            getMatchUrl(match) {
                if (match !== null) {
                    return matchService.getMatchUrl(match.id)
                }
            },
            setTournamentsNamesPosition() {
                const vtbWrapper = $('.vtb-wrapper').first();

                $('.tournament-name:not(.lower)').each(function () {
                    $(this).css('top', vtbWrapper.offset().top - $(this).offset().top)
                })
                setTimeout(function () {
                    const winnerLabel = $('.winner-label').first()
                    const top = vtbWrapper.offset().top - winnerLabel.offset().top

                    winnerLabel.css('top', top)
                }, 1)
                let offset = null;
                $('.tournament-name.lower').each(function () {
                    if (offset === null || $(this).offset().top < offset) {
                        offset = $(this).offset().top
                    }
                })
                $('.tournament-name.lower').each(function () {
                    $(this).css('top', offset - 30 - $(this).offset().top)
                })
            }
        },
        mounted() {
            this.setTournamentsNamesPosition();
        }
    }
</script>

<style scoped>

    .tournament-table .tournament-table-head-lamp {
        margin-top: 2vw;
        margin-bottom: .5vw;
    }

    .tournament-table .tournament-table-head {
        padding: 1vw 2vw 1vw 2vw;
        font-size: 1.2vw;
        background-color: white;
    }

    .dark .tournament-table .tournament-table-head {
        color: white;
        background-color: #1E2123;
    }

    .tournament-table .tournament-table-head span {
        color: white;
        background-color: #FF6D1D;
        clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
        padding: .15vw 1vw .3vw 1vw;
        margin-left: 1vw;
        text-align: center;
    }

    .tournament-table .tournament-table-body {
        background: white;
        margin-top: .2vw;
        overflow-x: auto;
        overflow-y: hidden;
        padding-left: 3vw;
    }

    .dark .tournament-table .tournament-table-body {
        background: #1E2123;
    }

    .team {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        background: rgb(193, 198, 202);
        background: -moz-linear-gradient(90deg, rgba(193, 198, 202, 1) 50%, rgba(251, 252, 252, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(193, 198, 202, 1) 50%, rgba(251, 252, 252, 1) 100%);
        background: linear-gradient(90deg, rgba(193, 198, 202, 1) 50%, rgba(251, 252, 252, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c1c6ca", endColorstr="#fbfcfc", GradientType=1);
    }

    .dark .team {
        background: rgb(61, 65, 70);
        background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 100%);
        background: linear-gradient(90deg, rgba(61, 65, 70, 1) 50%, rgba(37, 40, 42, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);
    }

    .team .team-info {
        display: flex;
        height: 100%;
        align-items: center;
    }

    .team .flag-icon img {
        height: 18px;
        margin-left: 3px;
        margin-right: 5px;
    }

    .team .score {
        color: white;
        height: 100%;
        width: 33px;
        background-color: #3D4146;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .team .team-info {
        color: black;
        width: 200px;
    }

    .dark .team .team-info {
        color: white;
    }

    .defeated .team .team-info {
        color: #717374;
    }

    .winner .team .score {
        background-color: #FF6D1D;
    }

    .winner.vtb-player1 .player .team:before {
        content: "";
        position: absolute;
        background-color: #ff6d1d;
        right: -5px;
        bottom: -5px;
        height: calc(60% + 5px);
        width: 3px;
        z-index: 1;
    }

    .winner.vtb-player2 .player .team:before {
        content: "";
        position: absolute;
        background-color: #ff6d1d;
        right: -5px;
        top: 0;
        height: 60%;
        width: 3px;
    }

    .defeated.vtb-player1 .player .team:before {
        content: "";
        position: absolute;
        background-color: #3D4146;
        right: -5px;
        bottom: -2px;
        height: 60%;
        width: 3px;
    }

    .defeated.vtb-player2 .player .team:before {
        content: "";
        position: absolute;
        background-color: #3D4146;
        right: -5px;
        top: 0;
        height: 60%;
        width: 3px;
    }

    .tournament-table-body {
        margin-bottom: 1vw;
    }

    .tournament-table-body .match-date {
        color: #6E7072;
        font-size: 12px;
    }

    .team-info .cup {
        color: rgb(215, 185, 98);
        margin-left: .5vw;
        margin-right: .5vw;
    }

    .tournament-name {
        color: #849AAB;
        font-weight: 700;
        position: absolute;
        width: 200px;
        padding-top: 5px;
    }

    .vtb-wrapper {
        padding-top: 30px;
    }
</style>