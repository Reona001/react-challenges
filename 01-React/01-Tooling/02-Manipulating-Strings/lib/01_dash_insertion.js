// function insertDash(word) {

//   // TODO: implement the method and return word with dashes
//   return null;
// }

// module.exports = insertDash;

// Break word into array of alphabets
// Find the vowels 'aeiou'
// Place dashes between two consonants
// Use join method to join the array


function insertDash(word) {
  let characters = Array.from(word);
  numArray = consonantToIndex(characters);
  console.log(characters)
  numArray.forEach(num => characters.splice(num, 0, '-'))
  console.log(characters)
  let result = characters.join('');
  console.log(result);
  // TODO: implement the method and return word with dashes
}



function addDashToArray(textArray, numArray) {
  let result = numArray.forEach(num => textArray.splice(num, 0, '-'))
  console.log(result);
}

// Determines whether alphabet is a C or V
function consonantToIndex(array) {
  let patternArray = [];
  array.forEach(alphabet => {
    if (alphabet.match(/[aeiou]/)) {
      patternArray.push('v')
    } else if (alphabet.match(/[bcdfghjklmnpqrstvwxys]/)) {
      patternArray.push('c');
    }
  })
  //  console.log(patternArray);
  //   console.log(repetitionDetect(patternArray));
  let indexArray = repetitionDetect(patternArray);
  console.log(indexArray);
  return indexArray;

}


// Returns array with index positions
function repetitionDetect(cvArray) {
  indexArray = [];
  for (let i = 0; i < cvArray.length; i++) {
    if (cvArray[i] === cvArray[i - 1]) {
      // console.log(i)
      indexArray.push(i);
    }
  }
  // console.log(indexArray);
  return indexArray;
}




// insertDash('hello hello')

module.exports = insertDash;
