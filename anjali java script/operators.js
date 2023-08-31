//Arithmetic operator +,-,%,*,/,++,--

let num = 20*30;
console.log(num);

let a = 20;
console.log('value of ++a',++a); //preIncrement : it will add first and then return it
console.log('value of a',a);

let b =20;
console.log('b++',b++); //postIncrement : it will return value first and then  get increment by one 
//console.log('b',b);
console.log('b'+b);

let x = 10;
x = x + 1;
console.log(x);
//x++

let y = 10;
//y = y - 1;
//y--;
console.log('y',--y);

//Assignment Operator =.+=,-+,*=,%=

let r = 70; //substraction assignment operator
r = r - 30;
console.log(r);

let v = 60;  //additon assignment operator
//v = v + 90;
v += 90;
console.log(v);


let p = 90;
let q = 10;
p -= q //90-10,p=80

//diff betwn = , == , ===
//comparison operators 
//== : equality operator >> value
let k = 60;
let j = 40;
console.log ( k==j );

//=== : equality operator >> value + datatype

let u = 10;
let w = '10';

console.log( u == w); //only checks value , so true
console.log( u === w);// it checks both value + datatype ,so false

// > greater than
console.log( '>',k > j);

// < less than
console.log( '<',k < j);

//not equal to !=
console.log('!=',u != w);
console.log('!==',u !== w);

//greater than equal to >=
console.log( '>=',j>=k);

//less than equal to <=
console.log('<=',j<=k);

//?: ternary operator::: condition? true : false;

let d = 300;
d > 200? console.log('d is greater')  : console.log('d is smaller');

let text1 = 'A';//65
let text2 = 65; //66
let result = text1 == text2
console.log(result);

//logical operator && , ||,!
 let r1 = 90;
 let r2 = 50;

 console.log(r1 > r2 && r2 < r1); //90<50 && 50<90 ->>> T && T ->>T
                                        //T||F->>T
 let z = true;
 console.log('!--',!z);                                       






