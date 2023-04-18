const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const newQueue = new Queue();

const clearQueueInput = () => {
  warningTopStack.style.display = 'none';
  warningBottomStack.style.display = 'none';
  stackList.innerHTML = '';
  let length = newStack.display().length;
  let size = newStack.MAX_SIZE - length;
  newStack.display().forEach(item => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    stackList.appendChild(li);
  });
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    li.innerHTML = '&nbsp;';
    stackList.appendChild(li);
  }
};
clearQueueInput();

const generateListQueue = () => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block';
    warningBottomStack.innerText = type;
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block';
    warningTopStack.innerText = type;
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    clearStackInput();
  } else if (type === 'overflow') {
    clearQueueInput('overflow');
  }
};

const addToQueue = () => {
  try {
    // ... your code goes here
  } catch (error) {
    // there was an overflow error, handle it
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
