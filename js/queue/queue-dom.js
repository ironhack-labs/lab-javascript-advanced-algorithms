const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = ""
};

const generateListQueue = () => {
  for (i = 0; i < queue.MAX_SIZE; i++) {
    let listElement = document.createElement('li')
    queueUL.appendChild(listElement)
    listElement.classList.toggle('inactive')
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    warningTopQueue.style.display = "block"
    warningTopQueue.innerHTML = "Stack Overflow"
  }
};

const addToQueue = () => {
  if (queue.canEnqueue()) {
    let allLi = queueUL.querySelectorAll('li')
    let index = queue.queueControl.length
    allLi[index].classList.toggle('inactive')
    allLi[index].classList.toggle('active')
    allLi[index].innerHTML = queueInput.value
    queue.enqueue(stackInput.value)
    clearStackInput()
  } else {
    generateWarningStack("overflow")
  }
};

const removeFromQueue = () => {
  if (queue.isEmpty()) {
    generateWarningStack("underflow")
  } else {
    let allLi = document.querySelectorAll('li')
    let index = queue.queueControl.length - 1
    allLi[index].classList.toggle('active')
    allLi[index].classList.toggle('inactive')
    allLi[index].innerHTML = ""
    queue.dequeue()
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
