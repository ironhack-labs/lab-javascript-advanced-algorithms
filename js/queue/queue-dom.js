const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
    queueInput.value = '';
};

const generateListQueue = () => {
    queueUL.innerHTML = '';
    for (i = 0; i < queue.MAX_SIZE; i++) {
        const newLi = document.createElement('li');
        if (queue.queueControl[i] !== undefined) newLi.innerText = queue.queueControl[i];
        else newLi.innerHTML = '&nbsp;'
        if (newLi.innerHTML !== '&nbsp;') newLi.classList.add('active')
        else newLi.classList.add('inactive')
        queueUL.appendChild(newLi)
    }
};

generateListQueue();

const generateWarningQueue = type => {
    if (queue.isEmpty() && type === 'underflow') {
        warningBottomQueue.innerText = type;
        warningBottomQueue.style.display = 'block';
    } else if (!queue.canEnqueue() && type === 'overflow') {
        warningTopQueue.innerText = type;
        warningTopQueue.style.display = 'block';
    } else {
        warningBottomQueue.style.display = 'none';
        warningTopQueue.style.display = 'none';
    }
};

const addToQueue = () => {
    const newEl = queueInput.value;
    clearQueueInput();
    generateWarningQueue('overflow');
    queue.enqueue(newEl);
    generateListQueue();
};

const removeFromQueue = () => {
    generateWarningQueue('underflow');
    queue.dequeue();
    generateListQueue();
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);