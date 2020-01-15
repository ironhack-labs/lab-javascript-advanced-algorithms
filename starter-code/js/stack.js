stack.render();
const stackElement = document.querySelector("#stack input");

document.querySelector("#stack .btn-add").onclick = () => {
  stack.push(stackElement.value);
  stack.render();
};

document.querySelector("#stack .btn-remove").onclick = () => {
  stack.pop();
  stack.render();
};
