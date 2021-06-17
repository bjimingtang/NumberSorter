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
    numberArray.push(numberToAdd);
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
  document.getElementById("answerInputsHere").appendChild(document.createElement("br"));
  document.getElementById("answerInputsHere").appendChild(submissionButton);
}

/*
Function: checkAnswer
Check the user input against a sorted numberArray. Tell the user whether or not they're correct or not.
Add a reset button to reset the page
*/
function checkAnswer() {
  // remove previous display
  document.getElementById("resultDisplay").innerHTML = "";
  // get the correct answer
  const correctAnswer = mergeSort(numberArray);
  // make the user answer
  const userAnswer = [];
  for (var i = 0; i < numberArray.length; i++) {
    let elementId = "input" + i;
    userAnswer.push(parseInt(document.getElementById(elementId).value));
  }

  // display result
  let resultDisplayText = document.createElement("p");
  // check user answer against correct answer
  let answerChecker = true;
  for (var i = 0; i < correctAnswer.length; i++) {
    if (userAnswer[i] != correctAnswer[i]) {
      answerChecker = false;
    }
  }
  if (answerChecker) {
    resultDisplayText.innerText = "Correct!";
  } else {
    resultDisplayText.innerText = "Try again!";
  }
  document.getElementById("resultDisplay").appendChild(resultDisplayText);
  // add reset button
  let resetButton = document.createElement("button");
  resetButton.innerText = "Reset";
  resetButton.setAttribute("onclick", "location.reload()");
  document.getElementById("resultDisplay").appendChild(resetButton);
}

/*
Function: mergeSort
Perform mergeSort on an array of numbers
Parameters: arrayToSort - array of ints
*/
function mergeSort(arrayToSort) {
  if (arrayToSort.length < 2) {
    // just return the array if it's length 1
    return arrayToSort;
  }
  // find the middle and use it to split the array in half
  let middle = Math.floor(arrayToSort.length / 2);
  let leftSide = arrayToSort.slice(0, middle);
  let rightSide = arrayToSort.slice(middle, arrayToSort.length);
  // merge the two sorted halves
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

/*
Function: merge
Merge two arrays in sorted order
Parameters: array1 - array of ints
array2 - array of ints
*/
function merge(array1, array2) {
  // hold the result here
  const result = [];
  // push the first element of the array where the first element is lower
  // repeat until one array is finished
  while (array1.length && array2.length) {
    if (array1[0] <= array2[0]) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }
  // finish the remainder
  while(array1.length) {
    result.push(array1.shift());
  }
  while(array2.length) {
    result.push(array2.shift());
  }

  return result;
}
