const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
};

const generateListQueue = () => {
  // ... your code goes here
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block'
    warningBottomQueue.innerHTML = 'underflow'
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block'
    warningTopQueue.innerHTML = 'overflow'

  }
};

const addToQueue = () => {
// console.log("We are trying to add a new Queue")
if (!queue.canEnqueue()){
  generateWarningQueue('overflow')
}
  queue.enqueue()
  // console.log(queue.queueControl.length)
  const lastInactiveLi = document.querySelector(".inactiveq")
  // console.log(lastInactiveLi)
  lastInactiveLi.classList.add('activeq')
  lastInactiveLi.classList.remove('inactiveq')
  lastInactiveLi.innerHTML = queueInput.value
};

const removeFromQueue = () => {
  if (queue.isEmpty()){
  generateWarningQueue('underflow')
}
  queue.dequeue()
  const lastActiveLi = document.querySelector(".activeq")
  // console.log(lastInactiveLi)
  lastActiveLi.classList.add('inactiveq')
  lastActiveLi.classList.remove('activeq')
  lastActiveLi.innerHTML = ''
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
