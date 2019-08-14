var stack = new StackDataStructure();
stack.MAX_SIZE = 5;
var elementStacked;
var elementOutFromStack;

function checkDivIsFilled() {
  let divs = document.getElementsByClassName("stack");
  for (let i = 0; i < 5; i++) {
    if (divs[i].innerHTML == "") {
      divs[i].classList.replace("stack__filled", "stack__empty");
    } else {
      divs[i].classList.replace("stack__empty", "stack__filled");
    }
  }
}

function updateStack() {
  let divs = document.getElementsByClassName("stack");
  for (let i = 0; i < 5; i++) {
    if (stack.stackControl[i] !== undefined) {
      divs[i].innerText = stack.stackControl.reverse()[i];
      stack.stackControl.reverse()[i];
    } else {
      divs[i].innerText = "";
    }
  }
}

function updateDataTaken() {
  let span = document.getElementById("data__taken");
  span.innerText = elementStacked.toString();
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("btn__add").addEventListener("click", function() {
    console.log(stack.canPush());
    let underflow = document.getElementById("underflow");
    let overflow = document.getElementById("overflow");
    let value = document.getElementById("stack__input").value;
    if (value !== "") {
      elementStacked = stack.push(value);
      if (elementStacked !== "Stack Overflow") {
        updateStack();
        checkDivIsFilled();
        underflow.classList.replace("flow__show", "flow__hide");
      } else {
        overflow.classList.replace("flow__hide", "flow__show");
      }
    } else {
      console.log("No hay valor");
    }
  });

  document.getElementById("btn__take").addEventListener("click", function() {
    console.log(stack.canPush());
    let overflow = document.getElementById("overflow");
    let underflow = document.getElementById("underflow");

    elementStacked = stack.pop();
    // console.log(elementOutFromStack);
    updateStack();
    checkDivIsFilled();
    if (stack.canPush()) {
      overflow.classList.replace("flow__show", "flow__hide");
    }

    if (elementStacked == "Stack Underflow") {
      underflow.classList.replace("flow__hide", "flow__show");
    }
    updateDataTaken();
  });
});
