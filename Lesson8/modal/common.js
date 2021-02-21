let user = document.querySelector('.add-user');
let modal = document.querySelector('.modal');
let popap = document.querySelector('.popap');

let formInput = document.querySelectorAll('input[type="text"]');
let firstName = document.querySelector('input[name="first-name"]');
let lastName = document.querySelector('input[name="last-name"]');
let age = document.querySelector('input[name="age"]');

let close = document.querySelector('.close');
let btnClose = document.querySelector('.btn.close');
let ok = document.querySelector('.btn.ok');


function showModal() {
    modal.classList.add('active');
};

function hideModal() {
	let formInput = document.querySelectorAll('input[type="text"]');
	
	formInput.forEach((item) => {
		item.value = '';
	});
	
    modal.classList.remove('active');
};


function modalOk() {
	formInput.forEach((item) => {
		if(item.value == '')
			item.value = 'пустое поле';
	});

	alert(`
		имя: ${firstName.value}
		фамилия: ${lastName.value}
		возраст: ${age.value}`);

	hideModal();
};

function hideModalOutside(event) {
	if(!popap.contains(event.target) && !user.contains(event.target)) {
		hideModal();
	}
}


	
user.addEventListener('click', showModal);
close.addEventListener('click', hideModal);
btnClose.addEventListener('click', hideModal);
ok.addEventListener('click', modalOk);

document.addEventListener('click', hideModalOutside);