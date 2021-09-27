<template>
    <div>
        <div class="price-row price-button" @click="toggleDescription" :class="{active: active}">
            <div class="background">
                <div class="cost-wrapper">
                    <div class="type">
                        {{ label }}
                    </div>
                    <div class="price">
                    <span>
                        {{ cost }} RUB
                    </span>
                        <span>
                        {{ lessonHoursCount }}
                    </span>
                    </div>
                </div>
                <i class="fas fa-sort-down" :class="{active: active}" v-if="!show"></i>
                <i class="fas fa-sort-up" :class="{active: active}" v-else></i>
            </div>
        </div>
        <div class="description" v-if="show && type !== null" @click="show = false">
            <div class="arrow" :style="descriptionArrowStyle">
            </div>
            <p class="title">
                {{ description[type].title }}
            </p>
            <div class="text" v-html="description[type].text">
            </div>
            <a :href="trainerUrl + `?type=${type}`" class="confirm">Принять</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "TrainerCostButtonMobile",
    props: ['type', 'cost', 'label', 'show', 'active' , 'trainer', 'description', 'descriptionArrowStyle', 'trainerUrl'],
    computed: {
        lessonHoursCount() {
            let str = '';

            if (this.trainer.trainer.isLessonCost) {
                str += ' 1 час';
            } else {
                str += ' 3 часа';
            }
            return str;
        }
    },
    methods: {
        toggleDescription() {
            this.$emit('toggleDescription', {
                show: !this.show,
                type: this.type
            })
        },
    }
}
</script>

<style scoped lang="scss">
.price-row {
    cursor: pointer;
    width: 100%;
    background: url(/images/marketplace/priceBackground.png);
    background-position: center;
    background-size: 100%;
    display: flex;
    transition: all .5s ease-in-out;
    margin-bottom: 3vw;
    height: 20vw;
    background-repeat: no-repeat;

  &.active {
    background: linear-gradient(
                      104deg
              , #ffc344 53%, #f77741 46%);
    clip-path: polygon(5.8% 0, 94.4% 0, 100% 30%, 100% 70%, 94.4% 100%, 5.8% 100%, 0 70%, 0 30%);
    background-position: center;
    background-size: cover;
    color: white;

    .background {
      i {
        color: white;
          font-size: 6vw;
        cursor: pointer;
      }
    }
  }

  &:hover {
    background: linear-gradient(
                      104deg
              , #ffc344 53%, #f77741 46%);
    clip-path: polygon(5.8% 0, 94.4% 0, 100% 30%, 100% 70%, 94.4% 100%, 5.8% 100%, 0 70%, 0 30%);
    transition: all .5s ease-in-out;
    background-position: center;
    background-size: cover;
    color: white;


    .background {
      i {
        color: white;
          font-size: 6vw;
        cursor: pointer;
      }
    }
  }

  .background {
    padding: 0 8vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-position: center;
    width: 100%;

    .type {
      font-size: 4vw;
      font-weight: 600;
    }

    .price {
      font-size: 4.2vw;
      color: #28a745;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
    }

    i {
      color: #ff6d1d;
      font-size: 6vw;
      cursor: pointer;

      &.active {
        color: white;
      }
    }

    .cost-wrapper {
      width: 90%;
    }
  }
}

.description {
    z-index: 1;
    position: initial;
    width: 100%;
    margin-left: -1vw;
    top: 13.5vw;
    background-color: #eff0f0;
    padding: 1vw;
    -webkit-animation: jelly 1000ms linear both;
    animation: jelly 1000ms linear both;

    .title {
        color: #ff6d1d;
        font-size: 5.5vw;
        font-weight: 500;
    }

    .text {
        font-size: 1vw;
        margin-bottom: 0;
    }

    .subtitle {
        line-height: 3vw;
        font-size: 1.1vw;
        font-weight: 500;
        color: #9cb6cb;
    }

    ul {
        margin-left: -1vw;
        margin-bottom: 0;
    }

    a.confirm {
        display: flex;
        justify-content: center;
        margin-top: 1vw;
        outline: unset;
        color: white;
        border: unset;
        font-size: 4vw;
        padding: .4vw 0 .5vw 0;
        cursor: pointer;
        width: 100%;
        background-color: #ff6d1d;
    }

    .arrow {
        position: absolute;
        top: -3.5vw;
        width: 6.5vw;
        height: 3.5vw;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        background-color: #ff6d1d;
    }
}

.dark {
  .price-row {
    background: url(/images/marketplace/darkPriceBackground.png);
    background-position: center;
    background-size: cover;

    &:hover {
      background: linear-gradient(
                        104deg
                , #ffc344 53%, #f77741 46%);
      clip-path: polygon(5.8% 0, 94.4% 0, 100% 30%, 100% 70%, 94.4% 100%, 5.8% 100%, 0 70%, 0 30%);
      transition: all .5s ease-in-out;
      background-position: center;
      background-size: cover;
      color: white;
    }
  }
    .description {
        background-color: #1e2123;
    }
}
</style>