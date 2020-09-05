document.getElementById('uploaded_file').addEventListener("change", function () {
    var file_name = $('input[type=file]').val().split('\\').pop();
    $('#selected_file').empty();
    $('#selected_file').append(file_name);
    //$('#selected_uploaded_file').attr("value", file_name);
    var empty_f = $('#uploaded_file').val();
    if (empty_f.length > 1 && $('input:checked').val() == 3) {
        set_dns_style(true);
    }
    if (empty_f.length && $('input:checked').val() == 2) {
        var pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,10}(:[0-9]{1,10})?(\/.*)?$/
        var domain = document.getElementById('Domain_Name').value;
        if (pattern.test(domain) == true) {
            $('#domain_field').css('border-color', '#dfe3e9');
            set_dns_style(true);
        }
    }
});

//form switcher
$('input:radio').on('click', function (e) {
    var empty_f = $('#uploaded_file').val();
    if (e.currentTarget.name == 'radio' && e.currentTarget.value == 1) {
        $('#selected_settings').attr('value', '1');
        display_block();
        $('#1b').css('color', '#354052');
        $('#2b').css('color', '#7f8fa4');
        $('#3b').css('color', '#7f8fa4');
        $('#1b').css('font-weight', '500');
        $('#2b').css('font-weight', '350');
        $('#3b').css('font-weight', '350');
        $('#add_dns_record').css('display', 'block');
        $('#upload_config').css('display', 'none');
        $('#empty_fields').css('display', 'none');
        $('#cf_add_domain').css('height', '365px');
    } else if (e.currentTarget.name == 'radio' && e.currentTarget.value == 2) {
        $('#selected_settings').attr('value', '2');
        var pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,10}(:[0-9]{1,10})?(\/.*)?$/
        var domain = document.getElementById('Domain_Name').value;
        if (empty_f.length && pattern.test(domain) == true && domain.length > 1) {
            $('#domain_field').css('border-color', '#dfe3e9');
            set_dns_style(true);
        } else {
            set_dns_style(false);
        }
        display_none();
        $("#load_file").attr("href", "http://serp.farm/sitemanager2/APIs/download_files/Records.txt");
        $('#load_file').empty();
        $('#load_file').append('Download Sample file records.txt  <span class="link_animation"></span>');
        $('#1b').css('color', '#7f8fa4');
        $('#2b').css('color', '#354052');
        $('#3b').css('color', '#7f8fa4');
        $('#2b').css('font-weight', '500');
        $('#1b').css('font-weight', '350');
        $('#3b').css('font-weight', '350');
        $('#cf_add_domain').css('height', '210px');
        $('#domain_fields').css('display', 'block');
        $('#upload_config').css('display', 'block');
        $('#empty_fields').css('display', 'none');
    } else if (e.currentTarget.name == 'radio' && e.currentTarget.value == 3) {
        if (empty_f.length) {
            set_dns_style(true);
        } else {
            set_dns_style(false);
        }
        $('#selected_settings').attr('value', '3');
        display_none();
        $("#load_file").attr("href", "http://serp.farm/sitemanager2/APIs/download_files/CF-domains.txt");
        $('#load_file').empty();
        $('#load_file').append('Download Sample file domains.txt  <span class="link_animation"></span>');
        $('#1b').css('color', '#7f8fa4');
        $('#2b').css('color', '#7f8fa4');
        $('#3b').css('color', '#354052');
        $('#3b').css('font-weight', '500');
        $('#2b').css('font-weight', '350');
        $('#1b').css('font-weight', '350');
        $('#upload_config').css('display', 'block');
        $('#empty_fields').css('display', 'block');
        $('#domain_fields').css('display', 'none');
        $('#cf_add_domain').css('height', '120px');
    }
});

$('#add_dns_record').prop("disabled", true);
$('#1b').css('color', '#354052');
$('#2b').css('color', '#7f8fa4');
$('#3b').css('color', '#7f8fa4');
$('#1b').css('font-weight', '500');
$('#2b').css('font-weight', '350');
$('#3b').css('font-weight', '350');
chek_api_key();
check_user_email();

function display_none() {
    $('#custom-checkbox').css('display', 'none');
    $('#server_ip_fields').css('display', 'none');
    $('#record_type_fields').css('display', 'none');
    $('#ttl_filds').css('display', 'none');
}

function display_block() {
    $('#domain_fields').css('display', 'block');
    $('#custom-checkbox').css('display', 'inline-block');
    $('#server_ip_fields').css('display', 'block');
    $('#record_type_fields').css('display', 'block');
    $('#ttl_filds').css('display', 'block');
}

function check_subdomain() {
    var error = '';
    var api_key = document.getElementById('SubDomain').value;
    error = api_key.match(/[-\/\\^$*+?.()|[\]{}%!"@£#&_]/g);
    if (error != null || api_key.length == 0) {
        $('#SubDomain_field').css('border-color', 'red');
        set_dns_style(false);
    } else {
        set_dns_style(true);
    }
}

function chek_api_key() {
    var error = '';
    var api_key = document.getElementById('cf_api_key').value;
    error = api_key.match(/[-\/\\^$*+?.()|[\]{}%!"@£#&_]/g);
    if (error != null || api_key.length == 0) {
        $('#api_field').css('border-color', 'red');
        set_style(false);
    } else {
        $('#api_field').css('border-color', '#dfe3e9');
        if (document.getElementById('user_mail').value.length != 0) {
            set_style(true);
        }
    }
}

function check_user_email() {
    var rule = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var user_mail = document.getElementById('user_mail').value;
    if (rule.test(user_mail) == true) {
        $('#mail_field').css('border-color', '#dfe3e9');
        if (document.getElementById('cf_api_key').value.length != 0) {
            set_style(true);
        }
    } else {
        $('#mail_field').css('border-color', 'red');
        set_style(false);
    }
}

function validate_domain() {
    var pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,10}(:[0-9]{1,10})?(\/.*)?$/
    var domain = document.getElementById('Domain_Name').value;
    if (pattern.test(domain) == true) {
        $('#domain_field').css('border-color', '#dfe3e9');
        if (document.getElementById('ip_address').value.length != 0) {
            set_dns_style(true);
        }
    } else {
        $('#domain_field').css('border-color', 'red');
        set_dns_style(false);
    }
}

function validate_ip() {
    var pattern = /^(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})(.(25[0-5]|2[0-4][0-9]|1?[0-9]{1,3})){3}$/
    var ip_address = document.getElementById('ip_address').value;
    if (pattern.test(ip_address) == true) {
        $('#ip_field').css('border-color', '#dfe3e9');
        if (document.getElementById('Domain_Name').value.length != 0) {
            set_dns_style(true);
        }
    } else {
        $('#ip_field').css('border-color', 'red');
        set_dns_style(false);
    }
}

// function validate_ttl()
// {
//     var ttl = document.getElementById('ttl').value;
//     if(ttl < 120)
//     {
//         $('#feild_ttl').css('border-color','red')
//         set_dns_style(false);
//     }
//     else
//     {
//         $('#feild_ttl').css('border-color','#dfe3e9')
//         if(document.getElementById('Domain_Name').value.length != 0 && document.getElementById('ip_address').value.length != 0)
//         { 
//             set_dns_style(true);
//         }
//     }
// }

document.getElementById('select_type').addEventListener("click", function () {
    document.getElementById('h_record_type').setAttribute('value', document.getElementsByClassName('rmo js-dropdown-item dropdown-list-item selected')[0].getAttribute('value'));
});
document.getElementById('select_ttl').addEventListener("click", function () {
    document.getElementById('ttl').setAttribute('value', document.getElementsByClassName('ttl js-dropdown-item dropdown-list-item selected')[0].getAttribute('value'));
});
document.getElementById('checkbox').addEventListener("click", function () {
    if (document.getElementById('checkbox').checked == true) {
        $('#subdomain').css('display', 'block');
        $('#cf_add_domain').css('height', '443px');
    } else {
        $('#subdomain').css('display', 'none');
        $('#cf_add_domain').css('height', '365px');
    }
});

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