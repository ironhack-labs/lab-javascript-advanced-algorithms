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
  console.log(queue.canEnqueue())
  if (queue.canEnqueue() === true) {
    queue.enqueue('*')
    for (let i = 0; i < queue.queueControl.length; i++) {
      document.querySelectorAll('#queue-list li')[i].setAttribute('class', 'active')
    }
  } else {
    const warningDiv = document.querySelector('#queue-container .warning-top')
    warningDiv.innerHTML = 'overflow'
    warningDiv.setAttribute('style', 'display: block;')

  } if (queue.queueControl.length > 0) {
    const warningDiv = document.querySelector('#queue-container .warning-bottom')
    warningDiv.setAttribute('style', '')
  }

};

const removeFromQueue = () => {
  console.log(queue.isEmpty())
  if (queue.isEmpty() === false) {
    document.querySelectorAll('#queue-list li')[queue.queueControl.length - 1].setAttribute('class', 'inactive')
    queue.dequeue()
    console.log(queue.queueControl)
  } else {
    const warningDiv = document.querySelector('#queue-container .warning-bottom')
    warningDiv.innerHTML = 'underflow'
    warningDiv.setAttribute('style', 'display: block;')

  } if (queue.queueControl.length < 10) {
    const warningDiv = document.querySelector('#queue-container .warning-top')
    warningDiv.setAttribute('style', '')
  }


};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
