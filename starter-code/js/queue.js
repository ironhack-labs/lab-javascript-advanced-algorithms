var queue = new QueueDataStructure;
var addQueue = document.querySelector("#addQueue");

addQueue.onclick = () => {
    var inputQueue = document.querySelector("#newQueue").value;
    queue.enqueue(inputQueue);
    for (let index = queue.queueControl.length -1; index >= 0 ; index--) {
        document.querySelector(`#que${index}`).innerHTML = queue.queueControl[index];
        
        //  debugger
     }
     if (push === "Stack Overflow") {
        alert("Stack Overflow");
    };

}

var removeQueue = document.querySelector("#removeQueue");

removeQueue.onclick = () => {
    let dequeue = queue.dequeue();
    let i = queue.queueControl.length;
    document.querySelector(`#que${i}`).innerHTML = "";
    if (dequeue === 'Queue Underflow') {
            alert('Queue Underflow');
    }

}