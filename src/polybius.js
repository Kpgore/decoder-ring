// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
/*The letters I and J share a space. When encoding, both letters can be converted to 42, 
but when decoding, both letters should somehow be shown.*/
  const encodeChar = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
    l: 13, m: 23, n: 33, o: 43, p: 53, 
    q: 14, r: 24, s: 34, t: 44, u: 54, 
    v: 15, w: 25, x: 35, y: 45, z: 55,
  };
  const decodeChar = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  };

  function polybius(input, encode = true) {
  //Ensure all user inputs are lower case to avoide syntax errors
    input = input.toLowerCase();
      let stringSeperate;
      let key = encodeChar;
      if (encode) {
        stringSeperate = input.split("");
      } else {
        key = decodeChar;
        stringSeperate = input.split(" ");
//When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
        let oddNumber = stringSeperate.reduce((acc, arr) => acc + arr.length, 0) % 2;
        if (oddNumber) {
          return false;
        }
        stringSeperate = stringSeperate.map(section => {
          return section.split("").reduce((acc, char, index, collect) => {
            if (char === " ") {
              acc.push(" ");
            } else if (!(index % 2)) {
              acc.push(char + collect[index +1]);
            }
            return acc;
          }, []);
        })
        .reduce((a, b) => a.concat(" ", b));
      }
      return stringSeperate.map(char => key[char] || " ").join("");
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
