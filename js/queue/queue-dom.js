const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = '';
};

const generateListQueue = () => {

  queueUL.innerHTML = ''

  const items = queue.display()

  for (let item of items) {
    const li = document.createElement('li');
    li.classList.add('active');
    li.innerText = item;
    queueUL.appendChild(li);
  }

  for (let i = 0; i < newStack.MAX_SIZE - items.length; i++) {
    const li = document.createElement('li');
    li.classList.add('inactive');
    queueUL.appendChild(li);
  }

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
  queue.enqueue(queueInput.value)
  generateListQueue()
  clearQueueInput()
};

const removeFromQueue = () => {
  queue.dequeue()
  generateListQueue()
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
