const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {

  queueInput.value = "";
};

const generateListQueue = () => {
  // ... 
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.innerHTML = 'underflow';
    warningBottomQueue.style.display = 'block';
  } else if (type === 'overflow') {
    warningTopQueue.innerHTML = 'overflow';
    warningTopQueue.style.display = 'block';
  }
};

const addToQueue = () => {
  warningBottomQueue.style.display = 'none';
  const display = queueInput.value;
  if (!queue.canEnqueue()) {
    generateWarningQueue('overflow');
  } else {
    queue.enqueue(display);
    queueUL.classList.add('active');
    // const eachLi = document.querySelector('.inactive');
    eachLi = queueUL.children;
    eachLi.classList.add('active');
    eachLi.classList.remove('inactive');
    eachLi.innerHTML = queueInput.value;
    clearqueueInput();
  }
};

const removeFromQueue = () => {
  warningTopStack.style.display = "none"

  if (queue.isEmpty()) {
    generateWarningQueue('underflow');
  } else {
    queue.pop();
    const eachOn = document.querySelectorAll(".active");
    const lastOn = eachOn[eachOn.length - 1];
    lastOn.innerHTML = "";
    lastOn.classList.add('inactive');
    lastOn.classList.remove('active');
    clearqueueInput();
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
