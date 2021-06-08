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
  try {//no se come funciona try!!!!
    console.log("I'm adding queue")
    const liQueue = document.createElement('li')
    liQueue.className = 'active'
    queueUL.appendChild(liQueue)
   // console.log(queue.canPush())
    queue.enqueue()// ... your code goes here
  } catch (error) {
    const liQueue = document.createElement('li')
    // liQueue.className = 'inactive'
    liQueue.innerText = 'QUEUE_OVERFLOW'

  }
};

const removeFromQueue = () => {
  try {
    console.log("I'm removing queue")
    queueUL.removeChild(queueUL.lastElementChild)  // ... your code goes here
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
