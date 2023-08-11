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
    else if (computerSelection == 'rock' && playerSelection == 'paper]') {
        return "You won!";
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        return "You won!";
    }
    else {
        return "You won!";
    }
}


function gameHelper() {
    let result = '';
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let displayMsg = '';

    for (let i = 1; i <= 5; i++) {
        var userInput = prompt("Enter either rock, paper or scissors:");
        var playerSelection = userInput.toLowerCase();
        var computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);

        if (result == "It's a tie!") {
            ties++;
        }
        else if (result == "You lost!") {
            losses++;
        }
        else {
            wins++;
        }
        displayMsg += "Round " +i+ " Result: " +result+ " You played: " +playerSelection+ ", Computer played: " +computerSelection + "\n";
        
    }

    displayMsg += "Final score: Wins: " +wins+ ", Losses: " +losses+ ", Ties: " +ties+ "\n";

    if (wins > losses) {
        displayMsg += "Congrats, you won the game!";
    } 
    else if (wins < losses) {
        displayMsg += "You lost! The computer won the game";
    }
    else {
        displayMsg += "The game is a tie!";
  
    }

    return displayMsg;
}


function game() {
    console.log(gameHelper());
}

game();