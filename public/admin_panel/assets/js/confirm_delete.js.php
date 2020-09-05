<script>
    function rmo_delete(value, item, subject){
       document.getElementById('confirmation_text').setAttribute("link", value);
        var confirm_text = "Now You want to delete "+subject+" ("+item+")?";
         $("#confirm_text").append(confirm_text);
    var modal_confirm = document.getElementById('confirm_delete');
        modal_confirm.style.display = "block"; 
       
}
button = document.getElementById("confirmation_text");
button.addEventListener("input", function(){
    if(document.getElementById('confirmation_text').value == "DELETE"){
        $('.confrim_btn').css('background-color','#39b54a');
        $('.input_style').css('border-color','#39b54a');
    }else{
        $('.confrim_btn').css('background-color','#516173');
        $('.input_style').css('border-color','#dfe3e9');
    }
    });
    // function confirm_delete(){
    //     var check_text = document.getElementById('confirmation_text').value;
    //     if(check_text == "DELETE"){
    //          var url = document.getElementById('confirmation_text').getAttribute("link");
    //         if(url && url.length>1){
    //          $.post(url, param='', function (data) {
    //          location.reload();
    //          });
    //         }
    //     }
    // }
    function confirm_delete(){
        var check_text = document.getElementById('confirmation_text').value;
        if(check_text == "DELETE"){
             var url = document.getElementById('confirmation_text').getAttribute("link");
            if(url && url.length>1){
                
                if($('#delete_db')+bkid){
                    var bkid = url.substr(url.lastIndexOf('/') + 1);
                    var delete_db = 0;
                    var delete_files = 0;
                    if($('#delete_db'+bkid).prop('checked') == true){
                        var delete_db = 1;
                    }else{
                        var delete_db = 0;
                    }
                    if($('#delete_files'+bkid).prop('checked') == true){
                        var delete_files = 1;
                    }else{
                        var delete_files = 0;
                    }
                    var param = {
                        delete_files: delete_files,
                        delete_db: delete_db
                    }
                }
                else{
                    var param = '';
                } 

             $.post(url, param, function (data) {
            //     alert(data);
             location.reload();
             });
            }
        }
    }
</script>