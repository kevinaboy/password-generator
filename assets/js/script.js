// Assignment code here

// DOM elements
const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('passwordLength');
const uppercaseEl = document.getElementById('upperChars');
const lowercaseEl = document.getElementById('lowerChars');
const numbersEl = document.getElementById('numericChars');
const symbolsEl = document.getElementById('specialChars');

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

function generatePassword() {
  console.log(lowercaseEl.checked);
  console.log(uppercaseEl.checked);
  console.log(numbersEl.checked);
  console.log(symbolsEl.checked);
  console.log(lengthEl.value);
  var pw = ""

  for (let i = 0; i <= lengthEl.value; i++) {
    if (lowercaseEl.checked && pw.length < lengthEl.value) {
      pw += randomFun.lower();
    }

    if (uppercaseEl.checked && pw.length < lengthEl.value) {
      pw += randomFun.upper();
    }

    if (numbersEl.checked && pw.length < lengthEl.value) {
      pw += randomFun.number();
    }

    if (symbolsEl.checked && pw.length < lengthEl.value) {
      pw += randomFun.symbol();
    }
  }

  return pw
}