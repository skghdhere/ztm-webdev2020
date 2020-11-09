// 1. padStart() and padEnd()
// Adds padding to strings including the length of the string.
let str1 = "Sangram".padStart(10);
let str2 = "Sangram".padEnd(10);

console.log(str1); // '    Sangram'
console.log(str2); // 'Sangram   '

// 2. (a,b,c,)
// We can leave comma at the end of params list

const fun = (a, b, c) => {
  return "some expression ", a + b + c;
};

fun(1, 2, 3);

//3. Object.values() , Object.keys() , Object.entries()
//The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

//-------------------------------------------------------------------------
// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.

const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
//--------------------------------------------------------------------------
//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

console.log(
  Object.keys(object1).forEach((key, index) => {
    console.log(index, key, object1[key]);
  })
);

// output :
// 0 a somestring
// 1 b 42
