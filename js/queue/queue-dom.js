const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

// CLEAR THE INPUT FIELD
const clearQueueInput = () => {
  queueInput.value = ''
};

// CREATE QUEUE LIST
const generateListQueue = () => {
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    const newListQueue = document.createElement('li')
    newListQueue.setAttribute('class', 'inactive')
    queueUL.appendChild(newListQueue)
    }
};

// GENERATE WARNINGS
const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block'   // To display the container
    warningBottomQueue.innerText = type
    
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block'
    warningTopQueue.innerText = type
  }
};

// ADD ITEMS 
const addToQueue = () => {
  console.log(queue.queueControl);
  warningBottomQueue.style.display = 'none'
  warningTopQueue.style.display = 'none'

  // Check if add is possible, and if it's not, generate warning
 if (queue.enqueue(queueInput.value) === 'Queue Overflow') {

  generateWarningQueue('overflow')

 } else {
  console.log(queue.queueControl);

  const listItems = document.querySelectorAll('.list-queue li')

  // Loop to recreate the previous items and add the new one
  for (let i = 0; i <= queue.queueControl.length-1 ; i++) {
    listItems[i].classList.remove('inactive')
    listItems[i].classList.add('active')
    listItems[i].innerText = queue.queueControl[i]  
    }

 }

 // Call the clear function 
 clearQueueInput()
}

// REMOVE ITEMS
const removeFromQueue = () => {
  warningBottomQueue.style.display = 'none'
  warningTopQueue.style.display = 'none'

  if (queue.dequeue() === 'Queue Underflow') {
    generateWarningQueue('underflow')

  } else {

  // Select the last item and change the class and content
  const listItems = document.querySelectorAll('.list-queue li')
  const indexLastItem = queue.queueControl.length 

  listItems[indexLastItem].classList.remove('active')
  listItems[indexLastItem].classList.add('inactive')
  listItems[indexLastItem].innerText = ''
  
 }
};

// Execution
generateListQueue();
addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
