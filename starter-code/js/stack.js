let stackLogic = new StackDataStructure();
let addStackBtn = document.getElementById("add-stack-item");
let takeStackBtn = document.getElementById("take-stack-item");
let stackBoxContainer = document.getElementById("stack");



let addToStack = () => {
  //debugger
 
  let newItem = document.getElementById("stack-item-text");

  //stackLogic.push(newItem.value) === `Stack Overflow`
  if (stackBoxContainer.getElementsByTagName("li").length == 8) {
    let warning = document.querySelector("#stack-overflow");
    warning.setAttribute("style", "visibility: visible;")

  } else if (stackBoxContainer.getElementsByTagName("li").length <= 7) {
    let newBox = document.createElement("li");
    newBox.innerText = newItem.value;
    stackLogic.push(newBox)
    // newBox.style.transition = "all 2s";
    newBox.style.backgroundColor = "aliceblue";
    stackBoxContainer.insertBefore(newBox, stackBoxContainer.firstElementChild)
    let morewarning = document.querySelector("#stack-underflow");
    morewarning.setAttribute("style", "visibility: hidden")
  }

 ;
};

let takeFromStack = () => {


  // debugger
  if
   (stackBoxContainer.getElementsByTagName("li").length === 0)
      // (stackLogic.pop() === stackBoxContainer)
    {
    let morewarning = document.querySelector("#stack-underflow");
    morewarning.setAttribute("style", "visibility: visible")

  } 
  // else if (stackLogic.pop(newBox) === `Stack Underflow`) {
    else {
      let warning = document.querySelector("#stack-overflow")
      warning.setAttribute("style", "visibility: hidden;") 
    let morewarning = document.querySelector("#stack-underflow");
    morewarning.setAttribute("style", "visibility: hidden")
    stackBoxContainer.removeChild(stackBoxContainer.firstElementChild);
  }
};

addStackBtn.onclick = e => {
  e.preventDefault();
  addToStack(stackLogic);
};
takeStackBtn.onclick = e => {
  e.preventDefault();
  takeFromStack(stackLogic);
};
