function chek_text() {
    var cat_name = $('#bs_name').text();
    if (cat_name != 'Selected category here' && cat_name.length > 3) {
        $('#submit-btn').prop('disabled', false);
        $('#submit-btn').css('background-color', '#39b54a');
    }
}

function select_category(id = 0, id2 = 0) {
    var category = $('#' + id).text();
    $('#' + id2).attr('value', category);
    var post_name = $('#post_name').val();
    if (id2 == 'business_name' && post_name.length > 0) {
        $('#submit-btn').prop('disabled', false);
        $('#submit-btn').css('background-color', '#39b54a');
    }

}

function test_tablet() {
    // $('#instruction_text').css('width', '130px');
    // $('#drag_var').css('width', '100px');
    // $('#input_style').css('max-width', '400px');
    // $('#vars_cont').css('max-width', '100px');
    // $('.input').css('width','350px');
    // $('#textarea').css('width','350px');
    $('#desktop_preview').css('position', 'relative');
}

function test_desktop() {
    // $('.input').css('width','510px');
    // $('#drag_var').css('width', '500px');
    // $('#vars_cont').css('max-width', '351px');
    // $('#input_style').css('max-width', '550px');
    // $('#textarea').css('width','510px');
    // $('#instruction_text').css('width', '300px');
    $('#desktop_preview').css('position', 'absolute');
}
$(function () {
    window.onresize = function (event) {
        var width = $(window).width();
        if (width <= 1024) {
            test_tablet();
        } else {
            test_desktop();
        }
    }
    var width = $(window).width();
    if (width <= 1024) {
        test_tablet();
    } else {
        test_desktop();
    }
});

function set_text(id = 0) {
    if (id == 'business_name') {
        var text = $('#business_name').val();
        if (text.length == 0) {
            $('#js_temlate_style11').text("White House");
            $('#js_temlate_style1').text("White House");
        } else {
            $('#js_temlate_style11').text(text);
            $('#js_temlate_style1').text(text);
        }
    }
    if (id == 'website') {
        var text = $('#website').val();
        if (text.length == 0) {
            $('#js_temlate_style33').text("www.whitehouse.org");
            $('#js_temlate_style3').text("www.whitehouse.org");
        } else {
            $('#js_temlate_style33').text(text);
            $('#js_temlate_style3').text(text);
        }
    }
    if (id == 'phone') {
        var text = $('#phone').val();
        if (text.length == 0) {
            $('#js_temlate_style22').text("202-456-1414");
            $('#js_temlate_style2').text("202-456-1414");
        } else {
            $('#js_temlate_style22').text(text);
            $('#js_temlate_style2').text(text);
        }
    }
    if (id == 'address') {
        var text = $('#address').val();
        if (text.length == 0) {
            $('#js_temlate_style44').text("1600 Pennsylvania Avenue\n\r\nNW Washington, D.C. 20500 U.S.");
            $('#js_temlate_style4').text("1600 Pennsylvania Avenue\n\r\nNW Washington, D.C. 20500 U.S.");
        } else {
            $('#js_temlate_style44').text(text);
            $('#js_temlate_style4').text(text);
        }
    }
    if (id == 'description') {
        var text = $('#description').val();
        if (text.length == 0) {
            $('#js_temlate_style55').text("The White House is the home and main workplace of president of thr United States. The house was designed by Irish-born James Hoban. It Is at 1600 Pensnsylvania Avenue in Washington, D.C. ... ");
            $('#js_temlate_style5').text("The White House is the home and main workplace of president of thr United States. The house was designed by Irish-born James Hoban. It Is at 1600 Pensnsylvania Avenue in Washington, D.C. ... ");
        } else {
            $('#js_temlate_style55').text(text);
            $('#js_temlate_style5').text(text);
        }
    }
}