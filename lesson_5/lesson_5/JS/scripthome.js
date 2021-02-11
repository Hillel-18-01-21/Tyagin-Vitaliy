const ask = prompt(`Select operation: +, -, *, /, sin`, ``);

function getnumber() {
	let num;
	do {
		num =+prompt("Enter the number?", 0);
	 } while (isNaN(num));
	 return num;
 };



function getsum( a ,b){
	return a + b;
}
function getdiff(a, b){
	return a-b;
}
function getmult(a, b){
	return a*b;
}
function getdiv(a, b){
	return a/b;
}


function getresult(){
switch (ask) {
	case '+':
	a = getnumber();
	b = getnumber();
	return getsum( a ,b)
	  break;
	case '-':
		a = getnumber();
		b = getnumber();
	return getdiff(a, b)
	  break;
	case '*':
		a = getnumber();
		b = getnumber();
	return getmult(a, b);
	  break;
	case '/':
		a = getnumber();
		b = getnumber();
		return getdiv(a, b)
		break;
		case 'sin':
		a = getnumber();
		return Math.sin(a)
		  break;
	default:('');
 }
  
}

let result = getresult();
 const operationResult = ` 
 Operation ${ask} finished with result  ${result}
 `;
 alert(operationResult);