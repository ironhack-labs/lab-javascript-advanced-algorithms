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
  queueInput.value = ''
};

const generateListQueue = () => {
  const inactiveLis  = queue.MAX_SIZE - queue.queueControl.length;

  // Empty the Queue
  while (queueUL.firstChild) {
    queueUL.removeChild(queueUL.lastChild);
  }

  // add active li's

  queue.queueControl.forEach(task => {
    let queueTask = document.createElement('li');
    queueTask.innerText = task;
    queueTask.classList.add('active')
    queueUL.appendChild(queueTask)
  })

  // Add inactive li's
  for (let i = 0; i < inactiveLis; i++) {
    let queueTask = document.createElement('li');
    queueTask.classList.add('inactive')
      
    queueUL.appendChild(queueTask)
  }
  

};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = "block"
    warningBottomQueue.innerText = "Underflow"

  } else if (type === 'overflow') {
    warningTopQueue.style.display = "block"
    warningTopQueue.innerText = "Overflow"
  }
};

const addToQueue = () => {
  try {
    warningBottomQueue.style.display = "none"

    queue.enqueue(queueInput.value)
    clearQueueInput()
    generateListQueue()

  } catch (error) {
    generateWarningQueue("overflow")
  }
};

const removeFromQueue = () => {
  warningTopQueue.style.display = "none"

  try {
    queue.dequeue(queueInput.value)
    generateListQueue()

  } catch (error) {
    generateWarningQueue("underflow")
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);

