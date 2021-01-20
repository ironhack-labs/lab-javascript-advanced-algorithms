const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
};

const generateListQueue = () => {
  // ... your code goes here
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToQueue = () => {
  // ... your code goes here
  document.querySelector(".list-queue .inactive").classList.add("active")
  document.querySelector(".list-queue .inactive").classList.remove("inactive")
};

const removeFromQueue = () => {
  // ... your code goes here
  const item = document.querySelectorAll(".list-queue .active")
  item[item.length-1].classList.add("inactive")
  item[item.length-1].classList.remove("active")
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
