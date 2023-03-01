// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
"w", "x", "y", "z"];

  //converting message into an array to begin shift
  function messageArr(string){
    return Array.from(string);
  }

  function beginShift(currIndex, shift){
    let newIndex = (currIndex + shift) % 26;
    if(newIndex < 0){
      newIndex = newIndex + 26;
    }
    return alphabet[newIndex];
  }

  function shiftedMessage(string, shift){
    let newMessage = messageArr(string).map((item) => {
      if(alphabet.indexOf(item) === -1){
        return item;
      }
      return beginShift(alphabet.indexOf(item), shift);
    });
    return newMessage;
  }
  function caesar(input, shift = 0, encode = true) {
     if(shift === 0 || shift > 25 || shift < -25) return false; //returns false for shift values = 0, > 25 and < -25
    
     const string = input.toLowerCase();
    let shiftDir = shift * 1; //shift right through input
    
     if(encode === false){
       shiftDir = shift * -1; //shifting left through input
     }

  return shiftedMessage(string, shiftDir).join("");
  };
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
