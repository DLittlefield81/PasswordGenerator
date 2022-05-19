
// WHEN I click the button to generate a password prompted for password criteria
// prompted for the length of the password 8 - 128 characters
// ------------Ask for : lowercase, uppercase, numeric, and/or special characters
// input should be validated and at least one character type should be selected
// OUTPUT a password is generated that matches the selected criteria
// password is either displayed in an alert or written to the page






let random = Math.floor(Math.random() * pcChoice.length);
console.log(pcChoice[random]);
for (let i = 0; i < passwordLength; i++) {}

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength = window.prompt("How many characters do you want in your password?"); //Input popup passwordLength
  let askSmalCase = window.confirm("Would you like to use small letters?"); // Boolean popup
  let askAlphaCap = window.confirm("Would you like to use capitol letters?"); // Boolean popup
  let askSpecial = window.confirm("Would you like to use special characters?"); //Boolean popup
  let askNumber = window.confirm("would you like to add numbers?"); //Boolean popup


  let password = generatePassword(passwordLength,charSmall,charCaps,charSpecial,charNumber); //values from inputs
  let passwordText = document.querySelector("#password");
  l;
  passwordText.value = password;
}
function generatePassword(passwordLength,charSmall,charCaps,charSpecial,charNumber){ 
  let charCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charSmall = "abcdefghijklmnopqrstuvwxyz";
let charSpecial = "!@#$%^&*()";
let charNumber = "0123456789";
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

return pass;
