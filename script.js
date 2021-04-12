// Assignment Code
let generateBtn = document.querySelector('#generate');
let passwordParams = {
	specialCharacters: [
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
	],
	numericCharacters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
	lowerCasedCharacters: [
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
	],
	upperCasedCharacters: [
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
	],
};
let passwordLength = window.prompt('How many characters? (Enter 8-128)');
let lowerCase = window.confirm('Include lowercased characters?');
let upperCase = window.confirm('Include uppercased characters?');
let numeric = window.confirm('Include numeric characters?');
let special = window.confirm('Include special characters?');

// Write password to the #password input

function writePassword() {
	let password = generatePassword();
	let passwordText = document.querySelector('#password');
	for (var i = 0; i < passwordLength.length; i++) {
		let index = Math.floor(Math.random() * lowerCase.length);
	}
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
