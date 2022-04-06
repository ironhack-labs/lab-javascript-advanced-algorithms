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
  queueInput.value ='';
};

const generateListQueue = () => {

  queueUL.innerHTML = '';
  let contentArr = queue.display();
  let currentSize = queue.MAX_SIZE - contentArr.length;

  contentArr.forEach(content =>{
    let li = createLi()
    li.innerHTML = content;
    li.classList.toggle('active'); 
  });

  for(let i = 0 ; i < currentSize ; i++ ){
    createLi() ;
  };

  function createLi(){
   let  li = document.createElement('li');
    li.classList.toggle('inactive') ;
    queueUL.appendChild(li);
    return li;
  }

  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerHTML = type;
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block';
    warningTopQueue.innerHTML = type;
  }
};

const addToQueue = () => {
  try {
    queue.enqueue(queueInput.value);
    clearQueueInput();
    generateListQueue(); 
  } catch (error) {
    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue();
    generateListQueue();
  } catch (error) {
    generateWarningQueue('underflow');
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
