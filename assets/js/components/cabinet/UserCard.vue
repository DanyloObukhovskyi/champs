<template>
    <div class="card-user">
        <div class="user">
            <div class="avatar">
                <div class="gradient">
                    <img :src="'/uploads/avatars/' + user.photo" alt="avatar"
                         @error="$event.target.src = '/images/noLogo.png'">
                </div>
                <div class="lvl">
                    <span>
                        {{user.level}}
                    </span>
                    <img src="/images/cabinet/csLvl.png" alt="lvl">
                </div>
            </div>
            <div class="nickname">
                {{user.nickname}}
            </div>
        </div>
        <div class="invite" data-toggle="modal" data-target="#inviteModal">
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
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "UserCard",
        computed: {
            ...mapGetters([
                'user'
            ]),
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../css/animations.css';

    .card-user {
        -webkit-animation: animation-translate-left 1500ms linear both;
        animation: animation-translate-left 1500ms linear both;
        margin-bottom: 1.8vw;
    }

    .user {
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1.5vw;
        padding-bottom: 1.5vw;
        flex-direction: column;
        border: .1vw solid #f9efea;

        .avatar {
            .gradient {
                width: 5vw;
                height: 5vw;
                border-radius: 50%;
                padding: .1vw;
                background: #ff6f1f;
                background: -moz-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
                background: -webkit-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
                background: linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6f1f", endColorstr="#ffc24f", GradientType=1);

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }

            .lvl {
                display: flex;
                justify-content: center;
                margin-top: -1.1vw;

                span {
                    position: absolute;
                    z-index: 1;
                    color: white;
                    font-size: .8vw;
                    top: .4vw;
                }

                img {
                    width: 2vw;
                    height: 2vw;
                }
            }
        }

        .nickname {
            font-size: 1.2vw;
            font-weight: 600;
        }
    }

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
        .user {
            color: white;
            background-color: #2a2e31;
            border: unset;
        }

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