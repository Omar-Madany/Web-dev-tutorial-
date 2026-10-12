
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
function playersChoice() {
    let playerChoice = prompt(" Please choose rock, paper or scissors");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    }
    else if (playerChoice === null || playerChoice === "" || playerChoice === "leave") {
        alert("Game cancelled.");
        alert(`Final score: Player: ${playerScore}, Computer: ${computerScore}`);
        return null;
    }
    else {
        alert("Invalid choice. Please choose rock, paper or scissors.");
        return playersChoice();
    }
}
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let round = 0;
let score = document.getElementById("score");
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tieScore++;
        score.textContent = `Player: ${playerScore}, Computer: ${computerScore}, Ties: ${tieScore}`;
        return "It's a tie!";
        
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        score.textContent = `Player: ${playerScore}, Computer: ${computerScore}, Ties: ${tieScore}`;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
        
    }
    else {
        computerScore++;
        score.textContent = `Player: ${playerScore}, Computer: ${computerScore}, Ties: ${tieScore}`;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}
let result = document.getElementById("game-info");
function game() {
    const rounds = parseInt(document.getElementById("rounds").value) || 3;
    for (let i = 0; i < rounds; i++) {
        let playerSelection = playersChoice();
        if (playerSelection === null) {
            return;
        }
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        // alert(`You win the game! \n Final score: Player: ${playerScore}, Computer: ${computerScore}`);
        result.textContent = `You win the game! Final score: Player: ${playerScore}, Computer: ${computerScore} ties: ${tieScore}`;
    }
    else if (playerScore < computerScore) {
        
        result.textContent = `You lose the game! Final score: Player: ${playerScore}, Computer: ${computerScore} ties: ${tieScore}`;
    }
    else {
        result.textContent = `The game is a tie! Final score: Player: ${playerScore}, Computer: ${computerScore} ties: ${tieScore}`;
    }
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    result.textContent = "ready to play?";
}