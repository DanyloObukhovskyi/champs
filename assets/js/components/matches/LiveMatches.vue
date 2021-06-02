<template>
    <div class="lives">
        <div class="align-items-center d-flex justify-content-between header">
            <div class="wrapper d-flex align-items-center">
                <div class="ellipse-wrapper">
                    <div class="ellipse-border-two">
                        <div class="ellipse-border">
                            <div class="ellipse"></div>
                        </div>
                    </div>
                </div>
                <div class="title">
                    Live матчи
                </div>
            </div>
            <a class="watch-all" :href="matchesUrl">
                Смотреть все
                <span class="arrow">
                    <i class="fas fa-chevron-right"></i>
                </span>
            </a>
        </div>
        <div class="d-flex justify-content-center align-items-center p-5" v-if="load">
            <small-loader/>
        </div>
        <div class="match-body" v-if="matches.length > 0 && !load">
            <div class="match-row d-flex" v-for="(match, index) in currentPage.items">
                <div class="match-event d-flex align-items-center">
                    <div class="event-logo">
                        <img :src="match.event.image" alt="">
                    </div>
                    <div class="event-name">
                        {{ match.event.name }}
                    </div>
                </div>
                <div class="teams d-flex align-items-center">
                    <div class="teamA w-50 d-flex justify-content-end align-items-center">
                        <div class="team-name">
                            {{ match.teamA.title }}
                        </div>
                        <img :src="match.teamA.logo" alt="">
                    </div>
                    <div class="score">
                        <span :class="getScoreClass(match.teamA.score, match.teamB.score)">
                            {{ match.teamA.score }}
                        </span>
                        :
                        <span :class="getScoreClass(match.teamB.score, match.teamA.score)">
                            {{ match.teamB.score }}
                        </span>
                    </div>
                    <div class="teamB w-50 d-flex align-items-center">
                        <img :src="match.teamB.logo" alt="">
                        <div class="team-name">
                            {{ match.teamB.title }}
                        </div>
                    </div>
                </div>
                <div class="watch d-flex justify-content-center align-items-center">
                    <a :href="getMatchUrl(match, getSlug(match))">Смотреть <i class="fas fa-caret-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import matchService from "../../services/MatchService";
    import SmallLoader from "../helpers/SmallLoader";

    export default {
        name: "LiveMatches",
        components: {SmallLoader},
        data() {
            return {
                matches: [],
                page: 0,
                load: false,
            }
        },
        computed: {
            currentPage() {
                return this.matches[this.page]
            },
            matchesUrl() {
                return matchService.matchesPage();
            }
        },
        methods: {
            getLiveMatches() {
                this.load = true;

                matchService.getHomeLives()
                    .then((data) => {
                        for (let timestamp in data) {
                            this.matches.push(data[timestamp]);

                            this.load = false;
                        }
                    })
            },
            getScoreClass(scoreA, scoreB) {
                let className;
                if (scoreA > scoreB) {
                    className = 'green';
                } else if (scoreA < scoreB) {
                    className = 'red';
                }
                return className;
            },
            getMatchUrl(match, slug) {
                return matchService.getMatchUrl(match.match_id, slug)
            },
            getSlug(match) {
                try{
                    let team1 = this.getTitleUrl(match.teamA.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let team2 = this.getTitleUrl(match.teamB.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let event =  this.getTitleUrl(match.event.name)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let game = this.getTitleUrl(match.event.game.name)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let start_date = this.getTitleUrl(match.startedAtRu)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    return team1+'_vs_'+team2+'_'+event+'_'+game+'_'+start_date;
                } catch (e) {
                    return match.slug;
                }
            },
            getTitleUrl(title) {
                return title.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
                    function (all, ch, space, words, i) {
                        if (space || words) {
                            return space ? '_' : '';
                        }
                        var code = ch.charCodeAt(0),
                            index = code == 1025 || code == 1105 ? 0 :
                                code > 1071 ? code - 1071 : code - 1039,
                            t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                                'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                                'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                                'shch', '', 'y', '', 'e', 'yu', 'ya'
                            ];
                        return t[index];
                    });
            }
        },
        mounted() {
            this.getLiveMatches()
        }
    }
</script>

<style scoped lang="scss">
  @import '../../../css/animations.css';

  .lives {
	.header {
	  height: 3vw;
	  background: -moz-linear-gradient(180deg, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
	  background: -o-linear-gradient(180deg, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
	  background: -webkit-linear-gradient(180deg, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
	  background: -webkit-gradient(linear, right top, left top, color-stop(-25%, rgba(248, 248, 248, 0.0)), color-stop(125%, rgba(248, 248, 248, 0.25))), #2d3135;
	  background: -webkit-linear-gradient(right, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
	  background: -moz-linear-gradient(right, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
	  background: -o-linear-gradient(right, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;
	  background: linear-gradient(270deg, rgba(248, 248, 248, 0.0) -25%, rgba(248, 248, 248, 0.25) 125%), #2d3135;

	  .title {
		float: left;
		margin: 1px 0 0;
		width: auto;
		color: #ffffff;
		font-size: 1.5vw;
		font-weight: 500;
	  }

	  .watch-all {
		color: #d0d0d0;
		font-size: .8vw;
		display: flex;
		align-items: center;
		transition: all .1s ease-in-out;

		.arrow {
		  background-color: #2d3135;
		  clip-path: polygon(0 0, 100% 25%, 100% 75%, 0 100%);
		  display: flex;
		  width: 1.1vw;
		  height: 2vw;
		  justify-content: center;
		  align-items: center;
		  margin-left: .5vw;
		  margin-right: 1vw;
		}

		&:hover {
		  color: #fff;
		}
	  }

	  .ellipse-wrapper {
		margin-left: 1.5vw;
		margin-right: 1vw;

		.ellipse-border-two {
		  display: flex;
		  align-items: center;
		  position: relative;
		  width: 1.6vw;
		  height: 1.6vw;
		  -webkit-border-radius: 50%;
		  -moz-border-radius: 50%;
		  border-radius: 50%;
		  background: rgba(254, 80, 80, 0.1);
		}

		.ellipse-border {
		  display: flex;
		  align-items: center;
		  margin: 0 auto;
		  position: relative;
		  width: 1vw;
		  height: 1vw;
		  -webkit-border-radius: 50%;
		  -moz-border-radius: 50%;
		  border-radius: 50%;
		  background: rgba(254, 80, 80, 0.25);
		}

		.ellipse {
		  height: .4vw;
		  margin: 0 auto;
		  width: .4vw;
		  -webkit-border-radius: 50%;
		  -moz-border-radius: 50%;
		  border-radius: 100%;
		  background: #fe5050;
		}
	  }
	}

	.match-body {
	  -webkit-animation: animation-translate-left 1500ms linear both;
	  animation: animation-translate-left 1500ms linear both;

	  .match-row {
		height: 3.5vw;
		border-top: .2vw solid #dadbdc;
		transition: all .3s ease-in-out;
		position: relative;
		background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9InBvZGxvemhrYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMDAlIiB5MT0iNTAlIiB4Mj0iMCUiIHkyPSI1MCUiPgo8c3RvcCBvZmZzZXQ9Ii0yNSUiIHN0b3AtY29sb3I9IiMzZDQxNDYiIHN0b3Atb3BhY2l0eT0iMCIgLz4KPHN0b3Agb2Zmc2V0PSIxMS44NDA4MiUiIHN0b3AtY29sb3I9IiMzZDQxNDYiIHN0b3Atb3BhY2l0eT0iMCIgLz4KPHN0b3Agb2Zmc2V0PSI5NS4wMDczMjQlIiBzdG9wLWNvbG9yPSIjM2Q0MTQ2IiBzdG9wLW9wYWNpdHk9IjAuMjUiIC8+CjxzdG9wIG9mZnNldD0iMTI1JSIgc3RvcC1jb2xvcj0iIzNkNDE0NiIgc3RvcC1vcGFjaXR5PSIwLjI1IiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI3BvZGxvemhrYSkiIC8+PC9zdmc+), #ffffff;
		background: -moz-linear-gradient(180deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
		background: -o-linear-gradient(180deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
		background: -webkit-linear-gradient(180deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
		background: -webkit-gradient(linear, right top, left top, color-stop(-25%, rgba(61, 65, 70, 0.0)), color-stop(11.84082%, rgba(61, 65, 70, 0.0)), color-stop(95.007324%, rgba(61, 65, 70, 0.25)), color-stop(125%, rgba(61, 65, 70, 0.25))), #ffffff;
		background: -webkit-linear-gradient(right, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
		background: -moz-linear-gradient(right, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
		background: -o-linear-gradient(right, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;
		background: linear-gradient(270deg, rgba(61, 65, 70, 0.0) -25%, rgba(61, 65, 70, 0.0) 11.84082%, rgba(61, 65, 70, 0.25) 95.007324%, rgba(61, 65, 70, 0.25) 125%), #ffffff;

		&:hover {
		  margin-left: -1%;
		  margin-right: -1%;
		}

		.match-event {
		  width: 13vw;
		  padding-left: 1vw;
		  font-size: .8vw;
		  color: #5c6b79;

		  img {
			margin-right: .3vw;
		  }
		}

		.teams {
		  width: 20vw;

		  .score {
			width: 15%;
			font-size: 1vw;

			.red {
			  color: #be1517;
			}

			.green {
			  color: #33cc66;
			}
		  }

		  .teamA {
			padding-right: .5vw;

			.team-name {
			  text-align: end;
			  padding-right: .3vw;
			  font-size: 1vw;
			  line-height: 1vw;
			}
		  }

		  .teamB {
			.team-name {
			  margin-left: .3vw;
			  font-size: 1vw;
			  line-height: 1vw;
			}
		  }
		}

		.watch {
		  a {
			color: #ff6d1d;
			font-size: 1vw;
			height: 1.5vw;
			transition: all .2s ease-in-out;

			i {
			  color: black;
			  margin-left: .5vw;
			}
		  }

		  &:hover a {
			color: #c4c4c4;
			font-size: 1vw;
			height: 1.5vw;

			i {
			  color: #c4c4c4;
			}
		  }
		}
	  }
	}
  }

  .lives .match-body .match-row .match-event img,
  .lives .match-body .match-row .teams img {
	height: 1.3vw;
  }

  .dark {
	.lives {
	  .header {
		background: #1e2123;

		.title {
		  color: #fe5050;
		}
	  }

	  .match-body {
		.match-row {
		  color: white;
		  transition: all .3s ease-in-out;
		  border-top: .2vw solid #1e2123;
		  background: rgb(57, 58, 59);
		  background: rgb(47, 50, 52);
		  background: -moz-linear-gradient(90deg, rgba(47, 50, 52, 1) 24%, rgba(36, 39, 41, 1) 100%);
		  background: -webkit-linear-gradient(90deg, rgba(47, 50, 52, 1) 24%, rgba(36, 39, 41, 1) 100%);
		  background: linear-gradient(90deg, rgba(47, 50, 52, 1) 24%, rgba(36, 39, 41, 1) 100%);
		  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2f3234", endColorstr="#242729", GradientType=1);

		  &:hover {
			margin-left: -1%;
            margin-right: -1%;
		  }

		  .match-event {
			color: #95adc1;

			.teams .score {
			  color: white;
			}

			.teams .team-name {
			  color: white;
			}

			.teams .teamB {
			  padding-left: .6vw;
			}

			.watch a i {
			  color: white;
			}
		  }
		}
	  }
	}
  }
</style>