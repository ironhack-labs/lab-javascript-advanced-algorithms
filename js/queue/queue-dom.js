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
  queueInput.value = '';
};

const generateListQueue = () => {
  clearQueueInput();
  queueUL.innerHTML = '';
  for (let i = 0; i < queue.MAX_SIZE - queue.display().length; i++) {
    const queueElement = document.createElement('li');
    queueElement.classList.add('inactive');
    queueUL.prepend(queueElement);
  }
  queue.display().forEach((el) => {
    const queueElement = document.createElement('li');
    queueElement.classList.add('active');
    queueElement.textContent = el;
    queueUL.prepend(queueElement);
  });
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'QUEUE_OVERFLOW') {
    warningTopQueue.textContent = 'QUEUE OVERFLOW';
    warningTopQueue.style.display = 'block';
  } else if (type === 'QUEUE_UNDERFLOW') {
    warningBottomQueue.textContent = 'QUEUE UNDERFLOW';
    warningBottomQueue.style.display = 'block';
  }
};

const addToQueue = () => {
  try {
    warningBottomQueue.style.display = 'none';
    queue.enqueue(queueInput.value);
    generateListQueue();
  } catch (error) {
    generateWarningQueue(error.message);
  }
};

const removeFromQueue = () => {
  try {
    warningTopQueue.style.display = 'none';
    queue.dequeue();
    generateListQueue();
  } catch (error) {
    generateWarningQueue(error.message);
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
