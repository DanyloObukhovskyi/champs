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
        <?php $activePath = 'not_related_payments'?>
        <?php require_once APPPATH.'views/sidebar.php'?>
    </aside>
    <!--	<div class="main-content">-->
    <!--- ---->
    <!--- ---->
    <!--- ---->
    <!--- ---->
    <!--- ---->
    <!--- ---->
    <?php

    $params = '';
    if (!empty($sort_fields)) {
        $params = array();
        foreach ($sort_fields AS $key => $val) {
            $params[] = "sort[" . $key . "]=" . $val;
        }
        $params = implode('&', $params);
        $params = '?' . $params;
    }
    ?>

    <div class="main-content">
        <h1 class="main-title">Неудачные оплаты</h1>
        <div class="relative">
            <table class="new-table" id="paymentsTable">
                <thead>
                <tr>
                    <td class="width-5" class="table-head-col">ID</a></td>
                    <td class="width-15" class="table-head-col">Тренер</a></td>
                    <td class="width-15" class="table-head-col">Дата оплаты</a></td>
                    <td class="width-15" class="table-head-col">Время урока</td>
                    <td class="width-15" class="table-head-col">Cтудент</td>
                    <td class="width-10" class="table-head-col">Сумма</td>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>

        <!--- ---->
        <!--- ---->
        <!--- ---->
        <!--- ---->
        <!--- ---->
        <!--	</div>-->
</main>
<script src="<?php echo base_url('assets/js/table-expander.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>
<script>
    $(document).ready( function () {
        $('#paymentsTable').DataTable({
            "language": {
                "search":  'Поиск',
                "processing": 'Загрузка......',
                "sInfo": 'Показано _START_ по _END_ с _TOTAL_ записей',
                "infoEmpty": 'Показано с 0 по 0 из 0 записей',
                "lengthMenu": '_MENU_ Записей',
                "paginate": {
                    "first":      "Первая",
                    "last":       "Последняя",
                    "next":       "Следующая",
                    "previous":   "Предыдущая"
                },
                "zeroRecords": 'Пусто'
            },
            stateSave: true,
            "processing": true,
            "serverSide": true,
            "lengthChange": true,
            "ordering": true,
            "ajax": {
                url: '<?php echo base_url('/c-admin/not_related_payments') ;?>',
                type: 'POST',
                data: {

                }
            },
            columns: [
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: true, visible: true}
            ],
        });
    } );




</script>
