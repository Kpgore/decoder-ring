// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const orderedAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipherCode = []; 

  function substitution(input, alphabet, encode = true) {
//All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
    const doubleCharacters = new Set(alphabet);
    if (alphabet === undefined || alphabet.length < 26 || [...doubleCharacters].length < 26) {
      return false;
    }
    alphabet.split("");
    if (encode) {
      for (let i = 0; i < 26; i++) {
        cipherCode[orderedAlphabet[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 26; i++) {
        cipherCode[alphabet[i]] = orderedAlphabet[i];
      }
    }
    let reveal = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return cipherCode[letter];
    })
    return reveal.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
