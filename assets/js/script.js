// Keeps value of last dice roll
let currentRoll = 0;
let newResult;

let messageDiv = document.getElementById("message");

// Wait for DOM to finish loading before running code
// Get button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {

    rollDice();

    let higherButton = document.querySelector(".higher");
    higherButton.addEventListener("click", function () {
        selectedUserChoice("higher");
    });

    let lowerButton = document.querySelector(".lower");
    lowerButton.addEventListener("click", function () {
        selectedUserChoice("lower");
    });

});

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
 * Main game loop. 
 * User chooses higher or lower and the function
 * reacts depending on if the guess was correct
 * or incorrect
 */
function selectedUserChoice(higherChoice) {

    newResult = newDiceResult();

    let message = "Bad luck, you guessed wrong!";

    if (newResult === currentRoll) {
        message = "You hit the 1/6 chance of rolling the same number! Roll again!";
    } else if ((newResult > currentRoll && higherChoice == "higher") || (newResult < currentRoll && higherChoice == "lower")) {
        message = "You guessed right, congratulations!";
        incrementCorrect();
    } else {
        incrementIncorrect();
    }

    messageDiv.innerHTML = message;

    currentRoll = newResult;

    setTimeout(function () {
        messageDiv.innerHTML = "";
    }, 2000);

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