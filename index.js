let playerWon = false;
let computerWon = false;
let gameState = 0;

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
    return "Draw this round! Rock and Rock are at a standstill";
  }
  if (playerSelection == "scissor" && computerSelection == "scissor") {
    playerWon = true;
    computerWon = true;
    return "Draw this round! Scissor and Scissor are at a standstill";
  }
  if (playerSelection == "paper" && computerSelection == "paper") {
    playerWon = true;
    computerWon = true;
    return "Draw this round! Paper and Paper are at a standstill";
  }
  //* Win outcomes
  if (playerSelection == "rock" && computerSelection == "scissor") {
    playerWon = true;
    computerWon = false;
    return "You win this round! Rock beats Scissor";
  }
  if (playerSelection == "scissor" && computerSelection == "paper") {
    playerWon = true;
    computerWon = false;
    return "You win this round! Scissor beats Paper";
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    playerWon = true;
    computerWon = false;
    return "You win this round! Paper beats Rock";
  }
  //* Lose outcomes
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerWon = true;
    playerWon = false;
    return "You lose this round! Rock loses to Paper";
  }
  if (playerSelection == "scissor" && computerSelection == "rock") {
    computerWon = true;
    playerWon = false;
    return "You lose this round! Scissor loses to Rock";
  }
  if (playerSelection == "paper" && computerSelection == "scissor") {
    computerWon = true;
    playerWon = false;
    return "You lose this round! Paper loses to Scissor";
  }
}

function game() {
  const btns = document.querySelectorAll("button"); //Grab button from DOM
  const gameLog = document.querySelector(".game-log"); //Grab div game-log from DOM
  const scoreBoard = document.querySelector(".score-board");
  const player = document.querySelector(".player");
  const computer = document.querySelector(".computer");
  const playerScore = document.createElement("p");
  const computerScore = document.createElement("p");
  const gameLogMessage = document.createElement("p"); //Creates a p element

  playerScore.classList.add("message-text");
  computerScore.classList.add("message-text"); //Adds class to p element for styling
  gameLogMessage.classList.add("message-text");

  let playerCount = 0;
  let computerCount = 0;
  gameLogMessage.textContent = "Choose your weapon of choice";
  gameLogMessage.style.color = "gold";

  player.appendChild(playerScore);
  computer.appendChild(computerScore);
  gameLog.appendChild(gameLogMessage);

  playerScore.textContent = "Player: " + playerCount;
  computerScore.textContent = "Computer: " + computerCount;

  btns.forEach((element) => {
    element.addEventListener("click", () => {
      //Adds click event listener to each button
      if (computerCount == 5 || playerCount == 5) {
        //Does not run the event listener once game ends
        return;
      }

      const gameLogMessage = document.createElement("p");
      gameLogMessage.classList.add("message-text");

      playerChoice = element.textContent; //Grabs playerChoice from button
      gameLogMessage.textContent = gameRound(playerChoice); //Text content for p is the return value from game round() function

      if (playerWon && computerWon) {
        playerCount += 1;
        computerCount += 1;
      } else if (playerWon && !computerWon) {
        playerCount += 1;
        computerCount += 0;
      } else {
        playerCount += 0;
        computerCount += 1;
      }

      if (computerCount == 5 && playerCount == 5) {
        gameLogMessage.textContent = "Draw";
        gameLogMessage.classList.add("endState");
      } else if (computerCount == 5 && playerCount < 5) {
        gameLogMessage.textContent = "You Lose!";
        gameLogMessage.classList.add("endState");
      } else if (playerCount == 5 && computerCount < 5) {
        gameLogMessage.textContent = "You Won!";
        gameLogMessage.classList.add("endState");
      }

      gameLog.appendChild(gameLogMessage); //Display the message inside gamelog div

      console.log("player:" + playerCount + "\n" + "computer:" + computerCount);
      playerScore.textContent = "Player: " + playerCount;
      computerScore.textContent = "Computer: " + computerCount;

      player.appendChild(playerScore);
      computer.appendChild(computerScore);
    });
  });
}

game();
