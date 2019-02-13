var queue = new QueueDataStructure();

var queuer = document.querySelector("#adder-queue")
var dequeuer = document.querySelector("#taker-queue")
var textNumber = document.querySelector("#text-entry-queue")
var emptyQueue = document.querySelectorAll(".empty-queue")
var elementDequed = document.querySelector("#queue-pop")



queuer.onclick= function (){
    if(queue.canEnqueue()===true){
        var reference = queue.queueControl.length
        queue.enqueue(textNumber.value)
        if (reference==0){
            emptyQueue[reference].className="queue-added"
            emptyQueue[reference].innerHTML=textNumber.value
        }
        else{
            for(var i =reference;i>0;i--){
                emptyQueue[i].innerHTML=emptyQueue[i-1].innerHTML
                emptyQueue[reference].className="queue-added"
            }
            emptyQueue[0].innerHTML=textNumber.value
        }
    }
    else{
        var queueParent = document.querySelector("#queue")
        var firstQueueContainer = document.querySelector(".queue-added")
        var queueOverflow = document.createElement('div')
        queueOverflow.className="queue-overflow"
        console.log(queueOverflow)
        var text = document.createTextNode("Queue Overflow")
        queueOverflow.appendChild(text)
        queueParent.insertBefore(queueOverflow,firstQueueContainer)
    }
    textNumber.value = ""
}

dequeuer.onclick= function (){
    if(queue.isEmpty()===true){
        var queueParent = document.querySelector("#queue")
        var queueUnderflow = document.createElement('div')
        queueUnderflow.className="queue-overflow"
        console.log(queueUnderflow)
        var text = document.createTextNode("Queue Underflow")
        queueUnderflow.appendChild(text)
        queueParent.appendChild(queueUnderflow)
        console.log("Can't take a number. The stack is empty!")
    }
    else{
        var reference = queue.queueControl.length - 1
        elementDequed.innerHTML = emptyQueue[reference].innerHTML
        emptyQueue[reference].className="empty-queue"
        emptyQueue[reference].innerHTML=""
        queue.dequeue()
    }
}