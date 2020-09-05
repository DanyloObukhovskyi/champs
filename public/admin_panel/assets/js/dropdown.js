(function () {
	window.SFManager = {
		dropdownsInit: dropdownsInit
	};
	
	var dropdowns;
	
	dropdownsInit();
	
	function dropdownsInit() {
		dropdowns = document.querySelectorAll('.dropdown');
		
		dropdowns.forEach(function (dropdown) {
			if (!dropdown.getAttribute('data-init')) {
				
				dropdown.setAttribute('data-init', true);
				var valElem = dropdown.querySelector('.dropdown-value');
				var items = dropdown.querySelectorAll('.js-dropdown-item');
				
				valElem.addEventListener('click', function () {
					if (dropdown.classList.contains('opened')) {
						dropdown.classList.remove('opened');
					} else {
						dropdown.classList.add('opened');
					}
				}, false);
				
				items.forEach(function (r) {
					r.addEventListener('click', function () {
						items.forEach(function (r) {
							r.classList.remove('selected');
						});
						this.classList.add('selected');
						showPostType(this.getAttribute('value'));
						valElem.classList.add('dirty');
						valElem.innerHTML = this.innerHTML;
						dropdown.classList.remove('opened');
						
					});
				})
			}
		});
	}
	
	window.addEventListener('click', function (e) {
		dropdowns.forEach(function (res) {
			if (!res.contains(e.target)) {
				res.classList.remove('opened');
			}
		});
	}, false);
}());
function showPostType(id=0){
	if(id!=0){
		for(var i = 1; i <= 9; i++){
			if(i == id){
				current_type = id;
				$('#b' + id).css('display', 'block');
			}else {
				$('#b' + i).css('display', 'none');
			}
			
		}
	}
}