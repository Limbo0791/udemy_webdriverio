"use strict";

console.log(`----------------------------------------`);
console.log(`Start of objects and JSON data file`);

// an object
const Person = {
  //properties
  fname: "Wilco", //these are called object properties
  lname: "Mellema",
  age: 31,
  job: "software tester",

  //methods
  fullName: function () {
    return this.fname + " " + this.lname; //notice the this keyword
  },
};

//accessing properties of an object using dot notation
console.log(
  `Hi, my name is ${Person.fname} ${Person.lname}, i am ${Person.age} years old`
);

console.log(Person.fullName()); //accessing a method
