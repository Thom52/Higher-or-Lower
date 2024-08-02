// Keeps value of last dice roll
let previousRoll = 0;

// Wait for DOM to finish loading before running code
// Get button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {

    rollDice();

    higherButton = document.querySelector(".higher");
    higherButton.addEventListener("click", selectedHigher); {
    }

    lowerButton = document.querySelector(".lower");
    lowerButton.addEventListener("click", selectedLower);

})

/**
 * Begins main game loop. 
 * Rolls dice on DOM load and stores value
 * for guessing higher or lower
 */
function rollDice() {

    const num1 = Math.floor(Math.random() * 6) + 1;
    console.log(num1);

    document.querySelector("#dice").setAttribute("src", "assets/" + "images/" +
    "d" + num1 + ".png");

    previousRoll = num1;
}

/**
 * Generates and stores a new random number
 */
function newDiceResult() {

    const num1 = Math.floor(Math.random() * 6) + 1;
    console.log(num1);
    
    document.querySelector("#dice").setAttribute("src", "assets/" + "images/" +
    "d" + num1 + ".png");

    const newResult = num1;

    return newResult;
}

/**
 * Checks the current roll against the new result
 * looks to see if the new value is higher then the previous
 * if so, tells the user if they guessed correctly or not
 */
function selectedHigher() {

    const newResult = newDiceResult();

    if (newResult > previousRoll) {
        alert("Congratulations!");
    } else {
        alert("Better luck next time!");
    }

}

/**
 * Checks the current roll against the new result
 * looks to see if the new value is lower then the previous
 * if so, tells the user if they guessed correctly or not
 */
function selectedLower() {

    const newResult = newDiceResult();

    if (newResult < previousRoll) {
        alert("Congratulations!");
    } else {
        alert("Better luck next time!");
    }   

}

function incrementCorrect() {

}

function incrementIncorrect() {

}

