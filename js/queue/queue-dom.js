const queueInput = document.getElementById('queue-input')
const addQueue = document.getElementById('add-queue')
const dequeue = document.getElementById('take-queue')
const warningTopQueue = document.querySelector('#queue-container .warning-top')
const queueList = document.getElementById('queue-list')
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom')



const queueSize = 10
const newQueue = new QueueDataStructure(queueSize)



const clearQueueInput = () => {
  // ... your code goes here
queueInput.value = ""
};



const generateListQueue = () => {
  // ... your code goes here
  warningTopQueue.style.display = 'none'
  warningBottomQueue.style.display = 'none'
  queueList.innerHTML = '';

  let largo = newQueue.display().length
  let tamaño = queueSize - largo

  newQueue.display().forEach(item => {
    let li = document.createElement('li')
    li.className = 'active'
    li.innerText = item
    queueList.appendChild(li)
  });

  
  for (let i = 0; i < tamaño; i++) {
    let li = document.createElement('li')
    li.className = 'inactive'
    li.innerHTML = ''
    queueList.appendChild(li)
  }

};

generateListQueue();





const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.innerText = type
    warningBottomQueue.style.display = "block"
 


  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.innerText = type
    warningTopQueue.style.display = "block"

  }
};

const addToQueue = () => {
  // ... your code goes here
  if (newQueue.enqueue(queueInput.value) === 'Queue Overflow') {
    generateWarningQueue('overflow')
  } else {
    clearQueueInput()
    generateListQueue()
  } 
};

const removeFromQueue = () => {
  // ... your code goes here
  if (newQueue.dequeue() === 'Queue Underflow') {
    generateWarningQueue('underflow')
  } else {
    generateListQueue()
  }
};



addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
