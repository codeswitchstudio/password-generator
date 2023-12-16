// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];





// Function to prompt user for password options
function getPasswordOptions() {


//*Present a series of prompts for password criteria
  // *Length of password
    //* At least 8 characters but no more than 128.
       //what if < 8  
       //if > 128


       let length = parseInt(prompt(`How long do you want your password to be? 
       Type any number from 8 to 128: `));

      while (length < 8 || length > 128 || isNaN(length)) {
        alert(`Invalid input. 
        (Note: Please use a number between 8 and 128 characters. 
        Click OK then the generate password button again.)`)
        return;
      }


  // Character types
    //  Lowercase
    // Uppercase
    // Numeric
    // Special characters ($@%&*, etc)

  let includeLower = confirm("Would you like to include lower case characters? "); 
  let includeUpper = confirm("Would you like to include upper case characters? ");
  let includeNum = confirm("Would you like to include numeric characters? ");
  let includeSpecial = confirm("Would you like to include special characters? ");

// Check that at least one character set is selected
if (!(includeLower || includeUpper || includeNum ||includeSpecial)) {
  alert("At least one character set must be selected. Please try again.");
  return getPasswordOptions(); // Call the function again
}

    let choices = {
      length: length,
      includeLower: includeLower,
      includeUpper: includeUpper,
      includeNum: includeNum,
      includeSpecial: includeSpecial
    }
    return choices;

}


// Function for getting a random element from an array
function getRandom(arr) {

let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;

}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions()
 
  let finalResult = [];
  let possible = [];
  let guaranteed = [];
  
  if (options.includeLower ) {
    possible = possible.concat(lowerCasedCharacters)
    guaranteed.push(getRandom(lowerCasedCharacters))  
  }
  if (options.includeUpper ) {
    possible = possible.concat(upperCasedCharacters)
    guaranteed.push(getRandom(upperCasedCharacters))  
  }
  if (options.includeNum) {
    possible = possible.concat(numericCharacters)
    guaranteed.push(getRandom(numericCharacters))  
  }
  if (options.includeSpecial ) {
    possible = possible.concat(specialCharacters)
    guaranteed.push(getRandom(specialCharacters))  
  }

  for (var i=0; i < options.length; i++) {
    let character = getRandom(possible);
    console.log(character) 
    finalResult.push(character)
    console.log(finalResult);
  }  


  for (var i=0; i < guaranteed.length; i++) {
    finalResult[i]=guaranteed[i];
    console.log(finalResult)

  }
  return finalResult.join("")


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


