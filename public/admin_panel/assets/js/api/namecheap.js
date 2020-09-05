$(document).ready(function () {
    chek_api_user();
    chek_api_key();
    buy_price(0);
});

function chek_api_key() {
    var error = '';
    if (document.getElementById('nc_api_key')) {
        var api_key = document.getElementById('nc_api_key').value;
        error = api_key.match(/[-\/\\^$*+?.()|[\]{}%!"@£#&_]/g);
        if (error != null || api_key.length == 0) {
            $('#api_field').css('border-color', 'red');
            set_style(false);
        } else {
            $('#api_field').css('border-color', '#dfe3e9');
            if (document.getElementById('api_user').value.length != 0) {
                set_style(true);
            }
        }
    }
}

function chek_api_user() {
    var error = '';
    if (document.getElementById('api_user')) {
        var api_key = document.getElementById('api_user').value;
        error = api_key.match(/[-\/\\^$*+?.()|[\]{}%!"@£#&_]/g);
        if (error != null || api_key.length == 0) {
            $('#user_field').css('border-color', 'red');
            set_style(false);
        } else {
            $('#user_field').css('border-color', '#dfe3e9');
            if (document.getElementById('nc_api_key').value.length != 0) {
                set_style(true);
            }
        }

    }
}

function set_style(status) {
    if (status == true) {
        $('#save_settings').css('background', '#39b54a');
        $('#save_settings').prop("disabled", false);
    } else {
        $('#save_settings').prop("disabled", true);
        $('#save_settings').css('background', '#516173');
    }
}

function set_dns_style(status) {
    if (status == true) {
        $('#add_dns_record').css('background', '#39b54a');
        $('#add_dns_record').prop("disabled", false);
    } else {
        $('#add_dns_record').prop("disabled", true);
        $('#add_dns_record').css('background', '#516173');
    }
}

function close_balance(form_id = '', btnid = '') {
    $('#' + form_id).css('display', 'none');
    $('#' + btnid).prop("disabled", true);
    setTimeout(function () {
        $('#' + btnid).prop("disabled", false);
    }, 1000);
}

function show_balance(form_id = '', btnid = '') {
    $('#amount_value').empty();
    var param = {
        get_balance: 'get_balance',
    };
    $.post('http://serp.farm/sitemanager2/index.php/APIs/NameCheap', param, function (data) {
        $('#amount_value').append("$ " + data.replace('USD', ''));
    });
    $('#show_balance').css('display', 'block');
    $("#show_balance").off("click", "#show_balance");
}

function show_about() {

    var param = {
        about: 'about',
    };
    $.post('http://serp.farm/sitemanager2/index.php/APIs/NameCheap', param, function (data) {
        $('#mail').empty();
        $('#fname').empty();
        $('#lname').empty();
        $('#addres').empty();
        $('#city').empty();
        $('#postal').empty();
        $('#country').empty();
        $('#telephone').empty();

        var obj = JSON.parse(data);

        $('#mail').append(obj.email_address);
        $('#fname').append(obj.first_name);
        $('#lname').append(obj.last_name);
        $('#addres').append(obj.address1);
        $('#city').append(obj.city);
        $('#postal').append(obj.postal_code);
        $('#country').append(obj.country);
        $('#telephone').append(obj.phone);
    });
    $('#show_about').css('display', 'block');
}

function close_about(form_id = '', btnid = '') {
    $('#' + form_id).css('display', 'none');
    $('#' + btnid).prop("disabled", true);
    setTimeout(function () {
        $('#' + btnid).prop("disabled", false);
    }, 1000);
}

function show_domain() {
    $('#add_domain_cont').css('display', 'block');
}

function close_domain_cont() {
    $('#add_domain_cont').css('display', 'none');
}

function check_namserver(id) {
    var ns1 = false;
    var ns2 = false;
    for (var i = 1; i <= 2; i++) {
        var namserver = document.getElementById("nameserver" + i).value;
        var error = namserver.match(/[\~\`\!\@\#\$\%\^\£\,\&\*\(\)\_\-\+\=\{\}\|\:\;\<\>\"\ˆ\'\?\/\\\\]+/g);
        if (error != null || namserver.length == 0) {
            if (i == id) {
                error_info("#check_nameserver" + id, false);
                $("#nameserver" + id).css('border-color', 'red');
            }
            if (i == 1) {
                ns1 = false;
            } else if (i == 2) {
                ns2 = false;
            }
        } else {
            if (i == id) {
                error_info("#check_nameserver" + id, true);
                $("#nameserver" + id).css('border-color', '#1bb934');
            }
            if (i == 1) {
                ns1 = true;
            } else if (i == 2) {
                ns2 = true;
            }
        }
    }
    if (ns1 == true && ns2 == true) {
        $("#save_settings").css('background-color', '#39b54a');
    } else {
        $("#save_settings").css('background-color', '#c5d0de');
    }
}


function error_info(id, status) {
    if (status === true) {
        $(id).removeClass("exists_d");
        $(id).removeClass("exists_d:before");
        $(id).addClass("not_exist_d");
        $(id).css('display', 'inline-block');
    } else if (status === false) {
        $(id).removeClass("not_exist_d");
        $(id).addClass("exists_d");
        $(id).addClass("exists_d:before");
        $(id).css('display', 'inline-block');
    }
}

function check_domain(id) {
    prepare_items();
    var domain_name = $('#domain_name' + id).val();
    var param = {
        domain_name: domain_name
    };
    $('#price' + id).empty();
    $('#price' + id).append('Wait...');
    $.post('http://serp.farm/sitemanager2/index.php/APIs/NameCheap', param, function (data) {
        //console.log(data);
        var obj = JSON.parse(data);

        var count = 0;
        var i;
        for (i in obj) {
            if (obj.hasOwnProperty(i)) {
                count++;
            }
        }

        if (count = 1) {
            if (obj[domain_name] == true) {
                if (id == 0) {
                    var name_id = 1;
                } else {
                    var name_id = id;
                }
                $('#rmo_add_domain').prop("disabled", false);
                $('#domain_name' + id).attr('name', name_id + "|" + obj['current_price'] + "|" + obj['regular_price']);
                $('#price' + id).empty();
                $('#regular' + id).empty();
                $('#form_size').css('width', '750px');
                $('#price' + id).append("$ " + obj['current_price'] + ' /year');
                $('#regular' + id).append('Regular $ ' + obj['regular_price'] + ' /year');
                $('#regular' + id).attr('price', obj['current_price']);
                $('#total_container').css('display', 'block');
                $('#price' + id).css('color', '#354052');
                error_info('#check_domain' + id, true)
                // $('#check_domain' + id).removeClass("exists_d");
                // $('#check_domain' + id).removeClass("exists_d:before");
                // $('#check_domain' + id).addClass("not_exist_d");
                // $('#check_domain' + id).css('display', 'inline-block');
                $('#domain_name' + id).css('border-color', '#1bb934');

            } else if (obj[domain_name] == 'false') {

                $('#domain_name' + id).attr('name', false);
                $('#price' + id).empty();
                $('#regular' + id).empty();
                $('#regular' + id).attr('price', '0.00');

                if (obj['current_price'] == 'Not available') {

                    $('#domain_name' + id).attr('name', false);
                    $('#price' + id).css('color', 'red');
                    $('#price' + id).css('font-size', '14px');
                    $('#price' + id).append('Domain not available');

                } else {

                    $('#form_size').css('width', '750px');
                    $('#price' + id).append("$ " + obj['current_price'] + ' year');
                    $('#regular' + id).append('Regular $ ' + obj['regular_price'] + ' /year');
                    $('#price' + id).css('color', '#354052');

                }

                $('#domain_name' + id).attr('name', false);
                error_info('#check_domain' + id, false)
                // $('#check_domain' + id).removeClass("not_exist_d");
                // $('#check_domain' + id).addClass("exists_d");
                // $('#check_domain' + id).addClass("exists_d:before");
                // $('#check_domain' + id).css('display', 'inline-block');
                $('#domain_name' + id).css('border-color', '#ed1c24');
            }

        } else if (count > 1) {
            alert();
        }
        $('#loader_container').css('display', 'none');
        total_price(clicks_counter('count'));
    });
}

$('#price0').css('color', '#7f8fa4');

function add_new_fields() {
    $new_id = clicks_counter('add_id');
    if ($new_id < 16) {
        var hieght = $('#form_size').css('height');
        hieght = hieght.replace('px', '');
        hieght = parseInt(hieght, 10) + 41;
        $('#form_size').css('height', hieght + 'px');
        var fields = "<input type='text' name='false' id='domain_name" + $new_id + "' class='add_new_domain' placeholder='example.com' oninput=" + 'colorize("domain_name' + $new_id + '",' + $new_id + ')' + " / > " +
            "<div id='check_domain" + $new_id + "' style='display: none;' data-description='Domain name is not available'></div>" +
            "<button class='btn btn-light-grey btn-small check_btn' type='button' id='chek_domain" + $new_id + "' onclick='check_domain(" + $new_id + ")' style='margin-left: 5px;'>Check</button>";
        var price_field = "<div class='domain_price' id='price" + $new_id + "' style='margin-top: 20px; color: #7f8fa4; margin-bottom: 22px;'>$ -.-- /year</div>" +
            "<div class='regular_price' id='regular" + $new_id + "' style='postision: relative !important; margin-left: 105px; margin-top: -37px;'  status='' price='0.00'> </div>";
        $('#add_new_fields').append(fields);
        $('#price_container').append(price_field);
    }
}

function clicks_counter(params = '') {
    var click_amount;
    var update_clicks;
    click_amount = $('#click_counter').attr('value');
    if (params == 'add_id') {
        update_clicks = parseInt(click_amount, 10) + 1;
        $('#click_counter').attr('value', update_clicks)
    } else if (params == 'count') {
        update_clicks = parseInt(click_amount, 10);
    }

    return update_clicks;
}

function total_price(total_fields) {

    var total_price = 0;

    if (total_fields == 0) {
        total_fields = 1;
    }
    for (var i = 0; i < total_fields; i++) {
        if (i >= 1) {
            id = i + 1;
        } else {
            id = i;
        }
        var price_tmp = $('#regular' + id).attr('price');
        total_price += parseFloat(price_tmp, 10);
    }
    if (total_price != 0 && total_price > 0) {
        $('#rmo_add_domain').css('background', '#39b54a');
    }
    $('#total_price').empty();
    $('#total_price').append("$ " + total_price + " /year");
}

function prepare_items() {
    $('#loader_container').css('display', 'inline-block');
    loader();
}

function buy_domains(total_fields) {
    prepare_items()
    //total_fields = clicks_counter('count');
    var total_domains = new Array();

    if (total_fields == 0) {
        total_fields = 1;
    }

    for (var i = 0; i <= total_fields; i++) {
        // if (i >= 1) {
        //     id = i + 1;
        // } else {
        id = i;
        //}
        var price_tmp = $('#current' + id).attr('price');
        var years = $('#years' + id).attr('value');
        if (parseFloat(price_tmp, 10) > 0) {
            var domain = $('#domain_name' + id).attr('value');
            if (domain.length > 0) {
                total_domains[i] = {
                    years: years,
                    domain: domain
                };
            }
        }
    }
    if (i > 0) {
        var param = {
            action: 'buy_domains',
            total_domains: total_domains
        };
        $.post('http://serp.farm/sitemanager2/index.php/APIs/buy_NC_domain', param, function (data) {
            $('#loader_container').css('display', 'none');
            console.log(data);
        });
    }
}

function loader() {
    var $loader = $('#loader'),
        max = 35,
        speed = 500,
        char = '<i>.</i>',
        count = 0,
        dots = function () {
            if (count <= max) {
                count++;
                for (var i = 0; i < 1; i++) {
                    $loader.append(char);
                    $loader.find('i').fadeIn(speed);
                }
            } else {
                $('#loader').empty();
                count = 0;
                clearInterval(dots);
            }
        };
    setInterval(dots, speed / 2);
}

function colorize(id, btnId) {
    //console.log(id);
    match == false;
    var val = $('#' + id).val();
    var match = val.match(/(\.[a-z]{2})/g);
    if (match && match.length >= 1) {
        match = true;
    }
    if (val.length > 3 && match === true) {
        $('#chek_domain' + btnId).css('background-color', '#516173');
    }
}

function select_menu(id) {
    $('#selected_menu').attr('value', id);
    $('#' + id).css('background-color', '#f1f4f8');
    $('#' + id).css('color', '#39b54a');
    var menu_ids = ["Registant", "Technical", "Admin-Info", "Billing-Info"];

    menu_ids.forEach(function (item) {
        if (item != id) {
            $('#' + item).css('background-color', 'white');
            $('#' + item).css('color', '#b0b0b1');
        }
    });
}

function save_user_info() {
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var address1 = document.getElementById('address1').value;
    var city = document.getElementById('city').value;
    var state_province = document.getElementById('state_province').value;
    var postal_code = document.getElementById('postal_code').value;
    var country = document.getElementById('country').value;
    var phone = document.getElementById('phone').value;
    var email_address = document.getElementById('email_address').value;
    var selected_menu = document.getElementById('selected_menu').value;
    var param = {
        action: 'save_contacts',
        first_name: first_name,
        last_name: last_name,
        address1: address1,
        city: city,
        state_province: state_province,
        postal_code: postal_code,
        country: country,
        phone: phone,
        email_address: email_address,
        selected_menu: selected_menu
    };
    $.post('http://serp.farm/sitemanager2/index.php/APIs/buy_NC_domain', param, function (data) {
        $('#loader_container').css('display', 'none');
        alert(data);
    });
}

function set_years(counter) {
    document.getElementById('years' + counter).setAttribute('value', document.getElementsByClassName('rmo' + counter + ' js-dropdown-item dropdown-list-item selected')[0].getAttribute('value'));
    if (document.getElementById('set_years' + counter)) {
        document.getElementById('set_years' + counter).setAttribute('value', document.getElementsByClassName('rmo' + counter + ' js-dropdown-item dropdown-list-item selected')[0].getAttribute('value'));
    }
    set_price(counter);
}

function set_price(counter) {
    var regular_price = $('#regular' + counter).attr('value');
    var current_price = $('#current' + counter).attr('value');
    var years = $('#years' + counter).attr('value');
    regular_price = parseFloat(regular_price, 10);
    current_price = parseFloat(current_price, 10);
    years = parseInt(years, 10);
    if (years > 1) {
        var total = current_price + (regular_price * (years - 1));
    } else {
        total = current_price;
    }
    if ($('#current' + counter)) {
        $('#current' + counter).attr('price', total.toFixed(2));
        setTimeout(function () {
            buy_price(counter);
        }, 500);
    }
    $('#current' + counter).text("$ " + total.toFixed(2));
}

function chek_usr_info(id, chekId, error_status) {
    var error = '';
    if (document.getElementById(chekId)) {
        var api_key = document.getElementById(chekId).value;
        if (chekId == 'email_address') {
            var rule = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var user_mail = document.getElementById(chekId).value;
            if (rule.test(user_mail) == true) {
                error_info('#' + error_status, true);
                $('#' + id).css('border-color', '#dfe3e9');
            } else {
                error_info('#' + error_status, false);
                $('#' + id).css('border-color', 'red');
            }
        } else {
            error = api_key.match(/[\/\\^$*?()|[\]{}%!"'@£#&_]/g);
            if (error != null || api_key.length == 0) {
                $('#' + id).css('border-color', 'red');
                error_info('#' + error_status, false);
            } else {
                error_info('#' + error_status, true);
                $('#' + id).css('border-color', '#dfe3e9');
            }
        }
    }
}

function buy_price(counter) {
    var total = 0.0;
    if ($('#current' + counter)) {
        var total_fields = $('#total_fields').attr('value');
        total_fields = parseInt(total_fields, 10);
        if (total_fields == 0) {
            total_fields = 1;
        }
        for (var i = 0; i <= total_fields; i++) {
            if ($('#current' + i).attr('price')) {
                var current = $('#current' + i).attr('price');
                total = total + parseFloat(current, 10);
            }
        }
        $('#total_price').empty();
        $('#total_price').append('$ ' + total.toFixed(2));
    }
}