btnAdd = document.getElementById("add-queue");
btnTake = document.getElementById("take-queue");

btnAdd.onclick = function() {
    queueInitial = new QueueDataStructure();
    queueInitial=getQueue();

    let queueFinal = queueInitial.enqueue(document.getElementById("queue-input").value);

    if (typeof queueFinal === "string") {
        alert(queueFinal)
    }
    else {displayQueue(queueInitial);}
}

btnTake.onclick = function() {
    queueInitial = new QueueDataStructure();
    queueInitial=getQueue();

    let queueFinal = queueInitial.dequeue(document.getElementById("queue-input").value);

    if (queueFinal === 'Queue Underflow') {
        alert(queueFinal)
    }
    else {
        queueInitial.queueControl.pop();
        displayQueue(queueInitial);
    }
}

function getQueue() {
    
    queuedArray = [];
    let elems=document.getElementsByClassName("element-queue");

    for (let i=0; i<elems.length;i++) {
        if (elems[i].textContent!="") {queuedArray.push(elems[i].textContent);}
    }

    queueAdd = new QueueDataStructure();
    queueAdd.MAX_SIZE=elems.length;
    queueAdd.queueControl=queuedArray

    return queueAdd

}

function displayQueue(queue) {
    
    let elems=document.getElementsByClassName("element-queue");
    
    for (let i=0;i<elems.length;i++) {
        if (i<queue.queueControl.length) {
            elems[i].textContent=queue.queueControl[i];
        }
        else {elems[i].textContent=""}
    }

}

