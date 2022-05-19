
// WHEN I click the button to generate a password prompted for password criteria
// prompted for the length of the password 8 - 128 characters
// ------------Ask for : lowercase, uppercase, numeric, and/or special characters
// input should be validated and at least one character type should be selected
// OUTPUT a password is generated that matches the selected criteria
// password is either displayed in an alert or written to the page

let startGenerator = function () {
  let passwordLength = window.prompt(
    "How many characters do you want in your password?"
  );
  let askSmalCase = window.prompt("Would you like to use small letters?");
  let askAlphaCap = window.prompt("Would you like to use capitol letters?");
  let askSpecial = window.prompt("Would you like to use special characters?");
  let askNumber = window.prompt("would you like to add numbers?");
  
  
10
hkasfhekdu
-50%
hkasfAGTRH
randomize
-10%
@#$%^jhfkad



};
verify length number is more than 8 less than 128
generate a string with small letters using the legnth value from password 
got to the next if statemt to verify TRUE for character 
pop off the end and push new character from other character types





askSpecial


// how man characters should the password be
let capsCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smallCharacters = "abcdefghijklmnopqrstuvwxyz";
let specialCharacters = "!@#$%^&*()";
let numberCharacters = "0123456789";



let random = Math.floor(Math.random() * pcChoice.length);
console.log(pcChoice[random]);
for (let i = 0; i < passwordLength; i++) {}

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  l;
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

return pass;
