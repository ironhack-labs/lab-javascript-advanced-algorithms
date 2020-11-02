const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = '';
};

const generateListQueue = () => {
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    let newElem = document.createElement('li');
    newElem.setAttribute('class', 'inactive');
    queueUL.appendChild(newElem);
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerHTML = 'underflow';
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block';
    warningTopQueue.innerHTML = 'overflow';
  }
};

const addToQueue = () => {
  let elemPos = 0;

  if (!queue.canEnqueue()) {
    generateWarningQueue('overflow');
  } else {
    warningTopQueue.style.display = 'none';
  }
  
  if (queueInput.value === null || queueInput.value === undefined) {
    clearQueueInput();
  }

  queue.enqueue(queueInput.value);
  //The position on which the element should be
  elemPos = queue.queueControl.length - 1;

  queueUL.children[elemPos].setAttribute('class','active');
  queueUL.children[elemPos].innerHTML = queueInput.value;

  clearQueueInput();

  //underflow warning must not show unless necessary.
  warningBottomQueue.style.display = 'none';
};

const removeFromQueue = () => {
  let elemPos = 0;

  //overflow warning must not show unless necessary.
  warningTopQueue.style.display = 'none';

  if (queue.isEmpty()) {
    generateWarningQueue('underflow');
  } else {
    warningBottomQueue.style.display = 'none';
  }


  queue.dequeue();
  elemPos = queue.queueControl.length;

  queueUL.children[elemPos].innerHTML = '&nbsp;';
  queueUL.children[elemPos].setAttribute('class','inactive');

};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
