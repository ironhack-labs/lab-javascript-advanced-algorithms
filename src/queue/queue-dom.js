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
  //prueba
  queueInput.value = "";
};

const generateListQueue = () => {
  // ... your code goes here
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
  queuekList.innerHTML = '';
  let length = newQueue.display().length;
  let size = newQueue.MAX_SIZE - length;
  newQueue.display().forEach(item => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    queueList.appendChild(li);
  });
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    li.innerHTML = '&nbsp;';
    queueList.appendChild(li);
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
  try {
    if (newQueue.push(queueInput.value) === 'Stack Overflow') {
      generateWarningStack('overflow')
      // ... your code goes here
    } catch (error) {
      // there was an overflow error, handle it
      clearQueueInput();
      renderListQueue();
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
