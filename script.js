const GAME_CHOICES = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const playerSelectionImage = document.querySelector('.game-user>img');
const computerSelectionImage = document.querySelector('.game-computer>img');

function getComputerSelection() {
    let index = Math.floor(Math.random() * GAME_CHOICES.length);
    return GAME_CHOICES[index];
}

const buttons = document.querySelectorAll('.choices>button');

const scorecard = document.querySelector('.scorecard');


buttons.forEach((button) => {
    button.addEventListener('click', playGame);
});

function playGame(e) {
    
    let playerSelection;
    let computerSelection;

    playerSelection = e.target.alt;
    playerSelectionImage.setAttribute('src', `images/${playerSelection}-1.png`);

    computerSelection = getComputerSelection();
    computerSelectionImage.setAttribute('src', `images/${computerSelection}-1.png`);

    playerSelectionImage.classList.remove('border-green', 'border-red', 'border-none');
    computerSelectionImage.classList.remove('border-green', 'border-red', 'border-none');

    let result = getWinner(playerSelection, computerSelection)
    if (result == "tied") {
        playerSelectionImage.classList.add('border-none');
        computerSelectionImage.classList.add('border-none');
    }
    else if (result == "player") {
        playerSelectionImage.classList.add('border-green');
        computerSelectionImage.classList.add('border-red');
        playerScore++;
    }
    else {
        computerSelectionImage.classList.add('border-green');
        playerSelectionImage.classList.add('border-red');
        computerScore++;
    }
    
    if (playerScore==5 || computerScore==5){
        let winner;
        if (playerScore===5){
            winner = "You"
        }
        else{
            winner = "Computer"
        }
        resetGame(winner);
    }
    scorecard.textContent = `${playerScore} - ${computerScore}`;
}

function resetGame(winner){
    alert(`${winner} won the game by ${playerScore} - ${computerScore}.\nClick "OK" to play again.`)
    playerScore = 0;
    computerScore = 0;
    playerSelectionImage.classList.remove('border-green', 'border-red', 'border-none');
    computerSelectionImage.classList.remove('border-green', 'border-red', 'border-none');
    computerSelectionImage.setAttribute('src', 'images/question-mark-red.png');
    playerSelectionImage.setAttribute('src', `images/question-mark-green.png`);
}

function getWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tied";
    }
    else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        return "computer"
    }
    else {
        return "player"
    }
}