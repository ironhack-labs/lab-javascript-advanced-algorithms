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
    //TODO: Crear la lista
    queueUL.innerHTML = '';
    //TODO: Controlamos el tamaño del queueControl y sacamos la diferencia de cuantas celdas tenemos ocupadas
    const displaySize = queue.display().length;
    const sizeResult = queue.MAX_SIZE - displaySize;

    //TODO: Por cada elemento ocupado creamos un li con clase active y le insertamos el texto de cada item a traves de un map
    queue.display().forEach(item => {
        let listLi = document.createElement('li');
        listLi.className = 'active';
        listLi.innerText = item;
        queueUL.appendChild(listLi);
    });

    //TODO: Por cada elemento libre creamos un li con clase inactive
    for (let i = 0; i < sizeResult; i++) {
        let listLi = document.createElement('li')
        listLi.className = 'inactive'
        queueUL.appendChild(listLi)
    }


    warningTopQueue.style.display = 'none'
    warningBottomQueue.style.display = 'none'

};

generateListQueue();



const generateWarningQueue = type => {
    if (type === 'underflow') {
        // ... your code goes here
        warningBottomQueue.style.display = 'block'
        warningBottomQueue.innerText = type
    } else if (type === 'overflow') {
        // ... your code goes here
        warningTopQueue.style.display = 'block'
        warningTopQueue.innerText = type
    }
};

const addToQueue = () => {
    // ... your code goes here
    if (queue.enqueue(queueInput.value) === 'Stack Overflow') {
        generateWarningQueue('overflow');

    } else {

        clearQueueInput();
        generateListQueue();

    }
};

const removeFromQueue = () => {
    // ... your code goes here
    if (queue.dequeue() === 'Stack Underflow') {
        generateWarningQueue('underflow');
    } else {
        generateListQueue();
    }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);