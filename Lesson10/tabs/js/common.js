let tab_content = document.querySelectorAll(".tab_content");
let tab_link = document.querySelectorAll(".tab_link");
let tabs = document.querySelector(".tabs");
let close = document.querySelectorAll(".close");

const openCity = (event) => {
	//всем контентам выставляет none
	tab_content.forEach((item_cont) => {
		item_cont.style.display = "none";
	});

	//проходит по кнопкам, если находит актив убирает(заменяет) на пустое
	tab_link.forEach((item_link) => {
		item_link.className = item_link.className.replace(" active", "");
	});

	//проставляет актив тому на что нажали и соответствующему блоку с контентом(у которого id равно атрибуту data) - display: block
	document.getElementById(event.target.dataset.tabs).style.display = "block";
	event.target.className += " active";

};

close.forEach((item) => {  //функция удаления табов
	item.addEventListener('click', function(event){ //добавляю события по клику всем крестикам
		event.stopPropagation(); //предотвращаю сквозное нажате
		let deleteElem = event.target.parentNode; //родитель нажатого крестика
		let newSwitchElem = deleteElem.nextElementSibling || deleteElem.previousElementSibling; //соседи предылущий или следующий 

		if (deleteElem.classList.value.includes('active')) {
			deleteElem.remove(); //удаляет таб на который кликнули
			document.getElementById(deleteElem.dataset.tabs).remove(); //удаляет контент с id равной атрибуту data удаленной вкладки 

			newSwitchElem.click();//после удаления актиного элемента делает активным соседний
		} else {
			deleteElem.remove();
			document.getElementById(deleteElem.dataset.tabs).remove();
		}
		//если табов 1 проходится по крестикам в табах и скрывает крестик
		if (tabs.children.length == 1) {
			close.forEach(function(item) {
				item.style.display = 'none';
			})
		}
	})
});

tabs.addEventListener('click', openCity, false);

//по умолчанию открыта вкладка
document.getElementById("defaultOpen").click();