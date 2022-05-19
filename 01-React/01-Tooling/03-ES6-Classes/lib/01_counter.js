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
    const justJoin = textArray.join('');
    const processArray = textArray.join('').split(' ');

    const newMap = new Map();
    processArray.forEach((theWord) => {
      let counter = 0;
      for (let i = 0; i < processArray.length; i += 1) {
        if (processArray[i] === "" || !justJoin.includes(theWord)) {
          return 0;
        } else if (processArray[i] === theWord) {
          counter += 1;
        }
      }
      newMap.set(`${theWord}`, `${counter}`);
      console.log(newMap);


    });
    console.log(newMap.get(word));
    const stringNum = newMap.get(word);
    return parseInt(stringNum, 10);

    // console.log(newMap);
    // console.log(newMap.get(word));
  }

}
module.exports = Counter;

// const counter = new Counter('Lorem Ipsum lorem ipsum set amet');

// const counter2 = new Counter('this is that this that this');

// counter.occurrences('lorem');
// counter2.occurrences('is');
