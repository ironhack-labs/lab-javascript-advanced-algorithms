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
  let maxElements = newStack.MAX_SIZE;
  let renderListStack = ""
  let wrapper = ("#queue-list")
  console.log($(wrapper))
  for (let i = 1; i <= maxElements; i++) {
    renderListStack += $(wrapper).append('<li class="inactive"></li>');
  }

  let list = document.querySelectorAll("#queue-list li")
  array = [...list]

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
