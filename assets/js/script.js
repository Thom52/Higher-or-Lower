// Keeps value of last dice roll
let currentRoll = 0;

// Wait for DOM to finish loading before running code
// Get button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {

    rollDice();

    higherButton = document.querySelector(".higher");
    higherButton.addEventListener("click", selectedHigher);

    lowerButton = document.querySelector(".lower");
    lowerButton.addEventListener("click", selectedLower);

})

/**
 * Begins main game loop. 
 * Rolls dice on DOM load and stores value
 * for guessing higher or lower
 */
function rollDice() {

    let num1 = Math.floor(Math.random() * 6) + 1;

    document.querySelector("#dice").setAttribute("src", "assets/" + "images/" +
    "d" + num1 + ".png");

    currentRoll = num1;
}

/**
 * Generates and stores a new random number
 */
function newDiceResult() {

    let num1 = Math.floor(Math.random() * 6) + 1;
    console.log(num1);
    let newResult = num1;

    document.querySelector("#dice").setAttribute("src", "assets/" + "images/" +
    "d" + num1 + ".png");

    return newResult;
}

/**
 * Checks the current roll against the new result
 * looks to see if the new value is higher then the previous
 * if so, tells the user if they guessed correctly or not
 */
function selectedHigher() {

    let newResult = newDiceResult();
    if (newResult === currentRoll) {
        alert("You hit the 1/6 chance of rolling the same number! Roll again!");
    } else if (newResult > currentRoll) {
        alert("You guessed right, congratulations!");
        incrementCorrect();
    } else {
        alert("Bad luck, you guessed wrong!")
        incrementIncorrect();
    }

    currentRoll = newResult;

}

/**
 * Checks the current roll against the new result
 * looks to see if the new value is lower then the previous
 * if so, tells the user if they guessed correctly or not
 */
function selectedLower() {

    let newResult = newDiceResult();
    if (newResult === currentRoll) {
        alert("You hit the 1/6 chance of rolling the same number! Roll again!");
    } else if (newResult < currentRoll) {
        alert("You guessed right, congratulations!");
        incrementCorrect();
    } else {
        alert("Bad luck, you guessed wrong!")
        incrementIncorrect();
    }

    currentRoll = newResult;

}

/**
 * increments correct guesses scoreboard by 1
 */
function incrementCorrect() {

    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;

}

/**
 * increments incorrect guesses scoreboard by 1
 */
function incrementIncorrect() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

