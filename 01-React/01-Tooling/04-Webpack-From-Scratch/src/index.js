document.body.innerHTML = "Hello world";


// Each line overrides.
document.body.innerHTML = "First message on webpack dev server"

//ES6 test
// const sayHello = () => {
//   document.body.innerHTML = "Hello ES6";
// };

// sayHello();

class Greeter {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    // debugger
    document.body.innerHTML = `Hello ${this.name}!`;
  }
}

const greeter = new Greeter("Boris");
greeter.sayHello();
