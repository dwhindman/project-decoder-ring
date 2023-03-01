// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
    const regAlphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    
    function substitution(input, alphabet, encode = true) {
      if(!alphabet || (alphabet.length !== regAlphabet.length)) return false;
      const alphArr = alphabet.split("");

      function repeatingChars(alphArr) {
        return alphArr.some((char) => {
          return alphArr.filter((index) => char === index).length > 1;
        });
      }
      
      if(repeatingChars(alphArr)) return false;
      
    function encoding(alphArr, regAlphabet){
      console.log(input, alphabet);
      let newMessage = "";
      const inputLower = input.toLowerCase();
      const alphaLower = alphabet.toLowerCase();
        for(let char in inputLower){
         const letter = inputLower[char];
            if(letter.match(/[^ ]/)){
              let inputIndex = alphArr.indexOf(letter);

              newMessage += regAlphabet[inputIndex];
            }else{

             newMessage += letter;
            };
        };
    
     return newMessage;
    };
    
    if(encode === true) return encoding(regAlphabet, alphArr);
    if(encode === false) return encoding(alphArr, regAlphabet);
    
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
