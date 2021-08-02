const queueList = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

warningBottomQueue.innerHTML = 'QUEUE UNDERFLOW';
warningTopQueue.innerHTML = 'QUEUE OVERFLOW';

const queue = new Queue();

const clearQueueInput = () => {
  queueInput.vale = '';
};

const generateListQueue = () => {
  queueList.innerHTML = '';
  queue.display().forEach((element) => {
    queueList.innerHTML += `
      <li style='background-color: lightgrey; margin-bottom: 2px;'>${element}</li>
    `;
  });
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    warningBottomQueue.style = 'display:block';
  } else if (type === 'overflow') {
    warningTopQueue.style = 'display:block';
  }
};

const addToQueue = () => {
  try {
    queue.enqueue(queueInput.value);
  } catch (error) {
    generateWarningQueue('overflow');
  }
  warningBottomQueue.style = 'display:none';
  clearQueueInput();
  generateListQueue();
};

const removeFromQueue = () => {
  try {
    queue.dequeue();
  } catch (error) {
    generateWarningQueue('underflow');
  }
  warningTopQueue.style = 'display:none';
  clearQueueInput();
  generateListQueue();
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
