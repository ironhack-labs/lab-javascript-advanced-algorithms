let queue = new QueueDataStructure()

let addQueueButton = document.getElementById('addQueue')
let takeQueueButton = document.getElementById("takeQueue")
let elementosQueue = document.getElementsByClassName("queue")
let textQueue = document.getElementById("nameQueue")

function addQueue() {
    queue.enqueue(textQueue.value)
    for(i=0; i< queue.queueControl.length; i++) {
    elementosQueue[i].innerText = queue.queueControl[i]
    elementosQueue[i].style.backgroundColor = "green"
    }       
    console.log(queue.queueControl)
}

function takeQueue() {
    queue.dequeue()
    for(let i=queue.queueControl.length; i>=0; i--) {
        elementosQueue[i].innerText = queue.queueControl[i]       
    }
    elementosQueue[queue.queueControl.length].innerText=""
    elementosQueue[queue.queueControl.length].style.backgroundColor="white"

        // (elementosQueue.length-1).innerText = ""
        // elementosQueue[i].style.backgroundColor = "green"
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
 } else {
     takeQueue()
 }
    
})
