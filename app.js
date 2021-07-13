function computerPlay() {
    return plays[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors"
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats scissors"
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats paper"
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats paper"
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock"
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats rock"
  } else {
    return "Tie, you drawed the same"
  }
}

function game() {

}

const plays = ["Rock", "Paper", "Scissors"];

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));