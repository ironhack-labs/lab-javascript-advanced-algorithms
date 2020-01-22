let queue = new QueueDataStructure();

printList();

let addQueue = document.getElementById("add-queue").addEventListener("click", addQueueItem);
let takeQueue = document.getElementById("take-queue").addEventListener("click", takeQueueItem);
let valueQueueInput = '';
let queueItemsEmpty = '';
let queueItemsFull = '';

function printList() {

    let queueDOMEl = document.querySelector('.queue');
    let queueItem = '';

    for (i = 0; i < queue.MAX_SIZE; i++) {
        queueItem = document.createElement('li');
        queueItem.classList.add('empty');
        queueDOMEl.appendChild(queueItem);
    }
}

function addQueueItem() {
    valueQueueInput = document.querySelector('.input-queue').value;
    if (valueQueueInput == '') {
        alert("You must put a value")
    } else {
        if (queue.canEnqueue()) {

            let takeErrorQueueDivDOMEl = document.getElementById("errorTakeQueue");
            takeErrorQueueDivDOMEl.style.display = "none";
            takeErrorQueueDivDOMEl.disabled = false;
            let takeQueue = document.getElementById("take-queue")
            takeQueue.classList.remove('disabled');


            queueItemsEmpty = document.querySelectorAll('.empty');
            queueItemsEmpty[queueItemsEmpty.length - 1].innerHTML = valueQueueInput;
            queueItemsEmpty[queueItemsEmpty.length - 1].classList.remove('empty');
            queueItemsEmpty[queueItemsEmpty.length - 1].classList.add('full');
            queueItemsEmpty[queueItemsEmpty.length - 1].classList.add('list-group-item');
            queue.enqueue(valueStackInput);
        } else {
            let queueErrorDivDOMEl = document.getElementById("errorAddQueue");
            queueErrorDivDOMEl.style.display = "block";
            queueErrorDivDOMEl.disabled = true;
            let addQueue = document.getElementById("add-queue")
            addQueue.classList.add('disabled');
        }
    }


}

function takeQueueItem() {
    let queueErrorDivDOMEl = document.getElementById("errorAddQueue");
    queueErrorDivDOMEl.style.display = "none";
    let addQueue = document.getElementById("add-queue")
    addQueue.classList.remove('disabled');

    if (queue.dequeue()) {
        let takeErrorQueueDivDOMEl = document.getElementById("errorTakeQueue");
        takeErrorQueueDivDOMEl.style.display = "block";
        takeErrorQueueDivDOMEl.disabled = true;
        let takeQueue = document.getElementById("take-queue")
        takeQueue.classList.add('disabled');
    } else {
        queueItemsFull = document.querySelectorAll('.full');
        queueItemsFull[queueItemsFull.length - 1].innerHTML = '';
        queueItemsFull[queueItemsFull.length - 1].classList.remove('full');
        queueItemsFull[queueItemsFull.length - 1].classList.add('empty');
    }
}

