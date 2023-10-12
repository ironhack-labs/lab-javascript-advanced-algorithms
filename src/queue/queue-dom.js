const queueUL = document.querySelector('#queue-list');
const queueInput = document.querySelector('#queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('#add-queue');
const takeQueue = document.querySelector('#take-queue');

const newQueue = new Queue();

const clearQueueInput = () => {
  queueInput.value = '';
};

const generateListQueue = () => {
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
  queueUL.innerHTML = '';
  let length = newQueue.display().length;
  let size = newQueue.MAX_SIZE - length;
  newQueue.display().forEach(item => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    queueUL.appendChild(li);
  });
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
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerText = type;
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block';
    warningTopQueue.innerText = type;
  }
};

const addToQueue = () => {
  if (newQueue.enqueue(queueInput.value) === 'Queue Overflow') {
    generateWarningQueue('overflow');
  } else {
    clearQueueInput();
    generateListQueue();
  }
};

const removeFromQueue = () => {
  if (newQueue.dequeue() === 'Queue Underflow') {
    generateWarningQueue('underflow');
  } else {
    generateListQueue();
  }
};


addQueue.addEventListener('click', addToQueue);
takeQueue.addEventListener('click', removeFromQueue);
