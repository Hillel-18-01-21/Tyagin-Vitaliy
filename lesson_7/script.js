alert( "Hello!");



let myArray = getNumbers();

showAnswer(myArray);

// TODO: вот это пределать, со старым массивом продолжает работать, а новый вести не выходит
function showAnswer(arr) { 
	alert(chooseAction(arr)); 
	while(confirm(`Желаете повторить какое-то действие?`)) {
		 if(confirm(`С этим же массивом?`)) {
			  alert(chooseAction(arr)); 
		 } else {
			  showAnswer();
		 };
	};
}
  
function getNumbers(){
	const insertNumber = prompt("Введите числа через запятую!","");
	return insertNumber.split(',');
}


function chooseAction(arr) {
  let chooseOperation = prompt( `Выберите действие:
  1. Отсортировать по возрастанию

  2. Вывести числа кратные 3

  3. Склеить все числа в строку (с указананным делетелем)

  4. Вывести максимальное число

  5. Вывести минимальное число`, "");

  switch (chooseOperation) {
    case "1":
      return getSortArr(arr);
    case "2":
      return multThre(arr);
    case "3":
      return Joinstring(arr)
    case "4":
      return getMaxOfArray(arr)
    case "5":
      return getMinofArray(arr)
  }
}

function Joinstring(arr) { 
	let insertSymbol = prompt('Введите символ!','');
  
	return arr.join(insertSymbol);
}
  
function multThre(arr) {
	return arr.filter(e => e % 3 == 0);
}

function getSortArr(arr) {
	return arr.sort(function(a,b) {
		return a - b;
	})
}

function getMaxOfArray(arr) {
	return Math.max.apply(null, arr);
}
  
function getMinofArray(arr) {
	return Math.min.apply(null, arr);
}


