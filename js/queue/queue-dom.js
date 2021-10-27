

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
  document.querySelector('.queue-input')};

const generateListQueue = () => {
  const queueUL = document.querySelector('.list-queue')
  queueUL.innerHTML = ' <li class="inactive">&nbsp;</li>  <li class="inactive">&nbsp;</li>  <li class="inactive">&nbsp;</li>  <li class="inactive">&nbsp;</li>  <li class="inactive">&nbsp;</li>  <li class="inactive">&nbsp;</li>  <li class="inactive">&nbsp;</li>  <li class="inactive">&nbsp;</li>  <li class="inactive">&nbsp;</li>  <li class="inactive">&nbsp;</li>'
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToQueue = () => {
  try {
    const addQueue = document.querySelector('.btn-add-queue')
  } catch (error) {
    const warningTopQueue = document.querySelector('#queue-container .warning-top');
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
  } catch (error) {
    const warningBottomQueue = document.querySelector(
      '#queue-container .warning-bottom'
    );
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
