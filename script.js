console.log("Hello world")
console.log(23+97);
console.log(1+2+3+4+5+6);
console.log( (4+6+9) /77);
let e =10;
console.log(e);
console.log(9*e);
let f =7*e;
console.log(f);
let max = 57;
let actual = (max -13);
let percentage = actual / max;
console.log(percentage);
let mystring = 'The revolution will not be televised.';
mystring;
console.log(mystring);
let badString = mystring;
badString;
console.log(badString);


let sgl = 'Would you eat a fish for supper?';
console.log(sgl);
let dbl = "I\'m feeling blue";
console.log(dbl);
sgl;
dbl;
let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
joined;
console.log(joined);
let multiple = one + one + one + one + two;
multiple;
console.log(multiple);
let response = one + 'I am fine — ' + two;
response;
console.log(response);

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
txt.length     // Returns 26
// alert( 2 > 1 );  // true (correct)
// alert( 2 == 1 ); // false (wrong)
// alert( 2 != 1 ); // true (correct)
// let result = 5 > 4; // assign the result of the comparison
// alert( result ); // true
// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true
// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1
// let a = 0;
// alert( Boolean(a) ); // false

// let b = "0";
// alert( Boolean(b) ); // true

// alert(a == b); // true!
// alert( '' == false ); // true
// alert( 0 == false ); // true
// alert( 0 === false ); // false, because the types are different
// alert( null === undefined ); // false
// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true
// alert( undefined > 0 ); // false (1)
// alert( undefined < 0 ); // false (2)
// alert( undefined == 0 ); // false (3)
// 5 > 4 //true
// "apple" > "pineapple" //false
// "2" > "12" //true
// undefined == null //true
// undefined === null //false
// null == "\n0\n" //false
// null === +"\n0\n" //false
const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}


// alert("hello!");
// document.write("This is iwritten from javascript!"); 