<template>
    <div class="modal fade" id="trainerSendReviewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Оставить отзыв</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-close" data-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn-send">Отправить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TrainerSendReview"
    }
</script>

<style scoped lang="scss">
    .modal {
        .modal-dialog {
            .modal-content {
                border-radius: unset;

                .modal-footer {
                    .btn-close {
                        width: 50%;
                        padding: .5vw;
                        border: unset;
                        outline: unset;
                        font-size: 1vw;
                        cursor: pointer;

                        &:hover {
                            opacity: .5;
                        }
                    }

                    .btn-send {
                        width: 50%;
                        padding: .5vw;
                        border: unset;
                        outline: unset;
                        font-size: 1vw;
                        cursor: pointer;
                        color: white;
                        background-color: #ff6d1d;

                        &:hover {
                            opacity: .5;
                        }
                    }
                }
            }
        }
    }
</style>