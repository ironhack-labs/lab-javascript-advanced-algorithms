const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  const value = queueInput.value;
  queueInput.value = '';
  return value;
};

const generateListQueue = () => {
  for (let index = 0; index < queue.MAX_SIZE; index++) {
    queueUL.innerHTML += `<li class="inactive"></li>`;
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.innerHTML = 'underflow';
    warningBottomQueue.style.display = 'block';
  } else if (type === 'overflow') {
    warningTopQueue.innerHTML = 'overflow';
    warningTopQueue.style.display = 'block';
  }
};

const addToQueue = () => {
  if (queue.canEnqueue()) {
    queue.enqueue(clearQueueInput());
    warningBottomQueue.style.display = 'none';
    const items = document.querySelectorAll('#queue-list li');

    for (let index = 0; index < queue.queueControl.length; index++) {
      items[index].innerHTML = queue.queueControl[index];
      items[index].classList = 'active';
    }
  } else {
    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  if (queue.isEmpty()) {
    generateWarningQueue('underflow');
  } else {
    warningTopQueue.style.display = 'none';
    const items = document.querySelectorAll('#queue-list .active');
    const lastItem = items[items.length - 1];
    lastItem.classList = 'inactive';
    lastItem.innerHTML = '';
    queue.dequeue();
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
