<template>
    <div class="about-page">
        <div class="text-wrapper" v-html="about">
        </div>
        <img src="/images/Champs_Logo_About.png"/>
    </div>
</template>

<script>
export default {
    name: "About",
    props: [
        'about'
    ]
}
</script>

<style scoped lang="scss">
.about-page {
  padding: 0 10vw;
  display: flex;
  align-items: center;
  height: 40vw;

  .text-wrapper {
    margin: 0 5vw;
    color: #a3a5a6;

    p {
      margin-bottom: 2vw;
      font-size: 1.1vw;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  img {
    opacity: .5;
    height: 17vw;
    margin-right: 3vw;
  }
}
</style>