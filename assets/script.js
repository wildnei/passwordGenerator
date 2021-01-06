// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var confirmLength = prompt("Please select a number between 8 and 128")
var confirmLowerCase = confirm("Add lower case?")
var confirmUpperCase = confirm("Add upper case?")
var confirmUpperCase = confirm("Add Special Character?")


// DOM elements

const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numbersElement = document.getElementById("numbers");
const generateElement = document.getElementById("generate");


generateElement.addEventListener('click', function () {
  if (confirmLength) {
  }

})


const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecialCharacter
};


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

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSpecialCharacter());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



