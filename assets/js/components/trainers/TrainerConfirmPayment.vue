<template>
    <div class="modal fade" id="confirmPaymentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-head">
                        <div>
                            <div class="title">
                                Просим вас проверить данные!
                            </div>
                            <div class="trainer-name">
                                Запись на тренировку к
                                <span>
                                    {{ trainer.nickname }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center" v-if="load">
                        <small-loader/>
                    </div>
                    <div class="trainer-type-wrapper">
                        <div class="trainer-type">
                            <div>
                                <div class="type">
                                    {{ getType }}
                                </div>
                                <div class="price">
                                    {{ getPrice }} RUB
                                </div>
                            </div>
                        </div>
                        <button class="confirm-btn" @click="setPay" v-if="isAllChecked">
                            Оплатить
                        </button>
                        <button class="confirm-btn disable" v-else>
                            Оплатить
                        </button>
                    </div>
                    <div class="time">
                        <div>
                            {{ selectedTime }}
                        </div>
                    </div>
                    <div class="time">
                        <div>
                            Итого к оплате {{ selectedLength * getPrice }} RUB
                        </div>
                    </div>
                    <div class="description">
                        <i class="far fa-clock" aria-hidden="true"></i>
                        Время указано в соответствии с вашим часовым поясом
                        <span class="timezone" v-if="user !== null">
                            {{ user.timezone }} {{ user.gmt }}
                        </span>
                        <span class="timezone" v-else>
                            Europe/Moscow GMT +3:00
                        </span>
                    </div>
                    <div class="description offer">
                        <div>
                            <input type="checkbox" :value="true" v-model="checkOffer">
                            <a :href="whatTheOfferLink" target="_blank">Оферта на оказание услуг «Champs.Маркет</a>
                        </div>
                        <div>
                            <input type="checkbox" :value="true" v-model="checkService">
                            <a :href="termsLink" target="_blank">Условия оформления заказа тренировок на сервисе
                                Champs.Маркет</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MarketplaceService from "../../services/MarketplaceService";
import Swal from 'sweetalert2'
import SmallLoader from "../helpers/SmallLoader";
import Service from "../../services/Service";
import {mapGetters} from "vuex";

const TRAINING_TYPES = {
    individual: 'Индивидуальная тренировка',
    group: 'Групповая тренировка',
    analytic: 'Анализ видео'
};

export default {
    name: "TrainerConfirmPayment",
    components: {SmallLoader},
    props: [
        'selectedTime',
        'date',
        'lessons',
        'trainer',
        'trainingType',
        'selectedLength',
        'paymentType'
    ],
    data() {
        return {
            load: false,
            checkOffer: false,
            checkService: false,
        }
    },
    computed: {
        ...mapGetters([
            'user'
        ]),
        whatTheOfferLink() {
            const service = new Service();

            return `/${service.lang}/oferta_na_okazanie_uslug`
        },
        termsLink() {
            const service = new Service();

            return `/${service.lang}/pravila_ispolzovaniya`
        },
        isAllChecked() {
            return this.checkOffer && this.checkService;
        },
        getType() {
            return TRAINING_TYPES[this.trainingType];
        },
        selectedLessons() {
            return this.lessons.filter(t => t.status === 2 || t.status === 3)
        },
        getPrice() {
            let price = 0;

            for (let cost of this.trainer.trainer.costs) {
                if (this.trainingType === cost.lessonType) {
                    price = cost.price;
                }
            }
            return price;
        }
    },
    methods: {
        setPay() {
            this.load = true;

            if (this.trainingType) {
                const lessons = this.selectedLessons.map(lesson => {
                    return {
                        date: this.date,
                        time: lesson.from,
                    }
                });

                MarketplaceService.setLessonPay(lessons, this.trainingType, this.trainer.id)
                    .then((data) => {
                        this.load = false;
                        if (data.ids) {
                            if (this.paymentType === 'yandex') {
                                window.location.assign(`/${MarketplaceService.lang}/payment/pay/lesson?lessonIds=` + JSON.stringify(data.ids))
                            } else {
                                MarketplaceService.interkassaLessonCreatePayment(data.ids)
                                    .then(data => {
                                        const form = $(`<form action="${data.url}" method="POST">`);
                                        for (let key in data.params) {
                                            form.append(`<input name="${key}" type="hidden" value="${data.params[key]}" />`);
                                        }
                                        form.appendTo($('body')).submit();
                                    })
                            }
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Упс...',
                                text: 'На данное время урок забронирован!',
                            })
                        }
                    })
            }
        }
    },
    mounted() {
        console.log(this.paymentType)
    }
}
</script>

<style scoped lang="scss">
.modal {
  .modal-dialog {
    .modal-content {
      background-color: #eff0f0;
      border-radius: unset;
      border: unset;
      width: 35vw;

      .modal-body {
        width: 35vw;
        padding-left: 4.5vw;
        padding-right: 4.5vw;

        .modal-head {
          .title {
            font-size: 1.695vw;
            font-weight: 600;
          }

          .trainer-name {
            font-size: 1.1vw;
            margin-top: .5vw;
            color: #ff6d1d;
            font-weight: 500;

            span {
              color: black;
            }
          }
        }

        .trainer-type-wrapper {
          display: flex;
          margin-top: 2.8vw;
          justify-content: space-between;

          .trainer-type {
            cursor: pointer;
            width: 58%;
            background: url(/images/marketplace/priceBackground.png);
            background-position: center;
            background-size: cover;
            height: 3.1vw;
            display: flex;
            transition: all .5s ease-in-out;
            padding-left: 1.5vw;
            display: flex;
            align-items: center;

            .type {
              font-size: .8vw;
              font-weight: 500;
              color: black;
            }

            .price {
              font-size: 1vw;
              color: #28a745;
            }
          }

          .confirm-btn {
            width: 35%;
            border: unset;
            color: white;
            outline: unset;
            background-color: #ff6d1d;
            cursor: pointer;
            font-size: 1vw;

            &:hover {
              opacity: .5;
            }

            &.disable {
              background-color: #9d9fa0;
            }
          }
        }

        .time {
          font-size: .85vw;
          margin-top: 1vw;
          margin-left: 1vw;
          display: flex;

          .price {
            position: absolute;
            left: 15.8vw;
          }
        }

        .description {
          font-size: .6vw;
          margin-left: 1vw;
          color: #9d9fa0;
          margin-bottom: .5vw;
          margin-top: .35vw;

          a {
            color: #9d9fa0;
          }

          .timezone {
            color: #8298ac;
          }

          &.offer {
            input[type="checkbox"] {
              position: relative;
              top: 0.5vw;
              width: 1vw;
              height: 1vw;
              -webkit-appearance: none;
              outline: none;
              transition: 0.5s;

              &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: .7vw;
                height: .7vw;
                border: 2px solid #262626;
                box-sizing: border-box;
                transition: 0.5s;
              }
            }

            input:checked[type="checkbox"]:before {
              border-left: none;
              border-top: none;
              width: 0.5vw;
              border-color: #0f0;
              transform: rotate(45deg) translate(5px, -5px);
              left: -.3vw;
              top: -.2vw;
            }
          }
        }
      }
    }
  }
}

.dark {
  .modal {
    .modal-dialog {
      .modal-content {
        color: white;
        background: rgb(55, 58, 63);
        background: rgb(65, 69, 75);
        background: -moz-linear-gradient(90deg, rgba(65, 69, 75, 1) 0%, rgba(23, 26, 29, 1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(65, 69, 75, 1) 0%, rgba(23, 26, 29, 1) 100%);
        background: linear-gradient(90deg, rgba(65, 69, 75, 1) 0%, rgba(23, 26, 29, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#41454b", endColorstr="#171a1d", GradientType=1);

        .modal-body {
          .modal-head {
            .trainer-name {
              span {
                color: white;
              }
            }
          }

          .trainer-type-wrapper {
            .trainer-type {
              color: white;
              background: url(/images/marketplace/darkPriceBackground.png);
              background-position: center;
              background-size: cover;

              .type {
                color: white;
              }
            }
          }
        }
      }
    }
  }
}
</style>