// Assignment Code (provided)
let generateBtn = document.querySelector('#generate');

// MINE
const specialCharacters = [
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
	'.',
];
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowerCasedCharacters = [
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
	'z',
];
const upperCasedCharacters = [
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
	'Z',
];

// MINE
function passwordParams() {
	// Variables to store password parameters
	const passwordLength = parseInt(window.prompt('How many characters? (Enter 8-128)'));
	const lowerCase = window.confirm('Include lowercased characters?');
	const upperCase = window.confirm('Include uppercased characters?');
	const numeric = window.confirm('Include numeric characters?');
	const special = window.confirm('Include special characters?');

	// MINE
	// If statement to validate
	if (lowerCase != true && upperCase != true && numeric != true && special != true) {
		alert('You must choose at least one parameter.');
		return;
	}

	const pwParams = {
		length: passwordLength,
		lowerChar: lowerCase,
		upperChar: upperCase,
		specialChar: special,
		number: numeric,
	};
	return pwParams;
}

// MINE
// Create a function that randomizes everything, the four arrays together at the same time

function randomizer(array) {
	const index = Math.floor(Math.random() * array.length);
	const indexEl = array[index];
	return indexEl;
}

function generatePassword() {
	const params = passwordParams();
	params.length;
	params.lowerChar;
	params.upperChar;
	params.specialChar;
	params.number;
	const pwParams = array();
	pwParams.lowerChar.value;

	// JP: Create a variable that is an empty array that will take in the results
	// JP: Also randomize arrays that are chosen, so create an empty array that contains the chosen arrays
	// JP: Then make an array of guaranteed characters and
	// then make an array that ransdomizes that and joins them together in a string to mix them up,
	// otherwise they will just be in array order (ex. 123abcXYZ!@#)
}

// Write password to the #password input (provided)
function writePassword() {
	const password = generatePassword();
	const passwordText = document.querySelector('#password');
	passwordText.value = password;
}

// Add event listener to generate button (provided)
generateBtn.addEventListener('click', writePassword);
