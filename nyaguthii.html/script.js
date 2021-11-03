function computerPlay() {
    var i =Math.floor(Math.random() * 3); // this will return a random number between 0 and 2
    if (i == 0) {
        return "paper";
    }
    if (i == 1){
        return "scissor";
    }
    return "rock"
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
