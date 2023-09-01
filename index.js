let playerWon = false;
let computerWon = false;

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissor"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

function gameRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice().toLowerCase();

  //* Draw outcomes
  if (playerSelection == "rock" && computerSelection == "rock") {
    playerWon = true;
    computerWon = true;
    console.log("Draw this round! Rock and Rock are at a standstill");
  }
  if (playerSelection == "scissor" && computerSelection == "scissor") {
    playerWon = true;
    computerWon = true;
    console.log("Draw this round! Scissor and Scissor are at a standstill");
  }
  if (playerSelection == "paper" && computerSelection == "paper") {
    playerWon = true;
    computerWon = true;
    console.log("Draw this round! Paper and Paper are at a standstill");
  }
  //* Win outcomes
  if (playerSelection == "rock" && computerSelection == "scissor") {
    playerWon = true;
    computerWon = false;
    console.log("You win this round! Rock beats Scissor");
  }
  if (playerSelection == "scissor" && computerSelection == "paper") {
    playerWon = true;
    computerWon = false;
    console.log("You win this round! Scissor beats Paper");
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    playerWon = true;
    computerWon = false;
    console.log("You win this round! Paper beats Rock");
  }
  //* Lose outcomes
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerWon = true;
    playerWon = false;
    console.log("You lose this round! Rock loses to Papeer");
  }
  if (playerSelection == "scissor" && computerSelection == "rock") {
    computerWon = true;
    playerWon = false;
    console.log("You lose this round! Scissor loses to Rock");
  }
  if (playerSelection == "paper" && computerSelection == "scissor") {
    computerWon = true;
    playerWon = false;
    console.log("You lose this round! Paper loses to Scissor");
  }
}

function game() {
  let playerCount = 0;
  let computerCount = 0;
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, Scissors GO!");
    gameRound(playerSelection);

    if (playerWon && computerWon) {
      playerCount++;
      computerCount++;
    } else if (playerWon && !computerWon) {
      playerCount++;
    } else {
      computerCount++;
    }
    console.log(
      "~Score Board\n\nPlayer:" + playerCount + "\nComputer:" + computerCount
    );
  }

  if (computerCount == playerCount) {
    return "DRAW";
  } else if (computerCount > playerCount) {
    return "Computer Won";
  } else {
    return "Player Won";
  }
}
