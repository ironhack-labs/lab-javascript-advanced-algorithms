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
  // ... your code goes here
  queueInput.value="";
};

const generateListQueue = () => {
  // ... your code goes here
  queueUL.innerHTML="";
  // let fullList=queue.display();
  let newItem;

  for (let i=0;i<queue.MAX_SIZE;i++) {
     newItem = document.createElement("li");
    if (queue.queueControl[i]!==undefined) {
      newItem.innerText=queue.queueControl[i];
      newItem.setAttribute("class","active");
    } else {
      newItem.innerHTML="&nbsp;";
      newItem.setAttribute("class","inactive");
    }
    queueUL.appendChild(newItem);
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.innerHTML="underflow";
    warningBottomQueue.style.display = "block";


  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.innerHTML="overflow";
    warningTopQueue.style.display = "block";
  }
};

const addToQueue = () => {
  try {
    // ... your code goes here
    warningBottomQueue.style.display = "none";
    queue.enqueue(queueInput.value);
    clearQueueInput();
    generateListQueue();


  } catch (error) {
    // there was an overflow error, handle it
    generateWarningQueue("overflow");
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    warningTopQueue.style.display = "none";
    queue.dequeue();
    generateListQueue();


  } catch (error) {
    // there was an underflow error, handle it
    generateWarningQueue("underflow");
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
