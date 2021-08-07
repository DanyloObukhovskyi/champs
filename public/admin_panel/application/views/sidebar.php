<ul>
    <?php if($roles[0] == 1 or $roles[1] == 1):?>
    <li class="<?php echo 'posts' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/posts/page/1'); ?>">Статьи</a>
    </li>
    <li class="<?php echo 'blogs' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/blogs'); ?>">Блоги</a>
    </li>
    <?php endif;?>
    <?php if($roles[0] == 1 or $roles[2] == 1):?>
    <li class="<?php echo 'statistics' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url("c-admin/matches/page/1"); ?>" >Статистика</a>
    </li>
    <?php endif;?>
    <?php if($roles[0] == 1):?>
    <li class="<?php echo 'users' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/users/page/1'); ?>"> Пользователи</a>
    </li>
    <?php endif;?>
    <?php if($roles[0] == 1 or $roles[3] == 1):?>
    <li class="<?php echo 'trainers' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/trainers/all/page/1'); ?>">Тренера</a>
    </li>
    <li class="<?php echo 'payments' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/payments/page/1'); ?>">Оплаты</a>
    </li>
    <?php endif;?>
    <?php if($roles[0] == 1):?>
    <li class="<?php echo 'admins' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/admins/page/1'); ?>">Администраторы</a>
    </li>
        <li class="<?php echo 'seo' === $activePath ? 'active': ''?>">
            <a href="<?php echo base_url('c-admin/seo'); ?>">Сео</a>
        </li>
    <li class="<?php echo 'pages' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/pages'); ?>">Страницы</a>
    </li>
    <li class="<?php echo 'settings' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/settings'); ?>">Настройки</a>
    </li>
    <?php endif;?>
    <?php if($roles[0] == 1):?>
    <li class="<?php echo 'slides' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/slides'); ?>">Слайды</a>
    </li>
    <?php endif;?>
    <?php if($roles[0] == 1 or $roles[3] == 1):?>
    <li class="<?php echo 'ranks' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/ranks'); ?>">Ранги</a>
    </li>
    <li class="<?php echo 'awards' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/awards'); ?>">Награды</a>
    </li>
    <?php endif;?>
    <?php if($roles[0] == 1):?>
    <li class="<?php echo 'games' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/games'); ?>">Игры</a>
    </li>
    <li class="<?php echo 'marketplace/banners' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/marketplace/banners'); ?>">Банеры маркетплейса</a>
    </li>
    <li class="<?php echo 'trainers/banners' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/trainers/banners'); ?>">Банеры тренера</a>
    </li>
    <?php endif;?>
    <?php if($roles[0] == 1 or $roles[3] == 1):?>
    <li class="<?php echo 'trainers/transactions' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/trainers/transactions'); ?>">Выплаты тренерам</a>
    </li>
    <?php endif;?>
    <?php if($roles[0] == 1 or $roles[1] == 1):?>
        <li class="<?php echo 'teams' === $activePath ? 'active': ''?>">
            <a href="<?php echo base_url('c-admin/teams'); ?>">Команды</a>
        </li>
    <?php endif;?>
    <?php if($roles[0] == 1 or $roles[1] == 1):?>
    <li class="<?php echo 'events' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/events'); ?>">События</a>
    </li>
    <?php endif;?>
    <?php if($roles[0] == 1):?>
    <li class="<?php echo 'referral' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/referral'); ?>">Реферрал</a>
    </li>
    <?php endif;?>
    <?php if($roles[0] == 1 or $roles[1] == 1):?>
    <li class="<?php echo 'comments' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/comments'); ?>">Коментарии и отзывы</a>
    </li>
    <?php endif;?>
</ul>