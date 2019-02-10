function addItemToStack() {
  if (document.getElementById("inp-stack").value == ""){
    return
  }

  let notFull = this.canPush();
  let divs = document.getElementsByClassName("stack-item");
  
  if (notFull) {
    this.push(document.getElementById("inp-stack").value);
    document.getElementById("inp-stack").value = "";

    if (this.stackControl.length === 1){
      // hide stack overflow
      document.getElementsByClassName("under-box")[0].classList.add("hidden")  
      // enable button
      document.getElementById("take-stack").disabled = false;
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
    // disable button
    document.getElementById("add-stack").disabled = true;
    // show stack overflow
    document.getElementsByClassName("over-box")[0].classList.remove("hidden")
  }
}

function takeItemFromStack() {
  // if input is disabled, enable it and hide overflow box
  if (document.getElementById("inp-stack").disabled){
    // enable input
    document.getElementById("inp-stack").disabled = false;
    // enable button
    document.getElementById("add-stack").disabled = false;
    // hide stack overflow
    document.getElementsByClassName("over-box")[0].classList.add("hidden")
  }

  let emptyStack = this.isEmpty();
  let divs = document.getElementsByClassName("stack-item");
  
  if (!emptyStack){
    this.pop();
    // reset boxes
    for (let index = 0; index < divs.length; index++) {
      divs[index].innerHTML = "<p>&nbsp;</p>";
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
    // disable button
    document.getElementById("take-stack").disabled = true;
  }
}

function addItemToQueue() {
  if (document.getElementById("inp-queue").value == ""){
    return
  }
  let notFull = this.canEnqueue();
  let divs = document.getElementsByClassName("queue-item");
  
  if (notFull) {
    this.enqueue(document.getElementById("inp-queue").value);
    document.getElementById("inp-queue").value = "";

    if (this.queueControl.length === 1){
      // hide queue overflow
      document.getElementsByClassName("under-box")[1].classList.add("hidden")  
      // enable button
      document.getElementById("take-queue").disabled = false;
    }
    
    this.queueControl.forEach((element, index) => {
      // adds the item to the div box
      divs[index].innerHTML = `<p>${element}</p>`;
      // adds class to colour it
      divs[index].classList.add("blue-box");
    });
  } else{
    document.getElementById("inp-queue").value = "";
    // disable input
    document.getElementById("inp-queue").disabled = true;
    // disable button
    document.getElementById("add-queue").disabled = true;
    // show queue overflow
    document.getElementsByClassName("over-box")[1].classList.remove("hidden")
  }
}

function takeItemFromQueue() {
  // if input is disabled, enable it and hide overflow box
  if (document.getElementById("inp-queue").disabled){
    // enable input
    document.getElementById("inp-queue").disabled = false;
    // enable button
    document.getElementById("add-queue").disabled = false;
    // hide queue overflow
    document.getElementsByClassName("over-box")[1].classList.add("hidden")
  }

  let emptyQueue = this.isEmpty();
  let divs = document.getElementsByClassName("queue-item");
  
  if (!emptyQueue){
    this.dequeue();
    // reset boxes
    for (let index = 0; index < divs.length; index++) {
      divs[index].innerHTML = "<p>&nbsp;</p>";
      divs[index].classList.remove("blue-box");
    }

    // add elements to queue and add class for blue boxes
    this.queueControl.forEach((element, index) => {
      // adds the item to the div box
      divs[index].innerText = element;
      // adds class to colour it
      divs[index].classList.add("blue-box");
    });
  } else{
    // show queue undeflow
    document.getElementsByClassName("under-box")[1].classList.remove("hidden")
    // disable button
    document.getElementById("take-queue").disabled = true;
  }
}

window.onload = function() {
  var addStackBtn = document.getElementById("add-stack");
  var takeStackBtn = document.getElementById("take-stack");
  var stackStruct = new StackDataStructure();
  stackStruct.MAX_SIZE = document.getElementById("stack").childElementCount;

  addStackBtn.onclick = addItemToStack.bind(stackStruct);
  takeStackBtn.onclick = takeItemFromStack.bind(stackStruct);

  var addQueueBtn = document.getElementById("add-queue");
  var takeQueueBtn = document.getElementById("take-queue");
  var queueStruct = new QueueDataStructure();
  queueStruct.MAX_SIZE = document.getElementById("queue").childElementCount;

  addQueueBtn.onclick = addItemToQueue.bind(queueStruct);
  takeQueueBtn.onclick = takeItemFromQueue.bind(queueStruct);
};
