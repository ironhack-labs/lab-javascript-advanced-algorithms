const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  (queueInput.value != '') ? return queueInput.value = '' : false
};

const generateListQueue = () => {
  for (let i = 0; i < 10; i++) {
  const newQueue = document.createElement('li')
  newQueue.classList.add('inactive')
  queueUL.appendChild(newQueue)
  }
};

generateListQueue();




const generateWarningQueue = type => {
  if (type === 'underflow') {
    return warningBottomQueue.style.display = 'block'
  } else if (type === 'overflow') {
    return warningTopQueue.style.display = 'block'
};




const addToQueue = () => {
  const actQueueElm = queueUL.querySelectorAll('.inactive')
  actQueueElm[0].classList.replace('inactive', 'active')
  const inputText = queueInput.value
  actQueueElm[0].innerText = inputText
  clearQueueInput()
};

const removeFromQueue = () => {
  const inactQueueElm = queueUL.querySelectorAll('.active')
  inactQueueElm[inactQueueElm.length - 1].classList.replace('active', 'inactive')
  inactQueueElm[inactQueueElm.length - 1].innerText = ''
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
