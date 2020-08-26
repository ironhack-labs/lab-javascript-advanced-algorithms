const queueUL = document.querySelector('#queue-list');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value =''
};

const generateListQueue = () => {
  let htmlQueue = ''

 for (let i = 0; i < queue.MAX_SIZE; i++) {
   htmlQueue += '<li class="inactive"></li>'
 }

 queueUL.innerHTML = htmlQueue
 
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block'
    warningBottomQueue.classList.add('btn')
    warningBottomQueue.innerText = 'underflow'
    console.log('mandanga')
 // ... your code goes here
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block'
    warningTopQueue.classList.add('btn')
    warningTopQueue.innerText = 'overflow'
   // ... your code goes here
  }
};

const addToQueue = () => {
  if (queue.enqueue(queueInput.value) === 'Queue Overflow') {
    generateWarningQueue('overflow')
  } 
  else {
    let targetLiAdd = document.querySelector(`#queue-list .inactive`)
   
    targetLiAdd.innerText = queueInput.value
    
    targetLiAdd.classList.replace('inactive', 'active')
    
    clearQueueInput()

    warningBottomQueue.style.display = 'none'
  }  
};

const removeFromQueue = () => {
  if (queue.dequeue(queueInput.value) === 'Queue Underflow') {
    generateWarningQueue('underflow')
  }
  else {  
    queue.queueControl.shift()

    let targetLiRemove = document.querySelector(`#queue-list li`)
    
    targetLiRemove.parentNode.removeChild(targetLiRemove)
    // Aquí cogemos eliminamos el primer li .active 
    console.log('zasca')
    const newLi = document.createElement('li')
    newLi.setAttribute('class', 'inactive')
    queueUL.appendChild(newLi)
    //y añadimos uno nuevo inactive
    
    warningTopQueue.style.display = 'none'
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
