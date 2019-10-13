// ES6 get and set
class Person {
  _name;

  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError("It is not a string!");
    }
    this._name = value; // validation could be checked here such as only allowing non numerical values
  }

  walk() {
    console.log(this._name + " is walking.");
  }
}

let bob = new Person('Bob');
console.log(bob.name); // Outputs 'BOB'
