let queue = new QueueDataStructure()

let addQueueButton = document.getElementById('addQueue')
let takeQueueButton = document.getElementById("takeQueue")
let elementosQueue = document.getElementsByClassName("queue")
let textQueue = document.getElementById("nameQueue")

function addQueue() {
    queue.enqueue(textQueue.value)
    let num = queue.queueControl.length -1
    elementosQueue[num].innerText = textQueue.value
    elementosQueue[num].style.backgroundColor = "green"
}

function takeQueue() {
    
    let num = queue.queueControl.length
    elementosQueue[num].innerText = ""
    elementosQueue[num].style.backgroundColor = "white"
}


addQueueButton.addEventListener("click", function () {
if(queue.canEnqueue()){
    addQueue()
} else {
    alert("Queue Overflow")
}
})

takeQueueButton.addEventListener("click", function () {
    if(queue.isEmpty()){
        alert("Queue Underflow")
    } else if (queue.dequeue()){    
        takeQueue()
    }
    })