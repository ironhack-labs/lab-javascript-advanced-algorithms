const queue = new QueueDataStructure();


const clearQueueInput = () => {
  const queueInput = document.querySelector('.queue-input').value
  return queueInput
};


const queueUL = document.querySelector('.list-queue');
const generateListQueue = () => {
  
};

generateListQueue();


const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.innerHTML = 'underflow'
  } else if (type === 'overflow') {
    warningTopQueue.innerHTML = 'overflow'
  }
};

const addQueue = document.querySelector('.btn-add-queue');
const addToQueue = () => {
  
};

const dequeue = document.querySelector('.btn-take-dequeue');
const removeFromQueue = () => {
  
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
