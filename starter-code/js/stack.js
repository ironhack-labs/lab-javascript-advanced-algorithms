// New object class Stack

var stackStructure = new StackDataStructure();


stackStructure.MAX_SIZE = 10;


const containerStack = document.querySelector(".stack");


// Create Div of Stack Size

for (var i = 0; i < stackStructure.MAX_SIZE; i++) {
    element = document.createElement("div");
    element.setAttribute("class", "stack-element");
    containerStack.append(element);
  }

function printStack(stackFunction, action) {
  if (action === "push") {
    if (stackFunction === "Stack Overflow") {
      document.querySelectorAll(".stack-element")[0].innerHTML =
        "Stack Overflow";
      document
        .querySelectorAll(".stack-element")[0]
        .classList.add("stack-overflow");
        document
        .querySelectorAll(".stack-element")
        [0].classList.remove("filled");
    } else {
      stackFunction.forEach(function(value, i) {
        document.querySelectorAll(".stack-element")[
          stackStructure.MAX_SIZE - 1 - i
        ].innerHTML = `${value}`;
        document
          .querySelectorAll(".stack-element")
          [stackStructure.MAX_SIZE - 1 - i].classList.add("filled");
        document
          .querySelectorAll(".stack-element")
          [stackStructure.MAX_SIZE - 1 - i].classList.remove("stack-underflow");
      });
    }
  } else {
    if (stackFunction === "Stack Underflow") {
      document.querySelectorAll(".stack-element")[
        stackStructure.MAX_SIZE - 1
      ].innerHTML = "Stack Underflow";
      document
        .querySelectorAll(".stack-element")
        [stackStructure.MAX_SIZE - 1].classList.add("stack-underflow");
        document
        .querySelectorAll(".stack-element")
        [stackStructure.MAX_SIZE - 1 - i].classList.remove("filled");
    } else {
      console.log(stackStructure.stackControl.length);
      document.querySelectorAll(".stack-element")[
        stackStructure.MAX_SIZE - 1 - stackStructure.stackControl.length
      ].innerHTML = "";
      document
        .querySelectorAll(".stack-element")
        [
          stackStructure.MAX_SIZE - 1 - stackStructure.stackControl.length
        ].classList.remove("filled");
        document
        .querySelectorAll(".stack-element")
        [
          stackStructure.MAX_SIZE - 1 - stackStructure.stackControl.length
        ].classList.remove("stack-overflow");
    }
  }
}

document.querySelector("#addStack").onclick = function() {
  if (document.querySelector("#inputStack").value === '') {
    printStack(stackStructure.push(1),"push");
  } else {
    printStack(stackStructure.push(document.querySelector("#inputStack").value),"push");
  }
  
  document.querySelector("#inputStack").value = "";
};

document.querySelector("#takeStack").onclick = function() {
  printStack(stackStructure.pop(), "pop");
};


