const stack = new StackDataStructure();
const addstack = document.getElementById("add-stack");
const takestack = document.getElementById("take-stack");



addstack.addEventListener("click", function() {
  let content = document.querySelector("#stacktext").value;
  stack.push(content);
  document.querySelector(`.stack${stack.counter}`).className = `.stack1${stack.counter} .active`
  console.log(stack)
});
