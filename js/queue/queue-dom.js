const queueUL = document.getElementById("queue-list");
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
  const li = queueUL.querySelectorAll(".inactive");
  console.log(li)
  li[0].textContent = "";
};

const generateListQueue = () => {
  // ... your code goes here
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    const li = document.createElement("li");
    li.classList.add("inactive");
    queueUL.appendChild(li);
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === "underflow") {
    // ... your code goes here
    warningBottomQueue.style.display = "block";
    warningBottomQueue.innerHTML = queue.display();
    console.log(queue.display());
  } else if (type === "overflow") {
    // ... your code goes here
    warningTopQueue.style.display = "block";
    warningTopQueue.innerHTML = queue.display();
  }
};

const addToQueue = () => {
  // ... your code goes here
  if (queue.queueControl.length < 10) {
    warningBottomQueue.style.display = "none";
    queue.enqueue();
    const li = queueUL.querySelectorAll(".inactive");
    console.log(li);
    li[0].classList.replace("inactive", "active");
    const myInputQueue = container.querySelectorAll("input");
    li[0].textContent = myInputQueue[1].value;
  } else {
    generateWarningQueue("overflow");
  }
};

const removeFromQueue = () => {
  // ... your code goes here
  if (queue.queueControl.length <= 0) {
    generateWarningQueue("underflow");
  } else {
    warningTopQueue.style.display = "none";
    queue.dequeue();
    const li = queueUL.querySelectorAll(".active");
    console.log(li);
    let lastIndex = li.length - 1;
    li[lastIndex].classList.replace("active", "inactive");
    clearQueueInput();
  }
};

addQueue.addEventListener("click", addToQueue);
dequeue.addEventListener("click", removeFromQueue);
