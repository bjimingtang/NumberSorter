var numberArray = [];
var gameStarted = false;

/*
Function: startGame
Start the game by generating the random numbers and displaying them.
The numbers will be held in the numberArray, which will be sorted to check the answer.
Parameters: numberOfNumbers - int, the number of numbers to sort
*/
function startGame(numberOfNumbers) {
  if (gameStarted) {
    return;
  }
  gameStarted = true;
  for (var i = 0; i < numberOfNumbers; i++) {
    // produce a whole number from 0 to 1000
    let numberToAdd = Math.floor(Math.random() * 1001);
    // append to the array
    numberArray.append(numberToAdd);
    // create a display element to show the user the number
    let cellToAdd = document.createElement("td");
    cellToAdd.innerText = numberToAdd;
    document.getElementById("displayRow").appendChild(cellToAdd);
    // create a number input element for the user's input answer
    let inputToAdd = document.createElement("input");
    inputToAdd.setAttribute("type", "number");
    inputToAdd.setAttribute("id", "input" + i);
    document.getElementById("answerInputsHere").appendChild(inputToAdd);
  }

  let submissionButton = document.createElement("button");
  submissionButton.setAttribute("onclick", "checkAnswer()");
  submissionButton.innerText = "Submit Answer!";
  document.getElementById("answerInputsHere").appendChild(inputToAdd);
}

/*
Function: checkAnswer
Check the user input against a sorted numberArray. Tell the user whether or not they're correct or not.
Add a reset button to reset the page
*/
function checkAnswer() {
  document.getElementById("resultDisplay").innerHTML = "";

  let resetButton = document.createElement("button");
  resetButton.innerText = "Reset";
  resetButton.setAttribute("onclick", "location.reload()");
}
