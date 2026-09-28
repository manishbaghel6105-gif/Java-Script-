let user =
{
  name: " mansih ",
  age: 16
}

// console. log(user);

Array.prototype.printItems = function () {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
}
let arr = [1, 2, 3]

// console. log(arr ._ proto _._ proto_ === user ._ proto_);
console.log(arr.__proto__);

let colors = ["red ", "green ", "orange"]
arr.printItems()
colors.printItems()


String.prototype.usernamestr1 = function () {
  console.log(this[0, 0] + this[0, 1]);
  return this[this[0, 0] + this[0, 1]]
}

"manish".usernamestr1()

String.prototype.usernamestr2 = function () {
  console.log(this[0, 0] + this[0, 1] + this[0, 2] + this[0, 3] + this[0, 4] + this[0, 5]);
  return this[this[0, 0] + this[0, 1] + this[0, 2] + this[0, 3] + this[0, 4] + this[0, 5]]
}

"manish".usernamestr2()


let common = {
  eat() {
    console.log("eat");
  }
}
let person = Object.create(common)

person.walk = function () {
  console.log("walk");
}
let student = Object.create(person)

student.study = function () {
  console.log("study");
}
console.log(person);
console.log(student);

student.eat()

// console.log(student.hasOwnproperty());

class User {
  country = "india" // default property
  constructor(name, country2) {
    this.name = name // instance property
    this.country = country2 // instance property
  }
  countryname() {// instance method
    console.log(this.country);
  }
  printName() {// instance method
    console.log(this.name);
  }


}
const u1 = new User("faiz", "India")
const u2 = new User("Akshay", "India")

console.log(u1);
console.log(u2);


u1.printName()










