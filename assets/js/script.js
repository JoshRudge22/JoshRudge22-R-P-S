const choices = document.querySelectorAll('.choice');
const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('.computer-score');
const resultElem = document.querySelector('.result');
const restartButton = document.querySelector('.restart');

/*-----Score Board-----*/ 
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const roundLimit = 10;

/*-----Player Choices-----*/ 
function computerPlay() {
    const choicesArr = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choicesArr[randomNum];
}

/*-----Results Depending on Users Choice-----*/ 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultElem.textContent = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        resultElem.textContent = 'You win!';
        playerScore++;
    } else {
        resultElem.textContent = 'You lose!';
        computerScore++;
    }
    playerScoreElem.textContent = 'Player: ' + playerScore;
    computerScoreElem.textContent = 'Computer: ' + computerScore;
}

/*-----Stops the Game-----*/ 
function checkRoundLimit() {
    rounds++;
    if (rounds === roundLimit) {
        resultElem.textContent = 'Game over!';
        choices.forEach(choice => {
            choice.disabled = true;
        });
        resultElem.textContent += ` Player: ${playerScore}, Computer: ${computerScore}`;
    }
}

/*-----Shows Results-----*/ 
choices.forEach(choice => {
    choice.addEventListener('click', function () {
        const playerSelection = this.getAttribute('data-value');
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        checkRoundLimit();
        if (playerScore === roundLimit || computerScore === roundLimit) {
            resultElem.textContent = 'Game over!';
            choices.forEach(choice => {
                choice.disabled = true;
            });
            resultElem.textContent += ` Player: ${playerScore}, Computer: ${computerScore}`;
        }
    });
});

/*-----Restarts Game-----*/ 
function restart() {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    playerScoreElem.textContent = 'Player: ' + playerScore;
    computerScoreElem.textContent = 'Computer: ' + computerScore;
    resultElem.textContent = '';
    choices.forEach(choice => {
        choice.disabled = false;
    });
}

restartButton.addEventListener('click', restart);

/*-----Removes Rules-----*/ 

function rules() {
    var x = document.getElementById("rules")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}