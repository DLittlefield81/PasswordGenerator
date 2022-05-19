
// WHEN I click the button to generate a password prompted for password criteria
// prompted for the length of the password 8 - 128 characters
// ------------Ask for : lowercase, uppercase, numeric, and/or special characters
// input should be validated and at least one character type should be selected
// OUTPUT a password is generated that matches the selected criteria
// password is either displayed in an alert or written to the page

let charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charLower = "abcdefghijklmnopqrstuvwxyz";
let charSpecial = "!@#$%^&*()`~-_=+[]{}:;'<,>./?";
let charNumber = "0123456789";




// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let askLength = window.prompt("How many characters do you want in your password?"); //Input popup passwordLength
  let askLower = window.confirm("Would you like to use small letters?"); // Boolean popup
  let askUpper = window.confirm("Would you like to use capitol letters?"); // Boolean popup
  let askSpecial = window.confirm("Would you like to use special characters?"); //Boolean popup
  let askNumber = window.confirm("would you like to add numbers?"); //Boolean popup


  let password = generatePassword(askLength,charLower,charUpper,charSpecial,charNumber); //values from inputs
  let passwordText = document.querySelector("#password");//finds password box in document
  passwordText.value = password;//Output Password to form
}
function generatePassword(askLength,charLower,charUpper,charSpecial,charNumber){ 
let passString = charSmall
if (askUpper) passString = passString.concat(charUpper);
if (askSpecial) passString = passString.concat(charSpecial);
if (askNumber) passString = passString.concat(charNumber);
let passwordCharacters = ""; //Store characters
// let myArray =passwordCharacters.split("")
for (let x = 0, x < askLength x++ ){
  let character =passwordCharacters[Math.floor(Math.random()*askLength)];
passwordCharacters.push(character)
}
console.log(charSmall)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// return pass;
