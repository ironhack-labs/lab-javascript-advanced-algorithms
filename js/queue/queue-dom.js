const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const qLis = document.querySelectorAll('.list-queue > li')
const queue = new Queue();

const clearQueueInput = () => {
  queueInput.value = ''
};

const generateListQueue = () => {
  setQueueTheActiveElements(queue)
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    console.log('STACK_UNDERFLOW')
  } else if (type === 'overflow') {
    console.log('STACK_OVERFLOW')
  }
};

const addToQueue = () => {
  try {
    const newQElement = queueInput.value;    
    console.log(newQElement)    
    queue.enqueue(newQElement)    
    console.log(newQElement)    
    console.log(queue.display())
    generateListQueue(queue)
    clearQueueInput()
  } catch (error) {
    alert(error)
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue()
    generateListQueue(queue)
  } catch (error) {
    alert(error)
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);


function setQueueTheActiveElements(queue){
  qLis.forEach( el => {
    el.className='inactive'
    el.textContent = ''
  })
  for(let i = 0; i < queue.getSize(); i++ ){
    qLis[i].className='active'
    qLis[i].textContent=queue.queueControl[i];
  }
}

