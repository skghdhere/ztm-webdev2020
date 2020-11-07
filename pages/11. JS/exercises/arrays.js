var list = ["tiger", "cat", "bear", "bird"];

var listOflists = [
  [1, 2, 3],
  ["a", "b", "c"],
  ["jai", "shree", "ram"],
];

// ? A list can even have functions

var funcList = [
  function happy() {
    console.log("Happy");
  },
  function sad() {
    console.log("sad");
  },
];

// ? We also have mixed lists , this is not advised though

var mixedList = [
  "a",
  1,
  true,
  undefined,
  function myFunc() {
    console.log("Example");
  },
];

// * inbuilt list functions
/* list.shift()
list.pop()
list.push('Something')
list.concat([another array])
list.sort();

*/

// ? Arrays can also hold objects

lists = [
  { name: "sangram", age: 24 },
  { name: "sanjay", age: 50 },
];
