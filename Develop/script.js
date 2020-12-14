

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

// Checks to make sure input is in the right format
//console.log(pwLength);
//console.log(lowercase);
//console.log(uppercase);
//console.log(spChar);
//console.log(number);


//Step 2: select character from ASCII sets - lower, upper, numbers, and special characters

//Experiment: Using a function to make the array; I found this in researching "push" when building arrays and wanted to see if I could do it.

var lowercasearray = [];
for (var i = 97; i < 123; i++) {
  lowercasearray.push(String.fromCharCode(i));
}

var uppercasearray = [];
for (var i = 65; i < 91; i++) {
  uppercasearray.push(String.fromCharCode(i));
}

var numberarray = [];
for (var i = 48; i < 58; i++) {
  numberarray.push(String.fromCharCode(i));
}

var symbolarray = [];
for (var i = 33; i < 48; i++) {
  symbolarray.push(String.fromCharCode(i));
}

//Success after some deep digging in w3schools fromCharCode and a few YouTube samples!  THere is a way to make this cleaner and DRY, but I won't work on this unless I have time.


//Step 3: Validate input, make sure at least 1 item is selected and a number is selected.

if (!pwLength) {
  alert("You must select a number between 8 and 128");


{

//alert("Please start over. You must select at least 1 condition (lower case, upper case, special character, or number)");
}


//Step 4: Create password using input requirements  (Look for inputs to be true, concatenate the strings, then choose random number and fill the password until the variable pwLength is satisfied. 


var nuls = lowercasearray.concat(uppercasearray, numberarray, symbolarray);

var nul = lowercasearray.concat(uppercasearray, numberarray);

var ul = lowercasearray.concat(uppercasearray);

var sul = lowercasearray.concat(uppercasearray, symbolarray);

var us = uppercasearray.concat(symbolarray);

var un = numberarray.concat(uppercasearray);

var nus = numberarray.concat(uppercasearray, symbolarray);

var ls = lowercasearray.concat(symbolarray);

var ln = lowercasearray.concat(numberarray);

var sn = symbolarray.concat(numberarray);



//console.log(nuls);
//console.log(nul);
//console.log(ul);
//console.log(sul);
//console.log(us);
//console.log(un);
//console.log(nus);
//console.log(ls);
//console.log(ln);
//console.log(sn);


//function generatePassword(pwLength, lowercase, uppercase, spChar, number) {
 //if (

  

  //for (let i = 0; i < pwLength; i++); {
    //temporarypw = charCodes[Math.floor(Math.random() * pwLength)]


    //Step 5: alert password

  
}