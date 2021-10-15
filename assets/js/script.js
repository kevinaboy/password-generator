// Assignment code here

// DOM elements
const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('passwordLength');
const uppercaseEl = document.getElementById('upperChars');
const lowercaseEl = document.getElementById('lowerChars');
const numbersEl = document.getElementById('numericChars');
const symbolsEl = document.getElementById('specialChars');

// Number, String, Arrays, Booleans, Objects

// const number = 5;
// const string = "hello";
// const arrays = ["blue", "red", "yellow"];

// arrays[0] // ---> blue

// const person = {
//   name: "John",
//   age: 30
// }

// person.age // ---> 30

const randomFun = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// General Functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // min: 97
  // max: 122
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  // min: 65
  // max : 90
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}-=,./<>';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// const hasUpper = uppercaseEl.checked;

// console.log(hasUpper);
/*
generateBtn.addEventListener("click", ()=> {
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  console.log(hasLower, hasUpper, hasNumber, hasSymbol);

});

*/

/*original code for generate button

generateBtn.addEventListener("click", writePassword);

*/
