<template>
    <div class="hot-news-wrapper">
        <a :href="`/ru/novosti/${news.id}/` + getSlug(news)" class="hot-news d-block" v-for="news in news">
            <div class="d-flex hot-news-title">
                <div class="game-logo" v-if="news.game !== null && news.game.newsIcon !== null">
                    <img :src="'/uploads/games/' + news.game.newsIcon">
                </div>
                <div class="title">
                    {{news.title}}
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="date">
                    {{news.date_ru_msk}}
                </div>
                <div class="activity">
                    <i class="fas fa-eye"></i>
                    {{news.views}}
                    <i class="fas fa-comment-dots"></i>
                    {{news.commentsCount}}
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    const GAMES = {
        dota: 'dota.png',
        cs: 'cs.png',
        lol: 'lol.png',
        valorant: 'valorant.png'
    };

    export default {
        name: "HotNews",
        props: [
            'news'
        ],
        data() {
            return {
                gamesIcons: GAMES,
            }
        },
        methods:{
            getSlug(news) {
                try{
                    let type = this.getTitleUrl(news.type.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let game = this.getTitleUrl(news.game.name)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let title =  this.getTitleUrl(news.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    let date = this.getTitleUrl(news.date_ru_with_year_for_url)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    return type+'/'+game+'/'+title+'-'+date;
                } catch (e) {
                    let title =  this.getTitleUrl(news.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    return title;
                }
            },
            getTitleUrl(title){
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
        }
    }
</script>

<style scoped>
    .news .hot-news {
        margin-top: .5vw;
        padding: .3vw .7vw;
        background: rgb(206, 207, 209);
        background: -moz-linear-gradient(90deg, rgba(206, 207, 209, 1) 0%, rgba(255, 255, 255, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(206, 207, 209, 1) 0%, rgba(255, 255, 255, 1) 100%);
        background: linear-gradient(90deg, rgba(206, 207, 209, 1) 0%, rgba(255, 255, 255, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#cecfd1", endColorstr="#ffffff", GradientType=1);
    }

    .dark .hot-news {
        background: rgb(61, 65, 70);
        background: -moz-linear-gradient(90deg, rgba(61, 65, 70, 1) 24%, rgba(37, 40, 42, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(61, 65, 70, 1) 24%, rgba(37, 40, 42, 1) 100%);
        background: linear-gradient(90deg, rgba(61, 65, 70, 1) 24%, rgba(37, 40, 42, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d4146", endColorstr="#25282a", GradientType=1);
    }

    .hot-news .hot-news-title {
        margin-bottom: .5vw;
    }

    .hot-news .game-logo img {
        width: 1.5vw;
        margin-right: .7vw;
        margin-top: 0.35vw;
    }

    .hot-news .title {
        color: #1e2123;
        font-size: 1vw;
    }

    .dark .hot-news .title, .dark .hot-news .activity {
        color: white;
    }

    .hot-news .date {
        color: #898989;
        font-size: .9vw;
    }

    .hot-news i {
        color: #8298ac;
    }

    .hot-news .activity {
        color: #1e2123;
        font-size: .9vw;
    }

    .hot-news .activity i:nth-child(2) {
        margin-left: .4vw;
    }
</style>