// let and const
const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true; //with var it will change at global scope
  console.log("inside", wizardLevel);
}
console.log("outside", wizardLevel);
// -------------------------------------------------------
// Destructuring

const obj = {
  userName: "bobby",
  age: 100,
  isMarried: false,
};
// Instead of doing this
const userName = obj.userName;
const age = obj.age;
let isMarried = obj.isMarried;

// We can do this
const { userName, age } = obj; // <-- Here we grabbed player and experience from obj and stored them as const
let { isMarried } = obj;

//--------------------------------------------------------
// Dynamic Object Properties

const var1 = "name";
//very useful if we need to calculate property values
const user = {
  [var1]: "Sangram",
  [2 * 3]: "Lucky",
};

// Adding properties to objects
// Instead of doing this
const naam = "Simon";
const married = true;
const job = {};

const someObj = {
  naam: naam,
  married: married,
  job: job,
};
// When property name and variable assigned to that property is same then we can use the below syntax

const anotherObj = { naam, married, job };

//---------------------------------------------------------
// Template Strings
const greeting = `Hello my name is ${naam}`;

//---------------------------------------------------------
// Default Parameters

function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet}`;
}
