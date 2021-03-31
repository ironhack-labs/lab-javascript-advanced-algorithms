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
  for (let i = 0; i < 10; i++) {
    const listitem = document.createElement('li');
    listitem.classList.toggle('inactive')
    queueUL.appendChild(listitem);
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.textContent = "Queue Underflow"

    setInterval(() => {
      warningBottomQueue.style.display = 'none';
    }, 5000)

  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block';
    warningTopQueue.textContent = "Queue Overflow"

    setInterval(() => {
      warningTopQueue.style.display = 'none';
    }, 5000)
  }
};

let queueAdd = 0;

const addToQueue = () => {
  if (event.target.id == 'add-queue' && queue.canEnqueue()) {

    let item = queueUL.children.item(queueAdd);

    if (queueInput.value) {
      item.innerText = queueInput.value;
      clearQueueInput();
    }

    item.classList.toggle('inactive')
    item.classList.toggle('active')

    queue.enqueue(`box[${queueAdd}]`);
    queueAdd++;

  } else if (!queue.canEnqueue() && event.target.id == 'add-queue') {

    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  if (event.target.id === 'take-queue' && !queue.isEmpty()) {
    let item = queueUL.children.item(queue.queueControl.length - 1);
    item.textContent = "";

    item.classList.toggle('inactive')
    item.classList.toggle('active')

    queue.dequeue();

    console.log(queue)

    queueAdd--;
  } else if (event.target.id === 'take-queue' && queue.isEmpty()) {
    generateWarningQueue('underflow');
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
