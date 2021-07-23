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
        <?php $activePath = 'payments'?>
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
        <h1 class="main-title">Посты</h1>
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
                    <td class="width-10" class="table-head-col">Сумма Refund</td>
                    <td class="width-15" class="table-head-col">Refund</td>
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
<div id="confirm_delete1" class="modal">
    <!-- Modal content -->
    <div class="confirm_modal-content">
        <a href=""><div class="close">×</div></a><br>
        <div id="modal_text">
            <div class="no_license"> Are You sure?</div><br><br>
            <div class="want_delete" id="confirm_text"></div>
            <div class="confirm_text">
                <div class="type_delete">Type amount to confirm Refund</div>
                <input type="text" id="confirmation_text" class="input_style" placeholder="Value">
                <input type="hidden" id="c_payment_id">
                <input type="hidden" id="yandex_kassa_id">
                <input type="hidden" id="c_user_id">
                <input type="hidden" id="c_currency">
                <input type="hidden" id="c_url">

                <div class="confrim_btn" onclick="confirm_refund()"><div class="confirm">REFUND</div></div>
                <a href=""><div class="delete_btn"><div class="confirm" style="color: #7f8fa4;">Cancel</div></div> </a>
            </div>
        </div>

    </div>
</div>
<script src="<?php echo base_url('assets/js/table-expander.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>
<script>
    function refund(amount=0, yandex_kassa_id="", user_id = 0, currency="", c_url="", c_payment_id=0){
        document.getElementById('confirmation_text').value = amount;
        document.getElementById('yandex_kassa_id').value = yandex_kassa_id;
        document.getElementById('c_payment_id').value = c_payment_id;
        document.getElementById('c_user_id').value = user_id;
        document.getElementById('c_currency').value = currency;
        document.getElementById('c_url').value = c_url;
        console.log('amount ' + amount);
        console.log('yandex_kassa_id ' + yandex_kassa_id);
        console.log('c_payment_id ' + c_payment_id);
        console.log('user_id ' + user_id);
        console.log('currency ' + currency);
        console.log('c_url ' + c_url);

        var modal_confirm = document.getElementById('confirm_delete1');
        modal_confirm.style.display = "block";
    }
    function confirm_refund(){
        let c_amount = document.getElementById('confirmation_text').value;
        let yandex_kassa_id = document.getElementById('yandex_kassa_id').value;
        let c_payment_id = document.getElementById('c_payment_id').value;
        let c_user_id = document.getElementById('c_user_id').value;
        let c_currency = document.getElementById('c_currency').value;
        let url = document.getElementById('c_url').value;

        if(url && url.length>1){
            var param = {
                yandex_kassa_id: yandex_kassa_id,
                payment_id: c_payment_id,
                amount: c_amount,
                user_id: c_user_id,
                currency: c_currency
            };

            $.post(url, param, function (data) {
                console.log(data);
                var modal_confirm = document.getElementById('confirm_delete');
                modal_confirm.style.display = "none";
                if(data == 1) {
                    location.reload();
                } else {
                    alert(data);
                }

            });
        }

    }
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
                url: '<?php echo base_url('/c-admin/payments') ;?>',
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
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: false, visible: true}
            ],
        });
    } );




</script>
