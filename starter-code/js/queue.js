var queue = new QueueDataStructure();
var queueButton = document.getElementById('add-queue');
var deleteQueueButton = document.getElementById('delete-queue');
var queueInput = document.getElementById('queue-input');
var queueSlots = document.getElementsByClassName('queue-element');
var lastQueueCleared = document.getElementById('cleared-queue-element')
var queueSlotCounter = queueSlots.length-1


queueButton.onclick = function(){
    queue.enqueue(queueInput.value);
    printQueue();
}

deleteQueueButton.onclick = function(){
    if (queue.isEmpty()==true){
        queueSlots[0].innerHTML = "Queue Underflow";
        queueSlots[0].style.backgroundColor = "#f7dfe1";
        queueSlots[0].style.color = "red";
        queueSlots[0].style.border = "1px solid red"
    } else {
        lastQueueCleared.innerHTML = queue.queueControl[queue.queueControl.length-1];
        queueSlots[queueSlots.length-1].innerHTML = null;
        queueSlots[queueSlots.length-1].style.backgroundColor = null;
        queueSlots[queueSlots.length-1].style.color = null;
        queueSlots[queueSlots.length-1].style.border = null;
        queue.dequeue();
        printQueue();
    }

}


function printQueue(){
    
    /*slots[slotcounter].style.backgroundColor = null;
    slots[slotcounter].style.color = null;
    slots[slotcounter].style.border = null;*/
    if (queue.canEnqueue() == false){
        queueSlots[queueSlots.length-1].innerHTML = "Queue Overflow";
        queueSlots[queueSlots.length-1].style.backgroundColor = "#f7dfe1";
        queueSlots[queueSlots.length-1].style.color = "red";
        queueSlots[queueSlots.length-1].style.border = "1px solid red"
    } else {
        queueSlots[0].innerHTML = null;
        queueSlots[0].style.backgroundColor = null;
        queueSlots[0].style.color = null;
        queueSlots[0].style.border = null;
        for (i=0; i<queueSlots.length; i++){
            queueSlots[i].innerHTML = "";
        }
        for (i=0; i < queue.queueControl.length; i++){
            queueSlots[i].innerHTML = queue.queueControl[i];
        }


}
}

/*function clearStack(){
    slots[0].innerHTML = null;
    slots[0].style.backgroundColor = null;
    slots[0].style.color = null;
    slots[0].style.border = null;
    let cuantos = stack.stackControl.length;
    slots[slotcounter-cuantos].innerHTML = '';
    
}*/