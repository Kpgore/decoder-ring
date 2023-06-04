// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const letters = "abcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
    if(shift === 0 || shift === undefined || shift > 25 || shift < -25) {
      return false
    }
    let result = "";
    if (encode === false) {
      shift *= -1;
    }
    for (let i = 0; i < input.length; i++) {
      const letter = input[i].toLowerCase();
      if (letters.includes(letter)) {
        const letterIndex = letters.indexOf(letter);
        let shiftLetter = letterIndex + shift;

        if (shiftLetter > 25) {
          shiftLetter += -26;
        }
        if (shiftLetter < 0 && shiftLetter > -25) {
          shiftLetter += 26;
        }
        const shiftedLetter = letters[shiftLetter];
          result += shiftedLetter;
      } else {
        result += letter;
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
