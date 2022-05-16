function occurrences(text, word) {
  // text to array split with empty string ''
  const splitText = text.split(' ');
  console.log(splitText); // => ['Lorem','ipsum','dolor','sit']
  function lowerCase(element) {
    return element.toLowerCase();
  }
  const lowerArray = splitText.map(lowerCase);
  console.log(lowerArray); // => ['lorem','ipsum','dolor','sit']
  // return null;
  let occurenceCounter = 0;
  for (let i = 0; i < lowerArray.length; i += 1) {
    if (lowerArray[i] === word) {
      occurenceCounter += 1;
    }
  }
  return occurenceCounter;
}

module.exports = occurrences;
