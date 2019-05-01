const stack = new StackDataStructure();

document.getElementById("add").onclick = function() {
  let textInput = document.querySelector("input").value;
  if (stack.canPush()) {
    stack.push();
    document.getElementById(
      "stackNuevo"
    ).innerHTML += `<a href="#" class="btn btn-info btn-stack" /> ${textInput}</a>`;
  } else {
    alert("No caben más en este Stack");
  }
};
document.getElementById("remove").onclick = function() {
  if (!stack.isEmpty()) {
    stack.pop();
    document.getElementById("stackNuevo").lastElementChild.remove();
  } else {
    alert("No se pueden quitar mas");
  }
};
