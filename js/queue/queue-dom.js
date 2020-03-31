const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = "";
};

const generateListQueue = () => {
  // ... your code goes here
  warningBottomQueue.style.display = "none";
  warningTopQueue.style.display = "none";
  let newList = "";
  queue.queueControl.forEach(function (e) {
    newList += `<li class="active">${e}</li>`;
  })

  for (let i = queue.queueControl.length; i < queue.MAX_SIZE; i++) {
    newList += `<li class="inactive"></li>`;
  }
  queueUL.innerHTML = newList;
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.style.display = "block";
    warningBottomQueue.textContent = "Underflow !";
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.style.display = "block";
    warningTopQueue.textContent = "Overflow !";
  }
};

const addToQueue = () => {
  // ... your code goes here
  if (queue.canEnqueue()) {
    queue.enqueue(queueInput.value);
    generateListQueue();

  } else {
    generateWarningQueue("overflow");
  }
};

const removeFromQueue = () => {
  // ... your code goes here
  if (queue.isEmpty()) {
    generateWarningQueue("underflow");
  } else {
    queue.dequeue();
    generateListQueue();
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);