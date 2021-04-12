// Assignment Code
let generateBtn = document.querySelector('#generate');
// let passwordParams = {
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

function passwordParams() {
	// variable to store password length
	const passwordLength = parseInt(window.prompt('How many characters? (Enter 8-128)'));
	const lowerCase = window.confirm('Include lowercased characters?');
	const upperCase = window.confirm('Include uppercased characters?');
	const numeric = window.confirm('Include numeric characters?');
	const special = window.confirm('Include special characters?');

	// if statement to validate
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

// Write password to the #password inputmmi

//create a function that randomizes everything (4 things at the same time)

function randomizer(array) {
	const index = Math.floor(Math.random() * array.length);
	const indexEl = array[index];
	return indexEl;
}

console.log(randomizer(numericCharacters));

function writePassword() {
	const password = generatePassword();
	const passwordText = document.querySelector('#password');
	for (var i = 0; i < passwordLength.length; i++) {}
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
