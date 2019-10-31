let queue = new QueueDataStructure
queue.MAX_SIZE = document.getElementsByClassName('white').length
let qNumber = document.getElementsByClassName('white')
let textQ = document.getElementsByTagName('input')[1]

function addQueue() {
    queue.enqueue(textQ.value)
    //let number = queue.queueControl.length - 1
    for (let i = 0; i < queue.queueControl.length; i++) {
        qNumber[i].innerText = queue.queueControl[i]
    }
    //qNumber[number].innerText = textQ.value
    //console.log(queue.queueControl)
}

function minusQueue() {
    queue.dequeue()
    for (let i = queue.queueControl.length; i >= 0; i--) {
        qNumber[i].innerText = queue.queueControl[i]
    }
    qNumber[queue.queueControl.length].innerText = ""
}
//Botones
let bttonQueue = document.getElementsByTagName('button')[2]
bttonQueue.onclick = () => {
    if (queue.canEnqueue()) {
        addQueue()
    } else {
        alert("Ya esta lleno")
    }

}
let bttonUnqueue = document.getElementsByTagName('button')[3]
bttonUnqueue.onclick = () => {
    if (queue.queueControl.length == 0) {
        alert("No queda nada")
    } else {
        minusQueue()
    }

}




