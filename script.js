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
// const button = document.querySelector('button');

// button.onclick = function() {
//   let name = prompt('What is your name?');
//   alert('Hello ' + name + ', nice to see you!');
// }
// function favoriteAnimal(animal) {
//   console.log(animal + " is my favorite animal!")
// }

// favoriteAnimal('Goat');
// console.log(favoriteAnimal('Goat'));
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
// let scores = Array(10);
// console.log(scores);
// let scores = new Array(9,10,8,7,6);
// console.log(scores);
// let myArray = ['I', 'love', 'chocolate', 'frogs'];
// let madeAString = myArray.join(' ');
// console.log(madeAString);
// // the join() function takes an array, joins
// // all the array items together into a single
// // string, and returns this new string
// let myNumber = Math.random();
// function draw() {
//   ctx.clearRect(0,0,WIDTH,HEIGHT);
//   for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = 'rgba(255,0,0,0.5)';
//     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//     ctx.fill();
    
//   }
// }
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);
// let add7= '+7'
// console.log(add7);
// let multiply = (5*5);
// console.log(multiply);
// let capitalize = 'risper';
// console.log(capital);
// let Lastletter = 'abcd';
// console.log(lastletter);
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// alert("hello!");
// document.write("This is iwritten from javascript!"); 