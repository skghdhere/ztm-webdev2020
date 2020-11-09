//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// For arrays

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false

// Strings
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// expected output: "The word "fox" is in the sentence"

//--------------------------------------------------------------
//Exponent (**) operator. It essentially means x**y === x^y

let cuber = (num) => num ** 3;
cuber(3);

// returns 27
