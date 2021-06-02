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
        font-size: 3.5vw;
        font-weight: 600;
        margin-left: 4.2vw;
        width: 60%;
        margin-top: 2vw;
    }

    .slide-preview .preview {
        width: 100%;
    }

    .w-100 {
        width: 100%;
    }

    .text-redactor div {
        margin: 0;
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
        <ul>
            <?php $activePath = 'settings'; ?>
            <?php require_once APPPATH . 'views/sidebar.php' ?>
        </ul>
    </aside>
    <!--- ---->
    <div class="main-content">
        <h1 class="main-title">Настройки</h1>
        <form action="" method="post" enctype="multipart/form-data">
            <?php if (isset($paymentType)): ?>
                <label class="label" for=""><?php echo $paymentType['title'] ?></label>
                <div>
                    <select class="input mb-5 w-100" name="setting[<?php echo $paymentType['key'] ?>]">
                        <?php foreach ($paymentTypes as $type => $title): ?>
                            <?php if ($type === $paymentType['value']): ?>
                                <option selected value="<?php echo $type ?>">
                                    <?php echo $title ?>
                                </option>
                            <?php else: ?>
                                <option value="<?php echo $type ?>">
                                    <?php echo $title ?>
                                </option>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </select>
                </div>
            <?php endif; ?>
            <?php foreach ($settings as $setting): ?>
                <label class="label" for=""><?php echo $setting['title'] ?></label>
                <div class="input mb-5">
                    <input
                            type="text"
                            class="fw-600 input2_txt"
                            name="setting[<?php echo $setting['key'] ?>]"
                            value="<?php echo $setting['value'] ?>">
                </div>
            <?php endforeach; ?>
            <h1 class="main-title">Социальные сети</h1>
            <?php foreach ($social as $setting): ?>
                <label class="label" for=""><?php echo $setting['title'] ?></label>
                <div class="input mb-5">
                    <input
                            type="text"
                            class="fw-600 input2_txt"
                            name="setting[<?php echo $setting['key'] ?>]"
                            value="<?php echo $setting['value'] ?>">
                </div>
            <?php endforeach; ?>
            <h1 class="main-title">Аддресс</h1>
            <label class="label" for=""><?php echo $address['title'] ?></label>
            <div>
                <textarea
                        type="text"
                        class="fw-600 input2_txt"
                        style="height: 150px; width: 100%"
                        name="setting[<?php echo $address['key'] ?>]"><?php echo $address['value'] ?></textarea>
            </div>
            <h1 class="main-title">Описание тренировок</h1>
            <?php foreach ($trainingDescriptions as $setting): ?>
                <label class="label" for=""><?php echo $setting['title']['title'] ?></label>
                <div class="input mb-5">
                    <input
                            type="text"
                            class="fw-600 input2_txt"
                            name="setting[<?php echo $setting['title']['key'] ?>]"
                            value="<?php echo $setting['title']['value'] ?>">
                </div>
                <label class="label" for=""><?php echo $setting['description']['title'] ?></label>
                <div class="text-redactor">
                    <textarea
                            name="setting[<?php echo $setting['description']['key'] ?>]"><?php echo $setting['description']['value'] ?></textarea>
                </div>
            <?php endforeach; ?>
            <h1 class="main-title">Текст на страница политики</h1>
            <?php foreach ($terms as $setting): ?>
                <label class="label" for=""><?php echo $setting['title'] ?></label>
                <div class="text-redactor">
                    <textarea name="setting[<?php echo $setting['key'] ?>]"><?php echo $setting['value'] ?></textarea>
                </div>
            <?php endforeach; ?>
            <?php if (isset($about)): ?>
                <label class="label" for=""><?php echo $about['title'] ?></label>
                <div class="text-redactor">
                    <textarea name="setting[<?php echo $about['key'] ?>]"><?php echo $about['value'] ?></textarea>
                </div>
            <?php endif; ?>
            <?php if (isset($vacancies)): ?>
                <label class="label" for=""><?php echo $vacancies['title'] ?></label>
                <div class="text-redactor">
                    <textarea
                            name="setting[<?php echo $vacancies['key'] ?>]"><?php echo $vacancies['value'] ?></textarea>
                </div>
            <?php endif; ?>
            <div class="flex">
                <a href="">
                    <button class="btn btn-orange mt-15 mr-10">Сохранить</button>
                </a>
            </div>
        </form>
    </div>
</main>
<script src="https://cdn.tiny.cloud/1/qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc/tinymce/5/tinymce.min.js"></script>
<script>
    const imagePreview = document.getElementById('img_preview');
    const marketplaceBannerPreview = document.getElementById('marketplace_banner_preview');

    $(document).on('DOMContentLoaded', function () {
        tinymce.init({
            selector: '.text-redactor textarea',
            plugins: 'save | link | code',
            toolbar: 'save | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl | code',
            toolbar_sticky: true,
            autosave_ask_before_unload: false,
            autosave_interval: '0.5s',
            autosave_prefix: '{path}{query}-{id}-',
            image_advtab: true,
            template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
            template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
            height: 175,
            image_caption: false,
            quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
            noneditable_noneditable_class: 'mceNonEditable',
            toolbar_mode: 'sliding',
            contextmenu: 'link image imagetools table',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        });
    })

    $('.preview_image').on('error', function () {
        event.target.src = 'https://champs.pro/images/temp/matches/prof-pic.svg';
        event.target.style.width = '50%';
    })
</script>