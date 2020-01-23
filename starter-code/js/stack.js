let stack = new StackDataStructure();

let btnAdd = document.querySelector(".add");
btnAdd.onclick = function() {
  let item = document.querySelector(".texto").value;
  stack.push(item);
  console.log(item);
  console.log(stack.stackControl);

  var add = document.querySelector(".list-group").lastElementChild;

  add.innerHTML = item;
  add.classList.remove("empty");
  add.classList.add("full");
};

let btnTake = document.querySelector(".take");

btnTake.onclick = function() {
  let remov = document.querySelectorAll(".list-group").lastElementChild;
  stack.pop(remov);
  console.log(stack.stackControl);
};
