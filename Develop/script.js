// Assignment code here
var passwordLength;

var lowerCaseInput;
var upperCaseInput;
var numericCharInput;
var specialCharInput;



//declaring arrays of character options
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']

 //empty array to add characters according to use preference
var newPasswordCharacters = [];
var newPassword = '';
var characterString = '';


// determining password length
function lengthOptions() {
  passwordLength =
     prompt("How many characters would you like?");
      passwordLength = Number(passwordLength);
      console.log(passwordLength);
        if (passwordLength >= 8 && passwordLength <= 128) {
          alert(" Your password will be " +passwordLength+ " characters.");
    charOptions();
        }
        
        else { (passwordLength < 8 || passwordLength > 128) 
          alert("Choose a value between 8 and 128.");
          lengthOptions();
        }
      }

// function to determine which characters to use
function charOptions() {



  //option to use lowercase characters
  lowerCaseInput =
      confirm("Would you like to include lowercase characters?");
  
    if (lowerCaseInput) {
      alert("Okay, include lowercase characters.");
      console.log("Yes, include lowercase");
  
    } else {
      
      alert("Okay, don't include lowercase characters.");
      lowerCaseInput = false;
    };
  

    //option to use uppercase characters
    upperCaseInput =
      confirm("Would you like to include uppercase characters?")
  
    if (upperCaseInput) {
      alert("Okay, include uppercase characters.");
      console.log("Yes, include uppercase");
    } else {
      
      alert("Okay, don't include uppercase characters.");
      upperCaseInput = false;
    };
  
    // option to use special characters
    specialCharInput =
      confirm("Would you like to include special characters?")
  
    if (specialCharInput) {
      alert("Okay, include special characters.");
      console.log("Yes, include special characters");
    } else {
      
      alert("Okay, don't include special characters.");
      specialCharInput = false;
    };
  
    //choose to include numbers
    numbers =
      confirm("Would you like to include numbers?")
  
    if (numbers) {
      alert("Okay, include numbers.");
      console.log("Yes, include numbers");
    } else {
      alert("Okay, don't include numbers.");
      numbers = false;
    }
    if (lowerCaseInput === false && upperCaseInput === false && specialCharInput === false && numbers === false) {
      alert("Choose atleast one criteria to generate a password!");
      charOptions();
    }
  };











// inserting values to arrays according to user preference
function generatePassword() {
  if (lowerCaseInput === true) {
    //add lowercase to array
    newPasswordCharacters.push(lowerCase);
}

  if (upperCaseInput === true) {
    //add uppercase to array
    newPasswordCharacters.push(upperCase);
}

  if (specialCharInput === true) {
    //add special characters to array
    newPasswordCharacters.push(specialChar);
}

  if (numbers=== true) {
    //add numbers to array
    newPasswordCharacters.push(numbers);
}
