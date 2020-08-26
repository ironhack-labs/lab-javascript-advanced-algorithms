const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = ''
};

const generateListQueue = () => {
  // ... your code goes here
  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.classList.add('inactive')
    queueUL.appendChild(li)
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.style.display = 'block'
    warningBottomQueue.textContent = 'Queue Underflow'
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.style.display = 'block'
    warningTopQueue.textContent = 'Queue Overflow'
  }
};

const addToQueue = () => {
  // ... your code goes here
  if (queue.canEnqueue()) {

    const length = queue.queueControl.length
    const li = document.querySelectorAll('#queue-list li')[length]
    li.classList.add('active')

    li.textContent = queueInput.value
    queue.enqueue(li)
    warningBottomQueue.style.display = 'none'
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
    const length = queue.queueControl.length
    const li = document.querySelectorAll('#queue-list li')[length]
    
    li.classList.remove('active')
    li.textContent = ''
    warningTopQueue.style.display = 'none'
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
