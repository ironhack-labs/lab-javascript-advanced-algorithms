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
  const newQueue1 = document.createElement('li')
  newQueue1.setAttribute('class', 'inactive')
  const newQueue2 = document.createElement('li')
  newQueue2.setAttribute('class', 'inactive')
  const newQueue3 = document.createElement('li')
  newQueue3.setAttribute('class', 'inactive')
  const newQueue4 = document.createElement('li')
  newQueue4.setAttribute('class', 'inactive')
  const newQueue5 = document.createElement('li')
  newQueue5.setAttribute('class', 'inactive')
  const newQueue6 = document.createElement('li')
  newQueue6.setAttribute('class', 'inactive')
  const newQueue7 = document.createElement('li')
  newQueue7.setAttribute('class', 'inactive')
  const newQueue8 = document.createElement('li')
  newQueue8.setAttribute('class', 'inactive')
  const newQueue9 = document.createElement('li')
  newQueue9.setAttribute('class', 'inactive')
  const newQueue10 = document.createElement('li')
  newQueue10.setAttribute('class', 'inactive')
  queueUL.appendChild(newQueue1)
  queueUL.appendChild(newQueue2)
  queueUL.appendChild(newQueue3)
  queueUL.appendChild(newQueue4)
  queueUL.appendChild(newQueue5)
  queueUL.appendChild(newQueue6)
  queueUL.appendChild(newQueue7)
  queueUL.appendChild(newQueue8)
  queueUL.appendChild(newQueue9)
  queueUL.appendChild(newQueue10)
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
};

const removeFromQueue = () => {
  // ... your code goes here
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
