const user = document.querySelector('.add-user');
const modal = document.querySelector('.modal');
const popap = document.querySelector('.popap');

const formInput = document.querySelectorAll('input[type="text"]');
const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.querySelector('input[name="last-name"]');
const age = document.querySelector('input[name="age"]');

const close = document.querySelector('.close');
const btnClose = document.querySelector('.btn.close');
const ok = document.querySelector('.btn.ok');

const wrapper = document.querySelector('.wrapper');
const table = document.createElement('table');

const person = [
	{
	   firstName: 'Ashton',
	   lastName: 'Kutcher',
	   age: 40
	}, {
	   firstName: 'Bradley',
	   lastName: 'Pitt',
	   age: 54
	}, {
	   firstName: 'Hannah',
	   lastName: 'Dakota',
	   age: 15
	},
]

//table
function createTable(array) {
	table.style = 'border: 1px solid #000; border-collapse: collapse; margin-top: 15px;';
	wrapper.append(table);

	let tr = document.createElement('tr');
	table.append(tr);

	Object.keys(array[0]).forEach((item) => {
		let th = document.createElement('th');

		th.innerText = item;
		tr.append(th);
	});
};

function fillTable(array) {
	array.forEach((item) => {
		let tr = document.createElement('tr');
		table.append(tr);
		
		Object.keys(item).forEach((item_td) => {
			let td = document.createElement('td');

			td.innerText = item[item_td];
			tr.append(td);

			if(item.age >= 18) {
				td.style.background = "green"
			} else {
				td.style.background = "yellow"
			}
		});
	});
};
createTable(person);
fillTable(person);

//modal
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
	if(firstName.value == '' || lastName.value == '' || age.value == '') {
		alert(`
			имя: ${firstName.value} пустое поле
			фамилия: ${lastName.value} пустое поле
			возраст: ${age.value} пустое поле`
		);
	} else {
		const newInfo = [{firstName: firstName.value, lastName: lastName.value, age: age.value}];

		fillTable(newInfo);
		hideModal();
	}
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