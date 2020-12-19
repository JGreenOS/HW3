// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


//This area for user input
Text.value = password;

generateBtn.addEventListener("click", writePassword);

var pwLength = Number(prompt("Enter the number of characters for your new password. Minimum is 8 characters and maximum is 128 characters"));

//keep this loop
while (pwLength < 8 || pwLength > 128) {
  alert("Password must be between 8-128 characters. Try again.");
  var pwLength = Number(prompt("Enter the number of characters for your new password. Minimum is 8 characters and maximum is 128 characters"));
}

//Experiment: Using a function to make the array; I found this in researching "push" when building arrays and wanted to see if I could do it.

//move this to inside the get characters function to tie them together and create the overall function to create strings
var lowercase = confirm("Do you want lowercase characters? Click OK for Yes, Cancel for No")
var uppercase = confirm("Do you want uppercase characters? Click OK for Yes, Cancel for No")
var spChar = confirm("Do you want special characters? Click OK for Yes, Cancel for No")
var number = confirm("Do you want numbers? Click OK for Yes, Cancel for No")
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


//Event listener goes here, generate password function in this area and math to randomize.

function writePassword() {
  var password = generatePassword();
  

  password

function generatePassword() {
  var allChars = [];
  if (lowercase && uppercase && spChar && number)
    allChars = lowercasearray.concat(uppercasearray, numberarray, symbolarray);

  else if (lowercase && uppercase && spChar){
    allChars = lowercasearray.concat(uppercasearray, spChar);
    //console.log(allChars);
  }
  else if (lowercase && uppercase){
    allChars = lowercasearray.concat(uppercasearray)
    //console.log(allChars);
  }
  else if (uppercase && spChar && number){
    allChars = uppercasearray.concat(spChararray, numberarray);
    //console.log(allChars);}
  }
  else if (spChar && number){
    allChars = spChararray.concat(numberarray);
    //console.log(allChars);}
  }
var purple;

  for (let i = 0; i < pwLength; i++) {
    var diffName = Math.random() * allChars.length;
    diffname = Math.floor(diffName);
    
    console.log(diffname);
    console.log(allChars[diffName]);
    console.log(allChars.length);
    console.log(typeof allChars);

  
return;
}
}


  //red = allChars(number);  
//var writePassword = writePassword + number;
  //console.log(number);
  //console.log(red);
  //console.log(allChars);

  //randomisze the lowercase.array(the whole thing)
 //for (let i = 0; i < pwLength; i++); {
  //password[Math.floor(Math.random() * pwLength.length)]
}