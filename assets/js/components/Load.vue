<template>
    <div class="loadingio-spinner-gear-mtphwgoy79e">
        <div class="ldio-rwuvarvnp1s">
            <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Load"
    }
</script>

<style scoped>
    @keyframes ldio-rwuvarvnp1s {
        0% { transform: rotate(0deg) }
        50% { transform: rotate(22.5deg) }
        100% { transform: rotate(45deg) }
    }
    .ldio-rwuvarvnp1s > div {
        transform-origin: 100px 100px;
        animation: ldio-rwuvarvnp1s 0.2s infinite linear;
    }
    .ldio-rwuvarvnp1s > div div {
        position: absolute;
        width: 22px;
        height: 152px;
        background: #ff8500;
        left: 100px;
        top: 100px;
        transform: translate(-50%,-50%);
    }
    .ldio-rwuvarvnp1s > div div:nth-child(1) {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    .ldio-rwuvarvnp1s > div div:nth-child(6) {
        width: 80px;
        height: 80px;
        background: #ffffff;
        border-radius: 50%;
    }.ldio-rwuvarvnp1s > div div:nth-child(3) {
         transform: translate(-50%,-50%) rotate(45deg)
     }.ldio-rwuvarvnp1s > div div:nth-child(4) {
          transform: translate(-50%,-50%) rotate(90deg)
      }.ldio-rwuvarvnp1s > div div:nth-child(5) {
           transform: translate(-50%,-50%) rotate(135deg)
       }
    .loadingio-spinner-gear-mtphwgoy79e {
        width: 200px;
        height: 200px;
        display: inline-block;
        overflow: hidden;
        background: none;
    }
    .ldio-rwuvarvnp1s {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
    }
    .ldio-rwuvarvnp1s div { box-sizing: content-box; }
</style>