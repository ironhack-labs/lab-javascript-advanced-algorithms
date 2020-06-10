const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const sizeStructure = 10
const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput = ''
};

const generateListQueue = () => {
  // ... your code goes here
    let length = queue.display().length
    let size = sizeStructure - length
    queueUL.innerHTML = ''
    queue.display().forEach(item => {
      let li = document.createElement('li')
      li.className = 'active'
      queueUL.appendChild(li)
    });
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li')
    li.className = 'inactive'
    li.innerHTML = '&nbsp;'
    queueUL.appendChild(li)
  }

};
/* const generateListQueue = () => {
  for (i = 0; i < queue.MAX_SIZE; i++){
    let list = document.createElement('li')
    queueUL.appendChild(list)
    list.classList.toggle('inactive')
  }
}; */

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.innerHTML = 'underflow'
    warningBottomQueue.style.display = 'block'
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.innerHTML = 'overflow'
    warningTopQueue.style.display = 'block'
  }
};

const addToQueue = () => {
  // ... your code goes here
  if (queue.canEnqueue()) {
    queue.enqueue(queueInput.value)
    generateListQueue()
    clearQueueInput()
  } else {
    generateWarningQueue('overflow')
  }
};

const removeFromQueue = () => {
  // ... your code goes here
  if (queue.isEmpty()) {
    generateWarningQueue('underflow')
  } else {
    queue.dequeue()
    generateListQueue()
    clearQueueInput()
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
