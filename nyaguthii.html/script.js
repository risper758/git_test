// function computerPlay() {
//     var i = Math.floor(Math.random() * 3); // this will return a random number between 0 and 2
//     if (i == 0) {
//         return "paper";
//     }
//     if (i == 1){
//         return "scissor";
//     }
//     return "rock"
// }

// function playRound(playerSelection, computerSelection) {
//     // your code here!
//     function playerChoice(){
//         console.log ("do you choose 'paper' (0), 'scissor' (1), 'rock' ()?");
//         let playerChoice = prompt("Do you choose 'paper' (0), 'scissors' (1), or 'rock' ()?");
//         if (playerChoice.case-insensitive() === "paper" || parseInt(playerChoice) === 0) {
//             playerChoice = "paper";
//         if (computerSelection.case-insensitive() ==="scissors" || parseInt(computerselection) === 1) {
//             computerselection = "scissors";
//             return "You loose! Scissors cuts paper";
//             console.log (you loose! scissor cuts paper);
//             if (playerChoice.case-insensitive() === "rock" || parseInt(playerChoice) === 0) {
//                 playerChoice = "paper";
//             if (computerSelection.case-insensitive() ==="paper" || parseInt(computerselection) === 1) {
//                 computerselection = "paper";
//                 return "You win, rocks stumps paper"; 
//                 console.log(You win, rocks stumps paper)
//                 if (playerChoice.case-insensitive() === "scissors" || parseInt(playerChoice) === 0) {
//                     playerChoice = "scissors";
//                 if (computerSelection.case-insensitive() ==="rock" || parseInt(computerselection) === 1) {
//                     computerselection = "rock";
//                     return "You loose! rock beats scissors";v
//         }
//     }
//   }
// }
// // function game

// function playRound() {
//     var playerSelection = prompt("What do you choose? rock, paper or scissor");
//     var computerSelection = computerPlay();

//     // compare player and computer selections
//     // return if player won or not
//     if (playerSelection == computerSelection) {
//         return "replay";
//     }    
//     if (playerSelection == "rock") {
//         if (computerSelection == "paper") {
//             return "lost";
//         }
//         if (computerSelection == "scissors") {
//             return "won";
//         }    
//     }
//     if (playerSelection == "paper") {
//         if (computerSelection == "rock") {
//             return "win";
//         }
//         if (computerSelection == "scissors") {
//             return "lost";
//         }    
//     }
//     if (playerSelection == "scissors") {
//         if (computerSelection == "paper") {
//             return "won";
//         }
//         if (computerSelection == "rocker") {
//             return "lost";
//         }    
//     }
// }

// function game() {
//    console.log("Let's play 5 rounds");
//    var playerscore = 0;
//    var computerscore = 0;
   
//    for (let totalgames=0; totalgames<1; totalgames++){
//        let result = playRound();
//        if (result == "won") {
//            playerscore++;
//        } else {
//            computerscore = computerscore + 1;
//        }
//    }
    
//   // document.write("End of game :)");               
//    console.log(playerscore);
//    console.log(computerscore);
//     if (computerscore > playerscore) {
//         var results = document.getElementById("results");
//         results.innerHTML = "You lost";
    //    console.log("You lost!");
//    }
   // play 5 rounds
   // keep track if I won/lost
   // print out results from 5 rounds
// }

// game();
// const sumArray = function(array) {
//     let sum = 0;
//     array.forEach(function(number) {
//       sum += number;
//     });
//     return sum;
//   };
  
//   sumArray([2, 2, 2]);
//   let reallyReallyLongLine = something + somethingElse + anotherThing +
// 		howManyTacos + oneMoreReallyLongThing;
//         // Good
// const numberOfThings = 10;
// const myName = "Thor";
// const selected = true;
// // Good
// function getCount() {
//     return numberOfThings;
  
    // const helloWorld = require('./helloWorld');
    
    // describe('Hello World', function() {
    //   test('says hello world', function() {
    //   test('says "Hello, World!"', function() {
    //     expect(helloWorld()).toEqual('Hello, World!');
    //   });
    // });
    
    
//     const container = document.querySelector('#container');
//      select the #container div 
    
//     console.dir(container.firstElementChild);                      
//      select the first child of #container => .display
    
//     const controls = document.querySelector('.controls');   
//      select the .controls div
    
//     console.dir(controls.previousElementSibling);                  
//     selects the prior sibling => .display
//     const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'The name is Risper Sobayeni!';

container.appendChild(content);
// function appendText() {
//   var text1 = "<p>text.</p>"; //text 1
//   var text2 = "<h1>text<h1>"; //text 2
// }
function appendText() {
  var txt1 = "<p>Text.</p>";        // Create text with HTML
  var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
  var txt3 = document.createElement("p");
  txt3.innerHTML = "Text.";         // Create text with DOM
  $("body").append(txt1, txt2, txt3);   // Append new elements
