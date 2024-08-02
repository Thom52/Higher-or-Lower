// Wait for DOM to finish loading before running code

document.addEventListener("DOMContentLoaded", function() {

    rollDice();

    const rollDiceButton = document.querySelector(".btn--roll");
    rollDiceButton.addEventListener("click", rollDice)

})

function rollDice() {

    let num1 = Math.floor(Math.random() * 6) + 1;

    document.querySelector("#dice").setAttribute("src", "assets/" + "images/" +
    "d" + num1 + ".png");
}

function diceResult() {

}

function selectedHigher() {

}

function selectedLower() {

}

function diceResult() {

}

function incrementCorrect() {

}

function incrementIncorrect() {

}