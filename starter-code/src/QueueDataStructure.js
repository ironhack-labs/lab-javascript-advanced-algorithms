class QueueDataStructure {
    queueControl = []
    MAX_SIZE = 10
    isEmpty() {
        if (this.queueControl.length > 0) {
            return false
        } else {
            return true
        }
    }
    canEnqueue() {
        if (this.queueControl.length == this.MAX_SIZE) {
            return false
        } else {
            return true
        }
    }
    enqueue(num) {
        if (this.canEnqueue() == true) {
            this.queueControl.unshift(num)
            return this.queueControl
        } else {
            return 'Queue Overflow'
        }
    }
    dequeue() {
        if (this.queueControl.length == 0) {
            return 'Queue Underflow'
        } else {
            return this.queueControl.pop()
        }
    }
}

let newQueue = new QueueDataStructure();
let myQueueArray = document.querySelectorAll(".queueBox")

document.getElementById("addQueue").addEventListener('click', addQueueFunction)
function addQueueFunction() {
    let newElement = document.getElementById("inputQueue").value;
    newQueue.enqueue(newElement);
    document.getElementById('inputQueue').value = "";
    for (let index = 0; index < newQueue.queueControl.length; index++) {
        myQueueArray[index].innerHTML = newQueue.queueControl[index];
    }
}

document.getElementById("takeQueue").addEventListener('click', takeQueueFunction)
function takeQueueFunction() {
    newQueue.dequeue();
    let i = newQueue.queueControl.length
    myQueueArray[i].innerHTML = ""
}