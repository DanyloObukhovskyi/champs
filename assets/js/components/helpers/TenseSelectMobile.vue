<template>
  <div class="select">
    <button
        :class="{active: selected === index}"
        @click="$emit('selected', index)"
        v-for="(type, index) in types">
      {{type}} <span>({{counts[index] ? counts[index]: 0}})</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "TenseSelectMobile",
  props: ['types', 'selected', 'counts']
}
</script>

<style scoped>
.select {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 3vw;
  background-color: white;
  padding: .5vw;
}

.dark .select{
  color: white;
  background-color: #1e2123;
}

.select button {
  outline: unset;
  color: black;
  border: unset;
  font-size: 1vw;
  padding: .15vw 1vw .3vw 1vw;
  cursor: pointer;
  background: transparent;
}

.select button span {
  color: #a4a5a6;
}

.dark .select button {
  color: white;
}

.select button.active {
  background-color: #ff6d1d;
  color: white;
  clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
}

.select button.active span{
  color: white;
}
</style>