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
  while (queueUL.firstChild) {
    queueUL.removeChild(queueUL.firstChild);
  }
  
  if(!queue.isEmpty()){
    queueUL.innerHTML = queue.display();
    generateWarningQueue("")
    
    if (!queue.canEnqueue()) 
    generateWarningQueue("overflow")
  }
  else  
  generateWarningQueue("underflow")
};


const generateWarningQueue = type => {
  if (type === 'underflow') {
    dequeue.disabled = true;
    dequeue.innerHTML = "Cant Remove More"
    
  } else if (type === 'overflow') {
    
    addQueue.disabled = true;
    addQueue.innerHTML = "Cant Add More"
  }
  else{
    addQueue.disabled = false;
    addQueue.innerHTML = "Add to queue"
    dequeue.disabled = false;
    dequeue.innerHTML = "Remove from queue"
  }
};

const addToQueue = () => {
  if(queueInput.value.trim() != "")
  {
    queue.enqueue(queueInput.value)
    clearQueueInput()
    generateListQueue();
  }
};

const removeFromQueue = () => {
  queue.dequeue()
  generateListQueue();
};

generateListQueue();
addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
