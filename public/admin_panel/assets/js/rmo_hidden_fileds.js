$('#wp-login').ready(function () {
    // console.log( "<?php echo $wp_email['value']; ?>" );
    document.getElementById('form-more-btn').addEventListener("click", function () {
        $('#wp_email').val("<?php echo $wp_email['value']; ?>");
        $('#wp-login').val("<?php echo $wp_login['value']; ?>");
        $('#wp_password').val("<?php echo $wp_password['value']; ?>");
        $('#wp_title').val("<?php echo $wp_title['value']; ?>");
    });
    // document.getElementById('domain').addEventListener("change", function(){
    //     $('#wp_email').val("<?php //echo $wp_email['value']; ?>");
    //     $('#wp-login').val("<?php// echo $wp_login['value']; ?>");
    //     $('#wp_password').val("<?php //echo $wp_password['value']; ?>");
    //     $('#wp_title').val("<?php //echo $wp_title['value']; ?>");
    // });
});