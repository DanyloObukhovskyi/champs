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
            <li style="<?php print ($current_u_can[0] == 1 || $current_u_can[1]) ? '' : 'display:none'; ?>">
                <a href="<?php echo base_url('c-admin/posts/page/1'); ?>">Статьи</a>
            </li>
            <li style="<?php print ($current_u_can[0] == 1 || $current_u_can[2]) ? '' : 'display:none'; ?>">
                <a href="<?php echo base_url("c-admin/matches/page/1"); ?>">Статистика</a>
            </li>
            <li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>">
                <a href="<?php echo base_url('c-admin/users/page/1'); ?>"> Пользователи</a>
            </li>
            <li style="<?php print ($current_u_can[0] == 1 || $current_u_can[3]) ? '' : 'display:none'; ?>">
                <a href="<?php echo base_url('c-admin/trainers/page/1'); ?>">Тренеры</a>
            </li>
            <li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>">
                <a href="<?php echo base_url('c-admin/payments/page/1'); ?>">Оплаты</a>
            </li>
            <li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>">
                <a href="<?php echo base_url('c-admin/admins/page/1'); ?>">Администраторы</a>
            </li>
            <li class="active" style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>">
                <a href="<?php echo base_url('c-admin/footer'); ?>">Футер</a>
            </li>
        </ul>
    </aside>

    <div class="main-content">

    </div>
</main>
<script src="<?php echo base_url('assets/js/table-expander.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>
