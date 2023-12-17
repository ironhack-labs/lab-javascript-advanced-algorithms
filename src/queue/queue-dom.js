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
  queueInput.value = "";
};

const generateListQueue = () => {
  // ... your code goes here
  warningTopQueue.style.display = "none";
  warningBottomQueue.style.display = "none";
  // reset UL to be filled with new information
  queueUL.innerHTML = '';
  let queueLength = queue.display().length;
  let emptySlots = queue.MAX_SIZE - queueLength;
  queue.display().forEach((queueElement)=>{
    let li = document.createElement("li");
    li.className = "active";
    li.innerHTML = queueElement;
    queueUL.appendChild(li);
  });
  for (let i = 0; i < emptySlots; i++){
    let li = document.createElement("li");
    li.className = 'inactive';
    li.innerHTML = '&nbsp;';
    queueUL.appendChild(li);
  }
};
// call function
generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
    console.log ("underflow")
    warningBottomQueue.style.display = "block";
    warningBottomQueue.textContent = type;
  } else if (type === 'overflow') {
    // ... your code goes here
    console.log ("overflow")
    warningTopQueue.style.display = "block";
    warningTopQueue.textContent = type;

  }
};

const addToQueue = () => {
  try {
    // ... your code goes here
    queue.enqueue(queueInput.value);
    clearQueueInput();
    generateListQueue();
    //console.log (queueInput.value);
  } catch (error) {
    // there was an overflow error, handle it
    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    queue.dequeue();
    generateListQueue();
    //console.log ("dequeue");
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningQueue('underflow');
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);