const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  let inputValue = queueInput.nodeValue
  queueInput = ""
  return inputValue
};

const generateListQueue = () => {
  for (let i = 0; i < queue; i++){
    queueUL.innerHTML += "<li class = 'inactive'></li>"
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.innerHTML = "underflow"
    warningBottomQueue.style.display = "block"
  } else if (type === 'overflow') {
    warningTopQueue.innerHTML = "overflow"
    warningTopQueue.style.display = "block"
  }
};

const addToQueue = () => {
  if (queue.canEnqueue()) {
    warningBottomQueue.style.display = "none"
    const li = document.querySelector('.list-queue inactive')
    li.classList = "active"
    const inputValue = clearQueueInput()
    li.innerHTML = inputValue
    queue.enqueue(inputValue)
  } else {
    generateWarningQueue("overflow")
  }
};

const removeFromQueue = () => {
  if (queue.isEmpty()) {
    generateWarningQueue("underflow")
  } else {
    warningTopQueue.style.display = "none"
    const li = document.querySelectorAll('.list.queue .active')
    li.classList = 'inactive'
    queue.dequeue()
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
