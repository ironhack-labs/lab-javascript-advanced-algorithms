const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = ''
};

const generateListQueue = () => {

  let html = '';
  for (let i = 0; i < queue.queueControl.length; i++) {
    html += `<li class="active"></li>`;
  }
  //create inactive stack element
  for (let i = 0; i < queue.MAX_SIZE - queue.queueControl.length; i++) {
    html += `<li class="inactive"></li>`;
  }

  // Add all the li to the HTML in the ul list
  queueUL.innerHTML = html;
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {

    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerText = 'Underflow';


  } else if (type === 'overflow') {

    warningTopQueue.style.display = 'block';
    warningTopQueue.innerText = 'Underflow';

  }
};

const addToQueue = () => {
  if (queue.enqueue(queueInput.value) === 'Queue Overflow') {

    generateWarningQueue('overflow');

  } else {
    clearQueueInput();
    generateListQueue();
  }
};


const removeFromQueue = () => {
  if (queue.dequeue() === 'Queue Underflow') {
    generateWarningQueue('underflow');
  } else {
    clearQueueInput();
    generateListQueue();
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
