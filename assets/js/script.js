// Wait for DOM to finish loading before running code

document.addEventListener("DOMContentLoaded", function() {
    const rollDiceButton = document.querySelector(".btn--roll");
    rollDiceButton.addEventListener("click", rollDice);
    document.getElementById("result") + dice;
})

function rollDice() {
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
}

function displayDice() {
    let dice = document.querySelector(".img1").setAttribute("src", "d" + num + ".png");
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