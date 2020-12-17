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

//Step 1: prompt for length of password, set pwLength variable and prompt for number of characters in pw between 8 and 128.  Change input from string to number.

var pwLength = Number(prompt("Enter the number of characters for your new password. Minimum is 8 characters and maximum is 128 characters"));

//Step 3: Validate input using while loop; fixed logic error that sent this into infinity.

while (pwLength < 8 || pwLength > 128) {
  alert("Password must be between 8-128 characters. Try again.");
  var pwLength = Number(prompt("Enter the number of characters for your new password. Minimum is 8 characters and maximum is 128 characters"));

}

var lowercase = confirm("Do you want lowercase characters? Click OK for Yes, Cancel for No")
var uppercase = confirm("Do you want uppercase characters? Click OK for Yes, Cancel for No")
var spChar = confirm("Do you want special characters? Click OK for Yes, Cancel for No")
var number = confirm("Do you want numbers? Click OK for Yes, Cancel for No")


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

//Step 3: Create password using input requirements  (Look for inputs to be true, concatenate the strings, then choose random number and fill the password until the variable pwLength is satisfied. 

function generatePassword() {
  if (lowercase && uppercase && spChar && number)
    allChars = lowercasearray.concat(uppercasearray, numberarray, symbolarray);

  else if (lowercase && uppercase && spChar)
  allChars = lowercasearray.concat(uppercasearray, spChar);

  else if (lowercase && uppercase)
  allChars = lowercasearray.concat(uppercasearray)

  else if (uppercase && spChar && number)
  allChars = uppercasearray.concat(spChararray, numberarray);

  else if (spChar && number)
  allChars = spChararray.concat(numberarray);


  //for (let i = 0; i < pwLength; i++); {
  //password[Math.floor(Math.random() * pwLength.length)];}

  for (let i = 0; i < pwLength; i++) {
    number = Math.random() * allChars.length;
    Math.floor(number);
  }
  return password;
    
    //red = allChars(number);  

    //console.log(number);
    //console.log(red);
    //console.log(allChars);
    
  }
  //randomisze the lowercase.array(the whole thing)
 





