<template>
    <div class="about-page" v-if="!isMobile">
        <div class="text-wrapper">
            <slot name="about"></slot>
        </div>
        <img src="/images/Champs_Logo_About.png"/>
    </div>
    <div class="about-page-mobile" v-else>
        <img src="/images/Champs_Logo_About.png"/>
        <div class="text-wrapper">
            <slot name="about"></slot>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "About",
    computed: {
        ...mapGetters([
            'isMobile',
        ]),
    }
}
</script>

<style lang="scss">
.about-page {
  padding: 0 10vw;
  display: flex;
  align-items: center;
  height: 30vw;

  .text-wrapper {
    margin: 0 5vw;
    color: black;

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

.dark {
  .about-page {
    padding: 0 10vw;
    display: flex;
    align-items: center;
    height: 30vw;

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
}
</style>
<style lang="scss" scoped>
    .about-page-mobile{
        display: block;
        align-items: center;
        height: 100%;
        margin-top: 20%;

        .text-wrapper {
            margin: 0 5vw;
            color: black;

            p {
                margin-bottom: 2vw;
                font-size: 4.1vw;


                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        img {
            opacity: .5;
            height: 35vw;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 3vw;
            margin-top: 3vw;
        }
    }

    .dark {
        .about-page-mobile {
            display: block;
            align-items: center;
            height: 100%;
            margin-top: 20%;

            .text-wrapper {
                margin: 0 5vw;
                color: #a3a5a6;

                p {
                    margin-bottom: 2vw;
                    font-size: 4.1vw;


                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }

            img {
                opacity: .5;
                height: 35vw;
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 3vw;
                margin-top: 3vw;
            }
        }
    }
</style>