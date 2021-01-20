<ul>
    <li class="<?php echo 'posts' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/posts/page/1'); ?>">Статьи</a>
    </li>
    <li class="<?php echo 'statistics' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url("c-admin/matches/page/1"); ?>" >Статистика</a>
    </li>
    <li class="<?php echo 'users' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/users/page/1'); ?>"> Пользователи</a>
    </li>
    <li class="<?php echo 'trainers' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/trainers/page/1'); ?>">Тренера</a>
    </li>
    <li class="<?php echo 'payments' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/payments/page/1'); ?>">Оплаты</a>
    </li>
    <li class="<?php echo 'admins' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/admins/page/1'); ?>">Администраторы</a>
    </li>
    <li class="<?php echo 'settings' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/settings'); ?>">Настройки</a>
    </li>
    <li class="<?php echo 'slides' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/slides'); ?>">Слайды</a>
    </li>
    <li class="<?php echo 'ranks' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/ranks'); ?>">Ранги</a>
    </li>
    <li class="<?php echo 'awards' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/awards'); ?>">Награды</a>
    </li>
    <li class="<?php echo 'games' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/games'); ?>">Игры</a>
    </li>
    <li class="<?php echo 'marketplace/banners' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/marketplace/banners'); ?>">Банеры маркетплейса</a>
    </li>
    <li class="<?php echo 'trainers/transactions' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/trainers/transactions'); ?>">Выплаты тренерам</a>
    </li>
    <li class="<?php echo 'events' === $activePath ? 'active': ''?>">
        <a href="<?php echo base_url('c-admin/events'); ?>">События</a>
    </li>
</ul>