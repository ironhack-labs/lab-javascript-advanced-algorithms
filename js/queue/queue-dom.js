const queueUL = document.querySelector(".list-queue");
const queueInput = document.querySelector(".queue-input");
const warningTopQueue = document.querySelector("#queue-container .warning-top");
const warningBottomQueue = document.querySelector(
  "#queue-container .warning-bottom"
);
const addQueue = document.querySelector(".btn-add-queue");
const dequeue = document.querySelector(".btn-take-dequeue");

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = "";
};

const generateListQueue = () => {
  // ... your code goes here
  let html = "";
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    html += `<li class="inactive"></li>`;
  }
  queueUL.innerHTML = html;
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === "underflow") {
    // ... your code goes here
  } else if (type === "overflow") {
    // ... your code goes here
  }
};

const addToQueue = () => {
  // ... your code goes here
  const addTo = queueUL.getElementsByClassName("inactive");
  const lastElm = addTo[0];
  lastElm.classList.toggle("active");
  lastElm.classList.toggle("inactive");
};

const removeFromQueue = () => {
  // ... your code goes here
  const removeTo = queueUL.getElementsByClassName("active");
  const firstElm = removeTo[removeTo.length - 1];
  firstElm.classList.toggle("inactive");
  firstElm.classList.toggle("active");
};

addQueue.addEventListener("click", addToQueue);
dequeue.addEventListener("click", removeFromQueue);
