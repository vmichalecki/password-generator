// Global variables
let generateBtn = document.querySelector('#generate');
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

// This function prompts the user to make selections with window alerts and then evaluates the user's choices in a string for the length and booleans for the rest of the parameters
function passwordParams() {
	// Variables to store password parameters
	let passwordLength = parseInt(window.prompt('How many characters? Choose from between 8 and 128 characters.'));
	if (passwordLength < 8) {
		alert('No, you must choose between 8 and 128 characters.');
		return;
	}
	if (passwordLength > 128) {
		alert('No, you must choose between 8 and 128 characters.');
		return;
	}
	const lowerCase = window.confirm('Include lowercase characters?');
	const upperCase = window.confirm('Include uppercase characters?');
	const numeric = window.confirm('Include numeric characters?');
	const special = window.confirm('Include special characters?');

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

// This function chooses one random character from each array
function randomizer(array) {
	const index = Math.floor(Math.random() * array.length);
	const indexEl = array[index];
	return indexEl;
}
// This function generates a password based on the user's choices
function generatePassword() {
	const params = passwordParams();
	console.log(params);
	let password = [];
	let usersChoices = [];

	// the spread synta(...) separates an array into different arguments
	if (params.lowerChar === true) {
		console.log(lowerCasedCharacters);
		usersChoices.push(...lowerCasedCharacters);
	}

	if (params.upperChar === true) {
		usersChoices.push(...upperCasedCharacters);
	}

	if (params.specialChar === true) {
		usersChoices.push(...specialCharacters);
	}

	if (params.number === true) {
		usersChoices.push(...numericCharacters);
	}

	// This function chooses random characters based on the user's desired password length
	for (let i = 0; i < params.length; i++) {
		password.push(randomizer(usersChoices));
	}
	console.log({ password, usersChoices });
	return password.join('');
}

// Writes password to the #password input
function writePassword() {
	const password = generatePassword();
	const passwordText = document.querySelector('#password');
	passwordText.value = password;
}

// Event listener for click to initiate prompts
generateBtn.addEventListener('click', writePassword);
