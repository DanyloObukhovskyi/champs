<template>
    <div>
        <div class="comment">
            <div class="user">
                <div class="avatar" style="width: 3%;height: 2vw;">
                    <div class="image-wrapper" :style="imageWrapperImage(comment.user.photo)">
                    </div>
                </div>
                <div class="name">
                    {{getUserName(comment.user)}}
                </div>
                <div class="date">
                    {{comment.createdAt}}
                </div>
            </div>
            <div class="text">
                {{comment.comment}}
            </div>
            <div class="text">
                Опубликован: <a :href="getHref(comment)" style="color: #ff6d1d">"{{ getCommentType(comment) }}"</a>
            </div>
            <div class="d-flex">
                <div>
                    <comment-likes
                            :disable="user === null || comment.user.id === user.id"
                            @setLike="setLike"
                            :user="user"
                            :likes="comment.likesCount"
                            :user-like="comment.userLike">
                    </comment-likes>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CommentLikes from "./CommentLikes";
    import MarketplaceService from "../../../../services/MarketplaceService";

    export default {
        name: "Comment",
        props: [
            'comment',
            'user',
            'active'
        ],
        components: {
            CommentLikes
        },
        inject: [
            'active'
        ],
        computed: {
            hasChildren() {
                return this.comment.hasOwnProperty('children');
            },
            childrenCount() {
                let text;
                if (this.comment.children.length === 1){
                    text = '1 ответ';
                } else if (this.comment.children.length > 1 && this.comment.children.length <= 4){
                    text = `${this.comment.children.length} ответа`;
                } else {
                    text = `${this.comment.children.length} ответов`;
                }
                return text;
            }
        },
        methods: {
            getUserName(user) {
                if (user.name === null || user.surname === null) {
                    return user.nickname;
                } else {
                    return `${user.name} ${user.surname}`;
                }
            },
            setActive(comment) {
                if (this.user !== null){
                    if (this.active === comment) {
                        this.$emit('setActive', null);
                    } else {
                        this.$emit('setActive', comment);
                    }
                }
            },
            sendChildAnswer(data) {
                this.$emit('sendAnswer', data);
            },
            sendAnswer(answer) {
                this.$emit('sendAnswer', {
                    comment: this.comment,
                    answer: answer
                });
            },
            sendChildLike(data) {
                this.$emit('setLike', data);
            },
            setLike(type) {
                this.$emit('setLike', {
                    comment: this.comment,
                    type: type
                });
            },
            imageWrapperImage(photo) {
                const image = new Image();
                image.src = '/uploads/avatars/' + photo;

                let path = "/images/noLogo.png";
                if (image.width !== 0) {
                    path = '/uploads/avatars/' + photo;
                }
                return {
                    'background-image': `url('${path}'), url('/images/noLogoAvatar.png')`
                }
            },
            getHref(comment)
            {
                let href = '';
                if(comment.type === 'blog'){
                    href = this.getSlugForBlogs(comment.blog);
                } else if(comment.type === 'news'){
                    href = this.getSlugForNews(comment.news);
                } else if(comment.type === 'review'){
                    href = this.trainerUrl(comment.trainer);
                }
                return href;
            },
            getCommentType(comment)
            {
                let title = '';
                if(comment.type === 'blog'){
                    title = comment.blog.title;
                } else if(comment.type === 'news'){
                    title = comment.news.title;
                } else if(comment.type === 'review'){
                    title = comment.trainer.nickname;
                }
                return title;
            },
            getSlugForBlogs(blog) {
                try{
                    let title =  this.getTitleUrl(blog.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    return '/ru/blog/'+ blog.id +'/' + title;
                } catch (e) {
                    let title =  this.getTitleUrl(blog.title)
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')
                    ;
                    return title;
                }
            },
            getSlugForNews(news) {
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

                    return '/ru/novosti/'+ news.id +'/'+ type+'/'+game+'/'+title+'-'+date;
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
            },
            trainerUrl(trainer) {
                let slug =  this.getTitleUrl(trainer.nickname)
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                ;
                return MarketplaceService.getTrainerUrl(trainer.id, trainer.gameCode , slug)
            },
        }
    }
</script>

<style scoped>
    .comment {
        width: 100%;
        display: flex;
        padding: 1vw 0;
        flex-direction: column;
        padding: .8vw;
    }

    .children {
        display: flex;
        padding-left: .8vw;
    }

    .children .comments {
        width: 100%;
    }

    .children > img {
        height: 100%;
        width: 1vw;
    }

    .children .comments .comments-count{
        font-size: 1vw;
        margin-left: .7vw;
        margin-top: -.2vw;
        color: #5c6b79;
    }

    .comment img {
        height: 3vw;
        border-radius: 50%;
        background-color: #AAA;
        flex-shrink: 0;
        overflow: hidden;
    }

    .comment .avatar .image-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-image: url("/images/noLogo.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .comment .user {
        display: flex;
        align-items: center;
    }

    .comment .user .name {
        font-size: 1vw;
        color: #5c6b79;
        padding: 0 .6vw;
    }

    .comment .user .date {
        font-size: 1vw;
        color: #919191;
    }

    .comment .text {
        font-size: 1vw;
        margin-top: .5vw;
    }

    .dark .comment .text {
        color: white;
    }

    .comment button.answer {
        outline: unset;
        border: unset;
        background: transparent;
        padding: 0;
        cursor: pointer;
        color: #898989;
        font-size: 1vw;
        margin-right: 1vw;
    }
</style>