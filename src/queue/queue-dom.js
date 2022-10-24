
const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const newQueue = new Queue();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = '';
};


const generateListQueue = () => {
  // ... your code goes here
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
  queueUL.innerHTML = '';
  let length = newQueue.display().length;
  let size = newQueue.MAX_SIZE - length;
  newQueue.display().forEach(item => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    queueUL.appendChild(li);
  });
  for(let i = 0; i < size; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    li.innerHTML = '&nbsp;';
    queueUL.appendChild(li);
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerText = type;
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.style.display = "block";
    warningTopQueue.innerText = type;
  }
};



const addToQueue = () => {
	try {
		newQueue.enqueue(queueInput.value);
	} catch (error) {
		return generateWarningQueue("overflow");
	}
	clearQueueInput();
	generateListQueue();
}

const removeFromQueue = () => {
  try {
     newQueue.dequeue();
  } catch (error) {  
    return generateWarningQueue('underflow');
  }
  generateListQueue()
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
