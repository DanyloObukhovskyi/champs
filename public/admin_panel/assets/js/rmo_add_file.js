document.getElementById('add_title_list').addEventListener("change", function () {
    var file = document.getElementById("add_title_list").files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var textArea = document.getElementById("wp_title");
        textArea.value = e.target.result;
    };
    reader.readAsText(file);
});