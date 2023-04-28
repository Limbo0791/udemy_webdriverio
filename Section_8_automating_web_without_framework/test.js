//using querySelector all
const fields = document.querySelectorAll("#content > ul > li"); //this will return a nodelist

// to get one element:
fields[0].innerHTML;

const inputfield = document.querySelector(
  "#content > div > div > div > input[type=number]"
); // making a variable out of selecting an element

//adding logic to an action
if (inputfield.value === "1") {
  console.log("The value is 1");
} else if (inputfield.value === "") {
  console.log("There is nothing in the inputfield");
} else {
  console.log(`The value is ${inputfield.value}`);
}
