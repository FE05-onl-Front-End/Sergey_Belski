let block = document.querySelector('.paint_figure');
let blockColor = document.querySelector('.paint_color_selected');
let paint_btn = document.querySelector('.paint_btn');

const colorArray = ["grey", "blue", "green", "purple", "yellow", "pink", "orange", "tomato", "aqua", "indigo"];

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

function addBlockColor(array) {
	array.forEach((item) => {
		let div = document.createElement('div')
		div.className = item;
		blockColor.append(div);
	});
	
}
addBlockColor(colorArray);

function addColor(e) {
	let target = event.target.closest('div');

	if(!target) return;
	if(target.className == blockColor.className) return;

	deleteClass();

	block.classList.add(target.className);
};


const div = document.createElement('div');
div.style = "position: absolute; top: 0; left: 0; border: 3px solid #eee; border-radius: 5px; font-size: 18px; font-weight: bold; padding: 15px;"
document.body.append(div);

blockColor.onmouseover = function(e) {

	let target = e.target.closest('div');

	if(!target) return;
	if(target.className == blockColor.className) return;
	
	div.innerText = target.className;
};

blockColor.onmouseout = function(e) {

	let target = e.target.closest('div');

	if(!target) return;
	if(target.className == blockColor.className) return;

	div.innerText = "";
};

blockColor.addEventListener('click', addColor);
paint_btn.addEventListener('click', deleteClass);