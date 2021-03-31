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
    warningBottomStack.innerHTML = type
    warningBottomStack.className = 'alert alert-danger'

  } else if (type === 'overflow') {
    warningTopStack.innerHTML = type
    warningTopStack.className = 'alert alert-danger'
};

const addToQueue = () => {
  // ... your code goes here
};

const removeFromQueue = () => {
  // ... your code goes here
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
}