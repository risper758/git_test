// function computerPlay() {
// //     var i =Math.floor(Math.random() * 3); // this will return a random number between 0 and 2
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
// function game

function playRound() {
    var playerSelection = prompt("What do you choose? rock, paper or scissor");
    var computerSelection = computerPlay();

    // compare player and computer selections
    // return if player won or not
    if playerSelection == computerSelection {
        return "replay";
    }    
    if playerSelection == "rock" {
        if computerSelection == "paper" {
            return "lost";
        }
        if computerSelection == "scissors" {
            return "won";
        }    
    }
    if playerSelection == "paper" {
        if computerSelection == "rock" {
            return "win";
        }
        if computerSelection == "scissors" {
            return "lost";
        }    
    }
    if playerSelection == "scissors" {
        if computerSelection == "paper" {
            return "won";
        }
        if computerSelection == "rocker" {
            return "lost";
        }    
    }
}

function game() {
   console.log("Let's play 5 rounds");
   var playerscore = 0;
   var computerscore = 0;
   
   for (let totalgames=0; totalgames<5; totalgames++){
       let result = playRound();
       if result == "won" {
           playerscore++;
       } else {
           computerscore = computerscore + 1;
       }
   }
    
   console.log("End of game :)");               
   console.log(playerscore);
   console.log(computerscore);
   if computerscope > playerscore {
       comsole.log("You lost!");
   }
   // play 5 rounds
   // keep track if I won/lost
   // print out results from 5 rounds
}

game();

