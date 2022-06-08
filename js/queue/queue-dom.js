const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeueButton = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

let { queueControl, MAX_SIZE, canEnqueue, isEmpty, enqueue, dequeue, display } = queue

const clearQueueInput = () => {
  // ... your code goes here
};

const generateListQueue = () => {
  // ... your code goes here
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
    enqueue(queueInput.value)
    let newLi = document.createElement('li')
    queueUL.appendChild(newLi)
    newLi.innerText = queueControl[0]



  } catch (error) {
    // there was an overflow error, handle it

  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    dequeue()

  } catch (error) {
    // there was an underflow error, handle it
  }
};

addQueue.addEventListener('click', addToQueue);
dequeueButton.addEventListener('click', removeFromQueue);
