"use strict";

console.log(`----------------------------------------`);
console.log(`Start of the classes.js file`);

// Creating a class

class Person {
  // mmaking a constructor
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  // creating a method
  greeting() {
    console.log(`Hello, my name is ${this.fname} ${this.lname}`);
  }
}

//initiating a new instance of a class with properties filled
const wilco = new Person("Wilco", "Mellema");
console.log(`Hi, my name is ${wilco.fname} ${wilco.lname}`);

//calling a method (do not forget parentheses):
wilco.greeting();

// Class inheritance
class Enemy extends Person {
  //extends to signify inheritance
  constructor(fname, attack) {
    //first you specify the proeprties from the parent class, then some new ones
    super(fname); //use the super keyword to inherit the property from the parent class
    this.attack = attack; //attack is a unique property of the enemy class
  }
}

const monster = new Enemy("Darth Vader", "Lightsaber");

console.log(`${monster.fname} attacks ${wilco.fname} with a ${monster.attack}`);
