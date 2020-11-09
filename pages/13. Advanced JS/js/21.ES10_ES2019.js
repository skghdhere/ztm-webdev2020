// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

// We pass level of flattening to flat as param.
console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

// Flattening nested arrays whose depth we dont know
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ------------------------------------------------------------
// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.

let arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]

// ------------------------------------------------------------------------------
// trimStart() , trimEnd() from strings.
console.log("          Sangram".trimStart());
//Outpur : Sangram

// -----------------------------------------------------------------------------
// The Object.fromEntries() method transforms a list of key-value pairs into an object.
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }

// With Object.fromEntries, you can convert from Array to Object:

const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
