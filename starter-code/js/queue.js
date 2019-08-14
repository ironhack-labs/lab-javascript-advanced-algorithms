// Initalize form variables to get value and add event listener
let newQueueElement = document.getElementById("queue-value");
let addQueueBtn = document.getElementById("queue-add-btn");
let takeQueueBtn = document.getElementById("queue-take-btn");
let queueElements = document.getElementsByClassName("queue");

addQueueBtn.addEventListener("click", addToQueue);
takeQueueBtn.addEventListener("click", takeFromQueue);

// Add to stack and remove from stack functions
function addToQueue() {
  console.log(newQueueElement.value);

  if (queue.canEnqueue()) {
    queue.enqueue(newQueueElement.value);
    let queueIndex = getQueuePosition() + 1;
    let position = queueIndex;

    for (let i = 0; i < queueIndex; i++) {
      queueElements[i].innerText = queue.queueControl[i];
      if (i === queueIndex - 1) queueElements[i].classList.toggle("empty");
    }
  } else {
    let queueIndex = getQueuePosition();
    let position = queueElements.length - queueIndex - 1;
    queueElements[position].innerText = "Queue Overflow";
    queueElements[position].style.background = "#991212";
    setTimeout(() => {
      queueElements[position].innerText = queue.queueControl[queueIndex];
      queueElements[position].removeAttribute("style");
    }, 1000);
  }
}

function takeFromQueue() {
  let queueIndex = getQueuePosition();
  let position = queueElements.length - queue - 1;

  if (!queue.isEmpty()) {
    queue.dequeue();
    queueElements[position].innerText = "EMPTY";
    queueElements[position].classList.toggle("empty");
  } else {
    queueElements[9].innerText = "Queue Underflow";
    queueElements[9].style.background = "#991212";
    setTimeout(() => {
      queueElements[9].innerText = "EMPTY";
      queueElements[9].removeAttribute("style");
    }, 1000);
  }
}

function getQueuePosition() {
  return queue.queueControl.length - 1;
}
