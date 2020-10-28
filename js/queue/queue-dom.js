const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {

  !queueInput.length ? queueInput.value = '' : false

};

const generateListQueue = () => {


  for (let i = 0; i < 10; i++){
    const newQueue = document.createElement('li')
    newQueue.classList.add('inactive')
    queueUL.appendChild(newQueue)
  }

};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToQueue = () => {

  const adToQueue = queueUL.querySelectorAll('.inactive')
  adToQueue[0].classList.replace('inactive', 'active')
  const getText = queueInput.value
  adToQueue[0].innerText = getText

  clearQueueInput()

};

const removeFromQueue = () => {

  const removeToQueue = queueUL.querySelectorAll('.active')
  removeToQueue[removeToQueue.length - 1].classList.replace('active', 'inactive')
  const remText = queueInput.value
  removeToQueue[removeToQueue.length - 1].innerText = ''

};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);