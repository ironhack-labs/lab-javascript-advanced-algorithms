const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');
const queue = new QueueDataStructure();
const sizeQ = queue.MAX_SIZE
const actualQueue = sizeQ - queue.queueControl.length
const clearQueueInput = () => {
  queueInput.value = ""
};
const generateListQueue = () => {
  for (let i = 0; i < actualQueue; i++) {
    let newLi = document.createElement('li')
    newLi.classList.add('inactive')
    newLi.innerHTML = '&nbsp;'
    queueUL.appendChild(newLi)
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
  if (queue.canEnqueue()) {
    queue.enqueue(queueInput.value)
    clearQueueInput()
    let getLi = queueUL.querySelectorAll('li')
    for (let i = 0; i < queue.queueControl.length; i++) {
      getLi[i].innerHTML = queue.queueControl[i]
      getLi[i].classList.remove('inactive')
      getLi[i].classList.add('active')
      console.log(newStack.queueControl)
    }
  } else {
    alert('Maaaaaal')
  }
};
const removeFromQueue = () => {
  if (!queue.isEmpty()) {
    queue.dequeue()
    let getLi = queueUL.querySelectorAll('li')
    let queueL = getLi[queue.queueControl.length]
    console.log(queueL)
    queueL.classList.remove('active')
    queueL.classList.add('inactive')
    queueL.innerHTML = '&nbsp;'
    console.log(newStack.queueControl)
  }
};
addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);