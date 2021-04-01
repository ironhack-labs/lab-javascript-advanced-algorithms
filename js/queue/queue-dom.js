const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = "";
};

const generateListQueue = () => {
  queueUL.innerHTML = '';
  let length = queue.display().length;
  let size = queue.MAX_SIZE - length;
  queue.display().forEach(item => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    queueUL.appendChild(li);
  });
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    li.innerHTML = '';
    queueUL.appendChild(li);
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = "block";
    warningBottomQueue.innerHTML = type;
  } else if (type === 'overflow') {
    warningTopQueue.style.display = "block";
    warningTopQueue.innerHTML = type;
  } else {
    warningTopQueue.style.display = "none";
    warningBottomQueue.style.display = "none";
  }
};

const addToQueue = () => {
  if (queue.enqueue(queueInput.value) === `Queue Overflow`) {
    generateWarningQueue("overflow");
  } else {
    generateWarningQueue();
    generateListQueue();
  }
  clearQueueInput();
};

const removeFromQueue = () => {
  if (queue.dequeue() === 'Queue Underflow') {
    generateWarningQueue('underflow');
  } else {
    generateWarningQueue();
    generateListQueue();
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
