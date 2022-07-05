/** 
 * Declaring constants for DOM elements
 * and choices (rock, paper, scissors)
 */

const buttons = document.getElementsByClassName('set-game');
const playerResult = document.getElementById('player-score');
const computerResult = document.getElementById('computer-score');
const playerImg = document.getElementById('player-image');
const computerImg = document.getElementById('computer-image');
const messages = document.getElementById('messages');
const choices = ["rock", "paper", "scissors"];

/**
 * Adding Event listeners to all the controls
 */

for (let button of buttons) {
    button.addEventListener("click", function(){
        let playerChoice = this.getAttribute('data-choice');
        playGame(playerChoice);
    });
}

/**
 * Main game function. Agrees to receive one parameter, which 
 * in turn is the value of the data-choice of the button selected
 */

function playGame(playerChoice) {
    playerImg.src = `assets/images/${choices[playerChoice]}.png`;
    playerImg.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3 );

    computerImg.src = `assets/images/${choices[computerChoice]}.png`;
    computerImg.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}

function checkWinner(playerChoice, computerChoice) {
    
}