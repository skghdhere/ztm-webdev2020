//Creating copy of an object
let obj = {
  a: "a",
  b: "b",
  c: "c",
};
// Method 1: using Object.assign()
// assign params (object to copy to , from where)
let objClone = Object.assign({}, obj);

// Method 2: using spread operator(...)

let objClone2 = { ...obj };

/* This is 'Shallow Cloning'. It'll only clone one level. 
If an objected has another objected as a property
 then it'll still be passed by reference. */

 // Deep Clones
 // Using  JSON

let superClone = JSON.parse(JSON.stringify(obj));
// we are first converting obj to string then reconverting it to an object.


// For arrays we have slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.


var hobbies = ['Sports', 'Cooking'];
var copiedHobbies = hobbies.slice();
 
 // using spread
var hobbies = ['Sports', 'Cooking'];
var copiedHobbies = [...hobbies];