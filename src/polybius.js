// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusSquare = {"a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
                          "f": "12", "g": "22", "h": "32", "i": "42", "j": "42",
                          "k": "52", "l": "13", "m": "23", "n": "33", "o": "43",
                          "p": "53", "q": "14", "r": "24", "s": "34", "t": "44",
                          "u": "54", "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"};
  
  const invertedSquare = {};
  //translating number pairs
  for(let char in polybiusSquare){
    let match = polybiusSquare[char];
    if(invertedSquare[match]){
      invertedSquare[match] = `(${invertedSquare[match]}/${char})`
    }else{
      invertedSquare[match] = char;
    };
  };

  function encoding(input){
    const inputLower = input.toLowerCase();
    const inputArr = inputLower.split("");
    return inputArr.map((char) => {
      if(char === " "){
        return char;
      }else{
        return polybiusSquare[char];
      }
    }).join("");
  }

  function decoding(input){
    const inputArr = input.split("");
    const decode = [];
    for(let i = 0; i < inputArr.length; i++){
      if(inputArr[i] === " "){
        decode.push(inputArr[i]);
      }else{
        let firstNum = inputArr[i];
        let secNum = inputArr[i + 1];
        let numPair = firstNum + secNum;
        i = i + 1;
        decode.push(invertedSquare[numPair]);
      };
    };
    return decode.join("");
  };

  function polybius(input, encode = true) {
    if(encode) return encoding(input);
    if(!encode){
      if(input.replace(" ", "").length % 2 > 0){
        return false;
      }else{
        return decoding(input);
      };
    };
  };
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
