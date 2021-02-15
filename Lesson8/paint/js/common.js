let block = document.querySelector('.paint_figure');
let blockColor = document.querySelector('.paint_color_selected');
let paint_btn = document.querySelector('.paint_btn');

function changeSelect() {
	let paintSelect	= document.querySelector('#paint_select').value;
	let paintFigure = document.querySelectorAll('.paint_figure > div');

	deleteClass();

	paintFigure.forEach((item, index) => {
		if(item.classList == paintSelect) {
			paintFigure[index].classList.add("active");
		} else {
			paintFigure[index].classList.remove("active");
		}
	});
};

function deleteClass() {
	block.classList.remove(block.classList[1]);
};

function addColor(e) {
	let target = event.target.closest('div');

	if(!target) return;
	if(target.className == blockColor.className) return;

	deleteClass();

	block.classList.add(target.className);
};

blockColor.addEventListener('click', addColor);
paint_btn.addEventListener('click', deleteClass);