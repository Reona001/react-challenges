// class Counter {
//   constructor(text) {
//   }

//   occurrences(word) {
//   }
// }
// module.exports = Counter;

class Counter {
  constructor(text) {
    this.text = text;
  }

  // Method //
  occurrences(word) {
    const array = this.text.split('');
    const textArray = array.map(element => element.toLowerCase());
    const processArray = textArray.join('').split(' ');

    // console.log(processArray);
    let counter = 0;
    const newMap = new Map();

    processArray.forEach((theWord) => {
      if (theWord === word && theWord !== "") {
        counter += 1;
      }
      newMap.set(`${theWord}`, `${counter}`);
    });
    // console.log(counter);
    // console.log(newMap);

    // final getter function for individual map value
    const stringNum = newMap.get(word);
    if (isNaN(stringNum)) {
      return 0;
    } else {
      return parseInt(stringNum, 10);
    }
  }
}
module.exports = Counter;

// const counter = new Counter("a fat cat sat on a mat and ate a fat rat");
// const result = counter.occurrences('fat')
// console.log("The result for occurence() is: ")
// console.log(result);

// const counter2 = new Counter("");
// const result2 = counter2.occurrences("");
// console.log("The result for occurence() is: ");
// console.log(result2);
