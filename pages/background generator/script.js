let gradOne = document.querySelector("#gradOne");
let gradTwo = document.querySelector("#gradTwo");
let display = document.querySelector("#displayInfo");

function setGradient() {
  document.body.style.background =
    "linear-gradient(to right," + gradOne.value + "," + gradTwo.value + ")";
  display.textContent = document.body.style.background + ";";
}
gradOne.addEventListener("input", setGradient);
gradTwo.addEventListener("input", setGradient);

display.value.select();