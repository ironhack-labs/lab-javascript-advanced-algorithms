const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
  inputName = queueInput.value = ""
};

const generateListQueue = () => {
  // ... your code goes here
  inputName = queueInput.value
  return inputName

};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {

    // ... your code goes here
    warningBottomQueue.style.display = "block"
    warningBottomQueue.textContent = 'underflow'

  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.style.display = "block"
    warningTopQueue.textContent = 'overflow'
  }
};

const addToQueue = () => {
  // ... your code goes here
  inputName = generateListQueue()

  if (queue.canEnqueue()) {
    queueArray = queue.enqueue(1)
    const liElems = document.querySelectorAll("#queue-list> li")
    warningBottomQueue.style.display = "none"
    warningBottomQueue.textContent = ''

    if (queueArray.length > 1) {

      for (let i = queueArray.length - 1; i >= 1; i--) {

        liElems[i].textContent = liElems[i - 1].textContent
        liElems[i].classList.add('active')
        liElems[i].classList.remove('inactive')

      }
    }

    liElems[0].classList.add('active')
    liElems[0].classList.remove('inactive')
    liElems[0].textContent = inputName

    clearQueueInput()

  }
  else {

    value = 'overflow'
    generateWarningQueue(value)
  }

};

const removeFromQueue = () => {
  // ... your code goes here
  if (queue.isEmpty()) {

    value = 'underflow'
    generateWarningQueue(value)

  } else {

    queue.dequeue()
    queueArray = queue.queueControl.shift()

    queueLength = queue.queueControl.length
    let liElemsActive = document.querySelectorAll("#queue-list> li.active")

    warningTopQueue.style.display = "none"
    warningTopQueue.textContent = ''
    liElemsActive[queueLength].classList.add('inactive')
    liElemsActive[queueLength].classList.remove('active')
    liElemsActive[queueLength].textContent = ''

  }

};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
