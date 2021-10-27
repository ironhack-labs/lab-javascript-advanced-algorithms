const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  queueInput.value = ''
};

const generateListQueue = () => {
  queueUL.innerHTML += `
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>
  <li class="inactive">&nbsp;</li>`
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToQueue = () => {
  try {
  const arrayTemp = queue.enqueue(queueInput.value)
  for(let i = 0;i<arrayTemp.length;i++){
    queueUL.children[i].innerHTML = arrayTemp[i]
    queueUL.children[i].classList.replace('inactive', 'active')
  }
  clearQueueInput()
  } catch (error) {
    // there was an overflow error, handle it
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue()
    const arrayTemp = queue.queueControl

    for(let i = 0;i<arrayTemp.length;i++){
      queueUL.children[i].innerHTML = arrayTemp[i]
    }

    for(let i = arrayTemp.length; i<queue.MAX_SIZE;i++){
      queueUL.children[i].innerHTML = ''
      queueUL.children[i].classList.replace('active', 'inactive')
    }
  } catch (error) {
    generateWarningQueue(error)// there was an underflow error, handle it
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
