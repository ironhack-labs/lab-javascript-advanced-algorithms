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
  while(queueUL.firstChild){
    queueUL.removeChild(queueUL.lastChild);
  }
  queue.display();
};

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningTopQueue.innerHTML = "Cannot remove items from empty queue";
    warningTopQueue.style.display = "unset";
    setTimeout(() => {
      warningTopQueue.style.display = "none";
    }, 5000);
  } else if (type === 'overflow') {
    warningTopQueue.innerHTML = "Cannot add items to full queue";
    warningTopQueue.style.display = "unset";
    setTimeout(() => {
      warningTopQueue.style.display = "none";
    }, 5000);
  }
};

const addToQueue = () => {
  if(queueInput.value !== ""){
    if(queue.enqueue(queueInput.value) === "Queue Overflow"){
      generateWarningQueue("overflow");
    }
    generateListQueue();
    clearQueueInput();
  }
};

const removeFromQueue = () => {
  if(queue.dequeue() === "Queue Underflow"){
    generateWarningQueue("underflow");
  }
  generateListQueue();
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
