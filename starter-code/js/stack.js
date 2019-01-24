let stack = new StackDataStructure();
let stackElement = document.getElementById("stackelement");
let addStack = document.getElementById("add-stack");
let stacks = document.getElementsByClassName("stack-element");
let removeStack = document.getElementById("delete-stack");

let stackUnder = document.getElementById("error-stack-under");

addStack.addEventListener("click", e => {
  //if ((stackElement.value = "")) {
  //alert("Introduce un dato");
  //}
  //else {
  if (stack.canPush()) {
    stack.stackControl.push(stackElement.value);
    for (let i = 0; i < stack.stackControl.length; i++) {
      stacks[stack.MAX_SIZE - i].innerHTML = stack.stackControl[i];
      stacks[stack.MAX_SIZE - i].classList.add("addedelement");
      stackElement.value = "";
    }
    //  } else {
    //  stackOver.setAttribute("class", "display error-stack");
  }
  // }
});

removeStack.addEventListener("click", e => {
  stack.stackControl.pop();
  for (let i = 0; i < stacks.length; i++) {
    stacks[stacks.length - 1 - stack.stackControl.length].innerHTML = "";
    stacks[stacks.length - 1 - stack.stackControl.length].classList.remove(
      "addedelement"
    );
    stackElement.value = "";
  }
});

/*
addStack.addEventListener('click', e=>{
  if(stack.canPush()) {
    let guardar = stack.push(stackElement.value)
    for(i = 0; i<stack.stackControl.length; i++) {
      stackList[stack.MAX_SIZE - stack.stackControl.length].innerText = guardar[i]
      stackList[stack.MAX_SIZE - stack.stackControl.length].setAttribute('class','queue-item stack-element')
      stackUnder.setAttribute('class','error-stack')
    }
  } else {
      stackOver.setAttribute('class','display error-stack')
    }
  }
  */
