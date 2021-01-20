const queueUL = document.querySelector('.list-queue')
const queueInput = document.querySelector('.queue-input')
const warningTopQueue = document.querySelector('#queue-container .warning-top')
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom')
const addQueue = document.querySelector('.btn-add-queue')
const dequeue = document.querySelector('.btn-take-dequeue')

const queue = new QueueDataStructure()

const clearQueueInput = () => {
  queueInput.value = ''
}

const generateListQueue = () => {       // Así mejor :)
  queueUL.querySelectorAll('li.active').forEach((elm, i) => {
    elm.textContent = queue.queueControl[i]
  })
  queueUL.querySelectorAll('li.inactive').forEach(elm => {
    elm.textContent = ''
  })
}

generateListQueue()

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.innerHTML = type
    warningBottomQueue.className = 'alert alert-danger'
  } else if (type === 'overflow') {
    warningTopQueue.innerHTML = type
    warningTopQueue.className = 'alert alert-danger'
  }
}

const addToQueue = () => {
  if (queue.canEnqueue()) {
    if (queue.isEmpty()) {
      warningBottomQueue.className = "warning-top alert alert-danger"
    }
    queue.enqueue(queueInput.value)
    queueUL.querySelector('.inactive').className = 'active'
    generateListQueue()
    clearQueueInput()
  } else {
    generateWarningQueue('overflow')
    clearQueueInput()
  }
}

const removeFromQueue = () => {
  if (!queue.isEmpty()) {
    if (!queue.canEnqueue()) {
      warningTopQueue.className = "warning-bottom alert alert-danger"
    }
    queue.queueControl.pop()
    queueUL.querySelectorAll('.active')[queueUL.querySelectorAll('.active').length - 1].className = 'inactive'
    generateListQueue()
  } else {
    generateWarningQueue('underflow')
  }
}

addQueue.addEventListener('click', addToQueue)
dequeue.addEventListener('click', removeFromQueue)
