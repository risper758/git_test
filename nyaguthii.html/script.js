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
        if (computerSelection.case-insensitive() ==="scissors" || parseInt(computerselection) === 1) {
            computerselection = "scissors";
            return "You loose! Scissors cuts paper";
            console.log (you loose! scissor cuts paper);
            if (playerChoice.case-insensitive() === "rock" || parseInt(playerChoice) === 0) {
                playerChoice = "paper";
            if (computerSelection.case-insensitive() ==="paper" || parseInt(computerselection) === 1) {
                computerselection = "paper";
                return "You win, rocks stumps paper"; 
                console.log(You win, rocks stumps paper)
                if (playerChoice.case-insensitive() === "scissors" || parseInt(playerChoice) === 0) {
                    playerChoice = "scissors";
                if (computerSelection.case-insensitive() ==="rock" || parseInt(computerselection) === 1) {
                    computerselection = "rock";
                    return "You loose! rock beats scissors";v
        }
    }
  }
}
function game

  
// console.log(playRound(playerSelection, computerSelection))
