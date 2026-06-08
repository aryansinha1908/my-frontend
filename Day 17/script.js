function generatePassword(length, includeLowercase, includeUppercase, includeSymbols, includeNumbers){

    const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()-=_+[];,./\{}|:<>?~'";

    let allowedChars = "";
    let password = "";
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    while (length--){
        let x = Math.floor(Math.random() * (allowedChars.length) + 0);
        password += allowedChars[x];
    }

    return password;
}

const passwordLength = 15;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeNumbers, includeSymbols, includeUppercase, includeLowercase);

console.log(`Generated Password: ${password}`);
