let currentRoll = 0;

// Wait for DOM to finish loading before running code
document.addEventListener("DOMContentLoaded", function() {

    rollDice();

    higherButton = document.querySelector(".higher");
    higherButton.addEventListener("click", selectedHigher);
    
})

function rollDice() {

    const num1 = Math.floor(Math.random() * 6) + 1;

    currentRoll = num1;

    document.querySelector("#dice").setAttribute("src", "assets/" + "images/" +
    "d" + num1 + ".png");
}

function newDiceResult() {

    const num1 = Math.floor(Math.random() * 6) + 1;

    const newResult = num1;

    document.querySelector("#dice").setAttribute("src", "assets/" + "images/" +
    "d" + num1 + ".png");

    return newResult;

}

function selectedHigher() {

    const newResult = newDiceResult();

    if (newResult >= currentRoll) {
        alert("Congratulations!");
    } else {
        alert("Better luck next time!");
    }

}

function selectedLower() {

}

function incrementCorrect() {

}

function incrementIncorrect() {

}