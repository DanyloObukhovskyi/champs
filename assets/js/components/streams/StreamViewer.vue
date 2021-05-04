<template>
    <div class="streams-viewer">
        <div class="select-lang">
            <button
                    v-for="stream in streams"
                    @click="selectedStream = stream"
                    :class="{active: selectedStream === stream}"
                    class="stream-lang-btn">
                {{stream.lang}}
            </button>
        </div>
        <div class="stream-block" v-if="selectedStream">
            <iframe :src="selectedStream.url" frameborder="0">
            </iframe>
        </div>
        <div class="close" @click="$emit('hide')">
            <i class="fas fa-times"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StreamViewer",
        props: ['streams'],
        data() {
            return {
                selectedStream: null,
            }
        },

    }
</script>

<style scoped>
    .streams-viewer {
        background-color: white;
        margin-top: .5vw;
        padding: 0 10vw 2vw 10vw;
    }

    .dark .streams-viewer {
        background: #26292c;
    }

    .streams-viewer .select-lang {
        display: flex;
    }

    .streams-viewer .select-lang .stream-lang-btn {
        width: 100%;
        outline: none;
        border: unset;
        cursor: pointer;
        background: #EFF0F0;
        padding: .3vw 1.5vw;
        font-size: 1vw;
        margin: .1vw;
        border-bottom: .2vw solid #EFF0F0;
    }

    .dark .streams-viewer .select-lang .stream-lang-btn {
        color: white;
        background: #292c2f;
        border-bottom: .2vw solid #26292c;
    }

    .streams-viewer .select-lang .stream-lang-btn.active {
        border-bottom: .2vw solid #FF6D1D;
    }

    .stream-block {
        position: relative;
        height: 1080px;
        padding-bottom: 56.25%;
    }

    .stream-block iframe {
        position: relative;
        width: 100%;
        height: 0;
        margin-right: .12vw;
        margin-left: .1vw;
        padding-bottom: 56.25%;
    }

    .streams-viewer .close {
        right: 0;
        position: absolute;
        top: 0;
        background: #EFF0F0;
        padding: .2vw .5vw;
        font-size: 1.5vw;
        margin: .1vw;
    }

    .dark .streams-viewer .close {
        color: white;
        background: #292c2f;
    }
</style>