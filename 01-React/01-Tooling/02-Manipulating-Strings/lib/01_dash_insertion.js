const consonantRegEx = /[bcdfghjklmnpqrstvwxys]/;
const vowelRegEx = /[aeiou]/;

function insertDash(word) {
  let wordArray = wordToArray(word);
  let patternArray = consonantDetect(wordArray);
  let indexArray = cvArrayToIndex(patternArray);
  return spliceDash(word, indexArray)
  return null;
}



function wordToArray(word) {
  let wordArray = Array.from(word);
  return wordArray;
}



function consonantDetect(cvArray) {
  let cvDetectResult = [];
  for (let i = 0; i < cvArray.length; i++) {
    if (cvArray[i].match(consonantRegEx)) {
      cvDetectResult.push('c');
    } else if (cvArray[i].match(vowelRegEx)) {
      cvDetectResult.push('v');
    }
  }
  console.log(cvDetectResult);
  return cvDetectResult;
}


function cvArrayToIndex(cvArray2) {
  let arrayLength = 0
  let repeatIndex = [];
  for (let i = 0; i < cvArray2.length; i++) {
    if (cvArray2[i] === cvArray2[i + 1] && cvArray2[i] === 'c') {
      arrayLength++;
      repeatIndex.push(i + arrayLength);
    }
  }
  return repeatIndex;
}



function spliceDash(word, numArray) {
  let wordArray = wordToArray(word);
  console.log(numArray)
  numArray.forEach(num =>
    wordArray.splice(num, 0, '-'))
  wordArrayJoin = wordArray.join('');
  return wordArrayJoin;

}

// console.log(insertDash('hello'));
// console.log(insertDash('internationalization'))
// console.log(insertDash('Le Wagon'))
// should get 'In-ter-nationalization'

module.exports = insertDash;
