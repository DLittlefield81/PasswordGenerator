// WHEN I click the button to generate a password prompted for password criteria
// prompted for the length of the password 8 - 128 characters
// ------------Ask for : lowercase, uppercase, numeric, and/or special characters
// input should be validated and at least one character type should be selected
// OUTPUT a password is generated that matches the selected criteria
// password is either displayed in an alert or written to the page

let askLower
let askUpper
let askSpecial
let askNumber
let charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charLower = "abcdefghijklmnopqrstuvwxyz";
let charSpecial = "!@#$%^&*()`~-_=+[]{}:;'<,>./?";
let charNumber = "0123456789";
let askLength = 8;

// Assignment Code
let generateBtn = document.querySelector("#generate"); //finds generate button to run code

// Write password to the #password input
function writePassword() {

  askLength = window.prompt(
    " How many characters would you like in your password? (8-128)",
    8
  ); //Input popup passwordLength

  //USER INPUT LENGTH
 
  //========
  if (askLength < 8 || askLength > 128) {
    writePassword(); //restart if password length does not meet 8-128 rule
  } else {
    //continue run
    
    askLower = window.confirm("Would you like to use small letters?"); // Boolean popup
    askUpper = window.confirm("Would you like to use capitol letters?"); // Boolean popup
    if (!askLower && !askUpper) askLower = true;
    console.log(askLower + ' ' + askUpper)
    askSpecial = window.confirm(
      "Would you like to use special characters?"
    ); //Boolean popup
    askNumber = window.confirm("would you like to add numbers?"); //Boolean popup
  }
  //=============
  // create string table
  //run math

  //=============
  let passwordText = document.querySelector("#password"); //finds password box in document
  passwordText.value = generatePassword(askLength, askLower, askUpper, askSpecial, askNumber); //Output Password to form
}

function generatePassword(
  askLength,
  askLower,
  askUpper,
  askSpecial,
  askNumber
) {

  //values from inputs
  let password = "";
  let passString = "";
  let verify =0;
  if (askLower) {passString = passString.concat(charLower); verify++; password += charLower[Math.floor(Math.random() * charLower.length)];}; 
  if (askUpper){ passString = passString.concat(charUpper); verify++; password += charUpper[Math.floor(Math.random() * charUpper.length)];}
  if (askSpecial) {passString = passString.concat(charSpecial); verify++; password += charSpecial[Math.floor(Math.random() * charSpecial.length)];}
  if (askNumber) {passString = passString.concat(charNumber); verify++; password += charNumber[Math.floor(Math.random() * charNumber.length)];}
   //Store characters
  //========console full string
  



  for (let x = verify; x < askLength; x++) {
    let characterCode = passString[Math.floor(Math.random() * passString.length)]; //random character from length of available letters
    password += characterCode;
 
  }

return password;
}
// Add event listener to run function
generateBtn.addEventListener("click", writePassword); //button that begins running writePassword function
