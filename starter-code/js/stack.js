function addItemToStack() {
  let notFull = this.canPush();
  let divs = document.getElementsByClassName("stack-item");
  
  if (notFull) {
    this.push(document.getElementById("inp-stack").value);
    document.getElementById("inp-stack").value = "";

    if (this.stackControl.length === 1){
      // hide stack overflow
      document.getElementsByClassName("under-box")[0].classList.add("hidden")  
    }
    
    this.stackControl.forEach((element, index) => {
      // adds the item to the div box
      divs[divs.length - 1 - index].innerHTML = `<p>${element}</p>`;
      // adds class to colour it
      divs[divs.length - 1 - index].classList.add("blue-box");
    });
  } else{
    document.getElementById("inp-stack").value = "";
    // disable input
    document.getElementById("inp-stack").disabled = true;
    // show stack overflow
    document.getElementsByClassName("over-box")[0].classList.remove("hidden")
  }
}

function takeItemFromStack() {

  // if input is disabled, enable it and hide overflow box
  if (document.getElementById("inp-stack").disabled){
    // enable input
    document.getElementById("inp-stack").disabled = false;
    // hide stack overflow
    document.getElementsByClassName("over-box")[0].classList.add("hidden")
  }

  let emptyStack = this.isEmpty();
  let divs = document.getElementsByClassName("stack-item");
  
  if (!emptyStack){
    this.pop();
    // reset boxes
    for (let index = 0; index < divs.length; index++) {
      divs[index].innerHTML = "<p></p>";
      divs[index].classList.remove("blue-box");
    }

    // add elements to stack and add class for blue boxes
    this.stackControl.forEach((element, index) => {
      // adds the item to the div box
      divs[divs.length - 1 - index].innerText = element;
      // adds class to colour it
      divs[divs.length - 1 - index].classList.add("blue-box");
    });
  } else{
    // show stack undeflow
    document.getElementsByClassName("under-box")[0].classList.remove("hidden")
  }


}

window.onload = function() {
  var addStackBtn = document.getElementById("add-stack");
  var takeStackBtn = document.getElementById("take-stack");
  var stackStruct = new StackDataStructure();
  stackStruct.MAX_SIZE = document.getElementById("stack").childElementCount;

  addStackBtn.onclick = addItemToStack.bind(stackStruct);
  takeStackBtn.onclick = takeItemFromStack.bind(stackStruct);
};
