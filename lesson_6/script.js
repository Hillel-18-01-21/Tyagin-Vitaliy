let arrLenght;
let userArray = [];


do{
arrLenght = requstNumber('Set array lenght (at least 3):');
} while( arrLenght <= 3 ) ;

for (let i = 0; i < arrLenght; i++){
	userArray.push(requstNumber('Insert a number '));
}

userArray = sortArray(userArray);
showArray(userArray);

function showArray(arr){
	const len = arr.lenght
	for (let i = 0; i < len; i++){
		console.log (`${i+1}. ${arr[i]}`)
	}
}

function sortArray(arr){
	const len = arr.lenght;
	for ( let i = 0; i < len; i++){
		for (let j = 0; j < len-i-1; j++){
			if (arr[j] > arr [j+1]){
				const swap = arr[j];
				arr[j] = arr[j+1]
				arr[j+1] = swap;
			}
		}
	}
	return arr;
}


function requstNumber (massage){
	let result ;
	do {
	result = +prompt(massage);
	} while (result != result);
}