<?php 
if(current_url() == base_url()){
?>
<script>
// Get the modal
var modal = document.getElementById('trial');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];   
var expired = "<?php if(isset($expired)){print $expired;} ?>";
//var time_left = "<?php print $time_left; ?>";
if(expired == true){
    //$("#modal_text").append("time left: "+time_left+" days");
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

<?php } 
?>
<script>
var blocked_user = "<?php print $block_user; ?>";
if(blocked_user == true){
    var windowHeight = $(window).height();
    var boxHeight = $('.blocked_modal-content').height();
    $('.blocked_modal-content').css({'margin-top' : ((windowHeight - boxHeight )/4)});
    var modal = document.getElementById('blocked_user');
        modal.style.display = "block";
}else{
var modal = document.getElementById('trial');
function popup(){
    var modal = document.getElementById('trial');
    modal.style.display = "block";
}
var span = document.getElementsByClassName("close")[0];   
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}
</script>
