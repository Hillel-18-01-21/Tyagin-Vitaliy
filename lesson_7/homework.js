alert( "Hello!");
showAnswer()
function getNumber(){
	const insertNumber = prompt("Введите числа через запятую!","");
	return insertNumber.split(',');
}

let myArray = [];
myArray = getNumber()

function showAnswer() {
	alert(chooseAction(arr));
	while(confirm(`Желаете повторить какое-то действие?`)) {
		 if(confirm(`С этим же массивом?`)) {
			  alert(chooseAction(arr)); 
		 }else {
			  showAnswer();
		 };
	};
}


function chooseAction(arr){
let chooseOperation = prompt( `Выберите действие:
1. Отсортировать по возрастанию

2. Вывести числа кратные 3

3. Склеить все числа в строку (с указананным делетелем)

4. Вывести максимальное число

5. Вывести минимальное число`, "");

switch (chooseOperation) {
	case "1":
		getSortArr ()
		break;
	case "2":
		multThre();
	break;
	case "3":
		Joinstring ()
	break;
	case "4":
		getMaxOfArray()
	break;
	case "5":
		getMinofArray()
	break;

	default:
		break;
}

function Joinstring (){ 
let insertSymbol = prompt('Введите символ!','');
const result = myArray.join(insertSymbol);
return result;
}
function multThre() {
let newArray = myArray.filter(e =>{
	const result = e % 3 == 0;
	return result;
})
return newArray
}
function getSortArr () {
	let result = myArray.sort(function(a,b){
		return a - b;
	})
	return result;
}

function getMaxOfArray(){
	let result = Math.max.apply(null, myArray)
	return result ;
}
function getMinofArray (){
	let result = Math.min.apply(null, myArray)
	return result;
}
 return arr;
}
