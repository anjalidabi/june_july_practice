//Javascript has 8 Datatypes
//primitive Datatypes:
//String.
//Number.
//Bigint.
//Boolean.
//Undefined.
//Null.
//Symbol.
//object.
//Unprimitive Datatype:
//An Object.

//string: 'Anjali'/"Anjali29"/'2020': used when value is alphabets/alphanumeric/number as a string

var name = 'Anjali';
console.log(name);

let adress ='A-903,Ng_canary,Mumbai';
console.log(adress);

//number :to store number data into a variable

let amount = 100000;
console.log(amount);
let amt = 105.232;
amount = 50000;
console.log(amount);

//boolean data type: true/false

let passed = true;
console.log(passed);
let xyz = 'true';
console.log(xyz);

//typeod operator : defines type of data
console.log(typeof(passed));
console.log(typeof(name));
console.log(typeof(amount));

//undefined
let jk;
console.log(jk);
console.log(typeof(jk));

//null data: data type of null is object
let cash = null;
console.log(cash);
console.log(typeof(cash));

//object:
//empty object
//let studentdata ={};
let studentdata ={
    studentname:'anjali',
    age: 15,
    contact:564357679,
    city:'Pune'
}
console.log(studentdata);
console.log(typeof(studentdata));

//empty array
//let list =[]
let list = ['i10','Audi','vovo','swift'];
console.log(list);
console.log(typeof(list));

let h = {name:'Anjali'};
let l = h.toString();
console.log('boolean value',l);
console.log('boolean value',typeof(l));




savingAmount = BigInt ('9999999999999999');
let amount2= 9999999999999999n;
console.log(savingAmount);
console.log(savingAmount);









