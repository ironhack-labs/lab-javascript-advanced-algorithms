const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
    // ... your code goes here
    queueInput.value = ''

};

const generateListQueue = () => {
    // ... your code goes here
    document.querySelector('#queue-container .warning-bottom').style.display = 'none'
    document.querySelector('#queue-container .warning-top').style.display = 'none'
    const queueItems = queueUL.querySelectorAll('li')
    queueItems.forEach((elm, idx) => {
        const queueItem = queue.queueControl[idx]
        if (queueItem || queueItem === '') {
            elm.className = 'active'
            elm.textContent = queueItem
        } else {
            elm.className = 'inactive'
            elm.textContent = ''
        }
    })
    clearQueueInput()
};

generateListQueue();

const generateWarningQueue = type => {
    let warningMsg

    if (type === 'underflow') {
        // ... your code goes here
        warningMsg = document.querySelector('#queue-container .warning-bottom')
        warningMsg.textContent = 'Queue Underflow'
    } else if (type === 'overflow') {
        // ... your code goes here
        warningMsg = document.querySelector('#queue-container .warning-top')
        warningMsg.textContent = 'Queue Overflow'
    }
    warningMsg.style.display = 'block'

};

const addToQueue = () => {
    // ... your code goes here
    const queuedItem = queue.enqueue(queueInput.value)
    if (queuedItem === 'Queue Overflow') {
        generateWarningQueue('overflow')
    } else {
        generateListQueue()
    }
};

const removeFromQueue = () => {
    // ... your code goes here
    const dequeuedItem = queue.dequeue()
    if (dequeuedItem === 'Queue Underflow') {
        generateWarningQueue('underflow')
    } else {
        generateListQueue()

    }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);