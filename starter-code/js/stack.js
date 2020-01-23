const stackDataStructure = new StackDataStructure();
let stackAdd = document.querySelector("#stackAdd");
let stackTake = document.querySelector("#stackTake");
let stackElements = document.querySelectorAll("elm stack");
let input = document.getElementById("stackInput");

console.log(input);

stackAdd.addEventListener("click", function() {
  addStack(input.value);
  console.log(stackDataStructure.stackControl);
  let i = stackDataStructure.stackControl.length; //para saber que  div pintar
  //changeColor(i)
  console.log(i);
  console.log(stackElements);
  console.log(changeColor(i));
});

function addStack(elm) {
  stackDataStructure.push(elm);
}

function changeColor(id) {
  let elm = stackElements.querySelector();
  elm.classList.remove("empty");
  elm.classList.add("full");
}

function removeColor(elm) {
  elm.classList.remove("full");
  elm.classList.add("empty");
}
