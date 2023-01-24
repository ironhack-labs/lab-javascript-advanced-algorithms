const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = ''
};

const generateListQueue = () => {
  // ... your code goes here
  warningTopQueue.style.display = 'none'
  warningBottomQueue.style.display = 'none'
  queueUL.innerHTML = ''
  let length = queue.display().length
  let size = queue.MAX_SIZE - length
  queue.display().forEach(item => {
    let li = document.createElement('li')
    li.className = 'active'
    li.innerText = item
    queueUL.appendChild(li)
  })
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    li.innerHTML = '&nbsp;';
    queueUL.appendChild(li);
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.style.display = 'block'
    warningBottomQueue.innerText = type
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.style.display = 'block'
    warningTopQueue.innerText = type
  }
};

const addToQueue = () => {
  try {
    // ... your code goes here
    queue.enqueue(queueInput.value)
    clearQueueInput()
    generateListQueue()
  } catch (error) {
    // there was an overflow error, handle it
    generateWarningQueue('overflow')

  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    queue.dequeue()
    generateListQueue()
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningQueue('underflow')
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
