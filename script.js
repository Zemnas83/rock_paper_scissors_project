function getComputerChoice() {
    var options = ['rock', 'paper', 'scissors'];
    var computerChoice = Math.floor(Math.random() * options.length);
    return options[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == 'rock' && playerSelection == 'rock') {
        return "It's a tie!";
    }
    else if (computerSelection == 'paper' && playerSelection == 'paper') {
        return "It's a tie!";
    }
    else if (computerSelection == 'scissors' && playerSelection == 'scissors') {
        return "It's a tie!";
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return "You lost!";
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return "You lost!";
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return "You lost!";
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper') {
        return "You won!";
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        return "You won!";
    }
    else {
        return "You won!";
    }
}

let wins = 0;
let losses = 0;
let ties = 0;

function checkForGameWinner() {
    if (wins >= 5) {
        return "You won the game!";
    } else if (losses >= 5) {
        return "Computer won the game!";
    }
    return null;
}

function gameHelper() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', function gameRound() {
            let playerSelection = button.id;
            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection);

            if (result == "It's a tie!") {
                ties++;
            }
            else if (result == "You lost!") {
                losses++;
            }
            else {
                wins++;
            }

            let gameWinner = checkForGameWinner();

            if (gameWinner) {
                result = gameWinner; // Override the round result with the game result
                buttons.forEach(btn => {
                    btn.removeEventListener('click', gameRound); // Disable further interactions
                });
            }

            let displayMsg = "Round Result: " + result + ". You played: " + playerSelection + ", Computer played: " + computerSelection + "\n";
            displayMsg += "Score so far: Wins: " + wins + ", Losses: " + losses + ", Ties: " + ties + "\n";

            if (wins > losses) {
                displayMsg += "You're leading!";
            } 
            else if (wins < losses) {
                displayMsg += "Computer is leading!";
            }
            else {
                displayMsg += "It's a tie so far!";
            }

            const main = document.querySelector('#main');
            const score = document.createElement('div');
            score.classList.add('score'); 
            score.textContent = displayMsg;
            main.append(score);

            console.log(displayMsg);
        });
    });
}

function game() {
    gameHelper();
}

game();
