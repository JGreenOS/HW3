// Assignment Code
var generateBtn = document.querySelector("#generate"); //sets variable on the generate button
var passwordTxt = document.querySelector("#password"); //sets variable on the password button

var usrInputObject = {  //sets the input object to make a thing
  passLength: 0, //initializes and sets the passLength to 0
  charList: [], //initializes the character array

  getPassLength: function () { //Beginning of function to prompt and store the user input for the length of the password
    var pwLength = Number(prompt("Enter the number of characters for your new password. Minimum is 8 characters and maximum is 128 characters")); //stores user input and converts to a number.
    while (pwLength < 8 || pwLength > 128) { //requirement to have more than 8 and less than 128 characters; loops again until user enters a number to meet requirements.
      alert("Password must be between 8-128 characters. Try again."); //
      pwLength = Number(prompt("Enter the number of characters for your new password. Minimum is 8 characters and maximum is 128 characters"));
    }
    this.passLength = pwLength; //sets the object
    return this; //returns the password length as an integer
  },

  getAllChars: function () { //Function to create the string for password randomization
    var lowercase = confirm("Do you want lowercase characters? Click OK for Yes, Cancel for No") //user input
    var uppercase = confirm("Do you want uppercase characters? Click OK for Yes, Cancel for No")//user input
    var spChar = confirm("Do you want special characters? Click OK for Yes, Cancel for No")//user input
    var number = confirm("Do you want numbers? Click OK for Yes")//user input
    var lowercasearray = []; //initializes lowercasearray; 
    for (var i = 97; i < 123; i++) { //sets range for ASCII characters
      lowercasearray.push(String.fromCharCode(i)); //creates array using CharCode method.
    }
    var uppercasearray = []; //initializes uppercasearray;
    for (var i = 65; i < 91; i++) { //sets range for ASCII characters
      uppercasearray.push(String.fromCharCode(i));//creates array using CharCode method.
    }
    var numberarray = []; //initializes numberarray;
    for (var i = 48; i < 58; i++) {//sets range for ASCII characters
      numberarray.push(String.fromCharCode(i)); //reates array using CharCode method.
    }
    var symbolarray = []; //initializes symbolarray;
    for (var i = 33; i < 48; i++) {//sets range for ASCII characters
      symbolarray.push(String.fromCharCode(i));//creates array using CharCode method.
    }
    var allChars; //uses logic from user input and concatenates all 4 possiblities together.
    if (lowercase && uppercase && spChar && number) {
      allChars = lowercasearray.concat(uppercasearray, numberarray, symbolarray);
    }
    else if (lowercase && uppercase && spChar) { //uses logic from user input and concatenates 3 together.
      allChars = lowercasearray.concat(uppercasearray, spChar);
    }
    else if (lowercase && uppercase) { //uses logic from user input and concatenates 2 together.
      allChars = lowercasearray.concat(uppercasearray)
    }
    else if (uppercase && spChar && number) { //uses logic from user input and concatenates for use case of no lowercase
      allChars = uppercasearray.concat(spChararray, numberarray);
    }
    else if (spChar && number) { //uses logic from user input and concatenates for use case of letters
      allChars = spChararray.concat(numberarray);
    }
    this.charList = allChars; //finishes the concatenation and stores the output in a charList object
    return this;
  }
}

generateBtn.addEventListener("click", function () { //calls function to generate password; a nested function sets the password text value
  passwordTxt.value = generatePassword();
});
function generatePassword() {  //function to generate password
  var password = ""; //sets password to empty string
  var input = usrInputObject.getPassLength().getAllChars();  //creast and input from the input object properties
  var pwLength = input.passLength;  //sets pwLength from input object properties
  var listLength = input.charList.length;  //sets list length and is the value of the number of characters selected in the logic

  for (let i = 0; i < pwLength; i++) { //for loop to iterate and create the random password
    var raw = Math.random() * listLength - 1;  //math random method to set the raw password, uses listlength -1 so we don't randomize a number that is creater than the length of the array.
    var randomIndex = Math.floor(raw);  //rounds the raw number to an integer
    password += input.charList[randomIndex]; //creates the password from the random index integer
    console.log(raw);

    console.log("random index for a char in the char list: " + randomIndex); //debugging output
    console.log("random character choice: " + input.charList[randomIndex]); //debugging output
    console.log("password at the current iteration: " + password);//debugging output

  }
  return password //returns password to the HTML file

}