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

const charOptions = [];
const generatedPassword = '';
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters
// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length
  // At least 8 characters, no more than 128 characters
  // Conditional to check that the number that was entered is in range
    // Prompts store data as strings, so need to parse into a number

  // let length = parseInt(prompt("Enter the password length you prefer (between 8 and 128 characters):"));
 let length = (prompt("Enter the password length you prefer (between 8 and 128 characters):"));

   // If the user's input is out of range, either return out of the function or call the function again

  if (length < 8 || length > 128 || (isNaN(length)) {
    alert("Sorry. Valid length is a number between 8 and 128.")
    return;
  }
  

  // Confirm which character sets to use
  
  let includeLower = confirm("Would you like to include lower case characters? "); 
  let includeUpper = confirm("Would you like to include upper case characters? ");
  let includeNum = confirm("Would you like to include numeric characters? ");
  let includeSpecial = confirm("Would you like to include special characters? ");


  // If the user answers false for all, either return out of the function or call the function again
  if (!(includeLower || includeUpper || includeNum || includeSpecial)) {
    alert("At least one character set must be selected. Please try again.");
    return getPasswordOptions(); // Call the function again
  }

  // Once they select a character set:
  // Generate a random character for each selected character set

  // Return an object with user-selected options
  // return {
  //   length,
  //   includeLower,
  //   includeUpper,    
  //   includeNum,
  //   includeSpecial,
  // };

  let choices = {
    length: length,
    includeLower: includeLower,
    includeUpper: includeUpper,
    includeNum: includeNum,
    includeSpecial: includeSpecial
  }
  return choices;

}


  // Either push selected character sets to a mega-array of all selected characters
  // OR you can keep the arrays separate and generate a random number to select the array and another to select the index
  
  // Once character sets are selected, move on to generating random characters
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Need a variable to hold the password as it's being generated
  // Need a variable to hold the index that's being generated

  // For loop that loops the number of times that matches the length the user chose
  // Generate a random number
  // That number is the index for a character in the mega-array
  // So then, mega-array[generated-index] is the actual character
  // Add that character to the password

  // Once we finish the for loop, return the generated password
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
