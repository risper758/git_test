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

function playRound(playerSelection, computerSelection) {
    // your code here!
    function playerChoice(){
        console.log ("do you choose 'paper' (0), 'scissor' (1), 'rock' ()?");
        let playerChoice = prompt("Do you choose 'paper' (0), 'scissors' (1), or 'rock' ()?");
        if (playerChoice.case-insensitive() === "paper" || parseInt(playerChoice) === 0) {
            playerChoice = "paper";
        if (computerSelection.case-insensitive() ==="scissor" || parseInt(computerselection) === 1) {
            computerselection = "scissor";
            return "You loose! Scissor cuts paper";
        }
    }
  }
}

  
// console.log(playRound(playerSelection, computerSelection))
