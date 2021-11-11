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
  // get the length of the password
  var length = getLength();

  // log it for debugging reasons
  console.log(length);

  return password;
}

// prompts the user for the length of the password and returns the value
var getLength = function() {

  // perform while() loop until the input is valid
  while (true) {

    // prompt the user for the length
    var length = window.prompt("How long would you like your password to be? (pick a value between 8 and 128: ");

    // parseInt will return NaN if the user entered something other than a number
    length = parseInt(length);
    
    // if the input is a number, check if it's a value between 8 and 128
    if (length != NaN){
      if (length >= 8 && length <= 128) {

        // return the length if it fits our criteria
        return length;
      }
    }

    window.alert("Invalid input. Please try again.")
  }
}

// prompts the user for what characters to include in their password
var getCharacters = function() {
  
}
