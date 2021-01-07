// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// DOM elements

const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("uppercase");
const numbersElement = document.getElementById("numbers");
const generateElement = document.getElementById("generate");

// Calling the function after click

generateElement.addEventListener('click', function () {
  confirmingQuestions ()
  });


function confirmingQuestions () {
  var confirmLength = prompt("Please select a number between 8 and 128")
  if (confirmLength < 8 || confirmLength > 128) {
     confirmingQuestions ();
  };

  var confirmUpperCase = confirm("Allow upper case?");

  var confirmNumberCase = confirm("Add number?");

  var confirmSpecialCase = confirm("Add Special Character?");

  var genPassword = "";

  for (let index = 0; index < confirmLength; index++) {
    // const element = array[index];
    switch (randomPasswordSelection()) {
      case 1: 
        genPassword += getRandomUpper();
        break;
      case 2:
        genPassword += getRandomNumber();
        break;
      case 3:
        genPassword += getRandomSpecialCharacter();
        break;
      case 4:
        genPassword += getRandomUpper();
        break;
      default:
        genPassword += getRandomLower();
        break;
    }
    genPassword += ""
  }
  console.log(genPassword);
  console.log(randomPasswordSelection())
};



function randomPasswordSelection (allowUpper, allowNumber, allowSpecial) {
 return Math.floor(Math.random() * 5) +1 
};

// Loop how many times it goes 

/* Loop for character length
If type = true(Special, char, number, Lower, upper)
Grab a random char for that type
Append / cocat to global string variable(+=)

*/


 
// const randomFunction = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   special: getRandomSpecialCharacter
// };




// Generate lowercase letter

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// Generate uppercase letter

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Generate number

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// Generate Special Character

function getRandomSpecialCharacter() {
  const SpecialCharacter = "!@#$%^&*(){}[]=<>/.,";
  return SpecialCharacter[Math.floor(Math.random() * SpecialCharacter.length)];
};


// console logs

console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSpecialCharacter());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



