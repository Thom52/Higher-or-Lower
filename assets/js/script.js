// Wait for DOM to finish loading before running code

document.addEventListener("DOMContentLoaded", function() {
    rollDice();
    const rollDiceButton = document.querySelector(".btn--roll");
    rollDiceButton.addEventListener("click", rollDice);
})

function rollDice() {
    let number = 5;
    console.log(number);
}

function selectedHigher() {

}

function selectedLower() {

}

function checkResult() {

}

function incrementCorrect() {

}

function incrementIncorrect() {

}