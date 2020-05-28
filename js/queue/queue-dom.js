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
  queueUL.innerHTML = '';
  queue.queueControl.forEach(item => {
    const newQueueItem = document.createElement('li');
    newQueueItem.innerHTML = item;
    queueUL.appendChild(newQueueItem);
  })
}

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.innerHTML = 'Queue underflow!!!';
    warningBottomQueue.style.display = 'block';
  } else if (type === 'overflow') {
    warningTopQueue.innerHTML = 'Queue overflow!!!';
    warningTopQueue.style.display = 'block';
  }
};

const addToQueue = () => {
  warningBottomQueue.style.display = 'none';
  if (queue.canEnqueue()=== true) {
    queue.enqueue(queueInput.value);
    generateListQueue();
    clearQueueInput();
  } else {
    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  warningTopQueue.style.display = 'none';
  if (queue.isEmpty()) {
    generateWarningQueue('underflow');
  } else {
    queue.dequeue();
    generateListQueue();
    clearQueueInput()
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
