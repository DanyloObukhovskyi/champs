<template>
    <div class="trainer-banner">
        <div class="left">
            <div id="banner-description">
                <div class="title">
                    {{ banner.title }}
                </div>
                <div class="text" v-html="banner.text">
                </div>
            </div>
            <div class="trainer-social">
                <a :href="banner.links.vk ? banner.links.vk : null">
                    <div class="icon">
                        <img src="/images/marketplace/vk.svg">
                    </div>
                    <div class="social-title">
                        {{ banner.chanelNames.vk ? banner.chanelNames.vk : 'CHAMPS_PRO' }}
                    </div>
                </a>
                <a :href="banner.links.youtube ? banner.links.youtube : null">
                    <div class="icon">
                        <img src="/images/marketplace/youtube.svg">
                    </div>
                    <div class="social-title">
                        {{ banner.chanelNames.youtube ? banner.chanelNames.youtube : 'CHAMPS_PRO' }}
                    </div>
                </a>
                <a :href="banner.links.telegram ? banner.links.telegram : null">
                    <div class="icon">
                        <img src="/images/marketplace/tiktok.png">
                    </div>
                    <div class="social-title">
                        {{ banner.chanelNames.telegram ? banner.chanelNames.telegram : 'CHAMPS_PRO' }}
                    </div>
                </a>
                <a :href="banner.links.twitch ? banner.links.twitch : null">
                    <div class="icon">
                        <img src="/images/marketplace/twitch.svg">
                    </div>
                    <div class="social-title">
                        {{ banner.chanelNames.twitch ? banner.chanelNames.twitch : 'CHAMPS_PRO' }}
                    </div>
                </a>
            </div>
        </div>
        <div class="right" :style="background">

        </div>
    </div>
</template>

<script>
export default {
    name: "MarketplaceTrainerBannerMobile",
    props: ['banner'],
    computed: {
        background() {
            const style = {
                'background-image': 'url("/images/marketplace/trainerBanner.png")'
            }
            if (this.banner !== null) {
                style['background-image'] = `url("/uploads/marketplace/${this.banner.img}")`;
            }
            return style;
        }
    },
    mounted() {
        console.log(this.banner);
    }
}
</script>

<style scoped lang="scss">
@import '../../../css/animations.css';

.trainer-banner {
  display: block;

  .left {
    padding: 1vw 2vw;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-animation: animation-translate-left 1500ms linear both;
    animation: animation-translate-left 1500ms linear both;
    width: 100%;

    .title {
      color: #ff6d1d;
      font-size: 5vw;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 1vw;
    }

    .text {
      width: 100%;
      color: #1e2123;
      font-size: 4vw;
    }

    .trainer-social {
      display: flex;
      justify-content: space-between;

      a {
        display: flex;
        align-items: center;
        background-color: #e4e4e4;
        color: black;

        .icon {
            display: flex;
            justify-content: center;
            background-color: #222527;
            width: 7.5vw;
            padding: .8vw 0 .8vw 0;
            clip-path: polygon(0 0, 100% 0, 77% 100%, 0% 100%);
            margin-left: -.1vw;

          img {
            height: 2vw;
            margin-right: .5vw;
          }
        }

        .social-title {
          font-size: 2vw;
          margin-right: 1vw;
        }

        &:hover {
          opacity: .6;
        }
      }
    }
  }

  .right {
    width: 40vw;
    background-image: url("/images/marketplace/trainerBanner.png");
    background-position: center;
    background-size: cover;
    -webkit-animation: animation-translate-right 1500ms linear both;
    animation: animation-translate-right 1500ms linear both;
  }
}

.dark {
  .trainer-banner {
    .left {
      background-color: #1e2123;
      -webkit-animation: animation-translate-left 1500ms linear both;
      animation: animation-translate-left 1500ms linear both;

      .text {
        color: white;
      }

      .trainer-social {
        a {
          background-color: #2d3135;
          color: white;
        }
      }
    }
  }
}
</style>
<style>
.dark .trainer-banner .text span {
    color: white !important;
    background-color: transparent !important;
}
</style>