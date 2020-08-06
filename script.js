// Assignment code here

var letters = 'abcdefghijklmnopqrstuvwxyz';
var capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789'
var specialChars = "!$%&'()*+,-./:;<=>?@[]^_`{|}~"
var password = "";

// Generate Password Function Start

var generatePassword = () => {


  // get password length
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


  // choose any or some of lowercase, uppercase, numers and special characters
  let getCharTypes = () => {

    // lowercase
    let charLowerCase = window.confirm("Would you like to incorporate lowercase characters in your password?");
    if (charLowerCase) { charLowerCase = letters }


    //uppercase
    let charUpperCase = window.confirm("Would you like to incorporate uppercase characters in your password?");
    if (charUpperCase) { charUpperCase = capLetters }


    //numbers
    let charNumbers = window.confirm("Would you like to incorporate numnbers in your password?");
    if (charNumbers) { charNumbers = numbers }


    //special characters
    let charSpecial = window.confirm("Would you like your password to contain special characters?");
    if (charSpecial) { charSpecial = specialChars }


    //takes array of all character types and converts them to one string
    let passwordChars = [charLowerCase || "", charUpperCase || "", charSpecial || "", charNumbers || ""].join("")


    //return to beginning of function if no valid selection are made.
    if (!passwordChars) {
      window.alert("You must select at least one type of character for your password! Please try again!");
      return getCharTypes();
    } else {
      //window.alert("Conditions accepted! Preparing to generate password now!")

    }
    return passwordChars;

  }


  passwordChars = getCharTypes();
  console.log(passwordChars);


  //reset password before new one is generated
  password = "";

  //add character at random index in finalPasswordChars.length
  for (i = 0; i < newPasswordLength; i++) {
    let c = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars.charAt(c)

  }
  //Randomized Password
  return password;
};

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*function generatePassword() {
  //Prompt for minimum/maxumim password character length
    var passwordLength = prompt("How many characters would you like to make your password? (Minumum chartcers = 8, maximum = 128)");
      console.log(passwordLength);
    var convertedPassword = parseInt(passwordLength);
      console.log(convertedPassword);
  //if statement for character length selection

  //Series of confirm alerts for user to select upper, lowercases, special character, numbers
    var passwordUppercase = window.confirm();
      console.log(passwordUppercase);

    var passwordLowercase = window.confirm("Would you like to incorporate lowercase characters in your password?");
      console.log(passwordLowercase);

    var passwordNumbers = window.confirm("Would you like to incorporate numeric values in your password?");
      console.log(passwordNumbers);

    var passwordSymbols = window.confirm("Wouold you like to incorporate special characters (symbols) in your password?");
      console.log(passwordSymbols);

  //if user skips all prompts, alert user of minimum password criteria, restart function
    if (passwordUppercase, passwordLowercase, passwordNumbers, passwordSymbols = false);  {
      window.alert("You must select password lenghth and one additional criteria")

      generatePassword();
    };
};*/


