<template>
    <div class="ml-8 mr-8 p-0" v-if="!isMobile">
        <div class="cabinet">
            <div class="cabinet-body">
                <div class="left">
                    <vue-sticky-sidebar :resize-sensor="true" :bottom-spacing="100" class="sidebar" containerSelector=".container" innerWrapperSelector='.sidebar__inner'>
                    <user-card v-if="!loadUser && user !== null"/>
                    <div class="d-flex justify-content-center mt-3 mb-3" v-else>
                        <small-loader/>
                    </div>
                    <div class="invite" data-toggle="modal" data-target="#inviteModal" v-if="!loadUser && user !== null">
                        <div class="invite-button">
                            <div class="icon-wrapper">
                                <div class="background">
                                    <div class="invite-border">
                                        <div class="border-two">
                                            <div>
                                                <img src="/images/cabinet/inviteIcon.png">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text">
                                <div>
                                    Пригласи друга
                                </div>
                                <div>
                                    Получи 200
                                    <img src="/images/cabinet/coinSilver.png">
                                </div>
                            </div>
                        </div>
                        <div class="more-detail">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                        <cabinet-sidebar></cabinet-sidebar>
                    </vue-sticky-sidebar>
                </div>
                <div class="right" id="content">
                    <user-card v-if="!loadUser && user !== null"/>
                    <cabinet-header v-if="user !== null && !user.isTrainer"></cabinet-header>
                    <router-view></router-view>
                </div>
            </div>
            <invite-modal/>
        </div>
    </div>
    <div class="cabinet-mobile" v-else>
        <div class="cabinet-body">
            <div class="col-12">
                <cabinet-header v-if="user !== null && !user.isTrainer"></cabinet-header>
                <router-view></router-view>
            </div>
        </div>
        <invite-modal/>
    </div>
</template>

<script>
    import '../../css/setting.css';

    import VueRouter from 'vue-router'

    import CabinetSidebar from "../components/cabinet/CabinetSidebar";
    import UserCard from "../components/cabinet/UserCard";
    import CabinetService from "../services/CabinetService";
    import SmallLoader from "../components/helpers/SmallLoader";
    import CabinetHeader from "../components/cabinet/CabinetHeader";

    import UserCabinet from "../components/cabinet/user/pages/UserCabinet";
    import Training from "../components/cabinet/user/pages/Training";
    import News from "../components/cabinet/user/pages/News";
    import Blog from "../components/cabinet/Blog";
    import Video from "../components/cabinet/user/pages/Video";
    import UserSetting from "../components/cabinet/user/pages/Setting";
    import {mapActions, mapGetters} from "vuex";
    import InviteModal from "../components/cabinet/InviteModal";
    import TrainerCabinet from "../components/cabinet/trainer/pages/TrainerCabinet";
    import Calendar from "../components/cabinet/trainer/pages/Calendar";
    import TrainerSetting from "../components/cabinet/trainer/pages/Setting";
    import Wallet from "../components/cabinet/trainer/pages/Wallet";
    import RankingService from "../services/RankingService";
    import vueStickySidebar from "vue-sticky-sidebar";

    const routes = [
        {path: `/${CabinetService.lang}/user/cabinet/`, component: UserCabinet},
        {path: `/${CabinetService.lang}/user/cabinet/training`, component: Training},
        {path: `/${CabinetService.lang}/user/cabinet/news`, component: News},
        {path: `/${CabinetService.lang}/user/cabinet/videos`, component: Video},
        {path: `/${CabinetService.lang}/user/cabinet/settings`, component: UserSetting},
        {path: `/${CabinetService.lang}/user/cabinet/blog`, component: Blog},

        {path: `/${CabinetService.lang}/trainer/cabinet/`, component: TrainerCabinet},
        {path: `/${CabinetService.lang}/trainer/cabinet/timetable`, component: Training},
        {path: `/${CabinetService.lang}/trainer/cabinet/calendar`, component: Calendar},
        {path: `/${CabinetService.lang}/trainer/cabinet/videos`, component: Video},
        {path: `/${CabinetService.lang}/trainer/cabinet/settings`, component: TrainerSetting},
        {path: `/${CabinetService.lang}/trainer/cabinet/wallet`, component: Wallet},
        {path: `/${CabinetService.lang}/trainer/cabinet/blog`, component: Blog},
    ];

    export default {
        name: "CabinetPage",
        router: new VueRouter({
            routes,
            mode: 'history'
        }),
        components: {
            InviteModal,
            CabinetHeader,
            SmallLoader,
            UserCard,
            CabinetSidebar,
            vueStickySidebar
        },
        props: ['isTrainer'],
        data() {
            return {
                current: '',
            }
        },
        computed: {
            ...mapGetters([
                'user',
                'loadUser',
                'isMobile'
            ]),
        },
        methods: {
            ...mapActions('cabinet/setting', [
                'getRanks',
                'getTimezones'
            ]),
            initScroll() {
                const isTrainer = this.user !== null && this.user.isTrainer;

                document.addEventListener("DOMContentLoaded", function () {
                    window.onscroll = () => {
                        const sidebar = document.querySelector('.cabinet-sidebar');

                        const content = document.querySelector('#content');

                        const userCardPosition = document
                            .querySelector('.card-user')
                            .getBoundingClientRect();

                        const invite = document.querySelector('.invite');
                        const invitePosition = invite.getBoundingClientRect();

                        const header = document
                            .querySelector('#header')
                            .getBoundingClientRect();

                        const contentWindowOffset = content.getBoundingClientRect().height + content.getBoundingClientRect().y;
                        const sidebarWindowOffset = sidebar.getBoundingClientRect().height + sidebar.getBoundingClientRect().y;

                        if (Math.round(contentWindowOffset) <= Math.round(sidebarWindowOffset)) {
                           // sidebar.style.position = 'unset';
                        } else {
                            const subNav = document
                                .querySelector('.sub-nav')
                                .getBoundingClientRect();

                            if (subNav.height + header.height - userCardPosition.height - userCardPosition.top >= 0) {
                                sidebar.style.position = 'fixed';
                                sidebar.style.top = `calc(${header.height + subNav.height + invitePosition.height}px + .5vw)`;

                                invite.style.position = 'fixed';
                                invite.style.top = `calc(${header.height + subNav.height + 'px'} - 1vw)`;
                            } else {
                                sidebar.style.position = 'unset';
                                sidebar.style.top = 0;

                                invite.style.position = 'unset';
                                invite.style.top = 0;
                            }
                        }
                    }
                });
            },
        },
        mounted() {
            //this.initScroll()

            this.getRanks();
            this.getTimezones();
        }
    }
</script>

<style scoped lang="scss">
  @import '../../css/animations.css';

  .cabinet {
	margin-top: .5vw;
	margin-bottom: 3vw;
    width: 100%;
  }

  .cabinet-body {
	display: flex;
	overflow: hidden;
	min-height: auto;

	.left {
	  width: 14%;
	  margin-right: 3vw;
      min-width: 11.5vw;
	}

	.right {
	  width: 85%;

        margin-bottom: 0vw;
	}
  }

  .invite {
	-webkit-animation: animation-translate-left 1500ms linear both;
	animation: animation-translate-left 1500ms linear both;
	width: 11.5vw;
	display: flex;
	height: 2.5vw;
	border-radius: .7vw;
	overflow: hidden;
	margin-top: 1.5vw;
	cursor: pointer;

	.invite-button {
	  display: flex;
	  align-items: center;
	  width: 84%;
	  background-image: url(/images/events/tournamentSelect.png);
	  background-position: center;
	  background-size: 110%;

	  .icon-wrapper {
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
		background-color: #e9eaea;
		padding: .2vw .25vw;
		margin-left: .5vw;

		.background {
		  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
		  background-color: #dcdede;
		  padding: .2vw .25vw;

		  .invite-border {
			clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

			.border-two {
			  padding: .1vw;
			  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
			  background-color: #717679;

			  div {
				clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
				background-color: white;
				overflow: hidden;
				width: 1.2vw;
				height: 1vw;
				display: flex;
				justify-content: center;
				align-items: center;

				img {
				  width: .9vw;
				  height: .9vw;
				}
			  }
			}
		  }
		}
	  }

	  .text {
		font-size: .6vw;
		font-weight: 600;
		margin-left: .5vw;

		div:nth-child(2) {
		  font-size: .8vw;
		  color: #28a745;
		}

		img {
		  width: 1vw;
		}
	  }
	}

	.more-detail {
	  transition: all .5s ease-in-out;
	  background-color: #aeaeae;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  width: 16%;

	  i {
		color: white;
		font-size: .7vw;
	  }
	}

	&:hover {
	  .more-detail {
		background-color: #ff6d1d;

		i {
		  color: white;
		  font-size: .7vw;
		}
	  }
	}
  }

  .dark {
	.invite {
	  display: flex;
	  height: 2.5vw;
	  border-radius: .7vw;
	  overflow: hidden;
	  margin-top: 1.5vw;
	  cursor: pointer;

	  .invite-button {
		display: flex;
		align-items: center;
		width: 84%;
		color: white;
		background-image: url(/images/cabinet/inviteBackgroundDark.png);
		background-position: center;
		background-size: 110%;

		.icon-wrapper {
		  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
		  background-color: #26292b;
		  padding: .2vw .25vw;
		  margin-left: .5vw;

		  .background {
			clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
			background-color: #2e3133;
			padding: .2vw .25vw;

			.invite-border {
			  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

			  .border-two {
				padding: .1vw;
				clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
				background-color: #717679;

				div {
				  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
				  background-color: #222527;
				  overflow: hidden;
				  width: 1.2vw;
				  height: 1vw;
				  display: flex;
				  justify-content: center;
				  align-items: center;

				  img {
					width: .9vw;
					height: .9vw;
				  }
				}
			  }
			}
		  }
		}

		.text {
		  font-size: .6vw;
		  font-weight: 600;
		  margin-left: .5vw;

		  div:nth-child(2) {
			font-size: .8vw;
			color: #28a745;
		  }

		  img {
			width: 1vw;
		  }
		}
	  }

	  .more-detail {
		transition: all .5s ease-in-out;
		background-color: #171a1b;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 16%;

		i {
		  color: #555a5c;
		  font-size: .7vw;
		}
	  }

	  &:hover {
		.more-detail {
		  background-color: #ff6d1d;

		  i {
			color: white;
			font-size: .7vw;
		  }
		}
	  }
	}
  }
</style>

<style scoped lang="scss">
    .cabinet-mobile {
        margin-top: 20%;
        margin-bottom: 3vw;
        width: 100%;
    }

    .cabinet-body {
        display: flex;
        overflow: hidden;
        min-height: auto;

        .left {
            width: 14%;
            margin-right: 3vw;
            min-width: 11.5vw;
        }

        .right {
            width: 85%;

            margin-bottom: 0vw;
        }
    }

    .invite {
        -webkit-animation: animation-translate-left 1500ms linear both;
        animation: animation-translate-left 1500ms linear both;
        width: 11.5vw;
        display: flex;
        height: 2.5vw;
        border-radius: .7vw;
        overflow: hidden;
        margin-top: 1.5vw;
        cursor: pointer;

        .invite-button {
            display: flex;
            align-items: center;
            width: 84%;
            background-image: url(/images/events/tournamentSelect.png);
            background-position: center;
            background-size: 110%;

            .icon-wrapper {
                clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                background-color: #e9eaea;
                padding: .2vw .25vw;
                margin-left: .5vw;

                .background {
                    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                    background-color: #dcdede;
                    padding: .2vw .25vw;

                    .invite-border {
                        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

                        .border-two {
                            padding: .1vw;
                            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                            background-color: #717679;

                            div {
                                clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                                background-color: white;
                                overflow: hidden;
                                width: 1.2vw;
                                height: 1vw;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                img {
                                    width: .9vw;
                                    height: .9vw;
                                }
                            }
                        }
                    }
                }
            }

            .text {
                font-size: .6vw;
                font-weight: 600;
                margin-left: .5vw;

                div:nth-child(2) {
                    font-size: .8vw;
                    color: #28a745;
                }

                img {
                    width: 1vw;
                }
            }
        }

        .more-detail {
            transition: all .5s ease-in-out;
            background-color: #aeaeae;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 16%;

            i {
                color: white;
                font-size: .7vw;
            }
        }

        &:hover {
            .more-detail {
                background-color: #ff6d1d;

                i {
                    color: white;
                    font-size: .7vw;
                }
            }
        }
    }

    .dark {
        .invite {
            display: flex;
            height: 2.5vw;
            border-radius: .7vw;
            overflow: hidden;
            margin-top: 1.5vw;
            cursor: pointer;

            .invite-button {
                display: flex;
                align-items: center;
                width: 84%;
                color: white;
                background-image: url(/images/cabinet/inviteBackgroundDark.png);
                background-position: center;
                background-size: 110%;

                .icon-wrapper {
                    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                    background-color: #26292b;
                    padding: .2vw .25vw;
                    margin-left: .5vw;

                    .background {
                        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                        background-color: #2e3133;
                        padding: .2vw .25vw;

                        .invite-border {
                            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

                            .border-two {
                                padding: .1vw;
                                clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                                background-color: #717679;

                                div {
                                    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                                    background-color: #222527;
                                    overflow: hidden;
                                    width: 1.2vw;
                                    height: 1vw;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    img {
                                        width: .9vw;
                                        height: .9vw;
                                    }
                                }
                            }
                        }
                    }
                }

                .text {
                    font-size: .6vw;
                    font-weight: 600;
                    margin-left: .5vw;

                    div:nth-child(2) {
                        font-size: .8vw;
                        color: #28a745;
                    }

                    img {
                        width: 1vw;
                    }
                }
            }

            .more-detail {
                transition: all .5s ease-in-out;
                background-color: #171a1b;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 16%;

                i {
                    color: #555a5c;
                    font-size: .7vw;
                }
            }

            &:hover {
                .more-detail {
                    background-color: #ff6d1d;

                    i {
                        color: white;
                        font-size: .7vw;
                    }
                }
            }
        }
    }
</style>