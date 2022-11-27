class Person {
  static height = 175; //cm
  static weight = 75; //kg

  constructor(age, firstName, lastName) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const fullName = name.split(" ");
    this.firstName = fullName[0];
    this.lastName = fullName[1];
  }

  static walk() {
    console.log("constructor");
  }
}

const Cosmin = new Person(41, "Cosmin", "Vasile");
console.log(Cosmin);
console.log(Cosmin.fullName);
Person.walk();
console.log(Person.height);
console.log(Person.weight);
