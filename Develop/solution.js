//solution
var generateBtn = document.querySelector("#generate");
var passwordTxt = document.querySelector("#password");
var usrInputObject = {
  passLength: 0,
  charList: [],
  getPassLength: function () {
    var pwLength = Number(prompt("Enter the number of characters for your new password. Minimum is 8 characters and maximum is 128 characters"));
    while (pwLength < 8 || pwLength > 128) {
      alert("Password must be between 8-128 characters. Try again.");
      pwLength = Number(prompt("Enter the number of characters for your new password. Minimum is 8 characters and maximum is 128 characters"));
    }
    this.passLength = pwLength;
    return this;
  },
  getAllChars: function () {
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
    var allChars;
    if (lowercase && uppercase && spChar && number) {
      allChars = lowercasearray.concat(uppercasearray, numberarray, symbolarray);
    } else if (lowercase && uppercase && spChar) {
      allChars = lowercasearray.concat(uppercasearray, spChar);
    } else if (lowercase && uppercase) {
      allChars = lowercasearray.concat(uppercasearray)
    } else if (uppercase && spChar && number) {
      allChars = uppercasearray.concat(spChararray, numberarray);
    } else if (spChar && number) {
      allChars = spChararray.concat(numberarray);
    }
    this.charList = allChars;
    return this;
  }
}
generateBtn.addEventListener("click", function () {
  passwordTxt.value = generatePassword();
});
function generatePassword() {
  var password = "";
  var input = usrInputObject.getPassLength().getAllChars();
  var pwLength = input.passLength;
  var listLength = input.charList.length;
  //console.log("password length..." + pwLength);
  //console.log("char list length..." + listLength);
  //console.log(input.charList);
  for (let i = 0; i < pwLength; i++) {
    var raw = Math.random() * listLength - 1;
    var randomIndex = Math.floor(raw);
    password += input.charList[randomIndex];
    //.log(raw);
    //console.log("random index for a char in the char list: " + randomIndex);
    //console.log("random character choice: " + input.charList[randomIndex]);
    //console.log("password at the current iteration: " + password);
  }
  return password
}