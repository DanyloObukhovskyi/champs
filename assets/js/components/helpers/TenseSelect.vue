<template>
    <div class="select">
        <button
                :class="{active: selected === index}"
                @click="$emit('selected', index)"
                v-for="(type, index) in types">
            {{type}} ({{counts[index] ? counts[index]: 0}})
        </button>
    </div>
</template>

<script>
    export default {
        name: "TenseSelect",
        props: ['types', 'selected', 'counts']
    }
</script>

<style scoped>
    .select {
        display: flex;
        justify-content: center;
    }

    .select button {
        outline: unset;
        color: black;
        border: .1vw solid #ff6d1d;
        font-size: 1vw;
        padding: 0 1.5vw;
        cursor: pointer;
        background: transparent;
    }

    .dark .select button {
        color: white;
    }

    .select button.active {
        background-color: #ff6d1d;
        color: white;
    }

    .select button:first-child {
        border-radius: .3vw 0 0 .3vw;
    }

    .select button:last-child {
        border-radius: 0 .3vw .3vw 0;
    }

</style>