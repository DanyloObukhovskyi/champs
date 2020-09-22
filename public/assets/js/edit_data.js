var canEdit = false;
var TMP_Value = "";

$(document).ready(function () {
	var identity = getCookie("identity");
	var remember_code = getCookie("remember_code");
	if (identity != null && remember_code != null) {
		if (identity.length > 3 && remember_code.length > 5) {
			checkUser(identity, remember_code);
		}
	}
});


function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function checkUser(identity = "", remember_code = "") {
	if (identity.length > 3 && remember_code.length > 5) {
		let post_data = {
			ajax_check: true,
			identity: identity,
			remember_code: remember_code
		};
		let url = "https://champs.pro/admin_panel/index.php/c-admin/ajax/check/";
		$.post(url, post_data, function (answer) {
			if (JSON.parse(answer) == "true_3215") {
				canEdit = true;
			}
		});
	}
}

function EditData(element, flag = "") {
	if (canEdit == true) {
		OnEdit(element, flag);
		return;
	}
}

function OnEdit(element, flag = "") {
	TMP_Value = "";
	let issetEdit = document.querySelectorAll("#EditPopUp");
	if (issetEdit.length == 0) {
		var popup = document.createElement('div');
		popup.id = "EditPopUp";
		if (flag == "svg") {
			var c_value = element.innerHTML;
			c_value = c_value.split(" - ");
			if(c_value[0]){
				if(c_value[1]){
					TMP_Value = c_value[1];
				}
				c_value = c_value[0];
			} else {
				var c_value = element.innerHTML;
			}
		} else if (flag == "svg2") {
			var c_value = element.getAttribute('attr-row-rating');
		} else if (flag == "flag") {
			var c_value = element.getAttribute('attr-value');
			let flags = All_Flags;
			popup.style = "width: 285px; font-size: 13px; font-weight: 400; position: absolute; padding: 10px; margin-top: 0px;display: block; height: 63px; border-radius: 5px; z-index: 9991;background-color: rgba(40, 28, 1, 0.63);";
			popup.innerHTML = "<div style='width: 160px; display: inline-block; margin-right: 10px;'> <select style='width: 140px;' id='current_edit_V'>" +
				"</select></div>" +
				"<input type='button' id='closeEdit' onclick='closeEdit()' value='X' style='width: 25px; margin: 10px;  margin-right: 5px; margin-left: 5px;z-index: 9992; border-radius: 5px;border: none; background: white;'> " +
				"<input type='button' id='saveEdit' value='Ok' onclick='SaveEdit()' style='width: 35px; z-index: 9992; border-radius: 5px;border: none; background: white;'>";
			element.classList.add("opened_edit");
			element.parentNode.append(popup);
			flags.forEach(function (item, i, arr) {
				if (item.id == c_value) {
					$("#current_edit_V").append("<option value=" + item.id + " selected>" + item.orig_name + "</option>");
				} else {
					$("#current_edit_V").append("<option value=" + item.id + ">" + item.orig_name + "</option>");
				}

			});

			return;
		} else if (flag == "date") {
			var c_value = element.getAttribute('attr-value');
		} else if (flag == "img" || flag == "img2") {
			popup.style = "width: 50px;font-size: 13px; font-weight: 400; position: absolute; padding: 10px; margin-top: 10px;display: block; height: 34px; border-radius: 5px; z-index: 9991;background-color: rgba(40, 28, 1, 0.63);";
			popup.innerHTML = '<input id="upload_imgs" type="file" accept="image/jpeg,image/png" name="userfile" style="opacity: 0" value="Upload"/>' +
				"<input type='button' id='closeEdit' onclick='closeEdit()' value='X' style='width: 25px; padding-left: 7px; height: 25px; margin-left: 3px;z-index: 9992; top: -30px; border-radius: 5px;border: none; background: white;'> ";
			if (flag == "img2") {
				element.parentNode.parentNode.append(popup);
			} else {
				element.parentNode.append(popup);
			}

			$('#upload_imgs').trigger('click');
			element.classList.add("opened_edit");
			addListener();
			return;
		} else {
			var c_value = element.innerText;
		}

		popup.style = "width: 285px; font-size: 13px; font-weight: 400; position: absolute; padding: 10px; margin-top: 0px;display: block; height: 63px; border-radius: 5px; z-index: 9991;background-color: rgba(40, 28, 1, 0.63);";
		popup.innerHTML = "<input type='text' id='current_edit_V' value='" + c_value + "' style='width: 180px;'> " +
			"<input type='button' id='closeEdit' onclick='closeEdit()' value='X' style='width: 25px; margin: 10px;  margin-right: 5px; margin-left: 5px;z-index: 9992; border-radius: 5px;border: none; background: white;'> " +
			"<input type='button' id='saveEdit' value='Ok' onclick='SaveEdit()' style='width: 35px; z-index: 9992; border-radius: 5px;border: none; background: white;'>";
		if (flag == "svg" || flag == "svg2") {
			element.parentNode.parentNode.parentNode.append(popup);
		} else {
			element.parentNode.append(popup);
		}

		element.classList.add("opened_edit");
	} else {
		document.getElementById("EditPopUp").remove();
		document.getElementsByClassName("opened_edit")[0].classList.remove("opened_edit");
	}
}

function closeEdit() {
	document.getElementById("EditPopUp").remove();
	document.getElementsByClassName("opened_edit")[0].classList.remove("opened_edit");
}

function SaveEdit() {
	if (canEdit == true) {
		let current_val = $('#current_edit_V').val();
		
		document.getElementsByClassName("opened_edit")[0].innerHTML = current_val + " - "+TMP_Value;
		TMP_Value = "";
		let WhereKey = document.getElementsByClassName("opened_edit")[0].getAttribute("attr-row-id");
		let field = document.getElementsByClassName("opened_edit")[0].getAttribute("attr-row-field");
		let table = document.getElementsByClassName("opened_edit")[0].getAttribute("attr-row-table");

		let where = [{
			key: "id",
			value: WhereKey
		}];
		let insert_data = {
			value: current_val,
			field: field

		};
		insert_data = JSON.stringify(insert_data);

		let identity = getCookie("identity");
		let remember_code = getCookie("remember_code");

		let post_data = {
			ajax_update: true, //проверяю есть ли нужный post запрос
			identity: identity, // e-mail залогиненого в аминку пользователя
			remember_code: remember_code, //code залогиненого в аминку пользователя
			request_name: table, //название таблицы, которую нужно обновить или какой-то шифр, который я смогу на php обработать и расспознать.
			request_type: "update", // что нужно сделать. обновить запись в бд или добавить новую
			where: where, // условие для обновления. По какому параметру будет происходить поиск в бд.
			new_data: insert_data, // то что будем обновлять или добавлять. В формате название поля в таблице => значение

		};

		let url = "https://champs.pro/admin_panel/index.php/c-admin/ajax/update/";
		$.post(url, post_data, function (answer) {
			if (JSON.parse(answer) == "true") {
				$("#EditPopUp").css("background", "rgba(0, 204, 0, 0.75)");
				setTimeout(function () {
					closeEdit()
				}, 700);
			} else {
				$("#EditPopUp").css("background", "rgba(244, 5, 44, 0.79);");
			}

			// document.getElementById("EditPopUp").remove();
			// document.getElementsByClassName("opened_edit")[0].classList.remove("opened_edit");
		});
	}
}

function addListener() {
	var inputs = document.querySelectorAll('input[type="file"]');
	inputs.forEach(function (item, i, arr) {
		item.addEventListener('change', function () {
			if (this.files && this.files[0]) {
				var url = URL.createObjectURL(this.files[0]);
				if (this.files[0].type != "image/jpg" && this.files[0].type != "image/jpeg" && this.files[0].type != "image/png") {
					return;
				}

				var sendUrl = "https://champs.pro/admin_panel/index.php/c-admin/ajax/update/";
				let WhereKey = document.getElementsByClassName("opened_edit")[0].getAttribute("attr-row-id");
				let field = document.getElementsByClassName("opened_edit")[0].getAttribute("attr-row-field");
				let table = document.getElementsByClassName("opened_edit")[0].getAttribute("attr-row-table");

				let current_val = document.getElementsByClassName("opened_edit")[0].getAttribute("src");

				let where = [{
					key: "id",
					value: WhereKey
				}];
				let insert_data = {
					value: current_val,
					field: field

				};
				insert_data = JSON.stringify(insert_data);
				where = JSON.stringify(where);

				let identity = getCookie("identity");
				let remember_code = getCookie("remember_code");

				var fd = new FormData();
				fd.append('userfile', this.files[0]);
				fd.append('ajax_update', true);
				fd.append('remember_code', remember_code);
				fd.append('identity', identity);
				fd.append('request_name', table);
				fd.append('request_type', "update");
				fd.append('where', where);
				fd.append('new_data', insert_data);

				$.ajax({
					url: sendUrl,
					type: 'post',
					data: fd,
					contentType: false,
					processData: false,
					success: function (response) {
						window.location.reload();
					},
					error: function (response) { // error callback
						console.log(response);
						alert("Error");
					}
				});
			}
		});
	});
}

function setOpenDate(element) {
	if (canEdit == true) {
		let time = element.getAttribute('attr-row-time');
		let date = element.getAttribute('attr-row-date');
		let table = element.getAttribute('attr-row-table');
		let user_id = element.getAttribute('attr-row-userid');
		
		let identity = getCookie("identity");
		let remember_code = getCookie("remember_code");
		
		let setDate = "";
		setDate = new Date(date).toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric'});
		
		let insert_data = {
			user_id: user_id,
			date: setDate,
			time_from: time,
			
		};
		insert_data = JSON.stringify(insert_data);
		
		let post_data = {
			ajax_update: true, //проверяю есть ли нужный post запрос
			open_date: true, //проверяю есть ли нужный post запрос
			identity: identity, // e-mail залогиненого в аминку пользователя
			remember_code: remember_code, //code залогиненого в аминку пользователя
			request_name: table, //название таблицы, которую нужно обновить или какой-то шифр, который я смогу на php обработать и расспознать.
			request_type: "insert", // что нужно сделать. обновить запись в бд или добавить новую
			where: '', // условие для обновления. По какому параметру будет происходить поиск в бд.
			new_data: insert_data, // то что будем обновлять или добавлять. В формате название поля в таблице => значение
		};
		
		let url = "https://champs.pro/admin_panel/index.php/c-admin/ajax/update/";
		$.post(url, post_data, function (answer) {
			if (answer == "true") {
				let bg_color = element.style.background;
				if(bg_color == "" && element.innerHTML.length < 17) {
					element.style.background = "green";
				} else {
					element.style.background = "";
					element.innerHTML ="";
				}
			} else {
				console.log(answer);
			}
		});
	}
}