var submit = document.querySelector("#btn");
var input = document.querySelector("#inp");
var ul = document.querySelector("ul");

function checkEmpty() {
  if (input.value != "") {
    submit.disabled = false;

    return true;
  } else {
    submit.disabled = true;
    return false;
  }
}

function addItem() {
  var li = document.createElement("li");
  var att = document.createAttribute("class");
  att.value = "list-group-item";
  li.setAttributeNode(att);
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  submit.disabled = true;
}

input.addEventListener("input", checkEmpty);
input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13 && checkEmpty()) {
    addItem();
  }
});
submit.addEventListener("click", function () {
  addItem();
});
