"use strict"; //enables strict mode

// A print statament
console.log("Hello world");

//variables
const fname = "Wilco";
const lname = "Mellema";
let age = 31;

//template literal
console.log(`Hello my name is ${fname} ${lname}`); //use the backticks ``

// if statement
if (10 > 5) {
  console.log("Correct");
} else {
  console.log("Scrub");
}

// Math on variables:
console.log(`${fname} is turning ${age + 1} on July 31st!`);

// forloop
for (let i = 0; i < 10; i++) {
  console.log(`${i}`);
}

// while loop
let counter = 0;

while (counter < 10) {
  console.log(`${counter}`);
  counter++;
}

//arrays
const my_array = [1, 2, 3, 4, 5, "six"];
console.log(my_array);
console.log(my_array[0]);

// functions with parameters
const calcSum = function add(a, b) {
  return a + b;v//returns a result that can be stored in a variable
};

console.log(`10 plus 10 equals ${calcSum(10, 10)}`); //calling the function with the parameters


