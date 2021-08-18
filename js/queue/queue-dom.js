const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  // ... your code goes here
};

const queueArray = [];

const generateListQueue = () => {
  // ... your code goes here
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    const element = document.createElement('li');
    element.setAttribute('class', 'inactive');
    queueArray.push(element);
    queueUL.appendChild(element);
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToQueue = () => {
  try {
    // ... your code goes here
    queue.enqueue('');
    for (let i = 0; i < queue.queueControl.length; i++) {
      queueArray[i].setAttribute('class', 'active');
    }
  } catch (error) {
    // there was an overflow error, handle it
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    queue.dequeue('');
    queueArray[queue.queueControl.length].setAttribute('class', 'inactive');
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
