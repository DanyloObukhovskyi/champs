<template>
    <div class="d-block">
        <div class="filters">
            <div class="select">
                <button
                        :class="{active: workout === index}"
                        @click="setFilter('workout', index)"
                        v-for="(type, index) in workoutTypes">
                    {{ type }}
                </button>
            </div>
        </div>
        <div class="search mr-2 ml-2">
            <div class="search-button" @click="search = ''">
                <i class="fas fa-search"></i>
            </div>
            <div class="input">
                <input type="text" v-model="search" placeholder="Поиск">
            </div>
        </div>
        <div class="price-type row justify-content-end mr-2" @click="setFilter('isExpensive', !isExpensive)">
            {{ priceType.title }}
            <i class="fas" :class="priceType.icon"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MarketplaceFiltersMobile",
        props: [
            'workout',
            'isExpensive'
        ],
        computed: {
            priceType() {
                return !this.isExpensive ? this.priceTypes.expensive : this.priceTypes.cheaper;
            }
        },
        data() {
            return {
                workoutTypes: {
                    all: 'Все',
                    individual: 'Индивидуальная',
                    group: 'Групповая',
                    analytic: 'Анализ реплея',
                },
                priceTypes: {
                    expensive: {
                        title: 'Сначала подороже',
                        icon: 'fa-chevron-up',
                    },
                    cheaper: {
                        title: 'Сначала подешевле',
                        icon: 'fa-chevron-down',
                    }
                },
                search: null,
            }
        },
        watch: {
            search() {
                this.setFilter('search', this.search)
            }
        },
        methods: {
            setFilter(name, value) {
                this.$emit('setFilter', {
                    name,
                    value
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  .filters {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: white;

	.select {
        display: flex;
        justify-content: center;
        height: 9vw;
        padding: .5vw;

	  button {
        outline: unset;
        border: unset;
        font-size: 3.7vw;
        padding: 0.15vw 1vw 0.3vw 3vw;
        cursor: pointer;
        background: transparent;
        color: #0a0a0a;
	  }

	  button.active {
		background-color: #ff6d1d;
		color: white;
		clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
	  }
	}
  }

  .search {
      display: flex;
      margin: 0.25vw 0.25vw;
      margin-top: 2vw;
      margin-bottom: 2vw;

      .search-button {
          width: 8vw;
          height: 6vw;
          background: rgb(255, 183, 73);
          background: linear-gradient(90deg, rgba(255, 183, 73, 1) 0%, rgba(254, 121, 36, 1) 100%);
          color: white;
          font-size: 3vw;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
      }

      .input {
          width: 100%;
          display: flex;
          flex-direction: row;
          border: 0.02vw solid #CFDCF3;
          background-color: white;
          flex-wrap: wrap;
          font-size: 3vw;

          input {
              outline: unset;
              border: none;
              text-indent: .5vw;
              background-color: transparent;
              color: black;

              &::placeholder {
                  color: black;
                  font-weight: 300;
              }
          }
      }
  }

  .price-type {
      padding: .15vw 0vw .3vw 0vw;
      font-size: 3vw;
      cursor: pointer;

      i {
          margin-left: .5vw;
      }
  }

  .dark {
	.filters {
	  background-color: #1e2123;
	  color: white;

	  .select {
		button {
		  color: white;
		}
	  }
	}

  }
</style>