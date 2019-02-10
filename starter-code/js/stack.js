function showOverflow(idInput, idBtn, structNumber) {
  document.getElementById(idInput).value = "";
  // disable input
  document.getElementById(idInput).disabled = true;
  // disable button
  document.getElementById(idBtn).disabled = true;
  // show stack overflow
  document
    .getElementsByClassName("over-box")
    [structNumber].classList.remove("hidden");
}

function hideOverflow(idInput, idBtn, structNumber){
  // enable input
  document.getElementById(idInput).disabled = false;
  // enable button
  document.getElementById(idBtn).disabled = false;
  // hide stack overflow
  document.getElementsByClassName("over-box")[structNumber].classList.add("hidden");
}

function addItemToStack() {
  if (document.getElementById("inp-stack").value == "") {
    return;
  }

  let notFull = this.canPush();
  let divs = document.getElementsByClassName("stack-item");

  if (notFull) {
    this.push(document.getElementById("inp-stack").value);
    document.getElementById("inp-stack").value = "";

    if (this.stackControl.length === 1) {
      // hide stack overflow
      document.getElementsByClassName("under-box")[0].classList.add("hidden");
      // enable button
      document.getElementById("take-stack").disabled = false;
    }

    this.stackControl.forEach((element, index) => {
      // adds the item to the div box
      divs[divs.length - 1 - index].innerHTML = `<p>${element}</p>`;
      // adds class to colour it
      divs[divs.length - 1 - index].classList.add("blue-box");
    });
  } else {
    // show overflow box and disable input and buttons
    showOverflow("inp-stack", "add-stack", 0);
  }
}

function takeItemFromStack() {
  // if input is disabled, enable it and hide overflow box
  if (document.getElementById("inp-stack").disabled) {
    // hide overflow box and enable button
    hideOverflow("inp-stack","add-stack",0);
  }

  let emptyStack = this.isEmpty();
  let divs = document.getElementsByClassName("stack-item");

  if (!emptyStack) {
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
  } else {
    // show stack undeflow
    document.getElementsByClassName("under-box")[0].classList.remove("hidden");
    // disable button
    document.getElementById("take-stack").disabled = true;
  }
}

function addItemToQueue() {
  if (document.getElementById("inp-queue").value == "") {
    return;
  }
  let notFull = this.canEnqueue();
  let divs = document.getElementsByClassName("queue-item");

  if (notFull) {
    this.enqueue(document.getElementById("inp-queue").value);
    document.getElementById("inp-queue").value = "";

    if (this.queueControl.length === 1) {
      // hide queue overflow
      document.getElementsByClassName("under-box")[1].classList.add("hidden");
      // enable button
      document.getElementById("take-queue").disabled = false;
    }

    this.queueControl.forEach((element, index) => {
      // adds the item to the div box
      divs[index].innerHTML = `<p>${element}</p>`;
      // adds class to colour it
      divs[index].classList.add("blue-box");
    });
  } else {
    // show overflow box and disable input and buttons
    showOverflow("inp-queue", "add-queue", 1);
  }
}

function takeItemFromQueue() {
  // if input is disabled, enable it and hide overflow box
  if (document.getElementById("inp-queue").disabled) {
    // hide overflow box and enable button
    hideOverflow("inp-queue","add-queue",1);
  }

  let emptyQueue = this.isEmpty();
  let divs = document.getElementsByClassName("queue-item");

  if (!emptyQueue) {
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
  } else {
    // show queue undeflow
    document.getElementsByClassName("under-box")[1].classList.remove("hidden");
    // disable button
    document.getElementById("take-queue").disabled = true;
  }
}

window.onload = function() {
  // add listener to stack buttons and create stack structure
  let addStackBtn = document.getElementById("add-stack");
  let takeStackBtn = document.getElementById("take-stack");
  let stackStruct = new StackDataStructure();
  stackStruct.MAX_SIZE = document.getElementById("stack").childElementCount;
  
  addStackBtn.onclick = addItemToStack.bind(stackStruct);
  takeStackBtn.onclick = takeItemFromStack.bind(stackStruct);
  
  // add listener to queue buttons and create queue structure
  let addQueueBtn = document.getElementById("add-queue");
  let takeQueueBtn = document.getElementById("take-queue");
  let queueStruct = new QueueDataStructure();
  queueStruct.MAX_SIZE = document.getElementById("queue").childElementCount;

  addQueueBtn.onclick = addItemToQueue.bind(queueStruct);
  takeQueueBtn.onclick = takeItemFromQueue.bind(queueStruct);
};