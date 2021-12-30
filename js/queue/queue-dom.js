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
};

const generateListQueue = () => {
  // ... your code goes here
  for(let i=0;i<queue.MAX_SIZE;i++){
    queueUL.innerHTML+='<li class="inactive"></li>';
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.innerHTML="underflow";
    warningBottomQueue.style.display="block";
    setTimeout(() => warningBottomQueue.style.display="none" ,3000);
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.innerHTML="overflow";
    warningTopQueue.style.display="block";
    setTimeout(() => warningTopQueue.style.display="none" ,3000);
  }
};

const addToQueue = () => {
  try {
    // ... your code goes here
    if(queueInput.value){
      queue.enqueue(queueInput.value);
      const elementsInactive = document.querySelectorAll("#queue-list .inactive");
      elementsInactive[elementsInactive.length-1].remove();
      const parent = document.getElementById("queue-list");
      parent.innerHTML=`<li class="active">${queueInput.value}</li>`+parent.innerHTML;
      queueInput.value="";
    }  
  } catch (error) {
    // there was an overflow error, handle it
    generateWarningQueue("overflow");
  }
};

const removeFromQueue = () => {
  try {
    // ... your code goes here
    queue.dequeue();
    const elementsActive = document.querySelectorAll("#queue-list .active");
    const lastActive = elementsActive[elementsActive.length-1];
    lastActive.className="inactive";
    lastActive.innerHTML="";
  } catch (error) {
    // there was an underflow error, handle it
    generateWarningQueue("underflow");
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
