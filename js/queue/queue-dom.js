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
  } else {
    warningTopQueue.style.display = 'none'
    warningTopQueue.style.display = 'none'
  }
};

const addToQueue = () => {
// console.log("We are trying to add a new Queue")
if (!queue.canEnqueue()){
  generateWarningQueue('overflow')
} else {
  queue.enqueue(queueInput.value)
  // console.log(queue.queueControl)
  const liEntry = document.createElement("li")
  liEntry.classList.add('active')
  liEntry.innerHTML = queueInput.value
  // console.log(liEntry)
  const allQueueLi = queueUL.getElementsByTagName("li")
  // console.log(allQueueLi)
  const lastLiQueue = allQueueLi[0]
  // console.log(lastLiQueue)
  lastLiQueue.remove()
  queueUL.appendChild(liEntry)
  // console.log(queueUL)
  // console.log(allQueueLi)
}
  clearQueueInput()
};

const removeFromQueue = () => {
  if (queue.isEmpty()){
  generateWarningQueue('underflow')
}
  queue.dequeue()
  const firstActiveLi = queueUL.querySelector(".active")
  console.log(firstActiveLi)
  firstActiveLi.classList.add('inactive')
  firstActiveLi.classList.remove('active')
  firstActiveLi.innerHTML = ''
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
