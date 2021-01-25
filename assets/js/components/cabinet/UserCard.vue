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

    .dark {
        .user {
            color: white;
            background-color: #2a2e31;
            border: unset;
        }
    }
</style>