// global variables
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

// this function prompts the user to make a choice with popup windows and then evaluates the user's choices in a string for the length and booleans for the rest of the parameters
function passwordParams() {
	// Variables to store password parameters

	let passwordLength = parseInt(window.prompt('How many characters? (Enter 8-128)'));
	if (passwordLength < 8) {
		alert('you must choose between 8-128');
		return;
	}
	if (passwordLength > 128) {
		alert('you must choose between 8-128');
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

// this function chooses ONE random character from each array
function randomizer(array) {
	const index = Math.floor(Math.random() * array.length);
	const indexEl = array[index];
	return indexEl;
}

function generatePassword() {
	const params = passwordParams();
	console.log(params);
	let password = [];
	let usersChoices = [];

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

	for (let i = 0; i < params.length; i++) {
		password.push(randomizer(usersChoices));
	}

	console.log({ password, usersChoices });

	return password.join('');
}

// Write password to the #password input (provided)
function writePassword() {
	const password = generatePassword();
	const passwordText = document.querySelector('#password');
	passwordText.value = password;
}

// Add event listener to generate button (provided)
generateBtn.addEventListener('click', writePassword);