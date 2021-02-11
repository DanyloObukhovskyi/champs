<template>
    <div class="page-404">
        <h1 class="head-404">
            Страница не найдена
        </h1>
        <div class="body-404">
            <img src="/images/404.png">
        </div>
        <div class="bottom-404">
            <a :href="homeUrl" class="to-home-link">
                Go на главную
            </a>
        </div>
    </div>
</template>

<script>

import Service from "../services/Service";

const service = new Service();

export default {
    name: "Page404",
    computed: {
        homeUrl() {
            return `/${service.lang}/`;
        }
    }
}
</script>

<style scoped lang="scss">
.page-404 {
  margin-top: 11vw;
  margin-bottom: 3vw;
}

.head-404 {
  display: flex;
  justify-content: center;
  font-size: 3.5vw;
  margin-left: 1vw;
  color: #9d9fa0;
  letter-spacing: .3vw;
  font-weight: 200;
  margin-bottom: 2vw;
}

.body-404 {
  display: flex;
  justify-content: center;

  img {
    width: 40vw;
  }
}

.bottom-404 {
  display: flex;
  justify-content: center;
  margin-top: 3vw;

  a {
    background: #ff6d1d;
    color: white;
    padding: .5vw 1.5vw .5vw 1.5vw;
    border-radius: .3vw;
    font-size: 1vw;
    transition: all .2s ease;

    &:hover {
      background: #ff8533;
    }
  }
}

.dark {
  .bottom-404 {
    display: flex;
    justify-content: center;
    margin-top: 3vw;

    a {
      background: #ff6d1d;
      color: white;
      padding: .5vw 1.5vw .5vw 1.5vw;
      border-radius: .3vw;
      font-size: 1vw;
      border: .1vw solid white;
      transition: all .2s ease;

      &:hover {
        background: #ff8533;
      }
    }
  }
}
</style>