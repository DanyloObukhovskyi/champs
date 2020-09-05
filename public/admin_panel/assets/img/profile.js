(function () {
    var passBtn = document.querySelectorAll('#change-password-btn')[0];
    var changePassForm = document.querySelectorAll('#change-password-form')[0]
    var passwordReadonly = document.querySelectorAll('#password-readonly')[0]
    var passwordSubmitBtn = document.querySelectorAll('#change_password')[0];

    var passNotification = document.querySelectorAll('#notification-2')[0];
    var errorNotification = document.querySelectorAll('#notification-3')[0];
    var errorNotificationValue = errorNotification.querySelectorAll('.notification-error-value')[0];


    var newPassInput = document.querySelectorAll('#new')[0];
    var newPassRepeatInput = document.querySelectorAll('#new_confirm')[0];

    passBtn.addEventListener('click', function (e) {
        changePassForm.style.display = 'block';
        passwordReadonly.style.display = 'none';
        changePassForm.querySelectorAll('input')[0].focus();
        changePassForm.querySelectorAll('input').forEach(r => r.value = '');
    }, false);

    passwordSubmitBtn.addEventListener('click', function (e) {
        var controls = changePassForm.querySelectorAll('input');
        var focusState = false;

        controls.forEach(control => {
            if (validate(control) === false && !focusState) {
                control.classList.add('has-error');
                control.focus();
                focusState = true;
                errorNotification.style.display = 'flex';
                errorNotificationValue.innerHTML = control.getAttribute('title');
            }
        });

    }, false);

    changePassForm.querySelectorAll('input').forEach(item => {
        item.addEventListener('input', function (e) {

            e.stopPropagation();
            e.preventDefault();
            var control = this;
            if (validate(this) === false) {
                control.classList.add('has-error');
                document.getElementById("change_password").disabled = true;
                $("#change_password").css('background', '#c5d0de');
                control.focus();
                focusState = true;
                errorNotification.style.display = 'flex';
                errorNotificationValue.innerHTML = control.getAttribute('title');
            } else {
                if ($('#new_confirm').val().length >= 8) {
                    if ($('#new').val() !== $('#new_confirm').val()) {
                        document.getElementById("change_password").disabled = true;
                        $("#change_password").css('background', '#c5d0de');
                        errorNotificationValue.innerHTML = 'Passwords must be the same';
                        errorNotification.style.display = 'flex';
                        $("#notification-3").css('display', 'flex');
                    } else {
                        document.getElementById("change_password").disabled = false;
                        $("#change_password").css('background', '#39b54a');
                        $('#notification-3').css('display', 'none');
                        control.classList.remove('has-error');
                    }
                } else {
                    document.getElementById("change_password").disabled = false;
                    $("#change_password").css('background', '#39b54a');
                    $('#notification-3').css('display', 'none');
                    control.classList.remove('has-error');
                }
            }

        }, false);
    });


    function validate(control) {
        let pattern = control.getAttribute('pattern');
        var reg = new RegExp(pattern);
        return pattern ? reg.test(control.value) : true;
    }
}());