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

};

const generateListQueue = () => {

};

generateListQueue();

const generateWarningQueue = (type) => {
    if (type === 'underflow') {

    } else if (type === 'overflow') {

    }
};

const addToQueue = () => {
    try {

    } catch (error) {

    }
};

const removeFromQueue = () => {
    try {

    } catch (error) {
        
    }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
