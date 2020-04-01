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
  queueInput.value = ''
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
    console.log("underflow")
  } else if (type === 'overflow') {
    console.log("overflow")
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
  const activeQueueElements = document.querySelectorAll('.queue-element.active')
  const isUnderflow = queue.isEmpty()

  if (isUnderflow) {
    generateWarningQueue('underflow')
  } else {
    if (warningTopQueue.style.display == 'block') {
      warningTopQueue.style.display = 'none'
    }
    activeQueueElements[0].innerHTML = ''
    activeQueueElements[0].classList.remove(
      'active'
    )
    activeQueueElements[0].classList.add(
      'inactive'
    )
    queue.dequeue()
  }
}

addQueue.addEventListener('click', addToQueue)
dequeue.addEventListener('click', removeFromQueue)
