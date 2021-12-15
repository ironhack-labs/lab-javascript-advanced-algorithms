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
  const textBox = document.getElementById('queue-input');
  textBox.value = null;
};

const generateListQueue = () => {
  const queueList = document.getElementById('queue-list');
  queueList.innerHTML = '';
  for(i = 0; i < queue.queueControl.length; i++) {
    const newDiv = document.createElement('li');
    newDiv.className = 'block';
    const queueList = document.getElementById('queue-list');
    queueList.append(newDiv);
  } 
};

generateListQueue();

const clearWarningsQ = () => {
  const warnings = document.getElementById('queue-container').getElementsByClassName('alert');
  warnings[0].style.display = 'none';
  warnings[1].style.display = 'none';
};

const generateWarningQueue = (type) => {
  if (type.message === 'QUEUE_UNDERFLOW') {
      const warningCallout = document.getElementById('queue-container').getElementsByClassName('warning-bottom')[0];
      warningCallout.style.display = 'block';
      warningCallout.innerText = 'QUEUE UNDERFLOW';
      setTimeout(clearWarningsQ, 2000);
  } else if (type.message === 'QUEUE_OVERFLOW') {
    const warningCallout1 = document.getElementById('queue-container').getElementsByClassName('warning-top')[0];
      warningCallout1.style.display = 'block';
      warningCallout1.innerText = 'QUEUE OVERFLOW';
      setTimeout(clearWarningsQ, 2000);
   }
};

const addToQueue = () => {
  try {
    let newElementName = document.getElementById('queue-input').value;
    const newDiv = document.createElement('li');
    newDiv.className = 'block';
    newDiv.innerHTML = `<p>${newElementName}</p>`;
    queue.enqueue(newElementName);
    const queueList = document.getElementById('queue-list');
    queueList.append(newDiv);
    clearQueueInput();
  } catch (error) {
    generateWarningQueue(error);
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue();
    generateListQueue();
  } catch (error) {
    generateWarningQueue(error);
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
