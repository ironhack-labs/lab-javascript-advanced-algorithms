const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const listQueue = document.querySelectorAll('.list-queue li');
console.log(listQueue);
queue.MAX_SIZE = listQueue.length;

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = '';
};

// const generateListQueue = () => {
//   // ... your code goes here
// };

// generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};
let inputVal;
const addToQueue = () => {
  try {
    inputVal = queueInput.value;
    // ... your code goes here
    if (queue.queueControl.length === queue.MAX_SIZE) {
      warningTopQueue.style.display = 'block';
      warningTopQueue.textContent = 'Overflow';
    } else {
      inputVal !== ''
        ? (listQueue[queue.queueControl.length].textContent = inputVal)
        : '';

      clearQueueInput();

      listQueue[queue.queueControl.length].style.backgroundColor =
        'rgb(50, 130, 221)';
      warningBottomQueue.style.display = 'none';
      queue.queueControl.push(1);
    }
  } catch (error) {
    console.log(error);
    // there was an overflow error, handle it
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    if (!queue.queueControl.length) {
      warningBottomQueue.style.display = 'block';
      warningBottomQueue.textContent = 'Underflow';
    } else {
      listQueue[queue.queueControl.length - 1].style.backgroundColor = '';
      warningTopQueue.style.display = 'none';
      queue.queueControl.shift();
    }
    listQueue[queue.queueControl.length].textContent = '';
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
