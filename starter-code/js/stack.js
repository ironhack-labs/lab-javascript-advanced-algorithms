var stack = new StackDataStructure();
var input = document.getElementById("input-add");
var addButton = document.getElementById("add");
var takeButton = document.getElementById("take");

// console.log(document.getElementsByClassName('row-lg')[0].innerText==="")
addButton.onclick = function() {
  //can push
  if (stack.canPush()) {
    stack.push(input.value);

    var free = document.getElementsByClassName("free");
    free[free.length - 1].innerText = input.value;
    free[free.length - 1].classList.add("busy");
    free[free.length - 1].classList.add("blu-back");

    free[free.length - 1].classList.remove("free");
  } else {
    var stackOverflow = document.getElementsByClassName("row-lg")[0];
    stackOverflow.classList.remove("hide");
  }
};

takeButton.onclick = function() {
  console.log(stack.stackControl);
  if (!stack.isEmpty()) {
    stack.pop();

    var busy = document.getElementsByClassName("busy")[0];
    document.getElementById("take-element").innerText = busy.innerText;
    busy.innerText = "";
    busy.classList.add("free");
    busy.classList.remove("blu-back");

    busy.classList.remove("busy");
  } else {
    var stackUnderflow = document.getElementsByClassName("row-lg")[9];
    stackUnderflow.classList.remove("hide");
  }
};
