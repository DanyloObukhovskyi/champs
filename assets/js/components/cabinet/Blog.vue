<template>
    <div>
        <ul class="nav nav-tabs nav-justified" style="border-bottom:none">
            <li class="nav-item">
                <a class="nav-link nav-button" :class="tab == 'comments' ? 'active' : ''" @click="setActive('comments')">Комментарии</a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-button" :class="tab == 'blog' ? 'active' : ''" @click="setActive('blog')">Личный блог</a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-button" :class="tab == 'reward' ? 'active' : ''" @click="setActive('reward')">Заработано</a>
            </li>
        </ul>

        <div class="cabinet-news">
            <div class="news-wrapper" v-if="tab == 'comments'">
                <div class="empty-wrapper" v-if="comments.length === 0">
                    <div class="title" style="font-size: 1.0vw;">
                        Твои комментарии
                    </div>
                    <div class="body">
                        <div>
                            <br>
                        </div>
                        <div style="font-size: 0.7vw;" class="text-center">
                            На данный момент у тебя отсутвуют написанные комментарии, так пора исправить это!<br>
                            Оставь свой комментарий, вливайся в сообщество <span>Champs</span>.
                        </div>
                        <div>

                        </div>
                    </div>
                    <div class="title">
                    </div>
                </div>
                <div v-else>
                    <div class="title" style="font-size: 1.0vw;">
                        Твои комментарии
                    </div>
                    <div v-for="comment in comments">
                        <comment ref="comment" :user="user" :comment="comment"></comment>
                    </div>
                </div>
            </div>
            <div class="news-wrapper" v-if="tab == 'blog'">
                <div class="empty-wrapper" v-if="blogs.length === 0">
                    <div class="title" style="font-size: 1.0vw;">
                        Личный Блог
                    </div>
                    <div class="body">
                        <div>
                            <br>
                        </div>
                        <div style="font-size: 0.7vw;" class="text-center">
                            На данный момент у тебя отсутвуют посты в блоге, так пора исправить это!<br>
                            Оставь свой след в киберспорте, вливайся в сообщество <span>Champs</span>.
                        </div>
                        <div>

                        </div>
                    </div>
                    <div class="title">
                    </div>
                </div>
                <div v-else>
                    <div class="cabinet-news">
                        <div class="title" style="font-size: 1.0vw;">
                            Личный Блог
                        </div>
                        <div class="news-body" v-for="(blogs, i) in blogsSorted">
                            <blogs-row
                                    v-for="(item, y) in blogs"
                                    :key="y"
                                    :blogs="item"
                                    :is-page="false"
                                    @addTag="addTag"
                                    :class-name="getClass(i, y)">
                            </blogs-row>
                        </div>
                    </div>
                </div>
            </div>
            <div class="news-wrapper" v-if="tab == 'reward'">
                <div class="setting-wrapper wallet-blog">
                    <wallet-data style="padding: 1vw;" :load="load"/>
                    <div class="setting">
                        <div class="setting-body" v-if="user !== null">
                            <wallet-container :load="load"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import SmallLoader from "../helpers/SmallLoader";
    import WalletData from "./components/wallet/WalletData";
    import WalletContainer from "./components/wallet/Wallet";
    import {mapGetters} from "vuex";
    import BlogService from "../../services/BlogService";
    import WalletService from "../../services/WalletService";
    import comment from "./components/comment";

    export default {
        name: "Blog",
        components: {
            SmallLoader,
            WalletData,
            WalletContainer,
            comment
        },
        data() {
            return {
                blogs: [],
                tab: 'comments',
                load: false,
                comments: []
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ]),
            blogsSorted() {
                const blogs = [];
                for (let i = 0; i < Math.ceil(this.blogs.length / 3); i++) {
                    blogs[i] = this.blogs.slice((i * 3), (i * 3) + 3);
                }
                return blogs;
            }
        },
        methods: {
            setActive(tab){
                this.tab = tab;
            },
            getUsersBlog() {
                this.load = true;

                BlogService.getUserBlogs()
                    .then(blogs => {
                        this.blogs = blogs;

                        this.load = false;
                    })
            },
            getClass(index, index2) {
                let className = 'w-30';

                index = index + 1;

                if (index % 2 === 0) {
                    if (index2 === 2) {
                        className = 'w-40'
                    }
                } else {
                    if (index2 === 0) {
                        className = 'w-40'
                    }
                }
                return className;
            },
            addTag(tag) {
                window.location = BlogService.blogPage() + `?tag=${encodeURIComponent(tag)}`;
            },
            getComments() {
                this.load = true;
                this.comments = [];

                BlogService
                    .getCommentsByUser()
                    .then(data => {
                        this.load = false;
                        this.$emit('update', data)
                        this.comments = data.comments
                    })
            }
        },
        mounted() {
            WalletService.getWalletDataForBlogs()
                .then(data => {
                    this.$store.dispatch('cabinet/wallet/getWalletData', data);
                    this.load = false;
                })
            this.getUsersBlog();
            this.getComments();
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../css/animations.css';

    .news-wrapper {
        -webkit-animation: animation-translate-right 1500ms linear both;
        animation: animation-translate-right 1500ms linear both;
        background-color: #eff0f0;
        border-radius: .5vw;
        padding: 2vw;
        margin: 1vw;

        .title {
            font-size: 1.5vw;
            line-height: 1.3vw;
            font-weight: 500;
            color: #9d9fa0;
        }

        .news-body {
            display: flex;
            flex-wrap: wrap;
            margin-top: 1.2vw;

            .article:nth-child(3){
                margin-right: 0;
                margin-left: .6vw;
            }
        }

    }
    .w-30 {
        width: 30%;
    }

    .w-40 {
        width: 36%;
    }

    .dark {
        .news-wrapper {
            background: rgb(37,40,42);
            background: -moz-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            background: -webkit-linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            background: linear-gradient(90deg, rgba(37,40,42,1) 0%, rgba(61,65,70,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a",endColorstr="#3d4146",GradientType=1);

            .title {
                color: #fff;
            }
        }
    }

    .tabs-component {
        margin: 4em 0;
    }

    .tabs-component-tabs {
        border: solid 1px #ddd;
        border-radius: 6px;
        margin-bottom: 5px;
    }

    @media (min-width: 700px) {
        .tabs-component-tabs {
            border: 0;
            align-items: stretch;
            display: flex;
            justify-content: flex-start;
            margin-bottom: -1px;
        }
    }

    .tabs-component-tab {
        color: #999;
        font-size: 14px;
        font-weight: 600;
        margin-right: 0;
        list-style: none;
    }

    .tabs-component-tab:not(:last-child) {
        border-bottom: dotted 1px #ddd;
    }

    .tabs-component-tab:hover {
        color: #666;
    }

    .tabs-component-tab.is-active {
        color: #000;
    }

    .tabs-component-tab.is-disabled * {
        color: #cdcdcd;
        cursor: not-allowed !important;
    }

    @media (min-width: 700px) {
        .tabs-component-tab {
            background-color: #fff;
            border: solid 1px #ddd;
            border-radius: 3px 3px 0 0;
            margin-right: .5em;
            transform: translateY(2px);
            transition: transform .3s ease;
        }

        .tabs-component-tab.is-active {
            border-bottom: solid 1px #fff;
            z-index: 2;
            transform: translateY(0);
        }
    }

    .tabs-component-tab-a {
        align-items: center;
        color: inherit;
        display: flex;
        padding: .75em 1em;
        text-decoration: none;
    }

    .tabs-component-panels {
        padding: 4em 0;
    }

    @media (min-width: 700px) {
        .tabs-component-panels {
            border-top-left-radius: 0;
            background-color: #fff;
            border: solid 1px #ddd;
            border-radius: 0 6px 6px 6px;
            box-shadow: 0 0 10px rgba(0, 0, 0, .05);
            padding: 4em 2em;
        }
    }

    .nav-button:hover{
        cursor: pointer;
    }
    .nav-button{
        border-bottom-left-radius: 11px;
        border-bottom-right-radius: 9px;
        padding: 0;
        border-color: transparent !important;
    }

    .empty-wrapper {
        -webkit-animation: animation-translate-right 1500ms linear both;
        animation: animation-translate-right 1500ms linear both;
        background-color: #eff0f0;
        border-radius: .5vw;
        padding: 2vw 3vw;
        display: flex;
        justify-content: space-between;
        height: 18vw;
        margin-right: 2vw;

        .title {
            color: #9d9fa0;
            font-size: 1.5vw;
            font-weight: 600;
            width: 20%;
        }

        .body {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 60%;
            color: #9d9fa0;
            font-size: 1vw;

            span {
                color: #f76a1e;
                font-weight: 600;
                transition: color .2s ease;
            }

            a {
                span:hover {
                    color: #ff8648;
                }
            }
        }
    }

    .dark {
        .empty-wrapper {
            -webkit-animation: animation-translate-right 1500ms linear both;
            animation: animation-translate-right 1500ms linear both;
            background: rgb(37, 40, 42);
            background: -moz-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
            background: -webkit-linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
            background: linear-gradient(90deg, rgba(37, 40, 42, 1) 0%, rgba(61, 65, 70, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25282a", endColorstr="#3d4146", GradientType=1);
            border-radius: .5vw;
            padding: 2vw 3vw;
            display: flex;
            justify-content: space-between;
            height: 18vw;

            .title {
                color: white;
                font-size: 1.5vw;
                font-weight: 600;
                width: 20%;
            }

            .body {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 60%;
                color: #9d9fa0;
                font-size: 1vw;

                span {
                    color: #f76a1e;
                    font-weight: 600;
                }
            }
        }
    }
    .wallet-blog{
        display: flex;
        justify-content: space-between;
    }

</style>