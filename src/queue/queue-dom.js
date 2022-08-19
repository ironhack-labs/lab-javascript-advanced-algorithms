const queueUL = document.querySelector(".list-queue");
const queueInput = document.querySelector("#queue-input");
const warningTopQueue = document.querySelector("#queue-container .warning-top");
const warningBottomQueue = document.querySelector(
  "#queue-container .warning-bottom"
);
const addQueue = document.querySelector(".btn-add-queue");
const dequeue = document.querySelector(".btn-take-dequeue");

const queueTitle = document.querySelector(".col-sm-7 h2");
queueTitle.innerText = "Queue (FIFO) ➡️ 🚋 🚋🚋🚋 🚋 ➡️";
const queue = new Queue();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = "";
};

const generateListQueue = () => {
  // ... your code goes here
  warningBottomQueue.style.display = "none";
  warningTopQueue.style.display = "none";
  queueUL.innerHTML = "";

  let qLength = queue.display().length;
  let qSize = queue.MAX_SIZE - qLength;

  queue.display().forEach((item) => {
    let li = document.createElement("li");
    li.className = "active";
    li.innerText = item;
    queueUL.appendChild(li);
  });

  for (let i = 0; i < qSize; i++) {
    let li = document.createElement("li");
    li.style.minWidth = "42px";
    li.style.minHeight = "64px";
    li.className = "inactive";
    li.innerHTML = "&nbsp;";
    queueUL.appendChild(li);
  }
};
generateListQueue();

const generateWarningQueue = (type) => {
  if (type === "underflow") {
    // ... your code goes here
    warningBottomQueue.style.display = "block";
    warningBottomQueue.innerText = "⚠️ Queue underflow ⚠️";
  } else if (type === "overflow") {
    // ... your code goes here
    warningTopQueue.style.display = "block";
    warningTopQueue.innerText = "⚠️ Queue overflow ⚠️";
  }
};

const addToQueue = () => {
  try {
    // ... your code goes here
    queue.enqueue(queueInput.value);
    generateListQueue();
  } catch (error) {
    generateWarningQueue("overflow");
    // there was an overflow error, handle it
    //alert(error.message);
    clearQueueInput();
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    queue.dequeue();
    generateListQueue();
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningQueue("underflow");
    //alert(error.message);
  }
};

addQueue.addEventListener("click", addToQueue);
dequeue.addEventListener("click", removeFromQueue);
