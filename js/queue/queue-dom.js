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
addQueue.addEventListener("click", (e) => {
  if (queue.canEnqueue()) {
       const lista = document.querySelector('.list-queue .inactive');
      lista.classList = 'active'
    }
    })
}


const removeFromQueue = () => {
  dequeue.addEventListener("click", (e) => {
    if (queue.dequeue) {
      const lista = document.querySelector('.list-queue .active')
      lista.classList='inactive'
   }
 })
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
