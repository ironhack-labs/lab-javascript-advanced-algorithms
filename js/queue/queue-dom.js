const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = ""
};

const generateListQueue = () => {
  // Create the queue with the max size of the stack
  for (let i = 1; i <= queue.MAX_SIZE; i++) {
    let li = document.createElement("li")
    li.className = "inactive"
    queueUL.appendChild(li)
  }

};

generateListQueue();

const generateWarningQueue = type => {
  //Generate the warnings when an underflow or overflow is generate
  if (type === 'underflow') {
    warningBottomQueue.style.display = "block"
    warningBottomQueue.innerText = "underflow"
  } else if (type === 'overflow') {
    warningTopQueue.style.display = "block"
    warningTopQueue.innerText = "overflow"
  }
};

const addToQueue = () => {
  if (queue.canEnqueue()) {
    // Add a new queue
    let input = queueInput.value
    queue.enqueue(input)
    let liList = document.querySelectorAll("#queue-list li")
    // Select all the li elements and change the class only in the queue added
    for (let i = 0; i <= queue.display() - 1 ; i++) {
      liList[i].classList.add("active")
      liList[i].classList.remove("inactive")
    }
    liList[queue.display() -1].innerText = input
    clearQueueInput()
  } else {
    // When an overflow ocurrs, show the message
    return generateWarningQueue(queue.enqueue(queue.display()))
  }
  // To clear the message of overflow when the queue can be enqueu again
  if (!queue.isEmpty()) {
    warningBottomQueue.style.display = "none"
  }
};

const removeFromQueue = () => {
  if (!queue.isEmpty()) {
    // Remove the last queue element
    queue.dequeue()
    if (queue.canEnqueue()) {
      // Remove the last queue element if the li's are listed
      let liList = document.querySelectorAll("#queue-list li")
      liList[queue.display()].classList.remove("active")
      liList[queue.display()].classList.add("inactive")
      liList[queue.display()].innerText = ""
      clearQueueInput()
    }
  } else {
    // When an underflow ocurrs, show the message
    return generateWarningQueue(queue.dequeue())
  }
  // To clear the message of underflow when the stack is not empty
  if (queue.canEnqueue()) {
    warningTopQueue.style.display = "none"
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
