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
    warningBottomQueue.style.display = "block";
    warningBottomQueue.innerHTML = type;
    // ... your code goes here
  } else if (type === 'overflow') {
    warningTopQueue.style.display = "block";
    warningTopQueue.innerHTML = type;
    // ... your code goes here
  }
};

const addToQueue = () => {
  const elementToChange = queueUL.getElementsByClassName('inactive')[0]
if (queue.canEnqueue()) {
    warningTopQueue.style.display = "none"
    warningBottomQueue.style.display = "none"
    queue.enqueue(queueInput.value);
    elementToChange.innerHTML = queueInput.value;
    elementToChange.setAttribute('class','active');
    queueInput.value = "";
  } else {generateWarningQueue('overflow')}
};

const removeFromQueue = () => {
  const elementToChange = queueUL.getElementsByClassName('active')[queueUL.getElementsByClassName("active").length-1];
  if (!queue.isEmpty()) {
    warningTopQueue.style.display = "none";
    warningBottomQueue.style.display = "none"
    queue.dequeue();
    elementToChange.innerHTML = "";
    elementToChange.setAttribute('class','inactive')
  } else {generateWarningQueue('underflow')}
  // ... your code goes here
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
