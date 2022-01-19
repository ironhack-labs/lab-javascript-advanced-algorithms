const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');
const queueList = document.querySelectorAll('#queue-list li');

const queue = new Queue();

const clearQueueInput = () => {};

const generateListQueue = () => {};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    warningTopQueue.style.display = 'block';
    warningTopQueue.textContent = 'underflow';
  } else if (type === 'overflow') {
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.textContent = 'overflow';
  }
};

const addToQueue = () => {
  try {
    const que = queue.enqueue(1);
    queueList[que.length - 1].classList.replace('inactive', 'active');
    queueList[que.length - 1].textContent = queueInput.value;
  } catch (error) {
    // there was an overflow error, handle it
    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue();
    queueList[queue.queueControl.length].classList.replace(
      'active',
      'inactive'
    );
    queueList[queue.queueControl.length].textContent = '';
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningQueue('underflow');
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
