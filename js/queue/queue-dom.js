const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();
let qcount = 0
const clearQueueInput = () => {
  queueInput.value = ""
};

const generateListQueue = () => {
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    let liElm = document.createElement('li')
    liElm.classList.add("inactive")
    queueUL.appendChild(liElm)
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = "flex"
    warningBottomQueue.innerHTML = "Stack Underflow"
  } else if (type === 'overflow') {
    warningTopQueue.style.display = "flex"
    warningTopQueue.innerHTML = "Stack Overflow"

  }
};

const addToQueue = () => {
  warningTopQueue.style.display = "none"
  if (queue.enqueue() === "Queue Overflow") {
    generateWarningQueue("overflow")
  } else {
    if (document.querySelectorAll("#queue-list .active")[qcount]) {

      document.querySelectorAll("#queue-list .inactive")[qcount + 1].classList.add("active")
      document.querySelectorAll("#queue-list .inactive")[qcount + 1].innerHTML = queueInput.value
    }



    clearQueueInput()
    qcount++
  }
};

const removeFromQueue = () => {
  warningBottomQueue.style.display = "none"
  if (queue.dequeue() === "Stack Underflow") {
    generateWarningStack("underflow")
  } else {
    document.querySelectorAll("#queue-list .inactive", ".active")[qcount - 1].classList.remove("active")
    document.querySelectorAll("#queue-list .inactive", ".active")[qcount - 1].innerHTML = ""
    clearQueueInput()
    qcount--
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
