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

    w-100 {
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
        <ul>
            <li style="<?php print ($current_u_can[0] == 1 || $current_u_can[1]) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/posts/page/1'); ?>">Статьи</a></li>
            <li style="<?php print ($current_u_can[0] == 1 || $current_u_can[2]) ? '' : 'display:none'; ?>"><a href="<?php echo base_url("c-admin/matches/page/1"); ?>" >Статистика</a></li>
            <li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/users/page/1'); ?>"> Пользователи</a></li>
            <li style="<?php print ($current_u_can[0] == 1 || $current_u_can[3]) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/trainers/page/1'); ?>">Тренера</a></li>
            <li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/payments/page/1'); ?>">Оплаты</a></li>
            <li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/admins/page/1'); ?>">Администраторы</a></li>
            <li class="active" style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a class="active" href="<?php echo base_url('c-admin/settings'); ?>">Настройки</a></li>
            <li><a href="<?php echo base_url('c-admin/slides'); ?>">Слайды</a></li>
        </ul>
    </aside>
    <!--- ---->
    <div class="main-content">
        <h1 class="main-title">Настройки</h1>
        <form action="" method="post" enctype="multipart/form-data">
            <?php foreach ($settings as $setting):?>
                <label class="label" for=""><?php echo $setting['title']?></label>
                <div class="input mb-5">
                    <input
                        type="text"
                        class="fw-600 input2_txt"
                        name="setting[<?php echo $setting['key']?>]"
                        value="<?php echo $setting['value']?>">
                </div>
            <?php endforeach;?>
            <h1 class="main-title">Социальные сети</h1>
            <?php foreach ($social as $setting):?>
                <label class="label" for=""><?php echo $setting['title']?></label>
                <div class="input mb-5">
                    <input
                        type="text"
                        class="fw-600 input2_txt"
                        name="setting[<?php echo $setting['key']?>]"
                        value="<?php echo $setting['value']?>">
                </div>
            <?php endforeach;?>
            <?php if(isset($banner)):?>
                <h1 class="main-title">Баннер</h1>
                <label class="label" for=""><?php echo $banner['text']['title']?></label>
                <div class="input mb-5">
                    <input
                        type="text"
                        class="fw-600 input2_txt"
                        id="text"
                        name="setting[<?php echo $banner['text']['key']?>]"
                        value="<?php echo $banner['text']['value']?>">
                </div>
                <label class="label" for=""><?php echo $banner['url']['title']?></label>
                <div class="input mb-5">
                    <input
                            type="text"
                            class="fw-600 input2_txt"
                            id="text"
                            name="setting[<?php echo $banner['url']['key']?>]"
                            value="<?php echo $banner['url']['value']?>">
                </div>
                <div class="form-group">
                    <div class="changePass mt-25" style="display: inline-block;">
                        <div class="changePassBTN mt-5">
                            <input type="file" name="file" style="opacity: 0"/>
                            <div class="changePassBTN" style="margin-top: -17px !important;"> загрузить фото
                            </div>
                        </div>
                    </div>
                    <div class="uploadImgTxT" style="display: none;" id="upload_data">
                        <div class="txt-orange uploadImgTxT ml-10" id="img_name"></div>
                        <div class="txt-orange uploadImgTxT  ml-10 rmo_close"></div>
                    </div>
                </div>
                <div class="col-item w-100">
                    <label class="label" style="font-size: 12px; margin-top: 30px;" for=""><img
                            style="top: 3px;" class="search-img"
                            src="<?php print base_url("assets/icons/search.svg"); ?>">Превью</label>
                    <div class="mb-10 slide-preview" style="display: flex; justify-content: center;">
                        <div class="w-100">
                            <div class="text-preview" id="text-preview">
                                <?php echo $banner['text']['value']?>
                            </div>
                        </div>
                        <img class="preview" id="img_preview" src="<?php echo $images_path.$banner['image']['value']?>" style="margin: 0;">
                    </div>
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

<script>
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
                imagePreview.style.width = '100%';
            }
        });
    };

    imagePreview.onerror = function () {
        event.target.src = 'https://champs.pro/images/temp/matches/prof-pic.svg';
        event.target.style.width = '50%';
    }

    text.oninput = function () {
        document.getElementById('text-preview').innerHTML = event.target.value;
    }
</script>