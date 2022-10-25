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
  queueInput.value = '';
};

const generateListQueue = () => {
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
  queueUL.innerHTML = '';

  let listLength = newQueue.display().length;
  let allowedSize = newQueue.MAX_SIZE - listLength;

  // add list items to the beginning of the queeu - BLUE ELEMENTS

  newQueue.display().forEach((item) => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;

    queueUL.appendChild(li);
  });
  // fill the queue list with inactive elements if necessary - GREY ELEMENTS
  for (let i = 0; i < allowedSize; i++) {
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
  try {
    if (newQueue.enqueue(queueInput.value) === 'Queue Overflow') {
      generateWarningQueue('overflow');
    } else {
      clearQueueInput();
      generateListQueue();
    }
  } catch (error) {
    throw new Error(error);
  }
};

const removeFromQueue = () => {
  try {
    if (newQueue.dequeue() === 'Queue Underflow') {
      generateWarningQueue('underflow');
    } else {
      clearQueueInput();
      generateListQueue();
    }
  } catch (error) {
    throw new Error(error);
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
