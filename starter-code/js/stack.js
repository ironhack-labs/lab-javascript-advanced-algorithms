var stackBox = document.querySelector(".container-stack-box");

function stackOverFlow() {
  var newDiv = document.createElement("div");
  newDiv.classList.add("box-stackflow");
  newDiv.innerText = "Stack Overflow";
  var fullStack = stackBox.querySelector(".box-full");
  stackBox.insertBefore(newDiv,fullStack);
}

function stackUnderFlow() {
  var newDiv = document.createElement("div");
  newDiv.classList.add("box-stackflow");
  newDiv.innerText = "Stack Underflow";
  stackBox.appendChild(newDiv);
}

window.onload = function() {
  var stack = new StackDataStructure();
  var addBtn = document.querySelector(".btn-add");
  var takeBtn = document.querySelector(".btn-take");

  addBtn.onclick = function() {
    var emptyStacks = document.querySelectorAll(".box-empty");
    var emptyPosition = emptyStacks.length-1;
    var input = document.querySelector("input").value;
    if (stack.canPush()) {
      stack.push(input);
      emptyStacks[emptyPosition].classList.remove("box-empty");
      emptyStacks[emptyPosition].classList.add("box-full");
      emptyStacks[emptyPosition].innerText = input;
    } else {
      stackOverFlow();
    }
  }

  takeBtn.onclick = function () {
    var boxFull = document.querySelectorAll(".box-full");
    if(stack.isEmpty()) {
      stackUnderFlow();
    } else {
      boxFull[0].innerText="";
      boxFull[0].classList.remove("box-full");
      boxFull[0].classList.add("box-empty");
   }
  }
}