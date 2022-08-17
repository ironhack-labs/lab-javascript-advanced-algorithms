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
  queueInput.value = ""
};

const generateListQueue = () => {
  warningTopStack.style.display = 'none';
  warningBottomStack.style.display = 'none';

  let length = queue.display().length;
  let size = queue.MAX_SIZE - length;

  const ul = document.querySelector('.list-queue')
  console.log(ul)
  queue.display().forEach(item => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    stackList.appendChild(li);
  });
  //const div = document.createElement('div')
  //div.setAttribute('class', 'stack-container')
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li')
    li.setAttribute('class', 'inactive')
    li.innerHTML = '&nbsp;';
    ul.appendChild(li)
  }
  //warningBottomQueue.appendChild(ul)
  //document.body.appendChild(div)
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToQueue = () => {

  // try {

  // } catch (error) {
  //   // there was an overflow error, handle it
  // }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);

