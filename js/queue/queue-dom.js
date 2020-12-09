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
  for (i=0; i<queue.MAX_SIZE; i++) {
    queueUL.innerHTML += `<li class="inactive">&nbsp;</li>`
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.innerHTML = `underflow`
    warningBottomQueue.style.display = 'block';
  } else if (type === 'overflow') {
    warningTopQueue.innerHTML = `overflow`
    warningTopQueue.style.display = 'block';
  }
};

const addToQueue = () => {
  if (queue.canEnqueue()) {
    queueUL.querySelector('.inactive').innerHTML = queueInput.value;
    queueUL.querySelector('.inactive').classList.add("active");
    queueUL.querySelector('.inactive').classList.remove("inactive");
    clearQueueInput();
    queue.enqueue(queueInput.value);
    if (!queue.isEmpty()) {
      warningBottomQueue.style.display = 'none';
    }
  } else {
    generateWarningQueue('overflow')
  }
  
};

const removeFromQueue = () => {
  if (queue.isEmpty()) {
    generateWarningQueue('underflow')
  } else {
    queueUL.querySelectorAll('.active')[(queueUL.querySelectorAll('.active')).length-1].innerHTML = '';
    queueUL.querySelectorAll('.active')[(queueUL.querySelectorAll('.active')).length-1].classList.add("inactive");
    queueUL.querySelectorAll('.active')[(queueUL.querySelectorAll('.active')).length-1].classList.remove("active");
    queue.dequeue();
    if (queue.canEnqueue()) {
      warningTopQueue.style.display = 'none';
    }
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
