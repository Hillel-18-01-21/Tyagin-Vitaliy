const shapeSelectorEl = document.getElementById('shape-selector')
const colorInputEl = document.getElementById('color-input');
const shapeEl = document.getElementById('shape');
const canvasEl = document.getElementById('canvas');
/*hendlers*/

shapeSelectorEl.addEventListener('change',onShapeChange);
colorInputEl.addEventListener('change', onColorChange);
canvasEl.addEventListener('click', onMousClick);

function onMousClick(e) {
	const y = e.y - canvasEl.offsetTop - shapeEl.offsetHeight/2;
	const x = e.x - canvasEl.offsetLeft - shapeEl.offsetWidth/2;
	setPosition(x, y);
}

function onColorChange(){
	setColor(colorInputEl.value);
}

function onShapeChange () {
	setShape(shapeSelectorEl.value);
}

/*function*/

function setShape (shape){
	shapeEl.className = `shape ${shape}`;
}

function setColor (color) {
	shapeEl.style.backgroundColor = color;
}

function setPosition(left, top) {
	shapeEl.style.left = `${left}px`;
	shapeEl.style.top `${top}px`;
}
