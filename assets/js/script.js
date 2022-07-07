/*jshint esversion: 6 */

const fullGame = [
    ["Draw!", "Player wins!", "Computer wins!"],
    ["Player wins!", "Draw!", "Computer wins!"],
    ["Computer wins!", "Player wins!", "Draw!"]
];

let messages = document.getElementById('messages');
let choices = ["rock", "paper", "scissors"];

/**
 * Adding Event listeners to all of the buttons
 */

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByClassName('set-game');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            let playerChoice = this.getAttribute('data-choice');
            playGame(playerChoice);
        });
    }
});

/**
 * Main game function. Agrees to receive one parameter, which 
 * in turn is the value of the data-choice of the button selected
 */

function playGame(playerChoice) {

    let playerImg = document.getElementById('player-image');
    playerImg.src = `assets/images/${choices[playerChoice]}.png`;
    playerImg.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    let computerImg = document.getElementById('computer-image');
    computerImg.src = `assets/images/${choices[computerChoice]}.png`;
    computerImg.alt = choices[computerChoice];

    let result = checkWinner(playerChoice, computerChoice);
    displayResult(result, messages);
    console.log("result: ", result);
}

function checkWinner(playerChoice, computerChoice) {
    return fullGame[playerChoice][computerChoice];
}

function displayResult(result, elem) {
    elem.innerText = result;
}