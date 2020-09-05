window.addEventListener('load', function() {
	document.querySelector('input[type="file"]').addEventListener('change', function() {
		if (this.files && this.files[0]) {
			
			var url = URL.createObjectURL(this.files[0]);
			if (this.files[0].type != "image/jpg" && this.files[0].type != "image/jpeg" && this.files[0].type != "image/png") {
				return;
			}
			
			$("#img_name").empty();
			$("#img_name").append(this.files[0].name);
			$("#upload_data").css("display", "inline-block");
			$("#img_preview").attr("src", url);
			
			var fd = new FormData();
			fd.append('userfile', this.files[0]);
			$.ajax({
				url: upload_url,
				type: 'post',
				data: fd,
				contentType: false,
				processData: false,
				success: function (response) {
				
				},
				error: function (response) { // error callback
					console.log(response);
					alert("Error");
				}
			});
		}
	});
});
