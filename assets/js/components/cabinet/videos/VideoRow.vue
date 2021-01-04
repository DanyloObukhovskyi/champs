<template>
    <div class="video-row">
        <iframe
                :src="url"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
    </div>
</template>

<script>
    export default {
        name: "VideoRow",
        props: ['video'],
        computed: {
            url() {
                return 'https://www.youtube.com/embed/' + this.video.videoId;
            }
        }
    }
</script>

<style scoped lang="scss">
    .video-row {
        width: 33%;
        height: max-content;
        padding-bottom: .4vw;
        padding-left: .3vw;
        padding-right: .3vw;

        &:nth-child(3n + 3) {
            padding-right: 0;
        }

        &:nth-child(3n - 2) {
            padding-left: 0;
        }

        iframe {
            width: 100%;
            height: 11vw;
        }
    }
</style>