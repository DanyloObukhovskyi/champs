<template>
    <div class="contact-page">
        <div class="contact-wrapper">
            <div class="contact-header">
                Контакты
            </div>
            <div class="contact-container">
                <div class="address">
                    <slot name="address"></slot>
                    <div class="info-mail">
                        <slot name="info-mail"></slot>
                    </div>
                </div>
                <div class="mail-links">
                    <div>
                        <label>Размещение рекламы:</label>
                        <slot name="advertising-mail"></slot>
                    </div>
                    <div>
                        <label>Если вы хотите работать в Champs:</label>
                        <slot name="job-mail"></slot>
                    </div>
                    <div>
                        <label>Вопросы и предложения по работе сайта:</label>
                        <slot name="support-mail"></slot>
                    </div>
                </div>
            </div>
            <div class="vacancies-header">
                Вакансии:
            </div>
            <div class="vacancies-text">
                <slot name="vacancies"></slot>
            </div>
        </div>
        <img src="/images/Champs_Logo_About.png"/>
    </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style lang="scss">

.contact-page {
  width: 100%;
  display: flex;
  padding: 0 7vw;
  align-items: center;
  margin-bottom: 5vw;

  .contact-wrapper {
    margin-top: 4vw;
    width: 100%;

    .vacancies-header {
      font-size: 1.3vw;
      margin-top: 2vw;
    }

    .vacancies-text {

      p, {
        color: #9d9fa0;
        margin: 0;
        font-size: 1vw;
      }

      a {
        font-size: 1vw;
        margin-top: 1vw;
        color: #ff6d1d !important;
        transition: all .2s ease;

        &:hover {
          color: #f8914a !important;
        }
      }
    }
  }

  img {
    opacity: .5;
    height: 19vw;
  }

  .contact-header {
    font-size: 2vw;
    margin-bottom: 4vw;
  }

  .contact-container {
    display: flex;

    .address {
      width: 50%;

      p, pre {
        margin: 0;
        font-size: 1vw;
        color: #9d9fa0;
        font-family: 'Exo 2', sans-serif;
      }

      .info-mail {

        a {
          font-size: 1vw;
          margin-top: 1vw;
          color: #ff6d1d;
          transition: all .2s ease;
          display: block;

          &:hover {
            color: #f8914a;
          }
        }
      }
    }

    .mail-links {
      div {
        line-height: 1.5vw;

        label {
          font-size: 1vw;
          color: #9d9fa0;
        }

        a {
          font-size: 1vw;
          color: #ff6d1d;
          transition: all .2s ease;
          display: block;

          &:hover {
            color: #f8914a;
          }
        }
      }
    }

    .mail-links {
      width: 50%;
    }
  }
}

</style>