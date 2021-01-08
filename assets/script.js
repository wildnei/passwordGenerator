// Assignment Code
var generateBtn = document.querySelector("#generate");

// DOM elements

const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("uppercase");
const numbersElement = document.getElementById("numbers");
const generateElement = document.getElementById("generate");

// Calling the function after click

generateElement.addEventListener('click', function () {
  confirmingQuestions()
});

// Prompts for questions

function confirmingQuestions() {
  var confirmLength = prompt("Please select a number between 8 and 128")
  if (confirmLength < 8 || confirmLength > 128) {
    confirmingQuestions();
  };

  var confirmUpperCase = confirm("Allow upper case?");

  var confirmLowerCase = confirm("Allow lower case?");

  var confirmNumberCase = confirm("Add number?");

  var confirmSpecialCase = confirm("Add Special Character?");

  var genPassword = "";

  // This while makes the values loop until it has validate the answer from true or false

  for (let index = 0; index < confirmLength; index++) {

    var randNumber = randomPasswordSelection();
    var x = true
    while (x) {
      x = false

      console.log(randNumber, confirmLowerCase);

      if (randNumber === 1 && confirmLowerCase === false) {

        randNumber = randomPasswordSelection();
        x = true;
      }

      if (randNumber === 2 && confirmUpperCase === false) {
        randNumber = randomPasswordSelection();
        x = true;
      }

      if (randNumber === 3 && confirmNumberCase === false) {
        randNumber = randomPasswordSelection();
        x = true;
      }

      if (randNumber === 4 && confirmSpecialCase === false) {
        randNumber = randomPasswordSelection();
        x = true;
      }

    }

    switch (randNumber) {
      case 1:
        genPassword += getRandomLower();
        break;
      case 2:
        genPassword += getRandomUpper();
        break;
      case 3:
        genPassword += getRandomNumber();
        break;
      case 4:
        genPassword += getRandomSpecialCharacter();
        break;
    }

    genPassword += ""
  };

  var displayPassword = document.querySelector("#password");
  displayPassword.textContent = genPassword

  console.log(genPassword);
  console.log(randomPasswordSelection());

};

function randomPasswordSelection(allowUpper, allowNumber, allowSpecial) {
  return Math.floor(Math.random() * 4) + 1
};

// Generate lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
console.log(getRandomLower());

// Generate uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
console.log(getRandomUpper());

// Generate number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
console.log(getRandomNumber());

// Generate Special Character
function getRandomSpecialCharacter() {
  const SpecialCharacter = "!@#$%^&*(){}[]=<>/.,";
  return SpecialCharacter[Math.floor(Math.random() * SpecialCharacter.length)];
};
console.log(getRandomSpecialCharacter());



