(function () {
    var notification = document.querySelectorAll('#notification-1')[0];
    var form = document.querySelectorAll('#form')[0]
    var submitBtn = document.querySelector('#submit-btn');
    var timeout;
    var formMoreBtn = document.querySelector('#form-more-btn');
    // var extraFields = document.querySelector('#extra-fields');
    var extraTPl;


    addListenersToControls();

    // if (formMoreBtn) {
    //     $.ajax({
    //         type: 'get',
    //         url: 'http://serp.farm/sitemanager2/new_assets/tpl/create-website.tpl',
    //         success: function (tpl) {
    //             extraTPl = tpl;
    //             addListenersToControls();
    //         }
    //     });
    if (document.querySelector('#form-more-btn')) {
        formMoreBtn.addEventListener('click', function () {

            if (formMoreBtn.classList.contains('opened')) {
                formMoreBtn.classList.remove('opened');
                formMoreBtn.innerHTML = 'More';
                // extraFields.innerHTML = '';
            } else {
                formMoreBtn.classList.add('opened');
                formMoreBtn.innerHTML = '<font color="red">Close</font>'; //<i class="icon icon-up-arrow" style="border: solid red;border-width: 0 1px 1px 0;"></i>
                //extraFields.innerHTML = extraTPl;
                addListenersToControls();
            }
            //checkSubmitBtn();
        }, false);
    }
    // }

    if (document.querySelectorAll('#form')[0]) {
        form.addEventListener('change', function (e) {
            checkSubmitBtn();
        });

        form.addEventListener('submit', function (e) {

            e.preventDefault();
            var controls = getControls(form);
            let focusState = false;
            var rmo_i = 0;
            controls.forEach(control => {
                if (control.getAttribute('required') === '' && validate(control) === false && !focusState) {
                    control.classList.add('has-error');
                    control.focus();
                    focusState = true;
                } else {
                    control.classList.remove('has-error');
                    if (!document.getElementById('checkbox').checked) {
                        if (document.getElementById('domain').value.length) {
                            var domain = document.getElementById('domain').value;
                        }
                    } else {
                        var domain = document.getElementById('lists_domain').value;
                    }
                    //var server_id = document.getElementById('server_id').firstChild.data; 
                    var server_id = document.getElementById('server_id').getAttribute('value');
                    // console.log(server_id);
                    if (document.getElementById('wp-login') != null) {
                        var wp_login = document.getElementById('wp-login').value;
                        var wp_password = document.getElementById('wp_password').value;
                        var wp_email = document.getElementById('wp_email').value;
                        // var wp_session = document.getElementById('test').value; 
                        var wp_title = document.getElementById('wp_title').value;
                        var group_id = document.getElementById('group_id').getAttribute('value');
                        if (document.getElementById('new_group') != null) {
                            var new_group = document.getElementById('new_group').value;
                        }
                    }
                    var param = {
                        domain: domain,
                        server_id: server_id,
                        status: 1,
                        submit: "Create",
                        wp_password: wp_password,
                        wp_email: wp_email,
                        wp_title: wp_title,
                        wp_login: wp_login,
                        group_id: group_id,
                        scode: 'H2O',
                        new_group: new_group,


                    };

                    if (rmo_i == 0) {
                        //console.log(param);
                        $.post('http://serp.farm/sitemanager2/index.php/websites/add', param, function (data) {
                            //console.log(server_id);
                            window.location = "http://serp.farm/sitemanager2/websites";
                        });
                    }
                    rmo_i++;
                }
            });

            if (!focusState) {
                if (notification) notification.style.display = 'flex';

                if (timeout) clearTimeout(timeout);
                timeout = setTimeout(function () {
                    if (notification) notification.style.display = 'none';
                }, 5000);
            }

        }, false);
    }


    function addListenersToControls() {


        document.querySelectorAll('input').forEach(item => {
            item.addEventListener('input', function () {
                if (validate(this)) {
                    this.setCustomValidity('');
                    this.classList.remove('has-error');
                } else {
                    this.setCustomValidity(this.getAttribute('title'))
                    this.classList.add('has-error');
                }
            }, false);
        });
    }

    function checkSubmitBtn() {
        var controls = getControls(form);
        var validLength = 0;

        controls.forEach(input => {
            if (input.validity.valid) validLength++;
        });

        if (validLength === controls.length) {
            submitBtn.classList.add('btn-green');
            submitBtn.classList.remove('btn-light-grey');


        } else {
            submitBtn.classList.remove('btn-green');
            submitBtn.classList.add('btn-light-grey');
        }
    }

    function getControls(form) {
        var controls = [];
        form.querySelectorAll('input[required]').forEach(function (r) {
            if (r.offsetParent) controls.push(r)
        });
        form.querySelectorAll('textarea[required]').forEach(function (r) {
            if (r.offsetParent) controls.push(r)
        });
        return controls;
    }

    function validate(control) {
        let pattern = control.getAttribute('pattern');
        var reg = new RegExp(pattern);
        return pattern ? reg.test(control.value) : true;
    }

}());