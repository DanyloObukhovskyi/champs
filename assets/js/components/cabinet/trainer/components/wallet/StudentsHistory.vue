<template>
    <div class="setting-container-body students-history">
        <div class="d-flex justify-content-center align-items-center" v-if="load">
            <small-loader/>
        </div>
        <template v-else>
            <div class="trainer-title">
                История платежей от учеников
            </div>
            <div class="students-history-body">
                <div class="lesson" v-for="history in slicedHistory">
                    <div class="lesson-body">
                        <div class="time">
                            {{ parseDate(history.date) }}
                        </div>
                        <div class="cost">
                            {{ history.cost }} &#8381;
                        </div>
                        <div class="trainer">
                            <div class="avatar">
                                <img :src="'/uploads/avatars/' + history.student.photo"
                                     @error="$event.target.src = '/images/noLogo.png'">
                            </div>
                            <div class="nickname">
                                {{ history.student.nickname }}
                            </div>
                            <div class="buttons">
                                <cabinet-button text-first="Подробнее" @click="toggleMoreDetail(history)">
                                    <template v-slot:img>
                                        <img src="/images/cabinet/inviteIcon.png">
                                    </template>
                                    <template v-slot:more-detail>
                                        <i class="fas fa-sort-down"></i>
                                    </template>
                                </cabinet-button>
                            </div>
                        </div>
                    </div>
                    <div class="lesson-bottom">
                        <more-detail :lesson="history.lesson" :show="history.show"/>
                    </div>
                </div>
                <div class="show-more" @click="showAllHistory = !showAllHistory" v-if="studentsHistory.length > 3">
                    {{ showAllHistory ? 'Скрыть' : 'Показать все' }}
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import SmallLoader from "../../../../helpers/SmallLoader";
import {mapGetters} from "vuex";
import CabinetButton from "../../../Button";
import MoreDetail from "../../../user/components/training/MoreDetail";

export default {
    name: "StudentsHistory",
    components: {MoreDetail, CabinetButton, SmallLoader},
    props: ['load'],
    data() {
        return {
            showMoreDetail: false,
            showAllHistory: false,
        }
    },
    watch: {
        showAllHistory() {
            setTimeout(this.initScroll, 1)
        }
    },
    computed: {
        ...mapGetters([
           'user'
        ]),
        ...mapGetters('cabinet/wallet', [
            'studentsHistory'
        ]),
        slicedHistory() {
            if (!this.showAllHistory && this.studentsHistory.length > 3) {
                return this.studentsHistory.slice(0, 3);
            } else {
                return this.studentsHistory;
            }
        }
    },
    methods: {
        parseDate(time) {
            const date = new Date(time);

            const year = date.getFullYear();
            const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
            const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

            const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
            const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

            return `${day}.${month}.${year} ${hours}:${minutes}`;
        },
        toggleMoreDetail(history) {
            history.show = !history.show;

            $('body').on('mousedown', function () {
                if ($(event.target).parents(".more-detail-wrapper").length === 0
                    && $(event.target).parents(".cabinet-button").length === 0) {

                    history.show = false;
                }
            })
        },
        initScroll() {
            const isTrainer = this.user !== null && this.user.isTrainer;

            const sidebar = document.querySelector('.cabinet-sidebar');

            const sidebarHeight = $(document).height() - window.scrollY;

            const userCardPosition = document
                .querySelector('.card-user')
                .getBoundingClientRect();

            const invite = document.querySelector('.invite');
            const invitePosition = invite.getBoundingClientRect();

            const header = document
                .querySelector('#header')
                .getBoundingClientRect();

            const subNav = document
                .querySelector('.sub-nav')
                .getBoundingClientRect();

            if (subNav.height + header.height - userCardPosition.height - userCardPosition.top >= 0) {
                sidebar.style.position = 'fixed';
                sidebar.style.top = `calc(${header.height + subNav.height + invitePosition.height}px + .5vw)`;

                if (isTrainer) {
                    sidebar.style.height =  `calc(${sidebarHeight}px - 29.7vw)`;
                } else {
                    sidebar.style.height =  `calc(${sidebarHeight}px - 30.5vw)`;
                }

                invite.style.position = 'fixed';
                invite.style.top = `calc(${header.height + subNav.height + 'px'} - 1vw)`;
            } else {
                sidebar.style.position = 'unset';
                sidebar.style.top = 0;
                sidebar.style.height =  'calc(100% - 18.7vw)';

                invite.style.position = 'unset';
                invite.style.top = 0;
            }
        },
    }
}
</script>

<style scoped lang="scss">
.setting-container-body.students-history {
  margin-bottom: .25vw;
}

.show-more {
  margin-left: 2.5vw;
  color: #a2a4a5;
  font-size: 1vw;
  cursor: pointer;
  margin-bottom: 1.5vw;
  margin-top: .5vw;
  transition: all .5s ease;
  width: 10vw;

  &:hover {
    color: white;
  }
}

.lesson {
  margin-left: 2.5vw;
  padding: .5vw 0;

  .lesson-body {
    display: flex;
    align-items: center;

    .cost {
      width: 7vw;
      margin-left: 2vw;
      color: #a2a4a5;
      font-size: 1vw;
    }
  }

  .time {
    color: #a2a4a5;
    font-size: 1vw;
    width: 9vw;
  }

  .trainer {
    display: flex;
    align-items: center;

    .buttons {
      i {
        color: white;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: .8vw;
        margin-bottom: .2vw;
      }
    }

    .avatar {
      width: 2.5vw;
      height: 2.5vw;
      border-radius: 50%;
      padding: .15vw;
      margin-right: 1vw;
      background: #ff6f1f;
      background: -moz-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
      background: -webkit-linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
      background: linear-gradient(0deg, #ff6f1f 0%, #ffc24f 88%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff6f1f", endColorstr="#ffc24f", GradientType=1);
      display: flex;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .nickname {
      color: #9d9fa0;
      font-size: 1vw;
      width: 8vw;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 45%;
      max-width: 70%;

      .button {
        margin-right: 1vw;
      }
    }
  }
}
</style>