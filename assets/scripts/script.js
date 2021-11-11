// set flags for what characters to include in the password
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// primary function that generates password
var generatePassword = function() {
  return password;
}

// prompts the user for the length of the password and returns the value
var getLength = function() {
  return length;
}

// prompts the user for what characters to include in their password
var getCharacters = function() {
  
}
