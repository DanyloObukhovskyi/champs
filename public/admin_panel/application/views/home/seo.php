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
        <?php $activePath = 'seo'?>
        <?php require_once APPPATH.'views/sidebar.php'?>
    </aside>

    <div class="main-content">
        <h1 class="main-title">Сео</h1>
        <div class="relative">
            <table class="new-table" id="pageTable">
                <thead>
                <tr>
                    <td class="width-5">Название Страницы</td>
                    <td class="width-5">Title</td>
                    <td class="width-20">Keywords</td>
                    <td class="width-20">Ссылка</td>
                    <td class="width-10 pr-140 t-a-r">Опции</td>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div class="flex" style="justify-content: space-between;">
        </div>
    </div>

    <div class="modal fade" id="seoPageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background: #333f52;color: white;" >
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h3 class="modal-title  text-center" id="editSeoLabel">Редактирование СЕО конфигурации страницы</h3>
                </div>
                <input type="hidden" id="id" value="" />
                <div class="modal-body">
                    <div class="main-post-editor-edit">
                        <form class="editor-edit-form" enctype="multipart/form-data">
                            <span class="editor-edit">Title</span>
                            <input class="editor-edit-form-input mt-15" type="text" id="title" placeholder="title" value="">
                            <br>
                            <span class="editor-edit">Keywords</span>
                            <input class="editor-edit-form-input mt-15" type="text" id="keywords" placeholder="keywords" value="">
                            <br>
                            <span class="editor-edit">Description</span>
                            <textarea class="editor-edit-form-input mt-15" type="text" id="description" placeholder="description" value=""></textarea>
                            <br>
                            <span class="editor-edit">Heading</span>
                            <input class="editor-edit-form-input mt-15" type="text" id="heading" placeholder="heading" value="">
                            <br>
                            <span id="heading_type" class="editor-edit">Heading Type</span>
                            <select class="form-control form-control-sm">
                                <option value="" selected>Выберете тип заголовка</option>
                                <option value="1">h1</option>
                                <option value="2">h2</option>
                            </select>
                            <br>
                            <span class="editor-edit">Meta Tags</span>
                            <button class="btn btn-green" type="button"  onclick="addMeta()">+</button>
                            <div class="checkbox_pages mt-15 mr-10">
                                <div class="form-check form-check-inline">
                                    <ul id="seo_list" style="list-style: decimal;display: none">
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn mt-15 mr-10"  onclick="save()">Сохранить и Загрузить</button>
                    <button type="button" class="btn btn-orange mt-15 mr-10" data-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</main>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/tinyMCE.js'); ?>" referrerpolicy="origin"></script>
<script>
    tinymce.init({selector:'#description'});
    $(document).ready( function () {
        $('#pageTable').DataTable({
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
                url: '<?php echo base_url('/c-admin/seo/fetchPages') ;?>',
                type: 'POST',
                data: {

                }
            },
            columns: [
                {searchable: true, orderable: false, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: false, visible: true},
                {searchable: true, orderable: false, visible: true}
            ],
        });
    } );

    function fetch(id)
    {
        var post = $.ajax({
            method: 'POST',
            data : {
                'id':id
            },
            url: '<?php  echo base_url("/c-admin/seo/fetch") ;?>',
            success : function(result){
                result = JSON.parse(result);
                if(result.status == true){
                    $('#title').val(result.title);
                    $('#keywords').val(result.keywords);
                    tinymce.get("description").setContent(result.description);
                    $('#id').val(id)
                    $('#heading').val(result.heading)
                    $('#heading_type').val(result.heading_type)
                    if(!$.trim(result.meta)){
                        result.metas.forEach(function(meta){
                            var html = [];
                            html = '<li class="meta_tags" style="margin-top: 5px">'+
                                    '<label class="form-check-label" style="margin-right:5px;"  for="inlineRadio1">name</label>'+
                                    '<input class="form-check-input" style="margin-right:17px;" name="meta_name"  type="text" value="'+meta.meta_tag+'">'+
                                    '<label class="form-check-label" style="margin-right:5px;"  for="inlineRadio1">content</label>'+
                                    '<input class="form-check-input" style="margin-right:17px;" name="meta_content"  type="text" value="'+meta.value+'">'+
                                    '<button class="btn btn-orange mr-10"  type="button" onclick="removeNode()">-</button>'+
                                    '</li>';
                            $('#seo_list').append(html);
                        });
                    }
                    $('#seo_list').show();
                    removeNode();
                    $('#seoPageModal').modal('show');
                } else {
                    alert('Страница не найдена');
                }
            }
        });
    }

    function addMeta()
    {
        var html = [];
        html = '<li class="meta_tags" style="margin-top: 5px">'+
            '<label class="form-check-label" style="margin-right:5px;" for="inlineRadio1">name</label>'+
            '<input class="form-check-input" style="margin-right:17px;"  type="text" name="meta_name" value="">'+
            '<label class="form-check-label" style="margin-right:5px;"  for="inlineRadio1">content</label>'+
            '<input class="form-check-input" style="margin-right:17px;"  type="text" name="meta_content" value="">'+
            '<button class="btn btn-orange mr-10" type="button">-</button>'+
            '</li>';
        $('#seo_list').append(html);
        $('#seo_list').show();
        removeNode();
    }

    function removeNode()
    {
        var allSubjectName = document.querySelectorAll(".meta_tags");
        for (var index = 0; index <allSubjectName.length; index++){
            allSubjectName[index].addEventListener("click", function(){
                this.classList.toggle("active");
            });
            allSubjectName[index].querySelector("button").addEventListener("click",
                function(){
                    this.closest(".meta_tags").remove();
                });
        }
    }

    function save()
    {
        let metas = [];
        let meta = {};
        $('.meta_tags input').each(function(key, item){
            if(item.name === 'meta_name'){
                meta['key'] = item.value;
            } else if(item.name === 'meta_content'){
                meta['value'] = item.value;
            }
            if(meta['key'] && meta['value']){
                metas.push(meta);
                meta = {};
            }
        });
        let title = $('#title').val();
        let keywords = $('#keywords').val();
        let id = $('#id').val();
        let heading = $('#heading').val();
        let heading_type = $('#heading_type').val();
        let description = tinymce.get("description").getContent();
        $.ajax({
            type:'POST',
            url:'<?php echo base_url('/c-admin/seo/edit') ;?>',
            data:{
                'id':id,
                'title':title,
                'description':description,
                'keywords':keywords,
                'heading':heading,
                'heading_type':heading_type,
                'metas': metas
            },
            success:function(data){
                data = JSON.parse(data);
                if(data.status == false){
                    alert(data.errors);
                } else if(data.status == true) {
                    alert('Страница отредактирована');
                    $('#seo_list').hide();
                    $('#seoPageModal').modal('hide');
                    $('#pageTable').DataTable().draw();
                    $('.meta_tags').remove()
                }
            },
            error:function(data){
                $.each(data.responseJSON.errors, function (i, error) {
                    alert(error[0]);
                });

            }
        });
    }
</script>
