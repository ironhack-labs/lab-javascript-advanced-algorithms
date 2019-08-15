// Initalize form variables to get value and add event listener
let newQueueElement = document.getElementById("queue-value");
let addQueueBtn = document.getElementById("queue-add-btn");
let takeQueueBtn = document.getElementById("queue-take-btn");
let queueElements = document.getElementsByClassName("queue");
let queueValueElement = document.getElementById("element2");

addQueueBtn.addEventListener("click", addToQueue);
takeQueueBtn.addEventListener("click", takeFromQueue);

// Add to stack and remove from stack functions
function addToQueue() {
  console.log(newQueueElement.value);

  if (queue.canEnqueue()) {
    queueValueElement.style.color = "#2E2E9C";
    if (newQueueElement.value.length === 0) {
      queueValueElement.innerText = "";
      queueValueElement.innerText = `Added "No Value Entered"`;
      queue.enqueue('NO VALUE ENTERED');
    }
    else {
      queueValueElement.innerText = "";
      queueValueElement.innerText = `Added "${newQueueElement.value}"`;
      queue.enqueue(newQueueElement.value);
    }
    let queueIndex = getQueuePosition() + 1;

    for (let i = 0; i < queueIndex; i++) {
      queueElements[i].innerText = queue.queueControl[i];
      if (i === queueIndex - 1) queueElements[i].classList.toggle("empty");
    }
  } else {
    let queueIndex = getQueuePosition();
    queueValueElement.style.color = '#991212';
    queueValueElement.innerText = "";
    queueValueElement.innerText = `Queue Overflow`;
    queueElements[queueIndex].innerText = "Queue Overflow";
    queueElements[queueIndex].style.background = "#991212";
    setTimeout(() => {
      queueElements[queueIndex].innerText = queue.queueControl[queueIndex];
      queueElements[queueIndex].removeAttribute("style");
    }, 1000);
  }
}

function takeFromQueue() {
  let queueIndex = getQueuePosition();
  queueValueElement.style.color = '#991212';

  if (!queue.isEmpty()) {
    queueValueElement.innerText = "";
    queueValueElement.innerText = queue.dequeue();
    queueElements[queueIndex].innerText = "EMPTY";
    queueElements[queueIndex].classList.toggle("empty");
  } else {
    queueValueElement.innerText = "";
    queueValueElement.innerText = `Queue Underflow`;
    queueElements[queueIndex+1].style.color = '#FFFFFF';
    queueElements[queueIndex+1].innerText = "Queue Underflow";
    queueElements[queueIndex+1].style.background = "#991212";
    setTimeout(() => {
      queueElements[queueIndex+1].innerText = "EMPTY";
      queueElements[queueIndex+1].removeAttribute("style");
    }, 1000);
  }
}

function getQueuePosition() {
  return queue.queueControl.length - 1;
}
