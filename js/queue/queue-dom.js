const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = ''
};

const generateListQueue = () => {

  for (let i = 0; i < queue.MAX_SIZE; i++) {
    const newLis = document.createElement("li")
    queueUL.appendChild(newLis).classList.add('inactive')
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

  queue.queueControl.forEach(elm => {
    const lis = document.querySelector('#queue-list .inactive')
    lis.className = 'active'
    lis.innerHTML = elm
  })
  clearQueueInput()
};

const removeFromQueue = () => {
  queue.dequeue()

  queue.queueControl.forEach(elm => {
    const lis = document.querySelector('#queue-list .active')
    lis.className = 'inactive'
    lis.innerHTML = ''
  })
  console.log(queue.queueControl)
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
