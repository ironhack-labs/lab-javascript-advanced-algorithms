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
  queueInput.value = '';
};

const generateListQueue = () => {

  warningBottomQueue.style.display = 'none';
  warningTopQueue.style.display = 'none';
  queueUL.innerHTML = '';

  //calculo longitud del array de elementos (display),
  //calculo el espacio que queda sin ocupar para dejarlo vacio

  let length = queue.display().length
  let size = queue.MAX_SIZE - length 

  for (let i = 0; i < length; i++) {
  let queueLI = document.createElement("li");
  queueLI.className = 'active';
  queueLI.innerText = queue.display()[i];
  queueUL.appendChild(queueLI);
  };
  for (let i = 0; i < size; i++) {
    let queueLI = document.createElement("li");
    queueLI.className = 'inactive'
    queueLI.innerHTML = '&nbsp;';
    queueUL.appendChild(queueLI)
};
}

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block'
    warningBottomQueue.innerHTML = "underflow"
    
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block'
    warningTopQueue.innerHTML = "overflow"
  }
};

const addToQueue = () => {
  try {
    queue.enqueue(queueInput.value);
    generateListQueue()
    clearQueueInput()
    
  } catch (error) {
    console.error("QUEUE_OVERFLOW")
    generateWarningQueue('overflow')
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue() 
    generateListQueue()
    
  } catch (error) {
    console.error("QUEUE_UNDERFLOW")
    generateWarningQueue("underflow")
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
