const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

let counterQueue = 0;
let typeQueue = "";

const clearQueueInput = () => {
};

const generateListQueue = () => {
};

generateListQueue();

const generateWarningQueue = typeQueue => {
  if (typeQueue === 'underflow') {
    warningBottomQueue.setAttribute("style", "display:block")
  } 
  else if (typeQueue === 'overflow') {
    warningTopQueue.setAttribute("style", "display:block")
  }
  else {
    warningBottomQueue.setAttribute("style", "display:none")
    warningTopQueue.setAttribute("style", "display:none")
  }
};

const addToQueue = () => {
  if (counterQueue === 10) {
    typeQueue = "overflow"
  } else {
    typeQueue = ""
  }
  generateWarningQueue(typeQueue)

  if (counterQueue < 10) {
    counterQueue ++
    document.querySelector(".list-queue .inactive").classList.add("active")
    document.querySelector(".list-queue .inactive").classList.remove("inactive")
  }
};

const removeFromQueue = () => {
  if (counterQueue === 0) {
    typeQueue = "underflow"
  } else {
    typeQueue = ""
  }
  generateWarningQueue(typeQueue)

  if (counterQueue !== 0) {
    counter--
    const item = document.querySelectorAll(".list-queue .active")
    item[item.length-1].classList.add("inactive")
    item[item.length-1].classList.remove("active")
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
