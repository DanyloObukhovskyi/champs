<template>
    <div class="button" @click="$emit('click')">
        <div class="cabinet-button">
            <div class="icon-wrapper">
                <div class="background">
                    <div class="cabinet-button-border">
                        <div class="border-two">
                            <div>
                                <slot name="img"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text">
                <div>
                    {{ textFirst }}
                </div>
                <div>
                    {{ textSecond }}
                </div>
            </div>
        </div>
        <div class="more-detail">
            <slot name="more-detail"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props: ['textFirst', 'textSecond']
    }
</script>

<style scoped lang="scss">
  .button {
	display: flex;
	height: 2.1vw;
	width: 10.3vw;
	border-radius: .6vw;
	overflow: hidden;
	cursor: pointer;

	.cabinet-button {
	  display: flex;
	  align-items: center;
	  background-image: url(/images/cabinet/buttonBackground.png);
	  background-position: center;
	  background-size: 110%;

	  .icon-wrapper {
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
		background-color: #e2e2e2;
		padding: .15vw .20vw;
		margin-left: .5vw;

		.background {
		  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
		  background-color: #d6d7d7;
		  padding: .15vw .20vw;

		  .cabinet-button-border {
			clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

			.border-two {
			  padding: .1vw;
			  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
			  background-color: #717679;

			  div {
				clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
				background-color: white;
				overflow: hidden;
				width: .9vw;
				height: .75vw;
				display: flex;
				justify-content: center;
				align-items: center;

				img {
				  width: .7vw;
				}
			  }
			}
		  }
		}
	  }

	  .text {
		font-size: .4vw;
		font-weight: 600;
		margin-left: .5vw;
		color: #acaeae;

		div:nth-child(1) {
		  font-size: .6vw;
		  color: #28a745;
		  width: 6vw;
		}

		img {
		  width: 1vw;
		}
	  }
	}

	.more-detail {
	  transition: all .5s ease-in-out;
	  background-color: #aeaeae;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  width: 16%;
	  height: 2.1vw;
	  margin-top: .01vw;
	  margin-left: -.1vw;

	  i {
		color: white;
		font-size: .7vw;
	  }
	}

	&:hover {
	  .more-detail {
		background-color: #ff6d1d;
	  }
	}
  }

  .dark {
	.button {
	  .cabinet-button {
		color: white;
		background-image: url(/images/cabinet/buttonBackgroundDark.png);
		background-position: center;
		background-size: 110%;

		.icon-wrapper {
		  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
		  background-color: #26292b;

		  .background {
			clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
			background-color: #2e3133;

			.cabinet-button-border {
			  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

			  .border-two {
				clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
				background-color: #717679;

				div {
				  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
				  background-color: #222527;
				}
			  }
			}
		  }
		}
	  }

	  .more-detail {
		transition: all .5s ease-in-out;
		background-color: #171a1b;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 16%;
		height: 2.1vw;
		margin-top: .01vw;
		margin-left: -.1vw;

		i {
		  color: #555a5c;
		  font-size: .7vw;
		}
	  }

	  &:hover {
		.more-detail {
		  background-color: #ff6d1d;
		}
	  }
	}
  }
</style>