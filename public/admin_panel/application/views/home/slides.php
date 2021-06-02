<style>
    .slide-preview {
        width: 100%;
        display: flex;
        border-radius: 4px;
        border: solid 1px #dfe3e9;
        background-color: #edf1f9;
    }

    .slide-preview .text-preview {
        position: absolute;
        color: white;
        font-size: 1.5vw;
        font-weight: 600;
        margin-left: 2.5vw;
        width: 65%;
    }

    .slide-preview .preview {
        width: 100%;
    }

    w-100 {
        width: 100%;
    }

    .slide-preview.main {
        width: 100%;
        display: flex;
        border-radius: 4px;
        border: solid 1px #dfe3e9;
        background-color: #edf1f9;
    }

    .slide-preview.main .text-preview {
        position: absolute;
        color: white;
        font-size: 3.5vw;
        font-weight: 600;
        margin-left: 4.2vw;
        width: 60%;
        margin-top: 2vw;
    }

    .slide-preview.main .preview {
        width: 100%;
    }
</style>
<main class="flex create-new-website-page">
    <?php
    $errors = validation_errors('<li>', '</li>');
    if (!empty($errors)) { ?>
        <div class="alert callout" role="alert">
            <h5>Errors</h5>
            <ul>
                <?php print $errors; ?>
            </ul>
        </div>
    <?php } ?>
    <aside>
        <?php $activePath = 'slides'; ?>
        <?php require_once APPPATH . 'views/sidebar.php' ?>
    </aside>

    <div class="main-content">
        <h1 class="main-title">Слайды</h1>

        <div class="relative">
            <table class="new-table">
                <thead>
                <tr>
                    <td>id</td>
                    <td class="js-expand-table-item pointer">
                        Изображение
                    </td>
                    <td class="js-expand-table-item pointer">
                        Ссылка
                    </td>
                    <td class="js-expand-table-item pointer">
                        Текст
                    </td>
                    <td class="js-expand-table-item pointer">
                        Тип
                    </td>
                    <td class="t-a-r pr-15">
                    </td>
                </tr>
                </thead>
                <tbody>
                <?php if (!empty($slides)) {
                    foreach ($slides AS $slide) {
                        ?>
                        <tr id="slide_<?php echo $slide['id']; ?>"
                            data-id="<?php echo $slide['id']; ?>"
                            data-img="<?php echo $image_path . $slide['img'] ?>"
                            data-url="<?php print $slide['url']; ?>"
                            data-text="<?php print $slide['text']; ?>"
                            data-type="<?php print $slide['type']; ?>"
                        >
                            <td><?php echo $slide['id']; ?></td>
                            <td class="js-expand-table-item pointer">
                                <img class="profile-pic-small" src="<?php echo $image_path . $slide['img'] ?>"/>
                            </td>
                            <td class="js-expand-table-item pointer">
                                <?php print $slide['url']; ?>
                            </td>
                            <td class="js-expand-table-item pointer">
                                <?php print $slide['text']; ?>
                            </td>
                            <td class="js-expand-table-item pointer">
                                <?php print $types[$slide['type']]; ?>
                            </td>
                            <td class="t-a-r pr-15">
                                <button onclick="editSlide(<?php echo $slide['id']; ?>)"
                                        data-toggle="modal"
                                        data-target="#slideModal"
                                        class="btn btn-dark-blue btn-small">
                                    Редактировать
                                </button>
                                <a href="<?php echo base_url('c-admin/slides/delete/' . $slide['id']); ?>"
                                   class="pointer txt-orange ml-15 fw-600" style="display: inline-block;">
                                    Удалить
                                </a>
                            </td>
                        </tr>
                    <?php } ?>
                <?php } ?>
                </tbody>
            </table>
        </div>
        <button class="btn btn-orange mt-15 mr-10"
                data-toggle="modal"
                onclick="addSlide()"
                data-target="#slideModal">
            Добавить слайд
        </button>
        <div class="modal fade" id="slideModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <form name="slide" method="POST" class="modal-content" enctype="multipart/form-data">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Новый слайд</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" name="id" value="0">
                        <div class="form-group">
                            <label class="control-label">Ссылка</label>
                            <input type="text" name="url" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Текст</label>
                            <textarea id="text" name="text" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="control-label"></label>
                            <select name="type" class="form-control" id="slide_type">
                                <?php foreach ($types as $type => $title): ?>
                                    <option value="<?php echo $type ?>">
                                        <?php echo $title ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                        <div class="form-group">
                            <div class="changePass mt-25" style="display: inline-block;">
                                <div class="changePassBTN mt-5">
                                    <input type="file" name="file" style="opacity: 0"/>
                                    <div class="changePassBTN" style="margin-top: -17px !important;"> загрузить фото
                                    </div>
                                </div>
                            </div>
                            <h5>Размеры: <span id="image_size">1210x160</span></h5>
                            <div class="uploadImgTxT" style="display: none;" id="upload_data">
                                <div class="txt-orange uploadImgTxT ml-10" id="img_name"></div>
                                <div class="txt-orange uploadImgTxT  ml-10 rmo_close"></div>
                            </div>
                        </div>
                        <div class="col-item w-100">
                            <label class="label" style="font-size: 12px; margin-top: 30px;" for=""><img
                                        style="top: 3px;" class="search-img"
                                        src="<?php print base_url("assets/icons/search.svg"); ?>">Превью</label>
                            <div class="mb-10 slide-preview">
                                <div class="text-preview" id="text-preview">
                                </div>
                                <img class="preview" id="img_preview" src="" style="margin: 0;height: 20vw;">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                        <button class="btn btn-orange" id="addButton">
                            Добавить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>
<script src="<?php echo base_url('assets/js/tinyMCE.js'); ?>" referrerpolicy="origin"></script>

<script>
    let editor = tinymce.init({
        selector:'textarea',
        plugins: 'code',
        toolbar: 'code | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',

        height: 600
    });
    const imagePreview = document.getElementById('img_preview');
    const text = document.getElementById('text');

    window.onload = function () {
        document.querySelector('input[type="file"]').addEventListener('change', function () {
            if (this.files && this.files[0]) {

                const url = URL.createObjectURL(this.files[0]);

                if (this.files[0].type != "image/jpg"
                    && this.files[0].type != "image/jpeg"
                    && this.files[0].type != "image/svg+xml"
                    && this.files[0].type != "image/png") {
                    return;
                }
                imagePreview.src = url;
            }
        });
    };

    imagePreview.onerror = function () {
        event.target.src = 'https://champs.pro/images/temp/matches/prof-pic.svg';
    }

    text.oninput = function () {
        document.getElementById('text-preview').innerHTML = event.target.value;
    }

    function editSlide(id) {
        const slideRaw = document.getElementById(`slide_${id}`);
        const form = document.getElementById('slideModal');

        document.getElementById('exampleModalLabel').innerHTML = 'Редактировать слайд';
        document.getElementById('addButton').innerHTML = 'Сохранить';

        if (slideRaw && form) {
            form.querySelector('input[name="id"]').value = slideRaw.dataset.id;
            form.querySelector('input[name="url"]').value = slideRaw.dataset.url;
           // form.querySelector('input[name="text"]').text = slideRaw.dataset.text;
            tinyMCE.activeEditor.setContent(slideRaw.dataset.text);
            document.getElementById('text-preview').innerHTML = slideRaw.dataset.text;
            document.getElementById('img_preview').src = slideRaw.dataset.img;
            document.querySelectorAll('#slide_type option').forEach(function (option) {
                if (option.value === slideRaw.dataset.type) {
                    option.selected = true;
                }
            })
            const slidePreview = document.querySelector('.slide-preview');
            if (slidePreview) {
                if (slideRaw.dataset.type === 'home') {
                    slidePreview.classList.add('main')
                } else {
                    slidePreview.classList.remove('main')
                }
            }
        }
    }

    document.getElementById('slide_type').addEventListener('change', function () {

        const slidePreview = document.querySelector('.slide-preview');
        if (slidePreview) {
            if (event.target.value === 'home') {
                $('#image_size').text('1210x160');
                $('#img_preview').height('20vw')
                $('#img_preview').width('100%')
                slidePreview.classList.add('main')
            } else if(event.target.value === 'general') {
                $('#image_size').text('1170x200');
                $('#img_preview').height('11vw')
                $('#img_preview').width('100%')
                slidePreview.classList.remove('main')
            } else{
                $('#image_size').text('690x376');
                $('#img_preview').height('20vw')
                $('#img_preview').width('50%')
                slidePreview.classList.remove('main')
            }
        }
    })

    function addSlide() {
        document.getElementById('exampleModalLabel').innerHTML = 'Новый слайд';
        document.getElementById('addButton').innerHTML = 'Добавить';

        const form = document.getElementById('slideModal');

        form.querySelector('input[name="id"]').value = '';
        form.querySelector('input[name="url"]').value = '';
        form.querySelector('input[name="text"]').value = '';

        document.getElementById('text-preview').innerHTML = '';
        document.getElementById('img_preview').src = '';
        document.querySelectorAll('#slide_type option').forEach(function (option) {
            option.selected = false;
        })
    }
</script>