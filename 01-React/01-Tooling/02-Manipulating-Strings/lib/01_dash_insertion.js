function insertDash(word) {
  // TODO: implement the method and return word with dashes
  let wordArray = Array.from(word);
  //['h','e','l','l','o']

  let vowelIndexArray = [];
  wordArray.forEach(letter => {
    if (letter.match(/[aeiou]/)) {
      vowelIndexArray.push(letter);
      // let vowelIndex = wordArray.indexOf(`${letter}`);
      // vowelIndexArray.push(vowelIndex);
      // wordArray.splice(`${vowelIndex}`, 0, '-');
      // wordArray.map();
    }
    console.log(vowelIndexArray);
  })

  // if (word === "") {
  //   return "";
  // } else if ( // function )
  return null;
}

module.exports = insertDash;

// If vowel is found add one index and splice a dash to that
// position. (VC-CVC)
// For composites like internationalization
// (VC-CVC-CVCV)
// If there is no CC repetition then it will compound the collection
// (in-ter-nationalization)
// (VC-CVC-CVCVVCVCVCVCVVN)
//  (VCCVCCVCVVCVCVCVCVVN)
//   (VCCVCCVCVVCVCVCVCVVN)


// [012345678910]
// So we need a if conditional to detect no CC repeats
