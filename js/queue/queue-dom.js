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
    const element = 10[i];

    const newSlot = document.createElement('li')
    newSlot.classList.add('inactive', 'queue')
    queueUL.appendChild(newSlot)

  }

};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToQueue = () => {

  const textToAdd = queueInput.value

  // We can add the item
  if (queue.enqueue(textToAdd) !== 'Queue Overflow') {

    // If we're adding the first element we hide the bottom warning
    if (queue.queueControl.length === 1) {

      warningBottomQueue.style.display = 'none'
      warningBottomQueue.textContent = ''

    }

    if (queue.queueControl.length !== 1) {  // If we already had one element into the queue

      // We move all the blue items from the DOM queue one position up

      for (let i = queue.queueControl.length - 2; i >= 0; i--) {

        const originNode = queueUL.childNodes[i]
        const targetNode = queueUL.childNodes[i + 1]

        // We change the visual style of the target (next) slot
        targetNode.classList.remove('inactive')
        targetNode.classList.add('active')
        targetNode.textContent = originNode.textContent

      }

    } else {  // If we didn't have any element into the queue

      queueUL.childNodes[0].classList.remove('inactive')
      queueUL.childNodes[0].classList.add('active')

    }

    // Now we add the new element into the first position

    // We store the item we want to "display" into the DOM
    const targetItem = queueUL.childNodes[0]

    // We "display" it
    targetItem.textContent = textToAdd

    clearQueueInput()

  } else {

    // If stack is full we display the top warning
    warningTopQueue.style.display = 'block'
    warningTopQueue.textContent = 'overflow'

  }

};

const removeFromQueue = () => {

  // If we can remove the element
  if (queue.dequeue() !== 'Queue Underflow') {

    // If stack is full when we remove we hide the warning even if is already hide
    if (queue.queueControl.length + 1 === newStack.MAX_SIZE) {

      warningTopQueue.style.display = 'none'
      warningTopQueue.textContent = ''

    }

    // We store the element we have to "remove" from the DOM
    const lastItem = queueUL.childNodes[queue.queueControl.length]

    lastItem.classList.remove('active')
    lastItem.classList.add('inactive')

    lastItem.textContent = ""

  } else {  // If we cannot, means that the stack is empty so we display the bottom warning

    warningBottomQueue.style.display = 'block'
    warningBottomQueue.textContent = 'underflow'

  }

};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
