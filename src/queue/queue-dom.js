const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const qContainer = document.getElementById('col-sm-7');
const warningTopQueue = document.querySelector('.queue-top-alert');
const warningBottomQueue = document.querySelector('.queue-bottom-alert');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');


const queue = new Queue();

const clearQueueInput = () => {
  queueInput.value = '';
};

const generateListQueue = () => {
  
  queueUL.innerHTML = '';
  let length = queue.display().length;
  let size = queue.MAX_SIZE - length;
  queue.display().forEach(item => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    queueUL.appendChild(li);
  });
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    li.innerHTML = '&nbsp;';
    queueUL.appendChild(li);
  }
};

generateListQueue();

function generateWarningQueue(type){
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerText = type;
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block';
    warningTopQueue.innerText = type;
  }
};

const addToQueue = () => {
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
  try {
      queue.enqueue(queueInput.value)
      clearQueueInput();
      generateListQueue();
   
  } catch (error) {
    console.log(`there was an overflow error, handle it`)
    generateWarningQueue('overflow');
  }
 
  
}

const removeFromQueue = () => {
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
    try {
      queue.dequeue()
      generateListQueue();
    
    }
    catch (error) {
      console.log(`There was an underflow error, handle it`)
      generateWarningQueue('underflow');
    }
  }


addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
