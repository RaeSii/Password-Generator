// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var passwordLength = parseInt( prompt("Enter Password Length?"))
  if(passwordLength <8||passwordLength>126 || isNaN(passwordLength)) {
    return "Invalid Length, please enter a valid value"
  }
var acceptUpper = confirm("Do you like to have Upper case letters in your password?")
var acceptLower = confirm("Do you like to have Lower case letters in your password?")
var acceptNumbers = confirm("Do you like to have Numbers in your password?")
var acceptSpecial = confirm("Do you like to have Special Characters in your password?")
var userChoice = ""
if(acceptUpper){
  userChoice += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
if(acceptLower){
  userChoice += "abcdefghijklmnopqrstuvwxyz"
}
if(acceptUpper){
  userChoice += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
if(acceptNumbers){
  userChoice += "123456789"
}
if(acceptSpecial){
  userChoice += "!@#$%^&*()"
}
if(userChoice.length === 0){
  return "Please select atleast one option"
}
console.log(userChoice)
var password = ""
for(let i=0;i<passwordLength;i++){
   var index =  Math.floor(Math.random() * userChoice.length)
   password += userChoice [index]
}
console.log(password)
return password
}
