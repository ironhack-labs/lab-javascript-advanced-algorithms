const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
    queueInput.value = ''
};
let counterLi2 = 0
const generateListQueue = () => {
    const li = document.createElement('li')
    li.setAttribute('class', 'inactive')
    li.innerHTML = '&nbsp';
    queueUL.appendChild(li);
    counterLi2++
    if (counterLi2 < 10) generateListQueue()
};

generateListQueue();
const QueueLis = document.querySelectorAll('.list-queue li');

const generateWarningQueue = type => {
    if (type === 'underflow') {
        warningBottomQueue.innerHTML = 'Queue Underflow'
        warningBottomQueue.getElementsByClassName.display = 'block'
    } else if (type === 'overflow') {
        warningTopQueue.innerHTML = 'Queue Overflow'
        warningTopQueue.getElementsByClassName.display = 'block'
    }
};

const changeStateQueue = (text, length) => {
    QueueLis[length].innerHTML = text
    QueueLis[length].classList.toggle('active')
    QueueLis[length].classList.toggle('inactive')
}

const addToQueue = () => {
    if (queue.enqueue(queueInput.value) === 'Queue Overflow') {
        generateWarningQueue('overflow')
    } else {
        if (warningBottomQueue.style.display === 'block') warningBottomQueue.style.display = 'none';
    }
    const cut = [...QueueLis].slice(0, queue.queueControl.length);
    cut.forEach((li, i) => {
        li.classList.add('active')
        li.innerHTML = queue.queueControl[i]
    })
    clearQueueInput()
};

const removeFromQueue = () => {
    if (queue.dequeue() === 'Queue Underflow') {
        generateWarningQueue('underflow')
    } else {
        if (warningTopQueue.style.display === 'block') warningTopQueue.style.display = 'none'
        const cut = [...QueueLis].slice(queue.queueControl.length, QueueLis.length);
        cut.forEach(li => {
            li.classList.remove('active');
            li.innerHTML = '&nbsp';
        })
    }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);