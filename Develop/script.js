// Assignment Code
//var generateBtn = document.querySelector("#generate");

var passLength = 0;

//This area for user input

var userInputObject = {  //creates an object that will then be used in the randomization of the generate password.
  passlength: 0, //initializes and sets passlength to zero for later user input.
  charList: [], //initializes an empty array for derived allChars function.

  //beginning of function to get and store password length from user input.
  getpassLength: function () {
    pwLength = Number(prompt("Enter the number of characters for your new password. Minimum is 8 characters and maximum is 128 characters")); //prompts user for the number of characters in the password, converts the string to a number.

    while //loop to prompt user for the expected range of numbers to recover if the password length does not meet the minimums.
      (pwLength < 8 || pwLength > 128) { //if pwLength does not match the expected input, start loop for error recovery.
      alert("Password must be between 8-128 characters. Try again."); //Error recovery
      pwLength = Number(prompt("Enter the number of characters for your new password. Minimum is 8 characters and maximum is 128 characters"));
    } //end of while loop

    this.passLength = pwLength; //sets object to the pwLength
    return this;
  },
//function to derive the available characters for the get Password function.
    getAllChars: function () {
    var lowercase = confirm("Do you want lowercase characters? Click OK for Yes, Cancel for No")  //variable for lowercase; Boolean value
    var uppercase = confirm("Do you want uppercase characters? Click OK for Yes, Cancel for No") //variable for uppercase; Boolean value
    var spChar = confirm("Do you want special characters? Click OK for Yes, Cancel for No") //variable for special characters; Boolean value
    var number = confirm("Do you want numbers? Click OK for Yes, Cancel for No") //variable for numbers; Boolean value.

    var lowercasearray = []; // initialize lower case array using the String.fromCharCode method to call the ASCII characters.
    for (var i = 97; i < 123; i++) {
      lowercasearray.push(String.fromCharCode(i)); //build the lower case array elements
    }

    var uppercasearray = []; //initialize upper case array using the String.fromCharCode method to call the ASCII characters.
    for (var i = 65; i < 91; i++) {
      uppercasearray.push(String.fromCharCode(i)); //build the upper case array elements.
    }

    var numberarray = []; // initialize number array using the String.fromCharCode method to call the ASCII characters.
    for (var i = 48; i < 58; i++) {
      numberarray.push(String.fromCharCode(i)); //build the number array elements.
    }

    var symbolarray = []; // initialize special characters array using the String.fromCharCode method to call the ASCII characters. This only uses the lowest special characters. 
    for (var i = 33; i < 48; i++) {
      symbolarray.push(String.fromCharCode(i)); //build the special characters array elements.
    }

    var allChars = []; //initializes the allChars array which will concatenate lower, upper, symbols and numbers from user input selections.
    if (lowercase && uppercase && spChar && number) //logic to select which arrays will be concatenated
      allChars = lowercasearray.concat(uppercasearray, numberarray, symbolarray); //concats all 4 arrays

    else if (lowercase && uppercase && spChar) { //logic to select which arrays will be concatenated
      allChars = lowercasearray.concat(uppercasearray, spChar); //concats 3 arrays
      //console.log(allChars);
    }
    else if (lowercase && uppercase) { //logic to select which arrays will be concatenated
      allChars = lowercasearray.concat(uppercasearray) //concats 2 arrays
      //console.log(allChars);
    }
    else if (uppercase && spChar && number) {///logic to select which arrays will be concatenated
      allChars = uppercasearray.concat(spChararray, numberarray); //concats use case for not lowercase but all others
      //console.log(allChars);}
    }
    else if (spChar && number) { //logic to select which arrays will be concatenated
      allChars = spChararray.concat(numberarray); //concats for use case when no letters (upper or lower) are selected.

      //console.log(allChars);}
      this.charList = allChars;
      return this;

    } //end of getAllChars function; arrays should be built according to the logic and input from user.
  }  //Experiment: Using a function to make the array; I found this in researching "push" when building arrays and wanted to see if I could do it.
}

//when the write Password button is clicked in the user interface, gets the concatenated array based on user input.  Nested function to 
var generateBtn = document.querySelector("#generate");

function writePassword () {
  var passwordText = document.querySelector("#password");
  passwordText = generatePassword()
  passwordText = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword () { //uses inputs to create the password, using the randomizer in the for loop.

  var password = " ";
  var input = userInputObject.getpassLength().getAllChars(); //set variable to store the object, password length and the output of the derived and concatenated characters
  var pwLength = input.pwLength; //brings the number of characters from stored input into the function
  var listLength = input.charList.length; //brings the length of the char list so we know which range to select the random numbers.

  for (let i = 0; i < pwLength; i++) {
    var raw = Math.random() * listLength -1; //this uses the math random function multiplied by the listlength -1 to create the random numbers.
    var randomIndex = Math.floor(raw); //this creates the random indox numbers and rounds them down to an integer.
    password += input.charList[randomIndex];
    console.log(raw);
    return password
  }
}