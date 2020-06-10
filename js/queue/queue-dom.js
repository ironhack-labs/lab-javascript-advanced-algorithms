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
  for (i = 0; i < queue.MAX_SIZE; i++){
    let list = document.createElement('li')
    queueUL.appendChild(list)
    list.classList.toggle('inactive')
  }
};
  
generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block'
    warningBottomQueue.innerHTML = 'Queue Underflow'
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block'
    warningTopQueue.innerHTML = 'Queue Overflow'
  }
};

const addToQueue = () => {
  if(queue.canEnqueue()){
    let queueLi = document.querySelectorAll('#queue-list li')
    let index = queue.queueControl.length
    queueLi[index].classList.toggle('inactive')
    queueLi[index].classList.toggle('active')
    queueLi[index].innerHTML = queueInput.value
    queue.enqueue(queueInput.value)
  } else {
    generateWarningQueue('overflow')
  }
};

const removeFromQueue = () => {
  if (queue.isEmpty()){
    generateWarningQueue('underflow')
  } else {
    let queueLi = document.querySelectorAll('#queue-list li')
    let index = queue.queueControl.length -1
    queueLi[index].classList.toggle('active')
    queueLi[index].classList.toggle('inactive')
    queueLi[index].innerHTML = ''
    queue.dequeue()
  }

  
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
