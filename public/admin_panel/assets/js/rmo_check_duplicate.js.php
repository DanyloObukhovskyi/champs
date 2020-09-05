
<script>
    var domainlist  = '';
    domainlist = '<?php echo json_encode($domain_list);  ?>';
document.getElementById('server_id2').addEventListener("click", function () {
    document.getElementById('server_id').setAttribute('value', document.getElementsByClassName('js-dropdown-item dropdown-list-item selected')[0].getAttribute('value'));
    if(document.getElementById('hid_server_session')){
        document.getElementById('hid_server_session').setAttribute('value', document.getElementsByClassName('js-dropdown-item dropdown-list-item selected')[0].getAttribute('value'));
    }
});
if(document.getElementById('select_group'))
{
    document.getElementById('select_group').addEventListener("click", function () {
    document.getElementById('group_id').setAttribute('value', document.getElementsByClassName('rmo js-dropdown-item dropdown-list-item selected')[0].getAttribute('value'));
    });
}


document.getElementById('domain').addEventListener("change", function () {
    var duplicate_domain = '';
    domain_name = document.getElementById('domain').value;
    JSON.parse(domainlist).forEach(function (item, i, arr) {
        //console.log(item);
        domain_name = domain_name.replace(/\s/g,'');
        if (item == domain_name) {
            duplicate_domain = item;
        }
    });
    if (duplicate_domain.length) {
        $('#error').empty();
        $('#error').append('domain ' + duplicate_domain + ' already added');
        $('#notification-2').css('display', 'block');
        $('#submit-btn').css('background-color', '#c5d0de');
        document.getElementById('submit-btn').disabled = true;
        $('#ip_address').addClass("has-error");
    } else {
        $('#error').empty();
        $('#notification-2').css('display', 'none');
        $('#submit-btn').css('background-color', '#39b54a');
        $('#ip_address').removeClass("has-error");
        document.getElementById('submit-btn').disabled = false;
    }
    if(document.getElementById('server_id').getAttribute('value') == null){
        $('#submit-btn').css('background-color', '#c5d0de');
        document.getElementById('submit-btn').disabled = true;
    }

});

    document.getElementById('add_domain_list').addEventListener("change", function () {

var file = document.getElementById("add_domain_list").files[0];
var reader = new FileReader();
reader.onload = function (e) {
    var textArea = document.getElementById("lists_domain");
    textArea.value = e.target.result;
    var duplicate_domain = '';
    domain_name = $('#lists_domain').val().split('\n')
    //console.log(domain_name );
    JSON.parse(domainlist).forEach(function (item, i, arr) {
        //console.log(item);
        domain_name.forEach(function (item2, i2, arr2) {
            item2 = item2.replace(/\s/g,'');
            if (item2 == item) {
                duplicate_domain = item;
            }
        });
    });
    if (duplicate_domain.length) {
        $('#error').empty();
        $('#error').append('domain ' + duplicate_domain + ' already added');
        $('#notification-2').css('display', 'block');
        $('#submit-btn').css('background-color', '#c5d0de');
        document.getElementById('submit-btn').disabled = true;
        $('#lists_domain').addClass("has-error");
    } else {
        $('#error').empty();
        $('#notification-2').css('display', 'none');
        $('#submit-btn').css('background-color', '#39b54a');
        $('#lists_domain').removeClass("has-error");
        document.getElementById('submit-btn').disabled = false;
    }
    if( document.getElementById('server_id').getAttribute('value')  == null ){
        $('#submit-btn').css('background-color', '#c5d0de');
        document.getElementById('submit-btn').disabled = true;
    }
};
reader.readAsText(file);

});
    

document.getElementById('lists_domain').addEventListener("change", function () {
    
    var duplicate_domain = '';
    domain_name = $('#lists_domain').val().split('\n')
    JSON.parse(domainlist).forEach(function (item, i, arr) {
        //console.log(item);
        domain_name.forEach(function (item2, i2, arr2) {
            item2 = item2.replace(/\s/g,'');
            if (item2 == item) {
                duplicate_domain = item;
            }
        });
    });
    if (duplicate_domain.length) {
        $('#error').empty();
        $('#error').append('domain ' + duplicate_domain + ' already added');
        $('#notification-2').css('display', 'block');
        $('#submit-btn').css('background-color', '#c5d0de');
        document.getElementById('submit-btn').disabled = true;
        $('#lists_domain').addClass("has-error");
    } else {
        $('#error').empty();
        $('#notification-2').css('display', 'none');
        $('#submit-btn').css('background-color', '#39b54a');
        $('#lists_domain').removeClass("has-error");
        document.getElementById('submit-btn').disabled = false;
    }
    if( document.getElementById('server_id').getAttribute('value')  == null ){
        $('#submit-btn').css('background-color', '#c5d0de');
        document.getElementById('submit-btn').disabled = true;
    }
});

document.getElementById('server_id2').addEventListener("click", function () {
if(document.getElementById('server_id').getAttribute('value') != null){
        document.getElementById('submit-btn').disabled = false;
        $('#submit-btn').css('background-color', '#39b54a');
}else{
    document.getElementById('submit-btn').disabled = true;
        $('#submit-btn').css('background-color', '#c5d0de');
}
});
//}
//});

</script>
 <script>
//     //  if (!document.getElementById('checkbox').checked) {
//     //      if (document.getElementById('domain').value.length) {
//     //            var count_domain = document.getElementById('domain').value;
//     //            count_domain = count_domain.split(/\\r\\n?|\\n/);
//     //             }
//     //           } else {
//     //            var count_domain = document.getElementById('lists_domain').value;
//     //             count_domain = count_domain.split(/\\r\\n?|\\n/);
//     //            }
//     //            var count_title = document.getElementById('wp_title').value.split(/\\r\\n?|\\n/);
//     //            if(count_title.length != count_domain.length){
//     //                alert();
//     //            }
//     //document.getElementsByClassname('js-dropdown-item dropdown-list-item selected').attr = 'id';
//     var domainlist  = '';
//     domainlist = '<?php echo json_encode($domain_list);  ?>';
// //document.getElementById('checkbox').addEventListener("change", function(){
// //if(!document.getElementById('checkbox').checked){
// document.getElementById('server_id2').addEventListener("click", function () {
//     document.getElementById('server_id').setAttribute('value', document.getElementsByClassName('js-dropdown-item dropdown-list-item selected')[0].getAttribute('value'));
// });
// if(document.getElementById('hid_server_session')){
//         document.getElementById('hid_server_session').setAttribute('value', document.getElementsByClassName('js-dropdown-item dropdown-list-item selected')[0].getAttribute('value'));
//     }
// document.getElementById('select_group').addEventListener("click", function () {
//     document.getElementById('group_id').setAttribute('value', document.getElementsByClassName('rmo js-dropdown-item dropdown-list-item selected')[0].getAttribute('value'));
//     // alert(document.getElementsByClassName('js-dropdown-item dropdown-list-item selected')[0].getAttribute('value'));
// });

// document.getElementById('domain').addEventListener("change", function () {
//     var duplicate_domain = '';
//     domain_name = document.getElementById('domain').value;
//     JSON.parse(domainlist).forEach(function (item, i, arr) {
//         //console.log(item);
//         domain_name = domain_name.replace(/\s/g,'');
//         if (item == domain_name) {
//             duplicate_domain = item;
//         }
//     });
//     if (duplicate_domain.length) {
//         $('#error').empty();
//         $('#error').append('domain ' + duplicate_domain + ' already added');
//         $('#notification-2').css('display', 'block');
//         $('#submit-btn').css('background-color', '#c5d0de');
//         document.getElementById('submit-btn').disabled = true;
//         $('#ip_address').addClass("has-error");
//     } else {
//         $('#error').empty();
//         $('#notification-2').css('display', 'none');
//         $('#submit-btn').css('background-color', '#39b54a');
//         $('#ip_address').removeClass("has-error");
//         document.getElementById('submit-btn').disabled = false;
//     }
//     if(document.getElementById('server_id').getAttribute('value') == null){
//         $('#submit-btn').css('background-color', '#c5d0de');
//         document.getElementById('submit-btn').disabled = true;
//     }

// });
// //}
// //else{ 

//     document.getElementById('add_domain_list').addEventListener("change", function () {

// var file = document.getElementById("add_domain_list").files[0];
// var reader = new FileReader();
// reader.onload = function (e) {
//     var textArea = document.getElementById("lists_domain");
//     textArea.value = e.target.result;
//     var duplicate_domain = '';
//     domain_name = $('#lists_domain').val().split('\n')
//     //console.log(domain_name );
//     JSON.parse(domainlist).forEach(function (item, i, arr) {
//         //console.log(item);
//         domain_name.forEach(function (item2, i2, arr2) {
//             item2 = item2.replace(/\s/g,'');
//             if (item2 == item) {
//                 duplicate_domain = item;
//             }
//         });
//     });
//     if (duplicate_domain.length) {
//         $('#error').empty();
//         $('#error').append('domain ' + duplicate_domain + ' already added');
//         $('#notification-2').css('display', 'block');
//         $('#submit-btn').css('background-color', '#c5d0de');
//         document.getElementById('submit-btn').disabled = true;
//         $('#lists_domain').addClass("has-error");
//     } else {
//         $('#error').empty();
//         $('#notification-2').css('display', 'none');
//         $('#submit-btn').css('background-color', '#39b54a');
//         $('#lists_domain').removeClass("has-error");
//         document.getElementById('submit-btn').disabled = false;
//     }
//     if( document.getElementById('server_id').getAttribute('value')  == null ){
//         $('#submit-btn').css('background-color', '#c5d0de');
//         document.getElementById('submit-btn').disabled = true;
//     }
// };
// reader.readAsText(file);

// });
    

// document.getElementById('lists_domain').addEventListener("change", function () {
    
//     var duplicate_domain = '';
//     domain_name = $('#lists_domain').val().split('\n')
//     JSON.parse(domainlist).forEach(function (item, i, arr) {
//         //console.log(item);
//         domain_name.forEach(function (item2, i2, arr2) {
//             item2 = item2.replace(/\s/g,'');
//             if (item2 == item) {
//                 duplicate_domain = item;
//             }
//         });
//     });
//     if (duplicate_domain.length) {
//         $('#error').empty();
//         $('#error').append('domain ' + duplicate_domain + ' already added');
//         $('#notification-2').css('display', 'block');
//         $('#submit-btn').css('background-color', '#c5d0de');
//         document.getElementById('submit-btn').disabled = true;
//         $('#lists_domain').addClass("has-error");
//     } else {
//         $('#error').empty();
//         $('#notification-2').css('display', 'none');
//         $('#submit-btn').css('background-color', '#39b54a');
//         $('#lists_domain').removeClass("has-error");
//         document.getElementById('submit-btn').disabled = false;
//     }
//     if( document.getElementById('server_id').getAttribute('value')  == null ){
//         $('#submit-btn').css('background-color', '#c5d0de');
//         document.getElementById('submit-btn').disabled = true;
//     }
// });

// document.getElementById('server_id2').addEventListener("click", function () {
// if(document.getElementById('server_id').getAttribute('value') != null){
//         document.getElementById('submit-btn').disabled = false;
//         $('#submit-btn').css('background-color', '#39b54a');
// }else{
//     document.getElementById('submit-btn').disabled = true;
//         $('#submit-btn').css('background-color', '#c5d0de');
// }
// });
// //}
// //});

// </script>