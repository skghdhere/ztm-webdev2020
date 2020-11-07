// ! function declaration

function sayHello() {
  document.getElementById("testing").innerHTML = "Hello";
}

// sayHello();

// !Anonymous functions

var sayBye = function () {
  document.getElementById("testing").innerHTML = "Bye!";
};

// sayBye();

// ! function with params that takes some args
//
function sing() {
  var song = document.querySelector("#singThis").value;
  document.getElementById("singing").textContent = song;
}
