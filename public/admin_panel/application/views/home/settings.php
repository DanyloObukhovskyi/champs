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
            <li  class="active" style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a class="active" href="<?php echo base_url('c-admin/settings'); ?>">Настройки</a></li>
        </ul>
    </aside>
    <!--- ---->
    <div class="main-content">
        <h1 class="main-title">Настройки</h1>
        <form action="" method="post">
            <?php foreach ($settings as $setting):?>
                <label class="label" for=""><?php echo $setting['title']?></label>
                <div class="input mb-5">
                    <input
                        type="text"
                        class="fw-600 input2_txt"
                        name="setting[<?php echo $setting['key']?>]"
                        id="nickname"
                        placeholder="Example: nickname3456789"
                        title="введите правильный никнейм"
                        value="<?php echo $setting['value']?>">
                </div>
            <?php endforeach;?>
            <div class="flex">
                <a href="">
                    <button class="btn btn-orange mt-15 mr-10">Сохранить</button>
                </a>
            </div>
        </form>
    </div>
</main>