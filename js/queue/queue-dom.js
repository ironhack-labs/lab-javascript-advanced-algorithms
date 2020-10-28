const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
  const value = queueInput.value;
  queueInput.value = "";
  return value;
};

const generateListQueue = () => {
  // ... your code goes here
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    queueUL.innerHTML += '<li class="inactive"></li>'
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.innerHTML = "underflow";
    warningBottomQueue.style.display = "block";
    setTimeout(() => {
      warningBottomQueue.style.display = "none";
    }, 2000);
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.innerHTML = "overflow";
    warningTopQueue.style.display = "block";
    setTimeout(() => {
      warningTopQueue.style.display = "none";
    }, 2000);
  }
};

const addToQueue = () => {
  // ... your code goes here
  if (queue.canEnqueue()) {
    warningBottomQueue.style.display = 'none';
    const firstItem = document.querySelector('#queue-list .inactive');
    firstItem.classList = 'active';
    const value = clearQueueInput();
    firstItem.innerHTML = value;
    queue.enqueue(value);
  } else {
    generateWarningQueue("overflow");
  }
};

const removeFromQueue = () => { // Should be FIFO
  // ... your code goes here
  if (queue.isEmpty()) {
    generateWarningQueue('underflow');
  } else {
    warningTopQueue.style.display = 'none';
    const item = document.querySelector('#queue-list .active');
    item.classList = 'inactive';
    item.innerHTML = "";
    queue.dequeue();
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
