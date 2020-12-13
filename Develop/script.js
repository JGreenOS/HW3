

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

  //Experiment: Using a function to make the array; I found this in researching "push" and building arrays and wanted to see if I could do it.
 
  //function arrayLowToHigh(low, high) {
   // const array = []
   // for (let i = low; i <= high; i ++)
   //  {
   //   array.push(i)
///}
    //return array
 // }

    //var lowercasearray = [String.fromCharCode(65-90)];

    var lowercasearray = [];
    for (var i = 65; i < 91; i++)
    {
      lowercasearray.push(String.fromCharCode(i));
    }
    lowercase2 = lowercasearray;

    console.log(lowercasearray);
    







 //function buildArrays (lower, upper, number, specialchar) {
   // var lower = array.LOWER_CHAR_CODES(65, 90);
    //var lower2 = str.CharCodeAt(str.lower);
    //var numbers = String.fromCharCode (48, 57);
    //var speChar = String.fromCharCode (58, 63; 33, 47);

    //console.log(lower2);
 

  


  //Step 3: Validate input, make sure at least 1 item is selected

  //Step 4: Create password using input requirements

 // function generatePassword () {

  //Step 5: alert password
