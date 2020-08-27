const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
};

const generateListQueue = () => {
  for(let i=0;i<queue.MAX_SIZE;i++){
    let li= document.createElement("li")
    li.classList="inactive"
    queueUL.appendChild(li)
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToQueue = () => {
  queue.enqueue(queueInput.textContent)
  let lista = queueUL.querySelectorAll('#queue-list li') 
  console.log(lista)
  
  console.log(queue.queueControl)
  
  lista[queue.queueControl.length-1].classList.add('active')
  lista[queue.queueControl.length-1].classList.remove('inactive')
  lista[queue.queueControl.length-1].innerText = queueInput.value
};

const removeFromQueue = () => {
  let lista= queueUL.querySelectorAll('#queue-list li')
  queue.dequeue()
  console.log(lista)
  console.log(queue.queueControl.length)
  
  
  lista[queue.queueControl.length].classList.remove("active")
  lista[queue.queueControl.length].classList.add("inactive")
  lista[queue.queueControl.length].innerText=""
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
