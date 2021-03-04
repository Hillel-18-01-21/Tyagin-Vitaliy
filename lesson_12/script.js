const first = getCalc(4);
first.add(33);
first.sub(12);
first.div(2);
first.mult(4);
first.getResult();

const result = first.getResult();
console.log(result)

//*Function//
function getCalc(someVal) {
	return { 
		 add: (arg) => someVal = arg + someVal,

		 sub: (arg) => someVal = someVal - arg,

		 div: (arg) => someVal = someVal / arg,

		 mult: (arg) => someVal = arg * someVal,

		 getResult:() => someVal,
	}
};
