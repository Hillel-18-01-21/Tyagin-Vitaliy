const numVar = 42;
let strVar = "1";
const boolVar = true;
const undefinedVar = undefined;
const nullVar = null;

// Привидение типов
// console.log(numVar + strVar);
// console.log(NaN + 1);

// Явное привидение
// Number
// console.log(12*0);
// console.log(Number("I'm 12 string")); // NaN - Not a Number
// console.log(Number(boolVar)); // false - 0, true - 1
// console.log(Number(undefined)); // undefined - NaN
// console.log(Number(null)); // null - 0

// String
// console.log(String(numVar) + 2);
// console.log(String(boolVar));
// console.log(String(undefinedVar));
// console.log(String(nullVar));

// Boolean
// console.log(Boolean(-1)); // 0 и NaN - false, остальное - true
// console.log(Boolean("strVar")); // "" " " - false, остальное - true
// console.log(Boolean(undefined)); // undefined - false
// console.log(Boolean(null)); // null - false

// Неявное привидение
// TODO: дооформить
// String
// console.log(numVar + strVar);
// console.log(numVar + "");

// // Number
// console.log(numVar + +strVar); // Number
// console.log(numVar + boolVar); // Number
// console.log(numVar + undefined); // Number
// console.log(numVar + null); // Number
// console.log(numVar - strVar); // Number
// console.log(numVar - "tetdgddg"); // NaN

// // Boolean
// console.log(!numVar); // !(Boolean(42)) = !true = false
// console.log(!!numVar); // !(!(Boolean(42))) = !(!true) = !false = true
// console.log(!!"");
// console.log(!!undefined); // false
// console.log(!!null); // false

console.log(typeof numVar);

// Object

const myObj = {
    name: 'Vlad',
    age: 25,
    unemployed: false
};

const objType = typeof myObj;

console.log(objType);

// Array
const arr = [6, 5, 6, 8, 'sdf', true];

console.log(arr[1]);

// console.log(myObj['age']);