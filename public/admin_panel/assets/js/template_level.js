$(function () {

    var width = $(window).width();
    if (width <= 1024) {
        $('#tablet_preview').css('display', 'block');
        $('#tablet_pr_popup').css('display', 'block');
        $('#desktop_preview').css('display', 'none');
    } else {
        $('#desktop_preview').css('display', 'inline-block');
        $('#tablet_preview').css('display', 'none');
        $('#popup_preview').css('display', 'none');
        $('#tablet_pr_popup').css('display', 'none');
    }
});

function display_tablet() {
    $('#popup_preview').css('display', 'block');
}

function close_preview() {
    $('#popup_preview').css('display', 'none');
}

window.onresize = function (event) {
    var width = $(window).width();
    if (width <= 1024) {
        $('#tablet_preview').css('display', 'block');
        $('#tablet_pr_popup').css('display', 'block');
        $('#desktop_preview').css('display', 'none');
    } else {
        $('#desktop_preview').css('display', 'inline-block');
        $('#tablet_preview').css('display', 'none');
        $('#popup_preview').css('display', 'none');
        $('#tablet_pr_popup').css('display', 'none');
    }
}

function select_category(id = 0, id2 = 0) {
    var category = $('#' + id).text();
    $('#' + id2).attr('value', category);
    if (id2 == 'top_category') {
        $('#submit-btn').prop('disabled', false);
        $('#submit-btn').css('background-color', '#39b54a');
    }
}

preview();

function preview(data = 0) {
    if (data == 0) {
        set_preview_style(2, 'without_bullets');
    }
    if (data == 'without_bullets') {
        $('.preview_style').css('margin-left', '55px');
        var columns = $('input[name=columns_count]:checked').val();
        columns = parseInt(columns, 10);
        set_preview_style(columns, 'without_bullets');
    }
    if (data == 'Dots_Bullets') {
        $('.preview_style').css('margin-left', '47px');
        var columns = $('input[name=columns_count]:checked').val();
        columns = parseInt(columns, 10);
        set_preview_style(columns, 'Dots_Bullets');
    }
    if (data == 'numbering_style') {
        $('.preview_style').css('margin-left', '45px');
        var columns = $('input[name=columns_count]:checked').val();
        columns = parseInt(columns, 10);
        set_preview_style(columns, 'numbering_style');
    }

    if (data == '1') {
        $('.preview_style').css('margin-left', '16px');
        var columns_style = $('input[name=columns_style]:checked').val();
        set_preview_style(1, columns_style);
    }
    if (data == '2') {
        $('.preview_style').css('margin-left', '55px');
        var columns_style = $('input[name=columns_style]:checked').val();
        set_preview_style(2, columns_style);
    }
    // if(data == '3')
    // { 
    //     $('.preview_style').css('margin-left','16px');
    //     var columns_style = $('input[name=columns_style]:checked').val();
    //     set_preview_style(3, columns_style);
    // }
}

function set_preview_style(count = 2, style = 'without_bullets') {
    $('#js_temlate_style1').empty();
    $('#js_temlate_style2').empty();
    $('#js_temlate_style3').empty();
    $('#modal_temlate_style1').empty();
    $('#modal_temlate_style2').empty();
    // $('#modal_temlate_style3').empty();
    //alert(style);
    if (style == 'without_bullets') {
        for (var i = 1; i <= count; i++) {
            $('#js_temlate_style' + i).append('Categories</br>Categories</br>Categories</br>Categories</br>Categories');
            $('#modal_temlate_style' + i).append('Categories</br>Categories</br>Categories</br>Categories</br>Categories');
        }
    }
    if (style == 'Dots_Bullets') {
        for (var i = 1; i <= count; i++) {
            $('#js_temlate_style' + i).append('&#8226 Categories</br>&#8226 Categories</br>&#8226 Categories</br>&#8226 Categories</br>&#8226 Categories');
            $('#modal_temlate_style' + i).append('&#8226 Categories</br>&#8226 Categories</br>&#8226 Categories</br>&#8226 Categories</br>&#8226 Categories');
        }
    }
    if (style == 'numbering_style') {
        $('.preview_style').css('margin-left', '45px');
        for (var i = 1; i <= count; i++) {
            $('#js_temlate_style' + i).append('1. Categories</br>2. Categories</br>3. Categories</br>4. Categories</br>5. Categories');
            $('#modal_temlate_style' + i).append('1. Categories</br>2. Categories</br>3. Categories</br>4. Categories</br>5. Categories');
        }
    }

}