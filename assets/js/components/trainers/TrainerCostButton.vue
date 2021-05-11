<template>
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
</template>

<script>
export default {
    name: "TrainerCostButton",
    props: ['type', 'cost', 'label', 'show', 'active' , 'trainer'],
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
  width: 30%;
  background: url(/images/marketplace/priceBackground.png);
  background-position: center;
  background-size: cover;
  height: 4.1vw;
  display: flex;
  transition: all .5s ease-in-out;

  &.active {
    background-position: center;
    background-size: cover;
    color: white;

    .background {
      i {
        color: white;
        font-size: 1vw;
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
        font-size: 1vw;
        cursor: pointer;
      }
    }
  }

  .background {
    padding: 0 2vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-position: center;
    width: 100%;

    .type {
      font-size: 1vw;
      font-weight: 600;
    }

    .price {
      font-size: 1.2vw;
      color: #28a745;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
    }

    i {
      color: #ff6d1d;
      font-size: 1vw;
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

.dark {
  .price-row {
    width: 30%;
    padding: .1vw .11vw;
    background: url(/images/marketplace/darkPriceBackground.png);
    background-position: center;
    background-size: cover;
    height: 4.1vw;

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
}
</style>