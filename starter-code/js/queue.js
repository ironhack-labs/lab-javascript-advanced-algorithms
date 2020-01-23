let queueData = new QueueDataStructure();
let olQueue = document.getElementById('queue')
let queueArray = document.getElementById('queueArray');
let enqueue = document.getElementById('enqueue');
let dequeue = document.getElementById('dequeue');

enqueue.addEventListener('click', function () {

    console.log(queueArray.value)
    queueData.enqueue(queueArray.value);
    console.log(queueData.queueControl)
    let newQueue = document.createElement('li');

    if (queueData.queueControl.length < 10) {
        olQueue.appendChild(newQueue);
        newQueue.innerHTML = `${queueArray.value}`
        console.log(queueData.queueControl.length)
    } else if (queueData.queueControl.length = 10) {
        newQueue.innerHTML = `Queue Overflow`
        olQueue.appendChild(newQueue);
    }


});

dequeue.addEventListener('click', function () {

    queueData.dequeue();
    console.log(queueData.queueControl)
    toErase = queueData.queueControl.length;

    if (queueData.queueControl.length > 0) {
        //ol.appendChild(newStack);
        olQueue.removeChild(olQueue.childNodes[toErase]);
        //newStack.innerHTML = `${stackArray.value}`
        console.log(queueData.queueControl.length)
    } else if (queueData.queueControl.length = 10) {
        newQueue.innerHTML = `Queue Underflow`;
        olQueue.removeChild(olQueue.childNodes[toErase]);
    }



});