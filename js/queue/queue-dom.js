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
  let queueLength = queue.queueControl.length;
  let queueLi = document.querySelectorAll("#queue-list li");

  queueLi[queueLength].className = "inactive";
  queueLi[queueLength].textContent = "";
};

const generateListQueue = () => {
  let li = document.createElement("li");
  li.className = "inactive";

  for (let i = 0; i < queue.MAX_SIZE; i++) {
    queueUL.appendChild(li.cloneNode());
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    warningTopQueue.style.display = "block";
    warningTopQueue.textContent = type;
  } else if (type === 'overflow') {
    warningTopQueue.style.display = "block";
    warningTopQueue.textContent = type;
  }
};

const addToQueue = () => {
  try {
    let newQueueItem = queueInput.value;
    let updatedQueue = queue.enqueue(newQueueItem).reverse();
    let queueLi = document.querySelectorAll("#queue-list li");

    for (let i = 0; i < updatedQueue.length; i++) {
      queueLi[i].className = "active";
      queueLi[i].textContent = updatedQueue[i];
    }

    if (warningTopQueue.textContent = "underflow") {
      warningTopQueue.style.display = "none";
    }
  } catch (error) {
    generateWarningQueue('overflow');
  }

  queueInput.value = "";
};

const removeFromQueue = () => {
  try {
    queue.dequeue();
    clearQueueInput();

    if (warningTopQueue.textContent = "overflow") {
      warningTopQueue.style.display = "none";
    }
  } catch (error) {
    generateWarningQueue('underflow');
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
