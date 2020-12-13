

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//var password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;

//Step 1: prompt for length of password, set pwLength variable and prompt for number of characters in pw between 8 and 128.  Change input from string to number.

var pwLength = Number(prompt("Enter the number of characters for your new password. Minimum is 8 characters and maximum is 128 characters"));

if (pwLength <= 7) {
  alert("Passwrod must be greater than 8 characters and less than 128 characters");
}

else if (pwLength >= 129) {
  alert("Password must be greater than 8 characters and less than 128 characters");
}
var lowercase = confirm("Do you want lowercase characters - Click Enter for Yes, Cancel for No")
var uppercase = confirm("Do you want uppercase characters? Click Enter for Yes, Cancel for No")
var spChar = confirm("Do you want special characters? Click Enter for Yes, Cancel for No")
var number = confirm("Do you want numbers? Click Enter for Yes, Cancel for No")



console.log(pwLength);
console.log(lowercase);
console.log(uppercase);
console.log(spChar); 
console.log(number);




  //Step 2: select character from ASCII sets - lower, upper, numbers, and special characters

  //Step 3: Validate input, make sure at least 1 item is selected

  //Step 4: Create password using input requirements

 // function generatePassword () {

  //Step 5: alert password

    //}}
