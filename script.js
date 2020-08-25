// Assignment code here

var capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var letters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789'
var specialChars = "!$%&'()*+,-./:;<=>?@[]^_`{|}~"
var password = "";

var generatePassword = () => {

  // function for password length 
  var getPasswordLength = () => {
    var passwordLength = window.prompt("How many characters would you like to make your password? (Minumum chartcers = 8, maximum = 128)");
    console.log(passwordLength);
    var convertedPassword = parseInt(passwordLength);
    console.log(convertedPassword);
    if (passwordLength >= 8 && passwordLength <= 128) {

    } else {    
      window.alert("You must choose a password length between 8 and 128 characters.");
      getPasswordLength();
    }
    return convertedPassword;
  }

  newPasswordLength = getPasswordLength();

  // User select criteria - lower/uppercases, numbers, and/or special characters
  let getCharTypes = () => {

    let charLowerCase = window.confirm("Would you like to incorporate lowercase characters in your password?");
    if (charLowerCase) { charLowerCase = letters }


    let charUpperCase = window.confirm("Would you like to incorporate uppercase characters in your password?");
    if (charUpperCase) { charUpperCase = capLetters }


    let charNumbers = window.confirm("Would you like to incorporate numnbers in your password?");
    if (charNumbers) { charNumbers = numbers }


    let charSpecial = window.confirm("Would you like your password to contain special characters?");
    if (charSpecial) { charSpecial = specialChars }


    let passwordChars = [charLowerCase || "", charUpperCase || "", charSpecial || "", charNumbers || ""].join("")

    //function restart if no valid selections are made
    if (!passwordChars) {
      window.alert("One character criteria must be selected. Please try again.");
      return getCharTypes();
    } else {
      window.alert("Creating password now!")
    }
    return passwordChars;
  }

  passwordChars = getCharTypes();
  console.log(passwordChars);

  //password reset before new one is generated 
  password = "";

  for (i = 0; i < newPasswordLength; i++) {
    let c = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars.charAt(c)

  }

  return password;
};

//Get references to the #genrate elemnnt 
var generateBtn = document.querySelector("#generate");

//Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


