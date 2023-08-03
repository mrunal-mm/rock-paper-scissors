// const GAME_CHOICES = ['rock', 'paper', 'scissors'];

// function getComputerSelection() {
//     let index = Math.floor(Math.random() * GAME_CHOICES.length);
//     return GAME_CHOICES[index];
// }

// function getWinner(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         return "tied";
//     }
//     else if (playerSelection === "rock" && computerSelection === "paper" ||
//         playerSelection === "paper" && computerSelection === "rock" ||
//         playerSelection === "scissors" && computerSelection === "rock") {
//         return "computer"
//     }
//     else {
//         return "player"
//     }
// }

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let gameNumber = 0;

//     while (playerScore != 5 && computerScore != 5) {
//         gameNumber++;
//         console.log(`GAME - ${gameNumber}`);
//         let playerSelection = prompt("Enter your choice between Rock, Paper and Scissor: ").toLowerCase();
//         let computerSelection = getComputerSelection();

//         console.log(`Player choose - ${playerSelection} and Computer choose ${computerSelection}`);
//         let result = getWinner(playerSelection, computerSelection);

//         if (result == "tied") {
//             console.log("MATCH TIED.");
//         }

//         else if (result == "player") {
//             console.log(`${playerSelection} beats ${computerSelection}. PLAYER WINS! 👌`);
//             playerScore++;
//         }

//         else {
//             console.log(`${computerSelection} beats ${playerSelection}. COMPUTER WINS! 👎`);
//             computerScore++;
//         }

//         console.log(`Player - ${playerScore}\nComputer - ${computerScore}`);
//         console.log("-----------------------------------------------------------\n");
//     }
    
//     console.clear()
//     if (playerScore > computerScore) {
//         console.log(`Player wins the 5 match series by ${playerScore}-${computerScore}.🏆`)
//     }
//     else {
//         console.log(`Computer wins the 5 match series by ${computerScore}-${playerScore}.👎`)
//     }
// }


// game()