

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //Step 1: prompt for length of password

  //Step 2: select character from ASCII sets - lower, upper, numbers, and special characters

  //Step 3: Validate input, make sure at least 1 item is selected

  //Step 4: Create password using input requirements

  //Step 5: alert password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);