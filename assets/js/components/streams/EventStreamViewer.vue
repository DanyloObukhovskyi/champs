<template>
    <div class="streams-viewer">
        <div class="select-lang">
            <button
                    v-for="stream in streams"
                    @click="selectedStream = stream"
                    :class="{active: selectedStream === stream}"
                    class="stream-lang-btn">
                <img :src="`/uploads/images/${stream.icon}.png`">
                {{ stream.lang }}
            </button>
        </div>
        <div class="stream-block" >
            <iframe
                    src="https://player.twitch.tv/?channel=champspro&parent=test.champs.pro"
                    height="100%"
                    width="100%"
                    frameborder="0"
                    allowfullscreen="true">
            </iframe>
<!--            <iframe :src="selectedStream.stream" frameborder="0">-->
<!--            </iframe>-->
        </div>
        <div class="close" @click="$emit('hide')">
            <i class="fas fa-times"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "EventStreamViewer",
    // props: ['streams'],
    data() {
        return {
            selectedStream: null,
            streams: [
                {
                    lang: 'RU',
                    icon: 'ru'
                },
                {
                    lang: 'UK',
                    icon: 'uk'
                },
                {
                    lang: 'PL',
                    icon: 'pl'
                },
                {
                    lang: 'ES',
                    icon: 'es'
                },
            ]
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
    background-color: #3b3f44;
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
    color: black;
}

.dark .streams-viewer .select-lang .stream-lang-btn {
    color: white;
    background: #26292c;
    border-bottom: .2vw solid #26292c;
}

.streams-viewer .select-lang .stream-lang-btn.active {
    border-bottom: .2vw solid #FF6D1D;
}

.stream-block {
    position: relative;
    height: 560px;
    margin-top: 20px;
}

.stream-block iframe {
    position: relative;
    height: 560px;
    margin-top: 20px;
    margin-right: .12vw;
    margin-left: .1vw;
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
    background: #26292c;
}
</style>