/*Create a random password generator. User will be prompted to select from the following criteria: 
1)lowercase 2)uppercase 3)numeral 4)special character 5)all. 
The selected password criteria should be processed and a random password should be created. 
The new password should print to the text box on the screen.  */

var generateBtn = document.querySelector("#generate");
var uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowercase = ['abcdefghijklmnopqrstuvwxyz'];
var numbers = ['0123456789'];
var symbols = ['!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
