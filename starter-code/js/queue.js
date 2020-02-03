// Initialize
const queue = document.getElementById("queue");
const startQueue = document.getElementById("queueStart");
const queueOverflow = document.getElementById("queueOverflow");
const queueUnderflow = document.getElementById("queueUnderflow");
const divArrayQueue = startQueue.getElementsByClassName("col-sm p-2 border queue");
const divArrayQueueLight = startQueue.getElementsByClassName("col-sm p-2 border queue bg-light text-dark");
const divPopArrayQueue = startQueue.getElementsByClassName("col-sm p-2 border queue bg-dark text-light");
queueData = new QueueDataStructure();
queueData.MAX_SIZE = 8;

// Add to queue
const addQueue = () => {
  const inputValue = queue.querySelector("input").value;
  const pushResult = queueData.enqueue(inputValue);
  queueUnderflow.classList.replace("showRBtm", "hideRBtmQ");

  if (pushResult === "Queue Overflow") {
    queueOverflow.classList.replace("hideRTop", "showRTop");
  } else {
    for (let i = 0, t = divArrayQueue.length; t >= 0; t--, i++) {
      // left the 't' there, because in row mode, it can be used to fill from bottom to top.
      // Right now, it does not do anything.
      if (queueData.queueControl[i] !== undefined) {
        // divArrayQueue[t - 1].innerText = queueData.queueControl[i];
        // divArrayQueue[t - 1].className = "col-sm p-2 border queue bg-dark text-light";
        divArrayQueue[i].innerText = queueData.queueControl[i];
        divArrayQueue[i].className = "col-sm p-2 border queue bg-dark text-light";
      }
    }
  }
};

// Remove from queue
const removeQueue = () => {
  const popResult = queueData.dequeue();
  queueOverflow.classList.replace("showRTop", "hideRTop");

  if (popResult === "Queue Underflow") {
    queueUnderflow.classList.replace("hideRBtmQ", "showRBtm");
  } else {
    divPopArrayQueue[divPopArrayQueue.length - 1].innerHTML = "&nbsp";
    divPopArrayQueue[divPopArrayQueue.length - 1].className = "col-sm p-2 border queue bg-light text-dark";
  }
};

// Listen for clicks
const addButtonQueue = queue.getElementsByClassName("btn")[0];
addButtonQueue.addEventListener("click", e => addQueue());

const takeButtonQueue = queue.getElementsByClassName("btn")[1];
takeButtonQueue.addEventListener("click", e => removeQueue());
