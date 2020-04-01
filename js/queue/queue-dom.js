const queueUL = document.querySelector('.list-queue')
const queueInput = document.querySelector('.queue-input')
const warningTopQueue = document.querySelector('#queue-container .warning-top')
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
)
const addQueue = document.querySelector('.btn-add-queue')
const dequeue = document.querySelector('.btn-take-dequeue')
const queueTemplate = document.querySelector('#queue-list .template')

const queue = new QueueDataStructure()

const clearQueueInput = () => {
  // ... your code goes here
}

const generateListQueue = () => {
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    const queueNode = queueTemplate.cloneNode()
    queueNode.classList = 'queue-element inactive'
    queueUL.append(queueNode)
  }
}

generateListQueue()

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
}

const addToQueue = () => {
  const inactiveQueueElements = document.querySelectorAll(
    '.queue-element.inactive'
  )
  const canEnqueue = queue.canEnqueue()

  if (!canEnqueue) {
    generateWarningQueue('overflow')
  } else {
    if (warningBottomQueue.style.display == 'block') {
      warningBottomQueue.style.display = 'none'
    }
    inactiveQueueElements[0].innerHTML = queueInput.value

    inactiveQueueElements[0].classList.remove('inactive')
    inactiveQueueElements[0].classList.add('active')
    queue.enqueue(queueInput.value)
    clearQueueInput()
  }
}

const removeFromQueue = () => {
  // ... your code goes here
}

addQueue.addEventListener('click', addToQueue)
dequeue.addEventListener('click', removeFromQueue)
