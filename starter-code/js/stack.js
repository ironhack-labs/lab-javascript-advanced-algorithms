const stack = new StackDataStructure();

document.getElementById("btn-add").onclick = function() {
  let textInput = document.querySelector("input").value;
  if (stack.canPush()) {
    stack.push();
    document.getElementById(
      "centerCol"
    ).innerHTML += ` <a href="#" class="btn btn-info btn-stack" /> ${textInput}</a>`;
  } else {
    alert("Gurl you got em all");
  }
};
document.getElementById("btn-remove").onclick = function() {
  if (!stack.isEmpty()) {
    stack.pop();
    document.getElementById("centerCol").lastElementChild.remove();
  } else {
    alert("Guuurl put something inside fuuurst");
  }
};
