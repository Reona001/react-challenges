// function insertDash(word) {
//   return null;
// }

const consonantRegEx = /[bcdfghjklmnpqrstvwxysBCDFGHJKLMNPQRSTVWXYS]/;
const vowelRegEx = /[aeiouAEIOU]/;

function wordToArray(word) {
  // lowercaseWord = word.toLowerCase();
  const wordArray = Array.from(word);
  return wordArray;
}

function consonantDetect(cvArray) {
  const cvDetectResult = [];
  for (let i = 0; i < cvArray.length; i++) {
    if (cvArray[i].match(consonantRegEx)) {
      cvDetectResult.push('c');
    } else if (cvArray[i].match(vowelRegEx)) {
      cvDetectResult.push('v');
    }
  }
  //   console.log(cvDetectResult);
  return cvDetectResult;
}

function cvArrayToIndex(cvArray2) {
  let arrayLength = 0;
  const repeatIndex = [];
  for (let i = 0; i < cvArray2.length; i++) {
    if (cvArray2[i] === cvArray2[i + 1] && cvArray2[i] === 'c') {
      arrayLength++;
      repeatIndex.push(i + arrayLength);
    }
  }
  return repeatIndex;
}

function spliceDash(word, numArray) {
  const wordArray = wordToArray(word);
  //   console.log(numArray);
  numArray.forEach((num) => wordArray.splice(num, 0, '-'));
  const wordArrayJoin = wordArray.join('');
  console.log(wordArrayJoin)
  return wordArrayJoin;
}

function insertDash(word) {
  const wordArray = wordToArray(word);
  const patternArray = consonantDetect(wordArray);
  const indexArray = cvArrayToIndex(patternArray);
  const result = spliceDash(word, indexArray);
  console.log(result);
  return result;
}

console.log(insertDash('internationalization'));

module.exports = insertDash;
