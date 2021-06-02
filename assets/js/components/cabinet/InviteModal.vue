<template>
    <div class="modal fade" id="inviteModal" tabindex="-1" role="dialog" aria-labelledby="inviteModal"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-head">
                        <div class="title-wrapper">
                            <div class="title">
                                Пригласи друга!
                            </div>
                            <div class="sub-title">
                                Получи 200 серебряных монет
                            </div>
                        </div>
                        <div class="coin-wrapper">
                            <img src="/images/cabinet/coinSilverBig.png">
                        </div>
                    </div>
                    <div class="description">
                        <p>
                            Монеты будут зачислены на ваш аккаунт
                        </p>
                        <p>
                            За каждого привлеченного друга при условии,
                        </p>
                        <p>
                            что он перейдет по ссылке и вступит в группу ВКонтакте.
                        </p>
                    </div>
                    <div class="invite-link">
                        <div class="input-wrapper">
                            <div class="input">
                                <input type="text" id="invite-link" :value="user !== null ? user.invite : ''">
                            </div>
                            <button @click="addToClipboard" class="btn-copy">
                                Копировать ссылку
                            </button>
                        </div>
                    </div>
                    <div class="description-bottom">
                        <i class="far fa-clock" aria-hidden="true"></i>
                        После выполнения данных действий, отпишитесь в лс модератору группы ВК
                        <a :href="user !== null ? user.inviteVk: ''" target="_blank" class="vk-wrapper">
                            <img src="/images/cabinet/vk.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import CabinetService from "../../services/CabinetService";

    export default {
        name: "InviteModal",
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        methods: {
            addToClipboard() {
                const copyText = document.getElementById('invite-link');

                copyText.select();
                document.execCommand("copy");
            }
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
			display: flex;
			justify-content: space-between;

			.title {
			  font-size: 1.89vw;
			  font-weight: 600;
			}

			.sub-title {
			  font-size: 1vw;
			  color: #ff6d1d;
			  font-weight: 500;
			}

			.coin-wrapper {
			  img {
				width: 6vw;
			  }
			}
		  }

		  .description {
			p {
			  margin: 0;
			  color: #9d9fa0;
			  font-size: .85vw;
			}
		  }

		  .invite-link {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
            width: 100%;
			margin-top: 1.5vw;

			.input-wrapper {
			  display: flex;
			  margin-bottom: .5vw;
			  justify-content: space-between;
			  width: 100%;

			  input {
                width: 16vw;
                height: 1.8vw;
                border: .1vw solid #ffbb96;
                border-radius: .2vw;
                -moz-appearance: none;
                -webkit-appearance: none;
                appearance: none;
                outline: unset;
                padding-left: .3vw;
                background: white;
                color: black;
			  }
			}

			.btn-copy {
			  margin-left: .2vw;
			  height: 1.8vw;
			  border: unset;
			  color: white;
			  background: #ff6d1d;
			  width: 8vw;
			  border-radius: .4vw;
			  outline: unset;
			  cursor: pointer;
			  font-size: .7vw;
			  display: flex;
			  align-items: center;
			  justify-content: center;
              transition: all .2s ease;

              &:hover {
				background: #ff3c00;
              }
			}
		  }

		  .description-bottom {
			font-size: .6vw;
			color: #9d9fa0;
			margin-bottom: .5vw;
			margin-top: .35vw;
			display: flex;
			align-items: center;

			.vk-wrapper {
			  height: 1.6vw;

			  img {
				width: 1.5vw;
				margin-left: .2vw;
                cursor: pointer;
				transition: width .1s ease-in-out;

				&:hover {
				  width: 1.55vw;
				  margin-bottom: -.1vw;
				}
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
		}
	  }
	}
  }
</style>